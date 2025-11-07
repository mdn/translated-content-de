---
title: CSS-Listen und Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **CSS-Listen und -Zähler** Modul ermöglicht das Styling und die Positionierung von Listenzeichen und die Manipulation ihrer Werte mithilfe von Zeichenketten, Zählern und anderen Funktionen.

Das Markierungszeichen eines Listenelements, sei es ein Aufzählungssymbol oder ein Ordnungszähler, ist sein definierendes Merkmal. Listenelemente sind nicht auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}} oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Vielmehr sind Listenelemente alle Elemente mit `display: list-item` eingestellt.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste einzustellen und zurückzusetzen, festzulegen, welche [Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) oder Symbole als Markierungen verwendet werden sollen, und die Position dieser Markierungen festzulegen. Es bietet Entwicklern auch die Möglichkeit, angepasste Markierungen zu erstellen.

## Referenz

### Eigenschaften

- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("list-style-image")}}
- {{cssxref("list-style-type")}}
- {{cssxref("list-style-position")}}
- {{cssxref("list-style")}} Kurznotation

Es gibt auch eine `marker-side` Eigenschaft, die noch nicht vollständig definiert oder implementiert ist.

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

- [Konsistente Listeneinrückungen](/de/docs/Web/CSS/Guides/Lists/Indenting)
  - : Erklärt, wie man konsistente Listeneinrückungen in verschiedenen Browsern erreicht.

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
  - : Erklärt, wie die CSS-Zählereigenschaften zur Steuerung von Listen-Zählern verwendet werden.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
  - {{cssxref("@counter-style")}} At-Regel
  - [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} `start`, `reversed` und `type` Attribute
- {{HTMLElement("ul")}} `type` Attribut
- {{HTMLElement("li")}} `type` und `value` Attribute

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul
- [CSS-generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
