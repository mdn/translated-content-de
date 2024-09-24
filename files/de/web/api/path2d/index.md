---
title: Path2D
slug: Web/API/Path2D
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`Path2D`**-Interface der Canvas 2D API wird verwendet, um einen Pfad zu deklarieren, der dann auf einem {{domxref("CanvasRenderingContext2D")}}-Objekt verwendet werden kann. Die [Pfade-Methoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) des `CanvasRenderingContext2D`-Interfaces sind ebenfalls in diesem Interface vorhanden, was Ihnen die Bequemlichkeit gibt, Ihren Pfad wann immer gewünscht zu speichern und wieder abzurufen.

## Konstruktoren

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D`-Konstruktor. Erstellt ein neues `Path2D`-Objekt.

## Instanzmethoden

- {{domxref("Path2D.addPath()")}}
  - : Fügt dem aktuellen Pfad einen neuen Pfad hinzu.
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : Bewegt den Stiftpunkt zurück zum Anfang des aktuellen Unterpfades. Es wird versucht, eine gerade Linie vom aktuellen Punkt zum Anfang zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : Bewegt den Startpunkt eines neuen Unterpfades zu den Koordinaten (`x, y`).
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : Verbindet den letzten Punkt im Unterpfad mit den Koordinaten (`x, y`) mit einer geraden Linie.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : Fügt dem Pfad eine kubische Bézier-Kurve hinzu. Es erfordert drei Punkte. Die ersten zwei Punkte sind Kontrollpunkte und der dritte ist der Endpunkt. Der Startpunkt ist der letzte Punkt im aktuellen Pfad, der vor dem Erstellen der Bézier-Kurve mit `moveTo()` geändert werden kann.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : Fügt dem aktuellen Pfad eine quadratische Bézier-Kurve hinzu.
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : Fügt dem Pfad einen Bogen hinzu, der sich an der Position (`x, y`) mit dem Radius `r` befindet und beim `startAngle` beginnt und beim `endAngle` in der angegebenen Richtung durch `counterclockwise` (standardmäßig im Uhrzeigersinn) endet.
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : Fügt dem Pfad einen kreisförmigen Bogen mit den gegebenen Kontrollpunkten und Radius hinzu, der mit dem vorherigen Punkt durch eine gerade Linie verbunden ist.
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : Fügt dem Pfad einen elliptischen Bogen hinzu, der sich an der Position (`x, y`) mit den Radien `radiusX` und `radiusY` befindet und beim `startAngle` beginnt und beim `endAngle` in der angegebenen Richtung durch `counterclockwise` (standardmäßig im Uhrzeigersinn) endet.
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : Erstellt einen Pfad für ein Rechteck an der Position (`x, y`) mit einer Größe, die durch `width` und `height` bestimmt wird.
- {{domxref("CanvasRenderingContext2D.roundRect()", "Path2D.roundRect()")}}
  - : Erstellt einen Pfad für ein abgerundetes Rechteck an der Position (`x, y`) mit einer Größe, die durch `width` und `height` bestimmt wird, und die Radien des zu verwendenden Kreisbogens für die Ecken des Rechtecks werden durch `radii` bestimmt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D")}}
