---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGFEDisplacementMapElement`**-Interface entspricht dem {{SVGElement("feDisplacementMap")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEDisplacementMapElement.height`](/de/docs/Web/API/SVGFEDisplacementMapElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.in1`](/de/docs/Web/API/SVGFEDisplacementMapElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.in2`](/de/docs/Web/API/SVGFEDisplacementMapElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in2")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.result`](/de/docs/Web/API/SVGFEDisplacementMapElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.scale`](/de/docs/Web/API/SVGFEDisplacementMapElement/scale) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("scale")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.width`](/de/docs/Web/API/SVGFEDisplacementMapElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.x`](/de/docs/Web/API/SVGFEDisplacementMapElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.xChannelSelector`](/de/docs/Web/API/SVGFEDisplacementMapElement/xChannelSelector) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("xChannelSelector")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_CHANNEL_*` Konstanten an, die in diesem Interface definiert sind.
- [`SVGFEDisplacementMapElement.y`](/de/docs/Web/API/SVGFEDisplacementMapElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}} Attribut des gegebenen Elements entspricht.
- [`SVGFEDisplacementMapElement.yChannelSelector`](/de/docs/Web/API/SVGFEDisplacementMapElement/yChannelSelector) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("yChannelSelector")}} Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_CHANNEL_*` Konstanten an, die in diesem Interface definiert sind.

## Instanzmethoden

_Dieses Interface bietet keine spezifischen Methoden, sondern implementiert jene seines übergeordneten Interfaces, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_CHANNEL_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu diesem Typ zu wechseln.
- `SVG_CHANNEL_R` (1)
  - : Entspricht dem Wert `R`.
- `SVG_CHANNEL_G` (2)
  - : Entspricht dem Wert `G`.
- `SVG_CHANNEL_B` (3)
  - : Entspricht dem Wert `B`.
- `SVG_CHANNEL_A` (4)
  - : Entspricht dem Wert `A`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feDisplacementMap")}}
