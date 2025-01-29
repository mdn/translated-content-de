---
title: "SVGUseElement: x Eigenschaft"
short-title: x
slug: Web/API/SVGUseElement/x
l10n:
  sourceCommit: 6fbc4d2771113be094b8dd7181891a62096626cb
---

{{APIRef("SVG")}}

Die **`x`** schreibgeschützte Eigenschaft der [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle beschreibt die x-Achsen-Koordinate des Startpunkts des referenzierten Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("x")}} Attributs auf dem {{SVGElement("use")}} Element wider.

Der Attributwert ist entweder ein [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate der oberen linken Ecke des referenzierten Elements im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiele

Angenommen, Sie haben folgendes SVG:

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

Wir können auf die berechneten Werte der `x` Attribute zugreifen:

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
