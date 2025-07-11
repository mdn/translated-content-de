---
title: grid-template-rows
slug: Web/CSS/grid-template-rows
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{CSSRef}}

Die **`grid-template-rows`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und die Spurgrößenfunktionen der {{Glossary("grid_row", "Grid-Reihen")}}.

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

- entweder als Schlüsselwortwert `none`
- oder als `<track-list>`-Wert
- oder als `<auto-track-list>`-Wert.

### Werte

- `none`
  - : Ist ein Schlüsselwort, das bedeutet, dass es kein explizites Grid gibt. Alle Reihen werden implizit erzeugt, und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-rows")}} bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Das Identifikator kann jeder gültige String sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die in den eckigen Klammern durch ein Leerzeichen getrennt sind, z.B. `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Ist eine nicht-negative Länge.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ist ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert, relativ zur Blockgröße des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Spuren abhängt, muss der Prozentsatz für die Berechnung der intrinsischen Größe des Grid-Containers als `auto` betrachtet werden. Er muss dann an die resultierende Größe des Grid-Containers angepasst werden, um das Grid und seine Elemente zu layouten. Die intrinsischen Größenbeiträge der Spur können an die Größe des Grid-Containers angepasst werden und die endgültige Größe der Spur um den minimal erforderlichen Betrag erhöhen, der den Prozentsatz berücksichtigen würde.
- {{cssxref("&lt;flex_value&gt;","&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-große Spur nimmt einen Anteil des verbleibenden Raums proportional zu ihrem Flex-Faktor ein. Wenn sie außerhalb einer `minmax()`-Notation erscheint, impliziert sie ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).
- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten maximalen Inhaltsbeitrag der Grid-Elemente darstellt, die die Grid-Spur belegen.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten minimalen Inhaltsbeitrag der Grid-Elemente darstellt, die die Grid-Spur belegen.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion wird als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor der Spur. Es ist als Minimum ungültig.
- `auto`
  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte Mindestgröße der Elemente in dieser Spur (spezifiziert durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}}-Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt eine `auto`-Spur standardmäßig den restlichen Platz im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `min(max-content, max(auto, argument))`, die ähnlich wie `auto` berechnet wird (d.h. `minmax(auto, max-content)`), außer dass die Spurgröße auf _argument_ begrenzt wird, wenn sie größer als das `auto`-Minimum ist.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Trackliste, das es ermöglicht, eine große Anzahl von Reihen mit einem wiederkehrenden Muster in kompakter Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der `masonry`-Wert gibt an, dass diese Achse gemäß dem Masonry-Algorithmus angeordnet werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der `subgrid`-Wert zeigt an, dass das Grid den überdeckten Bereich seines Eltern-Grids auf dieser Achse übernimmt. Anstatt explizit angegeben zu werden, werden die Größen der Grid-Reihen/Spalten aus der Definition des Eltern-Grids übernommen.

## Formal definition

{{cssinfo}}

## Formal syntax

{{csssyntax}}

## Beispiele

### Spezifizierung der Grid-Reihengrößen

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
- [Grundkonzepte des Grid-Layouts: Grid-Spuren](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Grids](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
