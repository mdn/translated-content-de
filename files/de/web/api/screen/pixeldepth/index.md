---
title: "Screen: pixelDepth Eigenschaft"
short-title: pixelDepth
slug: Web/API/Screen/pixelDepth
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("CSSOM")}}

Gibt die Farbtiefe des Bildschirms zurück. Gemäß dem CSSOM geben einige Implementierungen `24` aus Kompatibilitätsgründen zurück. Sehen Sie sich den Abschnitt über die [Browserkompatibilität](#browserkompatibilität) an, um zu erfahren, welche dies nicht tun.

## Wert

Eine Zahl.

## Beispiele

```js
// wenn die Farbtiefe nicht ausreichend ist
// wählen Sie eine einfachere Farbe
document.style.color = window.screen.pixelDepth > 8 ? "#FAEBD7" : "#FFFFFF";
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Screen.colorDepth")}}
