---
title: SVGAnimatedLength
slug: Web/API/SVGAnimatedLength
l10n:
  sourceCommit: ddfcc2cf753b8e110db83caa6b11803af7bc3827
---

{{APIRef("SVG")}}

Die **`SVGAnimatedLength`** Schnittstelle repräsentiert Attribute des Typs [\<length>](/de/docs/Web/SVG/Content_type#length), die animiert werden können.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGLength`](/de/docs/Web/API/SVGLength), das den Basiswert des angegebenen Attributs darstellt, bevor Animationen angewendet werden.
- [`animVal`](/de/docs/Web/API/SVGAnimatedLength/animVal) {{ReadOnlyInline}}
  - : Wenn das angegebene Attribut oder die Eigenschaft animiert wird, ein [`SVGLength`](/de/docs/Web/API/SVGLength), das den aktuellen animierten Wert des Attributs oder der Eigenschaft enthält. Wenn das angegebene Attribut oder die Eigenschaft derzeit nicht animiert wird, ein [`SVGLength`](/de/docs/Web/API/SVGLength), das denselben Wert wie `baseVal` enthält.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLength`](/de/docs/Web/API/SVGLength)
