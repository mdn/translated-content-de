---
title: Grid Cell
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

In einem [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) ist eine **Grid-Zelle** die kleinste Einheit, die Sie in Ihrem CSS-Raster haben können. Es ist der Raum zwischen vier sich kreuzenden {{Glossary("grid_lines", "Rasterlinien")}} und konzeptionell ähnlich wie eine Tabellenzelle.

![Diagramm, das eine einzelne Zelle im Raster zeigt.](1_grid_cell.png)

Wenn Sie Elemente nicht mit einer der Rasterplatzierungsmethoden platzieren, werden die direkten Nachkommen des Rastercontainers durch den Autoplatzierungsalgorithmus in eine einzelne Rasterzelle platziert. Zusätzliche Zeilen- oder Spalten-{{Glossary("grid_tracks", "Tracks")}} werden erstellt, um genügend Zellen zu schaffen, um alle Elemente aufzunehmen.

## Beispiel

Im Beispiel haben wir ein Raster mit drei Spaltentracks erstellt. Die fünf Elemente werden in Rasterzellen platziert, die entlang einer ersten Zeile von drei Rasterzellen arbeiten, und dann wird eine neue Zeile für die verbleibenden zwei erstellt.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Example', '300', '280') }}

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### Weiterführende Literatur

- [Grundlagen von Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Grid-Zellen in der CSS Grid Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
