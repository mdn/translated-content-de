---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
l10n:
  sourceCommit: 077f8fbb481ea7c240bc772619292ee094a4f634
---

{{APIRef("SVG")}}

Die **`SVGFEDisplacementMapElement`**-Schnittstelle entspricht dem {{SVGElement("feDisplacementMap")}}-Element.

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
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert in diesen Typ zu ändern.
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

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEDisplacementMapElement.height`](/de/docs/Web/API/SVGFEDisplacementMapElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.in1`](/de/docs/Web/API/SVGFEDisplacementMapElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.in2`](/de/docs/Web/API/SVGFEDisplacementMapElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in2")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.result`](/de/docs/Web/API/SVGFEDisplacementMapElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.scale`](/de/docs/Web/API/SVGFEDisplacementMapElement/scale) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("scale")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.width`](/de/docs/Web/API/SVGFEDisplacementMapElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.x`](/de/docs/Web/API/SVGFEDisplacementMapElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.xChannelSelector`](/de/docs/Web/API/SVGFEDisplacementMapElement/xChannelSelector) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("xChannelSelector")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_CHANNEL_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEDisplacementMapElement.y`](/de/docs/Web/API/SVGFEDisplacementMapElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.yChannelSelector`](/de/docs/Web/API/SVGFEDisplacementMapElement/yChannelSelector) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("yChannelSelector")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_CHANNEL_*`-Konstanten an, die in dieser Schnittstelle definiert sind.

## Instanz-Methoden

_Diese Schnittstelle bietet keine speziellen Methoden, implementiert jedoch die ihrer übergeordneten Schnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feDisplacementMap")}}
