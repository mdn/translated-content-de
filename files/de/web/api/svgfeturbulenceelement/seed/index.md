---
title: "SVGFETurbulenceElement: seed-Eigenschaft"
short-title: seed
slug: Web/API/SVGFETurbulenceElement/seed
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`seed`**-Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle spiegelt das {{SVGAttr("seed")}}-Attribut des angegebenen {{SVGElement("feTurbulence")}}-Elements wider.

Sie legt einen numerischen Startwert für die zufällige Erzeugung des Fraktalrauschens oder Turbulenzeffekts fest.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `seed`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="3"
        seed="1234" />
    </filter>
  </defs>

  <rect
    x="20"
    y="20"
    width="160"
    height="160"
    fill="lightblue"
    filter="url(#turbulenceFilter)" />
</svg>
```

```js
// Select the feTurbulence element
const turbulenceElement = document.querySelector("feTurbulence");

// Access the seed property
console.log(turbulenceElement.seed.baseVal); // Output: 1234
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
