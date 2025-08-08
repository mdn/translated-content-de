---
title: Transformationen
slug: Web/API/Canvas_API/Tutorial/Transformations
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

Früher in diesem Tutorial haben wir über das [Canvas-Raster](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) und den **Koordinatenraum** gelernt. Bisher haben wir nur das Standardraster verwendet und die Größe des gesamten Canvas nach unseren Bedürfnissen angepasst. Mit Transformationen gibt es leistungsstärkere Möglichkeiten, um den Ursprung an eine andere Position zu verschieben, das Raster zu drehen und es sogar zu skalieren.

## Speichern und Wiederherstellen von Zuständen

Bevor wir uns die Transformationsmethoden ansehen, schauen wir uns zwei weitere Methoden an, die unverzichtbar sind, wenn Sie anfangen, immer komplexere Zeichnungen zu erzeugen.

- [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den gesamten Zustand des Canvas.
- [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den zuletzt gespeicherten Canvas-Zustand wieder her.

Canvas-Zustände werden in einem Stapel gespeichert. Jedes Mal, wenn die `save()`-Methode aufgerufen wird, wird der aktuelle Zeichenstatus auf den Stapel gelegt. Ein Zeichenstatus besteht aus

- Den angewendeten Transformationen (d.h. `translate`, `rotate` und `scale` – siehe unten).
- Den aktuellen Werten der folgenden Attribute:
  - [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
  - [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)
  - [`globalAlpha`](/de/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
  - [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
  - [`lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
  - [`lineJoin`](/de/docs/Web/API/CanvasRenderingContext2D/lineJoin)
  - [`miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit)
  - [`lineDashOffset`](/de/docs/Web/API/CanvasRenderingContext2D/lineDashOffset)
  - [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX)
  - [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY)
  - [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur)
  - [`shadowColor`](/de/docs/Web/API/CanvasRenderingContext2D/shadowColor)
  - [`globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).
- Dem aktuellen [Clipping-Pfad](/de/docs/Web/API/Canvas_API/Tutorial/Compositing#clipping_paths), den wir im nächsten Abschnitt sehen werden.

Sie können die `save()`-Methode so oft aufrufen, wie Sie möchten. Jedes Mal, wenn die `restore()`-Methode aufgerufen wird, wird der zuletzt gespeicherte Zustand aus dem Stapel genommen und alle gespeicherten Einstellungen werden wiederhergestellt.

### Ein Beispiel für `save` und `restore` des Canvas-Zustands

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // Draw a Black rectangle with default settings
  ctx.save(); // Save the original default state

  ctx.fillStyle = "#09F"; // Make changes to saved settings
  ctx.fillRect(15, 15, 120, 120); // Draw a Blue rectangle with new settings
  ctx.save(); // Save the current state

  ctx.fillStyle = "white"; // Make changes to saved settings
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90); // Draw a 50%-White rectangle with newest settings

  ctx.restore(); // Restore to previous state
  ctx.fillRect(45, 45, 60, 60); // Draw a rectangle with restored Blue setting

  ctx.restore(); // Restore to original state
  ctx.fillRect(60, 60, 30, 30); // Draw a rectangle with restored Black setting
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Der erste Schritt ist, ein großes Rechteck mit den Standardeinstellungen zu zeichnen. Als nächstes speichern wir diesen Zustand und ändern die Füllfarbe. Wir zeichnen dann das zweite kleinere blaue Rechteck und speichern den Zustand. Erneut ändern wir einige Einstellungen der Zeichnung und zeichnen das dritte halbtransparente weiße Rechteck.

Bisher ist dies ziemlich ähnlich zu dem, was wir in den vorherigen Abschnitten gemacht haben. Sobald wir jedoch die erste `restore()`-Anweisung ausführen, wird der oberste Zeichenstatus aus dem Stapel entfernt und die Einstellungen werden wiederhergestellt. Hätten wir den Zustand nicht mit `save()` gespeichert, müssten wir die Füllfarbe und Transparenz manuell ändern, um zum vorherigen Zustand zurückzukehren. Dies wäre einfach für zwei Eigenschaften, aber wenn wir mehr als das haben, würde unser Code sehr schnell sehr lang werden.

Wenn die zweite `restore()`-Anweisung aufgerufen wird, wird der ursprüngliche Zustand (der, den wir vor dem ersten Aufruf von `save()` eingerichtet haben) wiederhergestellt, und das letzte Rechteck wird erneut in Schwarz gezeichnet.

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "", "160")}}

## Übersetzen

Die erste der Transformationsmethoden, die wir uns ansehen werden, ist `translate()`. Diese Methode wird verwendet, um das Canvas und seinen Ursprung an einen anderen Punkt im Raster zu verschieben.

- [`translate(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Verschiebt das Canvas und seinen Ursprung auf dem Raster. `x` gibt die horizontale Distanz an, um die das Raster verschoben wird, und `y` gibt an, wie weit es vertikal verschoben wird.

![Das Canvas wird vom Ursprungspunkt im Raster um 'x' Einheiten horizontal und 'y' Einheiten vertikal nach unten und rechts gedrückt, oder übersetzt.](canvas_grid_translate.png)

Es ist eine gute Idee, den Canvas-Zustand zu speichern, bevor Sie Transformationen durchführen. In den meisten Fällen ist es einfach leichter, die `restore`-Methode aufzurufen, als eine Rückwärtsübersetzung durchzuführen, um zum ursprünglichen Zustand zurückzukehren. Wenn Sie außerdem in einer Schleife übersetzen und den Canvas-Zustand nicht speichern und wiederherstellen, könnten Teile Ihrer Zeichnung fehlen, weil sie außerhalb des Canvas-Rands gezeichnet wurden.

### Ein Beispiel für `translate`

Dieses Beispiel zeigt einige der Vorteile der Übersetzung des Canvas-Ursprungs. Ohne die `translate()`-Methode würden alle Rechtecke an derselben Position (0,0) gezeichnet. Die `translate()`-Methode gibt uns auch die Freiheit, das Rechteck überall auf dem Canvas zu platzieren, ohne die Koordinaten in der `fillRect()`-Funktion manuell anpassen zu müssen. Dies macht es ein wenig einfacher zu verstehen und zu verwenden.

In der `draw()`-Funktion rufen wir die `fillRect()`-Funktion neun Mal mit zwei `for`-Schleifen auf. In jeder Schleife wird das Canvas übersetzt, das Rechteck gezeichnet und das Canvas in seinen ursprünglichen Zustand zurückversetzt. Beachten Sie, wie der Aufruf von `fillRect()` jedes Mal dieselben Koordinaten verwendet und sich auf `translate()` verlässt, um die Position der Zeichnung anzupassen.

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

## Rotieren

Die zweite Transformationsmethode ist `rotate()`. Wir verwenden sie, um das Canvas um den aktuellen Ursprung zu drehen.

- [`rotate(angle)`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Dreht das Canvas im Uhrzeigersinn um den aktuellen Ursprung um die Anzahl der `angle`-Radianten.

![Der Standard-Ursprungspunkt befindet sich oben links, 0 Grad ist horizontal und nach rechts gerichtet. Der Drehpunkt beginnt am Ursprungspunkt und geht im Uhrzeigersinn.](canvas_grid_rotate.png)

Der Rotationsmittelpunkt ist immer der Ursprung des Canvas. Um den Mittelpunkt zu ändern, müssen wir das Canvas mit der `translate()`-Methode verschieben.

### Ein Beispiel für `rotate`

In diesem Beispiel verwenden wir die `rotate()`-Methode, um zunächst ein Rechteck vom Canvas-Ursprung und dann vom Zentrum des Rechtecks selbst mit Hilfe von `translate()` zu drehen.

> [!NOTE]
> Winkel sind in Radianten, nicht in Grad. Zur Umrechnung verwenden wir: `radians = (Math.PI/180)*degrees`.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // left rectangles, rotate from canvas origin
  ctx.save();
  // blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(30, 30, 100, 100);
  ctx.rotate((Math.PI / 180) * 25);
  // grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(30, 30, 100, 100);
  ctx.restore();

  // right rectangles, rotate from rectangle center
  // draw blue rect
  ctx.fillStyle = "#0095DD";
  ctx.fillRect(150, 30, 100, 100);

  ctx.translate(200, 80); // translate to rectangle center
  // x = x + 0.5 * width
  // y = y + 0.5 * height
  ctx.rotate((Math.PI / 180) * 25); // rotate
  ctx.translate(-200, -80); // translate back

  // draw grey rect
  ctx.fillStyle = "#4D4E53";
  ctx.fillRect(150, 30, 100, 100);
}
```

Um das Rechteck um sein eigenes Zentrum zu drehen, verschieben wir das Canvas zum Zentrum des Rechtecks, dann drehen wir das Canvas, dann verschieben wir das Canvas zurück zu 0,0 und zeichnen das Rechteck.

```html hidden
<canvas id="canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "", "220")}}

## Skalieren

Die nächste Transformationsmethode ist das Skalieren. Wir verwenden sie, um die Einheiten in unserem Canvas-Raster zu vergrößern oder zu verkleinern. Dies kann zum Zeichnen verkleinerter oder vergrößerter Formen und Bitmaps verwendet werden.

- [`scale(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Skaliert die Canvas-Einheiten horizontal um x und vertikal um y. Beide Parameter sind reale Zahlen. Werte, die kleiner als 1,0 sind, verkleinern die Einheitsgröße, und Werte über 1,0 vergrößern die Einheitsgröße. Werte von 1,0 lassen die Einheiten gleich groß.

Mit negativen Zahlen können Sie eine Achsenspiegelung durchführen (zum Beispiel mit `translate(0,canvas.height); scale(1,-1);` erhalten Sie das bekannte kartesische Koordinatensystem, mit dem Ursprung in der unteren linken Ecke).

Standardmäßig ist eine Einheit auf dem Canvas genau ein Pixel. Wenn wir beispielsweise einen Skalierungsfaktor von 0,5 anwenden, würde die resultierende Einheit 0,5 Pixel groß werden und so würden Formen in halber Größe gezeichnet. Auf ähnliche Weise würde das Setzen des Skalierungsfaktors auf 2,0 die Einheitsgröße vergrößern und eine Einheit würde nun zwei Pixel groß. Dies führt dazu, dass Formen doppelt so groß gezeichnet werden.

### Ein Beispiel für `scale`

In diesem letzten Beispiel zeichnen wir Formen mit unterschiedlichen Skalierungsfaktoren.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  // draw a simple rectangle, but scale it.
  ctx.save();
  ctx.scale(10, 3);
  ctx.fillRect(1, 10, 10, 10);
  ctx.restore();

  // mirror horizontally
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

Schließlich erlauben die folgenden Transformationsmethoden direkte Modifikationen an der Transformationsmatrix.

- [`transform(a, b, c, d, e, f)`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix. Die Transformationsmatrix wird durch folgende Darstellung beschrieben:

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
  - : Horizontales Verschieben.
- `f` (`dy`)
  - : Vertikales Verschieben.
- [`setTransform(a, b, c, d, e, f)`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit den gleichen Argumenten auf. Dies macht im Grunde die aktuelle Transformation rückgängig und setzt die angegebene Transformation in einem Schritt fest.
- [`resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
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
