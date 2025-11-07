---
title: CSS-Counter-Stile
slug: Web/CSS/CSS_counter_styles
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Counter-Stile**-Modul ermöglicht es Ihnen, eigene Zählerstile zu definieren, um das Erscheinungsbild von [Markierungen](/de/docs/Web/CSS/Reference/Selectors/::marker) in Listen und Zählern in [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) zu verwalten. Es ermöglicht auch die Erweiterung nativer Browser-Listenstile mit eigenen Anpassungen.

Während wir Zähler als Zahlen betrachten, sind sie eigentlich Zeichenfolgen mit Komponenten, die inkrementiert werden können. Das Counter-Stile-Modul definiert die `@counter-style`-Regel mit zehn Deskriptoren, die es Entwicklern ermöglichen, genau zu definieren, wie Zähler in Zeichenfolgen umgewandelt werden. Dieses Modul ermöglicht die Definition, welche Zeichen für die Zählerpunktionen verwendet werden, welches Präfix vor dem Zähler gesetzt wird und welches Postfix danach kommt, sowie den Umgang mit negativen Werten. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Zählerstil verarbeiten kann, und gleichzeitig Ersatzstile bereitstellen, wenn der Zählerwert außerhalb des definierten Bereichs liegt oder der Zählerwert anderweitig nicht gerendert werden kann. Das Modul ermöglicht auch die Definition, wie der Zähler von Sprachsynthesizern laut vorgelesen wird.

## Referenz

### Eigenschaften

In diesem Modul sind keine Eigenschaften definiert.

### Funktionen

- {{cssxref("symbols", "symbols()")}}

### Datentypen

- [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
- [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values)
- [`<symbols-type>`](/de/docs/Web/CSS/Reference/Values/symbols#syntax)

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

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : Beschreibt, wie Zähler verwendet werden, um jedes HTML-Element zu nummerieren oder komplexes Zählen durchzuführen.

## Verwandte Konzepte

[CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul:

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzschreibweise Eigenschaft
- {{cssxref("counter", "counter()")}} Funktion
- {{cssxref("counters", "counters()")}} Funktion

[CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul:

- {{cssxref("::after")}} Pseudo-Element
- {{cssxref("::before")}} Pseudo-Element
- {{cssxref("::marker")}} Pseudo-Element

[CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul:

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [Bereitgestellte Zählerstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
