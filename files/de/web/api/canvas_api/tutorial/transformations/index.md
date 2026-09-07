---
title: Transformationen
slug: Web/API/Canvas_API/Tutorial/Transformations
l10n:
  sourceCommit: 81a384e18b61c1d1b23d7f58f1fbd8ec3af45558
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}

Zuvor in diesem Tutorial haben wir das [Canvas-Raster](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) und den **Koordinatenraum** kennengelernt. Bisher haben wir nur das Standardraster verwendet und die Größe des gesamten Canvas an unsere Bedürfnisse angepasst. Mit Transformationen gibt es leistungsfähigere Möglichkeiten, den Ursprung an eine andere Position zu verschieben, das Raster zu drehen und sogar zu skalieren.

## Zustand speichern und wiederherstellen

Bevor wir uns die Transformationsmethoden ansehen, betrachten wir zwei weitere Methoden, die unverzichtbar sind, sobald Sie beginnen, immer komplexere Zeichnungen zu erstellen.

- [`save()`](/de/docs/Web/API/CanvasRenderingContext2D/save)
  - : Speichert den gesamten Zustand des Canvas.
- [`restore()`](/de/docs/Web/API/CanvasRenderingContext2D/restore)
  - : Stellt den zuletzt gespeicherten Canvas-Zustand wieder her.

Canvas-Zustände werden in einem Stack gespeichert. Jedes Mal, wenn die Methode `save()` aufgerufen wird, wird der aktuelle Zeichenzustand auf den Stack gelegt. Ein Zeichenzustand besteht aus:

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
- Dem aktuellen [Beschneidungspfad](/de/docs/Web/API/Canvas_API/Tutorial/Compositing#clipping_paths), den wir im nächsten Abschnitt betrachten werden.

Sie können die Methode `save()` beliebig oft aufrufen. Jedes Mal, wenn die Methode `restore()` aufgerufen wird, wird der zuletzt gespeicherte Zustand vom Stack entfernt und alle gespeicherten Einstellungen werden wiederhergestellt.

### Ein Beispiel für einen Canvas-Zustand mit `save` und `restore`

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

  ctx.fillRect(0, 0, 150, 150); // Draw a Black rectangle with default settings
  ctx.save(); // Save the original default state

  ctx.fillStyle = "#0099ff"; // Make changes to saved settings
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
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Der erste Schritt besteht darin, ein großes Rechteck mit den Standardeinstellungen zu zeichnen. Anschließend speichern wir diesen Zustand und ändern die Füllfarbe. Dann zeichnen wir das zweite, kleinere blaue Rechteck und speichern den Zustand. Erneut ändern wir einige Zeicheneinstellungen und zeichnen das dritte halbtransparente weiße Rechteck.

Bis hierher ist dies ziemlich ähnlich zu dem, was wir in den vorherigen Abschnitten gemacht haben. Sobald wir jedoch die erste `restore()`-Anweisung aufrufen, wird der oberste Zeichenzustand vom Stack entfernt und die Einstellungen werden wiederhergestellt. Hätten wir den Zustand nicht mit `save()` gespeichert, müssten wir die Füllfarbe und Transparenz manuell ändern, um zum vorherigen Zustand zurückzukehren. Bei zwei Eigenschaften wäre das einfach, bei mehr Eigenschaften würde unser Code jedoch sehr schnell sehr lang werden.

Wenn die zweite `restore()`-Anweisung aufgerufen wird, wird der ursprüngliche Zustand wiederhergestellt – also der Zustand, den wir vor dem ersten Aufruf von `save` eingerichtet haben – und das letzte Rechteck wird erneut in Schwarz gezeichnet.

{{EmbedLiveSample("A_save_and_restore_canvas_state_example", "", "160")}}

## Verschieben

Die erste Transformationsmethode, die wir betrachten, ist `translate()`. Diese Methode wird verwendet, um das Canvas und seinen Ursprung an einen anderen Punkt im Raster zu verschieben.

- [`translate(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/translate)
  - : Verschiebt das Canvas und seinen Ursprung im Raster. `x` gibt die horizontale Verschiebungsdistanz an, und `y` gibt an, um wie weit das Raster vertikal verschoben werden soll.

![Das Canvas wird von seinem Ursprungspunkt im Raster um „x“-Einheiten horizontal und „y“-Einheiten vertikal nach unten und rechts verschoben oder translatiert.](canvas_grid_translate.png)

Es ist eine gute Idee, den Canvas-Zustand vor dem Durchführen von Transformationen zu speichern. In den meisten Fällen ist es einfach leichter, die Methode `restore` aufzurufen, als eine umgekehrte Verschiebung durchführen zu müssen, um zum ursprünglichen Zustand zurückzukehren. Wenn Sie außerdem innerhalb einer Schleife verschieben und den Canvas-Zustand nicht speichern und wiederherstellen, kann es passieren, dass ein Teil Ihrer Zeichnung fehlt, weil er außerhalb des Canvas-Rands gezeichnet wurde.

### Ein `translate`-Beispiel

Dieses Beispiel demonstriert einige der Vorteile des Verschiebens des Canvas-Ursprungs. Ohne die Methode `translate()` würden alle Rechtecke an derselben Position (0,0) gezeichnet. Die Methode `translate()` gibt uns außerdem die Freiheit, das Rechteck an einer beliebigen Stelle auf dem Canvas zu platzieren, ohne die Koordinaten in der Funktion `fillRect()` manuell anpassen zu müssen. Das macht die Verwendung etwas leichter verständlich.

In der Funktion `draw()` rufen wir die Funktion `fillRect()` mithilfe von zwei `for`-Schleifen neunmal auf. In jeder Schleife wird das Canvas verschoben, das Rechteck gezeichnet und das Canvas in seinen ursprünglichen Zustand zurückversetzt. Beachten Sie, dass der Aufruf von `fillRect()` jedes Mal dieselben Koordinaten verwendet und sich auf `translate()` verlässt, um die Zeichenposition anzupassen.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
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
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_translate_example", "", "160")}}

## Drehen

Die zweite Transformationsmethode ist `rotate()`. Wir verwenden sie, um das Canvas um den aktuellen Ursprung zu drehen.

- [`rotate(angle)`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - : Dreht das Canvas im Uhrzeigersinn um den aktuellen Ursprung um die durch `angle` angegebene Anzahl von Radiant.

![Der Standardursprungspunkt befindet sich oben links, 0 Grad bedeutet horizontal nach rechts. Der Drehpunkt beginnt am Ursprungspunkt und verläuft im Uhrzeigersinn.](canvas_grid_rotate.png)

Der Drehmittelpunkt ist immer der Canvas-Ursprung. Um den Mittelpunkt zu ändern, müssen wir das Canvas mithilfe der Methode `translate()` verschieben.

### Ein `rotate`-Beispiel

In diesem Beispiel verwenden wir die Methode `rotate()`, um ein Rechteck zunächst vom Canvas-Ursprung und dann mithilfe von `translate()` vom Mittelpunkt des Rechtecks selbst aus zu drehen.

> [!NOTE]
> Winkel werden in Radiant und nicht in Grad angegeben. Zur Umrechnung verwenden wir: `radians = (Math.PI/180)*degrees`.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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

Um das Rechteck um seinen eigenen Mittelpunkt zu drehen, verschieben wir das Canvas zum Mittelpunkt des Rechtecks, drehen dann das Canvas, verschieben das Canvas anschließend zurück zu 0,0 und zeichnen dann das Rechteck.

```html hidden
<canvas id="my-canvas" width="300" height="200"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_rotate_example", "", "220")}}

## Skalieren

Die nächste Transformationsmethode ist das Skalieren. Wir verwenden sie, um die Einheiten in unserem Canvas-Raster zu vergrößern oder zu verkleinern. Dies kann verwendet werden, um verkleinerte oder vergrößerte Formen und Bitmaps zu zeichnen.

- [`scale(x, y)`](/de/docs/Web/API/CanvasRenderingContext2D/scale)
  - : Skaliert die Canvas-Einheiten horizontal um x und vertikal um y. Beide Parameter sind reelle Zahlen. Werte kleiner als 1.0 verkleinern die Einheitengröße, und Werte über 1.0 vergrößern sie. Werte von 1.0 lassen die Einheiten unverändert groß.

Mit negativen Zahlen können Sie eine Achsenspiegelung durchführen (wenn Sie beispielsweise `translate(0,canvas.height); scale(1,-1);` verwenden, erhalten Sie das bekannte kartesische Koordinatensystem mit dem Ursprung in der unteren linken Ecke).

Standardmäßig entspricht eine Einheit auf dem Canvas genau einem Pixel. Wenn wir beispielsweise einen Skalierungsfaktor von 0.5 anwenden, wird die resultierende Einheit 0.5 Pixel groß und Formen werden daher in halber Größe gezeichnet. Entsprechend würde ein Skalierungsfaktor von 2.0 die Einheitengröße erhöhen, sodass eine Einheit nun zwei Pixel entspricht. Dadurch werden Formen doppelt so groß gezeichnet.

### Ein `scale`-Beispiel

In diesem letzten Beispiel zeichnen wir Formen mit verschiedenen Skalierungsfaktoren.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_scale_example", "", "160")}}

## Transformationen

Schließlich ermöglichen die folgenden Transformationsmethoden direkte Änderungen an der Transformationsmatrix.

- [`transform(a, b, c, d, e, f)`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - : Multipliziert die aktuelle Transformationsmatrix mit der durch ihre Argumente beschriebenen Matrix. Die Transformationsmatrix wird beschrieben durch:

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
- [`setTransform(a, b, c, d, e, f)`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück und ruft dann die Methode `transform()` mit denselben Argumenten auf. Dadurch wird die aktuelle Transformation im Wesentlichen rückgängig gemacht und anschließend die angegebene Transformation festgelegt – alles in einem Schritt.
- [`resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
  - : Setzt die aktuelle Transformation auf die Einheitsmatrix zurück. Dies entspricht dem Aufruf: `ctx.setTransform(1, 0, 0, 1, 0, 0);`

### Beispiel für `transform` und `setTransform`

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");

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
<canvas id="my-canvas" width="200" height="250"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Example_for_transform_and_setTransform", "", "260")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Using_images", "Web/API/Canvas_API/Tutorial/Compositing")}}
