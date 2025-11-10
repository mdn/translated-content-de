---
title: rotate()
slug: Web/CSS/Reference/Values/transform-function/rotate
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`rotate()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert eine Transformation, die ein Element um einen festen Punkt auf der 2D-Ebene dreht, ohne es zu verformen. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: rotate()")}}

```css interactive-example-choice
transform: rotate(0);
```

```css interactive-example-choice
transform: rotate(90deg);
```

```css interactive-example-choice
transform: rotate(-0.25turn);
```

```css interactive-example-choice
transform: rotate(3.142rad);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

Der feste Punkt, um den das Element dreht — wie oben erwähnt — wird auch als **Transformationsursprung** bezeichnet. Dieser ist standardmäßig auf die Mitte des Elements eingestellt, kann aber über die {{ cssxref("transform-origin") }} Eigenschaft individuell festgelegt werden.

## Syntax

```css
rotate(a)
```

### Werte

- _a_
  - : Stellt einen {{ cssxref("&lt;angle&gt;") }} dar, der den Winkel der Drehung repräsentiert. Die Drehrichtung hängt von der Schreibrichtung ab.
    In einem links-nach-rechts-Kontext gibt ein positiver Winkel eine Drehung im Uhrzeigersinn an, ein negativer Winkel eine Drehung gegen den Uhrzeigersinn. In einem rechts-nach-links-Kontext bedeutet ein positiver Winkel eine Drehung gegen den Uhrzeigersinn, ein negativer Winkel eine Drehung im Uhrzeigersinn. Eine Drehung um 180° wird als _Punktspiegelung_ bezeichnet.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/Reference/Values/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogene Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} \cos(a) & -\sin(a) \\ \sin(a) & \cos(a) \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} \cos(a) & -\sin(a) & 0 \\ \sin(a) & \cos(a) & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} \cos(a) & -\sin(a) & 0 \\ \sin(a) & \cos(a) & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} \cos(a) & -\sin(a) & 0 & 0 \\ \sin(a) & \cos(a) & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[cos(a) sin(a) -sin(a) cos(a) 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Formaler Syntax

{{CSSSyntax}}

## Beispiele

### Einfaches Beispiel

#### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotate(45deg); /* Equal to rotateZ(45deg) */
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Basic_example", "auto", 180)}}

### Kombination von Drehung mit einer anderen Transformation

Wenn Sie mehrere Transformationen auf ein Element anwenden möchten, achten Sie auf die Reihenfolge, in der Sie Ihre Transformationen angeben. Wenn Sie beispielsweise vor dem Verschieben drehen, erfolgt die Verschiebung entlang der neuen Rotationsachse!

#### HTML

```html
<div>Normal</div>
<div class="rotate">Rotated</div>
<div class="rotate-translate">Rotated + Translated</div>
<div class="translate-rotate">Translated + Rotated</div>
```

#### CSS

```css
div {
  position: absolute;
  left: 40px;
  top: 40px;
  width: 100px;
  height: 100px;
  background-color: lightgray;
}

.rotate {
  background-color: transparent;
  outline: 2px dashed;
  transform: rotate(45deg);
}

.rotate-translate {
  background-color: pink;
  transform: rotate(45deg) translateX(180px);
}

.translate-rotate {
  background-color: gold;
  transform: translateX(180px) rotate(45deg);
}
```

#### Ergebnis

{{EmbedLiveSample("Combining_rotation_with_another_transformation", "auto", 320)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}} Eigenschaft
- {{cssxref("rotate")}} Eigenschaft
- {{cssxref("&lt;transform-function&gt;")}}
- [`rotate3d()`](/de/docs/Web/CSS/Reference/Values/transform-function/rotate3d)
