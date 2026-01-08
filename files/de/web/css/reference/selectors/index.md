---
title: CSS-Selektoren
short-title: Selectors
slug: Web/CSS/Reference/Selectors
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

**CSS-Selektoren** sind Muster, die in [CSS-Regeln](/de/docs/Web/CSS/Guides/Syntax/Introduction#css_rulesets) verwendet werden, um bestimmte Elemente für das Styling zu adressieren und auszuwählen.

> [!NOTE]
> Diese Seite ist ein Index aller Selektoren in CSS. Die Seite [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) führt das Modul ein, das einige, aber nicht alle dieser Selektoren definiert.

Zum Beispiel, um Absätze zu stylen, verwenden Sie den `p`-[Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), um alle {{HTMLElement("p")}}-Elemente auszuwählen und einen Stil auf sie anzuwenden:

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

- [& Diagnose-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)
- [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors)
- [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors)
- [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors)
- [Keyframe-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Keyframe_selectors)
- [Namespace-Trennzeichen (`|`)](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator)
- [Pseudoklassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [Pseudo-Element-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements)
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [Universalselektoren](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)

## Spezifikationen

{{Specifications}}

Überprüfen Sie die Seiten für [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications) für ihre jeweiligen Spezifikationstabellen.

## Siehe auch

- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
- [Struktur von CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [CSS-Kombinatoren](/de/docs/Web/CSS/Reference/Selectors/Combinators)
- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- Modul [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements)
- Modul [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
