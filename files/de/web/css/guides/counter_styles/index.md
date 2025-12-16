---
title: CSS-Zählerstile
short-title: Counter styles
slug: Web/CSS/Guides/Counter_styles
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS Counter Styles**-Modul ermöglicht es Ihnen, eigene Zählerstile zu definieren, um das Erscheinungsbild von [Markierungen](/de/docs/Web/CSS/Reference/Selectors/::marker) in Listen und Zählern in [generierten Inhalten](/de/docs/Web/CSS/Guides/Generated_content) zu verwalten. Es ermöglicht Ihnen auch, native Browser-Listenstile mit eigenen Anpassungen zu erweitern.

Obwohl wir an Zähler als Zahlen denken, sind sie eigentlich Zeichenfolgen mit Komponenten, die inkrementiert werden können. Das Counter Styles-Modul definiert die `@counter-style`-Regel mit zehn Deskriptoren, die es Entwicklern ermöglichen, genau zu definieren, wie Zähler in Zeichenfolgen umgewandelt werden. Dieses Modul ermöglicht es, zu definieren, welche Zeichen für die Zählerpunkte verwendet werden sollen, das Präfix, das vor dem Zähler gesetzt wird, und das Suffix, das danach kommt, sowie den Umgang mit negativen Werten. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Zählerstil verarbeiten kann, und bieten alternative Stile für den Fall, dass der Zählerwert außerhalb des definierten Bereichs liegt oder anderweitig nicht dargestellt werden kann. Das Modul ermöglicht auch die Definition, wie der Zähler von Sprachsynthesizern vorgelesen wird.

## Referenz

### Eigenschaften

Es sind keine Eigenschaften in diesem Modul definiert.

### Funktionen

- {{cssxref("symbols()")}}

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

Modul [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists):

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzschreibweise Eigenschaft
- {{cssxref("counter()")}} Funktion
- {{cssxref("counters()")}} Funktion

Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements):

- {{cssxref("::after")}} Pseudoelement
- {{cssxref("::before")}} Pseudoelement
- {{cssxref("::marker")}} Pseudoelement

Modul [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content):

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists)
- Modul [CSS-Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements)
- Modul [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content)
- [Vorgefertigte Zählerstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
