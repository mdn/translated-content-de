---
title: SVGMaskElement
slug: Web/API/SVGMaskElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das **`SVGMaskElement`** Interface bietet Zugriff auf die Eigenschaften der {{SVGElement("mask")}}-Elemente sowie Methoden, um diese zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGMaskElement.maskUnits`](/de/docs/Web/API/SVGMaskElement/maskUnits) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("maskUnits")}}-Attribut des gegebenen {{SVGElement("mask")}}-Elements entspricht. Nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGMaskElement.maskContentUnits`](/de/docs/Web/API/SVGMaskElement/maskContentUnits) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem {{SVGAttr("maskContentUnits")}}-Attribut des gegebenen {{SVGElement("mask")}}-Elements entspricht. Nimmt einen der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGMaskElement.x`](/de/docs/Web/API/SVGMaskElement/x) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("x")}}-Attribut des gegebenen {{SVGElement("mask")}}-Elements entspricht.
- [`SVGMaskElement.y`](/de/docs/Web/API/SVGMaskElement/y) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("y")}}-Attribut des gegebenen {{SVGElement("mask")}}-Elements entspricht.
- [`SVGMaskElement.width`](/de/docs/Web/API/SVGMaskElement/width) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("width")}}-Attribut des gegebenen {{SVGElement("mask")}}-Elements entspricht.
- [`SVGMaskElement.height`](/de/docs/Web/API/SVGMaskElement/height) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem {{SVGAttr("height")}}-Attribut des gegebenen {{SVGElement("mask")}}-Elements entspricht.

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mask")}}
