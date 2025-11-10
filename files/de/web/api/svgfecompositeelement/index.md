---
title: SVGFECompositeElement
slug: Web/API/SVGFECompositeElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGFECompositeElement`**-Interface entspricht dem {{SVGElement("feComposite")}}-Element.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGFECompositeElement.height`](/de/docs/Web/API/SVGFECompositeElement/height) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("height")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.in1`](/de/docs/Web/API/SVGFECompositeElement/in1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.in2`](/de/docs/Web/API/SVGFECompositeElement/in2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("in2")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.operator`](/de/docs/Web/API/SVGFECompositeElement/operator) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("operator")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.k1`](/de/docs/Web/API/SVGFECompositeElement/k1) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k1")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.k2`](/de/docs/Web/API/SVGFECompositeElement/k2) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k2")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.k3`](/de/docs/Web/API/SVGFECompositeElement/k3) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k3")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.k4`](/de/docs/Web/API/SVGFECompositeElement/k4) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), das dem {{SVGAttr("k4")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.result`](/de/docs/Web/API/SVGFECompositeElement/result) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("result")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.type`](/de/docs/Web/API/SVGFECompositeElement/type) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der auf diesem Interface definierten `SVG_FECOMPOSITE_OPERATOR_*`-Konstanten an.
- [`SVGFECompositeElement.values`](/de/docs/Web/API/SVGFECompositeElement/values) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), das dem {{SVGAttr("values")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.width`](/de/docs/Web/API/SVGFECompositeElement/width) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("width")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.x`](/de/docs/Web/API/SVGFECompositeElement/x) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("x")}}-Attribut des angegebenen Elements entspricht.
- [`SVGFECompositeElement.y`](/de/docs/Web/API/SVGFECompositeElement/y) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), das dem {{SVGAttr("y")}}-Attribut des angegebenen Elements entspricht.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert jedoch die des übergeordneten Interfaces [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_FECOMPOSITE_OPERATOR_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu ändern.
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
