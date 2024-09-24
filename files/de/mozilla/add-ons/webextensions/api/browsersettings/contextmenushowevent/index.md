---
title: browserSettings.contextMenuShowEvent
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/contextMenuShowEvent
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, welches bestimmt, ob das Kontextmenü des Browsers beim Mouseup-Event oder beim Mousedown-Event angezeigt wird.

Sein zugrundeliegender Wert ist ein String, der entweder "mouseup" oder "mousedown" sein kann.

Der Standardwert ist "mouseup" unter Windows und "mousedown" auf macOS und Linux. Eine Zuweisung unter Windows hat keine Auswirkung - die Einstellung ist nur dafür gedacht, das Kontextmenü für den Mouseup- anstelle des Mousedown-Events zu öffnen, nicht umgekehrt.

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
