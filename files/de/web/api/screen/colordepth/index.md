---
title: "Screen: colorDepth-Eigenschaft"
short-title: colorDepth
slug: Web/API/Screen/colorDepth
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die **`Screen.colorDepth`** schreibgeschützte Eigenschaft gibt die Farbtiefe des Bildschirms zurück. Laut CSSOM geben einige Implementierungen aus Kompatibilitätsgründen `24` zurück. Siehe den Abschnitt zur Browser-Kompatibilität für diejenigen, die dies nicht tun.

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
