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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OVER</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>over</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_IN</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>in</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OUT</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <code>out</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ATOP</code></td>
      <td>4</td>
      <td>Entspricht dem Wert <code>atop</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_XOR</code></td>
      <td>5</td>
      <td>Entspricht dem Wert <code>xor</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ARITHMETIC</code></td>
      <td>6</td>
      <td>Entspricht dem Wert <code>arithmetic</code>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFECompositeElement.height`](/de/docs/Web/API/SVGFECompositeElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.in1`](/de/docs/Web/API/SVGFECompositeElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.result`](/de/docs/Web/API/SVGFECompositeElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.type`](/de/docs/Web/API/SVGFECompositeElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_FECOMPOSITE_OPERATOR_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFECompositeElement.values`](/de/docs/Web/API/SVGFECompositeElement/values) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), das dem {{SVGAttr("values")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.width`](/de/docs/Web/API/SVGFECompositeElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.x`](/de/docs/Web/API/SVGFECompositeElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.y`](/de/docs/Web/API/SVGFECompositeElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, sondern implementiert die ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feComposite")}}
