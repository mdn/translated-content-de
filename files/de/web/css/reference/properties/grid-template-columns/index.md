---
title: grid-template-columns
slug: Web/CSS/Reference/Properties/grid-template-columns
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`grid-template-columns`**-Eigenschaft von [CSS](/de/docs/Web/CSS) definiert die Liniennamen und Spurgrößenfunktionen der {{Glossary("grid_column", "Gitterspalten")}}.

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
  background-color: rgb(0 0 255 / 0.2);
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
  - : Gibt an, dass es kein explizites Gitter gibt. Alle Spalten werden implizit generiert und ihre Größe wird durch die {{cssxref("grid-auto-columns")}}-Eigenschaft bestimmt.
- `[line-name]`
  - : Ein [`<custom-ident>`](/de/docs/Web/CSS/custom-ident), das einen Namen für die Linie an dieser Stelle angibt. Der Identifikator kann ein beliebiger gültiger String außer den reservierten Wörtern `span` und `auto` sein. Linien können mehrere, durch ein Leerzeichen getrennte Namen in den eckigen Klammern haben, beispielsweise `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht negative Länge, die die Breite der Spalte angibt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Inline-Größe des Gittercontainers. Wenn die Größe des Gittercontainers von der Größe seiner Spuren abhängt, behandelt der Browser den Prozentsatz als `auto`. Der Browser kann die intrinsischen Größenbeiträge der Spur zur Größe des Gittercontainers anpassen und die endgültige Größe der Spur um das Minimum erhöhen, das erforderlich ist, um den Prozentsatz zu erfüllen.
- {{cssxref("&lt;flex&gt;")}}
  - : Ist eine nicht negative Dimension mit der Einheit `fr`, die den Flex-Faktor der Spur angibt. Jede `<flex>`-dimensionierte Spur nimmt einen Anteil des verbleibenden Raums im Verhältnis zu ihrem Flex-Faktor ein.

    Wenn es außerhalb einer `minmax()`-Notation erscheint, bedeutet es ein automatisches Minimum (d. h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten [maximalen Inhaltsbeitrag](https://drafts.csswg.org/css-sizing-3/#max-content) der die Gitterspur belegenden Gitterelemente darstellt. Zum Beispiel, wenn das erste Element der Gitterspur den Satz _"Repetitio est mater studiorum"_ und das zweite Element den Satz _"Dum spiro, spero"_ enthält, wird der maximale Inhaltsbeitrag durch die Größe des größten Satzes unter allen Giterelementen definiert - _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten [minimalen Inhaltsbeitrag](https://drafts.csswg.org/css-sizing-3/#min-content) der die Gitterspur belegenden Giterelemente darstellt. Zum Beispiel, wenn das erste Element der Gitterspur den Satz _"Repetitio est mater studiorum"_ und das zweite Element den Satz _"Dum spiro, spero"_ enthält, wird der minimale Inhaltsbeitrag durch die Größe des größten Wortes unter allen Sätzen in den Giterelementen definiert - _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor der Spur. Es ist als Minimum ungültig.
- `auto`
  - : Als Maximalwert stellt es die größte {{cssxref("max-content")}}-Größe der Elemente in dieser Spur dar.

    Als Minimalwert stellt es die größte Mindestgröße der Elemente in dieser Spur dar (angegeben durch die {{cssxref("min-width")}}/{{cssxref("min-height")}}-Eigenschaften der Elemente). Dies entspricht oft der {{cssxref("min-content")}}-Größe, aber nicht immer.

    Wenn es außerhalb der {{cssxref("minmax", "minmax()")}}-Notation verwendet wird, stellt `auto` den Bereich zwischen den oben beschriebenen Minimal- und Maximalwerten dar. In den meisten Fällen verhält es sich ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `auto` Spurgrößen (und nur `auto` Spurgrößen) können durch die {{cssxref("align-content")}}- und {{cssxref("justify-content")}}-Eigenschaften gedehnt werden. Daher nimmt eine `auto` dimensionierte Spur standardmäßig den verbleibenden Platz im Gittercontainer ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Stellt die Formel `max(minimum, min(limit, max-content))` dar, wobei _minimum_ ein `auto`-Minimum (das oft, aber nicht immer, einem {{cssxref("min-content")}}-Minimum entspricht) darstellt und _limit_ die Spurgrößenfunktion ist, die als Argument an fit-content() übergeben wird. Dies wird im Wesentlichen als das kleinere von `minmax(auto, max-content)` und `minmax(auto, limit)` berechnet.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Stellt ein wiederholtes Fragment der Spurliste dar und erlaubt es, eine große Anzahl von Spalten, die ein wiederkehrendes Muster aufweisen, in einer kompakteren Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Der Mauerwert zeigt an, dass diese Achse gemäß dem Maueralgorithmus angelegt werden soll.
- [`subgrid`](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Der `subgrid`-Wert zeigt an, dass das Gitter den überspannten Teil seines übergeordneten Gitters in dieser Achse übernehmen wird. Anstatt explizit angegeben zu werden, werden die Größen der Gitterszeilen/-spalten aus der Definition des übergeordneten Gitters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifizieren von Gitterspaltengrößen

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
- [Grundkonzepte des Gitterlayouts: Gitterspuren](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)
- Video: [Definieren eines Gitters](https://gridbyexample.com/video/series-define-a-grid/)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
