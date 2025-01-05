---
title: "SVGFESpecularLightingElement: Eigenschaft in1"
short-title: in1
slug: Web/API/SVGFESpecularLightingElement/in1
l10n:
  sourceCommit: 85890fba7b6213df8f159e400f0a639779e3dff4
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement) spiegelt das {{SVGAttr("in")}} Attribut des angegebenen {{SVGElement("feSpecularLighting")}} Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) Objekt.

## Beispiele

### Zugriff auf die `in`-Eigenschaft des `feSpecularLighting` Elements

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Adds specular lighting effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="20"
        lighting-color="hotpink"
        surfaceScale="2">
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

Wir können auf das `in` Attribut des `feSpecularLighting` Elements zugreifen.

```js
// Select the feSpecularLighting element
const specularLightingElement = document.querySelector("feSpecularLighting");

// Access the in1 property
console.log(specularLightingElement.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
