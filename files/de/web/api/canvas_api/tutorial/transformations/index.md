---
title: Transformationen
slug: Web/API/Canvas_API/Tutorial/Transformations
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

Früher in diesem Tutorial haben wir über das [Canvas-Raster](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) und den **Koordinatenraum** gesprochen. Bisher haben wir nur das Standardraster verwendet und die Größe der gesamten Leinwand nach unseren Bedürfnissen geändert. Mit Transformationen gibt es mächtigere Wege, den Ursprung an eine andere Position zu verschieben, das Raster zu drehen und sogar zu skalieren.

## Speichern und Wiederherstellen des Zustands

Bevor wir uns die Transformationsmethoden ansehen, werfen wir einen Blick auf zwei andere Methoden, die unverzichtbar sind, wenn Sie anfangen, immer komplexere Zeichnungen zu erstellen.

- {{domxref("CanvasRenderingContext2D.save", "save()")}}
  - : Speichert den gesamten Zustand des Canvas.
- {{domxref("CanvasRenderingContext2D.restore", "restore()")}}
  - : Stellt den zuletzt gespeicherten Canvas-Zustand wieder her.

Canvas-Zustände werden in einem Stapel gespeichert. Jedes Mal, wenn die `save()`-Methode aufgerufen wird, wird der aktuelle Zeichenzustand auf den Stapel geschoben. Ein Zeichenzustand besteht aus

- Den angewendeten Transformationen (d. h. `translate`, `rotate` und `scale` – siehe unten).
- Den aktuellen Werten der folgenden Attribute:
  - {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}
  - {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}
  - {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}
  - {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}
  - {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}
  - {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}
  - {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}
  - {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}
  - {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}
  - {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}
  - {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}
  - {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}
  - {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}
  - {{domxref("CanvasRenderingContext2D.font", "font")}}
  - {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}
  - {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}
  - {{domxref("CanvasRenderingContext2D.direction", "direction")}}
  - {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.
- Dem aktuellen [Clipping-Pfad](/de/docs/Web/API/Canvas_API/Tutorial/Compositing#clipping_paths), den wir im nächsten Abschnitt sehen werden.

Sie können die `save()`-Methode so oft aufrufen, wie Sie möchten. Jedes Mal, wenn die `restore()`-Methode aufgerufen wird, wird der zuletzt gespeicherte Zustand vom Stapel entfernt und alle gespeicherten Einstellungen werden wiederhergestellt.

### Ein Beispiel für `save` und `restore` des Canvas-Zustands

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // Zeichnen eines schwarzen Rechtecks mit Standardeinstellungen
  ctx.save(); // Speichert den ursprünglichen Standardzustand

  ctx.fillStyle = "#09F"; // Änderungen an gespeicherten Einstellungen vornehmen
  ctx.fillRect(15, 15, 120, 120); // Zeichnen eines blauen Rechtecks mit neuen Einstellungen
  ctx.save(); // Speichert den aktuellen Zustand

  ctx.fillStyle = "#FFF"; // Änderungen an gespeicherten Einstellungen vornehmen
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90); // Zeichnen eines 50%-weißen Rechtecks mit neuesten Einstellungen

  ctx.restore(); // Zum vorherigen Zustand wiederherstellen
  ctx.fillRect(45, 45, 60, 60); // Zeichnen eines Rechtecks mit wiederhergestellter blauer Einstellung

  ctx.restore(); // Zum ursprünglichen Zustand wiederherstellen
  ctx.fillRect(60, 60, 30, 30); // Zeichnen eines Rechtecks mit wiederhergestellter schwarzer Einstellung
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Der erste Schritt besteht darin, ein großes Rechteck mit den Standardeinstellungen zu zeichnen. Als Nächstes speichern wir diesen Zustand und nehmen Änderungen an der Füllfarbe vor. Dann zeichnen wir das zweite, kleinere blaue Rechteck und speichern den Zustand. Wieder ändern wir einige Zeichen-Einstellungen und zeichnen das dritte halbtransparente weiße Rechteck.

Bis jetzt ist dies dem, was wir in den vorherigen Abschnitten gemacht haben, ziemlich ähnlich. Sobald wir jedoch die erste `restore()`-Anweisung aufrufen, wird der oberste Zeichenzustand vom Stapel entfernt und die Einstellungen werden wiederhergestellt. Wenn wir den Zustand nicht mit `save()` gespeichert hätten, müssten wir die Füllfarbe und Transparenz manuell ändern, um zum vorherigen Zustand zurückzukehren. Dies wäre bei zwei Eigenschaften einfach, aber wenn wir mehr als das haben, würde unser Code sehr schnell sehr lang werden.

Wenn die zweite `restore()`-Anweisung aufgerufen wird, wird der ursprüngliche Zustand (der, den wir vor dem ersten Aufruf von `save` eingerichtet haben) wiederhergestellt und das letzte Rechteck wird erneut in Schwarz gezeichnet.

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "", "160")}}

## Übersetzen

Die erste der Transformationsmethoden, die wir uns ansehen werden, ist `translate()`. Diese Methode wird verwendet, um die Leinwand und ihren Ursprung an einen anderen Punkt im Raster zu verschieben.

- {{domxref("CanvasRenderingContext2D.translate", "translate(x, y)")}}
  - : Verschiebt die Leinwand und ihren Ursprung im Raster. `x` gibt die horizontale Verschiebung an, und `y` gibt an, wie weit das Raster vertikal verschoben wird.

![Das Canvas wird nach unten und rechts gedrückt oder vom Ursprungspunkt auf dem Raster um 'x'-Einheiten horizontal und 'y'-Einheiten vertikal verschoben.](canvas_grid_translate.png)

Es ist eine gute Idee, den Canvas-Zustand zu speichern, bevor Sie irgendwelche Transformationen durchführen. In den meisten Fällen ist es einfach leichter, die `restore`-Methode aufzurufen, als eine Rückübersetzung durchführen zu müssen, um zum ursprünglichen Zustand zurückzukehren. Wenn Sie in einer Schleife übersetzen und den Canvas-Zustand nicht speichern und wiederherstellen, könnten Sie Teile Ihrer Zeichnung verlieren, weil sie außerhalb des Randes des Canvas gezeichnet wurde.

### Ein Beispiel für `translate`

Dieses Beispiel zeigt einige der Vorteile der Übersetzung des Canvas-Ursprungs. Ohne die `translate()`-Methode würden alle Rechtecke an der gleichen Position (0,0) gezeichnet. Die `translate()`-Methode gibt uns auch die Freiheit, das Rechteck an beliebiger Stelle auf dem Canvas zu platzieren, ohne die Koordinaten in der `fillRect()`-Funktion manuell anpassen zu müssen. Dies macht es ein wenig einfacher zu verstehen und zu verwenden.

In der `draw()`-Funktion rufen wir die `fillRect()`-Funktion neunmal mit zwei `for`-Schleifen auf. In jeder Schleife wird der Canvas übersetzt, das Rechteck gezeichnet und der Canvas in seinen ursprünglichen Zustand zurückversetzt. Beachten Sie, wie der Aufruf von `fillRect()` jedes Mal dieselben Koordinaten verwendet und darauf vertraut, dass `translate()` die Zeichenposition anpasst.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = `rgb(${51 * i} ${255 - 51 * i} 255)`;
      ctx.translate(10 + j * 50, 10 + i * 50);
      ctx.fillRect(0, 0, 25, 25);
      ctx.restore();
    }
  }
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_translate_example", "", "160")}}

## Drehen

Die zweite Transformationsmethode ist `rotate()`. Wir verwenden sie, um die Leinwand um den aktuellen Ursprung zu drehen.

- {{domxref("CanvasRenderingContext2D.rotate", "rotate(angle)")}}
  - : Dreht die Leinwand im Uhrzeigersinn um den aktuellen Ursprung um den Winkel, der durch die Anzahl der Bogenmaß angegeben wird.

![Der Standard-Ursprungspunkt befindet sich oben links, 0 Grad sind horizontal und rechts. Der Rotationspunkt beginnt am Ursprungspunkt und bewegt sich im Uhrzeigersinn.](canvas_grid_rotate.png)

Der Rotationsmittelpunkt ist immer der Ursprung des Canvas. Um den Mittelpunkt zu ändern, müssen wir die Leinwand mit der Methode `translate()` verschieben.

### Ein Beispiel für `rotate`

In diesem Beispiel verwenden wir die `rotate()`-Methode, um ein Rechteck zuerst vom Canvas-Ursprung und dann vom Mittelpunkt des Rechtecks selbst mithilfe von `translate()` zu drehen.

> [!NOTE]
> Winkel sind im Bogenmaß, nicht in Grad. Umzurechnen verwenden wir: `radians = (Math.PI/180)*degrees`.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // linke Rechtecke, drehen vom Canvas-Ursprung
  ctx.save();
  // blaues Rechteck
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // graues Rechteck
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // rechte Rechtecke, drehen vom Rechteckzentrum
  // blaues Rechteck zeichnen
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // zum Rechteckzentrum verschieben
  // x = x + 0.5 * Breite
  // y = y + 0.5 * Höhe
  ctx.rotate((Math.PI / 180) * 25); // drehen
  ctx.translate(-200, -80); // zurück verschieben

  // graues Rechteck zeichnen
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
```

Um das Rechteck um sein eigenes Zentrum zu drehen, verschieben wir die Leinwand zum Zentrum des Rechtecks, drehen dann die Leinwand, verschieben dann die Leinwand zurück zu 0,0 und zeichnen dann das Rechteck.

```html hidden
<canvas id="canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "", "220")}}

## Skalieren

Die nächste Transformationsmethode ist das Skalieren. Wir verwenden sie, um die Einheiten in unserem Canvas-Raster zu vergrößern oder zu verkleinern. Dies kann verwendet werden, um verkleinerte oder vergrößerte Formen und Bitmaps zu zeichnen.

- {{domxref("CanvasRenderingContext2D.scale", "scale(x, y)")}}
  - : Skaliert die Canvas-Einheiten um x horizontal und um y vertikal. Beide Parameter sind reelle Zahlen. Werte, die kleiner als 1.0 sind, verkleinern die Einheitengröße, und Werte über 1.0 vergrößern die Einheitengröße. Werte von 1.0 lassen die Einheiten gleich groß.

Durch die Verwendung negativer Zahlen können Sie eine Achsenspiegelung durchführen (zum Beispiel durch die Verwendung von `translate(0,canvas.height); scale(1,-1);` erhalten Sie das bekannte kartesische Koordinatensystem, mit dem Ursprung in der unteren linken Ecke).

Standardmäßig ist eine Einheit auf dem Canvas genau ein Pixel. Wenn wir beispielsweise einen Skalierungsfaktor von 0.5 anwenden, wird die resultierende Einheit 0.5 Pixel groß und somit würden Formen in halber Größe gezeichnet. Ähnlich würde das Setzen des Skalierungsfaktors auf 2.0 die Einheitengröße verdoppeln und eine Einheit würde nun zwei Pixel groß werden. Dadurch werden Formen doppelt so groß gezeichnet.

### Ein Beispiel für `scale`

In diesem letzten Beispiel werden wir Formen mit unterschiedlichen Skalierungsfaktoren zeichnen.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // ein einfaches Rechteck zeichnen, aber skalieren
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // horizontal spiegeln
  ctx.scale(-1, 1);
  ctx.font = "48px serif";
  ctx.fillText("MDN", -135, 120);
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_scale_example", "", "160")}}

## Transformationen

Schließlich ermöglichen die folgenden Transformationsmethoden Modifikationen direkt an der Transformationsmatrix.

- {{domxref("CanvasRenderingContext2D.transform", "transform(a, b, c, d, e, f)")}}

  - : Multipliziert die aktuelle Transformationsmatrix mit der Matrix, die durch ihre Argumente beschrieben wird. Die Transformationsmatrix wird beschrieben durch:

    <!-- prettier-ignore-start -->

    <math display="block">
      <semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics>
    </math>
    <!-- prettier-ignore-end -->

    Wenn eines der Argumente [`Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity) ist, muss die Transformationsmatrix als unendlich markiert werden, anstatt dass die Methode eine Ausnahme auslöst.

Die Parameter dieser Funktion sind:

- `a` (`m11`)
  - : Horizontale Skalierung.
- `b` (`m12`)
  - : Horizontale Scherung.
- `c` (`m21`)
  - : Vertikale Scherung.
- `d` (`m22`)
  - : Vertikale Skalierung.
- `e` (`dx`)
  - : Horizontale Verschiebung.
- `f` (`dy`)
  - : Vertikale Verschiebung.
- {{domxref("CanvasRenderingContext2D.setTransform", "setTransform(a, b, c, d, e, f)")}}
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit denselben Argumenten auf. Dies hebt im Wesentlichen die aktuelle Transformation auf und setzt die angegebene Transformation in einem Schritt.
- {{domxref("CanvasRenderingContext2D.resetTransform", "resetTransform()")}}
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück. Dies entspricht dem Aufruf von: `ctx.setTransform(1, 0, 0, 1, 0, 0);`

### Beispiel für `transform` und `setTransform`

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  const sin = Math.sin(Math.PI / 6);
  const cos = Math.cos(Math.PI / 6);
  ctx.translate(100, 100);
  let c = 0;
  for (let i = 0; i <= 12; i++) {
    c = Math.floor((255 / 12) * i);
    ctx.fillStyle = `rgb(${c} ${c} ${c})`;
    ctx.fillRect(0, 0, 100, 10);
    ctx.transform(cos, sin, -sin, cos, 0, 0);
  }

  ctx.setTransform(-1, 0, 0, 1, 100, 100);
  ctx.fillStyle = "rgb(255 128 255 / 50%)";
  ctx.fillRect(0, 50, 100, 100);
}
```

```html hidden
<canvas id="canvas" width="200" height="250"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Example_for_transform_and_setTransform", "", "260")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}
