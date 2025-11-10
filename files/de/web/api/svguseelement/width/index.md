---
title: "SVGUseElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGUseElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`** Lese-Schreibeigenschaft der [`SVGUseElement`](/de/docs/Web/API/SVGUseElement)-Schnittstelle beschreibt die Breite des referenzierten Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("width")}}-Attributs auf dem {{SVGElement("use")}}-Element wider.

Der Attributwert ist eine [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die Breite des referenzierten Elements im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiele

Gegeben folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
    <circle id="circle2" cx="50" cy="50" r="40" fill="red" />
  </defs>
  <use x="50%" y="50%" href="#circle1" width="50" />
  <use x="25%" y="50%" href="#circle2" width="100" />
</svg>
```

Wir können auf die berechneten Werte der `width`-Attribute zugreifen:

```js
const uses = document.querySelectorAll("use");
const widthUse1 = uses[0].width;
const widthUse2 = uses[1].width;

console.log(widthUse1.baseVal.value); // output: 50
console.log(widthUse2.baseVal.value); // output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGUseElement.height`](/de/docs/Web/API/SVGUseElement/height)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
