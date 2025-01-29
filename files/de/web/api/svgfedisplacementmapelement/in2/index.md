---
title: "SVGFEDisplacementMapElement: in2 Eigenschaft"
short-title: in2
slug: Web/API/SVGFEDisplacementMapElement/in2
l10n:
  sourceCommit: 243703c2241af83f51991c4dcdbdfbe6c8f6c8cd
---

{{APIRef("SVG")}}

Die **`in2`** schreibgeschützte Eigenschaft des [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement) Interfaces spiegelt das {{SVGAttr("in2")}} Attribut des gegebenen {{SVGElement("feDisplacementMap")}} Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feDisplacementMap")}} Elemente in einem Filter definiert, jedes mit einem unterschiedlichen `in2` Attribut.

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
    style="fill:red;"
    filter="url(#filter1)" />
  <circle cx="100" cy="100" r="50" style="fill:blue;" filter="url(#filter1)" />
</svg>
```

Wir können auf das `in2` Attribut zugreifen:

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
