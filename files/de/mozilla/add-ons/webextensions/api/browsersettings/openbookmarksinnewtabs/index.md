---
title: browserSettings.openBookmarksInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolean ist.

Wenn auf `true` gesetzt, wird ein Lesezeichen beim Auswählen durch den Benutzer in einem neuen Tab geöffnet. Wenn auf `false` gesetzt (der Standardwert), werden Lesezeichen im aktuellen Tab geöffnet.

## Beispiele

Einstellung auf `true` setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openBookmarksInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
