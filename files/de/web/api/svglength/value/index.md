---
title: "SVGLength: value-Eigenschaft"
short-title: value
slug: Web/API/SVGLength/value
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die `value`-Eigenschaft des [`SVGLength`](/de/docs/Web/API/SVGLength)-Interface repräsentiert den Gleitkommawert der [\<length>](/de/docs/Web/SVG/Guides/Content_type#length) in Benutzereinheiten.

Das Setzen dieses Attributs wird dazu führen, dass [`SVGLength.valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits) und [`SVGLength.valueAsString`](/de/docs/Web/API/SVGLength/valueAsString) automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

## Wert

Der Längenwert in Benutzereinheiten als Gleitkommazahl.

## Beispiele

```js
// Get an SVGLength object
const svg = document.querySelector("svg");
const length = svg.createSVGLength();

// Set the value
length.value = 10;
console.log(length.value); // Output: 10

// Reflecting the value
length.value = 20;
console.log(length.value); // Output: 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)
