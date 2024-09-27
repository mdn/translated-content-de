---
title: SVGGeometryElement
slug: Web/API/SVGGeometryElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Das `SVGGeometryElement` Interface repräsentiert SVG-Elemente, deren Rendering durch Geometrie mit einem äquivalenten Pfad definiert wird und die gefüllt und gestrichen werden können. Dazu gehören Pfade und die Grundformen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften von seinem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGGeometryElement.pathLength`](/de/docs/Web/API/SVGGeometryElement/pathLength) {{ReadOnlyInline}}
  - : Diese Eigenschaft entspricht dem {{SVGAttr("pathLength")}}-Attribut.

## Instanzmethoden

_Dieses Interface erbt auch Methoden von seinem übergeordneten Element, [`SVGGraphicsElement`](/de/docs/Web/API/SVGGraphicsElement)._

- [`SVGGeometryElement.isPointInFill()`](/de/docs/Web/API/SVGGeometryElement/isPointInFill)
  - : Bestimmt, ob ein gegebener Punkt innerhalb der Füllform eines Elements liegt. Normale Hit-Test-Regeln gelten; der Wert der {{cssxref("pointer-events")}}-Eigenschaft auf dem Element bestimmt, ob ein Punkt als innerhalb der Füllung betrachtet wird.
- [`SVGGeometryElement.isPointInStroke()`](/de/docs/Web/API/SVGGeometryElement/isPointInStroke)
  - : Bestimmt, ob ein gegebener Punkt innerhalb der Strichform eines Elements liegt. Normale Hit-Test-Regeln gelten; der Wert der {{cssxref("pointer-events")}}-Eigenschaft auf dem Element bestimmt, ob ein Punkt als innerhalb des Strichs betrachtet wird.
- [`SVGGeometryElement.getTotalLength()`](/de/docs/Web/API/SVGGeometryElement/getTotalLength)
  - : Gibt den vom Benutzeragenten berechneten Wert für die Gesamtlänge des Pfades in Benutzereinheiten zurück.
- [`SVGGeometryElement.getPointAtLength()`](/de/docs/Web/API/SVGGeometryElement/getPointAtLength)
  - : Gibt den Punkt an einer bestimmten Strecke entlang des Pfades zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
