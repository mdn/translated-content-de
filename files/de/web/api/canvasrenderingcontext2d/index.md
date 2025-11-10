---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Das **`CanvasRenderingContext2D`**-Interface, Teil der [Canvas API](/de/docs/Web/API/Canvas_API), stellt den 2D-Rendering-Kontext für die Zeichenoberfläche eines {{HTMLElement("canvas")}}-Elements bereit. Es wird verwendet, um Formen, Text, Bilder und andere Objekte zu zeichnen.

Die Eigenschaften und Methoden des Interfaces sind im Referenzteil dieser Seite beschrieben. Das [Canvas Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) bietet zusätzliche Erklärungen, Beispiele und Ressourcen.

Für [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) gibt es ein entsprechendes Interface, das den Rendering-Kontext bereitstellt. Der Offscreen-Rendering-Kontext erbt die meisten der gleichen Eigenschaften und Methoden wie `CanvasRenderingContext2D` und wird ausführlicher auf der Referenzseite [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) beschrieben.

## Einfaches Beispiel

Um eine Instanz von `CanvasRenderingContext2D` zu erhalten, benötigen Sie zuerst ein HTML-`<canvas>`-Element, mit dem Sie arbeiten können:

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

Um den 2D-Rendering-Kontext des Canvas zu erhalten, rufen Sie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf dem `<canvas>`-Element auf und geben Sie `'2d'` als Argument an:

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

- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt zurück, das die vom Browser verwendeten Kontextattribute enthält. Kontextattribute können angefordert werden, wenn [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) verwendet wird, um den 2D-Kontext zu erstellen.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Zeichnen von Rechtecken

Es gibt drei Methoden, die sofort Rechtecke auf die Leinwand zeichnen.

- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
  - : Setzt alle Pixel im durch den Startpunkt _(x, y)_ und die Größe _(Breite, Höhe)_ definierten Rechteck auf transparentes Schwarz und löscht jeglichen zuvor gezeichneten Inhalt.
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
  - : Zeichnet ein ausgefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _Breite_ und _Höhe_ bestimmt wird.
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
  - : Malt ein Rechteck, dessen Anfangspunkt bei _(x, y)_ liegt und das eine _w_ Breite und eine _h_ Höhe hat, auf die Leinwand, unter Verwendung des aktuellen Umrissstils.

### Zeichnen von Text

Die folgenden Methoden zeichnen Text. Siehe auch das [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt für Texteigenschaften.

- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet (füllt) einen gegebenen Text an der angegebenen (x, y)-Position.
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet (umrandet) einen gegebenen Text an der angegebenen (x, y)-Position.
- [`CanvasRenderingContext2D.measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - : Breite der Linien. Standardwert: `1.0`.
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - : Typ der Endungen an den Enden von Linien. Mögliche Werte: `butt` (Standard), `round`, `square`.
- [`CanvasRenderingContext2D.lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - : Definiert die Art der Ecken, an denen sich zwei Linien treffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- [`CanvasRenderingContext2D.miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - : Miter-Limit-Verhältnis. Standardwert: `10`.
- [`CanvasRenderingContext2D.getLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/getLineDash)
  - : Gibt das aktuelle Liniendash-Musterarray zurück, das eine gerade Anzahl nicht negativer Zahlen enthält.
- [`CanvasRenderingContext2D.setLineDash()`](/de/docs/Web/API/CanvasRenderingContext2D/setLineDash)
  - : Legt das aktuelle Liniendash-Muster fest.
- [`CanvasRenderingContext2D.lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - : Gibt an, wo ein Dash-Array auf einer Linie beginnen soll.

### Textstile

Die folgenden Eigenschaften steuern, wie Text angeordnet wird.

- [`CanvasRenderingContext2D.font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Schrifteinstellung. Standardwert: `"10px sans-serif"`.
- [`CanvasRenderingContext2D.textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Texteinstellung der Ausrichtung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Baseline-Ausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- [`CanvasRenderingContext2D.direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
  - : Buchstabenzwischenraum. Standard: `0px`.
- [`CanvasRenderingContext2D.fontKerning`](/de/docs/Web/API/CanvasRenderingContext2D/fontKerning)
  - : Schrift-Kerning. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- [`CanvasRenderingContext2D.fontStretch`](/de/docs/Web/API/CanvasRenderingContext2D/fontStretch)
  - : Schriftdehnung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- [`CanvasRenderingContext2D.fontVariantCaps`](/de/docs/Web/API/CanvasRenderingContext2D/fontVariantCaps)
  - : Schriftvariante Großbuchstaben. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- [`CanvasRenderingContext2D.textRendering`](/de/docs/Web/API/CanvasRenderingContext2D/textRendering)
  - : Textrendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
  - : Wortzwischenraum. Standardwert: `0px`
- [`CanvasRenderingContext2D.lang`](/de/docs/Web/API/CanvasRenderingContext2D/lang) {{experimental_inline}}
  - : Ruft die Sprache des Zeichenkontexts ab oder setzt diese.

### Füll- und Strichstile

Füllstile werden für Farben und Stile innerhalb von Formen verwendet, und Strichstile werden für die Linien um Formen verwendet.

- [`CanvasRenderingContext2D.fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - : Farbe oder Stil, der innerhalb von Formen verwendet werden soll. Standard ist `black`.
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - : Farbe oder Stil, der für die Linien um Formen verwendet werden soll. Standard ist `black`.

### Farbverläufe und Muster

- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
  - : Erstellt einen konischen Farbverlauf um einen Punkt, der durch die Koordinaten der Parameter repräsentiert wird.
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
  - : Erstellt einen linearen Farbverlauf entlang der Linie, die durch die Koordinaten der Parameter dargestellt wird.
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
  - : Erstellt einen radialen Farbverlauf, der durch die Koordinaten der beiden Kreise dargestellt wird, die durch die Parameter beschrieben werden.
- [`CanvasRenderingContext2D.createPattern()`](/de/docs/Web/API/CanvasRenderingContext2D/createPattern)
  - : Erstellt ein Muster unter Verwendung des angegebenen Bildes. Es wiederholt die Quelle in den durch das Wiederholungsargument angegebenen Richtungen. Diese Methode gibt ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern) zurück.

### Schatten

- [`CanvasRenderingContext2D.shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - : Gibt den Weichzeichnungseffekt an. Standard: `0`.
- [`CanvasRenderingContext2D.shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - : Farbe des Schattens. Standard: vollständig transparentes Schwarz.
- [`CanvasRenderingContext2D.shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - : Horizontale Entfernung, um die der Schatten versetzt wird. Standard: `0`.
- [`CanvasRenderingContext2D.shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - : Vertikale Entfernung, um die der Schatten versetzt wird. Standard: `0`.

### Pfade

Die folgenden Methoden können verwendet werden, um Pfade von Objekten zu manipulieren.

- [`CanvasRenderingContext2D.beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)
  - : Startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- [`CanvasRenderingContext2D.closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath)
  - : Veranlasst, dass der Stiftpunkt zurück zum Anfang des aktuellen Unterpfades bewegt wird. Es versucht, eine gerade Linie vom aktuellen Punkt zum Anfang zu zeichnen. Wenn die Form bereits geschlossen wurde oder nur einen Punkt hat, tut diese Funktion nichts.
- [`CanvasRenderingContext2D.moveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/moveTo)
  - : Bewegt den Startpunkt eines neuen Unterpfades zu den (x, y)-Koordinaten.
- [`CanvasRenderingContext2D.lineTo()`](/de/docs/Web/API/CanvasRenderingContext2D/lineTo)
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y)-Koordinaten durch eine gerade Linie.
- [`CanvasRenderingContext2D.bezierCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo)
  - : Fügt dem aktuellen Pfad eine kubische Bézier-Kurve hinzu.
- [`CanvasRenderingContext2D.quadraticCurveTo()`](/de/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo)
  - : Fügt dem aktuellen Pfad eine quadratische Bézier-Kurve hinzu.
- [`CanvasRenderingContext2D.arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc)
  - : Fügt einen kreisförmigen Bogen zum aktuellen Pfad hinzu.
- [`CanvasRenderingContext2D.arcTo()`](/de/docs/Web/API/CanvasRenderingContext2D/arcTo)
  - : Fügt einen Bogen zum aktuellen Pfad mit den gegebenen Kontrollpunkten und Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- [`CanvasRenderingContext2D.ellipse()`](/de/docs/Web/API/CanvasRenderingContext2D/ellipse)
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer Größe, die durch _Breite_ und _Höhe_ bestimmt wird.
- [`CanvasRenderingContext2D.roundRect()`](/de/docs/Web/API/CanvasRenderingContext2D/roundRect)
  - : Erstellt einen Pfad für ein abgerundetes Rechteck mit einer bestimmten Position, Breite, Höhe und Eckradien.

### Zeichnen von Pfaden

- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
  - : Umrandet die aktuellen Unterpfade mit dem aktuellen Umrissstil.
- [`CanvasRenderingContext2D.drawFocusIfNeeded()`](/de/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded)
  - : Wenn ein gegebenes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.
- [`CanvasRenderingContext2D.clip()`](/de/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Erstellt einen Clipping-Pfad aus den aktuellen Unterpfaden. Alles, was nach `clip()` gezeichnet wird, erscheint nur innerhalb des Clipping-Pfades. Für ein Beispiel siehe [Clipping paths](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- [`CanvasRenderingContext2D.isPointInPath()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
  - : Meldet, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- [`CanvasRenderingContext2D.isPointInStroke()`](/de/docs/Web/API/CanvasRenderingContext2D/isPointInStroke)
  - : Meldet, ob der angegebene Punkt innerhalb des Bereichs enthalten ist, der durch das Umranden eines Pfads entsteht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden, um diese zu manipulieren. Die Transformationsmatrix wird angewendet, wenn der aktuelle Standardpfad erstellt, Text, Formen und [`Path2D`](/de/docs/Web/API/Path2D)-Objekte gemalt werden. Die unten aufgeführten Methoden bleiben aus historischen und Kompatibilitätsgründen erhalten, da [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekte heutzutage in den meisten Teilen der API verwendet werden und in Zukunft verwendet werden sollen.

- [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform)
  - : Ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.
- [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Fügt der Transformationsmatrix eine Rotation hinzu. Das Winkelargument stellt einen im Uhrzeigersinn gedrehten Winkel dar und wird in Bogenmaß ausgedrückt.
- [`CanvasRenderingContext2D.scale()`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Fügt eine Skalierungstransformation zu den Leinwandeinheiten im Verhältnis x horizontal und y vertikal hinzu.
- [`CanvasRenderingContext2D.translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Fügt eine Übersetzungstransformation hinzu, indem die Leinwand und ihr Ursprung x horizontal und y vertikal auf dem Raster verschoben werden.
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrize, die durch ihre Argumente beschrieben wird.
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit den gleichen Argumenten auf.
- [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation durch die Einheitsmatrix zurück.

### Zusammensetzen

- [`CanvasRenderingContext2D.globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf der Leinwand zusammengesetzt werden. Standard: `1.0` (opak).
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Zusammen mit `globalAlpha` legt dies fest, wie Formen und Bilder auf das vorhandene Bitmap gezeichnet werden.

### Zeichnen von Bildern

- [`CanvasRenderingContext2D.drawImage()`](/de/docs/Web/API/CanvasRenderingContext2D/drawImage)
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet viel Flexibilität bei der Verwendung.

### Pixel-Manipulation

Siehe auch das [`ImageData`](/de/docs/Web/API/ImageData)-Objekt.

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
  - : Erstellt ein neues, leeres [`ImageData`](/de/docs/Web/API/ImageData)-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
  - : Gibt ein [`ImageData`](/de/docs/Web/API/ImageData)-Objekt zurück, das die zugrunde liegenden Pixelinformationen für den Bereich der Leinwand darstellt, der durch das Rechteck definiert wird, das bei _(sx, sy)_ beginnt und eine _sw_ Breite und _sh_ Höhe hat.
- [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData)
  - : Malt Daten aus dem gegebenen [`ImageData`](/de/docs/Web/API/ImageData)-Objekt auf das Bitmap. Wenn ein "dirty rectangle" bereitgestellt wird, werden nur die Pixel aus diesem Rechteck gemalt.

### Bild-Glättung

- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder nicht geglättet, wenn sie skaliert werden.
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
  - : Ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

### Der Zustand der Leinwand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichenstilzuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen, mit diesem Zustand zu arbeiten:

- [`CanvasRenderingContext2D.save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den aktuellen Zeichenstilzustand mit einem Stapel, sodass Sie jede Änderung daran mit `restore()` rückgängig machen können.
- [`CanvasRenderingContext2D.restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den Zeichenstilzustand auf das zuletzt von `save()` gespeicherte Element auf dem 'Zustandsstapel' zurück.
- [`CanvasRenderingContext2D.canvas`](/de/docs/Web/API/CanvasRenderingContext2D/canvas)
  - : Eine schreibgeschützte Rückverweisung auf das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement). Kann [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}}-Element assoziiert ist.
- [`CanvasRenderingContext2D.getContextAttributes()`](/de/docs/Web/API/CanvasRenderingContext2D/getContextAttributes)
  - : Gibt ein Objekt zurück, das die vom Browser verwendeten Kontextattribute enthält. Kontextattribute können angefordert werden, wenn [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) verwendet wird, um den 2D-Kontext zu erstellen.
- [`CanvasRenderingContext2D.reset()`](/de/docs/Web/API/CanvasRenderingContext2D/reset)
  - : Setzt den Rendering-Kontext zurück, einschließlich des Rückpuffers, des Zeichenstatusstapels, der Pfade und Stile.
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost) {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren gegangen ist.

### Filter

- [`CanvasRenderingContext2D.filter`](/de/docs/Web/API/CanvasRenderingContext2D/filter)
  - : Wendet einen CSS- oder SVG-Filter auf die Leinwand an, z. B. um ihre Helligkeit oder Unschärfe zu ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- {{HTMLElement("canvas")}}
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
