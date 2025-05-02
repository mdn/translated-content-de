---
title: SVGFEConvolveMatrixElement
slug: Web/API/SVGFEConvolveMatrixElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGFEConvolveMatrixElement`**-Schnittstelle entspricht dem {{SVGElement("feConvolveMatrix")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEConvolveMatrixElement.bias`](/de/docs/Web/API/SVGFEConvolveMatrixElement/bias) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("bias")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.divisor`](/de/docs/Web/API/SVGFEConvolveMatrixElement/divisor) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("divisor")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.edgeMode`](/de/docs/Web/API/SVGFEConvolveMatrixElement/edgeMode) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("edgeMode")}} des gegebenen Elements entspricht. Nimmt einen der `SVG_EDGEMODE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEConvolveMatrixElement.height`](/de/docs/Web/API/SVGFEConvolveMatrixElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.in1`](/de/docs/Web/API/SVGFEConvolveMatrixElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelMatrix`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelMatrix) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), die dem Attribut {{SVGAttr("kernelMatrix")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelUnitLengthX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelUnitLengthX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("kernelUnitLength")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelUnitLengthY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelUnitLengthY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("kernelUnitLength")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.orderX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/orderX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("order")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.orderY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/orderY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("order")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.preserveAlpha`](/de/docs/Web/API/SVGFEConvolveMatrixElement/preserveAlpha) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean), das dem Attribut {{SVGAttr("preserveAlpha")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.result`](/de/docs/Web/API/SVGFEConvolveMatrixElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("result")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.targetX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/targetX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("targetX")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.targetY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/targetY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("targetY")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.width`](/de/docs/Web/API/SVGFEConvolveMatrixElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.x`](/de/docs/Web/API/SVGFEConvolveMatrixElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.y`](/de/docs/Web/API/SVGFEConvolveMatrixElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des gegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch diejenigen ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_EDGEMODE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert auf diesen Typ umzuschalten.
- `SVG_EDGEMODE_DUPLICATE` (1)
  - : Entspricht dem Wert `duplicate`.
- `SVG_EDGEMODE_WRAP` (2)
  - : Entspricht dem Wert `wrap`.
- `SVG_EDGEMODE_NONE` (3)
  - : Entspricht dem Wert `none`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feConvolveMatrix")}}
