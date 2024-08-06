# [Emoji] Priconf

> [Caution_Emoji] Work In Progres
Currently a HardCoded Firefox Browser Web Extension for having a unified config for your alternate Frontends of favourite services. The extension automatically reloads the page of specified Frontend instances and injects consistent settings and themes, ensuring a uniform experience across all hosted instances.

## [emoji] Motivation

The [LibReddit](https://github.com/#) instances I used from
[LibRedirect](https://github.com/libredirect/browser_extension) used to have
different settings for different instances respectively.
I wanted all the instances that I use to have same settings.
So, here is the basic WebExtension I created over the Weekend.
Over Time I expanded this functionality to different Privay Frontends.

## 📖 Table of Contents

- [✨ Features](#features)
- [🚀 Installation](#installation)
- [🚀 Configuration](#configuration)
- [🛠️ Usage](#usage)
- [🗑️ Uninstall](#uninstall)
- [🐛 Bugs or Requests](#bugs-or-requests)
- [🤝 Contributing](#contributing)
- [📄 License](#license)
- [🙏 Acknowledgments](#acknowledgments)

## ✨ Features

- **Uniformity**: Injects predefined settings and themes for a consistent user experience for selected fronent instances.
- **Automatic Page Reload**: Automatically reloads the selected instance page when accessed to inject preferences.
- **Multiple Instances**: Supports various hosted instances of different FroneEnd services, allowing users to switch seamlessly.
- **Currently Supported Frontends**:
    - [LibReddit]()
    - [SearXNG]()
    - [AnonymousOverflow]()
    - [Piped](https://github.com/TeamPiped/Piped)
    - [Nitter]()
    - [LibreMDB]()
    - [Quetre]()

## [emoji] Roadmap

- [ ] Add UI
- [ ] Take Instances Input from User
- [ ] Allow User to Configure Settings via UI

## Installation

> Curently you will have to HardCode your settings and use it in Debugging Mode.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/jollySleeper/priconf.git
   cd priconf
   ```

2. **Adjust your Settings**:
    HardCode your settings for specific instances in `priconf.js`. See [configuration](#configuration) for more details.

3. **Load the extension in Firefox**:
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
   - Click on "Load Temporary Add-on".
   - Select the `manifest.json` file from the cloned repository.

## Configuration

The settings for the extension can be found in the `settings.js` file. You can adjust the following parameters:

- **theme**: Set the desired theme for the Piped instances.
- **defaultQuality**: Specify the default video quality.
- **autoplay**: Enable or disable autoplay for videos.

Example configuration:
```javascript
const settings = {
    theme: 'dark',
    defaultQuality: '720p',
    autoplay: true,
};
```

## Usage

Once the extension is installed, it will automatically reload the instances that you visit which are configured and apply the specified settings.

## 🗑️ Uninstall

If you decide to uninstall, we're sorry to hear that `priconf` didn't meet your expectations. We appreciate your feedback. 
To uninstall, head to `about:addons` in Firefox Browser and remove the the Priconf addon installed.
Also, delete the Priconf folder using `rm -r priconf` command.

## 🐛 Bugs or Requests

If you encounter any problem(s) feel free to open an [issue](https://github.com/jollySleeper/priconf/issues/new).
If you feel the project is missing a feature, please raise an [issue](https://github.com/jollySleeper/priconf/issues/new) with `FeatureRequest` as heading.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/jollySleeper/priconf/blob/main/LICENSE) file for details.

## 🙏 Acknowledgments

- Thank you for all the contributers, contributing to any of above mentioned projects.
