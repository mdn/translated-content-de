---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
l10n:
  sourceCommit: 077f8fbb481ea7c240bc772619292ee094a4f634
---

{{APIRef("SVG")}}

Die **`SVGFEDisplacementMapElement`** Schnittstelle entspricht dem {{SVGElement("feDisplacementMap")}} Element.

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
      <td><code>SVG_CHANNEL_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist keiner der vordefinierten Typen. Es ist ungültig, zu
        versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_R</code></td>
      <td>1</td>
      <td>Entspricht dem <code>R</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_G</code></td>
      <td>2</td>
      <td>Entspricht dem <code>G</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_B</code></td>
      <td>3</td>
      <td>Entspricht dem <code>B</code>-Wert.</td>
    </tr>
    <tr>
      <td><code>SVG_CHANNEL_A</code></td>
      <td>4</td>
      <td>Entspricht dem <code>A</code>-Wert.</td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGFEDisplacementMapElement.height")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.in1")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("in")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.in2")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("in2")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.result")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("result")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.scale")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedNumber")}}, das dem {{SVGAttr("scale")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.width")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.x")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.xChannelSelector")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("xChannelSelector")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_CHANNEL_*` Konstanten an.
- {{domxref("SVGFEDisplacementMapElement.y")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedLength")}}, das dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.
- {{domxref("SVGFEDisplacementMapElement.yChannelSelector")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("yChannelSelector")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_CHANNEL_*` Konstanten an.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{SVGElement("feDisplacementMap")}}
