---
title: Grid-Container
slug: Glossary/Grid_Container
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Die Verwendung des Wertes `grid` oder `inline-grid` auf einem Element verwandelt es in einen **Grid-Container** unter Verwendung des [CSS Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout), und alle direkten Kinder dieses Elements werden zu Grid-Elementen.

Wenn ein Element zu einem Grid-Container wird, etabliert es einen **Grid-Formatierungskontext**. Die direkten Kinder können sich nun entweder auf einem expliziten Gitterlayout, das mithilfe von {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} definiert wird, oder auf dem _impliziten Gitterlayout_ ausrichten, das entsteht, wenn ein Element außerhalb des _expliziten Gitters_ platziert wird.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Weiterführende Literatur

- [Grundkonzepte des Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
