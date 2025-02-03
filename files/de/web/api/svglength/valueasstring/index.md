---
title: "SVGLength: valueAsString-Eigenschaft"
short-title: valueAsString
slug: Web/API/SVGLength/valueAsString
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

Die `valueAsString`-Eigenschaft der [`SVGLength`](/de/docs/Web/API/SVGLength)-Schnittstelle repräsentiert den Wert des [\<length>](/de/docs/Web/SVG/Content_type#length) als Zeichenkette, in den durch `unitType` ausgedrückten Einheiten.

Das Setzen dieses Attributs führt dazu, dass `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert werden, um diese Einstellung zu reflektieren.

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

- [`<number>`](/de/docs/Web/SVG/Content_type#number)
- [`<length>`](/de/docs/Web/SVG/Content_type#length)
- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
