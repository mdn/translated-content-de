---
title: SVGMaskElement
slug: Web/API/SVGMaskElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGMaskElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("mask")}}-Elementen sowie Methoden, um sie zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGMaskElement.maskUnits`](/de/docs/Web/API/SVGMaskElement/maskUnits) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("maskUnits")}} des angegebenen {{SVGElement("mask")}}-Elements entspricht. Nimmt eine der Konstanten ein, die in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definiert sind.
- [`SVGMaskElement.maskContentUnits`](/de/docs/Web/API/SVGMaskElement/maskContentUnits) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration), die dem Attribut {{SVGAttr("maskContentUnits")}} des angegebenen {{SVGElement("mask")}}-Elements entspricht. Nimmt eine der Konstanten ein, die in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definiert sind.
- [`SVGMaskElement.x`](/de/docs/Web/API/SVGMaskElement/x) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("x")}} des angegebenen {{SVGElement("mask")}}-Elements entspricht.
- [`SVGMaskElement.y`](/de/docs/Web/API/SVGMaskElement/y) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("y")}} des angegebenen {{SVGElement("mask")}}-Elements entspricht.
- [`SVGMaskElement.width`](/de/docs/Web/API/SVGMaskElement/width) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("width")}} des angegebenen {{SVGElement("mask")}}-Elements entspricht.
- [`SVGMaskElement.height`](/de/docs/Web/API/SVGMaskElement/height) {{ReadOnlyInline}}
  - : Eine [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength), die dem Attribut {{SVGAttr("height")}} des angegebenen {{SVGElement("mask")}}-Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrer Elternschnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mask")}}
