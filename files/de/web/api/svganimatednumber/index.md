---
title: SVGAnimatedNumber
slug: Web/API/SVGAnimatedNumber
l10n:
  sourceCommit: d65517535ae067fa876d5fae83626dff838e9796
---

{{APIRef("SVG")}}

Das **`SVGAnimatedNumber`** Interface repräsentiert Attribute vom Typ [\<number>](/de/docs/Web/SVG/Guides/Content_type#number), die animiert werden können.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedNumber/baseVal)
  - : Ein `SVGAnimatedNumber`, das den Basiswert als Gleitkommawert des angegebenen Attributs darstellt, bevor jegliche Animationen angewendet werden.
- [`animVal`](/de/docs/Web/API/SVGAnimatedNumber/animVal) {{ReadOnlyInline}}
  - : Wenn das angegebene Attribut oder die Eigenschaft animiert wird, ein `SVGAnimatedNumber`, das den aktuellen animierten Wert des Attributs oder der Eigenschaft enthält. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, ein `SVGAnimatedNumber`, das denselben Wert wie `baseVal` enthält.

## Instanz-Methoden

Das `SVGAnimatedNumber` Interface bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
