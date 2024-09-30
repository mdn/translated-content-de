---
title: CSS-Listen und Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: c642cf3df8c5bf401d9b69f9e7182a874b1e010b
---

{{CSSRef}}

Das **CSS-Listen und Zähler** Modul ermöglicht die Gestaltung und Positionierung von Listeneinträgen und die Manipulation ihrer Werte mit einer Kombination von Zeichenfolgen, Zählern und anderen Funktionen.

Ein Listeneintrag wird durch seinen Marker definiert, sei es ein Bullet-Symbol oder ein Ordnungszähler. Listeneinträge sind nicht auf {{HTMLElement("li")}} Elemente beschränkt, die in {{HTMLElement("ol")}} oder {{HTMLElement("ul")}} Elemente eingebettet sind. Vielmehr sind Listeneinträge alle Elemente mit `display: list-item`.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste zu setzen und zurückzusetzen, festzulegen, welche [Counter-Styles](/de/docs/Web/CSS/CSS_counter_styles) oder Symbole als Marker verwendet werden sollen, und die Position dieser Marker festzulegen. Es bietet Entwicklern auch die Möglichkeit, benutzerdefinierte Marker zu erstellen.

## Referenz

### Eigenschaften

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} Kurzschreibweise

Es gibt auch eine `marker-side` Eigenschaft, die noch nicht vollständig definiert oder implementiert ist.

### Pseudoelemente

- {{cssxref("::marker")}}

### Funktionen

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### Datentypen

- [`<counter>`](/de/docs/Web/CSS/content#counter)
- [`<counter-name>`](/de/docs/Web/CSS/counter#counter-name)
- [`<counter-style>`](/de/docs/Web/CSS/counter#counter-style)

## Leitfäden

- [Konsistente Listen-Einrückung](/de/docs/Web/CSS/CSS_lists/Consistent_list_indentation)

  - : Erklärt, wie man eine konsistente Listen-Einrückung in verschiedenen Browsern erreicht.

- [CSS-Zähler verwenden](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Erklärt, wie die CSS-Zähler-Eigenschaften zur Steuerung von Listenzählern verwendet werden.

## Verwandte Konzepte

- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)

  - {{cssxref("@counter-style")}} At-Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`, `reversed` und `type` Attribute
- {{HTMLElement("ul")}} `type` Attribut
- {{HTMLElement("li")}} `type` und `value` Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
