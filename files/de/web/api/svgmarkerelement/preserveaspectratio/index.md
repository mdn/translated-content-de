---
title: "SVGMarkerElement: preserveAspectRatio Eigenschaft"
short-title: preserveAspectRatio
slug: Web/API/SVGMarkerElement/preserveAspectRatio
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Die **`preserveAspectRatio`** schreibgeschützte Eigenschaft der [`SVGMarkerElement`](/de/docs/Web/API/SVGMarkerElement)-Schnittstelle gibt ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt zurück, das den Wert des {{SVGattr("preserveAspectRatio")}}-Attributs des {{SVGElement("marker")}} enthält.

## Wert

Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGPreserveAspectRatio`](/de/docs/Web/API/SVGPreserveAspectRatio)-Objekt mit den folgenden Eigenschaften zurück:

- `align`

  - : Eine der folgenden numerischen Konstanten:

    - `0`
      - : `SVG_PRESERVEASPECTRATIO_UNKNOWN`
    - `1`
      - : `SVG_PRESERVEASPECTRATIO_NONE`
    - `2`
      - : `SVG_PRESERVEASPECTRATIO_XMINYMIN`
    - `3`
      - : `SVG_PRESERVEASPECTRATIO_XMIDYMIN`
    - `4`
      - : `SVG_PRESERVEASPECTRATIO_XMAXYMIN`
    - `5`
      - : `SVG_PRESERVEASPECTRATIO_XMINYMID`
    - `6`
      - : `SVG_PRESERVEASPECTRATIO_XMIDYMID`
    - `7`
      - : `SVG_PRESERVEASPECTRATIO_XMAXYMID`
    - `8`
      - : `SVG_PRESERVEASPECTRATIO_XMINYMAX`
    - `9`
      - : `SVG_PRESERVEASPECTRATIO_XMIDYMAX`
    - `10`
      - : `SVG_PRESERVEASPECTRATIO_XMAXYMAX`

- `meetOrSlice`

  - : Eine der folgenden numerischen Konstanten:

    - `0`
      - : `SVG_MEETORSLICE_UNKNOWN`
    - `1`
      - : `SVG_MEETORSLICE_MEET`
    - `2`
      - : `SVG_MEETORSLICE_SLICE`

## Beispiele

Dieses Beispiel zeigt, wie die numerischen Konstanten für `align` und `meetOrSlice` zurückgegeben werden, die sich auf die für das {{SVGattr("preserveAspectRatio")}}-Attribut des {{SVGElement("marker")}} festgelegten Werte beziehen.

```html
<svg id="svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="arrow"
      viewBox="0 0 10 10"
      refX="5"
      refY="5"
      preserveAspectRatio="xMidYMid meet"
      markerWidth="6"
      markerHeight="6"
      orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
  </defs>
</svg>
```

```js
let marker = document.getElementById("arrow");
console.log(marker.preserveAspectRatio.baseVal.align); // 6
console.log(marker.preserveAspectRatio.baseVal.meetOrSlice); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
