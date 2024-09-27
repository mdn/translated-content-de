---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen Basiswert ein boolescher Wert ist.

Standardmäßig können Webseiten natürlich die Schriftarten mithilfe von CSS-Eigenschaften wie [`font-family`](/de/docs/Web/CSS/font-family) festlegen. Diese Einstellung ermöglicht es einer Erweiterung, Firefox anzuweisen, die von der Seite angegebenen Schriftarten zu ignorieren und stattdessen nur Systemschriftarten zu verwenden.

Der zugrunde liegende Wert ist ein boolescher:

- `true`: Verwenden Sie die von der Webseite angegebenen Schriftarten. Dies ist der Standardwert.
- `false`: Verwenden Sie die Systemschriftarten.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Stellen Sie die Einstellung auf `false` ein:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
