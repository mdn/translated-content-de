---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein boolescher Wert ist.

Standardmäßig können Webseiten natürlich die gewünschten Schriftarten mit CSS-Eigenschaften wie [`font-family`](/de/docs/Web/CSS/font-family) angeben. Diese Einstellung ermöglicht es einer Erweiterung, Firefox anzuweisen, die von der Seite angegebenen Schriftarten zu ignorieren und stattdessen nur Systemschriftarten zu verwenden.

Der zugrunde liegende Wert ist ein boolescher Wert:

- `true`: Verwenden Sie die von der Webseite angegebenen Schriftarten. Dies ist der Standard.
- `false`: Verwenden Sie die Systemschriftarten.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({ value: false }).then(logResult);
```

{{WebExtExamples}}
