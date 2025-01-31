---
title: SVGFECompositeElement
slug: Web/API/SVGFECompositeElement
l10n:
  sourceCommit: e63d38e8ca98cb2705d2feb35cfaf316fd7c97e2
---

{{APIRef("SVG")}}

Die **`SVGFECompositeElement`** Schnittstelle entspricht dem {{SVGElement("feComposite")}} Element.

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
        Der Typ ist keiner der vordefinierten Typen. Es ist unzulässig, zu versuchen,
        einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu
        diesem Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OVER</code></td>
      <td>1</td>
      <td>Entspricht dem <code>over</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_IN</code></td>
      <td>2</td>
      <td>Entspricht dem <code>in</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_OUT</code></td>
      <td>3</td>
      <td>Entspricht dem <code>out</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ATOP</code></td>
      <td>4</td>
      <td>Entspricht dem <code>atop</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_XOR</code></td>
      <td>5</td>
      <td>Entspricht dem <code>xor</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPOSITE_OPERATOR_ARITHMETIC</code></td>
      <td>6</td>
      <td>Entspricht dem <code>arithmetic</code> Wert.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFECompositeElement.height`](/de/docs/Web/API/SVGFECompositeElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.in1`](/de/docs/Web/API/SVGFECompositeElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.in2`](/de/docs/Web/API/SVGFECompositeElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in2")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.operator`](/de/docs/Web/API/SVGFECompositeElement/operator) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("operator")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.k1`](/de/docs/Web/API/SVGFECompositeElement/k1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k1")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.k2`](/de/docs/Web/API/SVGFECompositeElement/k2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k2")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.k3`](/de/docs/Web/API/SVGFECompositeElement/k3) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k3")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.k4`](/de/docs/Web/API/SVGFECompositeElement/k4) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k4")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.result`](/de/docs/Web/API/SVGFECompositeElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.type`](/de/docs/Web/API/SVGFECompositeElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_FECOMPOSITE_OPERATOR_*` Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFECompositeElement.values`](/de/docs/Web/API/SVGFECompositeElement/values) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), das dem {{SVGAttr("values")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.width`](/de/docs/Web/API/SVGFECompositeElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.x`](/de/docs/Web/API/SVGFECompositeElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- [`SVGFECompositeElement.y`](/de/docs/Web/API/SVGFECompositeElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, aber implementiert die ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feComposite")}}
