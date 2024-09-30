---
title: rotateY()
slug: Web/CSS/transform-function/rotateY
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`rotateY()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert eine Transformation, die ein Element um die y-Achse (vertikal) dreht, ohne es zu verformen. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-rotateY.html")}}

Die Rotationsachse verläuft durch einen Ursprungspunkt, der durch die CSS-Eigenschaft {{ cssxref("transform-origin") }} definiert wird.

> **Hinweis:** `rotateY(a)` entspricht 
> `rotate3d(0, 1, 0, a)`.

> [!NOTE]
> Im Gegensatz zu Rotationen in der 2D-Ebene ist die Zusammensetzung von 3D-Rotationen in der Regel nicht kommutativ. Mit anderen Worten: Die Reihenfolge, in der die Rotationen angewendet werden, beeinflusst das Ergebnis.

## Syntax

Der durch `rotateY()` erzeugte Rotationsbetrag wird durch einen {{cssxref("&lt;angle&gt;")}} angegeben. Ist dieser positiv, erfolgt die Bewegung im Uhrzeigersinn; ist er negativ, erfolgt sie gegen den Uhrzeigersinn.

```css
rotateY(a)
```

### Werte

- `a`
  - : Ein {{ cssxref("&lt;angle&gt;") }}, der den Winkel der Rotation repräsentiert. Ein positiver Winkel steht für eine Drehung im Uhrzeigersinn, ein negativer für eine gegen den Uhrzeigersinn.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> im <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^2</a></th>
      <th scope="col"><a href="https://en.wikipedia.org/wiki/Homogeneous_coordinates">Homogene Koordinaten</a> im <a href="https://en.wikipedia.org/wiki/Real_projective_plane">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten im <a href="https://en.wikipedia.org/wiki/Real_coordinate_space">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten im <a href="https://en.wikipedia.org/wiki/Real_projective_space">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">
        Diese Transformation gilt für den 3D-Raum und kann nicht auf der Ebene dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} \cos(a) & 0 & \sin(a) \\ 0 & 1 & 0 \\ -\sin(a) & 0 & \cos(a) \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mo>-</mo><mo>sin</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd><mtd><mo>cos</mo><mo>(</mo><mi>a</mi><mo>)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} \cos(a) & 0 & \sin(a) & 0 \\ 0 & 1 & 0 & 0 \\ -\sin(a) & 0 & \cos(a) & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

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
  transform: rotateY(60deg);
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
