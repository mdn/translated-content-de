---
title: "CanvasRenderingContext2D: transform()-Methode"
short-title: transform()
slug: Web/API/CanvasRenderingContext2D/transform
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.transform()`**-Methode der Canvas 2D API multipliziert die aktuelle Transformation mit der Matrix, die durch die Argumente dieser Methode beschrieben wird. Dies ermöglicht es Ihnen, den Kontext zu skalieren, zu drehen, zu verschieben und zu verzerren.

> [!NOTE]
> Siehe auch die [`setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)-Methode, die die aktuelle Transformation auf die Identitätsmatrix zurücksetzt und dann `transform()` aufruft.

## Syntax

```js-nolint
transform(a, b, c, d, e, f)
```

Die Transformationsmatrix wird beschrieben durch: <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math>.

### Parameter

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

Wenn ein Punkt ursprünglich die Koordinaten <math><semantics><mrow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mrow><annotation encoding="TeX">(x, y)</annotation></semantics></math> hatte, wird er nach der Transformation die Koordinaten <math><semantics><mrow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mrow><annotation encoding="TeX">(ax + cy + e, bx + dy + f)</annotation></semantics></math> haben. Das bedeutet:

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

ctx.transform(1, 0.2, 0.8, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Skewing_a_shape', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
