---
title: Rasterzelle
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

In einem [CSS-Raster-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist eine **Rasterzelle** die kleinste Einheit, die Sie in Ihrem CSS-Raster haben können. Es ist der Raum zwischen vier sich kreuzenden {{glossary("grid lines")}} und konzeptionell ähnlich einer Tabellenzelle.

![Diagramm, das eine einzelne Zelle im Raster zeigt.](1_grid_cell.png)

Wenn Sie Elemente nicht mit einer der Rasterplatzierungsmethoden platzieren, werden direkte Kinder des Rastercontainers durch den automatischen Platzierungsalgorithmus in jede einzelne Rasterzelle platziert. Zusätzliche Reihen- oder Spalten-{{glossary("grid tracks", "Tracks")}} werden erstellt, um genügend Zellen für alle Elemente zu erstellen.

## Beispiel

Im Beispiel haben wir ein Raster mit drei Spalten-Tracks erstellt. Die fünf Elemente werden in Rasterzellen platziert, wobei sie eine anfängliche Reihe von drei Rasterzellen durchlaufen und dann eine neue Reihe für die verbleibenden zwei erstellen.

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

- [Grundkonzepte des Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Rasterzellen in der CSS-Raster-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
