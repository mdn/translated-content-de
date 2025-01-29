---
title: "SVGFEDisplacementMapElement: yChannelSelector Eigenschaft"
short-title: yChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/yChannelSelector
l10n:
  sourceCommit: 243703c2241af83f51991c4dcdbdfbe6c8f6c8cd
---

{{APIRef("SVG")}}

Die **`yChannelSelector`**-Eigenschaft der [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("yChannelSelector")}}-Attribut des gegebenen {{SVGElement("feDisplacementMap")}}-Elements widerspiegelt. Sie nimmt einen der auf dieser Schnittstelle definierten `SVG_CHANNEL_*`-Konstanten an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf das `yChannelSelector`-Attribut

In diesem Beispiel enthält das im {{SVGElement("filter")}} definierte {{SVGElement("feDisplacementMap")}}-Element ein `yChannelSelector`-Attribut.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="displacementFilter">
      <!-- Displacement Map with yChannelSelector set to Red Channel -->
      <feDisplacementMap in="SourceGraphic" scale="20" yChannelSelector="G">
        <feFuncR type="table" tableValues="0 1" />
      </feDisplacementMap>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:green;"
    filter="url(#displacementFilter)" />
</svg>
```

Wir können auf das `yChannelSelector`-Attribut zugreifen und seinen Wert erhalten:

```js
const displacementMap = document.querySelector("feDisplacementMap");

console.log(displacementMap.yChannelSelector.baseVal); // Output: 2 (SVG_CHANNEL_G)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)
