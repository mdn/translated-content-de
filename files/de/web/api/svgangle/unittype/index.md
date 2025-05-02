---
title: "SVGAngle: unitType-Eigenschaft"
short-title: unitType
slug: Web/API/SVGAngle/unitType
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`unitType`**-Eigenschaft der [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Schnittstelle ist eine der [Einheitstyp-Konstanten](/de/docs/Web/API/SVGAngle#static_properties) und stellt die Einheiten dar, in denen der Wert dieses Winkels ausgedrückt wird.

## Wert

Eine Zahl, die den numerischen Wert der Konstante darstellt.

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
