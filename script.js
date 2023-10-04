//your JS code here. If required.
let browserName = navigator.appName;
let version = navigator.appVersion;
const div = document.getElementById("browser-info");
div.innerText = "You are using "+browserName+"version"+version;