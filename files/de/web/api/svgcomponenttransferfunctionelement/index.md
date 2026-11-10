---
title: SVGComponentTransferFunctionElement
slug: Web/API/SVGComponentTransferFunctionElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGComponentTransferFunctionElement`** ist eine Basisschnittstelle für die Schnittstellen der Komponentenübertragungsfunktionen.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
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

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGComponentTransferFunctionElement.type`](/de/docs/Web/API/SVGComponentTransferFunctionElement/type) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("type")}} des jeweiligen Elements entspricht. Sie nimmt den Wert einer der in dieser Schnittstelle definierten `SVG_FECOMPONENTTRANSFER_TYPE_*`-Konstanten an.
- [`SVGComponentTransferFunctionElement.tableValues`](/de/docs/Web/API/SVGComponentTransferFunctionElement/tableValues) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), die dem Attribut {{SVGAttr("tableValues")}} des jeweiligen Elements entspricht.
- [`SVGComponentTransferFunctionElement.slope`](/de/docs/Web/API/SVGComponentTransferFunctionElement/slope) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem Attribut {{SVGAttr("slope")}} des jeweiligen Elements entspricht.
- [`SVGComponentTransferFunctionElement.intercept`](/de/docs/Web/API/SVGComponentTransferFunctionElement/intercept) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem Attribut {{SVGAttr("intercept")}} des jeweiligen Elements entspricht.
- [`SVGComponentTransferFunctionElement.amplitude`](/de/docs/Web/API/SVGComponentTransferFunctionElement/amplitude) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem Attribut {{SVGAttr("amplitude")}} des jeweiligen Elements entspricht.
- [`SVGComponentTransferFunctionElement.exponent`](/de/docs/Web/API/SVGComponentTransferFunctionElement/exponent) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem Attribut {{SVGAttr("exponent")}} des jeweiligen Elements entspricht.
- [`SVGComponentTransferFunctionElement.offset`](/de/docs/Web/API/SVGComponentTransferFunctionElement/offset) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem Attribut {{SVGAttr("offset")}} des jeweiligen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle stellt keine eigenen Methoden bereit, implementiert aber die Methoden ihrer übergeordneten Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFuncAElement`](/de/docs/Web/API/SVGFEFuncAElement)
- [`SVGFEFuncBElement`](/de/docs/Web/API/SVGFEFuncBElement)
- [`SVGFEFuncGElement`](/de/docs/Web/API/SVGFEFuncGElement)
- [`SVGFEFuncRElement`](/de/docs/Web/API/SVGFEFuncRElement)
