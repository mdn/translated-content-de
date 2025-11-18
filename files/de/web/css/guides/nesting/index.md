---
title: CSS-Verschachtelung
short-title: Nesting
slug: Web/CSS/Guides/Nesting
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das **CSS-Verschachtelungsmodul** definiert eine Syntax zum Verschachteln von Selektoren und ermöglicht es, eine Stilregel in eine andere zu verschachteln, wobei der Selektor der Kindregel relativ zum Selektor der Elternregel ist.

Die CSS-Verschachtelung unterscheidet sich von CSS-Präprozessoren wie [Sass](https://sass-lang.com/) dadurch, dass sie vom Browser geparst wird und nicht von einem CSS-Präprozessor vorab kompiliert wird.

Die CSS-Verschachtelung verbessert die Lesbarkeit, Modularität und Wartbarkeit von CSS-Stylesheets. Sie kann auch dazu beitragen, die Größe von CSS-Dateien zu reduzieren, was die Menge der von Nutzern heruntergeladenen Daten verringert.

## Referenz

### Selektoren

- [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector)

## Leitfäden

- [Verwendung der CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting/Using)
  - : Erklärt, wie man die CSS-Verschachtelung verwendet.
- [CSS-Verschachtelungsat-Regeln](/de/docs/Web/CSS/Guides/Nesting/At-rules)
  - : Erklärt, wie man at-Regeln verschachtelt.
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
- [CSS-Kaskadierungs- und Vererbungsmodule](/de/docs/Web/CSS/Guides/Cascade)
- [CSS-Selektorenmodul](/de/docs/Web/CSS/Guides/Selectors)
