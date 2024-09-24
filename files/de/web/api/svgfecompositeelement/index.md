---
title: SVGFECompositeElement
slug: Web/API/SVGFECompositeElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFECompositeElement`**-Schnittstelle entspricht dem {{SVGElement("feComposite")}}-Element.

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
      <td><code>SVG_FECOMPOSITE_OPERATOR_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist keiner der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OVER</code></td>
      <td>1</td>
      <td>Entspricht dem <code>over</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_IN</code></td>
      <td>2</td>
      <td>Entspricht dem <code>in</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OUT</code></td>
      <td>3</td>
      <td>Entspricht dem <code>out</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ATOP</code></td>
      <td>4</td>
      <td>Entspricht dem <code>atop</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_XOR</code></td>
      <td>5</td>
      <td>Entspricht dem <code>xor</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ARITHMETIC</code></td>
      <td>6</td>
      <td>Entspricht dem <code>arithmetic</code>-Wert.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFECompositeElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFECompositeElement.in1")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFECompositeElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFECompositeElement.type")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("type")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_FECOMPOSITE_OPERATOR_*`-Konstanten an.
- {{domxref("SVGFECompositeElement.values")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumberList")}}, das dem {{SVGAttr("values")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFECompositeElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFECompositeElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFECompositeElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feComposite")}}
