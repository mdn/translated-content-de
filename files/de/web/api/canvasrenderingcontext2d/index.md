---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
l10n:
  sourceCommit: 3dff7195e4459abfcd524e86d496cad473f04044
---

{{APIRef}}

Die **`CanvasRenderingContext2D`**-Schnittstelle, Teil der [Canvas API](/de/docs/Web/API/Canvas_API), bietet den 2D-Rendering-Kontext für die Zeichenfläche eines {{HTMLElement("canvas")}}-Elements. Sie wird zum Zeichnen von Formen, Text, Bildern und anderen Objekten verwendet.

Die Eigenschaften und Methoden der Schnittstelle sind im Referenzabschnitt dieser Seite beschrieben. Das [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) bietet ebenfalls Erläuterungen, Beispiele und Ressourcen.

Für [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) gibt es eine gleichwertige Schnittstelle, die den Rendering-Kontext bereitstellt. Der Offscreen-Rendering-Kontext erbt die meisten der gleichen Eigenschaften und Methoden wie der `CanvasRenderingContext2D` und wird ausführlicher auf der [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Referenzseite beschrieben.

## Einfaches Beispiel

Um eine Instanz von `CanvasRenderingContext2D` zu erhalten, müssen Sie zunächst ein HTML-`<canvas>`-Element zur Verfügung haben:

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

Um den 2D-Rendering-Kontext des Canvas zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem `<canvas>`-Element auf und übergeben `'2d'` als Argument:

```js
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
```

Mit dem Kontext in der Hand können Sie alles zeichnen, was Sie möchten. Dieser Code zeichnet ein Haus:

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

- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Rechtecke zeichnen

Es gibt drei Methoden, die sofort Rechtecke auf die Zeichenfläche zeichnen.

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im durch den Startpunkt _(x, y)_ und die Größe _(width, height)_ definierten Rechteck auf transparentes Schwarz und löscht jeglichen zuvor gezeichneten Inhalt.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt ein Rechteck, das einen Startpunkt bei _(x, y)_ hat und eine _w_ Breite und _h_ Höhe auf der Zeichenfläche aufweist, unter Verwendung des aktuellen Linienstils.

### Text zeichnen

Die folgenden Methoden zeichnen Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) den angegebenen Text an der angegebenen (x, y)-Position.
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (umrandet) den angegebenen Text an der angegebenen (x, y)-Position.
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standard `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Typ der Endungen an den Enden von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen zwei Linien zusammentreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Gehrungslängenbegrenzung. Standard `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Strichmuster-Array zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Setzt das aktuelle Strichmuster.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnt.

### Textstile

Die folgenden Eigenschaften steuern, wie Text ausgelegt wird.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schriftarteinstellung. Standardwert `"10px sans-serif"`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Texteinstellung für die Ausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Baseliausgleichseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtungseinstellung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Buchstabenabstand. Standard: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Schriftverengung. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftdehnung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Schriftvarianten-Kapitälchen. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortabstand. Standardwert: `0px`

### Füll- und Strichstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet und Strichstile für die Linien um Formen.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil, der innerhalb von Formen verwendet wird. Standard `#000` (schwarz).
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil, der für die Linien um Formen verwendet wird. Standard `#000` (schwarz).

### Verläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Verlauf um einen durch die Parameter dargestellten Punkt.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Verlauf entlang der durch die Parameter dargestellten Linie.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Verlauf, gegeben durch die Koordinaten der beiden durch die Parameter dargestellten Kreise.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster mit dem angegebenen Bild. Es wiederholt die Quelle in den durch das Wiederholungsargument angegebenen Richtungen. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt den Unschärfeeffekt an. Standard: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standard: vollständig transparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontale Entfernung, um die der Schatten versetzt wird. Standard: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikale Entfernung, um die der Schatten versetzt wird. Standard: `0`.

### Pfade

Die folgenden Methoden können verwendet werden, um Pfade von Objekten zu manipulieren.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Beginnt einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Bewegt den Punkt des Stifts zurück zum Anfang des aktuellen Unterpfads. Es versucht, eine gerade Linie vom aktuellen Punkt zum Start zu zeichnen. Wenn die Form bereits geschlossen ist oder nur einen Punkt hat, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Startpunkt eines neuen Unterpfads zu den (x, y)-Koordinaten.
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y)-Koordinaten mit einer geraden Linie.
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt dem aktuellen Pfad eine kubische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt dem aktuellen Pfad eine quadratische Bézierkurve hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt dem aktuellen Pfad einen Kreisbogen hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt dem aktuellen Pfad mit den gegebenen Kontrollpunkten und einem Radius einen Bogen hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer Größe, die durch _width_ und _height_ bestimmt ist.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein abgerundetes Rechteck mit einer angegebenen Position, Breite, Höhe und Eckradien.

### Zeichnen von Pfaden

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Zeichnet die aktuellen Unterpfade mit dem aktuellen Strichstil.
- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein angegebenes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt einen Schnittpfad aus den aktuellen Unterpfaden. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Schnittpfads. Für ein Beispiel siehe [Schnittpfade](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Gibt an, ob der angegebene Punkt im aktuellen Pfad enthalten ist.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Gibt an, ob der angegebene Punkt im Bereich enthalten ist, der durch das Zeichnen eines Strichs eines Pfads eingegrenzt wird.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden, um sie zu manipulieren. Die Transformationsmatrix wird angewendet, wenn der aktuelle Standardpfad, Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekte erstellt werden. Die unten aufgelisteten Methoden bleiben aus historischen und Kompatibilitätsgründen erhalten, da [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte in den meisten Teilen der API heutzutage verwendet werden und in Zukunft statt ihrer verwendet werden.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Drehung hinzu. Das Argument des Winkels stellt einen im Uhrzeigersinn drehenden Winkel dar und wird in Bogenmaß ausgedrückt.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt eine Skalierungstransformation zu den Canvas-Einheiten horizontal um x und vertikal um y hinzu.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Verschiebungstransformation hinzu, indem das Canvas und sein Ursprung horizontal um x und vertikal um y im Raster verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit denselben Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

### Komposition

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf die Zeichenfläche komponiert werden. Standard `1.0` (undurchsichtig).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Mit angewendetem `globalAlpha` legt dies fest, wie Formen und Bilder auf das bestehende Bitmap gezeichnet werden.

### Bilder zeichnen

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet eine große Flexibilität in ihrer Verwendung.

### Pixelmanipulation

Siehe auch das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt.

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixeldaten für den Bereich der Zeichenfläche darstellt, der durch das Rechteck definiert ist, das bei _(sx, sy)_ beginnt und eine Breite von _sw_ und eine Höhe von _sh_ hat.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Malt Daten aus dem angegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf das Bitmap. Wenn ein schmutziges Rechteck bereitgestellt wird, werden nur die Pixel aus diesem Rechteck gemalt.

### Bildglättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder beim Skalieren nicht geglättet.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung einzustellen.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichenstilzuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen dabei, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand mit einem Stapel, sodass Sie ihn mit `restore()` auf jeden beliebigen von Ihnen vorgenommenen Änderungen zurücksetzen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand auf das letzte Element im auf dem 'Zustandsstapel' gespeicherten Zustand durch `save()` zurück.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
  - : Ein schreibgeschützter Rückverweis auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}}-Element verknüpft ist.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt zurück, das die von der Browser verwendeten Kontexattribute enthält. Kontexattribute können beim Verwenden von [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) angefordert werden, um den 2D-Kontext zu erstellen.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den Rendering-Kontext zurück, einschließlich des Rückpuffers, des Zeichenstapelzustands, des Pfads und der Stile.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf das Canvas an, z. B. um dessen Helligkeit oder Unschärfe zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
