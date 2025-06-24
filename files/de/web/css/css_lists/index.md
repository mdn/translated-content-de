---
title: CSS-Listen und Zähler
slug: Web/CSS/CSS_lists
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Das **CSS-Listen und Zähler**-Modul ermöglicht das Styling und Positionieren von Aufzählungszeichen in Listen sowie das Manipulieren ihrer Werte mit einer Kombination aus Zeichenfolgen, Zählern und anderen Funktionen.

Das Markierungselement eines Listenelements, sei es ein Aufzählungszeichen oder ein Ordnungszähler, ist sein charakteristisches Merkmal. Listenelemente sind nicht auf {{HTMLElement("li")}}-Elemente beschränkt, die innerhalb von {{HTMLElement("ol")}}- oder {{HTMLElement("ul")}}-Elementen verschachtelt sind. Vielmehr sind Listenelemente jedes Element mit der Einstellung `display: list-item`.

Dieses Modul definiert CSS-Funktionen, um die Zähler einer Liste zu setzen und zurückzusetzen, festzulegen, welche [Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) oder Symbole als Markierungen verwendet werden sollen und diese zu positionieren. Es bietet Entwicklern auch die Möglichkeit, benutzerdefinierte Markierungen zu erstellen.

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

- [`<counter>`](/de/docs/Web/CSS/content#counter)
- [`<counter-name>`](/de/docs/Web/CSS/counter#counter-name)
- [`<counter-style>`](/de/docs/Web/CSS/counter#counter-style)

## Leitfäden

- [Konsistente Listen-Einrückung](/de/docs/Web/CSS/CSS_lists/Consistent_list_indentation)

  - : Erklärt, wie man eine konsistente Einrückung von Listen über verschiedene Browser hinweg erreicht.

- [Verwendung von CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
  - : Erklärt, wie die CSS-Zähleigenschaften zur Steuerung von Listen-Zählern verwendet werden.

## Verwandte Konzepte

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles)

  - {{cssxref("@counter-style")}} at-rule
  - [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Datentyp
  - [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#values) Datentyp
  - {{cssxref("symbols", "symbols()")}} Funktion

- {{HTMLElement("ol")}} Attribute `start`, `reversed` und `type`
- {{HTMLElement("ul")}} Attribut `type`
- {{HTMLElement("li")}} Attribute `type` und `value`

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
