---
title: Grid-Container
slug: Glossary/Grid_Container
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Mit dem Wert `grid` oder `inline-grid` auf ein Element wird dieses in einen **Grid-Container** umgewandelt, indem das [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) verwendet wird, und alle direkten Kinder dieses Elements werden zu Grid-Elementen.

Wenn ein Element zu einem Grid-Container wird, wird ein **Grid-Formatting-Kontext** erstellt. Die direkten Kinder können sich nun auf jedem expliziten Grid platzieren, das mit {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} definiert ist, oder auf dem _impliziten Grid_, das entsteht, wenn ein Element außerhalb des _expliziten Grids_ platziert wird.

## Siehe auch

### Eigenschaftsreferenz

- {{cssxref("grid-template-columns")}}
- {{cssxref("grid-template-rows")}}
- {{cssxref("grid-auto-columns")}}
- {{cssxref("grid-auto-rows")}}
- {{cssxref("grid")}}
- {{cssxref("grid-template")}}

### Weiterführende Lektüre

- [Grundlegende Konzepte des Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts)
