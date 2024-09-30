---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, das bestimmt, ob das Kontextmenü des Browsers bei dem `mouseup`-Ereignis oder bei dem `mousedown`-Ereignis angezeigt wird.

Sein zugrunde liegender Wert ist ein String, der entweder "mouseup" oder "mousedown" sein kann.

Der Standardwert ist "mouseup" unter Windows und "mousedown" unter macOS und Linux. Das Ändern dieses Wertes unter Windows hat keine Auswirkung – die Einstellung ist nur dazu gedacht, das Kontextmenü bei `mouseup` anstelle von `mousedown` zu öffnen, nicht umgekehrt.

## Browser-Kompatibilität

{{Compat}}

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
