---
title: "SVGRadialGradientElement: r-Eigenschaft"
short-title: r
slug: Web/API/SVGRadialGradientElement/r
l10n:
  sourceCommit: 40279617fd5bb8ab277d10bbf3637bfc3aa2b991
---

{{APIRef("SVG")}}

Die **`r`**-Eigenschaft der [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement)-Schnittstelle beschreibt die Größe des Radius des radialen Gradienten als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("r")}}-Attributs auf dem {{SVGElement("radialGradient")}}-Element wider.

Der Attributwert ist ein [`<length>`](/de/docs/Web/SVG/Content_type#length), ein [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder eine [`<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist der Radius des radialen Gradienten im Benutzersystemkoordinaten.

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

Wir können auf die berechneten Werte der `r`-Attribute zugreifen:

```js
const radialGradients = document.querySelectorAll("radialGradient");
const rGradient1 = radialGradients[0].r;
const rGradient2 = radialGradients[1].r;

console.dir(rGradient1.baseVal.value); // output: 30
console.dir(rGradient2.baseVal.value); // output: 20 (10% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("r")}}
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
