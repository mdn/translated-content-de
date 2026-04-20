---
title: "`grid-template-columns` CSS property"
short-title: grid-template-columns
slug: Web/CSS/Reference/Properties/grid-template-columns
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`grid-template-columns`** [CSS](/de/docs/Web/CSS)-Eigenschaft definiert die Liniennamen und die Größenfunktionen der {{Glossary("grid_column", "Gittersäulen")}}.

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
  - : Gibt an, dass kein explizites Gitter vorhanden ist. Alle Spalten werden implizit generiert und ihre Größe wird durch die Eigenschaft {{cssxref("grid-auto-columns")}} bestimmt.
- `[line-name]`
  - : Ein {{cssxref("custom-ident")}}, der einen Namen für die Linie an dieser Stelle spezifiziert. Das Ident kann jede gültige Zeichenfolge sein, außer den reservierten Wörtern `span` und `auto`. Linien können mehrere Namen haben, die innerhalb der eckigen Klammern durch Leerzeichen getrennt sind, zum Beispiel `[line-name-a line-name-b]`.
- {{cssxref("&lt;length&gt;")}}
  - : Eine nicht-negative Länge, die die Breite der Spalte angibt.
- {{cssxref("&lt;percentage&gt;")}}
  - : Ein nicht-negativer {{cssxref("percentage", "&lt;percentage&gt;")}}-Wert relativ zur Inline-Größe des Gittercontainers. Wenn die Größe des Gittercontainers von der Größe seiner Tracks abhängt, behandelt der Browser den Prozentsatz als `auto`.
    Der Browser kann die intrinsischen Größenbeiträge des Tracks an die Größe des Gittercontainers anpassen und die endgültige Größe des Tracks um den minimalen Betrag erhöhen, der erforderlich ist, um den Prozentsatz zu berücksichtigen.
- {{cssxref("&lt;flex&gt;")}}
  - : Ist eine nicht-negative Dimension mit der Einheit `fr`, die den Flex-Faktor des Tracks angibt. Jeder `<flex>`-große Track nimmt einen Anteil des verbleibenden Platzes im Verhältnis zu seinem Flex-Faktor ein.

    Wenn außerhalb einer `minmax()`-Notation auftretend, impliziert es ein automatisches Minimum (d.h. `minmax(auto, <flex>)`).

- {{cssxref("max-content")}}
  - : Ist ein Schlüsselwort, das den größten [maximalen Inhaltsbeitrag](https://drafts.csswg.org/css-sizing-3/#max-content) der Gitternetz-Elemente darstellt, die den Gitternettrack belegen. Zum Beispiel, wenn das erste Element des Gitternettracks den Satz _"Repetitio est mater studiorum"_ enthält und das zweite Element den Satz _"Dum spiro, spero"_, wird der maximale Inhaltsbeitrag durch die Größe des größten Satzes unter allen Gitterelementen definiert - _"Repetitio est mater studiorum"_.
- {{cssxref("min-content")}}
  - : Ist ein Schlüsselwort, das den größten [minimalen Inhaltsbeitrag](https://drafts.csswg.org/css-sizing-3/#min-content) der Gitternetz-Elemente darstellt, die den Gitternettrack belegen. Zum Beispiel, wenn das erste Element des Gitternettracks den Satz _"Repetitio est mater studiorum"_ enthält und das zweite Element den Satz _"Dum spiro, spero"_, wird der minimale Inhaltsbeitrag durch die Größe des größten Wortes unter allen Sätzen in den Gitterelementen definiert - _"studiorum"_.
- {{cssxref("minmax", "minmax(min, max)")}}
  - : Ist eine funktionale Notation, die einen Größenbereich definiert, der größer oder gleich _min_ und kleiner oder gleich _max_ ist. Wenn _max_ kleiner als _min_ ist, wird _max_ ignoriert und die Funktion als _min_ behandelt. Als Maximum setzt ein `<flex>`-Wert den Flex-Faktor des Tracks. Es ist als Minimum ungültig.
- `auto`
  - : Als maximaler Wert stellt es die größte {{cssxref("max-content")}}-Größe der Elemente in diesem Track dar.

    Als minimaler Wert stellt es die größte Mindestgröße der Elemente in diesem Track dar (festgelegt durch die {{cssxref("min-width")}}/{{cssxref("min-height")}}-Eigenschaften der Elemente). Dies entspricht häufig der {{cssxref("min-content")}}-Größe, aber nicht immer.

    Wenn außerhalb von {{cssxref("minmax()")}}-Notation verwendet, stellt `auto` den Bereich zwischen den oben beschriebenen minimalen und maximalen Werten dar. In den meisten Fällen verhält es sich ähnlich wie `minmax(min-content,max-content)`.

    > [!NOTE]
    > `Auto`-Track-Größen (und nur `auto`-Track-Größen) können durch die Eigenschaften {{cssxref("align-content")}} und {{cssxref("justify-content")}} gestreckt werden. Daher nimmt ein `auto`-großer Track standardmäßig den verbleibenden Platz im Gittercontainer ein.

- {{cssxref("fit-content_function", "fit-content( [ &lt;length&gt; | &lt;percentage&gt; ] )")}}
  - : Stellt die Formel `max(minimum, min(limit, max-content))` dar, wobei _minimum_ ein automatic Minimum darstellt (das häufig, aber nicht immer, einem {{cssxref("min-content")}}-Minimum entspricht), und _limit_ die Track-Größenfunktion ist, die als Argument an fit-content() übergeben wird. Grundsätzlich wird dies als die kleinere von `minmax(auto, max-content)` und `minmax(auto, limit)` berechnet.
- {{cssxref("repeat", "repeat( [ &lt;positive-integer&gt; | auto-fill | auto-fit ] , &lt;track-list&gt; )")}}
  - : Stellt ein wiederholtes Fragment der Track-Liste dar, das es ermöglicht, eine große Anzahl von Spalten mit einem wiederkehrenden Muster in kompakter Form zu schreiben.
- [`masonry`](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Der Mauerwerkswert gibt an, dass diese Achse gemäß dem Mauerwerksalgorithmus ausgelegt werden soll.
- [`subgrid`](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Der `subgrid`-Wert gibt an, dass das Gitter den überbrückten Teil seines Eltern-Gitters auf dieser Achse übernehmen wird. Anstatt explizit festgelegt zu werden, werden die Größen der Gitterzeilen/-spalten von der Definition des Eltern-Gitters übernommen.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Größen der Gitterspalten angeben

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
- [Grundkonzepte des Gitterlayouts: Gitterstreifen](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#grid_tracks)
- Video: [Ein Gitter definieren](https://gridbyexample.com/video/series-define-a-grid/)
- [Untergitter](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
