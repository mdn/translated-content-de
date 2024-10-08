---
title: translateX()
slug: Web/CSS/transform-function/translateX
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{CSSRef}}

Die **`translateX()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) verschiebt ein Element auf der horizontalen 2D-Ebene. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translateX.html")}}

> **Note:** `translateX(tx)` ist gleichbedeutend mit
> `translate(tx, 0)` oder
> `translate3d(tx, 0, 0)`.

## Syntax

```css
/* <length-percentage> values */
transform: translateX(200px);
transform: translateX(50%);
```

### Werte

- `<length-percentage>`
  - : Ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, welches die Abszisse (horizontal, x-Komponente) des Verschiebungsvektors [tx, 0] darstellt. Im [kartesischen Koordinatensystem](/de/docs/Web/CSS/transform-function#cartesian_coordinates) repräsentiert es die Verschiebung entlang der x-Achse. Ein Prozentwert bezieht sich auf die Breite des durch die {{cssxref("transform-box")}} Eigenschaft definierten Bezugsrahmens.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://de.wikipedia.org/wiki/Euklidischer_Raum">ℝ^2</a></th>
      <th scope="col"><a href="https://de.wikipedia.org/wiki/Homogene_Koordinaten">Homogene Koordinaten</a> auf <a href="https://de.wikipedia.org/wiki/Projektiver_Raum">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://de.wikipedia.org/wiki/Euklidischer_Raum">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://de.wikipedia.org/wiki/Projektiver_Raum">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <p>
          Eine Translation ist keine lineare Transformation in ℝ^2 und kann nicht mit einer Kartesischen-Koordinatenmatrix dargestellt werden.
        </p>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & t \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & t \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>t</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & t \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 t 0]</code></td>
    </tr>
  </tbody>
</table>

### Formale Syntax

```plain
translateX({{cssxref("&lt;length-percentage&gt;")}})
```

## Beispiele

### HTML

```html
<div>Static</div>
<div class="moved">Moved</div>
<div>Static</div>
```

### CSS

```css
div {
  width: 60px;
  height: 60px;
  background-color: skyblue;
}

.moved {
  transform: translateX(10px); /* Equal to translate(10px) */
  background-color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 250, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`translate()`](/de/docs/Web/CSS/transform-function/translate)
- [`translateY()`](/de/docs/Web/CSS/transform-function/translateY)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
