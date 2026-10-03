# NXT:Scratch
<div align="center">
<img width="80%" height="80%" alt="banner" src="https://github.com/user-attachments/assets/d54fbf87-0c16-45e7-bd8f-a480f67632d6" />
 
**A Modern Scratch-like Programming Environment for LEGO® NXT**

[![Platform](https://img.shields.io/badge/Platform-Windows%20XP--11-blue.svg)](https://github.com/a10036gt/nxt-scratch)
[![NW.js](https://img.shields.io/badge/NW.js-0.14.7-green.svg)](https://nwjs.io/)
[![License: Freeware](https://img.shields.io/badge/License-Freeware-brightgreen.svg)](LICENSE)
[![Donate: KoFi](https://img.shields.io/badge/Donate-Ko--fi-F16061.svg?logo=ko-fi)](https://ko-fi.com/a10036kf)

 • [Features](#-features) • [Download](#-download) • [Getting Started](#-getting-started) • [Contributing](#-contributing)

</div>

---

> 🏛️ **Officially Featured by Tufts University CEEO**
>
> NXT:Scratch is officially featured on
> **[Engineering with Bricks](https://www.engineeringwithbricks.com/platforms/nxt)**,
> a robotics education resource platform curated by the
> **Tufts University Center for Engineering Education and Outreach (CEEO)**.
>
> This recognition places NXT alongside educational resources used by the LEGO® robotics and engineering education community.

---

## 🎯 Overview
<img width="100%" height="100%" alt="image" src="https://github.com/user-attachments/assets/4f7cf0d9-eddf-49a2-b5e6-82a7e5292641" />

**NXT:Scratch** is a freeware brings a modern, Scratch-like programming experience to LEGO® NXT users. It supports Windows XP through Windows 11, keeping classic robots easy and fun to code.

Built with visual block-based programming with C++ code preview, NXT:Scratch makes robotics accessible to beginners while providing powerful features for advanced users.

## 💡 Why This Project Exists

> In 2025, our school planned a robotics camp for elementary students from across the district. However, the timing coincided with the WRO competition season, leaving our EV3 and SPIKE Prime sets unavailable. Looking at the NXT robots gathering dust in our storage room, we saw an opportunity.<br><br>
**The problem?** Today's students learn programming with Scratch, but NXT only supports outdated software like NXT-G. (EV3-G or Open Roberta works fine, but kids still prefer Scratch, not LabVIEW or Blockly) The gap between what students know and what NXT offers was too large.<br><br>
**The solution:** Build a modern, Scratch-like programming environment specifically for NXT.<br><br>
After successful internal testing and realizing that many schools and regions still actively use NXT for classes and competitions (TESSLAB Darren tell me about his friend still use for competitions😯), we decided to share this tool with the broader educational community.

**NXT:Scratch bridges the past and present** - giving new life to legacy hardware while providing students with the modern programming experience they deserve.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/a10036kf)

## ✨ Features

### 🧩 Visual Programming
- <img width="80%" height="80%" alt="image" src="https://github.com/user-attachments/assets/41e6b373-1ee8-4fbf-b5e4-bf4979313212" />
- **Scratch-like Interface**: Familiar to Scratch / EV3 Classroom / SPIKE App users
- **Real-time Code Generation**: Instantly see NXC (Not eXactly C, BricxCC) code as you build

### 🤖 NXT Integration
- <img width="35%" height="35%" alt="image" src="https://github.com/user-attachments/assets/5b4e05ab-4a8d-477a-a6b7-14f4620e2ae9" />
- **Live Status Monitor**: Real-time battery, memory, and connection status
- **One-Click Download**: Upload and run programs instantly
- **NXT Tools Integration**: Built-in file manager and screen capture

### 💻 Wide Compatibility

- **From Windows XP to Windows 11** - NXT:Scratch runs on every Windows version released in the past two decades.
- #### Verified Support (Until Win11 24H2):
| Windows Version | Year | Status |
|----------------|------|--------|
| Windows XP | 2001 | ✅ Tested |
| Windows Vista | 2006 | ✅ Tested |
| Windows 7 | 2009 | ✅ Tested |
| Windows 8/8.1 | 2012 | ✅ Tested |
| Windows 10 | 2015 | ✅ Tested |
| Windows 11 | 2021 | ✅ Tested |

![Testing result](https://github.com/user-attachments/assets/a8dd3d4d-0cbc-45a9-9efe-c7888948fb5e)

- **No computer left behind** - If your school computer from 2005 still runs, so does NXT:Scratch.

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

*Internationalization js can be found and packaged in package.nw (Using 7-zip to packaged or extract). If you want to submit your translation to the official version, please create a pull request.

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

## 💝 Support This Project

NXT:Scratch is **free software** and always will be. If you find it useful, consider supporting development:

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/a10036kf)

Your support helps maintain and improve NXT:Scratch for the educational community. Thank you! 🙏

## ⚠️ Disclaimer

**LEGO®** and **MINDSTORMS®** is a trademark of the LEGO Group.  
**Scratch** is developed by the MIT Media Lab/Scratch Foundation.

This independent project is **not affiliated with or endorsed by** either organization. It is a community-driven tool designed to support LEGO® NXT users.

NXT:Scratch has been independently featured by Tufts University CEEO through its Engineering with Bricks resource platform.

---

<div align="center">

**Made with ❤️ for the LEGO® Robotics Community**

⭐ Star this project if you find it useful!

</div>
