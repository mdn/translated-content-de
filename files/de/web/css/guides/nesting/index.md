---
title: CSS-Verschachtelung
short-title: Nesting
slug: Web/CSS/Guides/Nesting
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Nesting Modul** definiert eine Syntax für die Verschachtelung von Selektoren und ermöglicht das Verschachteln einer Stilregel innerhalb einer anderen, wobei der Selektor der Kindregel relativ zum Selektor der Elternregel ist.

CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) darin, dass es vom Browser geparst wird, anstatt von einem CSS-Präprozessor vorab kompiliert zu werden.

CSS-Verschachtelung hilft bei der Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets. Sie hilft potenziell auch, die Größe von CSS-Dateien zu reduzieren, was die Menge der von Nutzern heruntergeladenen Daten verringert.

## Referenz

### Selektoren

- [`&` Verschachtelungssselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)

## Leitfäden

- [Verwendung von CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting/Using)
  - : Erklärt, wie man CSS-Verschachtelung verwendet.
- [CSS-Verschachtelung mit At-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
  - : Erklärt, wie man At-Regeln verschachteln kann.
- [CSS-Verschachtelung und Spezifität](/de/docs/Web/CSS/Guides/Nesting/Nesting_and_specificity)
  - : Erklärt die Unterschiede in der Spezifität bei der CSS-Verschachtelung.

## Verwandte Konzepte

- [Selektoren und Kombinatoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators)
- [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- {{Glossary("CSS_preprocessor", "CSS-Präprozessor")}}

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Kaskadierung und Vererbungsmodul](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Selektorenmodul](/de/docs/Web/CSS/Guides/Selectors)
