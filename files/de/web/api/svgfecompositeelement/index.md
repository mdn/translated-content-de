---
title: SVGFECompositeElement
slug: Web/API/SVGFECompositeElement
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGFECompositeElement`** entspricht dem Element {{SVGElement("feComposite")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFECompositeElement.height`](/de/docs/Web/API/SVGFECompositeElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("height")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.in1`](/de/docs/Web/API/SVGFECompositeElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.in2`](/de/docs/Web/API/SVGFECompositeElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("in2")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.operator`](/de/docs/Web/API/SVGFECompositeElement/operator) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem Attribut {{SVGAttr("operator")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.k1`](/de/docs/Web/API/SVGFECompositeElement/k1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("k1")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.k2`](/de/docs/Web/API/SVGFECompositeElement/k2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("k2")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.k3`](/de/docs/Web/API/SVGFECompositeElement/k3) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("k3")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.k4`](/de/docs/Web/API/SVGFECompositeElement/k4) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem Attribut {{SVGAttr("k4")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.result`](/de/docs/Web/API/SVGFECompositeElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem Attribut {{SVGAttr("result")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.width`](/de/docs/Web/API/SVGFECompositeElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("width")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.x`](/de/docs/Web/API/SVGFECompositeElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("x")}} des jeweiligen Elements entspricht.
- [`SVGFECompositeElement.y`](/de/docs/Web/API/SVGFECompositeElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem Attribut {{SVGAttr("y")}} des jeweiligen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert aber die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_FECOMPOSITE_OPERATOR_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_FECOMPOSITE_OPERATOR_OVER` (1)
  - : Entspricht dem Wert `over`.
- `SVG_FECOMPOSITE_OPERATOR_IN` (2)
  - : Entspricht dem Wert `in`.
- `SVG_FECOMPOSITE_OPERATOR_OUT` (3)
  - : Entspricht dem Wert `out`.
- `SVG_FECOMPOSITE_OPERATOR_ATOP` (4)
  - : Entspricht dem Wert `atop`.
- `SVG_FECOMPOSITE_OPERATOR_XOR` (5)
  - : Entspricht dem Wert `xor`.
- `SVG_FECOMPOSITE_OPERATOR_ARITHMETIC` (6)
  - : Entspricht dem Wert `arithmetic`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("feComposite")}}
