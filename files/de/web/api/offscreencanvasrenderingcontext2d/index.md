---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: 3dff7195e4459abfcd524e86d496cad473f04044
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`OffscreenCanvasRenderingContext2D`**-Schnittstelle ist ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Rendering-Kontext zum Zeichnen auf das Bitmap eines `OffscreenCanvas`-Objekts. Sie ist ähnlich dem `CanvasRenderingContext2D`-Objekt, mit folgenden Unterschieden:

- Es gibt keine Unterstützung für Benutzeroberflächenfunktionen (`drawFocusIfNeeded`)
- Das `canvas` Attribut bezieht sich auf ein `OffscreenCanvas` Objekt anstelle eines {{HtmlElement("canvas")}} Elements
- Das Bitmap für das Platzhalter-{{HtmlElement("canvas")}}-Element, das zum `OffscreenCanvas`-Objekt gehört, wird während des Renderings-Updates des `Window` oder `Worker`, das das `OffscreenCanvas` besitzt, aktualisiert

## Beispiel

Der folgende Code-Schnipsel erstellt ein [`Worker`](/de/docs/Web/API/Worker)-Objekt unter Verwendung des [`Worker()`](/de/docs/Web/API/Worker/Worker)-Konstruktors. Die Methode `transferControlToOffscreen()` wird benutzt, um ein `OffscreenCanvas`-Objekt vom {{HtmlElement("canvas")}} Element zu erhalten, sodass es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir den `OffscreenCanvasRenderingContext2D` verwenden, um auf das Bitmap des `OffscreenCanvas`-Objekts zu zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Für ein vollständiges Beispiel sehen Sie sich unser [OffscreenCanvas Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) an ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode ist neu in der `OffscreenCanvasRenderingContext2D`-Schnittstelle und existiert nicht in der `CanvasRenderingContext2D`-Schnittstelle:

- [`commit()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D/commit) {{deprecated_inline}} {{non-standard_inline}}
  - : Überträgt das gerenderte Bild auf das Platzhalter-{{HtmlElement("canvas")}}-Element des `OffscreenCanvas`-Objekts.

## Nicht unterstützte Funktionen

Die folgende Benutzeroberflächenmethode wird von der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden sind von [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) geerbt. Sie haben die gleiche Verwendung wie in `CanvasRenderingContext2D`_

### Kontext

- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Zeichnen von Rechtecken

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im durch Startpunkt _(x, y)_ und Größe _(Breite, Höhe)_ definierten Rechteck auf transparentes Schwarz und löscht jeglichen zuvor gezeichneten Inhalt.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _Breite_ und _Höhe_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt ein Rechteck, das einen Startpunkt bei _(x, y)_ hat und eine _Breite_ und eine _Höhe_ besitzt, auf die Leinwand, unter Verwendung des aktuellen Umrissstils.

### Zeichnen von Text

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen gegebenen Text an der angegebenen (x, y) Position.
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (umrahmt) einen gegebenen Text an der angegebenen (x, y) Position.
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textdarstellung. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Dicke der Linien. Standard `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Art der Endungen am Ende von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Winkelbegrenzungsverhältnis. Standard `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster-Array zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Strichmuster.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Bestimmt, wo ein Strichmuster bei einer Linie startet.

### Textstile

Die folgenden Eigenschaften steuern, wie Text angeordnet wird.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schriftartseinstellung. Standardwert `10px sans-serif`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Texteinstellung zur Ausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Baseline-Ausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Direktionalität. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Zeichenabstand. Standard: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Schrifteinrückung. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftstreckung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Schriftvarianten-Kapselung. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering) {{experimental_inline}}
  - : Textdarstellung. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`

### Füll- und Umrissstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet, während Umrissstile für Linien um Formen herum verwendet werden.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil, der innerhalb von Formen verwendet wird. Standard `#000` (schwarz).
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil, der für die Linien um Formen herum verwendet wird. Standard `#000` (schwarz).

### Verläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen kegelförmigen Verlauf um einen durch die Parameter beschriebenen Punkt.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Verlauf entlang der durch die Parameter beschriebenen Linie.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf, der durch die Koordinaten der zwei Kreise, die durch die Parameter definiert sind, gegeben wird.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster unter Verwendung des angegebenen Bildes. Es wiederholt die Quelle in den durch das Wiederholungsargument angegebenen Richtungen. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Bestimmt den Weichzeichnungseffekt. Standard: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standard: vollständig transparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontale Distanz, um die der Schatten verschoben wird. Standard: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikale Distanz, um die der Schatten verschoben wird. Standard: `0`.

### Pfade

Die folgenden Methoden können zum Bearbeiten von Objektpfaden verwendet werden.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Bringt die Stiftspitze zurück zum Anfang des aktuellen Unterpfades. Es versucht, eine gerade Linie vom aktuellen Punkt zum Start zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt besitzt, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Startpunkt eines neuen Unterpfades zu den (x, y)-Koordinaten.
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y)-Koordinaten mit einer geraden Linie.
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt eine kubische Bézierkurve zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt eine quadratische Bézierkurve zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt einen kreisförmigen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt einen Bogen zum aktuellen Pfad mit den angegebenen Kontrollpunkten und Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt einen elliptischen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer Größe, die durch _Breite_ und _Höhe_ bestimmt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y) mit einer Größe, die durch _Breite_ und _Höhe_ und Radien, die durch _radii_ bestimmt werden, gemessen wird.

### Zeichnen von Pfaden

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die aktuellen Unterpfade mit dem aktuellen Umrissstil.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt einen Schnittpfad aus den aktuellen Unterpfaden. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Schnittpfades. Ein Beispiel finden Sie unter [Schnittpfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Meldet, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Meldet, ob der angegebene Punkt innerhalb des durch einen Pfad umrahmten Bereichs liegt oder nicht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden, um sie zu manipulieren. Die Transformationsmatrix wird angewendet, wenn der aktuelle Standardpfad, Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekte erstellt werden. Die unten aufgeführten Methoden bleiben aus historischen Gründen und zur Kompatibilität erhalten, da heutzutage in den meisten Teilen der API [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte verwendet werden und diese in Zukunft stattdessen verwendet werden.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuell auf den Kontext angewandte Transformationsmatrix ab.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Rotation hinzu. Das Winkelargument stellt einen im Uhrzeigersinn gerichteten Rotationswinkel dar und wird in Radiant ausgedrückt.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt der Transformation eine Skalierung der Canvas-Einheiten horizontal um x und vertikal um y hinzu.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt der Transformation eine Verschiebung hinzu, indem die Leinwand und ihr Ursprung horizontal um x und vertikal um y auf dem Raster verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch die Argumente beschriebenen Matrix.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit den gleichen Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

### Zusammensetzung

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf das Canvas komponiert werden. Standard `1.0` (deckend).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Mit angewendetem `globalAlpha` legt dies fest, wie Formen und Bilder auf das vorhandene Bitmap gezeichnet werden.

### Zeichnen von Bildern

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet eine große Flexibilität in der Anwendung.

### Pixelmanipulation

Siehe auch das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt.

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Dimensionen. Alle Pixel im neuen Objekt sind transparentes Schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten für den Bereich des Canvas darstellt, der durch das Rechteck definiert ist, das bei _(sx, sy)_ beginnt und eine _sw_-Breite und _sh_-Höhe besitzt.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Malt Daten vom gegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf das Bitmap. Wenn ein schmutziges Rechteck angegeben wird, werden nur die Pixel von diesem Rechteck gemalt.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder nicht geglättet, wenn sie skaliert werden.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung einzustellen.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichnungsstil-Zuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichnungsstil-Zustand unter Verwendung eines Stapels, sodass Sie jede Änderung, die Sie daran vornehmen, mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichnungsstil-Zustand auf das letzte Element auf dem mit `save()` gespeicherten "Zustandsstapel" zurück.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
  - : Eine schreibgeschützte Referenz auf ein `OffscreenCanvas`-Objekt.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt zurück, das die tatsächlichen Kontextattribute enthält. Kontextattribute können mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den aktuellen Zeichnungsstil-Zustand auf die Standardwerte zurück.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf das Canvas an, z.B. um dessen Helligkeit oder Unschärfe zu ändern.

## Nicht unterstützte Eigenschaften und Methoden

Die folgende Methode wird in der `OffscreenCanvasRenderingContext2D`-Schnittstelle **nicht unterstützt**:

- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein gegebenes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
