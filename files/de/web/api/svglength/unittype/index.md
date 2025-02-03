---
title: "SVGLength: unitType-Eigenschaft"
short-title: unitType
slug: Web/API/SVGLength/unitType
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

Die **`unitType`**-Eigenschaft der [`SVGLength`](/de/docs/Web/API/SVGLength)-Schnittstelle repräsentiert den Typ des Werts, wie durch eine der `SVG_LENGTHTYPE_*` Konstanten definiert, die auf dieser Schnittstelle definiert sind.

## Wert

Einer der folgenden:

- `SVGLength.SVG_LENGTHTYPE_UNKNOWN` (0)
- `SVGLength.SVG_LENGTHTYPE_NUMBER` (1)
- `SVGLength.SVG_LENGTHTYPE_PERCENTAGE` (2)
- `SVGLength.SVG_LENGTHTYPE_EMS` (3)
- `SVGLength.SVG_LENGTHTYPE_EXS` (4)
- `SVGLength.SVG_LENGTHTYPE_PX` (5)
- `SVGLength.SVG_LENGTHTYPE_CM` (6)
- `SVGLength.SVG_LENGTHTYPE_MM` (7)
- `SVGLength.SVG_LENGTHTYPE_IN` (8)
- `SVGLength.SVG_LENGTHTYPE_PT` (9)
- `SVGLength.SVG_LENGTHTYPE_PC` (10)

## Beispiele

Hier ist ein Beispiel, wie Sie auf die `unitType`-Eigenschaft zugreifen können:

```js
// Get an SVGLength object
const svg = document.querySelector("svg");

// Assume `length` is an instance of SVGLength
const length = svg.createSVGLength();

// Set the length value
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PERCENTAGE, 20);

// Check the unit type
console.log(length.unitType); // Output: 2 (SVG_LENGTHTYPE_PERCENTAGE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
