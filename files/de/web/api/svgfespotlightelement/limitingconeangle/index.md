---
title: "SVGFESpotLightElement: limitingConeAngle-Eigenschaft"
short-title: limitingConeAngle
slug: Web/API/SVGFESpotLightElement/limitingConeAngle
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`limitingConeAngle`** schreibgeschützte Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Schnittstelle spiegelt das {{SVGAttr("limitingConeAngle")}}-Attribut des gegebenen {{SVGElement("feSpotLight")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `limitingConeAngle`-Attribut des `<feSpotLight>`-Elements

In diesem Beispiel greifen wir auf den Winkel in Grad zwischen der Achse des Spotlights (d.h. der Achse zwischen der Lichtquelle und dem Punkt, zu dem es zeigt) und dem Lichtkegel des Spotlights zu, indem wir die schreibgeschützte `limitingConeAngle`-Eigenschaft der `SVGFESpotLightElement`-Schnittstelle verwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="specularLightingFilter">
      <!-- Apply a specular light effect to the SourceGraphic -->
      <feSpecularLighting
        in="SourceGraphic"
        specularExponent="40"
        lighting-color="lime"
        surfaceScale="5">
        <feSpotLight
          x="100"
          y="100"
          z="50"
          pointsAtX="100"
          pointsAtY="100"
          limitingConeAngle="30"
          specularExponent="40" />
      </feSpecularLighting>
    </filter>
  </defs>

  <!-- A circle to display the effect of the lighting -->
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

// Access the limitingConeAngle property
console.log(spotLightElement.limitingConeAngle.baseVal); // Output: 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
