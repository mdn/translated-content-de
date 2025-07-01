---
title: "SVGFEBlendElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEBlendElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft des [`SVGFEBlendElement`](/de/docs/Web/API/SVGFEBlendElement) Interfaces spiegelt das {{SVGAttr("in")}} Attribut des gegebenen Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) Objekt.

## Beispiele

In diesem Beispiel sind zwei {{SVGElement("feBlend")}} Elemente in einem Filter definiert, jedes mit einem anderen `in` Attribut.

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
    fill="red"
    filter="url(#blend-filter)" />
  <circle cx="100" cy="100" r="50" fill="blue" filter="url(#blend-filter)" />
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
