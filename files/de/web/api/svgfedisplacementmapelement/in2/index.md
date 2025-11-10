---
title: "SVGFEDisplacementMapElement: Eigenschaft in2"
short-title: in2
slug: Web/API/SVGFEDisplacementMapElement/in2
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in2`** schreibgeschützte Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle spiegelt das {{SVGAttr("in2")}}-Attribut des gegebenen {{SVGElement("feDisplacementMap")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel sind zwei {{SVGElement("feDisplacementMap")}}-Elemente in einem Filter definiert, jedes mit einem unterschiedlichen `in2`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- First Displacement Map -->
      <feDisplacementMap in="SourceGraphic" in2="BackgroundImage" scale="20">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>

      <!-- Second Displacement Map -->
      <feDisplacementMap in="SourceGraphic" in2="BackgroundImage" scale="30">
        <feFuncR type="table" tableValues="0.5 1" />
      </feDisplacementMap>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#filter1)" />
  <circle cx="100" cy="100" r="50" fill="blue" filter="url(#filter1)" />
</svg>
```

Wir können auf das `in2`-Attribut zugreifen:

```js
const displacementMaps = document.querySelectorAll("feDisplacementMap");

console.log(displacementMaps[0].getAttribute("in2")); // Output: "BackgroundImage"
console.log(displacementMaps[1].getAttribute("in2")); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
