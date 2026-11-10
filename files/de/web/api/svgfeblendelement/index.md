---
title: SVGFEBlendElement
slug: Web/API/SVGFEBlendElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGFEBlendElement`** entspricht dem Element {{SVGElement("feBlend")}}.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_FEBLEND_MODE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert in diesen Typ zu ändern.
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

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFEBlendElement.height`](/de/docs/Web/API/SVGFEBlendElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des angegebenen Elements entspricht.
- [`SVGFEBlendElement.in1`](/de/docs/Web/API/SVGFEBlendElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in")}} des angegebenen Elements entspricht.
- [`SVGFEBlendElement.in2`](/de/docs/Web/API/SVGFEBlendElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in2")}} des angegebenen Elements entspricht.
- [`SVGFEBlendElement.mode`](/de/docs/Web/API/SVGFEBlendElement/mode) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("mode")}} des angegebenen Elements entspricht. Sie nimmt eine der in dieser Schnittstelle definierten `SVG_FEBLEND_MODE_*`-Konstanten an.
- [`SVGFEBlendElement.result`](/de/docs/Web/API/SVGFEBlendElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("result")}} des angegebenen Elements entspricht.
- [`SVGFEBlendElement.width`](/de/docs/Web/API/SVGFEBlendElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des angegebenen Elements entspricht.
- [`SVGFEBlendElement.x`](/de/docs/Web/API/SVGFEBlendElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des angegebenen Elements entspricht.
- [`SVGFEBlendElement.y`](/de/docs/Web/API/SVGFEBlendElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des angegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert jedoch die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feBlend")}}
