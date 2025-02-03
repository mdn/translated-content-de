---
title: "SVGFEBlendElement: in2-Eigenschaft"
short-title: in2
slug: Web/API/SVGFEBlendElement/in2
l10n:
  sourceCommit: ecd1c8ee446a4958297460e548b2ecca18af35a9
---

{{APIRef("SVG")}}

Die **`in2`** schreibgeschützte Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement)-Interfaces spiegelt das {{SVGAttr("in2")}}-Attribut des gegebenen Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel sind zwei {{SVGElement("feBlend")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in2`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blend-filter">
    <feBlend in="SourceGraphic" in2="SourceAlpha" operator="over" />
    <feBlend in="SourceGraphic" in2="BackgroundImage" operator="in" />
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

Wir können auf das `in2`-Attribut zugreifen:

```js
const feBlends = document.querySelectorAll("feBlend");

console.log(feBlends[0].in2.baseVal); // Output: "SourceAlpha"
console.log(feBlends[1].in2.baseVal); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
