---
title: CSS-Grid-Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Grid-Layout**-Modul ist hervorragend geeignet, um eine Seite in Hauptbereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Schichtung zwischen Teilen einer Kontrolle, die aus HTML-Primitiven besteht, zu definieren.

Wie Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Reihen auszurichten. Mit CSS-Grid sind jedoch noch viel mehr Layouts möglich oder einfacher als mit Tabellen. Zum Beispiel könnten sich die Kindelemente eines Grid-Containers so positionieren, dass sie tatsächlich überlappen und sich schichten, ähnlich wie CSS-positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein Drei-Spalten-Track-Grid mit neuen Reihen, die bei mindestens 100 Pixeln und höchstens automatisch erstellt werden. Elemente wurden unter Verwendung von linienbasierter Platzierung auf das Grid gesetzt.

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

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Grid zu erstellen, und {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente innerhalb des Grids zu positionieren. Um den verwendeten HTML- und CSS-Code anzuzeigen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf 'Play'.

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} abkürzende Eigenschaft
- {{CSSxRef("grid")}} abkürzende Eigenschaft
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} abkürzende Eigenschaft
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} abkürzende Eigenschaft
- {{CSSxRef("grid-area")}} abkürzende Eigenschaft

### Funktionen

- {{CSSxRef("repeat", "repeat()")}}
- {{CSSxRef("minmax", "minmax()")}}
- {{CSSxRef("fit-content_function", "fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr` Einheit)

### Begriffe und Glossar-Definitionen

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_areas", "Gridbereiche")}}
- {{Glossary("Grid_axis", "Grid-Achse")}}
- {{Glossary("Grid_cell", "Gridzelle")}}
- {{Glossary("Grid_column", "Gridspalte")}}
- {{Glossary("Grid_container", "Grid-Container")}}
- {{Glossary("Grid_lines", "Gridlinien")}}
- {{Glossary("Grid_row", "Gridreihe")}}
- {{Glossary("Grid_tracks", "Grid-Tracks")}}
- {{Glossary("Gutters", "Rinnen")}}

## Leitfäden

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen, die im CSS-Grid-Layout-Modul bereitgestellt werden.

- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie das Grid-Layout mit anderen CSS-Funktionen wie Flexbox, absolut positionierten Elementen und `display: contents` zusammenarbeitet.

- [Grid-Layout unter Verwendung von linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Gridlinien und wie man Elemente entlang dieser Linien positioniert, einschließlich der `grid-area`-Eigenschaften, negativer Liniennummern, das Spannen mehrerer Zellen und das Erstellen von Grid-Rinnen.

- [Gridvorlagen-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzierung von Grid-Elementen unter Verwendung benannter Vorlagenbereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Trackgrößen; Platzierung von Grid-Elementen durch Definieren benannter Grid-Linien und Vorlagenbereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie das Grid Elemente platziert, die keine Deklaration von Platzierungseigenschaften haben.

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, rechtfertigen und zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Ein Blick auf die Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi sowie CSS-logischen und physikalischen Eigenschaften und Werten.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Ein Blick darauf, wie CSS-Grid-Layout sowohl Barrierefreiheit verbessern als auch beeinträchtigen kann.

- [Realisation gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Einige verschiedene Layouts, die verschiedene Techniken demonstrieren, die Sie bei der Gestaltung mit CSS-Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, eines 12-Spalten-Flexible-Grid-Systems und einer Produktliste unter Verwendung der automatischen Platzierung.

- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was Subgrid mit Anwendungsfällen und Designmustern macht, die Subgrid löst.

- [Masonry-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Details, was Masonry-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS Display](/de/docs/Web/CSS/Guides/Display) Modul

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

[CSS-Boxmodell-Größe](/de/docs/Web/CSS/Guides/Box_sizing) Modul

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

- [CSS-Flexible-Box-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS Display](/de/docs/Web/CSS/Guides/Display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS-Grid-Garten](https://cssgridgarden.com/) - Ein Spiel zum Erlernen von CSS-Grid
