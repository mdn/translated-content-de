---
title: CSS-Listen und Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: c642cf3df8c5bf401d9b69f9e7182a874b1e010b
---

{{CSSRef}}

Das **CSS-Listen und Zähler** Modul ermöglicht die Gestaltung und Positionierung von Listenelement-Markern und die Manipulation ihrer Werte mit einer Kombination aus Zeichenfolgen, Zählern und anderen Funktionen.

Ein Listenelement-Marker, sei es ein Aufzählungssymbol oder ein ordinaler Zähler, ist sein definierendes Merkmal. Listenelemente sind nicht auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Vielmehr sind Listenelemente alle Elemente, bei denen `display: list-item` gesetzt ist.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste zu setzen und zurückzusetzen, festzulegen, welche [counter-styles](/de/docs/Web/CSS/CSS_counter_styles) oder Symbole als Marker verwendet werden sollen, und diese Marker zu positionieren. Es bietet Entwicklern auch die Möglichkeit, angepasste Marker zu erstellen.

## Referenz

### Eigenschaften

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} Kurzschreibweise

Es gibt auch eine `marker-side` Eigenschaft, die noch vollständig definiert oder implementiert werden muss.

### Pseudo-Elemente

- {{cssxref("::marker")}}

### Funktionen

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### Datentypen

- [`<counter>`](/de/docs/Web/CSS/content#counter)
- [`<counter-name>`](/de/docs/Web/CSS/counter#counter-name)
- [`<counter-style>`](/de/docs/Web/CSS/counter#counter-style)

## Leitfäden

- [Konsistente Listeneinrückung](/de/docs/Web/CSS/CSS_lists/Consistent_list_indentation)

  - : Erläutert, wie man eine konsistente Listeneinrückung über verschiedene Browser hinweg erreicht.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Erläutert, wie man die CSS-Zähler-Eigenschaften verwendet, um Listenzähler zu kontrollieren.

## Verwandte Konzepte

- [CSS-Zähler-Stile](/de/docs/Web/CSS/CSS_counter_styles)

  - {{cssxref("@counter-style")}} Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`, `reversed` und `type` Attribute
- {{HTMLElement("ul")}} `type` Attribut
- {{HTMLElement("li")}} `type` und `value` Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zähler-Stile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS Generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
