---
title: "Bildschirm: height-Eigenschaft"
short-title: height
slug: Web/API/Screen/height
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`Screen.height`** gibt die Höhe des Bildschirms in Pixel zurück.

## Wert

Eine Zahl.

## Beispiele

```js
if (window.screen.availHeight !== window.screen.height) {
  // Etwas beansprucht einen Teil des Bildschirms!
}
```

## Hinweise

Beachten Sie, dass nicht die gesamte durch diese Eigenschaft angegebene Höhe dem Fenster selbst zur Verfügung stehen muss. Widgets wie Taskleisten oder andere spezielle Anwendungsfenster, die sich in das Betriebssystem integrieren (z. B. der Spinner-Player, der minimiert wie eine zusätzliche Symbolleiste unter Windows fungiert), können den für Browserfenster und andere Anwendungen verfügbaren Raum reduzieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
