---
title: "CanvasRenderingContext2D: Methode transform()"
short-title: transform()
slug: Web/API/CanvasRenderingContext2D/transform
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode
**`CanvasRenderingContext2D.transform()`**
der Canvas 2D API multipliziert die aktuelle Transformation mit der Matrix, die durch die Argumente dieser Methode beschrieben wird. Dies ermöglicht es Ihnen, den Kontext zu skalieren, zu drehen, zu verschieben (translate) und zu verzerren (skew).

> [!NOTE]
> Siehe auch die Methode {{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}}, die die aktuelle Transformation auf die Einheitsmatrix zurücksetzt und dann `transform()` aufruft.

## Syntax

```js-nolint
transform(a, b, c, d, e, f)
```

Die Transformationsmatrix ist beschrieben durch: <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics></math>.

### Parameter

- `a` (`m11`)
  - : Die Zelle in der ersten Reihe und der ersten Spalte der Matrix.
- `b` (`m12`)
  - : Die Zelle in der zweiten Reihe und der ersten Spalte der Matrix.
- `c` (`m21`)
  - : Die Zelle in der ersten Reihe und der zweiten Spalte der Matrix.
- `d` (`m22`)
  - : Die Zelle in der zweiten Reihe und der zweiten Spalte der Matrix.
- `e` (`m41`)
  - : Die Zelle in der ersten Reihe und der dritten Spalte der Matrix.
- `f` (`m42`)
  - : Die Zelle in der zweiten Reihe und der dritten Spalte der Matrix.

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

- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
