---
title: CSS-Kombinatoren
short-title: Combinators
slug: Web/CSS/Reference/Selectors/Combinators
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

CSS-**Kombinatoren** definieren Beziehungen zwischen [Selektoren](/de/docs/Web/CSS/Reference/Selectors). Sie ermöglichen es Ihnen, Elemente basierend auf ihrer Beziehung zu anderen Elementen im Dokumentbaum auszuwählen.

Zum Beispiel, um nur Paragraphenelemente zu stylen, die direkte Kinder eines {{HTMLElement("div")}} sind, können Sie den Kindkombinator (`>`) verwenden:

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

- [Kindkombinator (`>`)](/de/docs/Web/CSS/Reference/Selectors/Child_combinator)
- [Column-Kombinator (`||`)](/de/docs/Web/CSS/Reference/Selectors/Column_combinator)
- [Nachfahrenschafts-Kombinator (" ")](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator)
- [Namespace-Trennzeichen (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [Nachbar-Kombinator (`+`)](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [Selektor-Liste (`,`)](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Subsequenter Nachbar-Kombinator (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## Siehe auch

- Modul [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
