---
title: "SVGPatternElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGPatternElement/x
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft des [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Interfaces beschreibt die x-Achsen-Koordinate des Startpunkts des Musters als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("x")}}-Attributs auf dem {{SVGElement("pattern")}}-Element wider.

Der Attributwert kann ein [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Content_type#number) sein. Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die x-Koordinate des Startpunkts des Musters im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Angenommen, folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- First pattern -->
    <pattern
      id="pattern1"
      x="50"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="blue" />
    </pattern>
    <!-- Second pattern -->
    <pattern
      id="pattern2"
      x="100"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="red" />
    </pattern>
  </defs>
  <!-- Using the patterns -->
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

Wir können auf die berechneten Werte der `x`-Attribute zugreifen:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].x.baseVal.value); // output: 50
console.log(patterns[1].x.baseVal.value); // output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPatternElement.y`](/de/docs/Web/API/SVGPatternElement/y)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
