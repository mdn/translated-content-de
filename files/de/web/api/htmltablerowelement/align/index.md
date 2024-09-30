---
title: "HTMLTableRowElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableRowElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Interfaces ist ein String, der angibt, wie der Text horizontal im {{htmlelement("tr")}}-Tabellenrow ausgerichtet wird. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in einer Zeile horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Der Text wird linksbündig ausgerichtet. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Der Text wird rechtsbündig ausgerichtet. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Der Text wird in der Zelle zentriert. Verwenden Sie stattdessen `text-align: center`.
- `justify`
  - : Der Text wird über die Zelle hinweg verteilt. Verwenden Sie stattdessen `text-align: justify`.
- `char`
  - : Nie vollständig unterstützt, Text wird an einem bestimmten Zeichen ausgerichtet. Verwenden Sie `text-align: <string>,` wobei der String ein einzelnes Zeichen ist, wenn es unterstützt wird.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der Seite {{cssxref("text-align")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
