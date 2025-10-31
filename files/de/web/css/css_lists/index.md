---
title: CSS-Listen und Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das **CSS-Listen und Zähler**-Modul ermöglicht das Styling und die Positionierung von Aufzählungsmarkierungen von Listenelementen sowie die Manipulation ihrer Werte mit einer Kombination aus Zeichenketten, Zählern und anderen Funktionen.

Ein Listenelementmarker, sei es ein Aufzählungssymbol oder ein Ordnungszähler, ist ihr definierendes Merkmal. Listenelemente sind nicht auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}}- oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Listenelemente sind vielmehr jedes Element, das `display: list-item` gesetzt hat.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste festzulegen und zurückzusetzen, um festzulegen, welche [Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) oder Symbole als Markierungen verwendet werden sollen, und um diese Markierungen zu positionieren. Es ermöglicht es den Entwicklern auch, benutzerdefinierte Markierungen zu erstellen.

## Referenz

### Eigenschaften

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} Kurzform

Es gibt auch eine `marker-side`-Eigenschaft, die noch vollständig definiert oder implementiert werden muss.

### Pseudoelemente

- {{cssxref("::marker")}}

### Funktionen

- {{cssxref("counter")}}
- {{cssxref("counters")}}

### Datentypen

- [`<counter>`](/de/docs/Web/CSS/Reference/Properties/content#counter)
- [`<counter-name>`](/de/docs/Web/CSS/counter#counter-name)
- [`<counter-style>`](/de/docs/Web/CSS/counter#counter-style)

## Leitfäden

- [Konsistente Listeneinzüge](/de/docs/Web/CSS/CSS_lists/Consistent_list_indentation)
  - : Erklärt, wie man konsistente Listeneinzüge in verschiedenen Browsern erreicht.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Erklärt, wie man die CSS-Zählereigenschaften verwendet, um Listenzähler zu steuern.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)
  - {{cssxref("@counter-style")}} At-Regel
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
- [CSS Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS erzeugter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
