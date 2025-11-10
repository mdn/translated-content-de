---
title: browserSettings.ftpProtocolEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das bestimmt, ob das FTP-Protokoll im Browser aktiviert ist.

Der zugrunde liegende Wert ist vom Typ Boolean.

> [!NOTE]
> Ab Firefox-Version 88 ist diese Einstellung schreibgeschützt.

## Beispiele

Die Einstellung umschalten:

```js
function toggleAllowFtp() {
  function toggle(current) {
    console.log(`Current value: ${current.value}`);
    browser.browserSettings.ftpProtocolEnabled.set({ value: !current.value });
  }

  browser.browserSettings.ftpProtocolEnabled.get({}).then(toggle);
}

browser.browserAction.onClicked.addListener(() => {
  toggleAllowFtp();
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
