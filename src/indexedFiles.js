var indexedFiles = [
    // Guides
    { name: 'getting-started', type: 'Guides', toc: 'Section'},
    { name: 'troubleshooting', type: 'Guides', toc: 'Section'},
    { name: 'tutorial', type: 'Guides', toc: 'Section'},

    { name: 'style', type: 'Guides', toc: 'Section'},
    { name: 'gesture-responder-system', type: 'Guides', toc: 'Section'},
    // new on 07/19/2015
    { name: 'animations', type: 'Guides', toc: 'Section'},
    { name: 'nativemodulesios', type: 'Guides', toc: 'Section'},
    { name: 'nativecomponentsios', type: 'Guides', toc: 'Section'},
    // new on 06/18/2015
    { name: 'direct-manipulation', type: 'Guides', toc: 'Section'},
    { name: 'linking-libraries', type: 'Guides', toc: 'Section'},
    { name: 'debugging', type: 'Guides', toc: 'Section'},
    { name: 'testing', type: 'Guides', toc: 'Section'},
    { name: 'runningondevice', type: 'Guides', toc: 'Section'},
    { name: 'embedded-app', type: 'Guides', toc: 'Section'},
    { name: 'javascript-environment', type: 'Guides', toc: 'Section'},
    // new on 06/17/2015
    { name: 'navigator-comparison', type: 'Guides', toc: 'Section'},
    // videos.html is not included in the indexed files

    // Components
    { name: 'activityindicatorios', type: 'Components', toc: 'Property'},
    { name: 'datepickerios', type: 'Components', toc: 'Property'},
    { name: 'image', type: 'Components', toc: 'Property'},
    { name: 'listview', type: 'Components', toc: 'Property'},
    { name: 'mapview', type: 'Components', toc: 'Property'},
    { name: 'navigator', type: 'Components', toc: 'Property'},
    { name: 'navigatorios', type: 'Components', toc: 'Property'},
    { name: 'pickerios', type: 'Components', toc: 'Property'},
    { name: 'scrollview', type: 'Components', toc: 'Property'},
    { name: 'segmentedcontrolios', type: 'Components', toc: 'Property'},
    { name: 'sliderios', type: 'Components', toc: 'Property'},
    { name: 'switchios', type: 'Components', toc: 'Property'},
    { name: 'tabbarios', type: 'Components', toc: 'Property'},
    { name: 'tabbarios-item', type: 'Components', toc: 'Property'},
    { name: 'text', type: 'Components', toc: 'Property'},
    { name: 'textinput', type: 'Components', toc: 'Property'},
    { name: 'touchablehighlight', type: 'Components', toc: 'Property'},
    { name: 'touchableopacity', type: 'Components', toc: 'Property'},
    { name: 'touchablewithoutfeedback', type: 'Components', toc: 'Property'},
    { name: 'transforms', type: 'Components', toc: 'Property'},
    { name: 'view', type: 'Components', toc: 'Property'},
    { name: 'webview', type: 'Components', toc: 'Property'},

    //APIs - Library until APIs is available in Dash
    // new on 06/15/2015
    { name: 'actionsheetios', type: 'Library', toc: 'Property'},
    { name: 'alertios', type: 'Library', toc: 'Property'},
    { name: 'appregistry', type: 'Library', toc: 'Property'},
    { name: 'appstateios', type: 'Library', toc: 'Property'},
    { name: 'asyncstorage', type: 'Library', toc: 'Property'},
    { name: 'cameraroll', type: 'Library', toc: 'Property'},
    { name: 'interactionmanager', type: 'Library', toc: 'Property'},
    { name: 'layoutanimation', type: 'Library', toc: 'Property'},
    { name: 'linkingios', type: 'Library', toc: 'Property'},
    { name: 'netinfo', type: 'Library', toc: 'Property'},
    { name: 'panresponder', type: 'Library', toc: 'Property'},
    { name: 'pixelratio', type: 'Library', toc: 'Property'},
    { name: 'pushnotificationios', type: 'Library', toc: 'Property'},
    { name: 'statusbarios', type: 'Library', toc: 'Property'},
    { name: 'stylesheet', type: 'Library', toc: 'Property'},
    { name: 'vibrationios', type: 'Library', toc: 'Property'},

    //Polyfills - Extension until Polyfills is available in Dash
    { name: 'flexbox', type: 'Extension', toc: 'Property'},
    { name: 'geolocation', type: 'Extension', toc: 'Property'},
    { name: 'network', type: 'Extension', toc: 'Property'},
    { name: 'timers', type: 'Extension', toc: 'Property'},

];

module.exports = indexedFiles;
