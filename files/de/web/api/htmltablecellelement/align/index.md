---
title: "HTMLTableCellElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCellElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist ein String, der angibt, wie Text horizontal im {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um stattdessen Text horizontal in einer Zelle auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Den Text links ausrichten. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Den Text rechts ausrichten. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Den Text in der Zelle zentrieren. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
