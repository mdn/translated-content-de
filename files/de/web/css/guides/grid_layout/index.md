---
title: CSS-Grid-Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: b02c4fe0f8c485fa3fd0af10005310aaecef64ca
---

Das **CSS-Grid-Layout**-Modul eignet sich hervorragend, um eine Seite in Hauptbereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Überlagerung zwischen Teilen eines Steuerelements zu definieren, das aus HTML-Primitiven erstellt wurde.

Wie Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Reihen auszurichten. Allerdings sind mit CSS-Grid weitaus mehr Layouts entweder möglich oder einfacher als mit Tabellen. Zum Beispiel könnten sich die Kindelemente eines Grid-Containers so positionieren, dass sie sich tatsächlich überlappen und schichten, ähnlich wie CSS-positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein dreispaltiges Raster mit neuen Zeilen, die bei mindestens 100 Pixeln und maximal automatisch erstellt werden. Elemente wurden mithilfe der linienbasierten Platzierung auf das Raster gesetzt.

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

Diese Beispiellanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Raster zu erstellen, und {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um die Elemente im Raster zu positionieren. Um den verwendeten HTML- und CSS-Code anzusehen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf 'Play'.

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

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen, die im CSS-Grid-Layout-Modul bereitgestellt werden.

- [Beziehung des Grid-Layouts zu anderen Layout-Methoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie das Grid-Layout mit anderen CSS-Funktionen wie Flexbox, absolut positionierten Elementen und `display: contents` zusammenhängt.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Grid-Linien und wie man Elemente an diesen Linien positioniert, einschließlich der `grid-area`-Eigenschaften, negativer Linienzahlen, Mehrzellenbereiche und Erstellung von Grid-Rinnen.

- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzierung von Grid-Elementen mithilfe benannter Vorlagenbereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Spurgrößen; Platzierung von Grid-Elementen durch Definition benannter Grid-Linien und Vorlagenbereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie Grid-Elemente platziert werden, die keine Platziereigenschaften haben.

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Einblick in die Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibrichtungen sowie CSS-logischen und -physikalischen Eigenschaften und Werte.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Ein Blick darauf, wie CSS-Grid-Layout die Barrierefreiheit sowohl unterstützen als auch beeinträchtigen kann.

- [Übliche Layouts mit Grids realisieren](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Einige verschiedene Layouts, die verschiedene Techniken demonstrieren, die Sie beim Design mit CSS-Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, eines 12-spaltigen Flex-Rastersystems und einer Produktliste mit automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was Subgrid mit Anwendungsfällen macht und Designmuster, die Subgrid löst.

- [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)
  - : Details, was das Grid-Lanes-Layout ist und wie man es verwendet.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext des Grid-Layouts funktioniert.

## Verwandte Funktionen

[CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul

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

[CSS-Rinnen (Gaps)](/de/docs/Web/CSS/Guides/Gaps) Modul

- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}

[CSS Box-Größe](/de/docs/Web/CSS/Guides/Box_sizing) Modul

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
- [Grid by Example](https://gridbyexample.com/)
- [CSS Grid Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid Playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid Garden](https://cssgridgarden.com/) - Ein Spiel zum Erlernen von CSS-Grids
