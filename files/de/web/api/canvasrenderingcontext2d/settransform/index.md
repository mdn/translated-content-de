---
title: "CanvasRenderingContext2D: setTransform() Methode"
short-title: setTransform()
slug: Web/API/CanvasRenderingContext2D/setTransform
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.setTransform()`**-Methode der Canvas 2D API setzt (überschreibt) die aktuelle Transformation auf die Identitätsmatrix zurück und führt dann eine Transformation aus, die durch die Argumente dieser Methode beschrieben wird. Dies ermöglicht es Ihnen, den Kontext zu skalieren, zu drehen, zu verschieben und zu verzerren.

> [!NOTE]
> Siehe auch die [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)-Methode; anstatt die aktuelle Transformationsmatrix zu überschreiben, multipliziert sie diese mit einer gegebenen.

## Syntax

```js-nolint
setTransform(a, b, c, d, e, f)
setTransform(matrix)
```

Die Transformationsmatrix wird beschrieben durch: <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math>.

Diese Transformationsmatrix wird links von einem Spaltenvektor multipliziert, der jeden Punkt darstellt, der auf der Leinwand gezeichnet wird, um die endgültige Koordinate auf der Leinwand zu erstellen.

### Parameter

`setTransform()` akzeptiert zwei Arten von Parametern. Der ältere Typ besteht aus mehreren Parametern, die die einzelnen Komponenten der Transformationsmatrix darstellen, die festgelegt werden sollen:

- `a` (`m11`)
  - : Die Zelle in der ersten Zeile und der ersten Spalte der Matrix.
- `b` (`m12`)
  - : Die Zelle in der zweiten Zeile und der ersten Spalte der Matrix.
- `c` (`m21`)
  - : Die Zelle in der ersten Zeile und der zweiten Spalte der Matrix.
- `d` (`m22`)
  - : Die Zelle in der zweiten Zeile und der zweiten Spalte der Matrix.
- `e` (`m41`)
  - : Die Zelle in der ersten Zeile und der dritten Spalte der Matrix.
- `f` (`m42`)
  - : Die Zelle in der zweiten Zeile und der dritten Spalte der Matrix.

Alternativ können Sie einen einzelnen Parameter übergeben, der ein Objekt ist, welches die oben genannten Werte als Eigenschaften enthält. Die Parameternamen sind die Eigenschaftsschlüssel, und wenn zwei gleichbedeutende Namen beide vorhanden sind (z.B. `m11` und `a`), müssen sie denselben Zahlenwert haben, oder es wird ein {{jsxref("TypeError")}} ausgelöst. Durch die Verwendung der Objektform können einige Parameter ausgelassen werden — `a` und `d` standardmäßig auf `1`, während der Rest auf `0` zurückgesetzt wird.

Wenn ein Punkt ursprünglich die Koordinaten <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math> hatte, dann hat er nach der Transformation die Koordinaten <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math>. Das bedeutet:

- `e` und `f` steuern die horizontale und vertikale Verschiebung des Kontexts.
- Wenn `b` und `c` `0` sind, steuern `a` und `d` die horizontale und vertikale Skalierung des Kontexts.
- Wenn `a` und `d` `1` sind, steuern `b` und `c` die horizontale und vertikale Verzerrung des Kontexts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verzerrung einer Form

Dieses Beispiel verzerrt ein Rechteck sowohl vertikal (`.2`) als auch horizontal (`.8`). Skalierung und Verschiebung bleiben unverändert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Skewing_a_shape', 700, 180) }}

### Abrufen und Übergeben eines DOMMatrix-Objekts

Im folgenden Beispiel haben wir zwei {{htmlelement("canvas")}}-Elemente. Wir wenden eine Transformation auf den Kontext des ersten Elements mit Hilfe des ersten Typs von `setTransform()` an und zeichnen ein Quadrat darauf, dann rufen wir die Matrix mit [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) ab.

Dann wenden wir die abgerufene Matrix direkt auf den zweiten Canvas-Kontext an, indem wir das `DOMMatrix`-Objekt direkt an `setTransform()` übergeben (d.h. der zweite Typ), und zeichnen einen Kreis darauf.

#### HTML

```html
<!-- First canvas (ctx1) -->
<canvas width="240"></canvas>
<!-- Second canvas (ctx2) -->
<canvas width="240"></canvas>
```

#### CSS

```css
canvas {
  border: 1px solid black;
}
```

#### JavaScript

```js
const canvases = document.querySelectorAll("canvas");
const ctx1 = canvases[0].getContext("2d");
const ctx2 = canvases[1].getContext("2d");

ctx1.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
console.log(storedTransform);

ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();
```

#### Ergebnis

{{ EmbedLiveSample('Retrieving_and_passing_a_DOMMatrix_object', "100%", 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
