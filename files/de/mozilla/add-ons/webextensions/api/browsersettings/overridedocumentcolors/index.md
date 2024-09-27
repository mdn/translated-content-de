---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert ein String ist.

Firefox ermöglicht es dem Benutzer, eigene Farben für Dokumenthintergründe und Text festzulegen. Standardmäßig werden diese Werte nur angewendet, wenn ein Hochkontrast-Thema ausgewählt ist (ein Hochkontrast-Thema ist eine Funktion einiger Betriebssystem-Benutzeroberflächen, die den Kontrast zur Verbesserung der Barrierefreiheit erhöht). Benutzer können jedoch auch wählen, diese Farben immer oder nie anzuwenden. Diese Browsereinstellung macht diese Präferenz zugänglich.

Der zugrunde liegende Wert ist ein String, der einen der folgenden Werte annehmen kann:

- "high-contrast-only": Anwenden der Benutzer-Auswahl nur, wenn ein Hochkontrast-Thema ausgewählt ist. Dies ist der Standard.
- "never": Nie die Auswahl des Benutzers anwenden.
- "always": Immer die Auswahl des Benutzers anwenden.

## Browser-Kompatibilität

{{Compat}}

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
