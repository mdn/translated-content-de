---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("Canvas API")}}

Das Interface **`CanvasRenderingContext2D`** ist Teil der [Canvas-API](/de/docs/Web/API/Canvas_API) und stellt den 2D-Rendering-Kontext für die Zeichenfläche eines {{HTMLElement("canvas")}}-Elements bereit.
Es wird zum Zeichnen von Formen, Text, Bildern und anderen Objekten verwendet.

Die Eigenschaften und Methoden des Interfaces werden im Referenzabschnitt dieser Seite beschrieben.
Das [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) bietet außerdem weitere Erklärungen, Beispiele und Ressourcen.

Für [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) gibt es ein entsprechendes Interface, das den Rendering-Kontext bereitstellt.
Der Offscreen-Rendering-Kontext erbt die meisten Eigenschaften und Methoden von `CanvasRenderingContext2D` und wird auf der Referenzseite zu [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) ausführlicher beschrieben.

## Einfaches Beispiel

Um eine `CanvasRenderingContext2D`-Instanz zu erhalten, benötigen Sie zunächst ein HTML-Element `<canvas>`:

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

Um den 2D-Rendering-Kontext des Canvas zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem `<canvas>`-Element mit `'2d'` als Argument auf:

```js
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
```

Mit dem Kontext können Sie beliebige Inhalte zeichnen. Dieser Code zeichnet ein Haus:

```js
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

Die resultierende Zeichnung sieht so aus:

{{EmbedLiveSample("Basic_example", 700, 330)}}

## Referenz

### Kontext

- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt mit den vom Browser verwendeten Kontextattributen zurück. Kontextattribute können beim Erstellen des 2D-Kontexts mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Rechtecke zeichnen

Drei Methoden zeichnen Rechtecke unmittelbar auf den Canvas.

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel in dem durch den Startpunkt _(x, y)_ und die Größe _(width, height)_ definierten Rechteck auf transparentes Schwarz und löscht damit zuvor gezeichnete Inhalte.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein ausgefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Zeichnet mit dem aktuellen Konturstil die Kontur eines Rechtecks auf den Canvas, das bei _(x, y)_ beginnt, die Breite _w_ und die Höhe _h_ hat.

### Text zeichnen

Die folgenden Methoden zeichnen Text. Informationen zu Texteigenschaften finden Sie auch beim Objekt [`TextMetrics`](/de/docs/Web/API/TextMetrics).

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet einen angegebenen Text ausgefüllt an der angegebenen Position (x, y).
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet die Kontur eines angegebenen Textes an der angegebenen Position (x, y).
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standardwert: `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Art der Linienenden. Mögliche Werte: `butt` (Standardwert), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Legt fest, wie die Ecken aussehen, an denen zwei Linien zusammentreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standardwert).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Grenzwert für Gehrungsverbindungen. Standardwert: `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster als Array mit einer geraden Anzahl nicht negativer Zahlen zurück.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Strichmuster fest.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, an welcher Stelle einer Linie das Strichmuster beginnt.

### Textstile

Die folgenden Eigenschaften steuern das Layout von Text.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schrifteinstellung. Standardwert: `"10px sans-serif"`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Einstellung für die Textausrichtung. Mögliche Werte: `start` (Standardwert), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Einstellung für die Ausrichtung an der Grundlinie. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standardwert), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Schreibrichtung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standardwert).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Zeichenabstand. Standardwert: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Unterschneidung der Schrift. Mögliche Werte: `auto` (Standardwert), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftbreite. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standardwert), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Variante der Großbuchstaben. Mögliche Werte: `normal` (Standardwert), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textdarstellung. Mögliche Werte: `auto` (Standardwert), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`.
- [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang)
  - : Liest oder legt die Sprache des Canvas-Zeichenkontexts fest.

### Füll- und Konturstile

Der Füllstil bestimmt Farben und Stile innerhalb von Formen, der Konturstil die Linien um Formen herum.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil für das Innere von Formen. Standardwert: `black`.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil für die Linien um Formen herum. Standardwert: `black`.

### Farbverläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Farbverlauf um einen Punkt, dessen Koordinaten durch die Parameter angegeben werden.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Farbverlauf entlang der Linie, die durch die als Parameter angegebenen Koordinaten definiert wird.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf anhand der Koordinaten zweier Kreise, die durch die Parameter angegeben werden.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster aus dem angegebenen Bild. Die Bildquelle wird in den durch das Wiederholungsargument festgelegten Richtungen wiederholt. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Legt den Unschärfeeffekt fest. Standardwert: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standardwert: vollständig transparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontaler Versatz des Schattens. Standardwert: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikaler Versatz des Schattens. Standardwert: `0`.

### Pfade

Mit den folgenden Methoden können Pfade von Objekten bearbeitet werden.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Beginnt einen neuen Pfad, indem die Liste der Teilpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Bewegt die Stiftspitze zurück zum Anfang des aktuellen Teilpfads. Dabei wird versucht, vom aktuellen Punkt aus eine gerade Linie zum Anfang zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, bewirkt diese Funktion nichts.
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
  - : Fügt dem aktuellen Pfad einen Kreisbogen mit den angegebenen Kontrollpunkten und dem angegebenen Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden wird.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y), dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein abgerundetes Rechteck mit angegebener Position, Breite, Höhe und angegebenen Eckenradien.

### Pfade zeichnen

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Teilpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die Konturen der aktuellen Teilpfade mit dem aktuellen Konturstil.
- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein angegebenes Element den Fokus hat, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt aus den aktuellen Teilpfaden einen Beschneidungspfad. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb dieses Beschneidungspfads. Ein Beispiel finden Sie unter [Beschneidungspfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Gibt an, ob der angegebene Punkt im aktuellen Pfad liegt.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Gibt an, ob der angegebene Punkt innerhalb des Bereichs liegt, den die Kontur eines Pfads einnimmt.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext verfügen über eine aktuelle Transformationsmatrix und Methoden, um diese zu bearbeiten. Die Transformationsmatrix wird beim Erstellen des aktuellen Standardpfads sowie beim Zeichnen von Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekten angewendet. Die unten aufgeführten Methoden bleiben aus historischen Gründen und aus Kompatibilitätsgründen erhalten, da heute in den meisten Teilen der API stattdessen [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte verwendet werden und dies auch künftig der Fall sein wird.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuell auf den Kontext angewendete Transformationsmatrix ab.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Drehung hinzu. Das Winkelargument gibt einen Drehwinkel im Uhrzeigersinn im Bogenmaß an.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt eine Skalierungstransformation hinzu, die die Canvas-Einheiten horizontal um x und vertikal um y skaliert.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Verschiebungstransformation hinzu, die den Canvas und seinen Ursprung im Koordinatensystem horizontal um x und vertikal um y verschiebt.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch die Argumente beschriebenen Matrix.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft anschließend die Methode `transform()` mit denselben Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

### Compositing

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie mit dem Canvas zusammengesetzt werden. Standardwert: `1.0` (deckend).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Legt unter Berücksichtigung von `globalAlpha` fest, wie Formen und Bilder auf die vorhandene Bitmap gezeichnet werden.

### Bilder zeichnen

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Varianten verfügbar und lässt sich daher sehr flexibel einsetzen.

### Pixel bearbeiten

Siehe auch das Objekt [`ImageData`](/de/docs/Web/API/ImageData).

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparentes Schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die Pixeldaten des Canvas-Bereichs enthält, der durch ein Rechteck mit dem Startpunkt _(sx, sy)_, der Breite _sw_ und der Höhe _sh_ definiert ist.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Zeichnet Daten aus dem angegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf die Bitmap. Wenn ein Änderungsrechteck angegeben ist, werden nur die Pixel aus diesem Rechteck gezeichnet.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Modus für die Bildglättung; ist er deaktiviert, werden Bilder beim Skalieren nicht geglättet.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält verschiedene Zeichenstilzustände (Attribute für Linien-, Füll-, Schatten- und Textstile). Die folgenden Methoden helfen Ihnen, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand auf einem Stapel, sodass Sie Änderungen daran mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand aus dem letzten Element des mit `save()` gespeicherten Zustandsstapels wieder her.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas) {{ReadOnlyInline}}
  - : Ein Rückverweis auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn der Kontext keinem {{HTMLElement("canvas")}}-Element zugeordnet ist.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt mit den vom Browser verwendeten Kontextattributen zurück. Kontextattribute können beim Erstellen des 2D-Kontexts mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den Rendering-Kontext zurück, einschließlich des zugrunde liegenden Puffers, des Zeichenstil-Zustandsstapels, des Pfads und der Stile.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf den Canvas an, beispielsweise um seine Helligkeit oder Unschärfe zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
