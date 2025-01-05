---
title: "SVGFESpecularLightingElement: Eigenschaft specularExponent"
short-title: specularExponent
slug: Web/API/SVGFESpecularLightingElement/specularExponent
l10n:
  sourceCommit: 85890fba7b6213df8f159e400f0a639779e3dff4
---

{{APIRef("SVG")}}

Die **`specularExponent`** schreibgeschützte Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement) Schnittstelle spiegelt das {{SVGAttr("specularExponent")}} Attribut des gegebenen {{SVGElement("feSpecularLighting")}} Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt.

## Beispiele

### Zugriff auf die `specularExponent` Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Adds specular lighting with a specified exponent -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="40"
        lighting-color="hotpink">
        <fePointLight x="50" y="50" z="30" />
      </feSpecularLighting>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpecularLighting element
const specularLightingElement = document.querySelector("feSpecularLighting");

// Access the specularExponent property
console.log(specularLightingElement.specularExponent.baseVal); // Output: 40
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
