---
title: CSS-Verschachtelung
slug: Web/CSS/CSS_nesting
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

Das **CSS-Verschachtelungs**-Modul definiert eine Syntax zum Verschachteln von Selektoren, wodurch es möglich wird, eine Stilregel innerhalb einer anderen zu verschachteln, wobei der Selektor der Kindregel relativ zum Selektor der Elternregel ist.

CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) darin, dass sie vom Browser geparst wird, anstatt von einem CSS-Präprozessor vorab kompiliert zu werden.

Die CSS-Verschachtelung trägt zur Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets bei. Sie kann auch helfen, die Größe der CSS-Dateien zu reduzieren, wodurch die Menge der von Benutzern heruntergeladenen Daten verringert wird.

## Referenz

### Selektoren

- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector)

## Leitfäden

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting)
  - : Erklärt, wie man CSS-Verschachtelung verwendet.
- [CSS-Verschachtelungs-at-rules](/de/docs/Web/CSS/CSS_nesting/Nesting_at-rules)
  - : Erklärt, wie man at-rules verschachtelt.
- [CSS-Verschachtelung und Spezifität](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity)
  - : Erklärt die Unterschiede in der Spezifität bei der Verschachtelung von CSS.

## Verwandte Konzepte

- [Selektoren und Kombinatoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators)
- [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
- {{Glossary("CSS_preprocessor", "CSS-Präprozessor")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Specificity)
- [CSS-Kaskadierungs- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Selektorenmodul](/de/docs/Web/CSS/CSS_selectors)
