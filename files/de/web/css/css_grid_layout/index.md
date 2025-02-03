---
title: CSS-Grid-Layout
slug: Web/CSS/CSS_grid_layout
l10n:
  sourceCommit: c496cb48e3f65d1b62fb05ea003b7c06219c014d
---

{{CSSRef}}

Das **CSS-Grid-Layout**-Modul eignet sich hervorragend, um eine Seite in wesentliche Bereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Ebene zwischen Teilen einer Steuerung zu definieren, die aus HTML-Primitiven erstellt wurde.

Wie Tabellen ermöglicht das Grid-Layout dem Autor, Elemente in Spalten und Reihen anzuordnen. Viele Layouts sind jedoch entweder möglich oder einfacher mit CSS-Grid als sie es mit Tabellen waren. Beispielsweise könnten sich die Kindelemente eines Grid-Containers so positionieren, dass sie tatsächlich überlappen und schichten, ähnlich wie CSS-positionierte Elemente.

## Einfaches Beispiel

Das folgende Beispiel zeigt ein Grid mit drei Spalten, bei dem neue Zeilen mit mindestens 100 Pixeln Höhe und maximal automatisch erstellt werden. Elemente wurden mithilfe der auf Linien basierenden Platzierung in das Grid eingefügt.

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

### Funktionen

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Datentypen

- {{CSSxRef("&lt;flex&gt;")}}

## Leitfäden

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
- [Realisierung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
- [Mauerwerkslayout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)

## Spezifikationen

{{Specifications}}

## Siehe auch

- Glossar:
  - {{Glossary("Grid", "Grid")}}
  - {{Glossary("Grid_Lines", "Grid-Linien")}}
  - {{Glossary("Grid_Tracks", "Grid-Tracks")}}
  - {{Glossary("Grid_Cell", "Grid-Zelle")}}
  - {{Glossary("Grid_Areas", "Grid-Bereich")}}
  - {{Glossary("Gutters", "Rinnen")}}
  - {{Glossary("Grid_Axis", "Grid-Achse")}}
  - {{Glossary("Grid_Row", "Grid-Zeile")}}
  - {{Glossary("Grid_Column", "Grid-Spalte")}}
- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul
  - {{CSSxRef("row-gap")}}
  - {{CSSxRef("column-gap")}}
  - {{CSSxRef("gap")}}
- [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Anzeige](/de/docs/Web/CSS/CSS_display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [CSS-Grid-Inspektor - Firefox DevTools](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS-Grid-Garten](https://cssgridgarden.com/) - Ein Spiel zum Lernen von CSS-Grid
