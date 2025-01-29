---
title: "SVGUseElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGUseElement/height
l10n:
  sourceCommit: 6fbc4d2771113be094b8dd7181891a62096626cb
---

{{APIRef("SVG")}}

Die **`height`**-Eigenschaft der [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle beschreibt die Höhe des referenzierten Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Es spiegelt den berechneten Wert des {{SVGAttr("height")}}-Attributs auf dem {{SVGElement("use")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Content_type#number). Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die Höhe des referenzierten Elements im Benutzerskoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiele

Für das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
    <circle id="circle2" cx="50" cy="50" r="40" fill="red" />
  </defs>
  <use x="50%" y="50%" href="#circle1" height="50" />
  <use x="25%" y="50%" href="#circle2" height="100" />
</svg>
```

können wir die berechneten Werte der `height`-Attribute abrufen:

```js
const uses = document.querySelectorAll("use");
const heightUse1 = uses[0].height;
const heightUse2 = uses[1].height;

console.log(heightUse1.baseVal.value); // output: 50
console.log(heightUse2.baseVal.value); // output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGUseElement.width`](/de/docs/Web/API/SVGUseElement/width)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
