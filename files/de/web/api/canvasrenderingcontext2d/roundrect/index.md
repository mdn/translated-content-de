---
title: "CanvasRenderingContext2D: roundRect()-Methode"
short-title: roundRect()
slug: Web/API/CanvasRenderingContext2D/roundRect
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("Canvas API")}}

Die Methode **`CanvasRenderingContext2D.roundRect()`** der Canvas-2D-API fügt dem aktuellen Pfad ein abgerundetes Rechteck hinzu.

Die Radien der Ecken können ähnlich wie bei der CSS-Eigenschaft {{cssxref("border-radius")}} angegeben werden.

Wie andere Methoden, die den aktuellen Pfad verändern, zeichnet diese Methode selbst nichts. Um das abgerundete Rechteck auf einem Canvas zu zeichnen, können Sie die Methoden [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden.

## Syntax

```js-nolint
roundRect(x, y, width, height, radii)
```

### Parameter

- `x`
  - : Die x-Koordinate des Startpunkts des Rechtecks in Pixeln.
- `y`
  - : Die y-Koordinate des Startpunkts des Rechtecks in Pixeln.
- `width`
  - : Die Breite des Rechtecks. Positive Werte erstrecken sich nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte erstrecken sich nach unten, negative nach oben.
- `radii`
  - : Eine Zahl oder Liste, die die Radien der Kreisbögen für die Ecken des Rechtecks angibt.
    Anzahl und Reihenfolge der Radien entsprechen bei _positiven_ Werten für `width` und `height` denen der CSS-Eigenschaft {{cssxref("border-radius")}}:
    - `all-corners`
    - `[all-corners]`
    - `[top-left-and-bottom-right, top-right-and-bottom-left]`
    - `[top-left, top-right-and-bottom-left, bottom-right]`
    - `[top-left, top-right, bottom-right, bottom-left]`

    Ist `width` _negativ_, wird das abgerundete Rechteck horizontal gespiegelt. Die Radiuswerte, die normalerweise für die linken Ecken gelten, werden dann für die rechten verwendet und umgekehrt.
    Entsprechend wird das abgerundete Rechteck bei einem negativen Wert für `height` vertikal gespiegelt.
    Die angegebenen Radien können verkleinert werden, wenn eine Kante kürzer ist als die Summe der Radien ihrer beiden Ecken.

    Der Parameter `radii` kann auch eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) sein, ein Objekt mit denselben Eigenschaften (`{x: 0, y: 0}`), eine Liste solcher Objekte oder eine Liste, die Zahlen und solche Objekte kombiniert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wenn `radii` eine Liste mit keinem oder mehr als vier Elementen ist oder einer der Werte eine negative Zahl ist.

## Beispiele

### Rechtecke zeichnen

Dieses Beispiel erstellt mit der Methode `roundRect()` mehrere Pfade für abgerundete Rechtecke. Anschließend werden die Pfade mit der Methode `stroke()` gezeichnet.

#### HTML

```html
<canvas id="canvas" width="700" height="300"></canvas>
```

#### JavaScript

Zunächst erstellen wir einen Kontext zum Zeichnen der abgerundeten Rechtecke.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Der folgende Code zeichnet zwei Rechtecke, die beide am Punkt (10, 20) beginnen und eine Breite von 150 sowie eine Höhe von 100 haben.
Das erste Rechteck wird rot gezeichnet. Für alle Ecken wird mit einer Zahl als Argument ein Radius von null angegeben.
Das zweite wird blau gezeichnet. Für alle Ecken wird ein Radius von 40 Pixeln als einzelnes Element einer Liste angegeben.

```js
// Rounded rectangle with zero radius (specified as a number)
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, 0);
ctx.stroke();

// Rounded rectangle with 40px radius (single element list)
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, [40]);
ctx.stroke();
```

Unter dem vorherigen Rechteck zeichnen wir ein weiteres in Orange, für das die Radien gegenüberliegender Ecken angegeben werden.

```js
// Rounded rectangle with 2 different radii
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.roundRect(10, 150, 150, 100, [10, 40]);
ctx.stroke();
```

Schließlich zeichnen wir zwei abgerundete Rechtecke, für die jeweils vier Radiuswerte angegeben werden und die denselben Startpunkt haben.
Der Unterschied besteht darin, dass das zweite mit einer negativen Breite gezeichnet wird.

```js
// Rounded rectangle with four different radii
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.roundRect(400, 20, 200, 100, [0, 30, 50, 60]);
ctx.stroke();

// Same rectangle drawn backwards
ctx.strokeStyle = "magenta";
ctx.beginPath();
ctx.roundRect(400, 150, -200, 100, [0, 30, 50, 60]);
ctx.stroke();
```

#### Ergebnis

Das Ergebnis ist unten zu sehen.
Beachten Sie bei den beiden Rechtecken rechts, dass das untere mit einer negativen Breite gezeichnet wird und dadurch horizontal gespiegelt ist.

{{ EmbedLiveSample('drawing_rectangles', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
- [`CanvasRenderingContext2D.fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
