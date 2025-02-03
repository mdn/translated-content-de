---
title: "SVGFETurbulenceElement: baseFrequencyY-Eigenschaft"
short-title: baseFrequencyY
slug: Web/API/SVGFETurbulenceElement/baseFrequencyY
l10n:
  sourceCommit: 483599780f3f906327c6082860e8c26836258990
---

{{APIRef("SVG")}}

Die **`baseFrequencyY`**-Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle, die nur lesbar ist, spiegelt die Y-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des angegebenen {{SVGElement("feTurbulence")}}-Elements wider.

## Wert

Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)-Objekt.

## Beispiele

### Zugriff auf die `baseFrequencyY`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.5 0.25"
        numOctaves="4" />
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

// Access the baseFrequencyY property
console.log(turbulenceElement.baseFrequencyY.baseVal); // Output: 0.25
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
