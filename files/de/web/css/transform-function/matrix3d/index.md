---
title: matrix3d()
slug: Web/CSS/transform-function/matrix3d
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`matrix3d()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert eine 3D-Transformation als 4x4 homogene Matrix.
Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{InteractiveExample("CSS Demo: matrix3d()")}}

```css interactive-example-choice
transform: matrix3d(
  -0.6,
  1.34788,
  0,
  0,
  -2.34788,
  -0.6,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  10,
  1
);
```

```css interactive-example-choice
transform: matrix3d(
  0.5,
  0,
  -0.866025,
  0,
  0.595877,
  1.2,
  -1.03209,
  0,
  0.866025,
  0,
  0.5,
  0,
  25.9808,
  0,
  15,
  1
);
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

## Syntax

Die `matrix3d()` Funktion wird mit 16 Werten angegeben. Sie werden in Spaltenmajor-Ordnung beschrieben.

```css
matrix3d(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)
```

### Werte

- _a1_ _b1_ _c1_ _d1_ _a2_ _b2_ _c2_ _d2_
  _a3_ _b3_ _c3_ _d3_
  - : Sind {{cssxref("&lt;number&gt;")}}, die die lineare Transformation beschreiben.
- _a4_ _b4_ _c4 d4_
  - : Sind {{cssxref("&lt;number&gt;")}}, die die anzuwendende Translation beschreiben.

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
        Eine generische 3D <a href="https://en.wikipedia.org/wiki/Affine_transformation">affine Transformation</a> kann nicht mit einer kartesischen Koordinatenmatrix dargestellt werden, da Translationen keine linearen Transformationen sind.
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>a1</mi></mtd><mtd><mi>a2</mi></mtd><mtd><mi>a3</mi></mtd><mtd><mi>a4</mi></mtd></mtr><mtr><mtd><mi>b1</mi></mtd><mtd><mi>b2</mi></mtd><mtd><mi>b3</mi></mtd><mtd><mi>b4</mi></mtd></mtr><mtr><mtd><mi>c1</mi></mtd><mtd><mi>c2</mi></mtd><mtd><mi>c3</mi></mtd><mtd><mi>c4</mi></mtd></mtr><mtr><mtd><mi>d1</mi></mtd><mtd><mi>d2</mi></mtd><mtd><mi>d3</mi></mtd><mtd><mi>d4</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} a1 & a2 & a3 & a4 \\ b1 & b2 & b3 & b4 \\ c1 & c2 & c3 & c4 \\ d1 & d2 & d3 & d4 \\ \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Würfel-Quetschbeispiel

Das folgende Beispiel zeigt einen 3D-Würfel, der aus DOM-Elementen und Transformationen erstellt wurde und der beim Hover/Fokus ein `matrix3d()` Transform erhält.

#### HTML

```html
<section id="example-element" tabindex="0">
  <div class="face front">1</div>
  <div class="face back">2</div>
  <div class="face right">3</div>
  <div class="face left">4</div>
  <div class="face top">5</div>
  <div class="face bottom">6</div>
</section>
```

#### CSS

```css
#example-element {
  width: 100px;
  height: 100px;
  transform-style: preserve-3d;
  transition: transform 1.5s;
  transform: rotate3d(1, 1, 1, 30deg);
  margin: 50px auto;
}

#example-element:hover,
#example-element:focus {
  transform: rotate3d(1, 1, 1, 30deg)
    matrix3d(1, 0, 0, 0, 0, 1, 6, 0, 0, 0, 1, 0, 50, 100, 0, 1.1);
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
  color: #fff;
}

.front {
  background: rgb(90 90 90 / 70%);
  transform: translateZ(50px);
}

.back {
  background: rgb(0 210 0 / 70%);
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(210 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgb(0 0 210 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgb(210 210 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgb(210 0 210 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}
```

#### Ergebnis

{{EmbedLiveSample('Cube_squashing_example', '100%', '300px')}}

### Beispiel für Matrix-Translation und -Skalierung

Ein weiteres `transform3d()` Beispiel, das eine animierte kombinierte Translation und Skalierung implementiert.

#### HTML

```html
<div class="foo">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quaerat sit
  soluta, quisquam exercitationem delectus qui unde in facere necessitatibus aut
  quia porro dolorem nesciunt enim, at consequuntur aliquam esse?
</div>
```

#### CSS

```css-nolint
html {
  width: 100%;
}
body {
  height: 100vh;
  /* Centering content */
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
}
.foo {
  width: 50%;
  padding: 1em;
  color: white;
  background: #ff8c66;
  border: 2px dashed black;
  text-align: center;
  font-family: system-ui, sans-serif;
  font-size: 14px;
  /* Setting up animation for better demonstration */
  animation: MotionScale 2s alternate linear infinite;
}

@keyframes MotionScale {
  from {
    /*
      Identity matrix is used as basis here.
      The matrix below describes the
      following transformations:
        Translates every X point by -50px
        Translates every Y point by -100px
        Translates every Z point by 0
        Scales down by 10%
    */
    transform: matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      -50, -100, 0, 1.1
    );
  }
  50% {
    transform: matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 0.9
    );
  }
  to {
     transform: matrix3d(
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      50, 100, 0, 1.1
    )
  }
}
```

#### Ergebnis

{{EmbedLiveSample('Matrix_translation_and_scale_example', '100%', '400px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- Individuelle Transform-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
- {{cssxref("&lt;transform-function&gt;")}}
