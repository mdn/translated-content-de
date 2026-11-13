---
title: "SVGPreserveAspectRatio: Eigenschaft align"
short-title: align
slug: Web/API/SVGPreserveAspectRatio/align
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{APIRef("SVG")}}

Die Eigenschaft **`align`** der Schnittstelle [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio) gibt den Typ des Ausrichtungswerts wieder, der durch eine der auf dieser Schnittstelle definierten `SVG_PRESERVEASPECTRATIO_*`-Konstanten festgelegt wird.

## Wert

Einer der folgenden Werte:

- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_UNKNOWN` (0)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_NONE` (1)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMIN` (2)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMIN` (3)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMIN` (4)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMID` (5)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMID` (6)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMID` (7)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMINYMAX` (8)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMIDYMAX` (9)
- `SVGPreserveAspectRatio.SVG_PRESERVEASPECTRATIO_XMAXYMAX` (10)

## Beispiele

### Zugriff auf die Eigenschaft `align`

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="400"
  height="200"
  preserveAspectRatio="xMidYMid meet">
  <circle cx="100" cy="100" r="50" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");

// Access the align property
console.log(svgElement.preserveAspectRatio.baseVal.align); // Output: 6 (SVG_PRESERVEASPECTRATIO_XMIDYMID)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
