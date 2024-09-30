---
title: Grid
slug: Glossary/Grid
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{GlossarySidebar}}

Ein _CSS-Grid_ wird definiert mit dem `grid`-Wert der {{cssxref("display")}}-Eigenschaft; Sie können Spalten und Zeilen in Ihrem Grid mithilfe der Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} definieren.

Das Grid, das Sie mit diesen Eigenschaften definieren, wird als _explizites Grid_ beschrieben.

Wenn Sie Inhalt außerhalb dieses expliziten Grids platzieren oder wenn Sie sich auf die automatische Platzierung verlassen und der Grid-Algorithmus zusätzliche Zeilen- oder Spuren [tracks](/de/docs/Glossary/grid_tracks) erstellen muss, um [grid cells](/de/docs/Glossary/grid_cell) zu halten, dann werden zusätzliche Spuren im impliziten Grid erstellt. Das _implizite Grid_ ist das automatisch erstellte Grid aufgrund von Inhalten, die außerhalb der definierten Spuren hinzugefügt werden.

Im untenstehenden Beispiel habe ich ein _explizites Grid_ mit drei Spalten und zwei Zeilen erstellt. Die _dritte_ Zeile im Grid ist eine Spur des _impliziten Grids_, die entsteht, weil es mehr als sechs Elemente gibt, die die expliziten Spuren füllen.

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

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftsreferenz:

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
