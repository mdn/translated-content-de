---
title: scale3d()
slug: Web/CSS/transform-function/scale3d
l10n:
  sourceCommit: 761b9047d78876cbd153be811efb1aa77b419877
---

{{CSSRef}}

Die **`scale3d()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert eine Transformation, die ein Element im 3D-Raum vergrößert oder verkleinert. Da die Skalierung durch einen Vektor [sx, sy, sz] definiert ist, kann sie unterschiedliche Dimensionen in verschiedenen Maßstäben verändern. Das Ergebnis ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-scale3d.html")}}

Diese Skalentransformation wird durch einen dreidimensionalen Vektor charakterisiert. Seine Koordinaten definieren, wie viel Skalierung in jeder Richtung vorgenommen wird. Wenn alle drei Koordinaten gleich sind, ist die Skalierung einheitlich (_isotrop_), und das {{glossary("Seitenverhältnis")}} des Elements bleibt erhalten (dies ist eine [homothethische Transformation](https://de.wikipedia.org/wiki/Homothetische_Abbildung)).

Wenn ein Koordinatenwert außerhalb des Bereichs \[-1, 1] liegt, wächst das Element entlang dieser Dimension; wenn er innerhalb liegt, schrumpft es. Ist er negativ, resultiert dies in einer [Punktspiegelung](https://de.wikipedia.org/wiki/Punktspiegelung) in dieser Dimension. Ein Wert von 1 hat keinen Effekt.

## Syntax

Die `scale3d()` Funktion wird mit drei Werten spezifiziert, die die Menge der Skalierung darstellen, die in jeder Richtung angewendet werden soll.

```css
scale3d(sx, sy, sz)
```

### Werte

- `sx`
  - : Ist eine {{cssxref("&lt;number&gt;")}}, die die Abszisse (horizontal, x-Komponente) des Skalierungsvektors darstellt.
- `sy`
  - : Ist eine {{cssxref("&lt;number&gt;")}}, die die Ordinate (vertikal, y-Komponente) des Skalierungsvektors darstellt.
- `sz`
  - : Ist eine {{cssxref("&lt;number&gt;")}}, die die z-Komponente des Skalierungsvektors darstellt.

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

## Beispiele

### Ohne Änderung des Ursprungs

#### HTML

```html
<div>Normal</div>
<div class="scaled">Skaliert</div>
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

### Übersetzung des Ursprungs der Transformation

#### HTML

```html
<div>Normal</div>
<div class="scaled">Skaliert</div>
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
