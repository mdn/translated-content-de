---
title: SVGFEBlendElement
slug: Web/API/SVGFEBlendElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGFEBlendElement`**-Schnittstelle entspricht dem {{SVGElement("feBlend")}} Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
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

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEBlendElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("height")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEBlendElement.in1")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("in")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEBlendElement.in2")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("in2")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEBlendElement.mode")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("mode")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der `SVG_FEBLEND_MODE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- {{domxref("SVGFEBlendElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("result")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEBlendElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("width")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEBlendElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("x")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGFEBlendElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("y")}}-Attribut des angegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feBlend")}}
