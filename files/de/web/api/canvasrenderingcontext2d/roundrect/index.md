---
title: "CanvasRenderingContext2D: roundRect() Methode"
short-title: roundRect()
slug: Web/API/CanvasRenderingContext2D/roundRect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`CanvasRenderingContext2D.roundRect()`**-Methode der Canvas 2D API fügt dem aktuellen Pfad ein abgerundetes Rechteck hinzu.

Die Radien der Ecken können auf ähnliche Weise wie die CSS-Property [`border-radius`](/de/docs/Web/CSS/border-radius) angegeben werden.

Wie andere Methoden, die den aktuellen Pfad ändern, rendert diese Methode selbst nichts direkt. Um das abgerundete Rechteck auf eine Leinwand zu zeichnen, können Sie die Methoden [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden.

## Syntax

```js-nolint
roundRect(x, y, width, height, radii)
```

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des Startpunkts des Rechtecks, in Pixeln.
- `y`
  - : Die y-Achsen-Koordinate des Startpunkts des Rechtecks, in Pixeln.
- `width`
  - : Die Breite des Rechtecks. Positive Werte gehen nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte gehen nach unten, negative nach oben.
- `radii`

  - : Eine Zahl oder Liste, die die Radien des Kreisbogens angibt, der für die Ecken des Rechtecks verwendet werden soll.
    Die Anzahl und Reihenfolge der Radien funktionieren auf die gleiche Weise wie bei der CSS-Property [`border-radius`](/de/docs/Web/CSS/border-radius), wenn `width` und `height` _positiv_ sind:

    - `all-corners`
    - `[all-corners]`
    - `[top-left-and-bottom-right, top-right-and-bottom-left]`
    - `[top-left, top-right-and-bottom-left, bottom-right]`
    - `[top-left, top-right, bottom-right, bottom-left]`

    Wenn `width` _negativ_ ist, wird das abgerundete Rechteck horizontal gespiegelt, sodass die Radiuswerte, die normalerweise für die linken Ecken gelten, rechts verwendet werden und umgekehrt.
    Ähnlich verhält es sich, wenn `height` negativ ist und das abgerundete Rechteck vertikal gespiegelt wird.
    Die angegebenen Radien können skaliert (reduziert) werden, wenn eine der Kanten kürzer ist als der kombinierte Radius der Scheitelpunkte an beiden Enden.

    Der `radii`-Parameter kann auch eine [`DOMPoint`](/de/docs/Web/API/DOMPoint)- oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)-Instanz sein, oder ein Objekt mit denselben Eigenschaften (`{x: 0, y: 0}`), oder eine Liste solcher Objekte, oder eine Liste, die Zahlen und solche Objekte mischt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wenn `radii` eine Liste ist, die null oder mehr als vier Elemente enthält, oder wenn einer ihrer Werte eine negative Zahl ist.

## Beispiele

### Zeichnen von Rechtecken

Dieses Beispiel erstellt eine Reihe von abgerundeten rechteckigen Pfaden mithilfe der `roundRect()`-Methode.
Die Pfade werden dann mit der `stroke()`-Methode gerendert.

#### HTML

```html
<canvas id="canvas" width="700" height="300"></canvas>
```

#### JavaScript

Zuerst erstellen wir einen Kontext zum Zeichnen unserer abgerundeten Rechtecke.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Der folgende Code zeichnet zwei Rechtecke, die beide vom Punkt (10, 20) aus starten und eine Breite von 150 und eine Höhe von 100 haben.
Das erste Rechteck wird in Rot gezeichnet und gibt für alle Ecken einen Radius von null an, indem eine Zahl als Argument verwendet wird.
Das zweite wird in Blau gezeichnet und spezifiziert einen Radius von 40px als einzelnes Element in einer Liste.

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

Unter dem vorherigen Rechteck zeichnen wir ein weiteres in Orange, das die Werte der Radien der gegenüberliegenden Ecken angibt.

```js
// Rounded rectangle with 2 different radii
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.roundRect(10, 150, 150, 100, [10, 40]);
ctx.stroke();
```

Schließlich zeichnen wir zwei abgerundete Rechtecke, die vier Werte für die Radien haben und denselben Startpunkt.
Der Unterschied hier ist, dass das zweite mit einer negativen Breite gezeichnet wird.

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

Das Ergebnis wird unten gezeigt.
Bei den beiden Rechtecken rechts ist zu beachten, wie das untere Rechteck mit einer negativen Breite gezeichnet wird und wie dies das Rechteck horizontal umdreht.

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect)
- [`CanvasRenderingContext2D.fillRect`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
- [`CanvasRenderingContext2D.strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
- [`CanvasRenderingContext2D.fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill)
- [`CanvasRenderingContext2D.stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke)
