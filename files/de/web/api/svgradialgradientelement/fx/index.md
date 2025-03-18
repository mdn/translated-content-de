---
title: "SVGRadialGradientElement: fx-Eigenschaft"
short-title: fx
slug: Web/API/SVGRadialGradientElement/fx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`fx`**-Eigenschaft der [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die x-Achsen-Koordinate des Brennpunkts des Radialverlaufs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt. Sie spiegelt den berechneten Wert des {{SVGAttr("fx")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Brennpunkts des Radialverlaufs im Benutzer-Koordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="gradient1" cx="50" cy="75" fx="30" fy="60" r="30">
      <stop offset="0%" stop-color="blue" />
      <stop offset="100%" stop-color="white" />
    </radialGradient>
    <radialGradient id="gradient2" cx="25%" cy="50%" fx="10%" fy="40%" r="10%">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="yellow" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="200" height="100" fill="url(#gradient1)" />
  <rect x="0" y="100" width="200" height="100" fill="url(#gradient2)" />
</svg>
```

Wir können die berechneten Werte der `fx`-Attribute abrufen:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const fxGradient1 = radialGradients[0].fx;
const fxGradient2 = radialGradients[1].fx;

console.dir(fxGradient1.baseVal.value); // output: 30
console.dir(fxGradient2.baseVal.value); // output: 20 (10% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.fy`](/de/docs/Web/API/SVGRadialGradientElement/fy)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
