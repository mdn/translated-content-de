---
title: browserSettings.ftpProtocolEnabled
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/ftpProtocolEnabled
l10n:
  sourceCommit: 0800671cb610252f74b0fb12b8af21b771d366b2
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das bestimmt, ob das FTP-Protokoll im Browser aktiviert ist.

Der zugrunde liegende Wert ist ein boolescher Wert.

> [!NOTE]
> Ab Firefox-Version 88 ist diese Einstellung schreibgeschützt.

## Browser-Kompatibilität

{{Compat}}

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
