---
title: "SVGFEBlendElement: mode-Eigenschaft"
short-title: mode
slug: Web/API/SVGFEBlendElement/mode
l10n:
  sourceCommit: ecd1c8ee446a4958297460e548b2ecca18af35a9
---

{{APIRef("SVG")}}

Die **`mode`**-Eigenschaft der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Schnittstelle ist schreibgeschützt und spiegelt das {{SVGAttr("mode")}}-Attribut des angegebenen Elements wider. Sie nimmt einen der auf dieser Schnittstelle definierten `SVG_FEBLEND_MODE_*`-Konstanten an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration).

## Beispiele

### Zugriff auf die `mode`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blend-filter">
    <feBlend in="SourceGraphic" in2="SourceAlpha" mode="multiply" />
    <feBlend in="SourceGraphic" in2="BackgroundImage" mode="screen" />
  </filter>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:red;"
    filter="url(#blend-filter)" />
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#blend-filter)" />
</svg>
```

```js
const blends = document.querySelectorAll("feBlend");

console.log(blends[0].mode.baseVal); // Output: 2 (SVG_FEBLEND_MODE_MULTIPLY)
console.log(blends[1].mode.baseVal); // Output: 3 (SVG_FEBLEND_MODE_SCREEN)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
