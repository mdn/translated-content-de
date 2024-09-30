---
title: SVGPolygonElement
slug: Web/API/SVGPolygonElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGPolygonElement`** Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("polygon")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPolygonElement.animatedPoints`](/de/docs/Web/API/SVGPolygonElement/animatedPoints) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält sie denselben Wert wie die `points`-Eigenschaft.
- [`SVGPolygonElement.points`](/de/docs/Web/API/SVGPolygonElement/points)
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den Basiswert (d. h. den statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt werden im {{SVGAttr("points")}}-Attribut widergespiegelt und umgekehrt.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, sondern erbt Methoden von ihrem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polygon")}}
