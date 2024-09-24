---
title: SVGPolygonElement
slug: Web/API/SVGPolygonElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGPolygonElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("polygon")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGPolygonElement.animatedPoints")}} {{ReadOnlyInline}}
  - : Ein {{DOMxRef("SVGPointList")}}, das den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält es denselben Wert wie die `points`-Eigenschaft.
- {{domxref("SVGPolygonElement.points")}}
  - : Ein {{DOMxRef("SVGPointList")}}, das den Basis- (d.h. statischen) Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das {{DOMxRef("SVGPointList")}}-Objekt spiegeln sich im {{SVGAttr("points")}}-Attribut wider und umgekehrt.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine spezifischen Methoden, erbt jedoch Methoden von ihrem Elternteil, {{domxref("SVGGeometryElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polygon")}}
