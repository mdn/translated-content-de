---
title: browserSettings.useDocumentFonts
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/useDocumentFonts
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}}-Objekt, dessen zugrundeliegender Wert ein Boolean ist.

Standardmäßig können Web-Seiten natürlich die Schriftarten angeben, die sie verwenden möchten, indem sie CSS-Eigenschaften wie [`font-family`](/de/docs/Web/CSS/Reference/Properties/font-family) verwenden. Diese Einstellung ermöglicht es einer Erweiterung, Firefox anzuweisen, die von der Seite angegebenen Schriftarten zu ignorieren und nur Systemschriftarten zu verwenden.

Der zugrundeliegende Wert ist ein Boolean:

- `true`: Verwenden Sie die von der Webseite angegebenen Schriftarten. Dies ist die Standardeinstellung.
- `false`: Verwenden Sie die Systemschriftarten.

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
