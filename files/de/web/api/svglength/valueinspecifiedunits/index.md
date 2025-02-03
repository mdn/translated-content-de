---
title: "SVGLength: valueInSpecifiedUnits-Eigenschaft"
short-title: valueInSpecifiedUnits
slug: Web/API/SVGLength/valueInSpecifiedUnits
l10n:
  sourceCommit: 59c2a6eb9c36970aaef347707c8dcf6fbcc14499
---

{{APIRef("SVG")}}

Die `valueInSpecifiedUnits`-Eigenschaft der [`SVGLength`](/de/docs/Web/API/SVGLength)-Schnittstelle repräsentiert den Gleitkommawert in den Einheiten, die durch [`unitType`](/de/docs/Web/API/SVGLength/unitType) ausgedrückt werden.

Das Setzen dieses Attributs führt dazu, dass [`value`](/de/docs/Web/API/SVGLength/value) und [`valueAsString`](/de/docs/Web/API/SVGLength/valueAsString) automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

## Wert

Der numerische Faktor der Länge als float.

## Beispiele

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set the value of the length
length.value = 10;
console.log(length.valueInSpecifiedUnits); // Output: 10

// Update the numeric factor of the length
length.valueInSpecifiedUnits = 20;
console.log(length.valueInSpecifiedUnits); // Output: 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
