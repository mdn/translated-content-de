---
title: SVGFEBlendElement
slug: Web/API/SVGFEBlendElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEBlendElement`**-Schnittstelle entspricht dem {{SVGElement("feBlend")}}-Element.

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
      <td><code>SVG_FEBLEND_MODE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist unzulässig,
        zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_NORMAL</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>normal</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_MULTIPLY</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>multiply</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_SCREEN</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <code>screen</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_DARKEN</code></td>
      <td>4</td>
      <td>Entspricht dem Wert <code>darken</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FEBLEND_MODE_LIGHTEN</code></td>
      <td>5</td>
      <td>Entspricht dem Wert <code>lighten</code>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEBlendElement.height`](/de/docs/Web/API/SVGFEBlendElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.in1`](/de/docs/Web/API/SVGFEBlendElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.in2`](/de/docs/Web/API/SVGFEBlendElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem {{SVGAttr("in2")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.mode`](/de/docs/Web/API/SVGFEBlendElement/mode) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), der dem {{SVGAttr("mode")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_FEBLEND_MODE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEBlendElement.result`](/de/docs/Web/API/SVGFEBlendElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.width`](/de/docs/Web/API/SVGFEBlendElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.x`](/de/docs/Web/API/SVGFEBlendElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.y`](/de/docs/Web/API/SVGFEBlendElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), der dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feBlend")}}
