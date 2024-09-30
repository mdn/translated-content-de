---
title: "Screen: height-Eigenschaft"
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`Screen.height`** gibt die Höhe
des Bildschirms in Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
if (window.screen.availHeight !== window.screen.height) {
  // Something is occupying some screen real estate!
}
```

## Anmerkungen

Beachten Sie, dass nicht die gesamte durch diese Eigenschaft angegebene Höhe dem Fenster
selbst zur Verfügung stehen muss. Widgets wie Taskleisten oder andere spezielle Anwendungsfenster, die in das Betriebssystem integriert sind (z.B. der Spinner-Player, der minimiert wird, um wie eine zusätzliche Symbolleiste in Windows zu agieren), können die Menge an verfügbarem Platz für Browserfenster und andere Anwendungen reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
