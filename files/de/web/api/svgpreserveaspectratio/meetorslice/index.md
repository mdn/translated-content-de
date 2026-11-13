---
title: "SVGPreserveAspectRatio: Eigenschaft meetOrSlice"
short-title: meetOrSlice
slug: Web/API/SVGPreserveAspectRatio/meetOrSlice
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("SVG")}}

Die Eigenschaft **`meetOrSlice`** der Schnittstelle [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) gibt den Typ des meet-or-slice-Werts an, der durch eine der in dieser Schnittstelle definierten `SVG_MEETORSLICE_*`-Konstanten festgelegt wird.

## Wert

Einer der folgenden Werte:

- `SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET` (1)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE` (2)

## Beispiele

### Zugriff auf die Eigenschaft `meetOrSlice`

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="400"
  height="200"
  preserveAspectRatio="xMidYMid slice">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");

// Access the meetOrSlice property
console.log(svgElement.preserveAspectRatio.baseVal.meetOrSlice); // Output: 2 (SVG_MEETORSLICE_SLICE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
