# NXT:Scratch
<div align="center">
<img width="100%" height="100%" alt="image" src="https://github.com/user-attachments/assets/cc87eef0-5b80-4720-99c8-eee472cd3f0d" />

**A Modern Scratch-like Programming Environment for LEGO® NXT**

[![Platform](https://img.shields.io/badge/Platform-Windows%20XP--11-blue.svg)](https://github.com/a10036gt/nxt-scratch)
[![NW.js](https://img.shields.io/badge/NW.js-0.14.7-green.svg)](https://nwjs.io/)
[![License: Freeware](https://img.shields.io/badge/License-Freeware-brightgreen.svg)](LICENSE)

 • [Features](#features) • [Download](#download) • [Getting Started](#getting-started) • [Contributing](#contributing)

</div>

---

## 🎯 Overview

**NXT:Scratch** is a freeware brings a modern, Scratch-like programming experience to LEGO® NXT users. It supports Windows XP through Windows 11, keeping classic robots easy and fun to code.

Built with visual block-based programming, NXT:Scratch makes robotics accessible to beginners while providing powerful features for advanced users.

## ✨ Features

### 🧩 Visual Programming
- <img width="80%" height="80%" alt="image" src="https://github.com/user-attachments/assets/41e6b373-1ee8-4fbf-b5e4-bf4979313212" />
- **Scratch-like Interface**: Familiar to Scratch / EV3 Classroom / SPIKE App users
- **Real-time Code Generation**: Instantly see NXC (Not eXactly C) code as you build

### 🤖 NXT Integration
- <img width="35%" height="35%" alt="image" src="https://github.com/user-attachments/assets/5b4e05ab-4a8d-477a-a6b7-14f4620e2ae9" />
- **Live Status Monitor**: Real-time battery, memory, and connection status
- **One-Click Download**: Upload and run programs instantly
- **NXT Tools Integration**: Built-in file manager and screen capture

### 🌍 Internationalization
- **Multi-language Support**: English, 繁體中文 (Traditional Chinese)
- **Easy to Extend**: Add new languages without modifying core code

### 💾 Project Management
- **Save & Load Projects**: JSON-based project files
- **Keyboard Shortcuts**: Ctrl+S (Save), Ctrl+O (Open), Ctrl+N (New)

### 🎨 User Experience
- **Dark/Light Themes**: Comfortable coding in any environment
- **Responsive Layout**: Adaptive UI for different screen sizes
- **Code Preview Panel**: Toggle between blocks and generated code

## 📥 Download

### Latest Release
Download the latest version from the [Releases](https://github.com/a10036gt/nxt-scratch/releases) page.

**System Requirements:**
- Windows XP / Vista / 7 / 8 / 10 / 11
- LEGO® NXT 2.0 (recommended) or NXT 1.0
- USB cable
- 300 MB free disk space

### Installation
1. Download `NXT-Scratch-Setup-<version>.exe`
2. Run the installer
3. Follow the installation wizard
4. Launch NXT:Scratch from the Start Menu

## 🚀 Getting Started

### Quick Start Guide

1. **Connect Your NXT**
   - Turn on your NXT brick
   - Connect via USB
   - Click the Status button to verify connection

2. **Create Your First Program**
   - Drag blocks from the toolbox
   - Connect them together
   - Click "Download and Run" to execute

## 🌐 Internationalization

Adding a new language is easy! Edit `translations.js` and `scratch_msgs.js`:

```javascript
//scratch_msgs.js:
Blockly.ScratchMsgs.locales["en"] = { /* English translations */ },
Blockly.ScratchMsgs.locales["zh-tw"] = { /* Chinese translations */ },
Blockly.ScratchMsgs.locales["your-lang"] = { /* Your translations */ },

//translations.js:
var I18N_TRANSLATIONS = {
    'en': { /* English translations */ },
    'zh-tw': { /* Chinese translations */ },
    'your-lang': { /* Your translations */ }
};

var I18N_LANG_DISPLAY = {
    'en': 'English',
    'zh-tw': '繁體中文',
    'your-lang': 'Your Language'
};
```

*i18n js can be found and packaged in package.nw . If you want to submit your translation to the official version, please create a pull request.

## 🤝 Contributing
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🌍 Add translations
- 📝 Improve documentation
- 🔧 Submit bug fixes and enhancements

## 📄 License

**NXT:Scratch is FREEWARE** - Free software for LEGO® NXT hardware.

See the [LICENSE](LICENSE) file for complete terms.

## 🙏 Acknowledgments

### Technologies Used
- [Scratch Blocks](https://github.com/LLK/scratch-blocks) - Scratch's version of Blockly
- [NW.js](https://nwjs.io/) - Desktop application framework
- [CodeMirror](https://codemirror.net/) - Code editor component
- [NXC](http://bricxcc.sourceforge.net/nbc/) - Not eXactly C compiler by John Hansen

### Inspired By
- [Scratch](https://scratch.mit.edu/) - MIT Media Lab's visual programming language
- [BricxCC](http://bricxcc.sourceforge.net/) - Classic NXT programming IDE

## 👤 Author

**Anthony Hsu, OFDL Robotics Taiwan**
- GitHub: [@a10036gt](https://github.com/a10036gt)
- Project: [NXT:Scratch](https://github.com/a10036gt/nxt-scratch)

Created: October 10, 2025

## ⚠️ Disclaimer

**LEGO®** is a trademark of the LEGO Group.  
**Scratch** is developed by the MIT Media Lab.

This independent project is **not affiliated with or endorsed by** either organization. It is a community-driven tool designed to support LEGO® NXT users.

---

<div align="center">

**Made with ❤️ for the LEGO® Robotics Community**

⭐ Star this project if you find it useful!

</div>
