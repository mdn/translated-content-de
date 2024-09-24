---
title: OffscreenCanvasRenderingContext2D
slug: Web/API/OffscreenCanvasRenderingContext2D
l10n:
  sourceCommit: 3dff7195e4459abfcd524e86d496cad473f04044
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`OffscreenCanvasRenderingContext2D`**-Interface ist ein {{domxref("CanvasRenderingContext2D")}}-Rendering-Kontext zum Zeichnen auf das Bitmap eines `OffscreenCanvas`-Objekts. Es ähnelt dem `CanvasRenderingContext2D`-Objekt, mit folgenden Unterschieden:

- Es gibt keine Unterstützung für Benutzeroberflächenmerkmale (`drawFocusIfNeeded`)
- sein `canvas`-Attribut bezieht sich auf ein `OffscreenCanvas`-Objekt anstatt auf ein {{HtmlElement("canvas")}}-Element
- das Bitmap für das Platzhalter-{{HtmlElement("canvas")}}-Element, das dem `OffscreenCanvas`-Objekt gehört, wird während des Rendering-Updates des `Window` oder `Worker`, das das `OffscreenCanvas` besitzt, aktualisiert

## Beispiel

Der folgende Codeausschnitt erstellt ein {{domxref("Worker")}}-Objekt unter Verwendung des {{domxref("Worker.Worker", "Worker()")}}-Konstruktors. Die Methode `transferControlToOffscreen()` wird verwendet, um ein `OffscreenCanvas`-Objekt aus dem {{HtmlElement("canvas")}}-Element zu erhalten, damit es an den Worker übertragen werden kann:

```js
const canvas = document.getElementById("canvas");
const offscreen = canvas.transferControlToOffscreen();
const worker = new Worker("worker.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

Im Worker-Thread können wir das `OffscreenCanvasRenderingContext2D` verwenden, um auf das Bitmap des `OffscreenCanvas`-Objekts zu zeichnen:

```js
onmessage = (event) => {
  const canvas = event.data.canvas;
  const offCtx = canvas.getContext("2d");
  // draw to the offscreen canvas context
  offCtx.fillStyle = "red";
  offCtx.fillRect(0, 0, 100, 100);
};
```

Für ein vollständiges Beispiel siehe unser [OffscreenCanvas worker example](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([run OffscreenCanvas worker](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

## Zusätzliche Methoden

Die folgende Methode ist neu im `OffscreenCanvasRenderingContext2D`-Interface und existiert nicht im `CanvasRenderingContext2D`-Interface:

- {{domxref("OffscreenCanvasRenderingContext2D.commit()", "commit()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Überträgt das gerenderte Bild auf das Platzhalter{{HtmlElement("canvas")}}-Element des `OffscreenCanvas`-Objekts.

## Nicht unterstützte Funktionen

Die folgende Benutzeroberflächenmethode wird **nicht unterstützt** vom `OffscreenCanvasRenderingContext2D`-Interface:

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusrahmen um den aktuellen Pfad.

## Geerbte Eigenschaften und Methoden

_Die folgenden Eigenschaften und Methoden sind von {{domxref("CanvasRenderingContext2D")}} geerbt. Sie haben die gleiche Verwendung wie in `CanvasRenderingContext2D`_

### Kontext

- {{domxref("CanvasRenderingContext2D.isContextLost()")}}
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Rechtecke zeichnen

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Setzt alle Pixel im durch den Anfangspunkt _(x, y)_ und die Größe _(width, height)_ definierten Rechteck auf transparentes Schwarz und löscht so zuvor gezeichneten Inhalt.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Malt ein Rechteck, das einen Startpunkt bei _(x, y)_ hat und eine Breite _w_ sowie eine Höhe _h_ hat, auf das Canvas, unter Verwendung des aktuellen Strichstils.

### Text zeichnen

Die folgenden Methoden und Eigenschaften steuern das Zeichnen von Text. Siehe auch das {{domxref("TextMetrics")}}-Objekt für Texteigenschaften.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Zeichnet (füllt) einen gegebenen Text an der gegebenen (x, y) Position.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Zeichnet (umrändert) einen gegebenen Text an der gegebenen (x, y) Position.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Gibt ein {{domxref("TextMetrics")}}-Objekt zurück.
- {{domxref("CanvasRenderingContext2D.textRendering")}}
  - : Textrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Breite der Linien. Standard `1.0`.
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Art der Endungen an den Enden von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Definiert die Art von Ecken, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Miterlimit-Verhältnis. Standard `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Gibt das aktuelle Linienstreifenmuster-Array zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Setzt das aktuelle Linienstreifenmuster.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Gibt an, wo ein Streifenmuster auf einer Linie beginnen soll.

### Textstile

Die folgenden Eigenschaften steuern, wie Text angeordnet wird.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Schriftart-Einstellung. Standardwert `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Texteinstellung der Textausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Baseline-Ausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
  - : Buchstabenabstand. Standard: `0px`.
- {{domxref("CanvasRenderingContext2D.fontKerning")}}
  - : Schriftarten-Kerning. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- {{domxref("CanvasRenderingContext2D.fontStretch")}}
  - : Schriftarten-Dehnen. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- {{domxref("CanvasRenderingContext2D.fontVariantCaps")}}
  - : Variante der Großbuchstaben. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- {{domxref("CanvasRenderingContext2D.textRendering")}} {{experimental_inline}}
  - : Textrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
  - : Wortabstand. Standardwert: `0px`.

### Füll- und Strichstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet, und Strichstile werden für die Linien um Formen herum verwendet.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Farbe oder Stil, der innerhalb von Formen verwendet wird. Standard `#000` (schwarz).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Farbe oder Stil, der für die Linien um Formen herum verwendet wird. Standard `#000` (schwarz).

### Gradient- und Mustererstellung

- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
  - : Erstellt einen kegelförmigen Farbverlauf um einen Punkt, der durch die Parameter vorgegeben ist.
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Erstellt einen linearen Farbverlauf entlang der Linie, die durch die Parameter dargestellt wird.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Erstellt einen radialen Farbverlauf, der durch die Koordinaten der zwei Kreise dargestellt wird, die durch die Parameter bestimmt werden.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Erstellt ein Muster, indem das angegebene Bild verwendet wird. Es wiederholt die Quelle in den durch das Wiederholungsargument angegebenen Richtungen. Diese Methode gibt ein {{domxref("CanvasPattern")}} zurück.

### Schatten

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Gibt den Weichzeichnungseffekt an. Standard: `0`.
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Farbe des Schattens. Standard: vollständig-transparentes Schwarz.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Horizontale Entfernung, um die der Schatten verschoben wird. Standard: `0`.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Vertikale Entfernung, um die der Schatten verschoben wird. Standard: `0`.

### Pfade

Die folgenden Methoden können verwendet werden, um Pfade von Objekten zu manipulieren.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Veranlasst den Stiftpunkt, zum Beginn des aktuellen Unterpfades zurückzukehren. Es versucht, eine gerade Linie vom aktuellen Punkt zum Start zu zeichnen. Wenn die Form bereits geschlossen oder nur ein Punkt vorhanden ist, tut diese Funktion nichts.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Bewegt den Startpunkt eines neuen Unterpfades zu den Koordinaten (x, y).
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen Koordinaten (x, y) durch eine gerade Linie.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Fügt dem aktuellen Pfad eine kubische Bézierkurve hinzu.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Fügt dem aktuellen Pfad eine quadratische Bézierkurve hinzu.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Fügt dem aktuellen Pfad einen Kreisbogen hinzu.
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Fügt dem aktuellen Pfad einen Bogen mit den angegebenen Kontrollpunkten und dem Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer Größe, die durch _width_ und _height_ bestimmt wird.
- {{domxref("CanvasRenderingContext2D.roundRect()")}}
  - : Erstellt einen Pfad für ein Rechteck mit abgerundeten Ecken an der Position (x, y) mit einer Größe, die durch _width_ und _height_ und Radien, die durch _radii_ bestimmt werden.

### Pfade zeichnen

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Malt die aktuellen Unterpfade mit dem aktuellen Strichstil.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Erstellt einen Ausschnittpfad aus den aktuellen Unterpfaden. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Ausschnittpfads. Für ein Beispiel siehe [Ausschnittpfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Berichtet, ob der angegebene Punkt im aktuellen Pfad enthalten ist.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Berichtet, ob der angegebene Punkt innerhalb des Bereichs liegt, der durch das Umranden eines Pfads eingeschlossen wird.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden zu deren Manipulation. Die Transformationsmatrix wird beim Erstellen des aktuellen Standardpfads, beim Malen von Text, Formen und {{domxref("Path2D")}}-Objekten angewandt. Die unten aufgeführten Methoden bleiben aus historischen und Kompatibilitätsgründen bestehen, da {{domxref("DOMMatrix")}}-Objekte in den meisten Teilen der API heutzutage verwendet werden und in Zukunft verwendet werden.

- {{domxref("CanvasRenderingContext2D.getTransform()")}}
  - : Ruft die gegenwärtig auf den Kontext angewandte Transformationsmatrix ab.
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Fügt der Transformationsmatrix eine Rotation hinzu. Das Winkelargument stellt einen im Uhrzeigersinn verlaufenden Drehwinkel dar und wird in Radiant ausgedrückt.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Fügt eine Skalierungstransformation zu den Canvas-Einheiten hinzu, indem sie horizontal um x und vertikal um y skaliert werden.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Fügt eine Übersetzungstransformation hinzu, indem das Canvas und sein Ursprung horizontal um x und vertikal um y im Raster verschoben werden.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrix, die durch ihre Argumente beschrieben wird.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Setzt die aktuelle Transformation auf die Identitätsmatrix zurück und ruft dann die `transform()`-Methode mit den gleichen Argumenten auf.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}}
  - : Setzt die aktuelle Transformation durch die Identitätsmatrix zurück.

### Komposition

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf das Canvas zusammengesetzt werden. Standard `1.0` (undurchsichtig).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : Mit `globalAlpha` wird damit eingestellt, wie Formen und Bilder auf das bestehende Bitmap gezeichnet werden.

### Bilder zeichnen

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet eine große Flexibilität in ihrer Verwendung.

### Pixel-Manipulation

Siehe auch das {{domxref("ImageData")}}-Objekt.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Erstellt ein neues, leeres {{domxref("ImageData")}}-Objekt mit den angegebenen Dimensionen. Alle Pixel im neuen Objekt sind transparentes Schwarz.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Gibt ein {{domxref("ImageData")}}-Objekt zurück, das die zugrunde liegenden Pixeldaten für den Bereich der Leinwand darstellt, der durch das Rechteck, das bei _(sx, sy)_ beginnt und eine Breite von _sw_ sowie eine Höhe von _sh_ hat, bezeichnet wird.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Malt Daten aus dem gegebenen {{domxref("ImageData")}}-Objekt auf das Bitmap. Wenn ein schmutziges Rechteck angegeben wird, werden nur die Pixel aus diesem Rechteck gemalt.

### Bildglättung

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder nicht geglättet, wenn sie skaliert werden.
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichenstilszuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen bei der Arbeit mit diesem Zustand:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Speichert den aktuellen Zeichenstilszustand unter Verwendung eines Stapels, sodass Sie alle Änderungen daran mit `restore()` rückgängig machen können.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Stellt den Zeichenstilszustand auf das letzte Element im 'Statusstapel' zurück, das mit `save()` gespeichert wurde.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : Eine schreibgeschützte Referenz auf ein `OffscreenCanvas`-Objekt.
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
  - : Gibt ein Objekt zurück, das die tatsächlichen Kontexteigenschaften enthält. Kontexteigenschaften können mit {{domxref("HTMLCanvasElement.getContext()")}} angefordert werden.
- {{domxref("CanvasRenderingContext2D.reset()")}}
  - : Setzt den aktuellen Zeichenstilszustand auf die Standardwerte zurück.

### Filter

- {{domxref("CanvasRenderingContext2D.filter")}}
  - : Wendet einen CSS- oder SVG-Filter auf das Canvas an; z.B., um dessen Helligkeit oder Unschärfe zu ändern.

## Nicht unterstützte Eigenschaften und Methoden

Die folgende Methode wird **nicht unterstützt** im `OffscreenCanvasRenderingContext2D`-Interface:

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : Wenn ein bestimmtes Element fokussiert ist, zeichnet diese Methode einen Fokusrahmen um den aktuellen Pfad.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
