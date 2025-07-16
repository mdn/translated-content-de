---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen grundlegender Wert ein boolescher Wert ist.

Normalerweise können Web-Seiten natürlich die Schriftarten, die sie verwenden möchten, mit CSS-Eigenschaften wie [`font-family`](/de/docs/Web/CSS/font-family) spezifizieren. Diese Einstellung ermöglicht es einer Erweiterung, Firefox anzuweisen, die von der Seite angegebenen Schriftarten zu ignorieren und stattdessen nur Systemschriftarten zu verwenden.

Sein grundlegender Wert ist ein boolescher:

- `true`: verwendet die von der Webseite angegebenen Schriftarten. Dies ist die Standardeinstellung.
- `false`: verwendet die Systemschriftarten.

## Beispiele

Setzen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({ value: false }).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
