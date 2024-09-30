---
title: SVGFEMorphologyElement
slug: Web/API/SVGFEMorphologyElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEMorphologyElement`**-Schnittstelle entspricht dem {{SVGElement("feMorphology")}}-Element.

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
      <td><code>SVG_MORPHOLOGY_OPERATOR_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen 
        vorhandenen Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_MORPHOLOGY_OPERATOR_ERODE</code></td>
      <td>1</td>
      <td>Entspricht dem <code>erode</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_MORPHOLOGY_OPERATOR_DILATE</code></td>
      <td>2</td>
      <td>Entspricht dem <code>dilate</code>-Wert.</td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEMorphologyElement.height`](/de/docs/Web/API/SVGFEMorphologyElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.in1`](/de/docs/Web/API/SVGFEMorphologyElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.operator`](/de/docs/Web/API/SVGFEMorphologyElement/operator) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("operator")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_MORPHOLOGY_OPERATOR_*`-Konstanten an.
- [`SVGFEMorphologyElement.radiusX`](/de/docs/Web/API/SVGFEMorphologyElement/radiusX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der X-Komponente des {{SVGAttr("radius")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.radiusY`](/de/docs/Web/API/SVGFEMorphologyElement/radiusY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der Y-Komponente des {{SVGAttr("radius")}}-Attributs des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.result`](/de/docs/Web/API/SVGFEMorphologyElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.width`](/de/docs/Web/API/SVGFEMorphologyElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.x`](/de/docs/Web/API/SVGFEMorphologyElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEMorphologyElement.y`](/de/docs/Web/API/SVGFEMorphologyElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch diejenigen ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feMorphology")}}
