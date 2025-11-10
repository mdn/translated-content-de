---
title: Grid-Zelle
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In einem [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) ist eine **Grid-Zelle** die kleinste Einheit, die Sie in Ihrem CSS-Grid haben können. Sie ist der Raum zwischen vier sich kreuzenden {{Glossary("grid_lines", "Gitterlinien")}} und konzeptionell sehr ähnlich einer Tabellenzelle.

![Diagramm, das eine einzelne Zelle im Raster zeigt.](1_grid_cell.png)

Wenn Sie Elemente nicht mit einer der Grid-Platzierungsmethoden platzieren, werden die direkten Kinder des Grid-Containers mithilfe des Auto-Platzierungsalgorithmus je eine in jede einzelne Grid-Zelle platziert. Zusätzliche Zeilen- oder Spalten-{{Glossary("grid_tracks", "Spuren")}} werden erstellt, um genügend Zellen zu schaffen, die alle Elemente aufnehmen.

## Beispiel

Im Beispiel haben wir ein Grid mit drei Spuren erstellt. Die fünf Elemente werden in Grid-Zellen entlang einer ersten Zeile von drei Grid-Zellen platziert, dann wird eine neue Zeile für die verbleibenden zwei erstellt.

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

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- [Definition von Grid-Zellen in der CSS Grid Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
