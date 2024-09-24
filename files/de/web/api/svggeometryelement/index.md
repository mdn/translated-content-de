---
title: SVGGeometryElement
slug: Web/API/SVGGeometryElement
l10n:
  sourceCommit: 226ac33eb70ed5411dd2d68bd602c80cafd780b6
---

{{APIRef("SVG")}}

Die `SVGGeometryElement`-Schnittstelle repräsentiert SVG-Elemente, deren Darstellung durch Geometrie mit einem äquivalenten Pfad definiert ist und die gefüllt und gestrichen werden können. Dies umfasst Pfade und die Grundformen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt außerdem Eigenschaften von ihrem Elternteil, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGGeometryElement.pathLength")}} {{ReadOnlyInline}}
  - : Diese Eigenschaft spiegelt das Attribut {{SVGAttr("pathLength")}} wider.

## Instanz-Methoden

_Diese Schnittstelle erbt außerdem Methoden von ihrem Elternteil, {{domxref("SVGGraphicsElement")}}._

- {{domxref("SVGGeometryElement.isPointInFill()")}}
  - : Bestimmt, ob ein gegebener Punkt innerhalb der Füllform eines Elements liegt. Normalerweise gelten die Regeln für das Treffer-Testen; der Wert der {{cssxref("pointer-events")}}-Eigenschaft des Elements bestimmt, ob ein Punkt als innerhalb der Füllung betrachtet wird.
- {{domxref("SVGGeometryElement.isPointInStroke()")}}
  - : Bestimmt, ob ein gegebener Punkt innerhalb der Strichform eines Elements liegt. Normalerweise gelten die Regeln für das Treffer-Testen; der Wert der {{cssxref("pointer-events")}}-Eigenschaft des Elements bestimmt, ob ein Punkt als innerhalb des Strichs betrachtet wird.
- {{domxref("SVGGeometryElement.getTotalLength()")}}
  - : Gibt den vom Benutzeragenten berechneten Wert für die Gesamtlänge des Pfades in Benutzereinheiten zurück.
- {{domxref("SVGGeometryElement.getPointAtLength()")}}
  - : Gibt den Punkt an einer bestimmten Distanz entlang des Pfades zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
