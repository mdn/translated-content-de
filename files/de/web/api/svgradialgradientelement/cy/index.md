---
title: "SVGRadialGradientElement: cy-Eigenschaft"
short-title: cy
slug: Web/API/SVGRadialGradientElement/cy
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`cy`**-Eigenschaft der [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle, die nur lesbar ist, beschreibt die y-Achsen-Koordinate des Zentrums des radialen Verlaufs als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("cy")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), ein [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder eine [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Zentrums des radialen Verlaufs im Benutzerskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="50" cy="75" r="30">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
    <radialGradient id="gradient2" cx="25%" cy="50%" r="10%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

Wir können auf die berechneten Werte der `cx`-Attribute zugreifen:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const cyGradient1 = radialGradients[0].cy;
const cyGradient2 = radialGradients[1].cy;

console.dir(cyGradient1.baseVal.value); // output: 75
console.dir(cyGradient2.baseVal.value); // output: 100 (50% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.cx`](/de/docs/Web/API/SVGRadialGradientElement/cx)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
