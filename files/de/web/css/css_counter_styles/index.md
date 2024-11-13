---
title: CSS-Zählerstile
slug: Web/CSS/CSS_counter_styles
l10n:
  sourceCommit: 9840d330e75b5fa4eec7034859a7d96e5d6ae07b
---

{{CSSRef}}

Das **CSS-Zählerstile**-Modul ermöglicht es Ihnen, eigene Zählerstile zu definieren, um das Erscheinungsbild von [Markierungen](/de/docs/Web/CSS/::marker) in Listen und Zählern in [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) zu verwalten. Es erlaubt Ihnen auch, die nativen Listenstile des Browsers mit eigenen Anpassungen zu erweitern.

Obwohl wir Zähler als Zahlen betrachten, sind sie eigentlich Zeichenketten mit Komponenten, die inkrementiert werden können. Das Zählerstile-Modul definiert die `@counter-style`-Regel mit zehn Deskriptoren, die es Entwicklern ermöglichen, genau festzulegen, wie Zähler in Zeichenketten umgewandelt werden. Dieses Modul ermöglicht es, festzulegen, welche Zeichen für die Zählerpunkte verwendet werden, welches Präfix vor den Zähler gestellt wird und welches Postfix nachher folgt, sowie den Umgang mit negativen Werten. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Zählerstil handhaben kann, während auch Ersatzstile bereitgestellt werden, wenn der Zählerwert außerhalb des definierten Bereichs liegt oder der Zählerwert anderweitig nicht gerendert werden kann. Das Modul ermöglicht auch die Definition, wie der Zähler von Sprachsynthesizern vorgelesen wird.

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

## Leitfäden

- [CSS-Zähler verwenden](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Beschreibt, wie Zähler verwendet werden, um jedes HTML-Element zu nummerieren oder komplexe Zählungen durchzuführen.

## Verwandte Konzepte

[CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul:

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzform
- {{cssxref("counter", "counter()")}} Funktion
- {{cssxref("counters", "counters()")}} Funktion

[CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul:

- {{cssxref("::after")}} Pseudoelement
- {{cssxref("::before")}} Pseudoelement
- {{cssxref("::marker")}} Pseudoelement

[CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul:

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [Fertige Zählerstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
