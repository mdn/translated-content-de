---
title: "Screen: pixelDepth-Eigenschaft"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Gibt die Farbtiefe des Bildschirms zurück. Gemäß dem CSSOM geben einige Implementierungen `24` aus Kompatibilitätsgründen zurück. Weitere Informationen finden Sie im Abschnitt zur [Browser-Kompatibilität](#browser-kompatibilität).

## Wert

Eine Zahl.

## Beispiele

```js
// if there is not adequate bit depth
// choose a simpler color
document.style.color = window.screen.pixelDepth > 8 ? "#FAEBD7" : "#FFFFFF";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Screen.colorDepth`](/de/docs/Web/API/Screen/colorDepth)
