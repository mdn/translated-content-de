---
title: CSS-Zählerstile
slug: Web/CSS/CSS_counter_styles
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS counter styles** Modul ermöglicht es Ihnen, Ihre eigenen Zählerstile zu definieren, um das Erscheinungsbild von [Markierungen](/de/docs/Web/CSS/::marker) in Listen und Zählern in [generiertem Inhalt](/de/docs/Web/CSS/CSS_generated_content) zu verwalten. Es ermöglicht Ihnen auch, native Browser-Listenstile mit Ihren eigenen Anpassungen zu erweitern.

Obwohl wir Zähler als Zahlen betrachten, sind sie tatsächlich Zeichenketten mit Komponenten, die inkrementiert werden können. Das Modul für Zählerstile definiert die `@counter-style` Regel mit zehn Deskriptoren, die es Entwicklern ermöglichen, genau zu definieren, wie Zähler in Zeichenketten umgewandelt werden. Dieses Modul ermöglicht es, zu definieren, welche Zeichen für die Zählerpunkte verwendet werden, das Präfix vor dem Zähler und das Postfix danach, sowie die Handhabung negativer Werte. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Zählerstil verarbeiten kann, und bieten gleichzeitig Ausweichstile für den Fall, dass der Zählerwert außerhalb des definierten Bereichs liegt oder der Zählerwert nicht angezeigt werden kann. Das Modul ermöglicht es auch, zu definieren, wie der Zähler von Sprachsynthesizern laut vorgelesen wird.

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

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Beschreibt, wie Zähler verwendet werden können, um HTML-Elemente zu nummerieren oder komplexe Zählungsaufgaben durchzuführen.

## Verwandte Konzepte

[CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul:

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzform-Eigenschaft
- {{cssxref("counter", "counter()")}} Funktion
- {{cssxref("counters", "counters()")}} Funktion

[CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul:

- {{cssxref("::after")}} Pseudo-Element
- {{cssxref("::before")}} Pseudo-Element
- {{cssxref("::marker")}} Pseudo-Element

[CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul:

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
- [Vorgefertigte Zählerstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
