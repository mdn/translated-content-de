---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, das bestimmt, ob das Kontextmenü des Browsers beim `mouseup`- oder beim `mousedown`-Ereignis angezeigt wird.

Sein zugrunde liegender Wert ist ein String, der entweder "mouseup" oder "mousedown" sein kann.

Der Standardwert ist "mouseup" unter Windows und "mousedown" unter macOS und Linux. Eine Zuweisung unter Windows hat keine Auswirkung - die Einstellung ist nur dafür gedacht, das Kontextmenü bei `mouseup` anstatt bei `mousedown` zu öffnen, nicht umgekehrt.

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

## Browser-Kompatibilität

{{Compat}}
