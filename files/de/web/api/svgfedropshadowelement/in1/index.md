---
title: "SVGFEDropShadowElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEDropShadowElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`**-Schreibgeschützte Eigenschaft der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feDropShadow")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feDropShadow")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- First Drop Shadow applied to the SourceGraphic -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5"
        flood-color="red" />
      <!-- Second Drop Shadow applied to the BackgroundImage -->
      <feDropShadow
        in="BackgroundImage"
        dx="-10"
        dy="-10"
        stdDeviation="5"
        flood-color="blue" />
    </filter>
  </defs>
  <!-- Rectangle with red shadow -->
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#drop-shadow-filter)" />
  <!-- Circle with blue shadow -->
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="blue"
    filter="url(#drop-shadow-filter)" />
</svg>
```

Wir können auf das `in`-Attribut zugreifen:

```js
const dropShadows = document.querySelectorAll("feDropShadow");

console.log(dropShadows[0].in1.baseVal); // Output: "SourceGraphic"
console.log(dropShadows[1].in1.baseVal); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
