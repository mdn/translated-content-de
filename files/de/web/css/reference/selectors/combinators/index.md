---
title: CSS-Kombinatoren
short-title: Combinators
slug: Web/CSS/Reference/Selectors/Combinators
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

CSS **Kombinatoren** definieren Beziehungen zwischen [Selektoren](/de/docs/Web/CSS/Reference/Selectors). Sie ermöglichen es, Elemente basierend auf ihrer Beziehung zu anderen Elementen im Dokumentbaum auszuwählen.

Zum Beispiel, um nur Absatz-Elemente zu stylen, die direkte Kinder eines {{HTMLElement("div")}} sind, können Sie den Kind-Kombinator (`>`) verwenden:

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
- [Namespace-Trennzeichen (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [Direkt-Nachbar-Kombinator (`+`)](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator)
- [Selektorenliste (`,`)](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Nachfolge-Nachbar-Kombinator (`~`)](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)

## Siehe auch

- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
