# Shimmering Obsidian 🎩
*An Alfred Workflow with dozens of features for [Obsidian](https://obsidian.md/)*.

![](https://img.shields.io/github/downloads/chrisgrieser/shimmering-obsidian/total?label=Downloads&style=plastic) ![](https://img.shields.io/github/v/release/chrisgrieser/shimmering-obsidian?label=Latest%20Release&style=plastic) [![](https://img.shields.io/badge/changelog-click%20here-FFE800?style=plastic)](Changelog.md)

<img src="https://user-images.githubusercontent.com/73286100/139678407-9ac39baa-5f49-42a0-9622-0fbaf68540b2.gif" alt="Promo Video" width=70%> 

---

- [Installation](#Workflow-Installation)
- [Configuration](docs/Workflow%20Configuration.md)
- [Breaking Changes](docs/Breaking%20Changes.md) (when updating from earlier versions)
- [Troubleshooting](docs/Troubleshooting.md)
- [Changelog](Changelog.md)
- [Alfred Themes](#Alfred%20Themes)
- [Credits & Donations](#Credits)

---

## Feature Overview
*For a full documentation & usage guide, follow the links to the respective subsection.*

### Powerful Alfred-based Quick Switcher
- Search for Notes
	- Includes Aliases
	- Search Headings (included heading levels configurable)
	- Search Starred Notes
	- Search Recent Notes
- Browse Folders (move to parent folders, create notes in folders)
- Search Notes via Tags
- Browse a note's links (outgoing, backlinks, external)
- Open External Links of a Note (without switching to the document or opening Obsidian)
- Graph Traversal via Alfred
- Smart Search: A query like `o foobar #moc starred` displays only files named "foobar" with the tag "#moc" that are also starred.

➡️ [Documentation of Quick Switcher Features](docs/Alfred-based%20Quick%20Switcher.md)

---

### Note-related Features
- Create new Notes (based on Template or via QuickAdd)
- Move Note to a different folder
- Daily Notes
- 🆕 Quickly append to a scratchpad note

➡️ [Documentation of Note-related Features](docs/Note-related%20Features.md)

---

### Screenshot Features
- OCR Screenshots
- 🆕 Image Screenshot
- 🆕 Both work for screenshots taken in quick succession, e.g. during a live presentation or lecture.

➡️ [Documentation of Screenshot Features](docs/Screenshot%20Features.md)

---

### Utility Features
- Backup your Vault
- Access various folders like `.obsidian` or `.trash`
- Update Plugins
- Carl Auto-Responses 🐢

➡️ [Documentation of all Utility Features](docs/Utility%20Features.md)

---

### Plugin & Theme Search
- Search Community Plugins and Themes
- Open in Obsidian or GitHub
- Access Plugin Settings
- Search & Create GitHub Issues
- *No annoyed developers! When the installed version is out of date, issue creation is blocked and replaced by a shortcut to update the plugin instead.*

➡️ [Documentation of the Plugin & Theme Search](docs/Plugin%20and%20Theme%20Search.md)

---

### Workspace Switcher
- Quickly switch workspaces
- 🆕 Save Workspaces
- Manage workspaces
- Automatically toggle spellchecking when switching to certain workspaces

➡️ [Documentation of the Workspace Switcher](docs/Workspace%20Switcher.md)

---

### Settings & Local Plugin Search
- Search & quickly open specific Settings Tabs, the Theme Browser, or the Community Browser.
- Quickly update all plugins.
- Open Plugin Settings.
- Open local plugin folders in `.obsidian/plugins/`

➡️ [Documentation of the Settings Search](docs/Settings%20and%20Local%20Plugin%20Search.md)

---

### Documentation Search
- Search the Official Obsidian Documentation
- Simultaneously search the Obsidian Hub
- Search the Forum
- Browse Forum Categories

➡️ [Documentation of the Documentation & Forum Search](docs/Documentation%20and%20Forum%20Search.md)

---

### 🆕 Vault Switcher
- Switch the Vault controlled by this Alfred workflow.
- Open vaults in Obsidian, Finder, or the Terminal.

➡️ [Documentation of the Vault Switcher](docs/Vault%20Switcher.md)

---

### CSS-related Features
- Access themes & CSS Snippets via Alfred
- Create new Snippets from Clipboard content
- Quick Access to cheat sheets for theme development, e.g. default variables
- Download a theme's CSS file via Theme Search
- Convert a font file base64-encoded CSS
- 🆕 Convert a SVG to Data URI

➡️ [Documentation of CSS-related Features](docs/CSS-related%20Features.md)

---

### Features for Developers
- Quickly open various development-related folders
- Open a local plugin's folder in Finder or the Terminal
- 🆕 Quick Copy of a plugin's ID
- `git clone` a plugin repository via the Plugin Search
- 🆕 `git pull` a local plugin repository via the Plugin Search
- 🆕 Open the Vault's root in the default Terminal or in Finder
- Add & Update Beta Plugins via [BRAT](https://github.com/TfTHacker/obsidian42-brat)
- Quick Access to cheat sheets for Plugin Development, e.g. the Obsidian API

➡️ [Documentation of Features for Developers](docs/Features%20for%20Developers.md)

---

## Workflow Installation
_This workflow requires the [Powerpack for Alfred](https://www.alfredapp.com/powerpack/) (costs around 30€)._
1. Install the Obsidian plugins [Advanced URI](https://github.com/Vinzent03/obsidian-advanced-uri) & [Metadata Extractor](https://github.com/kometenstaub/metadata-extractor). Enable both plugins.
2. Download the [latest release at GitHub](https://github.com/chrisgrieser/shimmering-obsidian/releases/latest). Double-click the `.alfredworkflow` file to install it.
3. Run the Alfred Command `osetup` and select the vault you want to control with _Shimmering Obsidian_. Obsidian will then restart. (Even if you have only one vault, you need to confirm that one vault once before you can use the workflow.)
4. _Recommended:_ After installing the workflow, you should configure the settings of this workflow to make use of most of its features. Refer to the [Workflow Configuration](docs/Workflow%20Configuration.md) for further information.

## Alfred Themes
I also designed some [themes for Alfred](https://github.com/chrisgrieser/alfred-themes) you can check out.

## Credits

### Thanks
- Big shout-out to @koala for developing the [metadata extractor plugin](https://github.com/kometenstaub/metadata-extractor), for which this workflow is right now the main client.
- Also thanks to [@Vinzent03](https://github.com/Vinzent03) for his invaluable [Advanced URI plugin](https://github.com/Vinzent03/obsidian-advanced-uri), which enables Alfred to control various aspects of Obsidian.
- Main icon by [Jack Liu](https://www.reddit.com/user/jackliu1219), with some additional icons from [Freepik](https://www.freepik.com/).

### Donations
Donations are welcome via [PayPal](https://www.paypal.com/paypalme/ChrisGrieser) or [Ko-Fi](https://ko-fi.com/pseudometa). 🙏

### About Me
In my day job, I am a researcher in sociology. In my PhD project, I investigate the governance of the app economy and how software ecosystems manage the tension between innovation and compatibility. If you are interested in this subject, feel free to visit [my academic homepage](https://chris-grieser.de/) and get in touch!

- [Discord](https://discord.gg/veuWUTm): `@pseudometa#9546`
- Twitter: [@pseudo_meta](https://twitter.com/pseudo_meta)

---

[⬆️ Go Back to Top](#Table-of-Contents)
