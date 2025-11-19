---
title: CSS-Kombinatoren
short-title: Combinators
slug: Web/CSS/Reference/Selectors/Combinators
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

CSS-**Kombinatoren** definieren Beziehungen zwischen [Selektoren](/de/docs/Web/CSS/Reference/Selectors). Sie ermöglichen es Ihnen, Elemente basierend auf ihrer Beziehung zu anderen Elementen im Dokumentbaum auszuwählen.

Beispielsweise, um nur Absatzelemente zu stylen, die direkte Kinder eines {{HTMLElement("div")}} sind, können Sie den Kind-Kombinator (`>`) verwenden:

```css
/* Set top margin on <p> elements that are direct children of <div> */
div > p {
  margin-top: 0;
}
```

## Syntax

```css
/* Combine selectors to express relationships */
selector1 combinator selector2 {
  property: value;
}
```

## Index der Kombinatoren

- [Kind-Kombinator (`>`)](/de/docs/Web/CSS/Reference/Selectors/Child_combinator)
- [Spalten-Kombinator (`||`)](/de/docs/Web/CSS/Reference/Selectors/Column_combinator)
- [Nachfahren-Kombinator (" ")](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
- [Nächster-Geschwister-Kombinator (`+`)](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [Folge-Geschwister-Kombinator (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## Siehe auch

- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) Modul
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
