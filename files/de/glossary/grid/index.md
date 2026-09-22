---
title: Grid
slug: Glossary/Grid
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

Ein _CSS-Grid_ wird mit dem Wert `grid` der Eigenschaft {{cssxref("display")}} definiert. Mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} können Sie Zeilen und Spalten für Ihr Grid festlegen.

Das Grid, das Sie mit diesen Eigenschaften definieren, wird als _explizites Grid_ bezeichnet.

Wenn Sie Inhalte außerhalb dieses expliziten Grids platzieren oder die automatische Platzierung verwenden und der Grid-Algorithmus zusätzliche Zeilen- oder Spalten-{{Glossary("grid_tracks", "Tracks")}} benötigt, um {{Glossary("grid_cell", "Grid-Zellen")}} aufzunehmen, werden zusätzliche Tracks im impliziten Grid erstellt. Das _implizite Grid_ ist das Grid, das automatisch entsteht, wenn Inhalte außerhalb der definierten Tracks hinzugefügt werden.

Im folgenden Beispiel habe ich ein _explizites Grid_ mit drei Spalten und zwei Zeilen erstellt. Die _dritte_ Zeile ist ein Track des _impliziten Grids_. Sie entsteht, weil mehr als sechs Elemente vorhanden sind und die expliziten Tracks nur sechs Elemente aufnehmen.

## Beispiel

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
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
</div>
```

{{ EmbedLiveSample('Example', '500', '330') }}

## Siehe auch

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
- Eigenschaftenreferenz:
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
