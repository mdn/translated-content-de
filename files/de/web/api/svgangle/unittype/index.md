---
title: "SVGAngle: unitType-Eigenschaft"
short-title: unitType
slug: Web/API/SVGAngle/unitType
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

Die **`unitType`**-Eigenschaft des [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Interfaces ist eine der [konstanten Einheitstypen](/de/docs/Web/API/SVGAngle#constants) und gibt die Einheiten an, in denen der Wert dieses Winkels ausgedrückt wird.

## Wert

Eine Zahl, die den numerischen Wert der Konstanten darstellt.

## Beispiele

Hier ist ein Beispiel, wie Sie auf die `unitType`-Eigenschaft zugreifen können:

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle value
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// Check the unit type
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
