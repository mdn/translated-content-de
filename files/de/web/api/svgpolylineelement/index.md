---
title: SVGPolylineElement
slug: Web/API/SVGPolylineElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die **`SVGPolylineElement`**-Schnittstelle bietet Zugriff auf die Eigenschaften von {{SVGElement("polyline")}}-Elementen sowie Methoden zu deren Manipulation.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften von ihrem Elternteil, {{domxref("SVGGeometryElement")}}._

- {{domxref("SVGPolylineElement.animatedPoints")}} {{ReadOnlyInline}}
  - : Eine {{DOMxRef("SVGPointList")}}, die den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält es denselben Wert wie die `points`-Eigenschaft.
- {{domxref("SVGPolylineElement.points")}}
  - : Eine {{DOMxRef("SVGPointList")}}, die den Basis- (d.h. statischen) Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das {{DOMxRef("SVGPointList")}}-Objekt werden im {{SVGAttr("points")}}-Attribut widergespiegelt und umgekehrt.

## Instanz-Methoden

_Diese Schnittstelle implementiert keine speziellen Methoden, erbt jedoch Methoden von ihrem Elternteil, {{domxref("SVGGeometryElement")}}._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polyline")}}
