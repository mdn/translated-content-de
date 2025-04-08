---
title: SVGAnimatedNumber
slug: Web/API/SVGAnimatedNumber
l10n:
  sourceCommit: 2e5f1fcd5ca3bb540ec8ce13b6cb30ea978ec06b
---

{{APIRef("SVG")}}

Das **`SVGAnimatedNumber`**-Interface repräsentiert Attribute vom Typ [\<number>](/de/docs/Web/SVG/Guides/Content_type#number), die animiert werden können.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedNumber/baseVal)

  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), der den Basiswert als Gleitkommawert des angegebenen Attributs darstellt, bevor Animationen angewendet werden.

- [`animVal`](/de/docs/Web/API/SVGAnimatedNumber/animVal) {{ReadOnlyInline}}
  - : Wenn das angegebene Attribut oder die Eigenschaft animiert wird, enthält ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) den aktuellen animierten Wert des Attributs oder der Eigenschaft. Wenn das gegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, enthält ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) denselben Wert wie `baseVal`.

## Instanz-Methoden

Das `SVGAnimatedNumber`-Interface bietet keine spezifischen Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
