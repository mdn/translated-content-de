---
title: "SVGRadialGradientElement: cx-Eigenschaft"
short-title: cx
slug: Web/API/SVGRadialGradientElement/cx
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`cx`**-Eigenschaft der Schnittstelle [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement) beschreibt die x-Achsen-Koordinate des Zentrums des radialen Gradienten als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("cx")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), oder [`<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Zentrums des radialen Gradienten im Benutzerskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Das folgende SVG:

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

Die berechneten Werte der `cx`-Attribute können wie folgt abgerufen werden:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const cxGradient1 = radialGradients[0].cx;
const cxGradient2 = radialGradients[1].cx;

console.dir(cxGradient1.baseVal.value); // output: 50
console.dir(cxGradient2.baseVal.value); // output: 50 (25% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGRadialGradientElement.cy`](/de/docs/Web/API/SVGRadialGradientElement/cy)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
