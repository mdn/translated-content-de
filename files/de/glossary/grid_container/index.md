---
title: Grid-Container
slug: Glossary/Grid_Container
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Die Verwendung des Wertes `grid` oder `inline-grid` auf einem Element verwandelt es in einen **Grid-Container** unter Verwendung des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout), und alle direkten Kinder dieses Elements werden zu Grid-Elementen.

Wenn ein Element zu einem Grid-Container wird, etabliert es einen **Grid-Formatierungskontext**. Die direkten Kinder können sich nun entweder auf einem expliziten Rasterlayout anordnen, das mittels {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} definiert ist, oder auf dem _impliziten Raster_, das erstellt wird, wenn ein Element außerhalb des _expliziten Rasters_ platziert wird.

## Siehe auch

### Eigenschaftenreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Weiterführende Literatur

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
