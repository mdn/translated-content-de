---
title: SVGFEConvolveMatrixElement
slug: Web/API/SVGFEConvolveMatrixElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das **`SVGFEConvolveMatrixElement`**-Interface entspricht dem {{SVGElement("feConvolveMatrix")}}-Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert in diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_DUPLICATE</code></td>
      <td>1</td>
      <td>Entspricht dem <code>duplicate</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_WRAP</code></td>
      <td>2</td>
      <td>Entspricht dem <code>wrap</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_EDGEMODE_NONE</code></td>
      <td>3</td>
      <td>Entspricht dem <code>none</code>-Wert.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEConvolveMatrixElement.bias`](/de/docs/Web/API/SVGFEConvolveMatrixElement/bias) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("bias")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.divisor`](/de/docs/Web/API/SVGFEConvolveMatrixElement/divisor) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("divisor")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.edgeMode`](/de/docs/Web/API/SVGFEConvolveMatrixElement/edgeMode) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("edgeMode")}}-Attribut des gegebenen Elements entspricht. Nimmt einen der `SVG_EDGEMODE_*`-Konstanten an, die in diesem Interface definiert sind.
- [`SVGFEConvolveMatrixElement.height`](/de/docs/Web/API/SVGFEConvolveMatrixElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.in1`](/de/docs/Web/API/SVGFEConvolveMatrixElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelMatrix`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelMatrix) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), das dem {{SVGAttr("kernelMatrix")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelUnitLengthX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelUnitLengthX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("kernelUnitLength")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.kernelUnitLengthY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/kernelUnitLengthY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("kernelUnitLength")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.orderX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/orderX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem {{SVGAttr("order")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.orderY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/orderY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem {{SVGAttr("order")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.preserveAlpha`](/de/docs/Web/API/SVGFEConvolveMatrixElement/preserveAlpha) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedBoolean`](/de/docs/Web/API/SVGAnimatedBoolean), das dem {{SVGAttr("preserveAlpha")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.result`](/de/docs/Web/API/SVGFEConvolveMatrixElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.targetX`](/de/docs/Web/API/SVGFEConvolveMatrixElement/targetX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem {{SVGAttr("targetX")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.targetY`](/de/docs/Web/API/SVGFEConvolveMatrixElement/targetY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem {{SVGAttr("targetY")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.width`](/de/docs/Web/API/SVGFEConvolveMatrixElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.x`](/de/docs/Web/API/SVGFEConvolveMatrixElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEConvolveMatrixElement.y`](/de/docs/Web/API/SVGFEConvolveMatrixElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Dieses Interface stellt keine spezifischen Methoden bereit, implementiert jedoch die Methoden seines Eltern-Interfaces, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität 

{{Compat}}

## Siehe auch

- {{SVGElement("feConvolveMatrix")}}
