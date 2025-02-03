---
title: "SVGFEBlendElement: in1 Eigenschaft"
short-title: in1
slug: Web/API/SVGFEBlendElement/in1
l10n:
  sourceCommit: ecd1c8ee446a4958297460e548b2ecca18af35a9
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`in1`** der [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) Schnittstelle spiegelt das {{SVGAttr("in")}} Attribut des gegebenen Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feBlend")}} Elemente in einem Filter definiert, jeweils mit einem anderen `in` Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <filter id="blend-filter">
    <feBlend in="SourceGraphic" operator="over" />
    <feBlend in="BackgroundImage" operator="in" />
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

Wir können auf das `in` Attribut zugreifen:

```js
const feBlends = document.querySelectorAll("feBlend");

console.log(feBlends[0].in1.baseVal); // Output: "SourceGraphic"
console.log(feBlends[1].in1.baseVal); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
