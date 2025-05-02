---
title: SVGComponentTransferFunctionElement
slug: Web/API/SVGComponentTransferFunctionElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGComponentTransferFunctionElement`**-Interface repräsentiert ein Basis-Interface, das von den Komponentenübertragungsfunktions-Interfaces verwendet wird.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGComponentTransferFunctionElement.type`](/de/docs/Web/API/SVGComponentTransferFunctionElement/type) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("type")}}-Attribut des betreffenden Elements entspricht. Sie nimmt einen der auf diesem Interface definierten `SVG_FECOMPONENTTRANSFER_TYPE_*`-Konstanten an.
- [`SVGComponentTransferFunctionElement.tableValues`](/de/docs/Web/API/SVGComponentTransferFunctionElement/tableValues) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), die dem {{SVGAttr("tableValues")}}-Attribut des betreffenden Elements entspricht.
- [`SVGComponentTransferFunctionElement.slope`](/de/docs/Web/API/SVGComponentTransferFunctionElement/slope) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("slope")}}-Attribut des betreffenden Elements entspricht.
- [`SVGComponentTransferFunctionElement.intercept`](/de/docs/Web/API/SVGComponentTransferFunctionElement/intercept) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("intercept")}}-Attribut des betreffenden Elements entspricht.
- [`SVGComponentTransferFunctionElement.amplitude`](/de/docs/Web/API/SVGComponentTransferFunctionElement/amplitude) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("amplitude")}}-Attribut des betreffenden Elements entspricht.
- [`SVGComponentTransferFunctionElement.exponent`](/de/docs/Web/API/SVGComponentTransferFunctionElement/exponent) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("exponent")}}-Attribut des betreffenden Elements entspricht.
- [`SVGComponentTransferFunctionElement.offset`](/de/docs/Web/API/SVGComponentTransferFunctionElement/offset) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("offset")}}-Attribut des betreffenden Elements entspricht.

## Instanzmethoden

_Dieses Interface bietet keine spezifischen Methoden, sondern implementiert die seines übergeordneten Interfaces, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu wechseln.
- `SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY` (1)
  - : Entspricht dem Wert `identity`.
- `SVG_FECOMPONENTTRANSFER_TYPE_TABLE` (2)
  - : Entspricht dem Wert `table`.
- `SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE` (3)
  - : Entspricht dem Wert `discrete`.
- `SVG_FECOMPONENTTRANSFER_TYPE_LINEAR` (4)
  - : Entspricht dem Wert `linear`.
- `SVG_FECOMPONENTTRANSFER_TYPE_GAMMA` (5)
  - : Entspricht dem Wert `gamma`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFuncAElement`](/de/docs/Web/API/SVGFEFuncAElement)
- [`SVGFEFuncBElement`](/de/docs/Web/API/SVGFEFuncBElement)
- [`SVGFEFuncGElement`](/de/docs/Web/API/SVGFEFuncGElement)
- [`SVGFEFuncRElement`](/de/docs/Web/API/SVGFEFuncRElement)
