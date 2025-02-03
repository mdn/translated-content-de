---
title: "SVGPatternElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGPatternElement/href
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die **`href`**-Schreibgeschützte Eigenschaft der [`SVGPatternElement`](/de/docs/Web/API/SVGPatternElement)-Schnittstelle spiegelt das {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}}-Attribut des angegebenen Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

Das Beispiel zeigt, wie das `href`-Attribut im {{SVGElement("pattern")}}-Element ein anderes Muster (`#basePattern`) referenziert, um dessen Design auf ein Rechteck anzuwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- First pattern definition -->
    <pattern
      id="basePattern"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="10" fill="blue" />
    </pattern>
    <!-- Second pattern referencing the first -->
    <pattern id="pattern1" href="#basePattern" />
  </defs>
  <rect x="50" y="50" width="100" height="100" fill="url(#pattern1)" />
</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
