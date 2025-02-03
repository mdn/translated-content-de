---
title: "SVGFETurbulenceElement: numOctaves-Eigenschaft"
short-title: numOctaves
slug: Web/API/SVGFETurbulenceElement/numOctaves
l10n:
  sourceCommit: 483599780f3f906327c6082860e8c26836258990
---

{{APIRef("SVG")}}

Die **`numOctaves`**-Schreibgeschützte Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle spiegelt das {{SVGAttr("numOctaves")}}-Attribut des gegebenen {{SVGElement("feTurbulence")}}-Elements wider.

## Wert

Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger)-Objekt.

## Beispiele

### Zugriff auf die `numOctaves`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" />
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

// Access the numOctaves property
console.log(turbulenceElement.numOctaves.baseVal); // Output: 4
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
