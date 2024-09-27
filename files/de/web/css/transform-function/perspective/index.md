---
title: perspective()
slug: Web/CSS/transform-function/perspective
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{CSSRef}}

Die **`perspective()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert eine Transformation, die den Abstand zwischen dem Benutzer und der z=0 Ebene festlegt, die Perspektive, aus der der Betrachter wäre, wenn die 2-dimensionale Schnittstelle 3-dimensional wäre. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-perspective.html")}}

Die `perspective()` Transformationsfunktion ist Teil des {{cssxref('transform')}}-Werts, der auf das transformierte Element angewendet wird. Dies unterscheidet sich von den Eigenschaften {{cssxref('perspective')}} und {{cssxref('perspective-origin')}},
die am übergeordneten Element eines in einem 3-dimensionalen Raum transformierten Kindes angebracht sind.

## Syntax

Der Perspektivabstand, der von `perspective()` verwendet wird, wird durch einen {{cssxref("&lt;length&gt;")}}-Wert spezifiziert, der den Abstand zwischen dem Benutzer und der z=0 Ebene darstellt, oder durch `none`.
Die z=0 Ebene ist die Ebene, auf der alles in einer 2-dimensionalen Ansicht erscheint, oder der Bildschirm.
Negative Werte sind Syntaxfehler.
Werte kleiner als `1px` (einschließlich Null) werden auf `1px` beschränkt.
Werte, die nicht `none` sind, lassen
Elemente mit positiven z-Positionen größer erscheinen,
und Elemente mit negativen z-Positionen kleiner erscheinen.
Elemente mit z-Positionen, die gleich oder größer als der Perspektivwert sind,
verschwinden, als ob sie sich hinter dem Benutzer befinden.
Große Werte der Perspektive repräsentieren eine kleine Transformation;
kleine Werte von `perspective()` repräsentieren eine große Transformation;
`perspective(none)` repräsentiert die Perspektive aus unendlicher Entfernung
und keine Transformation.

```css
perspective(d)
```

### Werte

- _d_
  - : Ist eine {{cssxref("&lt;length&gt;")}}, die den Abstand vom Benutzer zur z=0 Ebene darstellt. Wenn es 0 oder ein negativer Wert ist, wird keine Perspektivtransformation angewendet.

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
        <p>
          Diese Transformation gilt für den 3D-Raum und kann nicht auf der Ebene dargestellt werden.
        </p>
      </td>
      <td>
        Diese Transformation ist keine lineare Transformation in ℝ^3 und kann nicht mit einer Matrix in kartesischen Koordinaten dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mo>−</mo><mn>1</mn><mo>/</mo><mi>d</mi></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & -\frac{1}{d} & 1 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### HTML

```html
<p>Without perspective:</p>
<div class="no-perspective-box">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (9cm):</p>
<div class="perspective-box-far">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>

<p>With perspective (4cm):</p>
<div class="perspective-box-closer">
  <div class="face front">A</div>
  <div class="face top">B</div>
  <div class="face left">C</div>
</div>
```

### CSS

```css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 100px;
  text-align: center;
}

p + div {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  margin-left: 100px;
}
.no-perspective-box {
  transform: rotateX(-15deg) rotateY(30deg);
}

.perspective-box-far {
  transform: perspective(9cm) rotateX(-15deg) rotateY(30deg);
}

.perspective-box-closer {
  transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
}

.top {
  background-color: skyblue;
  transform: rotateX(90deg) translate3d(0, 0, 50px);
}

.left {
  background-color: pink;
  transform: rotateY(-90deg) translate3d(0, 0, 50px);
}

.front {
  background-color: limegreen;
  transform: translate3d(0, 0, 50px);
}
```

### Resultat

{{ EmbedLiveSample('Examples', '250', '350') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- Einzelne Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
