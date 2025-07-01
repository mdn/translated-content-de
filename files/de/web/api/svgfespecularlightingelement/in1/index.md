---
title: "SVGFESpecularLightingElement: in1 Eigenschaft"
short-title: in1
slug: Web/API/SVGFESpecularLightingElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft der [`SVGFESpecularLightingElement`](/de/docs/Web/API/SVGFESpecularLightingElement)-Schnittstelle spiegelt das {{SVGAttr("in")}}-Attribut des gegebenen {{SVGElement("feSpecularLighting")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `in`-Eigenschaft des `feSpecularLighting`-Elements

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
    fill="lightblue"
    filter="url(#specularLightingFilter)" />
</svg>
```

Wir können auf das `in`-Attribut des `feSpecularLighting`-Elements zugreifen.

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
