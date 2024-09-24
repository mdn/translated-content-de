---
title: Raster-Container
slug: Glossary/Grid_Container
l10n:
  sourceCommit: 3c5185e55298c2ca14e4e63913a50bb81e3c5609
---

{{GlossarySidebar}}

Wenn ein Wert von `grid` oder `inline-grid` auf ein Element angewendet wird, wird es zu einem **Raster-Container** unter Verwendung des [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout), und alle direkten Kinder dieses Elements werden zu Rasterelementen.

Wenn ein Element zu einem Raster-Container wird, etabliert es einen **Raster-Formatierungskontext**. Die direkten Kinder können sich nun auf einem beliebigen expliziten Raster layouten, das mit {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} definiert ist, oder auf dem _impliziten Raster_, das entsteht, wenn ein Element außerhalb des _expliziten Rasters_ platziert wird.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Weiterführende Literatur

- [Grundkonzepte des Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
