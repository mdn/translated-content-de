---
title: browserSettings.openBookmarksInNewTabs
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein boolescher Wert ist.

Wenn auf `true` gesetzt, wird ein Lesezeichen, das vom Benutzer ausgewählt wird, in einem neuen Tab geöffnet. Wenn auf `false` (der Standardwert) gesetzt, werden Lesezeichen im aktuellen Tab geöffnet.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Stellen Sie die Einstellung auf `true`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.openBookmarksInNewTabs
  .set({ value: true })
  .then(logResult);
```

{{WebExtExamples}}
