---
title: SVGFEColorMatrixElement
slug: Web/API/SVGFEColorMatrixElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEColorMatrixElement`**-Schnittstelle entspricht dem {{SVGElement("feColorMatrix")}}-Element.

{{InheritanceDiagram}}

## Konstanten

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist keiner der vordefinierten Typen. Es ist ungültig, zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_MATRIX</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>matrix</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_SATURATE</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>saturate</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_HUEROTATE</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <code>hueRotate</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA</code></td>
      <td>4</td>
      <td>Entspricht dem Wert <code>luminanceToAlpha</code>.</td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEColorMatrixElement.height`](/de/docs/Web/API/SVGFEColorMatrixElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.in1`](/de/docs/Web/API/SVGFEColorMatrixElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.result`](/de/docs/Web/API/SVGFEColorMatrixElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.type`](/de/docs/Web/API/SVGFEColorMatrixElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der `SVG_FECOLORMATRIX_TYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEColorMatrixElement.values`](/de/docs/Web/API/SVGFEColorMatrixElement/values) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), das dem {{SVGAttr("values")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.width`](/de/docs/Web/API/SVGFEColorMatrixElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.x`](/de/docs/Web/API/SVGFEColorMatrixElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFEColorMatrixElement.y`](/de/docs/Web/API/SVGFEColorMatrixElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des angegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)_.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feColorMatrix")}}
