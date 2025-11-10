---
title: CSS-Verschachtelung
slug: Web/CSS/CSS_nesting
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **CSS-Nesting**-Modul definiert eine Syntax zum Verschachteln von Selektoren. Es ermöglicht, eine Stilregel innerhalb einer anderen zu verschachteln, wobei der Selektor der Kindenregel relativ zum Selektor der Elternregel ist.

CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) dadurch, dass sie vom Browser geparst wird, anstatt von einem CSS-Präprozessor vorab kompiliert zu werden.

CSS-Verschachtelung verbessert die Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets. Sie hilft möglicherweise auch dabei, die Größe von CSS-Dateien zu reduzieren und somit die Menge an heruntergeladenen Daten durch die Benutzer zu verringern.

## Referenz

### Selektoren

- [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)

## Leitfäden

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting/Using)
  - : Erklärt, wie man CSS-Verschachtelung verwendet.
- [CSS-Verschachtelungs-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
  - : Erklärt, wie man Regelanweisungen verschachtelt.
- [CSS-Verschachtelung und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
  - : Erklärt die Unterschiede in der Spezifität bei der Verschachtelung von CSS.

## Verwandte Konzepte

- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- {{Glossary("CSS_preprocessor", "CSS-Präprozessor")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Kaskadierungs- und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Selektormodul](/de/docs/Web/CSS/Guides/Selectors)
