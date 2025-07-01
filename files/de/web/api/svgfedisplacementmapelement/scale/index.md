---
title: "SVGFEDisplacementMapElement: scale-Eigenschaft"
short-title: scale
slug: Web/API/SVGFEDisplacementMapElement/scale
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`scale`**-Schreibgeschützte Eigenschaft des [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Interfaces spiegelt das {{SVGAttr("scale")}}-Attribut des gegebenen {{SVGElement("feDisplacementMap")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `scale`-Attribut

In diesem Beispiel enthält das im {{SVGElement("filter")}} definierte {{SVGElement("feDisplacementMap")}}-Element ein `scale`-Attribut.

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
    fill="red"
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
