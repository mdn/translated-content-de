---
title: SVGFEMorphologyElement
slug: Web/API/SVGFEMorphologyElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEMorphologyElement`** Schnittstelle entspricht dem {{SVGElement("feMorphology")}}-Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden
        Wert auf diesen Typ zu ändern.
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

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEMorphologyElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("height")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.in1")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("in")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.operator")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("operator")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_MORPHOLOGY_OPERATOR_*` Konstanten an.
- {{domxref("SVGFEMorphologyElement.radiusX")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der der X-Komponente des {{SVGAttr("radius")}}-Attributs des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.radiusY")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der der Y-Komponente des {{SVGAttr("radius")}}-Attributs des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("result")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("width")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("x")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEMorphologyElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("y")}}-Attribut des angegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feMorphology")}}
