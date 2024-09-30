---
title: scaleY()
slug: Web/CSS/transform-function/scaleY
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{CSSRef}}

Die **`scaleY()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert eine Transformation, die ein Element entlang der y-Achse (vertikal) vergrößert oder verkleinert. Ihr Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-scaleY.html")}}

Sie verändert die Ordinate (vertikal, y-Koordinate) jedes Punktes eines Elements um einen konstanten Faktor, außer wenn der Skalierungsfaktor 1 ist, in welchem Fall die Funktion die Identitätstransformation ist. Die Skalierung ist nicht isotrop und die Winkel des Elements bleiben nicht erhalten. `scaleY(-1)` definiert eine [Axialsymmetrie](https://en.wikipedia.org/wiki/Axial_symmetry), mit einer horizontalen Achse, die durch den Ursprung verläuft (wie durch die {{cssxref("transform-origin")}} Eigenschaft angegeben).

> **Note:** `scaleY(sy)` ist gleichbedeutend mit
> `scale(1, sy)` oder
> `scale3d(1, sy, 1)`.
>
> `transform: rotateX(180deg);` === `transform: scaleY(-1);`

## Syntax

```css
scaleY(s)
```

### Werte

- `s`
  - : Ist eine {{cssxref("&lt;number&gt;")}}, die den Skalierungsfaktor darstellt, der auf die Ordinate (vertikal, y-Koordinate) jedes Punkts des Elements angewendet wird.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col"><a href="/de/docs/Web/CSS/transform-function#cartesian_coordinates">Kartesische Koordinaten</a> auf <a href="https://de.wikipedia.org/wiki/Euklidische_Geometrie">ℝ^2</a></th>
      <th scope="col"><a href="https://de.wikipedia.org/wiki/Homogene_Koordinaten">Homogene Koordinaten</a> auf <a href="https://de.wikipedia.org/wiki/Projektiver_Raum#Ebenen">ℝℙ^2</a></th>
      <th scope="col">Kartesische Koordinaten auf <a href="https://de.wikipedia.org/wiki/Euklidische_Geometrie">ℝ^3</a></th>
      <th scope="col">Homogene Koordinaten auf <a href="https://de.wikipedia.org/wiki/Projektiver_Raum">ℝℙ^3</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} 1 & 0 \\ 0 & s \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ 0 & s & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} 1 & 0 & 0 \\ 0 & s & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>s</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} 1 & 0 & 0 & 0 \\ 0 & s & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[1 0 0 s 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Beispiele

### HTML

```html
<div>Normal</div>
<div class="scaled">Scaled</div>
```

### CSS

```css
div {
  width: 80px;
  height: 80px;
  background-color: skyblue;
}

.scaled {
  transform: scaleY(0.6);
  background-color: pink;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 200, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scaleX()`](/de/docs/Web/CSS/transform-function/scaleX)
- [`scaleZ()`](/de/docs/Web/CSS/transform-function/scaleZ)
- {{cssxref("transform")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-origin")}}
- Einzelne Transformations-Eigenschaften:
  - {{cssxref("translate")}}
  - {{cssxref("scale")}}
  - {{cssxref("rotate")}}
  - Hinweis: Es gibt keine `skew` Eigenschaft
