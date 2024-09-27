---
title: "Screen: height-Eigenschaft"
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die **`Screen.height`** schreibgeschützte Eigenschaft gibt die Höhe
des Bildschirms in Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
if (window.screen.availHeight !== window.screen.height) {
  // Something is occupying some screen real estate!
}
```

## Hinweise

Beachten Sie, dass nicht die gesamte Höhe, die durch diese Eigenschaft angegeben wird, dem Fenster selbst zur Verfügung stehen muss. Widgets wie Taskleisten oder andere spezielle Anwendungsfenster, die sich in das Betriebssystem integrieren (z. B. der Spinner-Player, der minimiert ist, um wie eine zusätzliche Werkzeugleiste zu fungieren), können den verfügbaren Platz für Browserfenster und andere Anwendungen verringern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
