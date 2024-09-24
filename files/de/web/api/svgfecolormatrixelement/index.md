---
title: SVGFEColorMatrixElement
slug: Web/API/SVGFEColorMatrixElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEColorMatrixElement`** Schnittstelle entspricht dem {{SVGElement("feColorMatrix")}} Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_MATRIX</code></td>
      <td>1</td>
      <td>Entspricht dem <code>matrix</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_SATURATE</code></td>
      <td>2</td>
      <td>Entspricht dem <code>saturate</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_HUEROTATE</code></td>
      <td>3</td>
      <td>Entspricht dem <code>hueRotate</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA</code></td>
      <td>4</td>
      <td>Entspricht dem <code>luminanceToAlpha</code> Wert.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEColorMatrixElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("height")}} Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEColorMatrixElement.in1")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("in")}} Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEColorMatrixElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("result")}} Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEColorMatrixElement.type")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("type")}} Attribut des angegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_FECOLORMATRIX_TYPE_*` Konstanten an.
- {{domxref("SVGFEColorMatrixElement.values")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumberList")}}, der dem {{SVGAttr("values")}} Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEColorMatrixElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("width")}} Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEColorMatrixElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("x")}} Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEColorMatrixElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("y")}} Attribut des angegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feColorMatrix")}}
