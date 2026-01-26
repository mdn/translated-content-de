---
title: CSS-Listen und -Zähler
short-title: Listen und Zähler
slug: Web/CSS/Guides/Lists
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Das **CSS-Listen-und-Zähler**-Modul ermöglicht die Gestaltung und Positionierung von Listenelement-Punkten und die Manipulation ihrer Werte mithilfe einer Kombination aus Zeichenketten, Zählern und anderen Funktionen.

Das Markierungsmerkmal eines Listenelements, ob es sich um ein Bullet-Symbol oder einen Ordnungszähler handelt, ist sein definierendes Merkmal. Listenelemente sind nicht auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Vielmehr sind Listenelemente alle Elemente mit `display: list-item` eingestellt.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste zu setzen und zurückzusetzen, festzulegen, welche [counter-styles](/de/docs/Web/CSS/Guides/Counter_styles) oder Symbole als Marker verwendet werden sollen, und diese Marker zu positionieren. Es bietet Entwicklern auch die Möglichkeit, benutzerdefinierte Marker zu erstellen.

## Referenz

### Eigenschaften

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} Kurzform

Es gibt auch eine `marker-side`-Eigenschaft, die noch nicht vollständig definiert oder implementiert ist.

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
  - : Erklärt, wie man eine konsistente Listen-Einrückung über verschiedene Browser hinweg erreicht.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : Erklärt, wie man die CSS-Zähleigenschaften verwendet, um Listen-Zähler zu kontrollieren.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
  - {{cssxref("@counter-style")}} At-Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`, `reversed` und `type` Attribute
- {{HTMLElement("ul")}} `type` Attribut
- {{HTMLElement("li")}} `type` und `value` Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content) Modul
