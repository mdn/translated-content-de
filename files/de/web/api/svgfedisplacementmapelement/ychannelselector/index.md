---
title: "SVGFEDisplacementMapElement: yChannelSelector-Eigenschaft"
short-title: yChannelSelector
slug: Web/API/SVGFEDisplacementMapElement/yChannelSelector
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`yChannelSelector`** des [`SVGFEDisplacementMapElement`](/de/docs/Web/API/SVGFEDisplacementMapElement)-Interfaces spiegelt das {{SVGAttr("yChannelSelector")}}-Attribut des gegebenen {{SVGElement("feDisplacementMap")}}-Elements wider. Es nimmt einen der `SVG_CHANNEL_*`-Konstanten an, die in diesem Interface definiert sind.

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
    fill="green"
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
