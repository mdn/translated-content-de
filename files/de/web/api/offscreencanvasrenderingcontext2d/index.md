---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`OffscreenCanvasRenderingContext2D`**-Interface ist ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Rendering-Kontext zum Zeichnen auf die Bitmap eines `OffscreenCanvas`-Objekts.
Es ist ähnlich dem `CanvasRenderingContext2D`-Objekt, mit folgenden Unterschieden:

- es gibt keine Unterstützung für Benutzeroberflächenfunktionen (`drawFocusIfNeeded`)
- das `canvas`-Attribut verweist auf ein `OffscreenCanvas`-Objekt statt auf ein {{HtmlElement("canvas")}}-Element
- die Bitmap für das Platzhalter-{{HtmlElement("canvas")}}-Element, das dem `OffscreenCanvas`-Objekt gehört, wird während des Rendering-Updates des `Window` oder `Worker`, das das `OffscreenCanvas` besitzt, aktualisiert

## Beispiel

Der folgende Code-Schnipsel erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt mit Hilfe des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors.
Die Methode `transferControlToOffscreen()` wird verwendet, um ein `OffscreenCanvas`-Objekt aus dem {{HtmlElement("canvas")}}-Element zu erhalten, damit es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir den `OffscreenCanvasRenderingContext2D` verwenden, um auf die Bitmap des `OffscreenCanvas`-Objekts zu zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Für ein vollständiges Beispiel, siehe unser [OffscreenCanvas Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode ist neu im `OffscreenCanvasRenderingContext2D`-Interface und existiert nicht im `CanvasRenderingContext2D`-Interface:

- [`commit()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D/commit) {{deprecated_inline}} {{non-standard_inline}}
  - : Schiebt das gerenderte Bild auf das Platzhalter-{{HtmlElement("canvas")}}-Element des `OffscreenCanvas`-Objekts.

## Nicht unterstützte Funktionen

Die folgende Methode der Benutzeroberfläche wird von der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden sind von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) geerbt. Sie haben die gleiche Verwendung wie in `CanvasRenderingContext2D`._

### Kontext

- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) {{experimental_inline}}
  - : Gibt ein Objekt zurück, das die tatsächlichen Kontext-Attribute enthält. Kontext-Attribute können mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) angefordert werden.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Zeichnen von Rechtecken

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im Rechteck, das durch Startpunkt _(x, y)_ und Größe _(width, height)_ definiert wird, auf transparentes Schwarz und löscht zuvor gezeichneten Inhalt.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt ein Rechteck mit einem Startpunkt bei _(x, y)_ und einer Breite _w_ und Höhe _h_ auf die Leinwand, unter Verwendung des aktuellen Linienstils.

### Zeichnen von Text

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen bestimmten Text an der vorgegebenen Position (x, y).
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (zieht) einen bestimmten Text an der vorgegebenen Position (x, y).
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textdarstellung. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standard `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Art der Enden an den Enden von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Miter-Limit-Verhältnis. Standard `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Linienmuster-Array zurück, das eine gerade Anzahl von nicht-negativen Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Linienmuster.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnt.

### Textstile

Die folgenden Eigenschaften steuern, wie Text angeordnet wird.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schriftart-Einstellung. Standardwert `10px sans-serif`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Texteinstellungs-Ausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Baseline-Ausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtungseinstellung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Schriftabstand. Standard: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Schrift-Kerning. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schrift-Dehnung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Schriftvarianten-Kaps. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering) {{experimental_inline}}
  - : Textdarstellung. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`
- [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) {{experimental_inline}}
  - : Ruft die Sprache des Zeichenkontexts der Leinwand ab oder legt sie fest.

### Füll- und Linienstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet, und Linienstile werden für die Linien um Formen herum verwendet.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil für die Verwendung innerhalb von Formen. Standardmäßig `black`.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil für die Verwendung für die Linien um Formen. Standardmäßig `black`.

### Verläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen kegelförmigen Verlauf um einen Punkt, der durch die angegebenen Koordinaten repräsentiert wird.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Verlauf entlang der Linie, die durch die angegebenen Koordinaten repräsentiert wird.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf, der durch die Koordinaten der zwei Kreise bestimmt wird, die durch die Parameter repräsentiert werden.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster mit dem angegebenen Bild. Es wiederholt die Quelle in den Richtungen, die durch das Wiederholungsargument angegeben werden. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt den Unschärfeeffekt an. Standard: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standard: volltransparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontale Distanz, um die der Schatten versetzt wird. Standard: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikale Distanz, um die der Schatten versetzt wird. Standard: `0`.

### Pfade

Die folgenden Methoden können verwendet werden, um die Pfade von Objekten zu manipulieren.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Veranlasst die Bewegung des Stiftes zurück zum Start des aktuellen Unterpfades. Es versucht, eine gerade Linie vom aktuellen Punkt zum Start zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, macht diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Startpunkt eines neuen Unterpfades zu den (x, y)-Koordinaten.
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y)-Koordinaten mit einer geraden Linie.
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt dem aktuellen Pfad eine kubische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt dem aktuellen Pfad eine quadratische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt dem aktuellen Pfad einen Kreisbogen hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt dem aktuellen Pfad einen Bogen mit den angegebenen Kontrollpunkten und Radius hinzu, verbunden mit dem vorherigen Punkt durch eine gerade Linie.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an Position (x, y) mit einer Größe, die durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an Position (x, y) mit einer Größe, die durch _width_ und _height_ bestimmt wird, und Radien, die durch _radii_ bestimmt werden.

### Zeichnen von Pfaden

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zieht die aktuellen Unterpfade mit dem aktuellen Strichstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt einen Ausschnittpfad aus den aktuellen Unterpfaden. Alles, was nach dem Aufrufen von `clip()` gezeichnet wird, erscheint nur innerhalb des Ausschnittpfades. Für ein Beispiel siehe [Ausschnittpfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Meldet, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Meldet, ob der angegebene Punkt sich im Bereich befindet, der durch das Zeichnen eines Pfades enthalten ist oder nicht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden zu deren Manipulation. Die Transformationsmatrix wird beim Erstellen des aktuellen Standardpfades, beim Malen von Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekten angewendet. Die unten aufgeführten Methoden bleiben aus historischen und Kompatibilitätsgründen erhalten, da [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte in den meisten Teilen der API heutzutage und in Zukunft verwendet werden.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Drehung hinzu. Das Winkelargument stellt einen im Uhrzeigersinn-gedrehten Winkel dar und wird in Bogenmaß angegeben.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt den Einheiten des Canvas eine Skalentransformation hinzu, die x horizontal und y vertikal beträgt.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Verschiebungstransformation hinzu, indem das Canvas und der Ursprung x horizontal und y vertikal auf dem Raster verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrix, die durch ihre Argumente beschrieben wird.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformationsmatrix auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit den gleichen Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

### Kompositing

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf das Canvas zusammengesetzt werden. Standard `1.0` (opaque).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Mit `globalAlpha` angewendet, legt dies fest, wie Formen und Bilder auf den vorhandenen Bitmap gezeichnet werden.

### Zeichnen von Bildern

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar, die eine große Flexibilität in ihrer Nutzung bieten.

### Pixelmanipulation

Siehe auch das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt.

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Dimensionen. Alle Pixel im neuen Objekt sind transparentes Schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixel-Daten für den Bereich des Canvas repräsentiert, der durch das Rechteck bezeichnet wird, das bei _(sx, sy)_ beginnt und eine Breite _sw_ und eine Höhe _sh_ hat.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Malt Daten aus dem gegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf die Bitmap. Wenn ein schmutziges Rechteck angegeben ist, werden nur die Pixel aus diesem Rechteck gemalt.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder nicht geglättet, wenn sie skaliert werden.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht die Einstellung der Qualität der Bildglättung.

### Der Zustand des Canvas

Der Rendering-Kontext `CanvasRenderingContext2D` enthält eine Vielzahl von Zeichenstilzuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand mit einem Stapel, damit Sie jede Änderung, die Sie daran vornehmen, mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand auf das letzte Element im 'Zustandsspeicher' wieder her, der von `save()` gespeichert wurde.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
  - : Eine schreibgeschützte Referenz zu einem `OffscreenCanvas`-Objekt.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) {{experimental_inline}}
  - : Gibt ein Objekt zurück, das die tatsächlichen Kontext-Attribute enthält. Kontext-Attribute können mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichenstilzustand auf die Standardwerte zurück.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf das Canvas an; z.B. um seine Helligkeit oder Unschärfe zu ändern.

## Nicht unterstützte Eigenschaften und Methoden

Die folgende Methode wird im `OffscreenCanvasRenderingContext2D`-Interface **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
