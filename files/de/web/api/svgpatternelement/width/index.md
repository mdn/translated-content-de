---
title: "SVGPatternElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGPatternElement/width
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die **`width`** Lese-Eigenschaft der Schnittstelle [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement) beschreibt die Breite des Musters als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("width")}}-Attributs auf dem {{SVGElement("pattern")}}-Element wider.

Der Attributwert kann ein [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number) sein. Der numerische Wert von [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) stellt die Breite des Musters im Nutzerkoordinatensystem dar.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Beim folgenden SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- First pattern -->
    <pattern
      id="pattern1"
      x="50"
      height="20"
      width="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="blue" />
    </pattern>
    <!-- Second pattern -->
    <pattern
      id="pattern2"
      x="100"
      height="40"
      width="40"
      patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="10" fill="red" />
    </pattern>
  </defs>
  <!-- Using the patterns -->
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
  <rect x="100" y="0" width="100" height="100" fill="url(#pattern2)" />
</svg>
```

Können wir auf die berechneten Werte der `x`-Attribute zugreifen:

```js
const patterns = document.querySelectorAll("pattern");

console.log(patterns[0].width.baseVal.value); // output: 20
console.log(patterns[1].width.baseVal.value); // output: 40
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGPatternElement.height`](/de/docs/Web/API/SVGPatternElement/height)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
