---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Das **`SVGGradient`** Interface ist ein Basis-Interface, das von [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement) und [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement) verwendet wird.

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
        Der Typ gehört nicht zu den vordefinierten Typen. Es ist ungültig, zu versuchen,
        einen neuen Wert dieses Typs zu definieren oder einen bestehenden
        Wert auf diesen Typ zu ändern.
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

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGradientElement.href`](/de/docs/Web/API/SVGGradientElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das dem {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut des gegebenen Elements entspricht.
- [`SVGGradientElement.gradientUnits`](/de/docs/Web/API/SVGGradientElement/gradientUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("gradientUnits")}} Attribut des gegebenen Elements entspricht. Diese Eigenschaft nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGGradientElement.gradientTransform`](/de/docs/Web/API/SVGGradientElement/gradientTransform) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), die dem {{SVGAttr("gradientTransform")}} Attribut des gegebenen Elements entspricht.
- [`SVGGradientElement.spreadMethod`](/de/docs/Web/API/SVGGradientElement/spreadMethod) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), das dem {{SVGAttr("spreadMethod")}} Attribut des gegebenen Elements entspricht. Einer der auf diesem Interface definierten Spread-Methode-Typen.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, sondern implementiert die seines Eltern-Interfaces [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
