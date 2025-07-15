---
title: CSS-Grid-Layout
slug: Web/CSS/CSS_grid_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Grid-Layout**-Modul eignet sich hervorragend, um eine Seite in Hauptbereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Ebenenstruktur zwischen Teilen einer Steuerung zu definieren, die aus HTML-Primitiven erstellt wurde.

Wie Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Reihen auszurichten. Mit CSS-Grid sind jedoch weit mehr Layouts entweder möglich oder einfacher umzusetzen als mit Tabellen. Beispielsweise könnten sich die Kindelemente eines Grid-Containers so positionieren, dass sie sich tatsächlich überlappen und schichten, ähnlich wie CSS-positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein dreispaltiges Grid mit neuen Reihen, die bei mindestens 100 Pixel und maximal automatisch erstellt werden. Elemente wurden anhand von linienbasierter Platzierung in das Grid eingefügt.

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

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}}, und {{cssxref("gap")}}, um das Grid zu erstellen, und {{cssxref("grid-column")}} sowie {{cssxref("grid-row")}}, um Elemente innerhalb des Grids zu positionieren. Um den verwendeten HTML- und CSS-Code anzusehen und zu bearbeiten, klicken Sie auf „Abspielen“ oben rechts im Beispiel.

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} Kurzform
- {{CSSxRef("grid")}} Kurzform
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} Kurzform
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} Kurzform
- {{CSSxRef("grid-area")}} Kurzform

### Funktionen

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr` Einheit)

### Begriffe und Glossar-Definitionen

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_areas", "Grid-Bereiche")}}
- {{Glossary("Grid_axis", "Grid-Achse")}}
- {{Glossary("Grid_cell", "Grid-Zelle")}}
- {{Glossary("Grid_column", "Grid-Spalte")}}
- {{Glossary("Grid_container", "Grid-Container")}}
- {{Glossary("Grid_lines", "Grid-Linien")}}
- {{Glossary("Grid_row", "Grid-Reihe")}}
- {{Glossary("Grid_tracks", "Grid-Spuren")}}
- {{Glossary("Gutters", "Rinnen")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
  - : Ein Überblick über die verschiedenen Funktionen, die im CSS-Grid-Layout-Modul bereitgestellt werden.

- [Beziehung des Grid-Layouts zu anderen Layoutmethoden](/de/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods)
  - : Wie das Grid-Layout mit anderen CSS-Funktionen zusammenpasst, einschließlich Flexbox, absolut positionierten Elementen und `display: contents`.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - : Grid-Linien und wie man Elemente an diesen Linien positioniert, einschließlich der `grid-area` Eigenschaften, negativer Liniennummern, die mehrere Zellen umfassen, und Gitterrinnen erstellt.

- [Grid-Template-Bereiche](/de/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)
  - : Platzieren von Grid-Elementen mithilfe benannter Template-Bereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines)
  - : Kombinieren von Namen und Spurgrößen; Platzieren von Grid-Elementen durch Definition benannter Grid-Linien und Template-Bereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout)
  - : Wie Grid Elemente positioniert, die keine Platzierungseigenschaften deklariert haben.

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
  - : Ein Blick auf die Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi zusammen mit CSS-logischen und physikalischen Eigenschaften und Werten.

- [Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_and_accessibility)
  - : Ein Überblick darüber, wie CSS-Grid-Layout sowohl zur Barrierefreiheit beitragen als auch ihr schaden kann.

- [Verwirklichung gängiger Layouts mit Grids](/de/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids)
  - : Einige verschiedene Layouts, die unterschiedliche Techniken demonstrieren, die Sie bei der Gestaltung mit CSS-Grid-Layouts verwenden können, einschließlich Nutzung von {{cssxref("grid-template-areas")}}, einem flexiblen 12-Spalten-Grid-System und einer Produktliste mit automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - : Was Subgrid mit Anwendungsfällen und Designmustern macht, die Subgrid löst.

- [Masonry-Layout](/de/docs/Web/CSS/CSS_grid_layout/Masonry_layout)
  - : Details, was Masonry-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS Display](/de/docs/Web/CSS/CSS_display) Modul

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Modul

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

[CSS-Box-Größenanpassung](/de/docs/Web/CSS/CSS_box_sizing) Modul

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

- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul
- [CSS-Display](/de/docs/Web/CSS/CSS_display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) über Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Spielwiese](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS-Grid-Garten](https://cssgridgarden.com/) - Ein Spiel zum Lernen von CSS-Grid
