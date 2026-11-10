---
title: SVGFEConvolveMatrixElement
slug: Web/API/SVGFEConvolveMatrixElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGFEConvolveMatrixElement`** entspricht dem Element {{SVGElement("feConvolveMatrix")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_EDGEMODE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `SVG_EDGEMODE_DUPLICATE` (1)
  - : Entspricht dem Wert `duplicate`.
- `SVG_EDGEMODE_WRAP` (2)
  - : Entspricht dem Wert `wrap`.
- `SVG_EDGEMODE_NONE` (3)
  - : Entspricht dem Wert `none`.

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEConvolveMatrixElement.bias`](/de/docs/Web/API/SVGFEConvolveMatrixElement/bias) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("bias")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.divisor`](/de/docs/Web/API/SVGFEConvolveMatrixElement/divisor) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("divisor")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.edgeMode`](/de/docs/Web/API/SVGFEConvolveMatrixElement/edgeMode) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("edgeMode")}} des jeweiligen Elements entspricht. Nimmt eine der in dieser Schnittstelle definierten `SVG_EDGEMODE_*`-Konstanten an.
- [`SVGFEConvolveMatrixElement.height`](/de/docs/Web/API/SVGFEConvolveMatrixElement/height) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("height")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.in1`](/de/docs/Web/API/SVGFEConvolveMatrixElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("in")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelMatrix`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelMatrix) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), die dem Attribut {{SVGAttr("kernelMatrix")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelUnitLengthX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelUnitLengthX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("kernelUnitLength")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelUnitLengthY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelUnitLengthY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("kernelUnitLength")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.orderX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/orderX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("order")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.orderY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/orderY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("order")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.preserveAlpha`](/de/docs/Web/API/SVGFEConvolveMatrixElement/preserveAlpha) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean), das dem Attribut {{SVGAttr("preserveAlpha")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.result`](/de/docs/Web/API/SVGFEConvolveMatrixElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("result")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.targetX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/targetX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("targetX")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.targetY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/targetY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem Attribut {{SVGAttr("targetY")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.width`](/de/docs/Web/API/SVGFEConvolveMatrixElement/width) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("width")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.x`](/de/docs/Web/API/SVGFEConvolveMatrixElement/x) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("x")}} des jeweiligen Elements entspricht.
- [`SVGFEConvolveMatrixElement.y`](/de/docs/Web/API/SVGFEConvolveMatrixElement/y) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("y")}} des jeweiligen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert aber die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feConvolveMatrix")}}
