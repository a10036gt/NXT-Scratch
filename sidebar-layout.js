/* NXT:Scratch sidebar sizing. Load after Blockly and before app.min.js. */
(function () {
    'use strict';

    if (typeof Blockly === 'undefined' || !Blockly.VerticalFlyout ||
            !Blockly.Toolbox || Blockly.Toolbox.prototype.nxtSidebarLayout_) {
        return;
    }
    Blockly.Toolbox.prototype.nxtSidebarLayout_ = true;

    var CATEGORY_WIDTH = 140;
    var MIN_BLOCK_WIDTH = 360;
    var MIN_WORKSPACE_WIDTH = 320;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.textContent = [
        '.blocklyToolboxDiv .scratchCategoryMenu:not(.scratchCategoryMenuHorizontal) {',
        '  width: ' + CATEGORY_WIDTH + 'px; box-sizing: border-box;',
        '}',
        '.blocklyToolboxDiv .scratchCategoryMenu:not(.scratchCategoryMenuHorizontal) .scratchCategoryMenuItem {',
        '  display: flex; align-items: center; box-sizing: border-box;',
        '  min-height: 44px; padding: 8px 10px; text-align: left;',
        '}',
        '.blocklyToolboxDiv .scratchCategoryMenu:not(.scratchCategoryMenuHorizontal) .scratchCategoryItemBubble,',
        '.blocklyToolboxDiv .scratchCategoryMenu:not(.scratchCategoryMenuHorizontal) .scratchCategoryItemIcon {',
        '  flex-shrink: 0; margin: 0 10px 0 0;',
        '}',
        '.blocklyToolboxDiv .scratchCategoryMenu:not(.scratchCategoryMenuHorizontal) .scratchCategoryMenuItemLabel {',
        '  flex: 1; min-width: 0; white-space: normal; overflow: visible;',
        '  text-overflow: clip; word-wrap: break-word; line-height: 1.25;',
        '}'
    ].join('\n');
    document.head.appendChild(style);

    function categoryWidth(toolbox) {
        var menu = toolbox.categoryMenu_ && toolbox.categoryMenu_.table;
        return menu && menu.offsetWidth ? menu.offsetWidth : CATEGORY_WIDTH;
    }

    var originalFlyoutWidth = Blockly.VerticalFlyout.prototype.getWidth;
    Blockly.VerticalFlyout.prototype.getWidth = function () {
        if (!this.parentToolbox_) {
            return originalFlyoutWidth.call(this);
        }
        var desiredWidth = MIN_BLOCK_WIDTH;
        if (this.workspace_) {
            var bounds = this.getContentBoundingBox_();
            var scale = this.workspace_.scale;
            var padding = 2 * this.MARGIN + Blockly.Scrollbar.scrollbarThickness;
            if (bounds && isFinite(bounds.width) && isFinite(scale)) {
                desiredWidth = Math.max(desiredWidth, Math.ceil(bounds.width * scale + padding));
            }
        }
        var svg = this.targetWorkspace_ && this.targetWorkspace_.getParentSvg();
        var availableWidth = svg && Blockly.svgSize(svg).width;
        if (availableWidth > 0) {
            var maxWidth = Math.max(MIN_BLOCK_WIDTH,
                availableWidth - categoryWidth(this.parentToolbox_) - MIN_WORKSPACE_WIDTH);
            desiredWidth = Math.min(desiredWidth, maxWidth);
        }
        return desiredWidth;
    };

    var originalToolboxWidth = Blockly.Toolbox.prototype.getWidth;
    Blockly.Toolbox.prototype.getWidth = function () {
        if (this.horizontalLayout_ || !this.flyout_) {
            return originalToolboxWidth.call(this);
        }
        return categoryWidth(this) + this.flyout_.getWidth();
    };

    var originalReflow = Blockly.VerticalFlyout.prototype.reflowInternal_;
    Blockly.VerticalFlyout.prototype.reflowInternal_ = function (blocks) {
        originalReflow.call(this, blocks);
        if (this.parentToolbox_ && this.targetWorkspace_ &&
                !this.nxtSidebarResizing_ && this.width_ !== this.getWidth()) {
            this.nxtSidebarResizing_ = true;
            try {
                this.targetWorkspace_.resize();
            } finally {
                this.nxtSidebarResizing_ = false;
            }
        }
    };
}());
