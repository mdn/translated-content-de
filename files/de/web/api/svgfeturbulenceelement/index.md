---
title: SVGFETurbulenceElement
slug: Web/API/SVGFETurbulenceElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFETurbulenceElement`**-Schnittstelle entspricht dem {{SVGElement("feTurbulence")}}-Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig,
        einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen
        bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_FRACTALNOISE</code></td>
      <td>1</td>
      <td>Entspricht dem <code>fractalNoise</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_TURBULENCE_TYPE_TURBULENCE</code></td>
      <td>2</td>
      <td>Entspricht dem <code>turbulence</code>-Wert.</td>
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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig,
        einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen
        bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_STITCH</code></td>
      <td>1</td>
      <td>Entspricht dem <code>stitch</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_STITCHTYPE_NOSTITCH</code></td>
      <td>2</td>
      <td>Entspricht dem <code>noStitch</code>-Wert.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFETurbulenceElement.baseFrequencyX")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der der X-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.baseFrequencyY")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der der Y-Komponente des {{SVGAttr("baseFrequency")}}-Attributs des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.numOctaves")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedInteger")}}, der dem {{SVGAttr("numOctaves")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, der dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.seed")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, der dem {{SVGAttr("seed")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.stitchTiles")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("stitchTiles")}}-Attribut des gegebenen Elements entspricht. Dies nimmt einen der `SVG_STITCHTYPE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- {{domxref("SVGFETurbulenceElement.type")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, der dem {{SVGAttr("type")}}-Attribut des gegebenen Elements entspricht. Dies nimmt einen der `SVG_TURBULENCE_TYPE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- {{domxref("SVGFETurbulenceElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFETurbulenceElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, der dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert aber die ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feTurbulence")}}
