---
title: "SVGFEDisplacementMapElement: scale-Eigenschaft"
short-title: scale
slug: Web/API/SVGFEDisplacementMapElement/scale
l10n:
  sourceCommit: 243703c2241af83f51991c4dcdbdfbe6c8f6c8cd
---

{{APIRef("SVG")}}

Die **`scale`** schreibgeschützte Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle spiegelt das {{SVGAttr("scale")}}-Attribut des gegebenen {{SVGElement("feDisplacementMap")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Auf den `scale`-Attribut zugreifen

In diesem Beispiel enthält das in dem {{SVGElement("filter")}} definierte {{SVGElement("feDisplacementMap")}}-Element ein `scale`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="filter1">
      <!-- Displacement Map -->
      <feDisplacementMap in="SourceGraphic" scale="20">
        <feFuncR type="table" tableValues="0 1" />
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
</svg>
```

Wir können auf das `scale`-Attribut zugreifen und seinen Wert erhalten:

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.scale.baseVal); // Output: 20
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
