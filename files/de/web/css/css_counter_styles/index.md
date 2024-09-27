---
title: CSS-Counter-Stile
slug: Web/CSS/CSS_counter_styles
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{CSSRef}}

Das **CSS-Counter-Stile**-Modul ermöglicht es Ihnen, eigene Zählerstile zu definieren, um das Erscheinungsbild von [Markierungen](/de/docs/Web/CSS/::marker) in Listen und Zählern in [generierten Inhalten](/de/docs/Web/CSS/CSS_generated_content) zu verwalten. Es ermöglicht Ihnen auch, native Browser-Listenstile mit eigenen Anpassungen zu erweitern.

Obwohl wir Zähler als Zahlen betrachten, sind sie tatsächlich Zeichenfolgen mit Komponenten, die inkrementiert werden können. Das Counter-Stile-Modul definiert die `@counter-style`-Regel mit zehn Deskriptoren, die Entwicklern ermöglichen, genau zu definieren, wie Zähler in Zeichenfolgen umgewandelt werden. Dieses Modul ermöglicht es Ihnen, festzulegen, welche Zeichen für die Zählerpunkte verwendet werden sollen, das Präfix, das dem Zähler vorangestellt wird, und das Suffix, das danach kommt, sowie den Umgang mit negativen Werten. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Zählerstil handhaben kann, und bieten gleichzeitig Fallback-Stile, wenn der Zählerwert außerhalb des definierten Bereichs liegt oder der Zählerwert anderweitig nicht gerendert werden kann. Das Modul ermöglicht auch die Definition, wie der Zähler von Sprachausgaben ausgesprochen wird.

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

### Schnittstellen und APIs

- [CSS-Counter-Stile](/de/docs/Web/API/CSS_Counter_Styles) API
- [`CSSCounterStyleRule`](/de/docs/Web/API/CSSCounterStyleRule) Schnittstelle

## Leitfäden

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Beschreibt, wie man Zähler verwendet, um jedes HTML-Element zu nummerieren oder komplexe Zählungen durchzuführen.

## Verwandte Konzepte

[CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul:

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzschreibweise Eigenschaft
- {{cssxref("counter", "counter()")}} Funktion
- {{cssxref("counters", "counters()")}} Funktion

[CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul:

- {{cssxref("::after")}} Pseudoelement
- {{cssxref("::before")}} Pseudoelement
- {{cssxref("::marker")}} Pseudoelement

[CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content)

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Counter-Stile](/de/docs/Web/API/CSS_Counter_Styles) API
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
- [Fertige Zählerstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
