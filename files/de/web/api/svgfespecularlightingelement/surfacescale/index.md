---
title: "SVGFESpecularLightingElement: surfaceScale-Eigenschaft"
short-title: surfaceScale
slug: Web/API/SVGFESpecularLightingElement/surfaceScale
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte **`surfaceScale`**-Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle spiegelt das {{SVGAttr("surfaceScale")}}-Attribut des gegebenen {{SVGElement("feSpecularLighting")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `surfaceScale`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Adds specular lighting with a surface scale -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="20"
        lighting-color="hotpink"
        surfaceScale="3">
        <fePointLight x="50" y="50" z="30" />
      </feSpecularLighting>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="lightblue"
    filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpecularLighting element
const specularLightingElement = document.querySelector("feSpecularLighting");

// Access the surfaceScale property
console.log(specularLightingElement.surfaceScale.baseVal); // Output: 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
