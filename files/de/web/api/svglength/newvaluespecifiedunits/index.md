---
title: "SVGLength: newValueSpecifiedUnits() Methode"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGLength/newValueSpecifiedUnits
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}

Die Methode `newValueSpecifiedUnits()` der [`SVGLength`](/de/docs/Web/API/SVGLength)-Schnittstelle setzt den Wert als Zahl mit einem zugehörigen [`unitType`](/de/docs/Web/API/SVGLength/unitType) zurück und ersetzt damit die Werte aller Attribute des Objekts.

## Syntax

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
```

### Parameter

- `unitType`
  - : Ein konstantes Zeichen, das den Einheitstyp darstellt, in den der Längenwert umgewandelt werden soll. Dies muss einer der konstanten Werte sein, die für die [`unitType`](/de/docs/Web/API/SVGLength/unitType)-Eigenschaft definiert sind, mit Ausnahme von `SVG_LENGTHTYPE_UNKNOWN`.
    - `SVGLength.SVG_LENGTHTYPE_NUMBER`: Umwandlung in eine einheitslose Zahl
    - `SVGLength.SVG_LENGTHTYPE_PERCENTAGE`: Umwandlung in Prozent
    - `SVGLength.SVG_LENGTHTYPE_EMS`: Umwandlung in em-Einheiten
    - `SVGLength.SVG_LENGTHTYPE_EXS`: Umwandlung in ex-Einheiten
    - `SVGLength.SVG_LENGTHTYPE_PX`: Umwandlung in Pixel
    - `SVGLength.SVG_LENGTHTYPE_CM`: Umwandlung in Zentimeter
    - `SVGLength.SVG_LENGTHTYPE_MM`: Umwandlung in Millimeter
    - `SVGLength.SVG_LENGTHTYPE_IN`: Umwandlung in Zoll
    - `SVGLength.SVG_LENGTHTYPE_PT`: Umwandlung in Punkte
    - `SVGLength.SVG_LENGTHTYPE_PC`: Umwandlung in Picas

- `valueInSpecifiedUnits`
  - : Der numerische Faktor für den Längenwert, ausgedrückt in dem angegebenen Einheitstyp.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `unitType` `SVG_LENGTHTYPE_UNKNOWN` oder kein gültiger Einheitstyp ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGLength`](/de/docs/Web/API/SVGLength) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Setzen eines Längenwerts mit bestimmten Einheiten

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set a new value with specific units
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_NUMBER, 45);
console.log(length.valueInSpecifiedUnits); // Output: 45
console.log(length.unitType); // Output: 1 (SVG_LENGTHTYPE_NUMBER)
console.log(length.value); // The value converted to the user coordinate system

// Change the value to pixels
length.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PX, 100);
console.log(length.valueInSpecifiedUnits); // Output: 100
console.log(length.unitType); // Output: 5 (SVG_LENGTHTYPE_PX)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
