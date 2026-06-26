---
title: CSS Grid Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

Das **CSS Grid-Layout-Modul** ist hervorragend geeignet, um eine Seite in Hauptbereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Überlagerung zwischen Teilen einer Steuerung zu definieren, die aus HTML-Elementen besteht.

Wie Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Zeilen auszurichten. Allerdings sind viele Layouts entweder einfacher oder überhaupt erst mit CSS Grid möglich im Vergleich zu Tabellen. Beispielsweise könnten Kindelemente eines Grid-Containers sich so positionieren, dass sie tatsächlich übereinander liegen und schichten, ähnlich wie CSS-positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein Grid mit drei Spaltenspuren, bei dem neue Reihen mit minimal 100 Pixel und maximal automatisch erstellt werden. Elemente wurden mithilfe der linienbasierten Platzierung auf das Grid gesetzt.

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

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Grid zu erstellen, und {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente innerhalb des Grids zu positionieren. Um den verwendeten HTML- und CSS-Code anzusehen und zu bearbeiten, klicken Sie auf 'Play' oben rechts im Beispiel.

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

- {{cssxref("repeat()")}}
- {{cssxref("minmax()")}}
- {{cssxref("fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr` Einheit)

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

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen, die das CSS Grid-Layout-Modul bietet.

- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie das Grid-Layout mit anderen CSS-Funktionen wie Flexbox, absolut positionierten Elementen und `display: contents` zusammenpasst.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Grid-Linien und wie man Elemente gegen diese Linien positioniert, einschließlich der `grid-area` Eigenschaften, negativer Liniennummern, über mehrere Zellen erstreckend und Gitterrinnen erstellend.

- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzieren von Grid-Elementen unter Verwendung benannter Template-Bereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Spurengrößen; Platzierung von Grid-Elementen durch Definition benannter Grid-Linien und Template-Bereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie Grid Elemente positioniert, die keine Platzierungs-Eigenschaften deklariert haben.

- [Ausrichten von Elementen im CSS Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, Justifizieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Ein Blick auf die Interaktion zwischen CSS Grid-Layout, Kasten-Ausrichtung und Schreibrichtungen, zusammen mit CSS logischen und physischen Eigenschaften und Werten.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Ein Blick darauf, wie CSS Grid-Layout sowohl helfen als auch die Barrierefreiheit beeinträchtigen kann.

- [Realisierung gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Einige verschiedene Layouts, die verschiedene Techniken demonstrieren, die Sie beim Entwerfen mit CSS Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, einem flexiblen 12-Spalten-Raster-System, und einer Produktliste mit automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was Subgrid tut, mit Anwendungsfällen und Designmustern, die Subgrid löst.

- [Masonry-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Details, was das Masonry-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS Display](/de/docs/Web/CSS/Guides/Display) Modul

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) Modul

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}

[CSS Gaps](/de/docs/Web/CSS/Guides/Gaps) Modul

- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}

[CSS Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul

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

- [CSS Flexibles Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Display](/de/docs/Web/CSS/Guides/Display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid-Garten](https://cssgridgarden.com/) - Ein Spiel zum Lernen von CSS Grid
