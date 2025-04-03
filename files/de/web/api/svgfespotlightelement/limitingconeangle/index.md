---
title: "SVGFESpotLightElement: limitingConeAngle-Eigenschaft"
short-title: limitingConeAngle
slug: Web/API/SVGFESpotLightElement/limitingConeAngle
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("SVG")}}

Die **`limitingConeAngle`**-Schreibgeschützte Eigenschaft des [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Interfaces spiegelt das {{SVGAttr("limitingConeAngle")}}-Attribut des gegebenen {{SVGElement("feSpotLight")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `limitingConeAngle`-Attribut des `<feSpotLight>`-Elements

In diesem Beispiel greifen wir auf den Winkel in Grad zwischen der Achse des Scheinwerferlichts (d.h. der Achse zwischen der Lichtquelle und dem Punkt, auf den sie zeigt) und dem Kegel des Scheinwerferlichts zu, indem wir die schreibgeschützte `limitingConeAngle`-Eigenschaft des `SVGFESpotLightElement`-Interfaces verwenden.

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
    style="fill:lightblue;"
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
