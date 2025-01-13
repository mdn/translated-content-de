---
title: "SVGAngle: unitType-Eigenschaft"
short-title: unitType
slug: Web/API/SVGAngle/unitType
l10n:
  sourceCommit: a53253307ade5c6e3eec896a5f2d799fdebe9ae8
---

{{APIRef("SVG")}}

Die **`unitType`**-Eigenschaft des [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Interfaces ist eine der [Konstanten für Einheitstypen](/de/docs/Web/API/SVGAngle#constants) und repräsentiert die Einheiten, in denen der Wert dieses Winkels ausgedrückt wird.

## Wert

Eine Zahl, die den numerischen Wert der Konstante repräsentiert.

## Beispiele

Hier ist ein Beispiel, wie man auf die `unitType`-Eigenschaft zugreift:

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
