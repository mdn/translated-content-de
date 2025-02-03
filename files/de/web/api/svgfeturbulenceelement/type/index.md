---
title: "SVGFETurbulenceElement: type-Eigenschaft"
short-title: type
slug: Web/API/SVGFETurbulenceElement/type
l10n:
  sourceCommit: 483599780f3f906327c6082860e8c26836258990
---

{{APIRef("SVG")}}

Die **`type`**-Eigenschaft des [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) Interfaces ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("type")}}-Attribut des angegebenen {{SVGElement("feTurbulence")}}-Elements widerspiegelt. Sie nimmt einen der `SVG_TURBULENCE_TYPE_*`-Konstanten an, die in diesem Interface definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `type`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="3"
        result="turbulence" />
    </filter>
  </defs>

  <rect
    x="20"
    y="20"
    width="160"
    height="160"
    style="fill:lightblue;"
    filter="url(#turbulenceFilter)" />
</svg>
```

```js
// Select the feTurbulence element
const turbulenceElement = document.querySelector("feTurbulence");

// Access the type property
console.log(turbulenceElement.type.baseVal); // Output: 1 (SVG_TURBULENCE_TYPE_FRACTALNOISE)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
