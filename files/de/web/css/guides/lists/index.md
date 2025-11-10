---
title: CSS-Listen und -Zähler
short-title: Listen und Zähler
slug: Web/CSS/Guides/Lists
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **CSS-Listen und -Zähler** Modul ermöglicht das Stylen und Positionieren von Aufzählungszeichen bei Listenelementen und das Manipulieren ihrer Werte mit einer Kombination aus Zeichenketten, Zählern und anderen Funktionen.

Das Markierungszeichen eines Listenelements, ob Symbol oder Ordnungszähler, ist sein definierendes Merkmal. Listenelemente sind nicht auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}}- oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Vielmehr sind Listenelemente alle Elemente mit `display: list-item`.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste zu setzen und zurückzusetzen, um festzulegen, welche [Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) oder Symbole als Markierungen verwendet werden sollen, und um diese Markierungen zu positionieren. Es ermöglicht Entwicklern auch das Erstellen von benutzerdefinierten Markierungen.

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

- [`<counter>`](/de/docs/Web/CSS/Reference/Properties/content#counter)
- [`<counter-name>`](/de/docs/Web/CSS/Reference/Values/counter#counter-name)
- [`<counter-style>`](/de/docs/Web/CSS/Reference/Values/counter#counter-style)

## Leitfäden

- [Konsistente Listen-Einrückung](/de/docs/Web/CSS/Guides/Lists/Indenting)
  - : Erklärt, wie man eine konsistente Listen-Einrückung in verschiedenen Browsern erreicht.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : Erklärt, wie man die CSS-Zählereigenschaften verwendet, um Listenzähler zu steuern.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
  - {{cssxref("@counter-style")}} At-Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`-, `reversed`- und `type`-Attribute
- {{HTMLElement("ul")}} `type`-Attribut
- {{HTMLElement("li")}} `type`- und `value`-Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
