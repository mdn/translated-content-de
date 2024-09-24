---
title: SVGComponentTransferFunctionElement
slug: Web/API/SVGComponentTransferFunctionElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGComponentTransferFunctionElement`** definiert eine Basisschnittstelle, die von den Komponententransferfunktionsschnittstellen verwendet wird.

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
        Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig,
        zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen
        bestehenden Wert in diesen Typ zu ändern.
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

## Eigenschaften der Instanz

_Diese Schnittstelle erbt auch Eigenschaften von ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

- {{domxref("SVGComponentTransferFunctionElement.type")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedEnumeration")}}, die dem {{SVGAttr("type")}}-Attribut des angegebenen Elements entspricht. Es nimmt einen der auf dieser Schnittstelle definierten `SVG_FECOMPONENTTRANSFER_TYPE_*`-Konstanten an.
- {{domxref("SVGComponentTransferFunctionElement.tableValues")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumberList")}}, die dem {{SVGAttr("tableValues")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGComponentTransferFunctionElement.slope")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die dem {{SVGAttr("slope")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGComponentTransferFunctionElement.intercept")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die dem {{SVGAttr("intercept")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGComponentTransferFunctionElement.amplitude")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die dem {{SVGAttr("amplitude")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGComponentTransferFunctionElement.exponent")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die dem {{SVGAttr("exponent")}}-Attribut des angegebenen Elements entspricht.
- {{domxref("SVGComponentTransferFunctionElement.offset")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedNumber")}}, die dem {{SVGAttr("offset")}}-Attribut des angegebenen Elements entspricht.

## Instanzmethoden

_Diese Schnittstelle bietet keine spezifischen Methoden, sondern implementiert die Methoden ihrer übergeordneten Schnittstelle, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SVGFEFuncAElement")}}
- {{domxref("SVGFEFuncBElement")}}
- {{domxref("SVGFEFuncGElement")}}
- {{domxref("SVGFEFuncRElement")}}
