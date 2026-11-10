---
title: SVGFEDisplacementMapElement
slug: Web/API/SVGFEDisplacementMapElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Das Interface **`SVGFEDisplacementMapElement`** entspricht dem Element {{SVGElement("feDisplacementMap")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_CHANNEL_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `SVG_CHANNEL_R` (1)
  - : Entspricht dem Wert `R`.
- `SVG_CHANNEL_G` (2)
  - : Entspricht dem Wert `G`.
- `SVG_CHANNEL_B` (3)
  - : Entspricht dem Wert `B`.
- `SVG_CHANNEL_A` (4)
  - : Entspricht dem Wert `A`.

## Instanzeigenschaften

_Dieses Interface erbt außerdem Eigenschaften von seinem übergeordneten Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEDisplacementMapElement.height`](/de/docs/Web/API/SVGFEDisplacementMapElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.in1`](/de/docs/Web/API/SVGFEDisplacementMapElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.in2`](/de/docs/Web/API/SVGFEDisplacementMapElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in2")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.result`](/de/docs/Web/API/SVGFEDisplacementMapElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("result")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.scale`](/de/docs/Web/API/SVGFEDisplacementMapElement/scale) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("scale")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.width`](/de/docs/Web/API/SVGFEDisplacementMapElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.x`](/de/docs/Web/API/SVGFEDisplacementMapElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.xChannelSelector`](/de/docs/Web/API/SVGFEDisplacementMapElement/xChannelSelector) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("xChannelSelector")}} des betreffenden Elements entspricht. Sie nimmt den Wert einer der in diesem Interface definierten Konstanten `SVG_CHANNEL_*` an.
- [`SVGFEDisplacementMapElement.y`](/de/docs/Web/API/SVGFEDisplacementMapElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des betreffenden Elements entspricht.
- [`SVGFEDisplacementMapElement.yChannelSelector`](/de/docs/Web/API/SVGFEDisplacementMapElement/yChannelSelector) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("yChannelSelector")}} des betreffenden Elements entspricht. Sie nimmt den Wert einer der in diesem Interface definierten Konstanten `SVG_CHANNEL_*` an.

## Instanzmethoden

_Dieses Interface stellt keine eigenen Methoden bereit, implementiert aber die Methoden seines übergeordneten Interfaces [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feDisplacementMap")}}
