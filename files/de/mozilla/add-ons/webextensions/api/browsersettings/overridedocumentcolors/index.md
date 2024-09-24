---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert eine Zeichenkette ist.

Firefox ermöglicht es dem Benutzer, eigene Farben für Dokumenthintergründe und Text festzulegen. Standardmäßig werden diese Werte nur angewendet, wenn ein kontrastreiches Design ausgewählt ist (ein kontrastreiches Design ist eine Funktion einiger Betriebssystem-Oberflächen, die den Kontrast zur Verbesserung der Zugänglichkeit erhöht). Benutzer können jedoch auch wählen, diese Farben immer oder nie anzuwenden. Diese Browsereinstellung legt diese Präferenz offen.

Der zugrunde liegende Wert ist eine Zeichenkette, die einen der folgenden Werte annehmen kann:

- "high-contrast-only": Anwenden der Benutzerauswahl nur, wenn ein kontrastreiches Design ausgewählt ist. Dies ist der Standard.
- "never": Die Benutzerauswahl niemals anwenden.
- "always": Die Benutzerauswahl immer anwenden.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Einstellung auf "always" setzen:

```js
function logResult(result) {
  console.log(`Setting was modified: ${result}`);
}

browser.browserSettings.overrideDocumentColors
  .set({ value: "always" })
  .then(logResult);
```

{{WebExtExamples}}
