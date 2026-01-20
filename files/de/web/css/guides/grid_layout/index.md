---
title: CSS Grid-Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 1951d1dbe59ac6cd79ae0ec90697f764ab9c7ffd
---

Das **CSS Grid-Layout**-Modul eignet sich hervorragend zur Unterteilung einer Seite in Hauptbereiche oder zur Definition von Beziehungen in Bezug auf Größe, Position und Schichtreihenfolge zwischen Teilen eines mit HTML-Primitiven erstellten Steuerelements.

Ähnlich wie Tabellen ermöglicht das Grid-Layout dem Autor, Elemente in Spalten und Zeilen auszurichten. Allerdings sind mit dem CSS Grid weit mehr Layouts entweder möglich oder einfacher als mit Tabellen. Beispielsweise können sich die Kindelemente eines Grid-Containers so positionieren, dass sie tatsächlich überlappen und schichten, ähnlich wie CSS-positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein Grid mit drei Spalten-Track, bei dem neue Zeilen mit einer Mindesthöhe von 100 Pixel und einer maximalen Autogröße erstellt werden. Elemente wurden mithilfe der linienbasierten Platzierung in das Grid gesetzt.

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

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}, und {{cssxref("gap")}}, um das Grid zu erstellen, sowie {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente innerhalb des Grids zu positionieren. Um den verwendeten HTML- und CSS-Code anzusehen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf "Play".

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} Kurzbefehl
- {{CSSxRef("grid")}} Kurzbefehl
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} Kurzbefehl
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} Kurzbefehl
- {{CSSxRef("grid-area")}} Kurzbefehl

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
- {{Glossary("Gutters", "Rinnen")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen, die im CSS Grid-Layout-Modul bereitgestellt werden.

- [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie das Grid-Layout mit anderen CSS-Funktionen einschließlich Flexbox, absolut positionierten Elementen und `display: contents` zusammenarbeitet.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Grid-Linien und wie man Elemente gegen diese Linien positioniert, einschließlich der `grid-area`-Eigenschaften, negativer Liniennummern, des Überspannens mehrerer Zellen und der Erstellung von Grid-Rinnen.

- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzierung von Grid-Elementen mit benannten Vorlagenbereichen.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Trackgrößen; Platzierung von Grid-Elementen durch die Definition benannter Grid-Linien und Vorlagenbereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie Grid Elemente positioniert, die keine Platzierungseigenschaften deklariert haben.

- [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Ein Blick auf die Interaktion zwischen CSS Grid-Layout, Box-Ausrichtung und Schreibmodi sowie auf CSS-logische und physische Eigenschaften und Werte.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Ein Blick darauf, wie das CSS Grid-Layout Barrierefreiheit unterstützen und beeinträchtigen kann.

- [Verwirklichung gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Einige verschiedene Layouts, die unterschiedliche Techniken demonstrieren, die Sie beim Entwerfen mit CSS-Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, eines 12-Spalten flexiblen Rastersystems und einer Produktliste mit automatischer Platzierung.

- [Untergitter](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was das Untergitter mit Anwendungsfällen und Designmustern macht, die das Untergitter löst.

- [Masonry-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Details zum Masonry-Layout und dessen Anwendung.

- [Box-Ausrichtung im CSS Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display)

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS-Box-Ausrichtungsmodul](/de/docs/Web/CSS/Guides/Box_alignment)

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

[CSS-Boxgrößenmodul](/de/docs/Web/CSS/Guides/Box_sizing)

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

- [CSS Flexible Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Anzeigemodul](/de/docs/Web/CSS/Guides/Display)
- [Grid by Example](https://gridbyexample.com/)
- [CSS Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) von Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid-Garten](https://cssgridgarden.com/) - Ein Spiel zum Erlernen von CSS Grid
