---
title: "Screen: Eigenschaft colorDepth"
short-title: colorDepth
slug: Web/API/Screen/colorDepth
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Die schreibgeschützte Eigenschaft **`Screen.colorDepth`** gibt die Farbtiefe des Bildschirms zurück. Gemäß dem CSSOM geben einige Implementierungen `24` aus Kompatibilitätsgründen zurück. Siehe den Abschnitt zur Browser-Kompatibilität für diejenigen, die dies nicht tun.

## Wert

Eine Zahl.

## Beispiele

```js
// Check the color depth of the screen
if (window.screen.colorDepth < 8) {
  // Use low-color version of page
} else {
  // Use regular, colorful page
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.pixelDepth`](/de/docs/Web/API/Screen/pixelDepth)
