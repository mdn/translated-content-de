---
title: SVGFEBlendElement
slug: Web/API/SVGFEBlendElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGFEBlendElement`**-Schnittstelle entspricht dem {{SVGElement("feBlend")}}-Element.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEBlendElement.height`](/de/docs/Web/API/SVGFEBlendElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.in1`](/de/docs/Web/API/SVGFEBlendElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.in2`](/de/docs/Web/API/SVGFEBlendElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in2")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.mode`](/de/docs/Web/API/SVGFEBlendElement/mode) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("mode")}}-Attribut des gegebenen Elements entspricht. Es nimmt einen der `SVG_FEBLEND_MODE_*`-Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGFEBlendElement.result`](/de/docs/Web/API/SVGFEBlendElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.width`](/de/docs/Web/API/SVGFEBlendElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.x`](/de/docs/Web/API/SVGFEBlendElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des gegebenen Elements entspricht.
- [`SVGFEBlendElement.y`](/de/docs/Web/API/SVGFEBlendElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des gegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle bietet keine speziellen Methoden, implementiert jedoch die Methoden ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_FEBLEND_MODE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist nicht zulässig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert zu diesem Typ zu wechseln.
- `SVG_FEBLEND_MODE_NORMAL` (1)
  - : Entspricht dem Wert `normal`.
- `SVG_FEBLEND_MODE_MULTIPLY` (2)
  - : Entspricht dem Wert `multiply`.
- `SVG_FEBLEND_MODE_SCREEN` (3)
  - : Entspricht dem Wert `screen`.
- `SVG_FEBLEND_MODE_DARKEN` (4)
  - : Entspricht dem Wert `darken`.
- `SVG_FEBLEND_MODE_LIGHTEN` (5)
  - : Entspricht dem Wert `lighten`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feBlend")}}
