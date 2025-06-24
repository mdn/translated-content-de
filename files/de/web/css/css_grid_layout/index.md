---
title: CSS Grid-Layout
slug: Web/CSS/CSS_grid_layout
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS Grid-Layout** Modul eignet sich hervorragend dazu, eine Seite in Hauptregionen zu unterteilen oder die Beziehungen in Bezug auf Größe, Position und Schichtung zwischen Teilen eines aus HTML-Elementen erstellten Steuerungselements zu definieren.

Wie Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Zeilen auszurichten. Viele Layouts sind jedoch entweder mit CSS Grid möglich oder einfacher als mit Tabellen. Beispielsweise könnten sich Kindelemente eines Grid-Containers so positionieren, dass sie sich tatsächlich überlappen und schichten, ähnlich wie CSS-Positionselemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein Raster mit drei Spalten und neuen Zeilen, die bei einer Mindestgröße von 100 Pixel und einer maximalen Größe von auto erstellt werden. Elemente wurden mithilfe der zeilenbasierten Platzierung auf das Raster gelegt.

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

Diese Animationsbeispiel verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Raster zu erstellen, und {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente innerhalb des Rasters zu positionieren. Um den in HTML und CSS verwendeten Code anzuzeigen und zu bearbeiten, klicken Sie auf ‚Play‘ oben rechts im Beispiel.

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} Kurzschrift
- {{CSSxRef("grid")}} Kurzschrift
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} Kurzschrift
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} Kurzschrift
- {{CSSxRef("grid-area")}} Kurzschrift

### Funktionen

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr` Einheit)

### Begriffe und Glossardefinitionen

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_areas", "Grid-Bereiche")}}
- {{Glossary("Grid_axis", "Grid-Achse")}}
- {{Glossary("Grid_cell", "Grid-Zelle")}}
- {{Glossary("Grid_column", "Grid-Spalte")}}
- {{Glossary("Grid_container", "Grid-Container")}}
- {{Glossary("Grid_lines", "Grid-Linien")}}
- {{Glossary("Grid_row", "Grid-Zeile")}}
- {{Glossary("Grid_tracks", "Grid-Spuren")}}
- {{Glossary("Gutters", "Kanäle")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)

  - : Ein Überblick über die verschiedenen Funktionen des CSS Grid-Layout-Moduls.

- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)

  - : Wie das Grid-Layout mit anderen CSS-Funktionen wie Flexbox, absolut positionierten Elementen und `display: contents` zusammenarbeitet.

- [Grid-Layout mit zeilenbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)

  - : Grid-Linien und wie man Elemente anhand dieser Linien positioniert, einschließlich der `grid-area`-Eigenschaften, negativer Zeilennummern, über mehrere Zellen erstrecken und Erstellen von Grid-Kanälen.

- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)

  - : Platzieren von Grid-Elementen durch benannte Vorlagenbereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)

  - : Kombination von Namen und Spuren; Platzieren von Grid-Elementen durch Definieren von benannten Grid-Linien und Vorlagenbereichen.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)

  - : Wie Grid Elemente positioniert, die keine Platzierungseigenschaften deklariert haben.

- [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)

  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)

  - : Eine Betrachtung der Interaktion zwischen CSS Grid-Layout, Box-Ausrichtung und Schreibrichtungen sowie CSS logischen und physischen Eigenschaften und Werten.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)

  - : Eine Betrachtung, wie CSS Grid-Layout Barrierefreiheit fördern oder behindern kann.

- [Umsetzung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)

  - : Verschiedene Layouts, die unterschiedliche Techniken demonstrieren, die Sie bei der Gestaltung mit CSS Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, einem 12-Spalten flexiblen Grid-System und einer Produktliste mit automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)

  - : Was Subgrid macht, mit Anwendungsfällen und Gestaltungsmustern, die Subgrid löst.

- [Masonry-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)

  - : Details, was Masonry-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : Wie Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS Display](/de/docs/Web/CSS/CSS_display) Modul

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul

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

[CSS Box-Größeneinstellung](/de/docs/Web/CSS/CSS_box_sizing) Modul

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

- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS Display](/de/docs/Web/CSS/CSS_display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid Garden](https://cssgridgarden.com/) - Ein Spiel, um CSS Grid zu lernen
