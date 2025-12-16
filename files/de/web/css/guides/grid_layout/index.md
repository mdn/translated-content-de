---
title: CSS-Grid-Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Grid-Layout**-Modul eignet sich hervorragend zur Aufteilung einer Seite in Hauptbereiche oder zur Definition der Beziehung in Bezug auf Größe, Position und Schichtung zwischen Teilen einer Steuerung, die aus HTML-Grundelementen besteht.

Wie bei Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Zeilen auszurichten. Allerdings sind mit CSS-Grid viele weitere Layouts entweder möglich oder leichter zu erstellen, als es mit Tabellen der Fall war. Beispielsweise können sich die Kindelemente eines Grid-Containers so positionieren, dass sie sich tatsächlich überlappen und schichten, ähnlich wie CSS-Elemente mit fester Positionierung.

## Grid-Layout in Aktion

Das Beispiel zeigt ein Grid mit drei Spalten-Tracks, wobei neue Zeilen mit mindestens 100 Pixeln und maximal automatisch erstellt werden. Elemente wurden mithilfe einer linienbasierten Platzierung auf das Grid gesetzt.

```html hidden
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  max-width: 940px;
  margin: 0 auto;
}
.wrapper > div {
  border: 2px solid rgb(233 171 88);
  border-radius: 5px;
  background-color: rgb(233 171 88 / 50%);
  padding: 1em;
  color: #d9480f;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.one {
  grid-column: 1 / 3;
  grid-row: 1;
}
.two {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
.three {
  grid-column: 1;
  grid-row: 2 / 5;
}
.four {
  grid-column: 3;
  grid-row: 3;
}
.five {
  grid-column: 2;
  grid-row: 4;
}
.six {
  grid-column: 3;
  grid-row: 4;
}
```

{{EmbedLiveSample("Grid_layout_in_action", "100%", "460")}}

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Grid zu erstellen, und {{cssxref("grid-column")}} sowie {{cssxref("grid-row")}}, um die Elemente im Grid zu positionieren. Um den verwendeten HTML- und CSS-Code anzusehen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf 'Play'.

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} Kurzschreibweise
- {{CSSxRef("grid")}} Kurzschreibweise
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} Kurzschreibweise
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} Kurzschreibweise
- {{CSSxRef("grid-area")}} Kurzschreibweise

### Funktionen

- {{cssxref("repeat()")}}
- {{cssxref("minmax()")}}
- {{cssxref("fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr` Einheit)

### Begriffe und Glossareinträge

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_areas", "Grid-Bereiche")}}
- {{Glossary("Grid_axis", "Grid-Achse")}}
- {{Glossary("Grid_cell", "Grid-Zelle")}}
- {{Glossary("Grid_column", "Grid-Spalte")}}
- {{Glossary("Grid_container", "Grid-Container")}}
- {{Glossary("Grid_lines", "Grid-Linien")}}
- {{Glossary("Grid_row", "Grid-Zeile")}}
- {{Glossary("Grid_tracks", "Grid-Tracks")}}
- {{Glossary("Gutters", "Gutters")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen, die im CSS-Grid-Layout-Modul bereitgestellt werden.

- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie das Grid-Layout zusammen mit anderen CSS-Funktionen, einschließlich Flexbox, absolut positionierten Elementen und `display: contents` passt.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Grid-Linien und wie Elemente im Verhältnis zu diesen Linien positioniert werden, einschließlich der `grid-area`-Eigenschaften, negativer Liniennummern, des Übergreifens mehrerer Zellen und der Erstellung von Grid-Gutters.

- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzierung von Grid-Elementen mit benannten Template-Bereichen.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Track-Größen; Platzierung von Grid-Elementen durch Definition benannter Grid-Linien und Template-Bereichen.

- [Auto-Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie das Grid Elemente platziert, die keine Platzierungseigenschaften deklariert haben.

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der zwei Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Ein Blick auf die Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi sowie CSS-logische und physische Eigenschaften und Werte.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Ein Blick darauf, wie das CSS-Grid-Layout sowohl helfen als auch die Barrierefreiheit beeinträchtigen kann.

- [Übliche Layouts mit Grids realisieren](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Einige verschiedene Layouts, die verschiedene Techniken demonstrieren, die Sie beim Entwerfen mit CSS-Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, eines flexiblen 12-Spalten-Grid-Systems und einer Produktliste mithilfe automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was Subgrid macht mit Anwendungsfällen und Designmustern, die Subgrid löst.

- [Mauerwerks-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Details darüber, was das Mauerwerks-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}

[CSS-Box-Modell](/de/docs/Web/CSS/Guides/Box_sizing) Modul

- {{cssxref("aspect-ratio")}}
- {{cssxref("box-sizing")}}
- {{cssxref("height")}}
- {{cssxref("max-height")}}
- {{cssxref("max-width")}}
- {{cssxref("min-height")}}
- {{cssxref("min-width")}}
- {{cssxref("width")}}
- {{cssxref("ratio")}} Datentyp
- {{cssxref("min-content")}} Wert
- {{cssxref("max-content")}} Wert
- {{cssxref("fit-content")}} Wert
- {{cssxref("fit-content()")}} Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS-Grid-Garten](https://cssgridgarden.com/) - Ein Spiel zum Erlernen des CSS-Grid
