---
title: SVGAnimatedLength
slug: Web/API/SVGAnimatedLength
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Die **`SVGAnimatedLength`**-Schnittstelle repräsentiert Attribute des Typs [\<length>](/de/docs/Web/SVG/Content_type#length), die animiert werden können.

## Instanz-Eigenschaften

- [`baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) {{ReadOnlyInline}}
  - : Ein [`SVGLength`](/de/docs/Web/API/SVGLength), das den Basiswert des angegebenen Attributs vor Anwendung von Animationen darstellt.
- [`animVal`](/de/docs/Web/API/SVGAnimatedLength/animVal) {{ReadOnlyInline}}
  - : Wenn das gegebene Attribut oder die Eigenschaft animiert wird,
    ein [`SVGLength`](/de/docs/Web/API/SVGLength), das den aktuell animierten Wert des Attributs oder der Eigenschaft enthält.
    Wenn das gegebene Attribut oder die Eigenschaft derzeit nicht animiert wird,
    ein [`SVGLength`](/de/docs/Web/API/SVGLength), das denselben Wert wie `baseVal` enthält.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGLength`](/de/docs/Web/API/SVGLength)
