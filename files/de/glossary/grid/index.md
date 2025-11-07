---
title: Grid
slug: Glossary/Grid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein _CSS-Grid_ wird mit dem `grid`-Wert der {{cssxref("display")}}-Eigenschaft definiert; Sie können Spalten und Zeilen in Ihrem Grid mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} festlegen.

Das mit diesen Eigenschaften definierte Grid wird als _explizites Grid_ beschrieben.

Wenn Sie Inhalte außerhalb dieser expliziten Grid platzieren oder wenn Sie auf die automatische Platzierung angewiesen sind und der Grid-Algorithmus zusätzliche Zeilen- oder Spuren {{Glossary("grid_tracks", "tracks")}} erstellen muss, um {{Glossary("grid_cell", "Grid-Zellen")}} zu halten, dann werden zusätzliche Spuren im impliziten Grid erstellt. Das _implizite Grid_ ist das Grid, das automatisch entsteht, weil Inhalte außerhalb der definierten Spuren hinzugefügt werden.

Im untenstehenden Beispiel habe ich ein _explizites Grid_ mit drei Spalten und zwei Zeilen erstellt. Die _dritte_ Zeile im Grid ist eine _implizite Grid_-Zeilenspur, die entsteht, weil es mehr als sechs Elemente gibt, die die expliziten Spuren füllen.

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
- Eigenschaftsreferenz:
  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
