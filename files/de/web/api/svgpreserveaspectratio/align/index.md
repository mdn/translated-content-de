---
title: "SVGPreserveAspectRatio: align-Eigenschaft"
short-title: align
slug: Web/API/SVGPreserveAspectRatio/align
l10n:
  sourceCommit: 59fec48b4572624a0b23bc98385dd05029125a76
---

{{APIRef("SVG")}}

Die schreibgeschützte **`align`**-Eigenschaft der [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)-Schnittstelle reflektiert den Typ des Ausrichtungswertes, wie er von einer der `SVG_PRESERVEASPECTRATIO_*`-Konstanten definiert ist, die in dieser Schnittstelle festgelegt sind.

## Wert

Einer der folgenden:

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

### Zugriff auf die `align`-Eigenschaft

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
