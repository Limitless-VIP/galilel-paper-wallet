# Introduction

![paper_wallet](https://user-images.githubusercontent.com/6529101/71620736-daf3fd00-2bcb-11ea-8af7-1b76241d97a3.jpg)

Limitless VIP Paper Wallet - It is an offline wallet, regarded as cold storage. It is
recommended that you run it locally on your computer instead of generating the
keys directly on the site. For the extra paranoid; you can run the generator
and print the wallets using a secure offline environment and correctly wipe the
environment and printer memory after use.

# Installation

To clone and run this repository you'll need [Git](https://git-scm.com) and
[Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
installed on your computer. From your command line:

```
# Clone this repository
git clone https://github.com/Limitless-VIP/limitless-paper-wallet

# Go into the repository
cd limitless-paper-wallet

# Install dependencies
npm install

# Run the app
npm start
```

# Build

```
npm install
electron-packager . Limitless-Paper-Wallet --overwrite --platform=darwin --arch=x64 --icon=build/icon.icns --prune=true --out=release-builds
electron-packager . Limitless-Paper-Wallet --overwrite --asar --platform=linux --arch=ia32 --icon=build/android-icon-192x192.png --prune=true --out=release-builds
electron-packager . Limitless-Paper-Wallet --overwrite --asar --platform=linux --arch=x64 --icon=build/android-icon-192x192.png --prune=true --out=release-builds
electron-packager . Limitless-Paper-Wallet --overwrite --asar --platform=linux --arch=arm64 --icon=build/android-icon-192x192.png --prune=true --out=release-builds
electron-packager . Limitless-Paper-Wallet --overwrite --asar --platform=win32 --arch=ia32 --icon=build/icon-128x128.ico --prune=true --out=release-builds --version-string.CompanyName=Limitless-Cryptocurrency --version-string.FileDescription=Limitless-Paper-Wallet --version-string.ProductName=Limitless-Paper-Wallet
electron-packager . Limitless --overwrite --asar --platform=win32 --arch=x64 --icon=build/icon-128x128.ico --prune=true --out=release-builds --version-string.CompanyName=Limitless-Cryptocurrency --version-string.FileDescription=Limitless-Paper-Wallet --version-string.ProductName=Limitless-Paper-Wallet
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/)
or use `node` from the command prompt.

# Resources for learning Electron

* [electron.atom.io/docs](http://electron.atom.io/docs) - all of Electron's documentation
* [electron.atom.io/community/#boilerplates](http://electron.atom.io/community/#boilerplates) - sample starter apps created by the community
* [electron/electron-quick-start](https://github.com/electron/electron-quick-start) - a very basic starter Electron app
* [electron/simple-samples](https://github.com/electron/simple-samples) - small applications with ideas for taking them further
* [electron/electron-api-demos](https://github.com/electron/electron-api-demos) - an Electron app that teaches you how to use Electron
* [hokein/electron-sample-apps](https://github.com/hokein/electron-sample-apps) - small demo apps for the various Electron APIs
