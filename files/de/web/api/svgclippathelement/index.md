---
title: SVGClipPathElement
slug: Web/API/SVGClipPathElement
l10n:
  sourceCommit: cce0046336a987e8f643c287fe1430f39269a048
---

{{APIRef("SVG")}}

Die **`SVGClipPathElement`**-Schnittstelle ermöglicht den Zugriff auf die Eigenschaften von {{SVGElement("clipPath")}}-Elementen sowie Methoden zur Manipulation dieser Elemente.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem übergeordneten Element, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits) {{ReadOnlyInline}}
  - : Gibt ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) zurück, das dem {{SVGAttr("clipPathUnits")}}-Attribut des zugehörigen {{SVGElement("clipPath")}}-Elements entspricht. Nimmt einen der Konstanten, die in [`SVGUnitTypes`](/de/docs/Web/API/SVGUnitTypes) definiert sind.
- [`SVGClipPathElement.transform`](/de/docs/Web/API/SVGClipPathElement/transform) {{ReadOnlyInline}}
  - : Gibt eine [`SVGAnimatedTransformList`](/de/docs/Web/API/SVGAnimatedTransformList) zurück, die dem {{SVGAttr("transform")}}-Attribut des zugehörigen {{SVGElement("clipPath")}}-Elements entspricht.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem übergeordneten Element, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("clipPath")}}
