---
title: "CanvasRenderingContext2D: setTransform()-Methode"
short-title: setTransform()
slug: Web/API/CanvasRenderingContext2D/setTransform
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.setTransform()`**-Methode der Canvas 2D API setzt die aktuelle Transformation auf die Einheitsmatrix zurück (überschreibt sie) und führt dann eine durch die Argumente dieser Methode beschriebene Transformation durch. Dies ermöglicht es Ihnen, den Kontext zu skalieren, zu rotieren, zu verschieben und zu verzerren.

> [!NOTE]
> Siehe auch die [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)-Methode; anstatt die aktuelle Transformationsmatrix zu überschreiben, wird diese mit einer gegebenen multipliziert.

## Syntax

```js-nolint
setTransform(a, b, c, d, e, f)
setTransform(matrix)
```

Die Transformationsmatrix wird beschrieben durch: <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math>.

Diese Transformationsmatrix wird auf der linken Seite eines Spaltenvektors, der jeden gezeichneten Punkt auf der Leinwand beschreibt, multipliziert, um die endgültigen Koordinaten auf der Leinwand zu erzeugen.

### Parameter

`setTransform()` akzeptiert zwei Arten von Parametern. Der ältere Typ besteht aus mehreren Parametern, die die einzelnen Komponenten der zu setzenden Transformationsmatrix repräsentieren:

- `a` (`m11`)
  - : Die Zelle in der ersten Zeile und ersten Spalte der Matrix.
- `b` (`m12`)
  - : Die Zelle in der zweiten Zeile und ersten Spalte der Matrix.
- `c` (`m21`)
  - : Die Zelle in der ersten Zeile und zweiten Spalte der Matrix.
- `d` (`m22`)
  - : Die Zelle in der zweiten Zeile und zweiten Spalte der Matrix.
- `e` (`m41`)
  - : Die Zelle in der ersten Zeile und dritten Spalte der Matrix.
- `f` (`m42`)
  - : Die Zelle in der zweiten Zeile und dritten Spalte der Matrix.

Alternativ können Sie einen einzigen Parameter übergeben, der ein Objekt ist, das die oben genannten Werte als Eigenschaften enthält. Die Parameternamen sind die Schlüssel der Eigenschaften, und wenn zwei synonyme Namen beide vorhanden sind (z.B. `m11` und `a`), müssen sie denselben Zahlenwert haben oder ein {{jsxref("TypeError")}} wird ausgelöst. Die Verwendung der Objektform erlaubt es, einige Parameter auszulassen — `a` und `d` sind standardmäßig `1`, während der Rest standardmäßig `0` ist.

Wenn ein Punkt ursprünglich die Koordinaten <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math> hatte, wird er nach der Transformation die Koordinaten <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math> haben. Dies bedeutet:

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

Im folgenden Beispiel haben wir zwei {{htmlelement("canvas")}}-Elemente. Wir wenden eine Transformation auf den Kontext des ersten Elements mit dem ersten Typ von `setTransform()` an und zeichnen ein Quadrat darauf, anschließend rufen wir die Matrix mit [`CanvasRenderingContext2D.getTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/getTransform) ab.

Dann wenden wir die abgerufene Matrix direkt auf den Kontext des zweiten Canvas an, indem wir das `DOMMatrix`-Objekt direkt an `setTransform()` übergeben (also den zweiten Typ) und zeichnen einen Kreis darauf.

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
