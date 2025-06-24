---
title: "SVGAngle: newValueSpecifiedUnits() Methode"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGAngle/newValueSpecifiedUnits
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("SVG")}}

Die `newValueSpecifiedUnits()`-Methode des [`SVGAngle`](/de/docs/Web/API/SVGAngle)-Interfaces setzt den Wert auf eine Zahl mit einem zugehörigen [`unitType`](/de/docs/Web/API/SVGAngle/unitType) und ersetzt damit die Werte aller Attribute des Objekts.

## Syntax

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
```

### Parameter

- `unitType`

  - : Eine Konstante, die den Einheitentyp darstellt, in den der Wert des Winkels umgewandelt werden soll. Dies muss einer der für die [`unitType`](/de/docs/Web/API/SVGAngle/unitType)-Eigenschaft definierten konstanten Werte sein, mit Ausnahme von `SVG_ANGLETYPE_UNKNOWN`.
    - `SVGAngle.SVG_ANGLETYPE_DEG`: Umwandlung in Grad
    - `SVGAngle.SVG_ANGLETYPE_RAD`: Umwandlung in Radiant
    - `SVGAngle.SVG_ANGLETYPE_GRAD`: Umwandlung in Gon
    - `SVGAngle.SVG_ANGLETYPE_UNSPECIFIED`: Umwandlung in eine einheitenlose Zahl, interpretiert als Grad

- `valueInSpecifiedUnits`
  - : Der numerische Faktor für den Winkelwert, ausgedrückt im angegebenen Einheitentyp.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) einer der folgenden Typen auslösen:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn `unitType` `SVG_ANGLETYPE_UNKNOWN` ist oder keine gültige Einheitentypkonstante ist.

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGAngle`](/de/docs/Web/API/SVGAngle) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Einstellung eines Winkels in Grad

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in degrees using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_DEG, 45);

// Retrieve the angle's value in degrees
console.log(angle.value); // Output: 45
console.log(angle.unitType); // Output: 2 (SVG_ANGLETYPE_DEG)
```

### Einstellung eines Winkels in Radiant

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in radians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_RAD, Math.PI / 2);

// Retrieve the angle's value
console.log(angle.value); // Output: 90
console.log(angle.unitType); // Output: 3 (SVG_ANGLETYPE_RAD)
```

### Einstellung eines Winkels in Gon

```js
// Get an SVGAngle object
const svg = document.querySelector("svg");
const angle = svg.createSVGAngle();

// Set the angle's value in gradians using newValueSpecifiedUnits()
angle.newValueSpecifiedUnits(SVGAngle.SVG_ANGLETYPE_GRAD, 100);

// Retrieve the angle's value in gradians
console.log(angle.value); // Output: 90
console.log(angle.unitType); // Output: 4 (SVG_ANGLETYPE_GRAD)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)
