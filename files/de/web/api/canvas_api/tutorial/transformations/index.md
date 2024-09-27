---
title: Transformationen
slug: Web/API/Canvas_API/Tutorial/Transformations
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

Früher in diesem Tutorial haben wir über das [Canvas-Gitter](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) und den **Koordinatenraum** gelernt. Bis jetzt haben wir nur das Standardgitter verwendet und die Größe des gesamten Canvas nach unseren Bedürfnissen angepasst. Mit Transformationen gibt es nun leistungsfähigere Möglichkeiten, den Ursprung an eine andere Position zu verschieben, das Gitter zu drehen und es sogar zu skalieren.

## Sichern und Wiederherstellen des Zustands

Bevor wir uns die Transformationsmethoden ansehen, betrachten wir zwei andere Methoden, die unverzichtbar sind, sobald Sie beginnen, immer komplexere Zeichnungen zu erstellen.

- [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den gesamten Zustand des Canvas.
- [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den zuletzt gespeicherten Canvas-Zustand wieder her.

Canvas-Zustände werden auf einem Stapel gespeichert. Jedes Mal, wenn die `save()`-Methode aufgerufen wird, wird der aktuelle Zeichenstatus auf den Stapel geschoben. Ein Zeichenstatus besteht aus

- Den angewandten Transformationen (d.h. `translate`, `rotate` und `scale` – siehe unten).
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

Sie können die `save()`-Methode so oft aufrufen, wie Sie möchten. Jedes Mal, wenn die `restore()`-Methode aufgerufen wird, wird der zuletzt gespeicherte Zustand vom Stapel genommen und alle gespeicherten Einstellungen werden wiederhergestellt.

### Ein Beispiel für die Canvas-Zustände `save` und `restore`

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // Draw a Black rectangle with default settings
  ctx.save(); // Save the original default state

  ctx.fillStyle = "#09F"; // Make changes to saved settings
  ctx.fillRect(15, 15, 120, 120); // Draw a Blue rectangle with new settings
  ctx.save(); // Save the current state

  ctx.fillStyle = "#FFF"; // Make changes to saved settings
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

Der erste Schritt ist das Zeichnen eines großen Rechtecks mit den Standardeinstellungen. Anschließend speichern wir diesen Zustand und ändern die Füllfarbe. Dann zeichnen wir das zweite und kleinere blaue Rechteck und speichern den Zustand. Erneut ändern wir einige Zeicheneinstellungen und zeichnen das dritte halbtransparente weiße Rechteck.

Bisher ist dies ziemlich ähnlich zu dem, was wir in den vorherigen Abschnitten getan haben. Sobald wir jedoch die erste `restore()`-Anweisung aufrufen, wird der oberste Zeichenstatus vom Stapel entfernt und die Einstellungen werden wiederhergestellt. Hätten wir den Zustand nicht mit `save()` gespeichert, müssten wir die Füllfarbe und Transparenz manuell ändern, um zum vorherigen Zustand zurückzukehren. Dies wäre einfach für zwei Eigenschaften, aber wenn wir mehr als das haben, würde unser Code sehr schnell sehr lang werden.

Wenn die zweite `restore()`-Anweisung aufgerufen wird, wird der ursprüngliche Zustand (der, den wir vor dem ersten Aufruf von `save` eingerichtet haben) wiederhergestellt und das letzte Rechteck wird erneut in Schwarz gezeichnet.

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "", "160")}}

## Übersetzen

Die erste der Transformationsmethoden, die wir uns ansehen, ist `translate()`. Diese Methode wird verwendet, um das Canvas und seinen Ursprung an eine andere Stelle im Gitter zu verschieben.

- [`translate(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Bewegt das Canvas und seinen Ursprung im Gitter. `x` gibt die horizontale Distanz an, die bewegt werden soll, und `y` gibt an, wie weit das Gitter vertikal verschoben werden soll.

![Das Canvas wird nach unten und rechts verschoben, oder vom Ursprungspunkt im Gitter aus um 'x' Einheiten horizontal und 'y' Einheiten vertikal übersetzt.](canvas_grid_translate.png)

Es ist ratsam, den Canvas-Zustand zu speichern, bevor Sie Transformationen durchführen. In den meisten Fällen ist es einfach einfacher, die `restore`-Methode aufzurufen, als eine Umkehrübersetzung durchzuführen, um zum ursprünglichen Zustand zurückzukehren. Auch wenn Sie innerhalb einer Schleife übersetzen und den Canvas-Zustand nicht speichern und wiederherstellen, könnten Sie am Ende einen Teil Ihrer Zeichnung verpassen, weil sie außerhalb des Canvas-Randes gezeichnet wurde.

### Ein Beispiel für `translate`

Dieses Beispiel zeigt einige der Vorteile der Übersetzung des Canvas-Ursprungs. Ohne die `translate()`-Methode würden alle Rechtecke an derselben Position (0,0) gezeichnet werden. Die `translate()`-Methode gibt uns auch die Freiheit, das Rechteck überall auf dem Canvas zu platzieren, ohne die Koordinaten in der `fillRect()`-Funktion manuell anpassen zu müssen. Dies macht es ein wenig einfacher zu verstehen und zu verwenden.

In der `draw()`-Funktion rufen wir die `fillRect()`-Funktion neunmal mit zwei `for`-Schleifen auf. In jeder Schleife wird das Canvas übersetzt, das Rechteck gezeichnet und das Canvas in seinen ursprünglichen Zustand zurückversetzt. Beachten Sie, wie der Aufruf von `fillRect()` jedes Mal dieselben Koordinaten verwendet und sich auf `translate()` verlässt, um die Zeichnungsposition anzupassen.

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
  - : Dreht das Canvas im Uhrzeigersinn um den aktuellen Ursprung um den Winkel `angle`, der in Bogenmaß angegeben ist.

![Der Standard-Ursprungspunkt befindet sich oben links, 0 Grad ist horizontal und nach rechts. Der Drehpunkt beginnt am Ursprungspunkt und geht im Uhrzeigersinn.](canvas_grid_rotate.png)

Der Drehmittelpunkt ist immer der Ursprung des Canvas. Um den Mittelpunkt zu ändern, müssen wir das Canvas mit der `translate()`-Methode verschieben.

### Ein Beispiel für `rotate`

In diesem Beispiel verwenden wir die `rotate()`-Methode, um zuerst ein Rechteck vom Canvas-Ursprung aus und dann vom Mittelpunkt des Rechtecks selbst mithilfe von `translate()` zu drehen.

> [!NOTE]
> Winkel sind in Bogenmaß, nicht in Grad. Für die Umrechnung verwenden wir: `radians = (Math.PI/180)*degrees`.

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

Um das Rechteck um seinen eigenen Mittelpunkt zu drehen, verschieben wir das Canvas zum Mittelpunkt des Rechtecks, drehen dann das Canvas, übersetzen das Canvas zurück zu 0,0 und zeichnen dann das Rechteck.

```html hidden
<canvas id="canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "", "220")}}

## Skalierung

Die nächste Transformationsmethode ist die Skalierung. Wir verwenden sie, um die Einheiten in unserem Canvas-Gitter zu vergrößern oder zu verkleinern. Dies kann verwendet werden, um verkleinerte oder vergrößerte Formen und Bitmaps zu zeichnen.

- [`scale(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Skaliert die Canvas-Einheiten um `x` horizontal und um `y` vertikal. Beide Parameter sind reelle Zahlen. Werte, die kleiner als 1,0 sind, verringern die Einheitengröße, und Werte über 1,0 vergrößern die Einheitengröße. Werte von 1,0 lassen die Einheiten in ihrer aktuellen Größe.

Mit negativen Zahlen können Sie eine Achsenspiegelung durchführen (zum Beispiel mit `translate(0,canvas.height); scale(1,-1);` erhalten Sie das bekannte kartesische Koordinatensystem mit dem Ursprung in der linken unteren Ecke).

Standardmäßig entspricht eine Einheit auf dem Canvas genau einem Pixel. Wenn wir zum Beispiel einen Skalierungsfaktor von 0,5 anwenden, wird die resultierende Einheit 0,5 Pixel und so würden Formen in halber Größe gezeichnet werden. Ähnlich würde das Einstellen des Skalierungsfaktors auf 2,0 die Einheitengröße erhöhen und eine Einheit wird nun zu zwei Pixeln. Dies führt dazu, dass Formen doppelt so groß gezeichnet werden.

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

Abschließend ermöglichen folgende Transformationsmethoden direkte Änderungen an der Transformationsmatrix.

- [`transform(a, b, c, d, e, f)`](/de/docs/Web/API/CanvasRenderingContext2D/transform)

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
  - : Horizontales Verschieben.
- `f` (`dy`)
  - : Vertikales Verschieben.
- [`setTransform(a, b, c, d, e, f)`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die `transform()`-Methode mit denselben Argumenten auf. Dies hebt im Grunde die aktuelle Transformation auf und setzt dann die angegebene Transformation in einem Schritt.
- [`resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück. Dies entspricht dem Aufruf: `ctx.setTransform(1, 0, 0, 1, 0, 0);`

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
