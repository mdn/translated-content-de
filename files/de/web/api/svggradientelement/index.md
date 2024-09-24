---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Das **`SVGGradient`** Interface ist ein Basis-Interface, das von {{domxref("SVGLinearGradientElement")}} und {{domxref("SVGRadialGradientElement")}} verwendet wird.

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
      <td><code>SVG_SPREADMETHOD_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_SPREADMETHOD_PAD</code></td>
      <td>1</td>
      <td>Entspricht dem Wert <em>pad</em>.</td>
    </tr>
    <tr>
      <td><code>SVG_SPREADMETHOD_REFLECT</code></td>
      <td>2</td>
      <td>Entspricht dem Wert <em>reflect</em>.</td>
    </tr>
    <tr>
      <td><code>SVG_SPREADMETHOD_REPEAT</code></td>
      <td>3</td>
      <td>Entspricht dem Wert <em>repeat</em>.</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, {{domxref("SVGElement")}}._

- {{domxref("SVGGradientElement.href")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedString")}}, das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}}-Attribut {{deprecated_inline}} des gegebenen Elements entspricht.
- {{domxref("SVGGradientElement.gradientUnits")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("gradientUnits")}}-Attribut des gegebenen Elements entspricht. Diese Eigenschaft nimmt eine der in {{domxref("SVGUnitTypes")}} definierten Konstanten an.
- {{domxref("SVGGradientElement.gradientTransform")}} {{ReadOnlyInline}}
  - : Eine {{domxref("SVGAnimatedTransformList")}}, die dem {{SVGAttr("gradientTransform")}}-Attribut des gegebenen Elements entspricht.
- {{domxref("SVGGradientElement.spreadMethod")}} {{ReadOnlyInline}}
  - : Ein {{domxref("SVGAnimatedEnumeration")}}, das dem {{SVGAttr("spreadMethod")}}-Attribut des gegebenen Elements entspricht. Einer der auf diesem Interface definierten Spread-Methoden-Typen.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, aber es implementiert die seines Elternteils, {{domxref("SVGElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
