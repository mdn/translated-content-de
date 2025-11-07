---
title: grid-template-rows
slug: Web/CSS/Reference/Properties/grid-template-rows
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Linienneamen und Größenfunktionen der {{Glossary("grid_row", "Gridzeilen")}}.

{{InteractiveExample("CSS Demo: grid-template-rows")}}

```css interactive-example-choice
grid-template-rows: auto;
```

```css interactive-example-choice
grid-template-rows: 40px 4em 40px;
```

```css interactive-example-choice
grid-template-rows: 1fr 2fr 1fr;
```

```css interactive-example-choice
grid-template-rows: 3ch auto minmax(10px, 60px);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Keyword value */
grid-template-rows: none;

/* <track-list> values */
grid-template-rows: 100px 1fr;
grid-template-rows: [line-name] 100px;
grid-template-rows: [line-name1] 100px [line-name2 line-name3];
grid-template-rows: minmax(100px, 1fr);
grid-template-rows: fit-content(40%);
grid-template-rows: repeat(3, 200px);
grid-template-rows: subgrid;
grid-template-rows: masonry;

/* <auto-track-list> values */
grid-template-rows: 200px repeat(auto-fill, 100px) 300px;
grid-template-rows:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-rows:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-rows:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* Global values */
grid-template-rows: inherit;
grid-template-rows: initial;
grid-template-rows: revert;
grid-template-rows: revert-layer;
grid-template-rows: unset;
```

Diese Eigenschaft kann folgendermaßen angegeben werden:

- entweder der Schlüsselwortwert `none`
- oder ein `<track-list>`-Wert
- oder ein `<auto-track-list>`-Wert.

### Werte

- `none`
  - : Ein Schlüsselwort, das bedeutet, dass es kein explizites Grid gibt. Alle Zeilen werden implizit generiert, und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-rows")}} bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/Reference/Values/custom-ident), der einen Namen für die Linie an dieser Stelle angibt. Der Ident kann eine beliebige gültige Zeichenfolge sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch ein Leerzeichen getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, behandelt der Browser den Prozentsatz als `auto` im Hinblick auf die Berechnung der intrinsischen Größe des Grid-Containers. Der Prozentsatz wird dann gegen die resultierende Größe des Grid-Containers zur Anordnung des Grids und seiner Elemente aufgelöst. Der Browser kann die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und kann die endgültige Größe des Tracks um den Mindestbetrag erhöhen, der erforderlich wäre, um den Prozentsatz einzuhalten.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbleibenden Platzes im Verhältnis zu seinem Flex-Faktor ein. Wenn sie außerhalb einer `minmax()`-Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ein Schlüsselwort, das den größtmöglichen Inhaltbeitrag der Grid-Elemente darstellt, die den Grid-Track einnehmen.
- {{cssxref("min-content")}}
  - : Ein Schlüsselwort, das den größtmöglichen minimalen Inhaltbeitrag der Grid-Elemente darstellt, die den Grid-Track einnehmen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Ein `<flex>`-Wert setzt den Flex-Faktor des Tracks als Maximum. Sie ist als Minimum ungültig.
- `auto`
  - : Als Maximalwert stellt es die größtmögliche {{cssxref("max-content")}}-Größe der Elemente in diesem Track dar.

    Als Minimalwert stellt es die größtmögliche Mindestgröße der Elemente in diesem Track dar (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}}-Eigenschaften der Elemente). Dies entspricht oft der {{cssxref("min-content")}}-Größe, aber nicht immer.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen den oben beschriebenen Minimal- und Maximalwerten. In den meisten Fällen verhält es sich ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `auto`-Trackgrößen (und nur `auto`-Trackgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt ein `auto`-großer Track standardmäßig jeden verbleibenden Platz im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` (d.h. `minmax(auto, max-content)`) berechnet wird, außer dass die Track-Größe beim _argument_ abgeschnitten wird, wenn sie größer als das `auto`-Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Trackliste, das es ermöglicht, eine große Anzahl von Zeilen, die ein wiederkehrendes Muster aufweisen, in kompakter Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Gibt an, dass diese Achse gemäß dem Masonry-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Gibt an, dass das Grid den überspannten Teil seines übergeordneten Grids auf dieser Achse übernehmen wird. Anstatt ausdrücklich angegeben zu werden, werden die Größen der Gridzeilen/-spalten aus der Definition des übergeordneten Grids übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Grid-Zeilengrößen angeben

#### HTML

```html
<div id="grid">
  <div id="areaA">A</div>
  <div id="areaB">B</div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-rows: 30px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample("Specifying_grid_row_sizes", "40px", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Grundlegende Konzepte des Grid-Layouts: Grid-Tracks](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
