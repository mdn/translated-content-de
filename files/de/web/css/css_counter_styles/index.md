---
title: CSS-Zählerstile
slug: Web/CSS/CSS_counter_styles
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Zählerstile**-Modul ermöglicht es Ihnen, Ihre eigenen Zählerstile zu definieren, um das Aussehen von [Markierungen](/de/docs/Web/CSS/::marker) in Listen und Zählern in [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) zu verwalten. Es ermöglicht Ihnen auch, native Browser-Listenstile mit Ihren eigenen Anpassungen zu erweitern.

Obwohl wir Zähler als Zahlen betrachten, sind sie eigentlich Zeichenketten mit Komponenten, die inkrementiert werden können. Das Modul für Zählerstile definiert die `@counter-style`-Regel mit zehn Deskriptoren, die es Entwicklern ermöglichen, genau zu definieren, wie Zähler in Zeichenketten umgewandelt werden. Dieses Modul ermöglicht es Ihnen, die Zeichen zu definieren, die für die Aufzählungspunkte verwendet werden, das Präfix, das vor dem Zähler steht, und das Suffix, das danach kommt, sowie den Umgang mit negativen Werten. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Zählerstil verarbeiten kann, und bieten alternative Stile für den Fall, dass der Zählerwert außerhalb des definierten Bereichs liegt oder anderweitig der Zählerwert nicht gerendert werden kann. Das Modul ermöglicht es auch, zu definieren, wie der Zähler von Sprachsynthesizern vorgelesen wird.

## Referenz

### Eigenschaften

In diesem Modul sind keine Eigenschaften definiert.

### Funktionen

- {{cssxref("symbols", "symbols()")}}

### Datentypen

- [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)
- [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values)
- [`<symbols-type>`](/de/docs/Web/CSS/symbols#syntax)

### At-Regeln und Deskriptoren

- {{cssxref("@counter-style")}}
  - {{cssxref("@counter-style/system","system")}}
  - {{cssxref("@counter-style/symbols", "symbols")}}
  - {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}
  - {{cssxref("@counter-style/negative", "negative")}}
  - {{cssxref("@counter-style/prefix", "prefix")}}
  - {{cssxref("@counter-style/suffix", "suffix")}}
  - {{cssxref("@counter-style/range", "range")}}
  - {{cssxref("@counter-style/pad", "pad")}}
  - {{cssxref("@counter-style/speak-as", "speak-as")}}
  - {{cssxref("@counter-style/fallback", "fallback")}}

### Schnittstellen

- [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule) Schnittstelle

## Leitfaden

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Beschreibt, wie Zähler verwendet werden können, um jedes HTML-Element zu nummerieren oder komplexe Zählungen durchzuführen.

## Verwandte Konzepte

[CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul:

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzschreibweise für Eigenschaft
- {{cssxref("counter", "counter()")}} Funktion
- {{cssxref("counters", "counters()")}} Funktion

[CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul:

- {{cssxref("::after")}} Pseudoelement
- {{cssxref("::before")}} Pseudoelement
- {{cssxref("::marker")}} Pseudoelement

[CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul:

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Spezifikationen}}

## Siehe auch

- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [Fertigvorlagen für Zählerstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
