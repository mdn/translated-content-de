---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`scale3d()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert eine Transformation, die ein Element im 3D-Raum skaliert. Da die Skalierung durch einen Vektor [sx, sy, sz] definiert wird, kann sie verschiedene Dimensionen in unterschiedlichen Maßstäben skalieren. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: scale3d()")}}

```css interactive-example-choice
transform: scale3d(1, 1, 1);
```

```css interactive-example-choice
transform: scale3d(1.3, 1.3, 1.3);
```

```css interactive-example-choice
transform: scale3d(0.5, 1, 1.7);
```

```css interactive-example-choice
transform: scale3d(-1.4, 0.4, 0.7);
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

Diese Skalierungstransformation ist durch einen dreidimensionalen Vektor gekennzeichnet. Dessen Koordinaten bestimmen, wie viel in jeder Richtung skaliert wird. Wenn alle drei Koordinaten gleich sind, ist die Skalierung gleichmäßig (_isotrop_) und das {{Glossary("aspect_ratio", "Seitenverhältnis")}} des Elements bleibt erhalten (dies ist eine [homothetische Transformation](https://en.wikipedia.org/wiki/Homothetic_transformation)).

Wenn ein Koordinatenwert außerhalb des Bereichs \[-1, 1] liegt, wächst das Element entlang dieser Dimension; wenn innerhalb, schrumpft es. Ist der Wert negativ, ergibt sich eine [Punktspiegelung](https://en.wikipedia.org/wiki/Point_reflection) in dieser Dimension. Ein Wert von 1 hat keinen Effekt.

## Syntax

```css
scale3d(sx, sy, sz)
```

### Werte

- `sx`
  - : Ist ein {{cssxref("&lt;number&gt;")}}, der die Abszisse (horizontale, x-Komponente) des Skalierungsvektors darstellt.
- `sy`
  - : Ist ein {{cssxref("&lt;number&gt;")}}, der die Ordinate (vertikale, y-Komponente) des Skalierungsvektors darstellt.
- `sz`
  - : Ist ein {{cssxref("&lt;number&gt;")}}, der die z-Komponente des Skalierungsvektors darstellt.

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
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>sz</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & sz \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>sz</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & sz & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Ohne Änderung des Ursprungs

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Without_changing_the_origin","200","200")}}

### Verschiebung des Ursprungs der Transformation

#### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

#### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: perspective(500px) scale3d(2, 0.7, 0.2) translateZ(100px);
  transform-origin: left;
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Translating_the_origin_of_the_transformation","200","200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- [`scaleZ()`](/de/docs/Web/CSS/transform-function/scaleZ)
- [`translate3d()`](/de/docs/Web/CSS/transform-function/translate3d)
- [`rotate3d()`](/de/docs/Web/CSS/transform-function/rotate3d)
- Individuelle Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
