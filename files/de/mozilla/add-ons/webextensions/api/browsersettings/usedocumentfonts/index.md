---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrunde liegender Wert ein Boolean ist.

Standardmäßig können Webseiten natürlich die von ihnen gewünschten Schriftarten mithilfe von CSS-Eigenschaften wie [`font-family`](/de/docs/Web/CSS/font-family) angeben. Diese Einstellung ermöglicht es einer Erweiterung, Firefox anzuweisen, die von der Seite angegebenen Schriftarten zu ignorieren und stattdessen nur Systemschriftarten zu verwenden.

Der zugrunde liegende Wert ist ein Boolean:

- `true`: Verwenden Sie die von der Webseite angegebenen Schriftarten. Dies ist die Standardeinstellung.
- `false`: Verwenden Sie die Systemschriftarten.

## Beispiele

Stellen Sie die Einstellung auf `false`:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.useDocumentFonts.set({ value: false }).then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
