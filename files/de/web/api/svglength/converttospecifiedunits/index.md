---
title: "SVGLength: convertToSpecifiedUnits()-Methode"
short-title: convertToSpecifiedUnits()
slug: Web/API/SVGLength/convertToSpecifiedUnits
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

Die `convertToSpecifiedUnits()`-Methode des [`SVGLength`](/de/docs/Web/API/SVGLength)-Interfaces ermöglicht es Ihnen, den Wert der Länge in den angegebenen Einheitstyp umzuwandeln.

Diese Funktion wird:

- Die [`unitType`](/de/docs/Web/API/SVGLength/unitType)-Eigenschaft auf den angegebenen Einheitstyp setzen
- Die Eigenschaften [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits) und [`valueAsString`](/de/docs/Web/API/SVGLength/valueAsString) aktualisieren, sodass der Längenwert in dem angegebenen Einheitstyp dargestellt wird

## Syntax

```js-nolint
convertToSpecifiedUnits(unitType)
```

### Parameter

- `unitType`
  - : Eine Konstante, die den Einheitstyp darstellt, in den der Längenwert umgewandelt werden soll. Dies muss einer der konstanten Werte sein, die für die [`unitType`](/de/docs/Web/API/SVGLength/unitType)-Eigenschaft definiert sind, mit Ausnahme von `SVG_LENGTHTYPE_UNKNOWN`.
    - `SVGLength.SVG_LENGTHTYPE_NUMBER`: Umwandlung in eine einheitslose Zahl
    - `SVGLength.SVG_LENGTHTYPE_PERCENTAGE`: Umwandlung in Prozentsatz
    - `SVGLength.SVG_LENGTHTYPE_EMS`: Umwandlung in "em"-Einheiten
    - `SVGLength.SVG_LENGTHTYPE_EXS`: Umwandlung in "ex"-Einheiten
    - `SVGLength.SVG_LENGTHTYPE_PX`: Umwandlung in Pixel
    - `SVGLength.SVG_LENGTHTYPE_CM`: Umwandlung in Zentimeter
    - `SVGLength.SVG_LENGTHTYPE_MM`: Umwandlung in Millimeter
    - `SVGLength.SVG_LENGTHTYPE_IN`: Umwandlung in Zoll
    - `SVGLength.SVG_LENGTHTYPE_PT`: Umwandlung in Punkte
    - `SVGLength.SVG_LENGTHTYPE_PC`: Umwandlung in Picas

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

## Beispiele

### Umwandlung einer Länge in mm

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set a length value in centimeters
length.valueAsString = "0.5cm";

// Convert the length to millimeters
length.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_MM);

console.log(length.unitType); // Output: 7 (SVG_LENGTHTYPE_MM)
console.log(length.valueInSpecifiedUnits); // Output: 5
console.log(length.valueAsString); // Output: "5mm"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
