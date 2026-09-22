---
title: CSS-Grid-Layout
short-title: Grid layout
slug: Web/CSS/Guides/Grid_layout
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

Das Modul **CSS-Grid-Layout** eignet sich besonders gut, um eine Seite in größere Bereiche aufzuteilen oder Größen-, Positions- und Überlagerungsbeziehungen zwischen den Teilen eines aus HTML-Grundelementen aufgebauten Bedienelements festzulegen.

Wie Tabellen ermöglicht Grid-Layout, Elemente in Spalten und Zeilen auszurichten. Mit CSS Grid sind jedoch deutlich mehr Layouts möglich oder einfacher umzusetzen als mit Tabellen. Beispielsweise können sich die Kindelemente eines Grid-Containers so positionieren, dass sie sich überlappen und übereinanderliegen – ähnlich wie mit CSS positionierte Elemente.

## Grid-Layout in Aktion

Das Beispiel zeigt ein Grid mit drei Spalten. Neue Zeilen werden mit einer Mindestgröße von 100 Pixeln erstellt; ihre maximale Größe wird automatisch bestimmt. Die Elemente wurden anhand von Grid-Linien platziert.

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

Diese Beispielanimation verwendet {{cssxref("display")}}, {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} und {{cssxref("gap")}}, um das Grid zu erstellen, sowie {{cssxref("grid-column")}} und {{cssxref("grid-row")}}, um Elemente darin zu positionieren. Um den verwendeten HTML- und CSS-Code anzusehen und zu bearbeiten, klicken Sie oben rechts im Beispiel auf „Play“.

## Referenz

### Eigenschaften

- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template")}} Kurzschreibweise
- {{CSSxRef("grid")}} Kurzschreibweise
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column")}} Kurzschreibweise
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row")}} Kurzschreibweise
- {{CSSxRef("grid-area")}} Kurzschreibweise

### Funktionen

- {{cssxref("repeat()")}}
- {{cssxref("minmax()")}}
- {{cssxref("fit-content()")}}

### Datentypen und Werte

- {{CSSxRef("&lt;flex&gt;")}} (`fr`-Einheit)

### Begriffe und Glossardefinitionen

- {{Glossary("Grid", "Grid")}}
- {{Glossary("Grid_areas", "Grid-Bereiche")}}
- {{Glossary("Grid_axis", "Grid-Achse")}}
- {{Glossary("Grid_cell", "Grid-Zelle")}}
- {{Glossary("Grid_column", "Grid-Spalte")}}
- {{Glossary("Grid_container", "Grid-Container")}}
- {{Glossary("Grid_lines", "Grid-Linien")}}
- {{Glossary("Grid_row", "Grid-Zeile")}}
- {{Glossary("Grid_tracks", "Grid-Tracks")}}
- {{Glossary("Gutters", "Zwischenräume")}}

## Leitfäden

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
  - : Ein Überblick über die verschiedenen Funktionen des CSS-Grid-Layout-Moduls.

- [Zusammenspiel von Grid-Layout und anderen Layoutmethoden](/de/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods)
  - : Wie Grid-Layout mit anderen CSS-Funktionen zusammenwirkt, darunter Flexbox, absolut positionierte Elemente und `display: contents`.

- [Grid-Layout mit linienbasierter Platzierung](/de/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
  - : Grid-Linien und die Positionierung von Elementen anhand dieser Linien, einschließlich der `grid-area`-Eigenschaften, negativer Liniennummern, des Überspannens mehrerer Zellen und der Erstellung von Grid-Zwischenräumen.

- [Grid-Vorlagenbereiche](/de/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas)
  - : Platzierung von Grid-Elementen mithilfe benannter Vorlagenbereiche.

- [Grid-Layout mit benannten Grid-Linien](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines)
  - : Kombination von Namen und Track-Größen; Platzierung von Grid-Elementen durch die Definition benannter Grid-Linien und Vorlagenbereiche.

- [Automatische Platzierung im Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Auto-placement)
  - : Wie Grid Elemente positioniert, für die keine Platzierungseigenschaften festgelegt wurden.

- [Ausrichten von Elementen im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment)
  - : Ausrichten, Verteilen und Zentrieren von Grid-Elementen entlang der beiden Achsen eines Grid-Layouts.

- [Grids, logische Werte und Schreibmodi](/de/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
  - : Das Zusammenspiel von CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi sowie von logischen und physischen CSS-Eigenschaften und -Werten.

- [Grid-Layout und Barrierefreiheit](/de/docs/Web/CSS/Guides/Grid_layout/Accessibility)
  - : Wie CSS-Grid-Layout die Barrierefreiheit sowohl verbessern als auch beeinträchtigen kann.

- [Häufige Layouts mit Grids umsetzen](/de/docs/Web/CSS/Guides/Grid_layout/Common_grid_layouts)
  - : Verschiedene Layouts, die unterschiedliche Techniken für die Gestaltung mit CSS-Grid-Layouts demonstrieren, darunter die Verwendung von {{cssxref("grid-template-areas")}}, ein flexibles Grid-System mit zwölf Spalten und eine Produktliste mit automatischer Platzierung.

- [Subgrid](/de/docs/Web/CSS/Guides/Grid_layout/Subgrid)
  - : Was Subgrid bewirkt und welche Anwendungsfälle und Gestaltungsmuster sich damit umsetzen lassen.

- [Grid-Lanes-Layout](/de/docs/Web/CSS/Guides/Grid_layout/Grid_lanes)
  - : Was Grid-Lanes-Layout ist und wie Sie es verwenden.

- [Box-Ausrichtung im CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
  - : Wie die Box-Ausrichtung im Kontext von Grid-Layout funktioniert.

## Verwandte Funktionen

Modul [CSS Display](/de/docs/Web/CSS/Guides/Display)

- {{CSSxRef("display")}}
- {{CSSxRef("order")}}

Modul [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment)

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("justify-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("place-self")}}

Modul [CSS Gaps](/de/docs/Web/CSS/Guides/Gaps)

- {{cssxref("column-gap")}}
- {{cssxref("gap")}}
- {{cssxref("row-gap")}}

Modul [CSS Box Sizing](/de/docs/Web/CSS/Guides/Box_sizing)

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

- Modul [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- Modul [CSS Display](/de/docs/Web/CSS/Guides/Display)
- [Grid anhand von Beispielen](https://gridbyexample.com/)
- [CSS-Grid-Referenz](https://tympanus.net/codrops/css_reference/grid/) von Codrops
- [Firefox DevTools: Grid-Inspektor](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
- [CSS-Grid-Playground](https://mozilladevelopers.github.io/playground/css-grid/)
- [CSS Grid Garden](https://cssgridgarden.com/) – ein Spiel zum Erlernen von CSS Grid
