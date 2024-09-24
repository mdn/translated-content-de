---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
l10n:
  sourceCommit: 3dff7195e4459abfcd524e86d496cad473f04044
---

{{APIRef}}

Das **`CanvasRenderingContext2D`**-Interface, Teil der [Canvas-API](/de/docs/Web/API/Canvas_API), bietet den 2D-Rendering-Kontext für die Zeichenfläche eines {{HTMLElement("canvas")}}-Elements. Es wird zum Zeichnen von Formen, Text, Bildern und anderen Objekten verwendet.

Die Eigenschaften und Methoden des Interfaces sind im Referenzabschnitt dieser Seite beschrieben. Der [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) bietet ebenfalls mehr Erklärungen, Beispiele und Ressourcen.

Für [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) gibt es ein äquivalentes Interface, das den Rendering-Kontext bereitstellt. Der Offscreen-Rendering-Kontext erbt die meisten der gleichen Eigenschaften und Methoden wie der `CanvasRenderingContext2D` und wird ausführlicher auf der {{domxref("OffscreenCanvasRenderingContext2D")}}-Referenzseite beschrieben.

## Einfaches Beispiel

Um eine `CanvasRenderingContext2D`-Instanz zu erhalten, müssen Sie zuerst ein HTML-`<canvas>`-Element zur Verfügung haben:

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

Um den 2D-Rendering-Kontext der Leinwand zu erhalten, rufen Sie {{domxref("HTMLCanvasElement.getContext()", "getContext()")}} auf dem `<canvas>`-Element auf und übergeben `'2d'` als Argument:

```js
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
```

Mit dem Kontext können Sie alles zeichnen, was Sie möchten. Dieser Code zeichnet ein Haus:

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

- {{domxref("CanvasRenderingContext2D.isContextLost()")}}
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren ging.

### Rechtecke zeichnen

Es gibt drei Methoden, die Rechtecke direkt auf die Leinwand zeichnen.

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : Setzt alle Pixel im durch den Startpunkt _(x, y)_ und die Größe _(width, height)_ definierten Rechteck auf transparentes Schwarz und löscht dabei zuvor gezeichneten Inhalt.
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : Zeichnet ein gefülltes Rechteck an der Position _(x, y)_, dessen Größe durch _width_ und _height_ bestimmt wird.
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : Malt ein Rechteck, dessen Startpunkt bei _(x, y)_ liegt und das eine Breite _w_ und eine Höhe _h_ auf der Leinwand mit dem aktuellen Strichstil hat.

### Text zeichnen

Die folgenden Methoden zeichnen Text. Siehe auch das {{domxref("TextMetrics")}}-Objekt für Texteigenschaften.

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : Zeichnet (füllt) einen gegebenen Text an der gegebenen (x, y)-Position.
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : Zeichnet (umrandet) einen gegebenen Text an der gegebenen (x, y)-Position.
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : Gibt ein {{domxref("TextMetrics")}}-Objekt zurück.

### Linienstile

Die folgenden Methoden und Eigenschaften steuern, wie Linien gezeichnet werden.

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : Breite der Linien. Standardmäßig `1.0`.
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : Typ der Enden an den Linienenden. Mögliche Werte: `butt` (Standard), `round`, `square`.
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : Definiert den Typ der Ecken, an denen zwei Linien aufeinandertreffen. Mögliche Werte: `round`, `bevel`, `miter` (Standard).
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : Miter-Limit-Verhältnis. Standard `10`.
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : Gibt das aktuelle Strichmuster-Array zurück, das eine gerade Anzahl nicht-negativer Zahlen enthält.
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : Setzt das aktuelle Strichmuster.
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : Gibt an, wo ein Strichmuster auf einer Linie beginnt.

### Textstile

Die folgenden Eigenschaften steuern, wie Text angeordnet wird.

- {{domxref("CanvasRenderingContext2D.font")}}
  - : Schriftarteneinstellung. Standardwert: `"10px sans-serif"`.
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : Textausrichtungseinstellung. Mögliche Werte: `start` (Standard), `end`, `left`, `right`, `center`.
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : Basisausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic` (Standard), `ideographic`, `bottom`.
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit` (Standard).
- {{domxref("CanvasRenderingContext2D.letterSpacing")}}
  - : Zeichenabstand. Standard: `0px`.
- {{domxref("CanvasRenderingContext2D.fontKerning")}}
  - : Schrift-Kerning. Mögliche Werte: `auto` (Standard), `normal`, `none`.
- {{domxref("CanvasRenderingContext2D.fontStretch")}}
  - : Schriftdehnung. Mögliche Werte: `ultra-condensed`, `extra-condensed`, `condensed`, `semi-condensed`, `normal` (Standard), `semi-expanded`, `expanded`, `extra-expanded`, `ultra-expanded`.
- {{domxref("CanvasRenderingContext2D.fontVariantCaps")}}
  - : Schriftvariante Kappen. Mögliche Werte: `normal` (Standard), `small-caps`, `all-small-caps`, `petite-caps`, `all-petite-caps`, `unicase`, `titling-caps`.
- {{domxref("CanvasRenderingContext2D.textRendering")}}
  - : Text-Rendering. Mögliche Werte: `auto` (Standard), `optimizeSpeed`, `optimizeLegibility`, `geometricPrecision`.
- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
  - : Wortabstand. Standardwert: `0px`

### Füll- und Strichstile

Füllstyling wird für Farben und Stile innerhalb von Formen verwendet, und Strichstyling wird für die Linien um Formen verwendet.

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : Farbe oder Stil, die/das innerhalb der Formen verwendet werden soll. Standard `#000` (schwarz).
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : Farbe oder Stil, die/das für die Linien um Formen verwendet werden soll. Standard `#000` (schwarz).

### Verläufe und Muster

- {{domxref("CanvasRenderingContext2D.createConicGradient()")}}
  - : Erstellt einen konischen Verlauf um einen durch Koordinaten angegebenen Punkt, der durch die Parameter repräsentiert wird.
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : Erstellt einen linearen Verlauf entlang der durch die Parameter gegebenen Linie.
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : Erstellt einen radialen Verlauf, der durch die Koordinaten der beiden Kreise repräsentiert wird, die durch die Parameter gegeben sind.
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : Erstellt ein Muster mit dem angegebenen Bild. Es wiederholt die Quelle in den durch das Wiederholungsargument angegebenen Richtungen. Diese Methode gibt ein {{domxref("CanvasPattern")}} zurück.

### Schatten

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : Gibt den Unschärfeeffekt an. Standard: `0`.
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : Farbe des Schattens. Standard: komplett transparentes Schwarz.
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : Horizontale Entfernung, um die der Schatten verschoben wird. Standard: `0`.
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : Vertikale Entfernung, um die der Schatten verschoben wird. Standard: `0`.

### Pfade

Die folgenden Methoden können zur Manipulation von Pfaden von Objekten verwendet werden.

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : Startet einen neuen Pfad, indem die Liste der Unterpfade geleert wird. Rufen Sie diese Methode auf, wenn Sie einen neuen Pfad erstellen möchten.
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : Bewegt den Stiftpunkt zurück zum Start des aktuellen Unterpfads. Es versucht, eine gerade Linie vom aktuellen Punkt zum Start zu ziehen. Wenn die Form bereits geschlossen oder nur aus einem Punkt besteht, macht diese Funktion nichts.
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : Verschiebt den Startpunkt eines neuen Unterpfads zu den (x, y)-Koordinaten.
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : Verbindet den letzten Punkt im aktuellen Unterpfad mit den angegebenen (x, y)-Koordinaten durch eine gerade Linie.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : Fügt dem aktuellen Pfad eine kubische Bézierkurve hinzu.
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : Fügt dem aktuellen Pfad eine quadratische Bézierkurve hinzu.
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : Fügt dem aktuellen Pfad einen Kreisbogen hinzu.
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : Fügt dem aktuellen Pfad einen Bogen mit den angegebenen Steuerpunkten und Radius hinzu, der durch eine gerade Linie mit dem vorherigen Punkt verbunden ist.
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : Fügt dem aktuellen Pfad einen elliptischen Bogen hinzu.
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : Erstellt einen Pfad für ein Rechteck an der Position (x, y) mit einer durch _width_ und _height_ bestimmten Größe.
- {{domxref("CanvasRenderingContext2D.roundRect()")}}
  - : Erstellt einen Pfad für ein abgerundetes Rechteck mit einer angegebenen Position, Breite, Höhe und Radien an den Ecken.

### Zeichnen von Pfaden

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : Füllt die aktuellen Unterpfade mit dem aktuellen Füllstil.
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : Umrandet die aktuellen Unterpfade mit dem aktuellen Strichstil.
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : Wenn ein gegebenes Element fokussiert ist, zeichnet diese Methode einen Fokusring um den aktuellen Pfad.
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : Erstellt einen Clipping-Pfad aus den aktuellen Unterpfaden. Alles, was nach dem Aufruf von `clip()` gezeichnet wird, erscheint nur innerhalb des Clipping-Pfads. Für ein Beispiel, siehe [Clipping paths](/de/docs/Web/API/Canvas_API/Tutorial/Compositing) im Canvas-Tutorial.
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : Gibt an, ob der angegebene Punkt im aktuellen Pfad enthalten ist oder nicht.
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : Gibt an, ob der angegebene Punkt innerhalb des vom Weg gestrichenen Bereichs liegt oder nicht.

### Transformationen

Objekte im `CanvasRenderingContext2D`-Rendering-Kontext haben eine aktuelle Transformationsmatrix und Methoden zu deren Manipulation. Die Transformationsmatrix wird angewendet, wenn der aktuelle Standardpfad erstellt wird, Text, Formen und {{domxref("Path2D")}}-Objekte gemalt werden. Die unten aufgeführten Methoden bleiben aus historischen und Kompatibilitätsgründen bestehen, da in den meisten Teilen der API heutzutage {{domxref("DOMMatrix")}}-Objekte verwendet werden und in Zukunft verwendet werden sollen.

- {{domxref("CanvasRenderingContext2D.getTransform()")}}
  - : Ruft die aktuell auf den Kontext angewendete Transformationsmatrix ab.
- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : Fügt der Transformationsmatrix eine Drehung hinzu. Das Winkelargument stellt einen im Uhrzeigersinn gedrehten Winkel dar und wird in Radianten ausgedrückt.
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : Fügt den Leinwandeinheiten eine Skalentransformation hinzu, horizontal um x und vertikal um y.
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : Fügt eine Übersetzungsumwandlung hinzu, indem die Leinwand und ihr Ursprung horizontal um x und vertikal um y im Raster verschoben werden.
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix.
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : Setzt die aktuelle Transformation auf die Identitätsmatrix zurück und ruft dann die Methode `transform()` mit den gleichen Argumenten auf.
- {{domxref("CanvasRenderingContext2D.resetTransform()")}}
  - : Setzt die aktuelle Transformation auf die Identitätsmatrix zurück.

### Kompositing

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : Alphawert, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand komponiert werden. Standard `1.0` (undurchsichtig).
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : Mit `globalAlpha` angewandt, legt fest, wie Formen und Bilder auf das bestehende Bitmap gezeichnet werden.

### Zeichnen von Bildern

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : Zeichnet das angegebene Bild. Diese Methode ist in mehreren Formaten verfügbar und bietet viele flexible Anwendungsmöglichkeiten.

### Pixelmanipulation

Siehe auch das {{domxref("ImageData")}}-Objekt.

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : Erstellt ein neues, leeres {{domxref("ImageData")}}-Objekt mit den angegebenen Abmessungen. Alle Pixel im neuen Objekt sind transparent schwarz.
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : Gibt ein {{domxref("ImageData")}}-Objekt zurück, das die zugrunde liegenden Pixeldaten für den Bereich der Leinwand darstellt, der durch das Rechteck, das bei _(sx, sy)_ beginnt und eine Breite _sw_ und Höhe _sh_ hat, dargestellt wird.
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : Malt Daten aus dem angegebenen {{domxref("ImageData")}}-Objekt auf das Bitmap. Wenn ein Dirty-Rechteck angegeben wird, werden nur die Pixel aus diesem Rechteck gemalt.

### Bildglättung

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : Bildglättungsmodus; wenn deaktiviert, werden Bilder nicht geglättet, wenn sie skaliert werden.
- {{domxref("CanvasRenderingContext2D.imageSmoothingQuality")}}
  - : Ermöglicht das Festlegen der Qualität der Bildglättung.

### Der Canvas-Zustand

Der `CanvasRenderingContext2D`-Rendering-Kontext enthält eine Vielzahl von Zeichnungsstil-Zuständen (Attribute für Linienstile, Füllstile, Schattenstile, Textstile). Die folgenden Methoden helfen Ihnen, mit diesem Zustand zu arbeiten:

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : Speichert den aktuellen Zeichnungsstil-Zustand mit einem Stapel, sodass Sie jede Änderung daran mit `restore()` rückgängig machen können.
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : Stellt den Zeichnungsstil-Zustand auf das letzte Element in dem mit `save()` gespeicherten 'Zustandsstapel' wieder her.
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : Eine schreibgeschützte Rückreferenz zum {{domxref("HTMLCanvasElement")}}. Könnte [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) sein, wenn es nicht mit einem {{HTMLElement("canvas")}}-Element assoziiert ist.
- {{domxref("CanvasRenderingContext2D.getContextAttributes()")}}
  - : Gibt ein Objekt zurück, das die vom Browser verwendeten Kontexteigenschaften enthält. Kontexteigenschaften können angefordert werden, wenn {{domxref("HTMLCanvasElement.getContext()")}} verwendet wird, um den 2D-Kontext zu erstellen.
- {{domxref("CanvasRenderingContext2D.reset()")}}
  - : Setzt den Rendering-Kontext zurück, einschließlich des Backing-Buffers, des Zeichnungszustandsstapels, des Pfads und der Stile.
- {{domxref("CanvasRenderingContext2D.isContextLost()")}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der Rendering-Kontext verloren ging.

### Filter

- {{domxref("CanvasRenderingContext2D.filter")}}
  - : Wendet einen CSS- oder SVG-Filter auf die Leinwand an, z. B. um deren Helligkeit oder Unschärfe zu verändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
- {{domxref("OffscreenCanvas")}}
