---
title: CSS-Selektoren
short-title: Selectors
slug: Web/CSS/Reference/Selectors
l10n:
  sourceCommit: 93b85a5bc2b4589d93185263fd2c14381c36f821
---

**CSS-Selektoren** sind Muster, die in [CSS-Regeln](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets) verwendet werden, um spezifische Elemente für die Gestaltung auszuwählen und zu stylen.

> [!NOTE]
> Diese Seite ist ein Index aller Selektoren in CSS. Die Seite [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) stellt das Modul vor, das einige, aber nicht alle dieser Selektoren definiert.

Zum Beispiel, um Absätze zu stylen, verwenden Sie den `p`-[Typ-Selektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), um alle {{HTMLElement("p")}}-Elemente auszuwählen und einen Stil auf sie anzuwenden:

```css
/* Set font size on all <p> elements */
p {
  font-size: 12px;
  color: rebeccapurple;
}
```

## Syntax

```css
/* Select elements and apply styles */
selector {
  property: value;
}
```

## Index der Selektoren

- [& Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Namespace-Trennzeichen (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [Pseudoklassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Pseudo-Element-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Selektor-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universelle Selektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

## Spezifikationen

{{Specifications}}

Überprüfen Sie die Seiten zu [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) und [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications) für die entsprechenden Spezifikationstabellen.

## Siehe auch

- [Modul für CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [Struktur von CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [CSS-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Combinators)
- [Selektor-Liste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [Modul für CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements)
- [Modul zum CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
