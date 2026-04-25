---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: c9773fc1268b974b6c009208b259c53954c839ef
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvasRenderingContext2D`**-Schnittstelle ist ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Rendering-Kontext zum Zeichnen auf das Bitmap eines `OffscreenCanvas`-Objekts. Sie ähnelt dem `CanvasRenderingContext2D`-Objekt mit den folgenden Unterschieden:

- Es gibt keine Unterstützung für Benutzeroberflächen-Funktionen (`drawFocusIfNeeded`)
- Attribut `canvas` bezieht sich auf ein `OffscreenCanvas`-Objekt anstelle eines {{HtmlElement("canvas")}}-Elements
- Das Bitmap für das Platzhalter-{{HtmlElement("canvas")}}-Element, das zum `OffscreenCanvas`-Objekt gehört, wird während des Rendering-Updates des `Window` oder `Worker`, der das `OffscreenCanvas` besitzt, aktualisiert

## Beispiel

Der folgende Codeausschnitt erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt mit dem [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktor. Die Methode `transferControlToOffscreen()` wird verwendet, um ein `OffscreenCanvas`-Objekt aus dem {{HtmlElement("canvas")}}-Element zu erhalten, damit es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir `OffscreenCanvasRenderingContext2D` verwenden, um auf das Bitmap des `OffscreenCanvas`-Objekts zu zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Für ein vollständiges Beispiel sehen Sie unser [OffscreenCanvas Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode ist neu für die `OffscreenCanvasRenderingContext2D`-Schnittstelle und existiert nicht in der `CanvasRenderingContext2D`-Schnittstelle:

- [`commit()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D/commit) {{deprecated_inline}} {{non-standard_inline}}
  - : Überträgt das gerenderte Bild auf das Platzhalter-{{HtmlElement("canvas")}}-Element des Kontext-`OffscreenCanvas`-Objekts.

## Nicht unterstützte Funktionen

Die folgende Benutzeroberflächenmethode wird von der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden werden von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) geerbt. Sie haben die gleiche Verwendung wie in `CanvasRenderingContext2D`_

### Kontext

- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) {{experimental_inline}}
  - : Gibt ein Objekt zurück, das die aktuellen Kontextattribute enthält. Kontextattribute können mit [`OffscreenCanvas.getContext()`](/de/docs/Web/API/OffscreenCanvas/getContext) angefordert werden.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Rechtecke zeichnen

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im Rechteck, das durch den Startpunkt _(x, y)_ und die Größe _(width, height)_ definiert ist, auf transparentes Schwarz und löscht alle zuvor gezeichneten Inhalte.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt ein Rechteck, das an der Position _(x, y)_ beginnt und eine Breite von _w_ sowie eine Höhe von _h_ hat, auf die Leinwand, wobei der aktuelle Strichstil verwendet wird.

### Text zeichnen

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen gegebenen Text an der gegebenen (x, y) Position.
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (streicht) einen gegebenen Text an der gegebenen (x, y) Position.
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Tekstrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`,

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standard `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Art der Endungen an den Enden der Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen zwei Linien zusammentreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Gehrungsbeschränkung Verhältnis. Standard `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Muster-Array zurück, das eine gerade Anzahl von nicht-negativen Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Liniendash-Muster.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Dash-Array auf einer Linie beginnen soll.

### Textstile

Die folgenden Eigenschaften steuern, wie Text angeordnet wird.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schriftart-Einstellung. Standardwert `10px sans-serif`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Texteinstellungen für die Ausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Grundeinstellungs-Ausrichtung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Direktionalität. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Buchstabenabstand. Standard: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Schriftart-Kerning. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftart-Dehnung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Schriftart-Variantenkappen. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering) {{experimental_inline}}
  - : Tekstrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`
- [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)
  - : Ruft die Sprache des Zeichenkontexts der Leinwand ab oder legt sie fest.

### Füll- und Strichstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet, und Strichstile werden für die Linien um Formen herum verwendet.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil zum Verwenden innerhalb von Formen. Standard ist `black`.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil zum Verwenden für die Linien um Formen. Standard ist `black`.

### Verläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Verlauf um einen Punkt, der durch die durch die Parameter dargestellten Koordinaten gegeben ist.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Verlauf entlang der Linie, die durch die durch die Parameter dargestellten Koordinaten gegeben ist.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf, gegeben durch die Koordinaten der beiden Kreise, die durch die Parameter dargestellt werden.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster mit dem angegebenen Bild. Es wiederholt die Quelle in den durch das Wiederholungsargument angegebenen Richtungen. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt den Unschärfeeffekt an. Standard: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standard: vollständig transparenter Schwarzton.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontale Distanz, die der Schatten versetzt wird. Standard: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikale Distanz, die der Schatten versetzt wird. Standard: `0`.

### Pfade

Die folgenden Methoden können verwendet werden, um Pfade von Objekten zu manipulieren.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Startet einen neuen Pfad, indem die Liste der Teilpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Verursacht, dass der Punkt des Stiftes zum Anfang des aktuellen Teilpfads zurückkehrt. Es versucht, eine gerade Linie vom aktuellen Punkt zum Anfang zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Startpunkt eines neuen Teilpfads zu den Koordinaten (x, y).
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Teilpfad mit den angegebenen (x, y) Koordinaten mit einer geraden Linie.
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt eine kubische Bézier-Kurve zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt eine quadratische Bézier-Kurve zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt einen kreisförmigen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt einen Bogen zum aktuellen Pfad mit den gegebenen Steuerpunkten und dem Radius hinzu, der mit einer geraden Linie mit dem vorherigen Punkt verbunden ist.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt einen elliptischen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer Größe, die durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y) mit einer Größe, die durch _width_ und _height_ bestimmt wird und Radien, die durch _radii_ bestimmt werden.

### Pfade zeichnen

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Teilpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Streicht die aktuellen Teilpfade mit dem aktuellen Strichstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt einen Ausschnittpfad aus den aktuellen Teilpfaden. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Ausschnittpfads. Für ein Beispiel siehe [Ausschnittpfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Meldet, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Meldet, ob der angegebene Punkt innerhalb des von einem Pfad umschlossenen Bereichs liegt oder nicht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden, um sie zu manipulieren. Die Transformationsmatrix wird beim Erstellen des aktuellen Standardpfads, beim Malen von Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekten angewendet. Die unten aufgeführten Methoden bleiben aus historischen und Kompatibilitätsgründen erhalten, da [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte heutzutage in den meisten Teilen der API verwendet werden und in Zukunft verwendet werden.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Drehung hinzu. Das Winkelargument stellt einen im Uhrzeigersinn verlaufenden Drehwinkel dar und wird in Bogenmaß ausgedrückt.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt der Transformationsmatrix eine Skalierung hinzu, indem die Leinwand-Einheiten horizontal um x und vertikal um y skaliert werden.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Translation der Transformationsmatrix hinzu, indem die Leinwand und deren Ursprung horizontal um x und vertikal um y auf dem Raster verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrix, die durch ihre Argumente beschrieben wird.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformationsmatrix auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit den gleichen Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformationsmatrix auf die Einheitsmatrix zurück.

### Komposition

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand zusammengesetzt werden. Standard `1.0` (undurchsichtig).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Mit angewendetem `globalAlpha` stellt dies ein, wie Formen und Bilder auf das bestehende Bitmap gezeichnet werden.

### Bilder zeichnen

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet eine große Flexibilität in ihrer Nutzung.

### Pixelmanipulation

Siehe auch das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt.

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparentes Schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten für den Bereich der Leinwand darstellt, der durch das Rechteck markiert wird, das an _(sx, sy)_ beginnt und eine Breite von _sw_ und eine Höhe von _sh_ hat.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Malt Daten aus dem gegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf das Bitmap. Wenn ein schmutziges Rechteck bereitgestellt wird, werden nur die Pixel aus diesem Rechteck gemalt.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn er deaktiviert ist, werden Bilder nicht geglättet, wenn sie skaliert werden.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht Ihnen, die Qualität der Bildglättung festzulegen.

### Der Zustand der Leinwand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichenstil-Zuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand mit einem Stapel, sodass Sie jede Änderung daran mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand auf das letzte Element im 'Zustandsstapel' zurück, das mit `save()` gespeichert wurde.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
  - : Ein schreibgeschützter Verweis auf ein `OffscreenCanvas`-Objekt.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes) {{experimental_inline}}
  - : Gibt ein Objekt zurück, das die aktuellen Kontextattribute enthält. Kontextattribute können mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichenstilzustand auf die Standardwerte zurück.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf die Leinwand an; z.B. um deren Helligkeit oder Unschärfe zu ändern.

## Nicht unterstützte Eigenschaften und Methoden

Die folgende Methode wird in der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
