---
title: "Screen: height-Eigenschaft"
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: a4c1cd245065418c721b27632867159da57c5ad5
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`Screen.height`**-Eigenschaft gibt die Höhe des Bildschirms in CSS-Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
if (window.screen.availHeight !== window.screen.height) {
  // Something is occupying some screen real estate!
}
```

## Anmerkungen

Beachten Sie, dass nicht die gesamte von dieser Eigenschaft angegebene Höhe dem Fenster selbst zur Verfügung stehen muss. Widgets wie Taskleisten oder andere spezielle Anwendungsfenster, die sich in das Betriebssystem integrieren (z. B. der Spinner-Player, der minimiert wie eine zusätzliche Symbolleiste auf Windows fungiert), können den verfügbaren Platz für Browserfenster und andere Anwendungen verringern. Es gibt einen Unterschied zwischen `window.screen.height` und `window.screen.availHeight`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
