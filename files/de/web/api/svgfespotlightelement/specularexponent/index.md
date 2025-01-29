---
title: "SVGFESpotLightElement: specularExponent-Eigenschaft"
short-title: specularExponent
slug: Web/API/SVGFESpotLightElement/specularExponent
l10n:
  sourceCommit: b73d3668eba33e62e445d6f68fa27fa7885e3026
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`specularExponent`** der Schnittstelle [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement) spiegelt das {{SVGAttr("specularExponent")}}-Attribut des gegebenen {{SVGElement("feSpotLight")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `specularExponent`-Attribut des `<feSpotLight>`-Elements

In diesem Beispiel greifen wir auf den Exponentenwert zu, der den Fokus der Lichtquelle des `<feSpotLight>`-Filterelements steuert, indem wir die schreibgeschützte Eigenschaft `specularExponent` der Schnittstelle `SVGFESpotLightElement` verwenden.

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
    style="fill:lightblue;"
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
