---
title: SVGPatternElement
slug: Web/API/SVGPatternElement
l10n:
  sourceCommit: a7dc8593894e275bb9d522168f3ae9120ce5242e
---

{{APIRef("SVG")}}

Die **`SVGPatternElement`**-Schnittstelle entspricht dem {{SVGElement("pattern")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGPatternElement.href`](/de/docs/Web/API/SVGPatternElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem {{SVGAttr("href")}}- oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht.
- [`SVGPatternElement.patternUnits`](/de/docs/Web/API/SVGPatternElement/patternUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("patternUnits")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht. Nimmt eine der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGPatternElement.patternContentUnits`](/de/docs/Web/API/SVGPatternElement/patternContentUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("patternContentUnits")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht. Nimmt eine der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGPatternElement.patternTransform`](/de/docs/Web/API/SVGPatternElement/patternTransform) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), die dem {{SVGAttr("patternTransform")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht.
- [`SVGPatternElement.x`](/de/docs/Web/API/SVGPatternElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("x")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht.
- [`SVGPatternElement.y`](/de/docs/Web/API/SVGPatternElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("y")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht.
- [`SVGPatternElement.width`](/de/docs/Web/API/SVGPatternElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("width")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht.
- [`SVGPatternElement.height`](/de/docs/Web/API/SVGPatternElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("height")}}-Attribut des gegebenen {{SVGElement("pattern")}}-Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
