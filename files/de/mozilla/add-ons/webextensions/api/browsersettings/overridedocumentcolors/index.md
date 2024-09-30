---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es dem Benutzer, eigene Farben für Dokumenthintergründe und -texte festzulegen. Standardmäßig werden diese Werte nur angewendet, wenn ein Hochkontrast-Design ausgewählt ist (ein Hochkontrast-Design ist eine Funktion einiger Betriebssystem-UIs, die den Kontrast zur Verbesserung der Zugänglichkeit erhöht). Benutzer können jedoch auch wählen, diese Farben immer oder nie anzuwenden. Diese Browsereinstellung macht diese Präferenz zugänglich.

Der zugrunde liegende Wert ist ein String, der einen der folgenden Werte annehmen kann:

- "high-contrast-only": Wenden Sie die Benutzerwahl nur an, wenn ein Hochkontrast-Design ausgewählt ist. Dies ist der Standard.
- "never": Wenden Sie die Benutzerwahl niemals an.
- "always": Wenden Sie die Benutzerwahl immer an.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Setzen Sie die Einstellung auf "always":

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideDocumentColors
  .set({ value: "always" })
  .then(logResult);
```

{{WebExtExamples}}
