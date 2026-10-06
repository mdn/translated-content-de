---
title: SVGPolylineElement
slug: Web/API/SVGPolylineElement
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGPolylineElement`** bietet Zugriff auf die Eigenschaften von {{SVGElement("polyline")}}-Elementen sowie Methoden, um diese zu bearbeiten.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrer übergeordneten Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

- [`SVGPolylineElement.animatedPoints`](/de/docs/Web/API/SVGPolylineElement/animatedPoints) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den animierten Wert des {{SVGAttr("points")}}-Attributs des Elements darstellt. Wenn das {{SVGAttr("points")}}-Attribut nicht animiert wird, enthält sie denselben Wert wie die Eigenschaft `points`.
- [`SVGPolylineElement.points`](/de/docs/Web/API/SVGPolylineElement/points) {{ReadOnlyInline}}
  - : Eine [`SVGPointList`](/de/docs/Web/API/SVGPointList), die den Basiswert (d.h. den statischen Wert) des {{SVGAttr("points")}}-Attributs des Elements darstellt. Änderungen über das [`SVGPointList`](/de/docs/Web/API/SVGPointList)-Objekt spiegeln sich im {{SVGAttr("points")}}-Attribut wider und umgekehrt.

## Instanzmethoden

_Diese Schnittstelle implementiert keine eigenen Methoden, sondern erbt Methoden von ihrer übergeordneten Schnittstelle [`SVGGeometryElement`](/de/docs/Web/API/SVGGeometryElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("polyline")}}
