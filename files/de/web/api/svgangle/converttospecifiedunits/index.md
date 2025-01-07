---
title: "SVGAngle: convertToSpecifiedUnits() Methode"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGAngle/convertToSpecifiedUnits
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

Die `convertToSpecifiedUnits()`-Methode der [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Schnittstelle ermöglicht es Ihnen, den Wert des Winkels in den angegebenen Einheitentyp zu konvertieren.

Diese Funktion wird:

- Die [`unitType`](/de/docs/Web/API/SVGAngle/unitType)-Eigenschaft auf den angegebenen Einheitentyp setzen
- Die Eigenschaften [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits) und [`valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString) aktualisieren, sodass der Winkelwert im angegebenen Einheitentyp dargestellt wird

## Syntax

```js-nolint
svgAngle.convertToSpecifiedUnits(unitType)
```

### Parameter

- `unitType`
  - : Eine Konstante, die den Einheitentyp darstellt, in den der Winkelwert konvertiert werden soll. Dies muss einer der konstanten Werte sein, die für die [`unitType`](/de/docs/Web/API/SVGAngle/unitType)-Eigenschaft definiert sind, mit Ausnahme von `SVG_ANGLETYPE_UNKNOWN`.
    - `SVGAngle.SVG_ANGLETYPE_DEG`: In Grad konvertieren
    - `SVGAngle.SVG_ANGLETYPE_RAD`: In Bogenmaß konvertieren
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: In Gon konvertieren
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: In eine einheitenlose Zahl konvertieren, die als Grad interpretiert wird

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

### Konvertierung eines Winkels in Grad

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians (Math.PI / 2)
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Retrieve the angle's value as a string
console.log(angle.valueAsString); // Output: 1.5708rad
console.log(angle.unitType); // Output: 3 (SVG_ANGLETYPE_RAD)

// Convert the angle's value to degrees
angle.convertToSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG);

// Retrieve the angle's value as a string
console.log(angle.valueAsString); // Output: 90deg
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
