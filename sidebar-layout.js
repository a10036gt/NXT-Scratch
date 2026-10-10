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
    style.textContent += [
        '.nxtSidebarToggle { position: absolute; bottom: 12px; left: 2px; width: 36px; height: 36px;',
        '  border: none; border-radius: 50%; padding: 0; margin: 0; background: transparent;',
        '  box-shadow: none; cursor: pointer; z-index: 2; line-height: 0;',
        '  -webkit-appearance: none; appearance: none; }',
        '.nxtSidebarToggle:hover, .nxtSidebarToggle:active, .nxtSidebarToggle:focus {',
        '  outline: none; box-shadow: none; transform: none; background: transparent; }',
        '.nxtSidebarToggle svg { display: block; width: 36px; height: 36px; pointer-events: none; }',
        '.blocklyToolboxDiv.nxtSidebarCollapsible .scratchCategoryMenu { padding-bottom: 56px; }',
        '.blocklyToolboxDiv.nxtSidebarCollapsed .scratchCategoryMenu { display: none; }'
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
        return this.nxtSidebarCollapsed_ ? 40 : categoryWidth(this) + this.flyout_.getWidth();
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

    function updateToggle(toolbox) {
        var locale = window.i18n && window.i18n.getLocale ? window.i18n.getLocale() : 'en';
        var labels = {
            en: ['Collapse block selection', 'Expand block selection'],
            de: ['Blockauswahl einklappen', 'Blockauswahl ausklappen'],
            fr: ['Replier la palette de blocs', 'Afficher la palette de blocs']
        };
        var label = (labels[locale] || labels.en)[toolbox.nxtSidebarCollapsed_ ? 1 : 0];
        toolbox.nxtSidebarChevron_.setAttribute('d', toolbox.nxtSidebarCollapsed_ ? 'M15 11l7 7-7 7' : 'M21 11l-7 7 7 7');
        // Use the accessible label without a native rectangular hover tooltip.
        toolbox.nxtSidebarToggle_.setAttribute('aria-label', label);
        toolbox.nxtSidebarToggle_.setAttribute('aria-expanded', String(!toolbox.nxtSidebarCollapsed_));
    }

    var originalPosition = Blockly.Toolbox.prototype.position;
    Blockly.Toolbox.prototype.position = function () {
        originalPosition.call(this);
        if (this.horizontalLayout_ || !this.HtmlDiv || !this.categoryMenu_) {
            return;
        }
        if (!this.nxtSidebarToggle_) {
            var toolbox = this;
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'nxtSidebarToggle';
            var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            icon.setAttribute('viewBox', '0 0 36 36');
            icon.setAttribute('aria-hidden', 'true');
            icon.setAttribute('focusable', 'false');
            var rim = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            rim.setAttribute('cx', '18');
            rim.setAttribute('cy', '18');
            rim.setAttribute('r', '18');
            rim.setAttribute('fill', '#231f20');
            rim.setAttribute('opacity', '0.15');
            icon.appendChild(rim);
            var face = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            face.setAttribute('cx', '18');
            face.setAttribute('cy', '18');
            face.setAttribute('r', '16');
            face.setAttribute('fill', '#fff');
            icon.appendChild(face);
            var chevron = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            chevron.setAttribute('fill', 'none');
            chevron.setAttribute('stroke', '#575e75');
            chevron.setAttribute('opacity', '0.75');
            chevron.setAttribute('stroke-width', '1.5');
            chevron.setAttribute('stroke-linecap', 'round');
            chevron.setAttribute('stroke-linejoin', 'round');
            icon.appendChild(chevron);
            button.appendChild(icon);
            this.nxtSidebarChevron_ = chevron;
            button.addEventListener('mousedown', function (event) { event.stopPropagation(); });
            button.addEventListener('click', function (event) {
                event.stopPropagation();
                toolbox.nxtSidebarCollapsed_ = !toolbox.nxtSidebarCollapsed_;
                toolbox.workspace_.resize();
            });
            this.nxtSidebarToggle_ = button;
            this.HtmlDiv.appendChild(button);
        }
        this.HtmlDiv.classList.add('nxtSidebarCollapsible');
        this.HtmlDiv.classList.toggle('nxtSidebarCollapsed', !!this.nxtSidebarCollapsed_);
        this.HtmlDiv.style.width = (this.nxtSidebarCollapsed_ ? 40 : CATEGORY_WIDTH) + 'px';
        this.flyout_.svgGroup_.style.display = this.nxtSidebarCollapsed_ ? 'none' : '';
        updateToggle(this);
    };

    var originalClientRect = Blockly.Toolbox.prototype.getClientRect;
    Blockly.Toolbox.prototype.getClientRect = function () {
        if (!this.nxtSidebarCollapsed_) {
            return originalClientRect.call(this);
        }
        var bounds = this.HtmlDiv.getBoundingClientRect();
        return new goog.math.Rect(bounds.left, bounds.top, bounds.width, bounds.height);
    };
}());
