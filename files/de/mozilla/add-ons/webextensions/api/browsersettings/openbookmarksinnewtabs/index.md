---
title: browserSettings.openBookmarksInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

Wenn auf `true` gesetzt, wird beim Auswählen eines Lesezeichens dieses in einem neuen Tab geöffnet. Wenn auf `false` gesetzt (die Standardeinstellung), werden Lesezeichen im aktuellen Tab geöffnet.

## Beispiele

Die Einstellung auf `true` setzen:

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
