---
title: "SVGFESpotLightElement: specularExponent-Eigenschaft"
short-title: specularExponent
slug: Web/API/SVGFESpotLightElement/specularExponent
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`specularExponent`** schreibgeschützte Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Schnittstelle spiegelt das {{SVGAttr("specularExponent")}}-Attribut des gegebenen {{SVGElement("feSpotLight")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `specularExponent`-Attribut des `<feSpotLight>`-Elements

In diesem Beispiel greifen wir auf den Exponentenwert zu, der den Fokus der Lichtquelle des `<feSpotLight>`-Filterelements steuert, indem wir die schreibgeschützte Eigenschaft `specularExponent` der `SVGFESpotLightElement`-Schnittstelle nutzen.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Apply a specular light effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="40"
        lighting-color="hotpink"
        surfaceScale="5">
        <feSpotLight
          x="100"
          y="100"
          z="50"
          pointsAtX="100"
          pointsAtY="100"
          specularExponent="40" />
      </feSpecularLighting>
    </filter>
  </defs>
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="lightblue"
    filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpotLight element
const spotLightElement = document.querySelector("feSpotLight");

// Access the specularExponent property
console.log(spotLightElement.specularExponent.baseVal); // Output: 40
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
