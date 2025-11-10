---
title: "SVGUseElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGUseElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der Schnittstelle [`SVGUseElement`](/de/docs/Web/API/SVGUseElement) beschreibt die x-Achsen-Koordinate des Startpunkts des referenzierten Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("x")}}-Attributs auf dem {{SVGElement("use")}}-Element wider.

Der Attributwert ist ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate der oberen linken Ecke des referenzierten Elements im Benutzskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiele

Gegeben das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
    <circle id="circle2" cx="50" cy="50" r="40" fill="red" />
  </defs>
  <use x="50%" y="50%" href="#circle1" />
  <use x="25%" y="50%" href="#circle2" />
</svg>
```

Wir können auf die berechneten Werte der `x`-Attribute zugreifen:

```js
const uses = document.querySelectorAll("use");
const xUse1 = uses[0].x;
const xUse2 = uses[1].x;

console.log(xUse1.baseVal.value); // output: 100 (50% of 200)
console.log(xUse2.baseVal.value); // output: 50 (25% of 200)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGUseElement.y`](/de/docs/Web/API/SVGUseElement/y)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
