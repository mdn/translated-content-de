---
title: SVGFEMorphologyElement
slug: Web/API/SVGFEMorphologyElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGFEMorphologyElement`**-Schnittstelle entspricht dem {{SVGElement("feMorphology")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEMorphologyElement.height`](/de/docs/Web/API/SVGFEMorphologyElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.in1`](/de/docs/Web/API/SVGFEMorphologyElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.operator`](/de/docs/Web/API/SVGFEMorphologyElement/operator) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("operator")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_MORPHOLOGY_OPERATOR_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEMorphologyElement.radiusX`](/de/docs/Web/API/SVGFEMorphologyElement/radiusX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der X-Komponente des {{SVGAttr("radius")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.radiusY`](/de/docs/Web/API/SVGFEMorphologyElement/radiusY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der Y-Komponente des {{SVGAttr("radius")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.result`](/de/docs/Web/API/SVGFEMorphologyElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.width`](/de/docs/Web/API/SVGFEMorphologyElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.x`](/de/docs/Web/API/SVGFEMorphologyElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.y`](/de/docs/Web/API/SVGFEMorphologyElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_MORPHOLOGY_OPERATOR_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_MORPHOLOGY_OPERATOR_ERODE` (1)
  - : Entspricht dem Wert `erode`.
- `SVG_MORPHOLOGY_OPERATOR_DILATE` (2)
  - : Entspricht dem Wert `dilate`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feMorphology")}}
