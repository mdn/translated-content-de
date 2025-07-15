---
title: CSS-Listen und -Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **CSS-Listen und -Zähler** Modul ermöglicht das Stylen und Positionieren von Listenelement-Aufzählungszeichen sowie das Manipulieren ihrer Werte mithilfe einer Kombination aus Strings, Zählern und anderen Funktionen.

Das kennzeichnende Merkmal eines Listenelements ist dessen Markierung, sei es ein Aufzählungszeichen oder ein Ordnungszähler. Listenelemente sind nicht auf {{HTMLElement("li")}} Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}} oder {{HTMLElement("ul")}} Elementen verschachtelt sind. Vielmehr sind Listenelemente alle Elemente, die `display: list-item` gesetzt haben.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste zu setzen und zurückzusetzen, um festzulegen, welche [Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) oder Symbole als Markierungen verwendet werden sollen, und um diese Markierungen zu positionieren. Es bietet Entwicklern auch die Möglichkeit, benutzerdefinierte Markierungen zu erstellen.

## Referenz

### Eigenschaften

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} Kurzschreibweise

Es gibt auch eine `marker-side`-Eigenschaft, die noch vollständig definiert oder implementiert werden muss.

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
  - : Erklärt, wie man konsistente Listeneinrückungen über verschiedene Browser hinweg erzielt.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Erklärt, wie man die CSS-Zählereigenschaften verwendet, um Listen-Zähler zu steuern.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)
  - {{cssxref("@counter-style")}} At-Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`, `reversed`, und `type` Attribute
- {{HTMLElement("ul")}} `type` Attribut
- {{HTMLElement("li")}} `type` und `value` Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
