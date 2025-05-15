---
title: SVGClipPathElement
slug: Web/API/SVGClipPathElement
l10n:
  sourceCommit: 1c24dd81053cd34f393ce2c4b2ac071886007625
---

{{APIRef("SVG")}}

Das **`SVGClipPathElement`**-Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("clipPath")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits) {{ReadOnlyInline}}
  - : Gibt eine [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) zurück, die dem {{SVGAttr("clipPathUnits")}}-Attribut des zugehörigen {{SVGElement("clipPath")}}-Elements entspricht. Sie nimmt eine der in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definierten Konstanten an.
- [`SVGClipPathElement.transform`](/de/docs/Web/API/SVGClipPathElement/transform) {{ReadOnlyInline}}
  - : Gibt eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) zurück, die dem {{SVGAttr("transform")}}-Attribut des zugehörigen {{SVGElement("clipPath")}}-Elements entspricht.

## Instanzen-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem Elternteil, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("clipPath")}}
- [Einführung in das CSS-Clipping](/de/docs/Web/CSS/CSS_masking/Clipping)
