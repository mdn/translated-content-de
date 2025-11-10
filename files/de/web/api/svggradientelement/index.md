---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das **`SVGGradient`**-Interface ist ein Basis-Interface, das von [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement) und [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement) verwendet wird.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Eltern-Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGradientElement.href`](/de/docs/Web/API/SVGGradientElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} des angegebenen Elements entspricht.
- [`SVGGradientElement.gradientUnits`](/de/docs/Web/API/SVGGradientElement/gradientUnits) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), der dem Attribut {{SVGAttr("gradientUnits")}} auf dem angegebenen Element entspricht. Diese Eigenschaft nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGGradientElement.gradientTransform`](/de/docs/Web/API/SVGGradientElement/gradientTransform) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), die dem Attribut {{SVGAttr("gradientTransform")}} auf dem angegebenen Element entspricht.
- [`SVGGradientElement.spreadMethod`](/de/docs/Web/API/SVGGradientElement/spreadMethod) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), der dem Attribut {{SVGAttr("spreadMethod")}} auf dem angegebenen Element entspricht. Einer der auf diesem Interface definierten Spread-Methoden-Typen.

## Instanz-Methoden

_Dieses Interface bietet keine spezifischen Methoden, implementiert jedoch die Methoden seines Eltern-Interfaces, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Statische Eigenschaften

- `SVG_SPREADMETHOD_UNKNOWN` (0)
  - : Der Typ ist nicht einer der vordefinierten Typen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen existierenden Wert auf diesen Typ zu ändern.
- `SVG_SPREADMETHOD_PAD` (1)
  - : Entspricht dem Wert `pad`.
- `SVG_SPREADMETHOD_REFLECT` (2)
  - : Entspricht dem Wert `reflect`.
- `SVG_SPREADMETHOD_REPEAT` (3)
  - : Entspricht dem Wert `repeat`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
