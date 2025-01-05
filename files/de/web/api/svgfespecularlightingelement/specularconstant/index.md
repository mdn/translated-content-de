---
title: "SVGFESpecularLightingElement: specularConstant-Eigenschaft"
short-title: specularConstant
slug: Web/API/SVGFESpecularLightingElement/specularConstant
l10n:
  sourceCommit: 85890fba7b6213df8f159e400f0a639779e3dff4
---

{{APIRef("SVG")}}

Die **`specularConstant`**-Schreibgeschützte Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle spiegelt das {{SVGAttr("specularConstant")}}-Attribut des angegebenen {{SVGElement("feSpecularLighting")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `specularConstant`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Applies specular lighting with a constant specular reflectance -->
      <feSpecularLighting
        in="SourceGraphic"
        specularConstant="0.5"
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

// Access the specularConstant property
console.log(specularLightingElement.specularConstant.baseVal); // Output: 0.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
