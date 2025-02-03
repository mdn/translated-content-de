---
title: "SVGLength: newValueSpecifiedUnits() Methode"
short-title: newValueSpecifiedUnits()
slug: Web/API/SVGLength/newValueSpecifiedUnits
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

Die `newValueSpecifiedUnits()`-Methode der [`SVGLength`](/de/docs/Web/API/SVGLength)-Schnittstelle setzt den Wert als Zahl mit einem zugehörigen [`unitType`](/de/docs/Web/API/SVGLength/unitType) zurück und ersetzt dadurch die Werte aller Attribute des Objekts.

## Syntax

```js-nolint
newValueSpecifiedUnits(unitType, valueInSpecifiedUnits)
```

### Parameter

- `unitType`

  - : Eine Konstante, die den Einheitstyp repräsentiert, in den der Längenwert umgewandelt werden soll. Dies muss einer der konstanten Werte sein, die für die [`unitType`](/de/docs/Web/API/SVGLength/unitType)-Eigenschaft definiert sind, mit Ausnahme von `SVG_LENGTHTYPE_UNKNOWN`.
    - `SVGLength.SVG_LENGTHTYPE_NUMBER`: in einheitenlose Zahl umwandeln
    - `SVGLength.SVG_LENGTHTYPE_PERCENTAGE`: in Prozentsatz umwandeln
    - `SVGLength.SVG_LENGTHTYPE_EMS`: in EM-Einheiten umwandeln
    - `SVGLength.SVG_LENGTHTYPE_EXS`: in EX-Einheiten umwandeln
    - `SVGLength.SVG_LENGTHTYPE_PX`: in Pixel umwandeln
    - `SVGLength.SVG_LENGTHTYPE_CM`: in Zentimeter umwandeln
    - `SVGLength.SVG_LENGTHTYPE_MM`: in Millimeter umwandeln
    - `SVGLength.SVG_LENGTHTYPE_IN`: in Zoll umwandeln
    - `SVGLength.SVG_LENGTHTYPE_PT`: in Punkte umwandeln
    - `SVGLength.SVG_LENGTHTYPE_PC`: in Picas umwandeln

- `valueInSpecifiedUnits`
  - : Der numerische Faktor für den Längenwert, ausgedrückt in der angegebenen Einheit.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

Diese Methode kann eine [`DOMException`](/de/docs/Web/API/DOMException) der folgenden Typen auslösen:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `unitType` `SVG_LENGTHTYPE_UNKNOWN` ist oder keine gültige Einheitstypkonstante ist.
- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn [`SVGLength`](/de/docs/Web/API/SVGLength) einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Beispiele

### Setzen eines Längenwerts mit spezifischen Einheiten

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
