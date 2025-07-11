---
title: Gitterzelle
slug: Glossary/Grid_Cell
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In einem [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) ist eine **Gitterzelle** die kleinste Einheit, die Sie in Ihrem CSS-Grid haben können. Es ist der Raum zwischen vier sich kreuzenden {{Glossary("grid_lines", "Gitterlinien")}} und konzeptionell sehr ähnlich einer Tabellenzelle.

![Diagramm, das eine einzelne Zelle im Gitter zeigt.](1_grid_cell.png)

Wenn Sie keine Elemente mit einer der Grid-Platzierungsmethoden platzieren, werden direkte Kinder des Grid-Containers vom Auto-Platzierungs-Algorithmus in jede einzelne Gitterzelle platziert. Zusätzliche Zeilen- oder Spuren-{{Glossary("grid_tracks", "Tracks")}} werden erstellt, um genug Zellen zu schaffen, die alle Elemente aufnehmen können.

## Beispiel

Im Beispiel haben wir ein Gitter mit drei Spuren erstellt. Die fünf Elemente werden in Gitterzellen platziert, indem eine Anfangszeile von drei Gitterzellen entlanggearbeitet und anschließend für die verbleibenden zwei eine neue Zeile erstellt wird.

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

### Eigenschaftenreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid-auto-columns")}}

### Weiterführende Literatur

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- [Definition von Gitterzellen in der CSS-Grid-Layout-Spezifikation](https://drafts.csswg.org/css-grid/#grid-track-concept)
