---
title: SVGFEColorMatrixElement
slug: Web/API/SVGFEColorMatrixElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGFEColorMatrixElement`**-Schnittstelle entspricht dem {{SVGElement("feColorMatrix")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEColorMatrixElement.height`](/de/docs/Web/API/SVGFEColorMatrixElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.in1`](/de/docs/Web/API/SVGFEColorMatrixElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.result`](/de/docs/Web/API/SVGFEColorMatrixElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.type`](/de/docs/Web/API/SVGFEColorMatrixElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_FECOLORMATRIX_TYPE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEColorMatrixElement.values`](/de/docs/Web/API/SVGFEColorMatrixElement/values) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), das dem {{SVGAttr("values")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.width`](/de/docs/Web/API/SVGFEColorMatrixElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.x`](/de/docs/Web/API/SVGFEColorMatrixElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.y`](/de/docs/Web/API/SVGFEColorMatrixElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)_.

## Statische Eigenschaften

- `SVG_FECOLORMATRIX_TYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert in diesen Typ zu wechseln.
- `SVG_FECOLORMATRIX_TYPE_MATRIX` (1)
  - : Entspricht dem Wert `matrix`.
- `SVG_FECOLORMATRIX_TYPE_SATURATE` (2)
  - : Entspricht dem Wert `saturate`.
- `SVG_FECOLORMATRIX_TYPE_HUEROTATE` (3)
  - : Entspricht dem Wert `hueRotate`.
- `SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA` (4)
  - : Entspricht dem Wert `luminanceToAlpha`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feColorMatrix")}}
