---
title: CSS-Listen und Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: c642cf3df8c5bf401d9b69f9e7182a874b1e010b
---

{{CSSRef}}

Das **CSS-Listen und Zähler** Modul ermöglicht das Gestalten und Positionieren der Aufzählungszeichen von Listenelementen und das Manipulieren ihrer Werte mit einer Kombination aus Zeichenketten, Zählern und anderen Funktionen.

Das Merkmal eines Listenelements, sei es ein Aufzählungszeichen oder ein Ordnungszähler, ist sein definierendes Merkmal. Listenelemente sind nicht nur auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Vielmehr sind Listenelemente jedes Element, das `display: list-item` gesetzt hat.

Dieses Modul definiert CSS-Features, um Zähler einer Liste zu setzen und zurückzusetzen, festzulegen, welche [Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) oder Symbole als Marker verwendet werden, und diese Marker zu positionieren. Es bietet Entwicklern auch die Möglichkeit, benutzerdefinierte Marker zu erstellen.

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

- [Konsistente Listeneinrückung](/de/docs/Web/CSS/CSS_lists/Consistent_list_indentation)

  - : Erklärt, wie man konsistente Listeneinrückung über verschiedene Browser hinweg erreicht.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Erklärt, wie man die CSS-Zählereigenschaften benutzt, um Listen-Zähler zu kontrollieren.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)

  - {{cssxref("@counter-style")}} Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`-, `reversed`- und `type`-Attribute
- {{HTMLElement("ul")}} `type`-Attribut
- {{HTMLElement("li")}} `type`- und `value`-Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
