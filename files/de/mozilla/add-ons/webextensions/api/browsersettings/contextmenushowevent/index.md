---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das bestimmt, ob das Kontextmenü des Browsers beim `mouseup`-Ereignis oder beim `mousedown`-Ereignis angezeigt wird.

Sein zugrunde liegender Wert ist eine Zeichenfolge, die entweder "mouseup" oder "mousedown" sein kann.

Der Standardwert ist "mouseup" unter Windows und "mousedown" unter macOS und Linux. Eine Zuweisung unter Windows hat keine Auswirkung - die Einstellung ist nur dafür gedacht, das Kontextmenü bei `mouseup` anstelle von `mousedown` zu öffnen, nicht umgekehrt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Einstellung auf "mouseup":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.contextMenuShowEvent
  .set({ value: "mouseup" })
  .then(logResult);
```

{{WebExtExamples}}
