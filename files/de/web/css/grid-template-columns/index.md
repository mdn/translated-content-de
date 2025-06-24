---
title: grid-template-columns
slug: Web/CSS/grid-template-columns
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{CSSRef}}

Die **`grid-template-columns`** [CSS](/de/docs/Web/CSS) Eigenschaft definiert die Liniennamen und die Spurgrößenfunktionen der {{Glossary("grid_column", "Grid-Spalten")}}.

{{InteractiveExample("CSS Demo: grid-template-columns")}}

```css interactive-example-choice
grid-template-columns: 60px 60px;
```

```css interactive-example-choice
grid-template-columns: 1fr 60px;
```

```css interactive-example-choice
grid-template-columns: 1fr 2fr;
```

```css interactive-example-choice
grid-template-columns: 8ch auto;
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
  grid-auto-rows: 40px;
  grid-gap: 10px;
  width: 200px;
}

#example-element > div {
  background-color: rgba(0, 0, 255, 0.2);
  border: 3px solid blue;
}
```

## Syntax

```css
/* Keyword value */
grid-template-columns: none;

/* <track-list> values */
grid-template-columns: 100px 1fr;
grid-template-columns: [line-name] 100px;
grid-template-columns: [line-name1] 100px [line-name2 line-name3];
grid-template-columns: minmax(100px, 1fr);
grid-template-columns: fit-content(40%);
grid-template-columns: repeat(3, 200px);
grid-template-columns: subgrid;
grid-template-columns: masonry;

/* <auto-track-list> values */
grid-template-columns: 200px repeat(auto-fill, 100px) 300px;
grid-template-columns:
  minmax(100px, max-content)
  repeat(auto-fill, 200px) 20%;
grid-template-columns:
  [line-name1] 100px [line-name2]
  repeat(auto-fit, [line-name3 line-name4] 300px)
  100px;
grid-template-columns:
  [line-name1 line-name2] 100px
  repeat(auto-fit, [line-name1] 300px) [line-name3];

/* Global values */
grid-template-columns: inherit;
grid-template-columns: initial;
grid-template-columns: revert;
grid-template-columns: revert-layer;
grid-template-columns: unset;
```

### Werte

- `none`
  - : Gibt an, dass kein explizites Grid vorhanden ist. Alle Spalten werden implizit generiert, und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-columns")}} bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Position angibt. Der Identifikator kann jede gültige Zeichenfolge sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch ein Leerzeichen getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht negative Länge, die die Breite der Spalte angibt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Inline-Größe des Grid-Containers. Wenn die Größe des Grid-Containers von der Größe seiner Tracks abhängt, muss der Prozentsatz als `auto` behandelt werden. Die Eigenbeiträge der Spurgröße können an die Größe des Grid-Containers angepasst werden und die endgültige Größe der Spur um den Mindestbetrag erhöhen, der erforderlich ist, um den Prozentsatz zu honorieren.
- {{cssxref("&lt;flex&gt;")}}

  - : Eine nicht negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-größenbestimmte Spur nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor ein.

    Wenn es außerhalb einer `minmax()` Notation erscheint, impliziert es ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ein Schlüsselwort, das den größten [maximalen Inhaltsbeitrag](https://drafts.csswg.org/css-sizing-3/#max-content) der Grid-Elemente repräsentiert, die die Spur belegen. Zum Beispiel, wenn das erste Element der Spur den Satz _"Repetitio est mater studiorum"_ enthält und das zweite Element den Satz _"Dum spiro, spero"_, wird der maximale Inhaltsbeitrag durch die Größe des größten Satzes unter allen Grid-Elementen definiert - _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Ein Schlüsselwort, das den größten [minimalen Inhaltsbeitrag](https://drafts.csswg.org/css-sizing-3/#min-content) der Grid-Elemente repräsentiert, die die Spur belegen. Zum Beispiel, wenn das erste Element der Spur den Satz _"Repetitio est mater studiorum"_ enthält und das zweite Element den Satz _"Dum spiro, spero"_, wird der minimale Inhaltsbeitrag durch die Größe des größten Wortes unter allen Sätzen in den Grid-Elementen definiert - _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor der Spur. Es ist als Minimum ungültig.
- `auto`

  - : Als Maximum repräsentiert es die größte {{cssxref("max-content")}} Größe der Elemente in dieser Spur.

    Als Minimum repräsentiert es die größte Mindestgröße der Elemente in dieser Spur (festgelegt durch die {{cssxref("min-width")}}/{{cssxref("min-height")}} der Elemente). Dies ist oft, aber nicht immer, die {{cssxref("min-content")}} Größe.

    Wenn außerhalb der {{cssxref("minmax", "minmax()")}} Notation verwendet, repräsentiert `auto` den Bereich zwischen dem oben beschriebenen Minimum und Maximum. Dies verhält sich in den meisten Fällen ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE] > `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt eine `auto`-große Spur standardmäßig jeden verbleibenden Platz im Grid-Container ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Repräsentiert die Formel `max(minimum, min(limit, max-content))`, wobei _minimum_ ein `auto` Minimum repräsentiert (was oft, aber nicht immer, gleich einem {{cssxref("min-content")}} Minimum ist), und _limit_ die Spurgrößenfunktion ist, die als Argument an fit-content() übergeben wird. Dies wird im Wesentlichen als das kleinere von `minmax(auto, max-content)` und `minmax(auto, limit)` berechnet.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Repräsentiert ein wiederholtes Fragment der Spurliste, das es ermöglicht, eine große Anzahl von Spalten, die ein wiederkehrendes Muster aufweisen, in kompakterer Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der Wert `masonry` gibt an, dass diese Achse entsprechend dem Masonry-Algorithmus ausgelegt werden sollte.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der Wert `subgrid` gibt an, dass das Grid den überlagerten Teil seines Eltern-Grids in dieser Achse übernehmen wird. Statt ausdrücklich angegeben zu werden, werden die Größen der Grid-Reihen/Spalten aus der Definition des Eltern-Grids übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizierung von Grid-Spaltengrößen

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
  width: 100%;
  grid-template-columns: 50px 1fr;
}

#areaA {
  background-color: lime;
}

#areaB {
  background-color: yellow;
}
```

#### Ergebnis

{{EmbedLiveSample("Specifying_grid_column_sizes", "100%", "20px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-template-areas")}}
- {{cssxref("grid-template")}}
- [Grundkonzepte des Grid-Layouts: Grid-Tracks](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Grids](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
