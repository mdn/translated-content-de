---
title: SVGGeometryElement
slug: Web/API/SVGGeometryElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das `SVGGeometryElement` Interface repräsentiert SVG-Elemente, deren Darstellung durch Geometrie mit einem äquivalenten Pfad definiert ist und die gefüllt und gestrichen werden können. Dazu gehören Pfade und einfache Formen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGGeometryElement.pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength) {{ReadOnlyInline}}
  - : Diese Eigenschaft spiegelt das {{SVGAttr("pathLength")}}-Attribut wider.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von seinem Elternteil, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill)
  - : Bestimmt, ob ein gegebener Punkt innerhalb der Füllform eines Elements liegt. Normale Treffertestregeln gelten; der Wert der {{cssxref("pointer-events")}}-Eigenschaft auf dem Element bestimmt, ob ein Punkt als innerhalb der Füllung angesehen wird.
- [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke)
  - : Bestimmt, ob ein gegebener Punkt innerhalb der Strichform eines Elements liegt. Normale Treffertestregeln gelten; der Wert der {{cssxref("pointer-events")}}-Eigenschaft auf dem Element bestimmt, ob ein Punkt als innerhalb des Strichs angesehen wird.
- [`SVGGeometryElement.getTotalLength()`](/de/docs/Web/API/SVGGeometryElement/getTotalLength)
  - : Gibt den vom Benutzeragent berechneten Wert für die Gesamtlänge des Pfades in Benutzereinheiten zurück.
- [`SVGGeometryElement.getPointAtLength()`](/de/docs/Web/API/SVGGeometryElement/getPointAtLength)
  - : Gibt den Punkt in einer bestimmten Entfernung entlang des Pfades zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
