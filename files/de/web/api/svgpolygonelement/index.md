---
title: SVGPolygonElement
slug: Web/API/SVGPolygonElement
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Das **`SVGPolygonElement`**-Interface bietet Zugriff auf die Eigenschaften von {{SVGElement("polygon")}}-Elementen sowie Methoden zu ihrer Manipulation.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPolygonElement.animatedPoints`](/de/docs/Web/API/SVGPolygonElement/animatedPoints) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält es denselben Wert wie die `points`-Eigenschaft.
- [`SVGPolygonElement.points`](/de/docs/Web/API/SVGPolygonElement/points)
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den Basiswert (d.h. den statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt spiegeln sich im {{SVGAttr("points")}}-Attribut wider und umgekehrt.

## Instanzmethoden

_Dieses Interface implementiert keine spezifischen Methoden, erbt jedoch Methoden von seinem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polygon")}}
