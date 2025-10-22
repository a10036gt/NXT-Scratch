// translations.js
// All UI i18n strings, for blockly i18n strings, please refer to blockly/msg/scratch_msg.js

var I18N_LANG_DISPLAY = {
    'en': 'English',
    'zh-tw': '繁體中文'
};

var I18N_TRANSLATIONS = {
    'zh-tw': {
        // 選單列
        'menu.title': 'NXT:Scratch',
        'menu.sampleRobot': '範例機器人',
        'menu.newFile': '新建檔案',
        'menu.saveFile': '儲存檔案',
        'menu.openFile': '開啟檔案',
        'menu.about': '關於軟體',
        
        // 浮動工具列
        'toolbar.nxtStatus': 'NXT 狀態',
        'toolbar.codeEditor': '切換程式編輯器',
        'toolbar.download': '下載到 NXT',
        'toolbar.run': '下載並執行',
        
        // MyBlock 編輯器
        'myblock.title': 'My Block 編輯器',
        'myblock.addNumber': '+ 數字',
        'myblock.addStringOnly': '+ 純文字',
        'myblock.addBoolean': '+ 布林值',
        'myblock.addLabel': '+ 標籤',
        'myblock.cancel': '取消',
        'myblock.confirm': '確認',
        
        // 錯誤視窗
        'error.title': '錯誤',
        'error.close': '關閉',
        
        // 程式碼編輯器
        'code.title': 'NXC 程式碼',
        
        // NXT 狀態面板
        'status.title': 'NXT 狀態',
        'status.notConnected': 'NXT 主機未連線。',
        'status.driverInstalled': '- 已安裝 NXT 驅動程式嗎？（我們建議安裝 EV3 Lab 軟體）',
        'status.deviceRecognized': '- USB 裝置是否已被識別？如果沒有，請重新啟動您的 NXT 主機。 是否有其他軟體同時運行(NXT-G, EV3-G, BrixCC)?',
        'status.brickName': 'NXT 主機名稱 :',
        'status.batteryVoltage': '電池電壓 :',
        'status.connectionStatus': '連線狀態 :',
        'status.firmwareVersion': '韌體版本 :',
        'status.protocolVersion': '通訊協定版本 :',
        'status.bluetoothAddress': '藍牙位址 :',
        'status.bluetoothSignal': '藍牙訊號 :',
        'status.availableMemory': '可用記憶體 :',
        'status.connected': '已連接',
        'status.renameNXT': '重新命名 NXT',
        'status.fileManager': '檔案管理員',
        'status.screenCapture': '螢幕擷取',
        
        // 通知訊息
        'notify.projectSaved': '專案已儲存！',
        'notify.projectLoaded': '專案已載入！',
        'notify.newProjectCreated': '已建立新專案！',
        'notify.downloadAndRunOK': '下載並執行完成！',
        'notify.downloadOK': '下載完成！',
        'notify.codeDownloaded': '程式碼已下載',
        'notify.saveFailed': '儲存失敗！',
        'notify.loadFailed': '載入失敗：',
        'notify.downloadFailed': '下載失敗',
        'notify.programRunning': '程式正在執行中',
        'notify.needNWJS': '需要 NW.js 環境',
        
        // 對話框
        'dialog.newProjectConfirm': '建立新專案？目前的工作將會遺失。',
        'dialog.unsavedWork': '您有未儲存的工作。確定要關閉而不儲存嗎？',
        'dialog.renamePrompt': '輸入新的 NXT 名稱（字母、數字、-、_，最多 8 個字元）：',
        'dialog.invalidFormat': '格式無效！',
        'dialog.invalidName': '無效的名稱：',
        'dialog.duplicateName': '重複的名稱：',
        'dialog.invalidFunctionName': '無效的函式名稱：',
        
        // 錯誤訊息
        'error.workspaceNotInit': '工作區尚未初始化。',
        'error.invalidFormat': '無效的格式',
        'error.compilationError': '編譯錯誤',
        'error.systemError': '系統錯誤',
        'error.checkList': '請檢查：\n1. nbc.exe狀態。\n2. NeXTTool.exe狀態。\n3. NXT主機是否已連接?\n4. 程式碼是否有錯誤?',
        
        // 其他
        'loading': '載入中...',
        'scratchLoading': 'Scratch Blocks 載入中...\n請確保網路連接正常',
        'bytes': '位元組'
    },
    'en': {
        // Menu bar
        'menu.title': 'NXT:Scratch',
        'menu.sampleRobot': 'Sample Robot',
        'menu.newFile': 'New File',
        'menu.saveFile': 'Save File',
        'menu.openFile': 'Open File',
        'menu.about': 'About',
        
        // Floating toolbar
        'toolbar.nxtStatus': 'NXT Status',
        'toolbar.codeEditor': 'Toggle Code Editor',
        'toolbar.download': 'Download to NXT',
        'toolbar.run': 'Download and Run',
        
        // MyBlock Editor
        'myblock.title': 'My Block Editor',
        'myblock.addNumber': '+ Number',
        'myblock.addStringOnly': '+ String Only',
        'myblock.addBoolean': '+ Boolean',
        'myblock.addLabel': '+ Label',
        'myblock.cancel': 'Cancel',
        'myblock.confirm': 'Confirm',
        
        // Error window
        'error.title': 'Error',
        'error.close': 'Close',
        
        // Code editor
        'code.title': 'NXC Code',
        
        // NXT Status panel
        'status.title': 'NXT Status',
        'status.notConnected': 'NXT brick is not connected.',
        'status.driverInstalled': '- Is the NXT driver installed? (We recommend installing the EV3 Lab software.)',
        'status.deviceRecognized': '- Has the USB device been recognized? If not, restart your NXT brick.Is any other software running (NXT-G, EV3-G, BrixCC)?',
        'status.brickName': 'NXT Brick Name :',
        'status.batteryVoltage': 'Battery Voltage :',
        'status.connectionStatus': 'Connection Status:',
        'status.firmwareVersion': 'Firmware Version :',
        'status.protocolVersion': 'Protocol Version :',
        'status.bluetoothAddress': 'Bluetooth Address:',
        'status.bluetoothSignal': 'Bluetooth Signal :',
        'status.availableMemory': 'Available Memory :',
        'status.connected': 'Connected',
        'status.renameNXT': 'Rename NXT',
        'status.fileManager': 'File Manager',
        'status.screenCapture': 'Screen Capture',
        
        // Notifications
        'notify.projectSaved': 'Project saved!',
        'notify.projectLoaded': 'Project loaded!',
        'notify.newProjectCreated': 'New project created!',
        'notify.downloadAndRunOK': 'Download and Run OK!',
        'notify.downloadOK': 'Download OK!',
        'notify.codeDownloaded': 'Code downloaded',
        'notify.saveFailed': 'Save failed!',
        'notify.loadFailed': 'Load failed: ',
        'notify.downloadFailed': 'Download failed',
        'notify.programRunning': 'Program is running',
        'notify.needNWJS': 'NW.js environment required',
        
        // Dialogs
        'dialog.newProjectConfirm': 'Create new project? Current work will be lost.',
        'dialog.unsavedWork': 'You have unsaved work. Do you want to close without saving?',
        'dialog.renamePrompt': 'Enter new NXT name (letters, numbers, -, _, max 8 characters):',
        'dialog.invalidFormat': 'Invalid format!',
        'dialog.invalidName': 'Invalid name: ',
        'dialog.duplicateName': 'Duplicate name: ',
        'dialog.invalidFunctionName': 'Invalid function name: ',
        
        // Error messages
        'error.workspaceNotInit': 'Workspace not initialized.',
        'error.invalidFormat': 'Invalid format',
        'error.compilationError': 'Compilation',
        'error.systemError': 'System',
        'error.checkList': 'Check:\n1. nbc.exe status.\n2. NeXTTool.exe status.\n3. NXT brick connection.\n4. Code errors?',
        
        // Others
        'loading': 'Loading...',
        'scratchLoading': 'Scratch Blocks loading...\nPlease ensure network connection is normal',
        'bytes': 'bytes'
    }
};
