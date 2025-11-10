---
title: CSS-Counterstile
short-title: Counter styles
slug: Web/CSS/Guides/Counter_styles
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS Counter Styles**-Modul erlaubt es Ihnen, Ihre eigenen Counterstile zu definieren, um das Erscheinungsbild von [Markierungen](/de/docs/Web/CSS/Reference/Selectors/::marker) in Listen und Zählern in [generiertem Inhalt](/de/docs/Web/CSS/Guides/Generated_content) zu verwalten. Es ermöglicht Ihnen auch, native Browser-Listenstile mit Ihren eigenen Anpassungen zu erweitern.

Obwohl wir Zähler als Zahlen betrachten, sind sie eigentlich Zeichenfolgen mit Komponenten, die inkrementiert werden können. Das Counterstile-Modul definiert die `@counter-style`-Regel mit zehn Deskriptoren, die es Entwicklern ermöglichen, genau zu definieren, wie Zähler in Zeichenfolgen umgewandelt werden. Dieses Modul ermöglicht es, zu definieren, welche Zeichen für die Zählerpunkte verwendet werden, welches Präfix vor den Zähler gesetzt wird und welches Suffix danach kommt, sowie wie mit negativen Werten umgegangen wird. Die Deskriptoren können auch einen Bereich festlegen, um die Werte zu begrenzen, die ein Counterstil verarbeiten kann, und gleichzeitig Fallback-Stile bereitzustellen, wenn der Zählerwert außerhalb des definierten Bereichs liegt oder anderweitig nicht gerendert werden kann. Das Modul ermöglicht es auch, zu definieren, wie der Zähler von Sprachsynthesizern vorgelesen wird.

## Referenz

### Eigenschaften

In diesem Modul sind keine Eigenschaften definiert

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
  - : Beschreibt, wie Zähler verwendet werden können, um jedes HTML-Element zu nummerieren oder um komplexe Zählungen durchzuführen.

## Verwandte Konzepte

[CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists) Modul:

- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-reset")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("list-style-type")}} Eigenschaft
- {{cssxref("list-style")}} Kurzschreibweise Eigenschaft
- {{cssxref("counter", "counter()")}} Funktion
- {{cssxref("counters", "counters()")}} Funktion

[CSS Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul:

- {{cssxref("::after")}} Pseudoelement
- {{cssxref("::before")}} Pseudoelement
- {{cssxref("::marker")}} Pseudoelement

[CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul:

- {{cssxref("content")}} Eigenschaft

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS Pseudoelemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
- [Vorbereitete Counterstile](https://w3c.github.io/predefined-counter-styles/#builtins) über W3C (2023)
