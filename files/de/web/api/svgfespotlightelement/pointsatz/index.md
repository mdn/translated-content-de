---
title: "SVGFESpotLightElement: pointsAtZ-Eigenschaft"
short-title: pointsAtZ
slug: Web/API/SVGFESpotLightElement/pointsAtZ
l10n:
  sourceCommit: b73d3668eba33e62e445d6f68fa27fa7885e3026
---

{{APIRef("SVG")}}

Die **`pointsAtZ`**-Eigenschaft der [`SVGFESpotLightElement`](/de/docs/Web/API/SVGFESpotLightElement)-Schnittstelle, die nur lesbar ist, spiegelt das {{SVGAttr("pointsAtZ")}}-Attribut des gegebenen {{SVGElement("feSpotLight")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `pointsAtZ`-Attribut des `<feSpotLight>`-Elements

In diesem Beispiel greifen wir auf die `z`-Position der Lichtquelle zu, die vom `<feSpotLight>` SVG-Filterelement im SVG-Koordinatensystem erstellt wurde, indem wir die nur lesbare `pointsAtZ`-Eigenschaft der `SVGFESpotLightElement`-Schnittstelle verwenden.

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
console.log(spotLightElement.pointsAtZ.baseVal); // Output: 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
