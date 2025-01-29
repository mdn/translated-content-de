---
title: "SVGFEDisplacementMapElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEDisplacementMapElement/in1
l10n:
  sourceCommit: 243703c2241af83f51991c4dcdbdfbe6c8f6c8cd
---

{{APIRef("SVG")}}

Die **`in1`**-Schreibgeschützte Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feDisplacementMap")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

In diesem Beispiel werden zwei {{SVGElement("feDisplacementMap")}}-Elemente in einem Filter definiert, jedes mit einem anderen `in`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- First Displacement Map -->
      <feDisplacementMap in="SourceGraphic" scale="20">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>

      <!-- Second Displacement Map -->
      <feDisplacementMap in="BackgroundImage" scale="30">
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

Wir können auf das `in`-Attribut zugreifen:

```js
const displacementMaps = document.querySelectorAll("feDisplacementMap");

console.log(displacementMaps[0].getAttribute("in")); // Output: "SourceGraphic"
console.log(displacementMaps[1].getAttribute("in")); // Output: "BackgroundImage"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
