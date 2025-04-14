---
title: "SVGRadialGradientElement: fr-Eigenschaft"
short-title: fr
slug: Web/API/SVGRadialGradientElement/fr
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{APIRef("SVG")}}

Die **`fr`**-Eigenschaft der [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle beschreibt den Radius des Fokus-Kreises des radialen Verlaufs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("fr")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist der Radius des Fokuspunktes des radialen Verlaufs im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Das folgende SVG enthält zwei identische Verläufe, die mit unterschiedlichen Einheitstypen deklariert sind:

```html
<svg viewBox="0 0 200 100" width="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" r="20%" fr="0.5">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
    <radialGradient id="gradient2" r="20%" fr="50%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#gradient1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#gradient2)" />
</svg>
```

Wir können auf die Einheitstypen, Werte und Werte der `fr`-Attribute zugreifen, wie sie ohne Einheitstyp angegeben sind:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const frGradient1 = radialGradients[0].fr;
const frGradient2 = radialGradients[1].fr;

console.log(frGradient1.baseVal.unitType); // 1 (SVGLength.SVG_LENGTHTYPE_NUMBER)
console.log(frGradient1.baseVal.value); // 0.5
console.log(frGradient1.baseVal.valueInSpecifiedUnits); // 0.5

console.log(frGradient2.baseVal.unitType); // 2 (SVGLength.SVG_LENGTHTYPE_PERCENTAGE)
console.log(frGradient2.baseVal.value); // 79.05693817138672
console.log(frGradient2.baseVal.valueInSpecifiedUnits); // 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.fx`](/de/docs/Web/API/SVGRadialGradientElement/fx)
- [`SVGLength.unitType`](/de/docs/Web/API/SVGLength/unitType)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
