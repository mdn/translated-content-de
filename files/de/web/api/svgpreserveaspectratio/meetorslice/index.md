---
title: "SVGPreserveAspectRatio: meetOrSlice-Eigenschaft"
short-title: meetOrSlice
slug: Web/API/SVGPreserveAspectRatio/meetOrSlice
l10n:
  sourceCommit: 59fec48b4572624a0b23bc98385dd05029125a76
---

{{APIRef("SVG")}}

Die **`meetOrSlice`**-Eigenschaft der [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)-Schnittstelle gibt den Typ des "meet-or-slice"-Wertes wieder, wie er durch eine der `SVG_MEETORSLICE_*`-Konstanten, die auf dieser Schnittstelle definiert sind, spezifiziert wird.

## Wert

Einer der folgenden:

- `SVGPreserveAspectRatio.SVG_MEETORSLICE_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_MEET` (1)
- `SVGPreserveAspectRatio.SVG_MEETORSLICE_SLICE` (2)

## Beispiele

### Zugriff auf die `meetOrSlice`-Eigenschaft

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
