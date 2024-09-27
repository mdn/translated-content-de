---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: 3dff7195e4459abfcd524e86d496cad473f04044
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvasRenderingContext2D`** Schnittstelle ist ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Rendering-Kontext zum Zeichnen auf das Bitmap eines `OffscreenCanvas`-Objekts. Sie ist dem `CanvasRenderingContext2D` Objekt ähnlich, mit folgenden Unterschieden:

- Es gibt keine Unterstützung für Benutzeroberflächenfunktionen (`drawFocusIfNeeded`).
- Das `canvas` Attribut bezieht sich auf ein `OffscreenCanvas`-Objekt anstatt auf ein {{HtmlElement("canvas")}}-Element.
- Das Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements, das zum `OffscreenCanvas`-Objekt gehört, wird während des Rendering-Updates des `Window` oder `Worker`, der das `OffscreenCanvas` besitzt, aktualisiert.

## Beispiel

Das folgende Code-Snippet erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Die Methode `transferControlToOffscreen()` wird verwendet, um ein `OffscreenCanvas`-Objekt aus dem {{HtmlElement("canvas")}}-Element zu erhalten, damit es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir die `OffscreenCanvasRenderingContext2D` verwenden, um auf das Bitmap des `OffscreenCanvas`-Objekts zu zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Für ein vollständiges Beispiel siehe unser [OffscreenCanvas Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode ist neu in der `OffscreenCanvasRenderingContext2D`-Schnittstelle und existiert nicht in der `CanvasRenderingContext2D`-Schnittstelle:

- [`commit()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D/commit) {{deprecated_inline}} {{non-standard_inline}}
  - : Überträgt das gerenderte Bild auf das Platzhalter-{{HtmlElement("canvas")}}-Element des `OffscreenCanvas`-Objekts.

## Nicht unterstützte Funktionen

Die folgende Benutzeroberflächenmethode wird von der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein gegebenes Element fokussiert ist, zeichnet diese Methode einen Fokus-Ring um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden werden von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) geerbt. Sie haben dieselbe Verwendung wie in `CanvasRenderingContext2D`._

### Kontext

- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Zeichnen von Rechtecken

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im durch den Startpunkt _(x, y)_ und die Größe _(width, height)_ definierten Rechteck auf transparentes Schwarz, wodurch zuvor gezeichnete Inhalte gelöscht werden.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt ein Rechteck, das einen Startpunkt bei _(x, y)_ hat und eine Breite von _w_ und eine Höhe von _h_ auf dem Canvas hat, unter Verwendung des aktuellen Strichstils.

### Zeichnen von Text

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen gegebenen Text an der gegebenen Position (x, y).
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (umrandet) einen gegebenen Text an der gegebenen Position (x, y).
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textdarstellung. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`.

### Linienarten

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standard `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Typ der Enden am Ende von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Miterbegrenzungsverhältnis. Standard `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Musterarray zurück, das eine gerade Anzahl von nicht negativen Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Liniendash-Muster.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichlinienmuster auf einer Linie beginnen soll.

### Textstile

Die folgenden Eigenschaften steuern, wie Text dargestellt wird.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schriftarteinstellung. Standardwert `10px sans-serif`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Texteinstellung der Ausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Grundeinstellung der Ausrichtung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Zeichenabstand. Standard: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Schriftkerning. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftdehnung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Schriftvariante Caps. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering) {{experimental_inline}}
  - : Textdarstellung. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`

### Füll- und Strichstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet, und Strichstile werden für die Linien um Formen verwendet.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil, der innerhalb von Formen verwendet wird. Standard `#000` (schwarz).
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil, der für die Linien um Formen verwendet wird. Standard `#000` (schwarz).

### Farbverläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen kegelförmigen Farbverlauf um einen Punkt, der durch die Parameterkoordinaten dargestellt wird.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Farbverlauf entlang der Linie, die durch die Parameterkoordinaten dargestellt wird.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf, gegeben durch die Koordinaten der beiden Kreise, die durch die Parameter dargestellt werden.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster mit dem angegebenen Bild. Es wiederholt die Quelle in den Richtungen, die durch das Wiederholungsargument festgelegt werden. Diese Methode gibt eine [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Bestimmt den Unschärfeeffekt. Standard: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standard: vollständig transparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontale Distanz, um die der Schatten verschoben wird. Standard: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikale Distanz, um die der Schatten verschoben wird. Standard: `0`.

### Pfade

Die folgenden Methoden können verwendet werden, um Pfade von Objekten zu manipulieren.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Beginnt einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Verursacht, dass der Punkt des Stiftes zum Start des aktuellen Unterpfads zurückgeht. Es versucht, eine gerade Linie vom aktuellen Punkt zum Anfang zu ziehen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Verschiebt den Startpunkt eines neuen Unterpfads zu den (x, y) Koordinaten.
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y) Koordinaten durch eine gerade Linie.
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
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer Größe, die durch _width_ und _height_ festgelegt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y) mit einer Größe, die durch _width_ und _height_ festgelegt wird, und Radien, die durch _radii_ bestimmt sind.

### Zeichnen von Pfaden

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Umrandet die aktuellen Unterpfade mit dem aktuellen Strichstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt einen Clipping-Pfad aus den aktuellen Unterpfaden. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Clipping-Pfads. Für ein Beispiel siehe [Clipping paths](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Meldet, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Meldet, ob der angegebene Punkt innerhalb des Bereichs liegt, der durch das Umrahmen eines Pfads enthalten ist.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden, um diese zu manipulieren. Die Transformationsmatrix wird angewendet, wenn der aktuelle Standardpfad, das Malen von Texten, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekten erstellt werden. Die unten aufgeführten Methoden bleiben aus historischen und Kompatibilitätsgründen, da [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte in den meisten Teilen der API heutzutage verwendet werden und in Zukunft verwendet werden.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt eine Drehung zur Transformationsmatrix hinzu. Das Winkelargument stellt einen im Uhrzeigersinn gedrehten Winkel dar und ist in Bogenmaß angegeben.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt eine Skalierungs-Transformation zu den Canvas-Einheiten horizontal um x und vertikal um y hinzu.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Verschiebungstransformation hinzu, indem das Canvas und sein Ursprung x horizontal und y vertikal auf dem Raster bewegt werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Identitätsmatrix zurück und ruft dann die `transform()`-Methode mit denselben Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation durch die Identitätsmatrix zurück.

### Zusammensetzung

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf das Canvas zusammengesetzt werden. Standard `1.0` (undurchsichtig).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Mit `globalAlpha` angewendet, setzt dies fest, wie Formen und Bilder auf das bestehende Bitmap gezeichnet werden.

### Zeichnen von Bildern

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet eine große Flexibilität in der Verwendung.

### Pixelmanipulation

Siehe auch das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt.

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten für den Bereich des Canvas darstellt, der durch das Rechteck definiert ist, das bei _(sx, sy)_ beginnt und eine Breite von _sw_ und eine Höhe von _sh_ hat.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Malt Daten aus dem gegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf das Bitmap. Wenn ein schmutziges Rechteck angegeben wird, werden nur Pixel aus diesem Rechteck gemalt.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder nicht geglättet, wenn sie skaliert werden.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht das Einstellen der Qualität der Bildglättung.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichenstilzuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen dabei, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand mit einem Stapel, sodass Sie jede Änderung, die Sie daran machen, mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand auf das letzte Element im 'Zustandsstapel' wieder her, das durch `save()` gespeichert wurde.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
  - : Ein schreibgeschützter Verweis auf ein `OffscreenCanvas`-Objekt.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt zurück, das die aktuellen Kontextattribute enthält. Kontextattribute können mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichenstilzustand auf die Standardwerte zurück.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf das Canvas an; z.B., um seine Helligkeit oder Weichzeichner zu ändern.

## Nicht unterstützte Eigenschaften und Methoden

Die folgende Methode wird in der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein gegebenes Element fokussiert ist, zeichnet diese Methode einen Fokus-Ring um den aktuellen Pfad.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
