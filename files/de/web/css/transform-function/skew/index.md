---
title: skew()
slug: Web/CSS/transform-function/skew
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`skew()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert eine Transformation, die ein Element auf der 2D-Ebene verzerrt. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: skew()")}}

```css interactive-example-choice
transform: skew(0);
```

```css interactive-example-choice
transform: skew(15deg, 15deg);
```

```css interactive-example-choice
transform: skew(-0.06turn, 18deg);
```

```css interactive-example-choice
transform: skew(0.312rad);
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

Diese Transformation ist eine Scherung ([Transvektion](https://en.wikipedia.org/wiki/Shear_mapping)), die jeden Punkt innerhalb eines Elements in einem bestimmten Winkel in horizontaler und vertikaler Richtung verzerrt. Der Effekt ist, als hätten Sie jede Ecke des Elements ergriffen und sie in einem bestimmten Winkel gezogen.

Die Koordinaten jedes Punktes werden um einen Wert geändert, der proportional zum angegebenen Winkel und dem Abstand zum Ursprung ist. Je weiter ein Punkt vom Ursprung entfernt ist, desto größer ist der hinzugefügte Wert.

## Syntax

Die `skew()` Funktion wird mit entweder einem oder zwei Werten angegeben, die die Verzerrung angeben, die in jeder Richtung angewendet werden soll. Wenn Sie nur einen Wert angeben, wird er für die x-Achse verwendet, und es wird keine Verzerrung auf der y-Achse vorgenommen.

```css
skew(ax)

skew(ax, ay)
```

### Werte

- `ax`
  - : Ist ein {{cssxref("&lt;angle&gt;")}}, der den Winkel darstellt, der verwendet wird, um das Element entlang der x-Achse zu verzerren.
- `ay`
  - : Ist ein {{cssxref("&lt;angle&gt;")}}, der den Winkel darstellt, der verwendet wird, um das Element entlang der y-Achse zu verzerren. Wenn nicht definiert, ist der Standardwert `0`, was zu einer rein horizontalen Verzerrung führt.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogene Koordinaten</a> auf <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mo>tan</mo><mo>(</mo><mi>ax</mi><mo>)</mo></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>ay</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} 1 & \tan(ax) \\ \tan(ay) & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mo>tan</mo><mo>(</mo><mi>ax</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>ay</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & \tan(ax) & 0 \\ \tan(ay) & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mo>tan</mo><mo>(</mo><mi>ax</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>ay</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & \tan(ax) & 0 \\ \tan(ay) & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mo>tan</mo><mo>(</mo><mi>ax</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>tan</mo><mo>(</mo><mi>ay</mi><mo>)</mo></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & \tan(ax) & 0 & 0 \\ \tan(ay) & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[1 tan(ay) tan(ax) 1 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verzerrung nur auf der x-Achse

#### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

#### CSS

```css
body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg); /* Equal to skewX(10deg) */
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Skewing_on_the_x-axis_only", 200, 200)}}

### Verzerrung auf beiden Achsen

#### HTML

```html
<div>Normal</div>
<div class="skewed">Skewed</div>
```

#### CSS

```css
body {
  margin: 20px;
}

div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.skewed {
  transform: skew(10deg, 10deg);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Skewing_on_both_axes", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [skewX()](/de/docs/Web/CSS/transform-function/skewX)
- [skewY()](/de/docs/Web/CSS/transform-function/skewY)
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine `skew`-Eigenschaft
