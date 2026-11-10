---
title: SVGFEColorMatrixElement
slug: Web/API/SVGFEColorMatrixElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGFEColorMatrixElement`** entspricht dem Element {{SVGElement("feColorMatrix")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_FECOLORMATRIX_TYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `SVG_FECOLORMATRIX_TYPE_MATRIX` (1)
  - : Entspricht dem Wert `matrix`.
- `SVG_FECOLORMATRIX_TYPE_SATURATE` (2)
  - : Entspricht dem Wert `saturate`.
- `SVG_FECOLORMATRIX_TYPE_HUEROTATE` (3)
  - : Entspricht dem Wert `hueRotate`.
- `SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA` (4)
  - : Entspricht dem Wert `luminanceToAlpha`.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEColorMatrixElement.height`](/de/docs/Web/API/SVGFEColorMatrixElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des jeweiligen Elements entspricht.
- [`SVGFEColorMatrixElement.in1`](/de/docs/Web/API/SVGFEColorMatrixElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("in")}} des jeweiligen Elements entspricht.
- [`SVGFEColorMatrixElement.result`](/de/docs/Web/API/SVGFEColorMatrixElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("result")}} des jeweiligen Elements entspricht.
- [`SVGFEColorMatrixElement.type`](/de/docs/Web/API/SVGFEColorMatrixElement/type) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("type")}} des jeweiligen Elements entspricht. Sie nimmt eine der für diese Schnittstelle definierten Konstanten `SVG_FECOLORMATRIX_TYPE_*` an.
- [`SVGFEColorMatrixElement.values`](/de/docs/Web/API/SVGFEColorMatrixElement/values) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), die dem Attribut {{SVGAttr("values")}} des jeweiligen Elements entspricht.
- [`SVGFEColorMatrixElement.width`](/de/docs/Web/API/SVGFEColorMatrixElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des jeweiligen Elements entspricht.
- [`SVGFEColorMatrixElement.x`](/de/docs/Web/API/SVGFEColorMatrixElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des jeweiligen Elements entspricht.
- [`SVGFEColorMatrixElement.y`](/de/docs/Web/API/SVGFEColorMatrixElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des jeweiligen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert jedoch die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feColorMatrix")}}
