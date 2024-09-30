---
title: SVGFETurbulenceElement
slug: Web/API/SVGFETurbulenceElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFETurbulenceElement`** Schnittstelle entspricht dem {{SVGElement("feTurbulence")}} Element.

{{InheritanceDiagram}}

## Konstanten

### Turbulenztypen

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ gehört nicht zu einer der vordefinierten Typen. Es ist ungültig,
        einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden
        Wert zu diesem Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_FRACTALNOISE</code></td>
      <td>1</td>
      <td>Entspricht dem <code>fractalNoise</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_TURBULENCE</code></td>
      <td>2</td>
      <td>Entspricht dem <code>turbulence</code> Wert.</td>
    </tr>
  </tbody>
</table>

### Stitch-Optionen

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ gehört nicht zu einer der vordefinierten Typen. Es ist ungültig,
        einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden
        Wert zu diesem Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_STITCH</code></td>
      <td>1</td>
      <td>Entspricht dem <code>stitch</code> Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_NOSTITCH</code></td>
      <td>2</td>
      <td>Entspricht dem <code>noStitch</code> Wert.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFETurbulenceElement.baseFrequencyX`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), der der X-Komponente des {{SVGAttr("baseFrequency")}} Attributs des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.baseFrequencyY`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), der der Y-Komponente des {{SVGAttr("baseFrequency")}} Attributs des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.height`](/de/docs/Web/API/SVGFETurbulenceElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.numOctaves`](/de/docs/Web/API/SVGFETurbulenceElement/numOctaves) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), der dem {{SVGAttr("numOctaves")}} Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.result`](/de/docs/Web/API/SVGFETurbulenceElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem {{SVGAttr("result")}} Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.seed`](/de/docs/Web/API/SVGFETurbulenceElement/seed) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), der dem {{SVGAttr("seed")}} Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.stitchTiles`](/de/docs/Web/API/SVGFETurbulenceElement/stitchTiles) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), der dem {{SVGAttr("stitchTiles")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_STITCHTYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFETurbulenceElement.type`](/de/docs/Web/API/SVGFETurbulenceElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), der dem {{SVGAttr("type")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_TURBULENCE_TYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFETurbulenceElement.width`](/de/docs/Web/API/SVGFETurbulenceElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.x`](/de/docs/Web/API/SVGFETurbulenceElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- [`SVGFETurbulenceElement.y`](/de/docs/Web/API/SVGFETurbulenceElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feTurbulence")}}
