---
title: scaleZ()
slug: Web/CSS/transform-function/scaleZ
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{CSSRef}}

Die **`scaleZ()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert eine Transformation, die ein Element entlang der z-Achse skaliert. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-scaleZ.html")}}

Diese Skalentransformation modifiziert die z-Koordinate jedes Elementpunkts um einen konstanten Faktor, außer wenn der Skalierungsfaktor 1 ist. In diesem Fall ist die Funktion die Identitätstransformation. Die Skalierung ist nicht isotrop und die Winkel des Elements werden nicht beibehalten. `scaleZ(-1)` definiert eine [axiale Symmetrie](https://en.wikipedia.org/wiki/Axial_symmetry), wobei die z-Achse durch den Ursprung verläuft (wie durch die {{cssxref("transform-origin")}} Eigenschaft festgelegt).

In den obigen interaktiven Beispielen wurden [`perspective: 550px;`](/de/docs/Web/CSS/perspective) (um einen 3D-Raum zu schaffen) und [`transform-style: preserve-3d;`](/de/docs/Web/CSS/transform-style) (damit die Kinder, die 6 Seiten des Würfels, ebenfalls im 3D-Raum positioniert sind) auf den Würfel angewendet.

> **Note:** `scaleZ(sz)` ist äquivalent zu
> `scale3d(1, 1, sz)`.

## Syntax

```css
scaleZ(s)
```

### Werte

- `s`
  - : Ist eine {{cssxref("&lt;number&gt;")}}, die den Skalierungsfaktor darstellt, der auf die z-Koordinate jedes Punktes des Elements angewendet wird.

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
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & s \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & s & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### HTML

```html
<div>Normal</div>
<div class="perspective">Translate</div>
<div class="scaled-translated">Skaliert</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.perspective {
  /* Beinhaltet eine Perspektive, um einen 3D-Raum zu schaffen */
  transform: perspective(400px) translateZ(-100px);
  background-color: limegreen;
}

.scaled-translated {
  /* Beinhaltet eine Perspektive, um einen 3D-Raum zu schaffen */
  transform: perspective(400px) scaleZ(2) translateZ(-100px);
  background-color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 200, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scaleX()`](/de/docs/Web/CSS/transform-function/scaleX)
- [`scaleY()`](/de/docs/Web/CSS/transform-function/scaleY)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
- Einzelne Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine `skew` Eigenschaft