---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die Schnittstelle **`OffscreenCanvasRenderingContext2D`** ist ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Rendering-Kontext zum Zeichnen auf der Bitmap eines `OffscreenCanvas`-Objekts.
Sie ähnelt dem `CanvasRenderingContext2D`-Objekt, weist jedoch folgende Unterschiede auf:

- Funktionen für die Benutzeroberfläche (`drawFocusIfNeeded`) werden nicht unterstützt.
- Ihr `canvas`-Attribut verweist auf ein `OffscreenCanvas`-Objekt statt auf ein {{HtmlElement("canvas")}}-Element.
- Die Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements, das zum `OffscreenCanvas`-Objekt gehört, wird bei der Rendering-Aktualisierung des `Window` oder `Worker` aktualisiert, dem das `OffscreenCanvas` gehört.

## Beispiel

Der folgende Codeausschnitt erstellt mit dem Konstruktor [`Worker()`](/de/docs/Web/API/Worker/Worker) ein [`Worker`](/de/docs/Web/API/Worker)-Objekt.
Mit der Methode `transferControlToOffscreen()` wird aus dem {{HtmlElement("canvas")}}-Element ein `OffscreenCanvas`-Objekt abgerufen, damit es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir mit `OffscreenCanvasRenderingContext2D` auf die Bitmap des `OffscreenCanvas`-Objekts zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Ein vollständiges Beispiel finden Sie in unserem [OffscreenCanvas-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas-Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode gehört zur Schnittstelle `OffscreenCanvasRenderingContext2D` und ist in der Schnittstelle `CanvasRenderingContext2D` nicht vorhanden:

- [`commit()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D/commit) {{deprecated_inline}} {{non-standard_inline}}
  - : Überträgt das gerenderte Bild an das Platzhalter-{{HtmlElement("canvas")}}-Element des `OffscreenCanvas`-Objekts des Kontexts.

## Nicht unterstützte Funktionen

Die folgende Methode für die Benutzeroberfläche wird von der Schnittstelle `OffscreenCanvasRenderingContext2D` **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden werden von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) geerbt. Sie werden genauso verwendet wie in `CanvasRenderingContext2D`._

### Kontext

- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) {{experimental_inline}}
  - : Gibt ein Objekt mit den tatsächlichen Kontextattributen zurück. Kontextattribute können mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) angefordert werden.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Rechtecke zeichnen

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im Rechteck, das durch den Startpunkt _(x, y)_ und die Größe _(width, height)_ definiert ist, auf transparentes Schwarz und löscht damit zuvor gezeichnete Inhalte.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein ausgefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet mit dem aktuellen Konturstil ein Rechteck auf den Canvas, dessen Startpunkt bei _(x, y)_ liegt und das eine Breite von _w_ und eine Höhe von _h_ hat.

### Text zeichnen

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Informationen zu Texteigenschaften finden Sie auch beim Objekt [`TextMetrics`](/de/docs/Web/API/TextMetrics).

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen bestimmten Text an der angegebenen Position (x, y).
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet die Kontur eines bestimmten Texts an der angegebenen Position (x, y).
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Text-Rendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`,

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standardwert: `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Art der Linienenden. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt die Art der Ecken fest, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Verhältnis für die Gehrungsgrenze. Standardwert: `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster-Array zurück, das eine gerade Anzahl nicht negativer Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Strichmuster fest.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnt.

### Textstile

Die folgenden Eigenschaften steuern das Layout von Text.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schrifteinstellung. Standardwert: `10px sans-serif`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Einstellung für die Textausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Einstellung für die Ausrichtung an der Grundlinie. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Schreibrichtung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Buchstabenabstand. Standardwert: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Kerning der Schrift. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftbreite. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Variante der Großbuchstaben einer Schrift. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering) {{experimental_inline}}
  - : Text-Rendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`
- [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)
  - : Ruft die Sprache des Canvas-Zeichenkontexts ab oder legt sie fest.

### Füll- und Konturstile

Der Füllstil wird für Farben und Stile innerhalb von Formen verwendet, der Konturstil für die Linien um Formen.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil für das Innere von Formen. Standardwert: `black`.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil für die Linien um Formen. Standardwert: `black`.

### Farbverläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Farbverlauf um einen Punkt, dessen Koordinaten durch die Parameter angegeben werden.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Farbverlauf entlang der Linie, deren Koordinaten durch die Parameter angegeben werden.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf anhand der Koordinaten der beiden Kreise, die durch die Parameter angegeben werden.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster aus dem angegebenen Bild. Die Quelle wird in den Richtungen wiederholt, die durch das Wiederholungsargument angegeben werden. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Legt den Weichzeichnungseffekt fest. Standardwert: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standardwert: vollständig transparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontaler Versatz des Schattens. Standardwert: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikaler Versatz des Schattens. Standardwert: `0`.

### Pfade

Mit den folgenden Methoden lassen sich die Pfade von Objekten bearbeiten.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Beginnt einen neuen Pfad, indem die Liste der Teilpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Bewegt den Zeichenstift zurück zum Anfang des aktuellen Teilpfads. Dabei wird versucht, vom aktuellen Punkt eine gerade Linie zum Anfang zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, bewirkt diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Verschiebt den Startpunkt eines neuen Teilpfads zu den Koordinaten (x, y).
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt des aktuellen Teilpfads durch eine gerade Linie mit den angegebenen Koordinaten (x, y).
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt dem aktuellen Pfad eine kubische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt dem aktuellen Pfad eine quadratische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt dem aktuellen Pfad einen Kreisbogen hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt dem aktuellen Pfad einen Bogen mit den angegebenen Kontrollpunkten und dem angegebenen Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden wird.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y), dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y). Seine Größe wird durch _width_ und _height_ und die Eckenradien durch _radii_ bestimmt.

### Pfade zeichnen

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Teilpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Konturen der aktuellen Teilpfade mit dem aktuellen Konturstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt aus den aktuellen Teilpfaden einen Beschneidungspfad. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Beschneidungspfads. Ein Beispiel finden Sie unter [Beschneidungspfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Gibt an, ob der angegebene Punkt im aktuellen Pfad liegt.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Gibt an, ob der angegebene Punkt innerhalb des Bereichs liegt, der durch das Zeichnen der Kontur eines Pfads entsteht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden, um diese zu bearbeiten. Die Transformationsmatrix wird beim Erstellen des aktuellen Standardpfads sowie beim Zeichnen von Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekten angewendet. Die unten aufgeführten Methoden bleiben aus historischen Gründen und aus Kompatibilitätsgründen erhalten, da heute in den meisten Teilen der API stattdessen [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte verwendet werden und dies auch künftig der Fall sein wird.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Drehung hinzu. Das Winkelargument gibt einen Drehwinkel im Uhrzeigersinn im Bogenmaß an.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt den Canvas-Einheiten eine Skalierung um x in horizontaler und um y in vertikaler Richtung hinzu.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Verschiebung hinzu, indem der Canvas und sein Ursprung im Koordinatensystem horizontal um x und vertikal um y verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrix, die durch die Argumente beschrieben wird.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die Methode `transform()` mit denselben Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

### Compositing

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie mit dem Canvas zusammengesetzt werden. Standardwert: `1.0` (deckend).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Legt unter Berücksichtigung von `globalAlpha` fest, wie Formen und Bilder auf die vorhandene Bitmap gezeichnet werden.

### Bilder zeichnen

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Varianten verfügbar und lässt sich dadurch sehr flexibel einsetzen.

### Pixelbearbeitung

Siehe auch das Objekt [`ImageData`](/de/docs/Web/API/ImageData).

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten des Canvas-Bereichs enthält, der durch ein Rechteck mit dem Startpunkt _(sx, sy)_, der Breite _sw_ und der Höhe _sh_ definiert ist.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Zeichnet Daten aus dem angegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf die Bitmap. Wenn ein Änderungsrechteck angegeben ist, werden nur die Pixel aus diesem Rechteck gezeichnet.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; ist er deaktiviert, werden Bilder beim Skalieren nicht geglättet.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält verschiedene Zustände für Zeichenstile (Attribute für Linienstile, Füllstile, Schattenstile und Textstile). Die folgenden Methoden helfen Ihnen bei der Arbeit mit diesem Zustand:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand auf einem Stapel, sodass Sie Änderungen daran mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand des letzten Elements auf dem mit `save()` gespeicherten Zustandsstapel wieder her.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas) {{ReadOnlyInline}}
  - : Eine Referenz auf ein `OffscreenCanvas`-Objekt.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) {{experimental_inline}}
  - : Gibt ein Objekt mit den tatsächlichen Kontextattributen zurück. Kontextattribute können mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichenstilzustand auf die Standardwerte zurück.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf den Canvas an, beispielsweise um seine Helligkeit oder Unschärfe zu ändern.

## Nicht unterstützte Eigenschaften und Methoden

Die folgende Methode wird von der Schnittstelle `OffscreenCanvasRenderingContext2D` **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
