---
title: SVGPolylineElement
slug: Web/API/SVGPolylineElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGPolylineElement`**-Schnittstelle ermöglicht den Zugriff auf die Eigenschaften von {{SVGElement("polyline")}}-Elementen sowie Methoden zur Manipulation dieser.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPolylineElement.animatedPoints`](/de/docs/Web/API/SVGPolylineElement/animatedPoints) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält es denselben Wert wie die `points`-Eigenschaft.
- [`SVGPolylineElement.points`](/de/docs/Web/API/SVGPolylineElement/points)
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den Basiswert (d.h. statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt spiegeln sich im {{SVGAttr("points")}}-Attribut wider und umgekehrt.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem Elternteil, [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polyline")}}
