---
title: "HTMLTableCellElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCellElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist ein String, der angibt, wie der Text in der {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle horizontal ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie stattdessen die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in einer Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richtet den Text nach links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richtet den Text nach rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentriert den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
