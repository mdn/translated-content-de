---
title: "Screen: width Eigenschaft"
short-title: width
slug: Web/API/Screen/width
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`Screen.width`** gibt die Breite des Bildschirms in CSS-Pixeln zurück.

## Wert

Eine Zahl.

## Beispiele

```js
// Crude way to check that the screen is at least 1024x768
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  // Resolution is 1024x768 or above
}
```

## Anmerkungen

Beachten Sie, dass nicht die gesamte von dieser Eigenschaft angegebene Breite dem Fenster selbst zur Verfügung stehen muss. Wenn andere Widgets Platz beanspruchen, der vom `window`-Objekt nicht genutzt werden kann, gibt es einen Unterschied zwischen `window.screen.width` und `window.screen.availWidth`. Siehe auch [`screen.height`](/de/docs/Web/API/Screen/height).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
