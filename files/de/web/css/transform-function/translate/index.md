---
title: translate()
slug: Web/CSS/transform-function/translate
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{CSSRef}}

Die **`translate()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) verschiebt ein Element in horizontaler und/oder vertikaler Richtung. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-translate.html")}}

Diese Transformation wird durch einen zweidimensionalen Vektor [tx, ty] beschrieben. Ihre Koordinaten definieren, wie weit sich das Element in jede Richtung bewegt.

## Syntax

```css
/* Single <length-percentage> values */
transform: translate(200px);
transform: translate(50%);

/* Double <length-percentage> values */
transform: translate(100px, 200px);
transform: translate(100px, 50%);
transform: translate(30%, 200px);
transform: translate(30%, 50%);
```

### Werte

- Einzelne `<length-percentage>` Werte
  - : Dieser Wert ist ein {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}}, der die Abszisse (horizontal, x-Komponente) des Übersetzungsvektors [tx, 0] darstellt. Die Ordinate (vertikal, y-Komponente) des Übersetzungsvektors wird auf `0` gesetzt. Beispielsweise entspricht `translate(2px)` `translate(2px, 0)`. Ein Prozentwert bezieht sich auf die Breite des durch die {{cssxref("transform-box")}} Eigenschaft definierten Referenzrahmens.
- Doppelte `<length-percentage>` Werte
  - : Dieser Wert beschreibt zwei {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Werte, die sowohl die Abszisse (horizontal, x-Komponente) als auch die Ordinate (vertikal, y-Komponente) des Übersetzungsvektors [tx, ty] darstellen. Ein Prozentsatz als erster Wert bezieht sich auf die Breite, als zweiter Teil auf die Höhe des durch die {{cssxref("transform-box")}} Eigenschaft definierten Referenzrahmens.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://de.wikipedia.org/wiki/Euklidischer_Raum">ℝ^2</a></th>
      <th scope="col"><a href="https://de.wikipedia.org/wiki/Homogene_Koordinaten">Homogene Koordinaten</a> auf <a href="https://de.wikipedia.org/wiki/Projektive_Ebene">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://de.wikipedia.org/wiki/Euklidischer_Raum">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://de.wikipedia.org/wiki/Projektiver_Raum">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <p>
          Eine Übersetzung ist keine lineare Transformation in ℝ^2 und kann nicht mittels einer Matrix in kartesischen Koordinaten dargestellt werden.
        </p>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & tx \\ 0 & 1 & ty \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>tx</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>ty</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & tx \\ 0 & 1 & 0 & ty \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 1 tx ty]</code></td>
    </tr>
  </tbody>
</table>

### Formale Syntax

```plain
translate({{cssxref("&lt;length-percentage&gt;")}}, {{cssxref("&lt;length-percentage&gt;")}}?)
```

## Beispiele

### Verwendung einer einachsigen Übersetzung

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
  /* Equal to: translateX(10px) or translate(10px, 0) */
  transform: translate(10px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Using_a_single-axis_translation", 250, 250)}}

### Kombination von y-Achsen- und x-Achsen-Übersetzung

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
  transform: translate(10px, 10px);
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Combining_y-axis_and_x-axis_translation", 250, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("translate")}}
