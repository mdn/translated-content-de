---
title: "HTMLTableCellElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCellElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der {{domxref("HTMLTableCellElement")}}-Schnittstelle ist ein String, der angibt, wie Text horizontal in einer {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte stattdessen CSS verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text horizontal in einer Zelle auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text nach links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text nach rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
