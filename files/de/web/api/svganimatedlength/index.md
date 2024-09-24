---
title: SVGAnimatedLength
slug: Web/API/SVGAnimatedLength
l10n:
  sourceCommit: ddfcc2cf753b8e110db83caa6b11803af7bc3827
---

{{APIRef("SVG")}}

Die **`SVGAnimatedLength`**-Schnittstelle repräsentiert Attribute vom Typ [\<length>](/de/docs/Web/SVG/Content_type#length), die animiert werden können.

## Instanz-Eigenschaften

- {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGLength")}}, der den Basiswert des gegebenen Attributs vor der Anwendung von Animationen darstellt.
- {{domxref("SVGAnimatedLength.animVal", "animVal")}} {{ReadOnlyInline}}
  - : Wenn das gegebene Attribut oder die Eigenschaft animiert wird,
    ein {{domxref("SVGLength")}}, das den aktuellen animierten Wert des Attributs oder der Eigenschaft enthält.
    Wenn das gegebene Attribut oder die Eigenschaft derzeit nicht animiert wird,
    ein {{domxref("SVGLength")}}, das denselben Wert wie `baseVal` enthält.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SVGLength")}}
