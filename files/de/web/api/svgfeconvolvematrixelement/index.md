---
title: SVGFEConvolveMatrixElement
slug: Web/API/SVGFEConvolveMatrixElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEConvolveMatrixElement`** Schnittstelle entspricht dem {{SVGElement("feConvolveMatrix")}} Element.

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
      <td><code>SVG_EDGEMODE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_DUPLICATE</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>duplicate</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_WRAP</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>wrap</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_NONE</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <code>none</code>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEConvolveMatrixElement.bias")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der dem {{SVGAttr("bias")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.divisor")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der dem {{SVGAttr("divisor")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.edgeMode")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("edgeMode")}} Attribut des gegebenen Elements entspricht. Nimmt einen der auf dieser Schnittstelle definierten `SVG_EDGEMODE_*` Konstanten an.
- {{domxref("SVGFEConvolveMatrixElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.in1")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("in")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.kernelMatrix")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumberList")}}, der dem {{SVGAttr("kernelMatrix")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.kernelUnitLengthX")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der dem {{SVGAttr("kernelUnitLength")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.kernelUnitLengthY")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der dem {{SVGAttr("kernelUnitLength")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.orderX")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedInteger")}}, der dem {{SVGAttr("order")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.orderY")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedInteger")}}, der dem {{SVGAttr("order")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.preserveAlpha")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedBoolean")}}, der dem {{SVGAttr("preserveAlpha")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("result")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.targetX")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedInteger")}}, der dem {{SVGAttr("targetX")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.targetY")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedInteger")}}, der dem {{SVGAttr("targetY")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEConvolveMatrixElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert aber die ihres Elternteils, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feConvolveMatrix")}}
