---
title: Path2D
slug: Web/API/Path2D
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`Path2D`**-Interface der Canvas 2D API wird verwendet, um einen Pfad zu deklarieren, der dann auf einem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt verwendet werden kann. Die [Methoden für Pfade](/de/docs/Web/API/CanvasRenderingContext2D#paths) des `CanvasRenderingContext2D`-Interface sind auch auf diesem Interface vorhanden, was Ihnen die Möglichkeit bietet, Ihren Pfad jederzeit zu speichern und wiederzugeben.

## Konstruktoren

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : `Path2D`-Konstruktor. Erstellt ein neues `Path2D`-Objekt.

## Instanzmethoden

- [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt einen Pfad zum aktuellen Pfad hinzu.
- [`Path2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Bewegt den Stift wieder zum Anfang des aktuellen Teilpfades. Es wird versucht, eine gerade Linie vom aktuellen Punkt zum Anfang zu zeichnen. Wenn die Form bereits geschlossen wurde oder nur einen Punkt hat, macht diese Funktion nichts.
- [`Path2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Verschiebt den Startpunkt eines neuen Teilpfades zu den (`x, y`) Koordinaten.
- [`Path2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im Teilpfad mit den (`x, y`) Koordinaten mit einer geraden Linie.
- [`Path2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt dem Pfad eine kubische Bézier-Kurve hinzu. Es erfordert drei Punkte. Die ersten beiden Punkte sind Kontrollpunkte und der dritte ist der Endpunkt. Der Startpunkt ist der letzte Punkt im aktuellen Pfad, der durch `moveTo()` vor dem Erstellen der Bézier-Kurve geändert werden kann.
- [`Path2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt dem aktuellen Pfad eine quadratische Bézier-Kurve hinzu.
- [`Path2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt dem Pfad einen Bogen hinzu, der am Punkt (`x, y`) mit dem Radius `r`, beginnend bei `startAngle` und endend bei `endAngle`, im angegebenen `counterclockwise`-Uhrzeigersinn verläuft (standardmäßig im Uhrzeigersinn).
- [`Path2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt dem Pfad einen kreisförmigen Bogen mit den gegebenen Kontrollpunkten und dem Radius hinzu, verbunden mit dem vorherigen Punkt durch eine gerade Linie.
- [`Path2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem Pfad einen elliptischen Bogen hinzu, der am Punkt (`x, y`) mit den Radien `radiusX` und `radiusY`, beginnend bei `startAngle` und endend bei `endAngle`, im angegebenen `counterclockwise`-Uhrzeigersinn verläuft (standardmäßig im Uhrzeigersinn).
- [`Path2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (`x, y`) mit einer Größe, die durch `width` und `height` bestimmt wird.
- [`Path2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein abgerundetes Rechteck an der Position (`x, y`) mit einer Größe, die durch `width` und `height` bestimmt wird, und die Radien des kreisförmigen Bogens für die Ecken des Rechtecks werden durch `radii` bestimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
