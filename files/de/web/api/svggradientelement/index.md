---
title: SVGGradientElement
slug: Web/API/SVGGradientElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Das **`SVGGradient`**-Interface ist ein Basis-Interface, das von [`SVGLinearGradientElement`](/de/docs/Web/API/SVGLinearGradientElement) und [`SVGRadialGradientElement`](/de/docs/Web/API/SVGRadialGradientElement) verwendet wird.

{{InheritanceDiagram}}

## Statische Eigenschaften

- `SVG_SPREADMETHOD_UNKNOWN` (0)
  - : Der Typ gehört nicht zu den vordefinierten Typen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ zu ändern.
- `SVG_SPREADMETHOD_PAD` (1)
  - : Entspricht dem Wert `pad`.
- `SVG_SPREADMETHOD_REFLECT` (2)
  - : Entspricht dem Wert `reflect`.
- `SVG_SPREADMETHOD_REPEAT` (3)
  - : Entspricht dem Wert `repeat`.

## Instanzeigenschaften

_Dieses Interface erbt außerdem Eigenschaften von seinem übergeordneten Interface [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGGradientElement.href`](/de/docs/Web/API/SVGGradientElement/href) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), der dem Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} des jeweiligen Elements entspricht.
- [`SVGGradientElement.gradientUnits`](/de/docs/Web/API/SVGGradientElement/gradientUnits) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("gradientUnits")}} des jeweiligen Elements entspricht. Diese Eigenschaft nimmt eine der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGGradientElement.gradientTransform`](/de/docs/Web/API/SVGGradientElement/gradientTransform) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList), die dem Attribut {{SVGAttr("gradientTransform")}} des jeweiligen Elements entspricht.
- [`SVGGradientElement.spreadMethod`](/de/docs/Web/API/SVGGradientElement/spreadMethod) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("spreadMethod")}} des jeweiligen Elements entspricht. Der Wert ist einer der in diesem Interface definierten Typen für die Ausbreitungsmethode.

## Instanzmethoden

_Dieses Interface stellt keine eigenen Methoden bereit, implementiert jedoch die Methoden seines übergeordneten Interfaces [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
