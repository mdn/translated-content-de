---
title: CSS-Grid-Layout
slug: Web/CSS/CSS_grid_layout
l10n:
  sourceCommit: 40b4317996fc52833b18e468270a58c4f1720985
---

{{CSSRef}}

Das **CSS-Grid-Layout**-Modul eignet sich hervorragend zum Aufteilen einer Seite in Hauptbereiche oder zum Definieren der Beziehung in Bezug auf Größe, Position und Schichtung zwischen Teilen einer Steuerung, die aus HTML-Primitiven erstellt wurde.

Ähnlich wie Tabellen ermöglicht das Grid-Layout es einem Autor, Elemente in Spalten und Zeilen auszurichten. Im Vergleich zu Tabellen sind jedoch viele Layouts mit CSS-Grid entweder einfacher oder überhaupt erst möglich. Zum Beispiel könnten sich die Kind-Elemente eines Grid-Containers so positionieren, dass sie sich tatsächlich überlagern und schichten, ähnlich wie bei CSS-Positionierungselementen.

## Grid-Layout in Aktion

Dieses Beispiel zeigt ein Grid mit drei Spaltenspuren, bei dem neue Zeilen mit einer minimalen Höhe von 100 Pixeln und einer maximalen Höhe von auto erstellt werden. Elemente wurden mithilfe der linienbasierten Platzierung ins Grid gesetzt.

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

Diese Beispielsanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Grid zu erstellen, sowie {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente innerhalb des Grids zu positionieren. Um den verwendeten HTML- und CSS-Code anzuzeigen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf "Play".

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} shorthand
- {{CSSxRef("grid")}} shorthand
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} shorthand
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} shorthand
- {{CSSxRef("grid-area")}} shorthand

### Funktionen

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr`-Einheit)

### Begriffe und Glossareinträge

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_areas", "Grid areas")}}
- {{Glossary("Grid_axis", "Grid axis")}}
- {{Glossary("Grid_cell", "Grid cell")}}
- {{Glossary("Grid_column", "Grid column")}}
- {{Glossary("Grid_container", "Grid container")}}
- {{Glossary("Grid_lines", "Grid lines")}}
- {{Glossary("Grid_row", "Grid row")}}
- {{Glossary("Grid_tracks", "Grid tracks")}}
- {{Glossary("Gutters", "Gutters")}}

## Leitfäden

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

  - : Ein Überblick über die verschiedenen Funktionen, die das CSS-Grid-Layout-Modul bereitstellt.

- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

  - : Wie das Grid-Layout mit anderen CSS-Funktionen wie Flexbox, absolut positionierten Elementen und `display: contents` zusammenarbeitet.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)

  - : Grid-Linien und wie Elemente an diesen Linien positioniert werden, einschließlich der `grid-area`-Eigenschaften, negativer Liniennummern, der Überlappung mehrerer Zellen und der Erstellung von Grid-Gaps.

- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)

  - : Platzierung von Grid-Elementen mithilfe benannter Vorlagenbereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)

  - : Kombinierung von Namen und Spurgrößen; Platzierung von Grid-Elementen durch Definieren benannter Grid-Linien und Vorlagenbereiche.

- [Auto-Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)

  - : Wie Grid-Positionierung für Elemente ohne deklarierte Platzierungseigenschaften funktioniert.

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)

  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)

  - : Ein Blick auf die Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi sowie CSS-logischen und physischen Eigenschaften und Werten.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)

  - : Ein Blick darauf, wie CSS-Grid-Layout Barrierefreiheit sowohl verbessern als auch beeinträchtigen kann.

- [Umsetzung gängiger Layouts mithilfe von Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

  - : Verschiedene Layouts, die unterschiedliche Techniken demonstrieren, die Sie beim Designen mit CSS-Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, eines flexiblen 12-Spalten-Grid-Systems und einer Produktliste mit automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)

  - : Was Subgrid ist, mit Anwendungsfällen und Designmustern, die Subgrid löst.

- [Masonry-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)

  - : Details, was ein Masonry-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)

  - : Wie Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS-Display](/de/docs/Web/CSS/CSS_display)-Modul

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)-Modul

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

[CSS-Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing)-Modul

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
- {{cssxref("fit-content_function", "fit-content()")}} Funktion

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul
- [CSS-Display](/de/docs/Web/CSS/CSS_display)-Modul
- [Grid by Example](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) über Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS-Grid-Garten](https://cssgridgarden.com/) - Ein Spiel, um CSS-Grid zu lernen
