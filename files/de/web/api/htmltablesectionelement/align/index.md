---
title: "HTMLTableSectionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableSectionElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Schnittstelle ist ein Zeichenfolgenwert, der angibt, wie Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}} Tabellenabschnitt horizontal ausgerichtet werden soll. Einzelne Zeilen und Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um den Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Der Text wird linksbündig ausgerichtet. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Der Text wird rechtsbündig ausgerichtet. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Der Text wird in der Zelle zentriert. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Lernen: Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
