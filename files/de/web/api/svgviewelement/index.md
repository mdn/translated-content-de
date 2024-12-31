---
title: SVGViewElement
slug: Web/API/SVGViewElement
l10n:
  sourceCommit: b9fa5e524fb55a33f5b859aa49be8f834d99abaf
---

{{APIRef("SVG")}}

Das **`SVGViewElement`**-Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("view")}}-Elementen sowie Methoden, um diese zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

- [`SVGViewElement.viewBox`](/de/docs/Web/API/SVGViewElement/viewBox) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect), das dem Attribut {{SVGAttr("viewBox")}} des angegebenen {{SVGElement("view")}}-Elements entspricht.
- [`SVGViewElement.preserveAspectRatio`](/de/docs/Web/API/SVGViewElement/preserveAspectRatio) {{ReadOnlyInline}}
  - : Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio), das dem Attribut {{SVGAttr("preserveAspectRatio")}} des angegebenen {{SVGElement("view")}}-Elements entspricht.

## Instanz-Methoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem übergeordneten Interface, [`SVGElement`](/de/docs/Web/API/SVGElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("view")}}
