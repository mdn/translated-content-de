---
title: scale()
slug: Web/CSS/transform-function/scale
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`scale()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert eine Transformation, die ein Element auf der 2D-Ebene skaliert. Da der Skalierungsfaktor durch einen Vektor [sx, sy] definiert ist, können die horizontalen und vertikalen Dimensionen in unterschiedlichen Maßstäben skaliert werden. Das Resultat ist ein {{cssxref("&lt;transform-function&gt;")}} Datentyp.

{{EmbedInteractiveExample("pages/css/function-scale.html")}}

Diese Skalierungstransformation wird durch einen zweidimensionalen Vektor charakterisiert. Ihre Koordinaten bestimmen, wie viel Skalierung in jeder Richtung erfolgt. Wenn beide Koordinaten gleich sind, ist die Skalierung einheitlich (_isotrop_) und das Seitenverhältnis des Elements bleibt erhalten (dies ist eine [homothetische Transformation](https://en.wikipedia.org/wiki/Homothetic_transformation)).

Wenn ein Koordinatenwert außerhalb des Bereichs \[-1, 1] liegt, wächst das Element entlang dieser Dimension; innerhalb des Bereichs schrumpft es. Ein negativer Wert führt zu einer [Punktspiegelung](https://en.wikipedia.org/wiki/Point_reflection) in dieser Dimension. Der Wert `1` hat keinen Effekt.

> [!NOTE]
> Die `scale()` Funktion skaliert nur in 2D. Um in 3D zu skalieren, verwenden Sie stattdessen [`scale3d()`](/de/docs/Web/CSS/transform-function/scale3d).

## Syntax

Die `scale()` Funktion wird mit einem oder zwei Werten angegeben, die die Menge der Skalierung in jeder Richtung darstellen.

```css
scale(sx)

scale(sx, sy)
```

### Werte

- `sx`
  - : Ein {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} das die Abszisse (horizontal, x-Komponente) des Skalierungsvektors darstellt.
- `sy`
  - : Ein {{cssxref("&lt;number&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} das die Ordinate (vertikal, y-Komponente) des Skalierungsvektors darstellt. Wenn nicht definiert, ist der Standardwert `sx`, was zu einer einheitlichen Skalierung führt, die das {{glossary("Seitenverhältnis")}} des Elements beibehält.

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
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cc} sx & 0 \\ 0 & sy \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td>
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{ccc} sx & 0 & 0 \\ 0 & sy & 0 \\ 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
      <td rowspan="2">
        <math display="block">
          <semantics><mrow><mo>(</mo><mtable><mtr><mtd><mi>sx</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mi>sy</mi></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>)</mo></mrow><annotation encoding="TeX">\left( \begin{array}{cccc} sx & 0 & 0 & 0 \\ 0 & sy & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array} \right)</annotation></semantics>
        </math>
      </td>
    </tr>
    <tr>
      <td><code>[sx 0 0 sy 0 0]</code></td>
    </tr>
  </tbody>
</table>

## Barrierefreiheit

Skalierungs-/Zoom-Animationen sind problematisch für die Barrierefreiheit, da sie oft Auslöser für bestimmte Arten von Migräne sind. Wenn Sie solche Animationen auf Ihrer Website einfügen müssen, sollten Sie eine Steuerung bereitstellen, die es den Nutzern ermöglicht, Animationen auszuschalten, vorzugsweise für die gesamte Website.

Berücksichtigen Sie auch die Verwendung des {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}} Media-Features — verwenden Sie es, um eine [Media Query](/de/docs/Web/CSS/CSS_media_queries) zu schreiben, die Animationen ausschaltet, wenn der Nutzer in seinen Systemeinstellungen reduzierte Animationen angegeben hat.

Erfahren Sie mehr:

- [MDN Understanding WCAG, Erläuterungen zur Richtlinie 2.3](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.3_%e2%80%94_seizures_and_physical_reactions_do_not_design_content_in_a_way_that_is_known_to_cause_seizures_or_physical_reactions)
- [Verständnis des Erfolgskriteriums 2.3.3 | W3C Understanding WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)

## Beispiele

### Gleichzeitige Skalierung der X- und Y-Dimensionen

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
  transform: scale(0.7); /* Entspricht scaleX(0.7) scaleY(0.7) */
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Scaling_the_X_and_Y_dimensions_together", "200", "200")}}

### Separate Skalierung der X- und Y-Dimensionen und Übersetzung des Ursprungs

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
  transform: scale(2, 0.5); /* Entspricht scaleX(2) scaleY(0.5) */
  transform-origin: left;
  background-color: pink;
}
```

#### Ergebnis

{{EmbedLiveSample("Scaling_X_and_Y_dimensions_separately_and_translating_the_origin", "200", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("transform")}}
- {{cssxref("scale")}}
- {{cssxref("zoom")}}
- {{cssxref("&lt;transform-function&gt;")}}
- {{cssxref("transform-function/scale3d", "scale3d()")}}
- Weitere einzelne Transform-Eigenschaften: {{cssxref("translate")}} und {{cssxref("rotate")}}
