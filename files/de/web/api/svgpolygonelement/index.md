---
title: SVGPolygonElement
slug: Web/API/SVGPolygonElement
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGPolygonElement`** bietet Zugriff auf die Eigenschaften von {{SVGElement("polygon")}}-Elementen sowie Methoden zu deren Bearbeitung.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPolygonElement.animatedPoints`](/de/docs/Web/API/SVGPolygonElement/animatedPoints) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält sie denselben Wert wie die Eigenschaft `points`.
- [`SVGPolygonElement.points`](/de/docs/Web/API/SVGPolygonElement/points) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den Basiswert (d.h. den statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt werden im {{SVGAttr("points")}}-Attribut übernommen und umgekehrt.

## Instanzmethoden

_Diese Schnittstelle implementiert keine eigenen Methoden, erbt jedoch Methoden von ihrer übergeordneten Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polygon")}}
