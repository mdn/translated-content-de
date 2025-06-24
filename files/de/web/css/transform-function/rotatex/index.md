---
title: rotateX()
slug: Web/CSS/transform-function/rotateX
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`rotateX()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert eine Transformation, die ein Element um die x-Achse (horizontal) dreht, ohne es zu verformen. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: rotateX()")}}

```css interactive-example-choice
transform: rotateX(0);
```

```css interactive-example-choice
transform: rotateX(45deg);
```

```css interactive-example-choice
transform: rotateX(-0.2turn);
```

```css interactive-example-choice
transform: rotateX(3.142rad);
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

Die Rotationsachse verläuft durch einen Ursprung, der durch die CSS-Eigenschaft {{ cssxref("transform-origin") }} definiert wird.

> [!NOTE] > `rotateX(a)` ist äquivalent zu
> `rotate3d(1, 0, 0, a)`.

> [!NOTE]
> Im Gegensatz zu Rotationen in der 2D-Ebene ist die Zusammensetzung von 3D-Rotationen normalerweise
> nicht kommutativ. Mit anderen Worten, die Reihenfolge, in der die Rotationen angewendet werden, beeinflusst das Ergebnis.

## Syntax

Der Umfang der durch `rotateX()` erzeugten Rotation wird durch einen {{cssxref("&lt;angle&gt;")}} angegeben. Wenn
positiv, erfolgt die Bewegung im Uhrzeigersinn; wenn negativ, gegen den Uhrzeigersinn.

```css
rotateX(a)
```

### Werte

- `a`
  - : Ist ein {{ cssxref("&lt;angle&gt;") }}, das den Winkel der Rotation darstellt. Ein positiver Winkel bedeutet eine Rotation im Uhrzeigersinn, ein negativer Winkel eine gegen den Uhrzeigersinn.

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
      <td colspan="2">
        Diese Transformation gilt für den 3D-Raum und kann nicht auf der Ebene dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ 0 & \cos(a) & -\sin(a) \\ 0 & \sin(a) & \cos(a) \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & \cos(a) & -\sin(a) & 0 \\ 0 & \sin(a) & \cos(a) & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### HTML

```html
<div>Normal</div>
<div class="rotated">Rotated</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.rotated {
  transform: rotateX(45deg);
  background-color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", "auto", 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}} Eigenschaft
- {{cssxref("rotate")}} Eigenschaft
- {{cssxref("&lt;transform-function&gt;")}}
