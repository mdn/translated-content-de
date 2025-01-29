---
title: "SVGFESpotLightElement: pointsAtY-Eigenschaft"
short-title: pointsAtY
slug: Web/API/SVGFESpotLightElement/pointsAtY
l10n:
  sourceCommit: b73d3668eba33e62e445d6f68fa27fa7885e3026
---

{{APIRef("SVG")}}

Die **`pointsAtY`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement) spiegelt das {{SVGAttr("pointsAtY")}} Attribut des gegebenen {{SVGElement("feSpotLight")}} Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt.

## Beispiele

### Zugriff auf das `pointsAtY`-Attribut des `<feSpotLight>` Elements

In diesem Beispiel greifen wir auf die `y`-Position des `<feSpotLight>`-Elements im SVG-Koordinatensystem zu, indem wir die schreibgeschützte Eigenschaft `pointsAtY` der Schnittstelle `SVGFESpotLightElement` verwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Apply a specular light effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="20"
        lighting-color="hotpink"
        surfaceScale="30">
        <feSpotLight
          x="10"
          y="50"
          z="150"
          pointsAtX="150"
          pointsAtY="100"
          pointsAtZ="0"
          specularExponent="20" />
      </feSpecularLighting>
    </filter>
  </defs>

  <!-- A circle to display the effect of the lighting -->
  <circle cx="100" cy="100" r="50" filter="url(#specularLightingFilter)" />
</svg>
```

```js
// Select the feSpotLight element
const spotLightElement = document.querySelector("feSpotLight");
console.log(spotLightElement.pointsAtY.baseVal); // Output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
