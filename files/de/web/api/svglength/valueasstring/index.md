---
title: "SVGLength: Eigenschaft valueAsString"
short-title: valueAsString
slug: Web/API/SVGLength/valueAsString
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("SVG")}}

Die Eigenschaft `valueAsString` des [`SVGLength`](/de/docs/Web/API/SVGLength)-Interfaces repräsentiert den Wert des [\<length>](/de/docs/Web/SVG/Guides/Content_type#length) als Zeichenkette, in den Einheiten, die durch [`unitType`](/de/docs/Web/API/SVGLength/unitType) ausgedrückt werden.

Das Setzen dieses Attributs führt dazu, dass [`value`](/de/docs/Web/API/SVGLength/value), [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits) und [`unitType`](/de/docs/Web/API/SVGLength/unitType) automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

## Wert

Eine Zeichenkette.

## Beispiele

### Setzen und Abrufen von `valueAsString`

```js
// Create an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set the length as a string
length.valueAsString = "45%";
console.log(length.valueAsString); // Output: "45%"
console.log(length.unitType); // Output: 2 (SVG_LENGTHTYPE_PERCENTAGE)
console.log(length.valueInSpecifiedUnits); // Output: 45

// Change the length value
length.valueAsString = "100px";
console.log(length.valueAsString); // Output: "100px"
console.log(length.unitType); // Output: 5 (SVG_LENGTHTYPE_PX)
console.log(length.value); // Output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number)
- [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
