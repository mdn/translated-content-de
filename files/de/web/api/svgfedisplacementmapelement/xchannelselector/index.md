---
title: "SVGFEDisplacementMapElement: xChannelSelector-Eigenschaft"
short-title: xChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/xChannelSelector
l10n:
  sourceCommit: 243703c2241af83f51991c4dcdbdfbe6c8f6c8cd
---

{{APIRef("SVG")}}

Die **`xChannelSelector`**-Eigenschaft der Schnittstelle [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement) ist eine schreibgeschützte Eigenschaft, die das Attribut {{SVGAttr("xChannelSelector")}} des gegebenen {{SVGElement("feDisplacementMap")}}-Elements widerspiegelt. Sie nimmt einen der `SVG_CHANNEL_*` Konstanten an, die auf dieser Schnittstelle definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf das `xChannelSelector`-Attribut

In diesem Beispiel enthält das im {{SVGElement("filter")}}-Element definierte {{SVGElement("feDisplacementMap")}}-Element ein `xChannelSelector`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displacementFilter">
      <!-- Displacement Map with xChannelSelector set to Red Channel -->
      <feDisplacementMap in="SourceGraphic" scale="20" xChannelSelector="R">
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
    filter="url(#displacementFilter)" />
</svg>
```

Wir können auf das `xChannelSelector`-Attribut zugreifen und seinen Wert erhalten:

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.xChannelSelector.baseVal); // Output: 1 (SVG_CHANNEL_R)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
