---
title: "CanvasRenderingContext2D: roundRect()-Methode"
short-title: roundRect()
slug: Web/API/CanvasRenderingContext2D/roundRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.roundRect()`**-Methode der Canvas 2D API fügt dem aktuellen Pfad ein abgerundetes Rechteck hinzu.

Die Radien der Ecken können auf ähnliche Weise wie die CSS-Eigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius) angegeben werden.

Wie andere Methoden, die den aktuellen Pfad ändern, rendert diese Methode direkt nichts. Um das abgerundete Rechteck auf eine Leinwand zu zeichnen, können Sie die Methoden {{domxref("CanvasRenderingContext2D.fill", "fill()")}} oder {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} verwenden.

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
  - : Die Breite des Rechtecks. Positive Werte nach rechts und negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte nach unten und negative nach oben.
- `radii`

  - : Eine Zahl oder Liste, die die Radien des Kreisbogens angibt, der für die Ecken des Rechtecks verwendet werden soll. Die Anzahl und Reihenfolge der Radien funktioniert genauso wie die CSS-Eigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius), wenn `width` und `height` _positiv_ sind:

    - `all-corners`
    - `[all-corners]`
    - `[top-left-and-bottom-right, top-right-and-bottom-left]`
    - `[top-left, top-right-and-bottom-left, bottom-right]`
    - `[top-left, top-right, bottom-right, bottom-left]`

    Wenn `width` _negativ_ ist, wird das abgerundete Rechteck horizontal gespiegelt, sodass die Radiuswerte, die normalerweise für die linken Ecken gelten, auf der rechten Seite verwendet werden und umgekehrt. Ähnlich wird, wenn `height` negativ ist, das abgerundete Rechteck vertikal gespiegelt. Die angegebenen Radien können skaliert (reduziert) werden, wenn eine der Kanten kürzer ist als der kombinierte Radius der Eckpunkte an beiden Enden.

    Der `radii`-Parameter kann auch eine Instanz von {{domxref("DOMPoint")}} oder {{domxref("DOMPointReadOnly")}} sein, oder ein Objekt, das dieselben Eigenschaften enthält (`{x: 0, y: 0}`), oder eine Liste solcher Objekte, oder eine Liste, die Zahlen und solche Objekte mischt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wenn `radii` eine Liste ist, die null oder mehr als vier Elemente enthält, oder wenn einer seiner Werte eine negative Zahl ist.

## Beispiele

### Zeichnen von Rechtecken

Dieses Beispiel erstellt eine Reihe von abgerundeten Rechteckpfaden unter Verwendung der `roundRect()`-Methode. Die Pfade werden anschließend mit der `stroke()`-Methode gerendert.

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

Der folgende Code zeichnet zwei Rechtecke, die beide vom Punkt (10, 20) starten und eine Breite von 150 und eine Höhe von 100 haben. Das erste Rechteck wird in Rot gezeichnet und gibt einen Radius von null für alle Ecken unter Verwendung einer Zahl als Argument an. Das zweite wird in Blau gezeichnet und gibt einen Radius von 40px als ein Element in einer Liste an.

```js
// Abgerundetes Rechteck mit null Radius (als Zahl angegeben)
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, 0);
ctx.stroke();

// Abgerundetes Rechteck mit 40px Radius (ein Element Liste)
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.roundRect(10, 20, 150, 100, [40]);
ctx.stroke();
```

Unterhalb des vorherigen Rechtecks zeichnen wir ein weiteres in Orange, das die Werte der Radien der gegenüberliegenden Ecken angibt.

```js
// Abgerundetes Rechteck mit 2 unterschiedlichen Radien
ctx.strokeStyle = "orange";
ctx.beginPath();
ctx.roundRect(10, 150, 150, 100, [10, 40]);
ctx.stroke();
```

Schließlich zeichnen wir zwei abgerundete Rechtecke, die vier Werte für die Radien und denselben Startpunkt haben. Der Unterschied hier ist, dass das zweite mit einer negativen Breite gezeichnet wird.

```js
// Abgerundetes Rechteck mit vier unterschiedlichen Radien
ctx.strokeStyle = "green";
ctx.beginPath();
ctx.roundRect(400, 20, 200, 100, [0, 30, 50, 60]);
ctx.stroke();

// Gleiches Rechteck rückwärts gezeichnet
ctx.strokeStyle = "magenta";
ctx.beginPath();
ctx.roundRect(400, 150, -200, 100, [0, 30, 50, 60]);
ctx.stroke();
```

#### Ergebnis

Das Ergebnis wird unten gezeigt. Beachten Sie bei den beiden Rechtecken auf der rechten Seite, wie das untere Rechteck mit einer negativen Breite gezeichnet wird und wie dies das Rechteck horizontal spiegelt.

{{ EmbedLiveSample('Drawing_a_rectangle', 700, 300) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.rect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
