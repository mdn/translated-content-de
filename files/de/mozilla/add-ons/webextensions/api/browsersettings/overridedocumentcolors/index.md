---
title: browserSettings.overrideDocumentColors
slug: Mozilla/Add-ons/WebExtensions/API/browserSettings/overrideDocumentColors
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein {{WebExtAPIRef("types.BrowserSetting", "BrowserSetting")}} Objekt, dessen zugrunde liegender Wert eine Zeichenkette ist.

Firefox ermöglicht es dem Benutzer, eigene Farben für Hintergrund und Text von Dokumenten festzulegen. Standardmäßig werden diese Werte nur angewendet, wenn ein Hochkontrast-Thema ausgewählt ist (ein Hochkontrast-Thema ist eine Funktion einiger Betriebssystem-Oberflächen, die den Kontrast für eine verbesserte Zugänglichkeit erhöht). Benutzer können jedoch auch wählen, diese Farben immer oder nie anzuwenden. Diese Browser-Einstellung gibt diese Präferenz an.

Der zugrunde liegende Wert ist eine Zeichenkette, die einen der folgenden Werte annehmen kann:

- "high-contrast-only": Anwenden der Benutzerwahl nur dann, wenn ein Hochkontrast-Thema ausgewählt ist. Dies ist die Standardeinstellung.
- "never": Nie die Benutzerwahl anwenden.
- "always": Immer die Benutzerwahl anwenden.

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
