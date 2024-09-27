---
title: SVGFETurbulenceElement
slug: Web/API/SVGFETurbulenceElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das **`SVGFETurbulenceElement`**-Interface entspricht dem {{SVGElement("feTurbulence")}}-Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_FRACTALNOISE</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>fractalNoise</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_TURBULENCE</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>turbulence</code>.</td>
    </tr>
  </tbody>
</table>

### Stich-Optionen

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_STITCH</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>stitch</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_NOSTITCH</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>noStitch</code>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFETurbulenceElement.baseFrequencyX`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyX) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der X-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.baseFrequencyY`](/de/docs/Web/API/SVGFETurbulenceElement/baseFrequencyY) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das der Y-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.height`](/de/docs/Web/API/SVGFETurbulenceElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.numOctaves`](/de/docs/Web/API/SVGFETurbulenceElement/numOctaves) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedInteger`](/de/docs/Web/API/SVGAnimatedInteger), das dem {{SVGAttr("numOctaves")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.result`](/de/docs/Web/API/SVGFETurbulenceElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.seed`](/de/docs/Web/API/SVGFETurbulenceElement/seed) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("seed")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.stitchTiles`](/de/docs/Web/API/SVGFETurbulenceElement/stitchTiles) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("stitchTiles")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der `SVG_STITCHTYPE_*`-Konstanten an, die in diesem Interface definiert sind.
- [`SVGFETurbulenceElement.type`](/de/docs/Web/API/SVGFETurbulenceElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der `SVG_TURBULENCE_TYPE_*`-Konstanten an, die in diesem Interface definiert sind.
- [`SVGFETurbulenceElement.width`](/de/docs/Web/API/SVGFETurbulenceElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.x`](/de/docs/Web/API/SVGFETurbulenceElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFETurbulenceElement.y`](/de/docs/Web/API/SVGFETurbulenceElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des angegebenen Elements entspricht.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert jedoch die seines übergeordneten Interfaces, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feTurbulence")}}
