---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: 63ee77640b37923473f9363e0749a0851578bf5a
---

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und Größendefinitionsfunktionen der {{Glossary("grid_row", "Grid-Reihen")}}.

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

Diese Eigenschaft kann wie folgt angegeben werden:

- entweder als Schlüsselwortwert `none`
- oder als `<track-list>` Wert
- oder als `<auto-track-list>` Wert.

### Werte

- `none`
  - : Ein Schlüsselwort, das bedeutet, dass es kein explizites Grid gibt. Alle Reihen werden implizit generiert und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-rows")}} bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Die Identifikation kann jede gültige Zeichenkette außer den reservierten Wörtern `span` und `auto` sein. Linien können mehrere Namen haben, die durch ein Leerzeichen in den eckigen Klammern getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}} Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, behandelt der Browser den Prozentsatz als `auto` zur Berechnung der intrinsischen Größe des Grid-Containers. Der Prozentsatz wird dann bezogen auf die resultierende Größe des Grid-Containers für die Layoutgestaltung des Grids und seiner Elemente aufgelöst. Der Browser kann die intrinsischen Größenbeiträge des Tracks zur Größe des Grid-Containers anpassen und die endgültige Größe des Tracks um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu erfüllen.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbleibenden Platzes proportional zu seinem Flex-Faktor ein. Wenn er außerhalb einer `minmax()` Notation erscheint, impliziert er ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Grid-Elemente darstellt, die den Grid-Track belegen.
- {{cssxref("min-content")}}
  - : Ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Grid-Elemente darstellt, die den Grid-Track belegen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>` Wert den Flex-Faktor des Tracks. Es ist als Minimum ungültig.
- `auto`
  - : Als Maximalwert repräsentiert es die größte {{cssxref("max-content")}} Größe der Elemente in diesem Track.

    Als Mindestwert repräsentiert es die größte Mindestgröße von Elementen in diesem Track (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} Eigenschaften der Elemente). Dies entspricht oft der {{cssxref("min-content")}} Größe, aber nicht immer.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet, repräsentiert `auto` den Bereich zwischen den oben beschriebenen Mindest- und Maximalwerten. In den meisten Fällen verhält sich dies ähnlich wie `minmax(min-content, max-content)`.

    > [!NOTE]
    > `auto` Track-Größen (und nur `auto` Track-Größen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt ein `auto`-großer Track standardmäßig jeden verbleibenden Raum im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Track-Größe bei _argument_ eingeklemmt wird, wenn es größer als das `auto` Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Track-Liste, das eine große Anzahl von Reihen, die ein wiederkehrendes Muster aufweisen, in kompakterer Form ermöglicht.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Gibt an, dass diese Achse nach dem Masonry-Algorithmus layoutiert werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Gibt an, dass das Grid den überspannten Teil des Elterngrids auf dieser Achse übernimmt. Anstatt explizit spezifiziert zu werden, werden die Größen der Grid-Reihen/Spalten aus der Definition des Elterngrids übernommen.

## Formale Definition

{{cssinfo}}

## Formaler Syntax

{{csssyntax}}

## Beispiele

### Angabe von Grid-Reihengrößen

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
- [Grundkonzepte des Grid-Layouts: Grid-Tracks](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Grids](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
