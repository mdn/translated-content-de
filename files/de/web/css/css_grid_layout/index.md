---
title: CSS-Grid-Layout
slug: Web/CSS/CSS_grid_layout
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{CSSRef}}

Das **CSS-Grid-Layout** Modul ist hervorragend geeignet, um eine Seite in Hauptbereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Ebene zwischen Teilen eines aus HTML-Elementen aufgebauten Steuerelements zu definieren.

Ähnlich wie bei Tabellen ermöglicht das Grid-Layout dem Autor, Elemente in Spalten und Zeilen auszurichten. Mit CSS-Grid sind jedoch viele weitere Layouts möglich oder einfacher zu realisieren als mit Tabellen. Beispielsweise könnten Kindelemente eines Grid-Containers sich so positionieren, dass sie sich tatsächlich überlappen und Schichten bilden, ähnlich wie CSS-Positionierungselemente.

## Einfaches Beispiel

Das folgende Beispiel zeigt ein Raster mit drei Spalten, wobei neue Zeilen mit einer Mindesthöhe von 100 Pixeln und einem maximalen Wert von auto erzeugt werden. Elemente wurden mittels linienbasierter Platzierung auf das Raster gesetzt.

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
```

### HTML

```html
<div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
```

### CSS

```css
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

{{EmbedLiveSample("Basic_example", "100%", "460")}}

## Referenz

### Eigenschaften

- {{CSSxRef("display")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-row")}}
- {{CSSxRef("grid-column")}}
- {{CSSxRef("grid-area")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("gap")}}

### Funktionen

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Datentypen

- {{CSSxRef("&lt;flex&gt;")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Layout mit benannten Gitternetzlinien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Raster, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Verwirklichung häufiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
- [Masonry-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Glossar:
  - [Grid](/de/docs/Glossary/Grid)
  - [Gitterlinien](/de/docs/Glossary/Grid_Lines)
  - [Gitterstrecken](/de/docs/Glossary/Grid_Tracks)
  - [Gitterzelle](/de/docs/Glossary/Grid_Cell)
  - [Gitterbereich](/de/docs/Glossary/Grid_Areas)
  - [Rinnen](/de/docs/Glossary/Gutters)
  - [Gitterachse](/de/docs/Glossary/Grid_Axis)
  - [Gitterreihe](/de/docs/Glossary/Grid_Row)
  - [Gitterspalte](/de/docs/Glossary/Grid_Column)
- Modul [Flexibles Box-Layout in CSS](/de/docs/Web/CSS/CSS_flexible_box_layout)
- Modul [CSS-Anzeige](/de/docs/Web/CSS/CSS_display)
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) über Codrops
- [CSS-Grid-Inspektor - Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS-Grid-Garten](https://cssgridgarden.com/) - Ein Spiel, um CSS-Grid zu lernen
