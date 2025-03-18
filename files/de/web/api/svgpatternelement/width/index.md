---
title: "SVGPatternElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGPatternElement/width
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`width`**-Schreibgeschützte Eigenschaft der [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Schnittstelle beschreibt die Breite des Musters als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt den berechneten Wert des {{SVGAttr("width")}}-Attributs auf dem {{SVGElement("pattern")}}-Element wider.

Der Attributwert kann ein [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage), oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number) sein. Der numerische Wert des [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) repräsentiert die Breite des Musters im Benutzerkoordinatensystem.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

Im folgenden SVG:

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
