---
title: Path2D
slug: Web/API/Path2D
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`Path2D`** Interface der Canvas 2D API wird verwendet, um einen Pfad zu deklarieren, der dann auf einem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt verwendet werden kann. Die [Pfadmethoden](/de/docs/Web/API/CanvasRenderingContext2D#paths) des `CanvasRenderingContext2D` Interfaces sind ebenfalls in diesem Interface vorhanden, was Ihnen den Komfort gibt, Ihren Pfad beizubehalten und bei Bedarf erneut abzuspielen.

## Konstruktoren

- [`Path2D()`](/de/docs/Web/API/Path2D/Path2D)
  - : `Path2D` Konstruktor. Erstellt ein neues `Path2D` Objekt.

## Instanzmethoden

- [`Path2D.addPath()`](/de/docs/Web/API/Path2D/addPath)
  - : Fügt den aktuellen Pfad einem weiteren Pfad hinzu.
- [`Path2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Bewirkt, dass der Stiftpunkt zum Beginn des aktuellen Unterpfades zurückzuführen. Es versucht, eine gerade Linie vom aktuellen Punkt zum Anfang zu ziehen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, macht diese Funktion nichts.
- [`Path2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Startpunkt eines neuen Unterpfades zu den (`x, y`) Koordinaten.
- [`Path2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im Unterpfad mit den (`x, y`) Koordinaten durch eine gerade Linie.
- [`Path2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt eine kubische Bézier-Kurve zum Pfad hinzu. Es erfordert drei Punkte. Die ersten beiden Punkte sind Kontrollpunkte und der dritte ist der Endpunkt. Der Startpunkt ist der letzte Punkt im aktuellen Pfad, der mithilfe von `moveTo()` geändert werden kann, bevor die Bézier-Kurve erstellt wird.
- [`Path2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt eine quadratische Bézier-Kurve zum aktuellen Pfad hinzu.
- [`Path2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt dem Pfad einen Bogen hinzu, der am (`x, y`) Punkt mit Radius `r` zentriert ist, beginnend bei `startAngle` und endend bei `endAngle`, die in der angegebenen Richtung durch `counterclockwise` (standardmäßig im Uhrzeigersinn) verlaufen.
- [`Path2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt dem Pfad einen Kreisbogen mit den angegebenen Kontrollpunkten und einem Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- [`Path2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem Pfad einen elliptischen Bogen hinzu, der am (`x, y`) Punkt mit den Radien `radiusX` und `radiusY` zentriert ist, beginnend bei `startAngle` und endend bei `endAngle`, die in der angegebenen Richtung durch `counterclockwise` (standardmäßig im Uhrzeigersinn) verlaufen.
- [`Path2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (`x, y`) mit einer Größe, die durch `width` und `height` bestimmt wird.
- [`Path2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein abgerundetes Rechteck an der Position (`x, y`) mit einer Größe, die durch `width` und `height` bestimmt wird, und die Radien des Kreisbogens für die Ecken des Rechtecks werden durch `radii` bestimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
