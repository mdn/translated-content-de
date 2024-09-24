---
title: Raster
slug: Glossary/Grid
l10n:
  sourceCommit: 8799df4d0dbc74bdcf0de1e7a24563a46dcb2478
---

{{GlossarySidebar}}

Ein _CSS-Raster_ wird definiert, indem der Wert `grid` der {{cssxref("display")}}-Eigenschaft verwendet wird; Sie können Spalten und Zeilen auf Ihrem Raster mit den Eigenschaften {{cssxref("grid-template-rows")}} und {{cssxref("grid-template-columns")}} definieren.

Das Raster, das Sie mit diesen Eigenschaften definieren, wird als _explizites Raster_ beschrieben.

Wenn Sie Inhalte außerhalb dieses expliziten Rasters platzieren oder wenn Sie sich auf die automatische Platzierung verlassen und der Rasteralgorithmus zusätzliche Zeilen- oder Spuren-{{glossary("grid tracks", "Spuren")}} erstellen muss, um {{glossary("grid cell", "Rasterzellen")}} zu halten, werden zusätzliche Spuren im impliziten Raster erstellt. Das _implizite Raster_ ist das Raster, das automatisch erstellt wird, wenn Inhalte außerhalb der definierten Spuren hinzugefügt werden.

Im folgenden Beispiel habe ich ein _explizites Raster_ mit drei Spalten und zwei Zeilen erstellt. Die _dritte_ Zeile im Raster ist eine _implizite Raster_-Spur, die entsteht, weil es mehr als sechs Elemente gibt, die die expliziten Spuren füllen.

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

- [Grundkonzepte des Rasterslayouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Eigenschaftsreferenz:

  - {{cssxref("grid-template-columns")}}
  - {{cssxref("grid-template-rows")}}
  - {{cssxref("grid")}}
  - {{cssxref("grid-template")}}
