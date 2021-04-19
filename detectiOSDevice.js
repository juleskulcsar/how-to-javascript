function isIOSDevice() {
    return [
        'iPad Simulator',
        'iPohone Simulator',
        'iPod Simulator',
        'iPhone',
        'iPad',
        'iPod'
    ].includes(navigator.platform)
    //iPad on iOS 13+
    || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}