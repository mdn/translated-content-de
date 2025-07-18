---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das bestimmt, ob das Kontextmenü des Browsers beim Mouseup-Event oder beim Mousedown-Event angezeigt wird.

Der zugrunde liegende Wert ist ein String, der entweder "mouseup" oder "mousedown" sein kann.

Der Standardwert ist "mouseup" unter Windows und "mousedown" auf macOS und Linux. Eine Zuweisung auf Windows hat keinen Effekt - die Einstellung ist nur dafür gedacht, das Kontextmenü bei Mouseup anstelle von Mousedown zu öffnen, nicht umgekehrt.

## Beispiele

Die Einstellung auf "mouseup" setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.contextMenuShowEvent
  .set({ value: "mouseup" })
  .then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
