---
title: "SVGPatternElement: Eigenschaft y"
short-title: y
slug: Web/API/SVGPatternElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Schnittstelle beschreibt die y-Achsen-Koordinate des Startpunkts des Musters als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("y")}}-Attributs auf dem {{SVGElement("pattern")}}-Element wider.

Der Attributwert kann ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number) sein. Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) ist die y-Koordinate des Startpunkts des Musters im Benutzerkoordinatensystem.

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
      y="50"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="blue" />
    </pattern>
    <!-- Second pattern -->
    <pattern
      id="pattern2"
      y="100"
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

Wir können auf die berechneten Werte der `y`-Attribute zugreifen:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].y.baseVal.value); // output: 50
console.log(patterns[1].y.baseVal.value); // output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPatternElement.x`](/de/docs/Web/API/SVGPatternElement/x)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
