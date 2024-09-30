---
title: SVGComponentTransferFunctionElement
slug: Web/API/SVGComponentTransferFunctionElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGComponentTransferFunctionElement`**-Schnittstelle definiert eine Basisschnittstelle, die von den Komponentenübertragungsfunktionsschnittstellen verwendet wird.

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
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig,
        zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <code>identity</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_TABLE</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <code>table</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <code>discrete</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_LINEAR</code></td>
      <td>4</td>
      <td>Entspricht dem Wert <code>linear</code>.</td>
    </tr>
    <tr>
      <td><code>SVG_FECOMPONENTTRANSFER_TYPE_GAMMA</code></td>
      <td>5</td>
      <td>Entspricht dem Wert <code>gamma</code>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGComponentTransferFunctionElement.type`](/de/docs/Web/API/SVGComponentTransferFunctionElement/type) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("type")}} Attribut des gegebenen Elements entspricht. Sie nimmt einen Wert der `SVG_FECOMPONENTTRANSFER_TYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.
- [`SVGComponentTransferFunctionElement.tableValues`](/de/docs/Web/API/SVGComponentTransferFunctionElement/tableValues) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList), die dem {{SVGAttr("tableValues")}} Attribut des gegebenen Elements entspricht.
- [`SVGComponentTransferFunctionElement.slope`](/de/docs/Web/API/SVGComponentTransferFunctionElement/slope) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("slope")}} Attribut des gegebenen Elements entspricht.
- [`SVGComponentTransferFunctionElement.intercept`](/de/docs/Web/API/SVGComponentTransferFunctionElement/intercept) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("intercept")}} Attribut des gegebenen Elements entspricht.
- [`SVGComponentTransferFunctionElement.amplitude`](/de/docs/Web/API/SVGComponentTransferFunctionElement/amplitude) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("amplitude")}} Attribut des gegebenen Elements entspricht.
- [`SVGComponentTransferFunctionElement.exponent`](/de/docs/Web/API/SVGComponentTransferFunctionElement/exponent) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("exponent")}} Attribut des gegebenen Elements entspricht.
- [`SVGComponentTransferFunctionElement.offset`](/de/docs/Web/API/SVGComponentTransferFunctionElement/offset) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber), die dem {{SVGAttr("offset")}} Attribut des gegebenen Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle bietet keine spezifischen Methoden, implementiert jedoch die ihrer Elternschnittstelle, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGFEFuncAElement`](/de/docs/Web/API/SVGFEFuncAElement)
- [`SVGFEFuncBElement`](/de/docs/Web/API/SVGFEFuncBElement)
- [`SVGFEFuncGElement`](/de/docs/Web/API/SVGFEFuncGElement)
- [`SVGFEFuncRElement`](/de/docs/Web/API/SVGFEFuncRElement)
