---
title: SVGPatternElement
slug: Web/API/SVGPatternElement
l10n:
  sourceCommit: 44ace0bbd59cf14fb0b215eaa91a9a52bbb5e6b6
---

{{APIRef("SVG")}}

Die **`SVGPatternElement`** Schnittstelle entspricht dem {{SVGElement("pattern")}} Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGPatternElement.href`](/de/docs/Web/API/SVGPatternElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.patternUnits`](/de/docs/Web/API/SVGPatternElement/patternUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("patternUnits")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht. Nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGPatternElement.patternContentUnits`](/de/docs/Web/API/SVGPatternElement/patternContentUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("patternContentUnits")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht. Nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGPatternElement.patternTransform`](/de/docs/Web/API/SVGPatternElement/patternTransform) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), das dem {{SVGAttr("patternTransform")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.viewBox`](/de/docs/Web/API/SVGPatternElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), das dem {{SVGAttr("viewBox")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.preserveAspectRatio`](/de/docs/Web/API/SVGPatternElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem {{SVGAttr("preserveAspectRatio")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.x`](/de/docs/Web/API/SVGPatternElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("x")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.y`](/de/docs/Web/API/SVGPatternElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("y")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.width`](/de/docs/Web/API/SVGPatternElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("width")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.
- [`SVGPatternElement.height`](/de/docs/Web/API/SVGPatternElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("height")}} Attribut des angegebenen {{SVGElement("pattern")}} Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
