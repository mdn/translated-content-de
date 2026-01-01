---
title: CSS-Grid-Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 6d9f331ed6aafed559b27a37283a02223102f22b
---

Das Modul **CSS-Grid-Layout** eignet sich hervorragend, um eine Seite in Hauptbereiche zu unterteilen oder die Beziehung in Bezug auf Größe, Position und Ebenen zwischen Teilen einer Steuerung zu definieren, die aus HTML-Grundelementen besteht.

Wie Tabellen ermöglicht das Grid-Layout einem Autor, Elemente in Spalten und Zeilen auszurichten. Mit CSS Grid sind jedoch viele Layouts entweder möglich oder einfacher als mit Tabellen. Zum Beispiel könnten sich die Kindelemente eines Grid-Containers so positionieren, dass sie tatsächlich überlappen und schichten, ähnlich wie CSS-positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein dreispaltiges Grid mit neuen Zeilen, die mit einer Mindesthöhe von 100 Pixeln und einer maximalen Höhe von „auto“ erstellt werden. Elemente wurden mithilfe einer linienbasierten Platzierung in das Grid gesetzt.

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

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Grid zu erstellen, sowie {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente innerhalb des Grids zu positionieren. Um den verwendeten HTML- und CSS-Code anzuzeigen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf "Play".

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} Abkürzung
- {{CSSxRef("grid")}} Abkürzung
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} Abkürzung
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} Abkürzung
- {{CSSxRef("grid-area")}} Abkürzung

### Funktionen

- {{cssxref("repeat()")}}
- {{cssxref("minmax()")}}
- {{cssxref("fit-content_function", "fit-content()")}}

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
- {{Glossary("Gutters", "Rinnen")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen, die im CSS-Grid-Layout-Modul bereitgestellt werden.

- [Beziehung des Grid-Layouts mit anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie das Grid-Layout mit anderen CSS-Funktionen zusammenpasst, einschließlich Flexbox, absolut positionierten Elementen und `display: contents`.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Grid-Linien und wie man Elemente an diesen Linien positioniert, einschließlich der `grid-area` Eigenschaften, negativer Liniennummern, das Überspannen von mehreren Zellen und das Erstellen von Grid-Rinnen.

- [Grid-Template-Bereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzierung von Grid-Elementen mit benannten Template-Bereichen.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Spurgrößen; Platzierung von Grid-Elementen durch Definition benannter Grid-Linien und Template-Bereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie das Grid Elemente platziert, die keine Platzierungseigenschaften deklariert haben.

- [Ausrichtung von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, Justieren und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibrichtungen](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Ein Blick auf die Interaktion zwischen CSS-Grid-Layout, Box-Ausgleich und Schreibrichtungen sowie CSS-logischen und physischen Eigenschaften und Werten.

- [Grid-Layout und Zugänglichkeit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Ein Blick darauf, wie das CSS-Grid-Layout sowohl Zugänglichkeit unterstützen als auch beeinträchtigen kann.

- [Verwirklichung gängiger Layouts mit Grids](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Einige verschiedene Layouts, die verschiedene Techniken demonstrieren, die Sie beim Entwerfen mit CSS-Grid-Layouts verwenden können, einschließlich der Verwendung von {{cssxref("grid-template-areas")}}, eines flexiblen 12-Spalten-Grid-Systems und einer Produktliste mit automatischer Platzierung.

- [Untergrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was Untergrid tut mit Anwendungsfällen und Designmustern, die Untergrid löst.

- [Masonry-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Masonry_layout)
  - : Details darüber, was das Masonry-Layout ist und wie es verwendet wird.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie Box-Ausgleich im Kontext von Grid-Layout funktioniert.

## Verwandte Funktionen

[CSS-Display](/de/docs/Web/CSS/Guides/Display)-Modul

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

[CSS Box-Ausgleich](/de/docs/Web/CSS/Guides/Box_alignment) Modul

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

[CSS Box-Größenbestimmung](/de/docs/Web/CSS/Guides/Box_sizing) Modul

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

- [CSS Flexbox-Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul
- [CSS-Display](/de/docs/Web/CSS/Guides/Display) Modul
- [Grid by example](https://gridbyexample.com/)
- [CSS Grid Referenz](https://tympanus.net/codrops/css_reference/grid/) via Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS Grid Spielplatz](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid Garten](https://cssgridgarden.com/) - Ein Spiel zum Lernen von CSS Grid
