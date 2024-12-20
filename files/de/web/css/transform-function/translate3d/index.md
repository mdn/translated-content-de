---
title: translate3d()
slug: Web/CSS/transform-function/translate3d
l10n:
  sourceCommit: c9f96f06d4fbd265808f298eb9b2773f739860c5
---

{{CSSRef}}

Die **`translate3d()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) positioniert ein Element im 3D-Raum neu. Ihr Ergebnis ist ein
{{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translate3d.html")}}

Diese Transformation wird durch einen dreidimensionalen Vektor [tx, ty, tz] charakterisiert. Dessen Koordinaten definieren, um wie viel sich das Element in jede Richtung bewegt.

## Syntax

```css
translate3d(tx, ty, tz)
```

### Werte

- `tx`
  - : Ist eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die Abszisse (horizontal, x-Komponente) des Translationsvektors [tx, ty, tz] repräsentiert.
- `ty`
  - : Ist eine {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, die die Ordinate (vertikal, y-Komponente) des Translationsvektors [tx, ty, tz] repräsentiert.
- `tz`
  - : Ist eine {{cssxref("&lt;length&gt;")}}, die die z-Komponente des Translationsvektors darstellt. Sie kann keinen {{cssxref("&lt;percentage&gt;")}} Wert haben; in diesem Fall wird die Eigenschaft, die die Transformation enthält, als ungültig angesehen [tx, ty, tz].

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
        Eine Translation ist keine lineare Transformation in ℝ^3 und kann nicht mit einer kartesischen Koordinatenmatrix dargestellt werden.
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

### Verwendung einer einfachen Achsenübersetzung

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

### Kombination von z-Achsen- und x-Achsen-Übersetzung

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
