//// Config

// 1. Create favicons with -> https://www.favicon-generator.org/ and the 128x128 ico with https://icoconvert.com/
// 2. Download the favicon and replace all file in build folder
// 3. Copy past favicon.ico and ms-icon-144x144.png to images folder and replace // Rename ms-icon-144x144.png to logo.png
// 4. Go to https://anyconv.com/icns-converter/ and upload the coin logo in size 1000px x 1000px and download the icns file.
// 5. Replace the file icon.icns in the build folder with the created icns file.
// 6. open colors.css file and change the colors on the bottom of the file.

// Coin
var configCoinName = "Limitless VIP";
var configCoinDomain = "http://limitlessvip.co.za";
var configAddressPrivate = 0xef; // chainparams.cpp - SECRET_KEY - convert decimal to hex
var configAddressPublic = 0x8b;  // chainparams.cpp - PUBKEY_ADDRESS - convert decimal to hex
var coinutil = 31;
var configbip38 = 7;
var configbs58 = 26;
var configcoinkey = 30;
var configcoinstring = 32;
var configqrcodegenerator = 73;
var configsecurerandom = 82;
var configwif = 91;
var configbipdecryption = 239;   // chainparams.cpp - SECRET_KEY - as is

// Paper wallet template
var configTemplateQuareSVG = "paper-wallet-square.svg";
var configTemplateQuareSVGBack = "paper-wallet-square-back.svg";
var configTemplateCleanSVG = "paper-wallet-clean.svg";
var configTemplateCleanSVGBack = "paper-wallet-clean-back.svg";

// Set page title
document.title = configCoinName+' Paper Wallet';
 
// Download generator link
var configDownloadGeneratorEnabled = true;
var configDownloadGeneratorLink = "https://github.com/Limitless-VIP/limitless-paper-wallet/releases";
