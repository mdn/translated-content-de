---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es dem Nutzer, eigene Farben für Dokumenthintergründe und Text festzulegen. Standardmäßig werden diese Werte nur angewendet, wenn ein Hochkontrast-Thema ausgewählt ist (ein Hochkontrast-Thema ist eine Funktion einiger Betriebssystem-Benutzeroberflächen, die den Kontrast zur besseren Zugänglichkeit erhöht). Nutzer können jedoch auch wählen, diese Farben immer oder nie anzuwenden. Diese Browsereinstellung macht diese Präferenz zugänglich.

Der zugrunde liegende Wert ist ein String, der einen der folgenden Werte annehmen kann:

- "high-contrast-only": Wendet die Nutzerwahl nur an, wenn ein Hochkontrast-Thema ausgewählt ist. Dies ist die Standardeinstellung.
- "never": Die Nutzerwahl niemals anwenden.
- "always": Die Nutzerwahl immer anwenden.

## Beispiele

Die Einstellung auf "always" setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideDocumentColors
  .set({ value: "always" })
  .then(logResult);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
