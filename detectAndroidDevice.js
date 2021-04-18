function isAndroidDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.indexOf('android') > -1;
}