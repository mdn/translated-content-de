---
title: translate3d()
slug: Web/CSS/Reference/Values/transform-function/translate3d
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`translate3d()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) versetzt ein Element im 3D-Raum. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: translate3d()")}}

```css interactive-example-choice
transform: translate3d(0, 0, 0);
```

```css interactive-example-choice
transform: translate3d(42px, -62px, -135px);
```

```css interactive-example-choice
transform: translate3d(-2.7rem, 0, 1rem);
```

```css interactive-example-choice
transform: translate3d(5ch, 0.4in, 5em);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face left">4</div>
    <div class="face top">5</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
  perspective: 800px;
  perspective-origin: 150% 150%;
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  font-size: 60px;
  color: white;
}

.front {
  background: rgb(90 90 90 / 0.7);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 0.7);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

Diese Transformation wird durch einen dreidimensionalen Vektor [tx, ty, tz] charakterisiert. Seine Koordinaten definieren, wie stark das Element in jede Richtung verschoben wird.

## Syntax

```css
translate3d(tx, ty, tz)
```

### Werte

- `tx`
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, das die Abszisse (horizontal, x-Komponente) des Verschiebungsvektors [tx, ty, tz] darstellt.
- `ty`
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, das die Ordinate (vertikal, y-Komponente) des Verschiebungsvektors [tx, ty, tz] darstellt.
- `tz`
  - : Ist ein {{cssxref("&lt;length&gt;")}} und stellt die z-Komponente des Verschiebungsvektors dar. Es kann kein {{cssxref("&lt;percentage&gt;")}}-Wert sein; in diesem Fall wird die Eigenschaft, die die Transformation enthält, als ungültig betrachtet [tx, ty, tz].

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/Reference/Values/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> in <a href="https://de.wikipedia.org/wiki/Reeller_Koordinatenraum">ℝ^2</a></th>
      <th scope="col"><a href="https://de.wikipedia.org/wiki/Homogene_Koordinaten">Homogene Koordinaten</a> in <a href="https://de.wikipedia.org/wiki/Projektiver_Raum">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten in <a href="https://de.wikipedia.org/wiki/Reeller_Koordinatenraum">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten in <a href="https://de.wikipedia.org/wiki/Projektiver_Raum">ℝℙ^3</a></th>
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
        Eine Translation ist keine lineare Transformation in ℝ^3 und kann nicht durch eine kartesische Koordinatenmatrix dargestellt werden.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>tz</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & tz \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung einer einachsigen Translation

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  /* Equivalent to perspective(500px) translateX(10px) */
  transform: perspective(500px) translate3d(10px, 0, 0px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_a_single_axis_translation", 250, 250)}}

### Kombination aus z-Achsen- und x-Achsen-Translation

#### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

#### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: perspective(500px) translate3d(10px, 0, 100px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Combining_z-axis_and_x-axis_translation", 250, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
