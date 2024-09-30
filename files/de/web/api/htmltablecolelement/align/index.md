---
title: "HTMLTableColElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der Schnittstelle [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement) ist ein String, der angibt, wie Text horizontal in einem Tabellen-{{htmlelement("col")}}-Element ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text horizontal in einer Spalte auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um stattdessen Text horizontal in einer Spalte auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie dies nicht direkt auf einem {{HTMLElement("col")}}-Element festlegen. Sie müssen die Zellen der Spalte mit einem `td:nth-last-child(n)` oder ähnlichem auswählen (`n` ist die Spaltennummer, gezählt vom Ende).

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text linksbündig aus. Verwenden Sie stattdessen `text-align: left`, direkt auf das {{HTMLElement("td")}} oder {{HTMLElement("th")}} angewendet.
- `right`
  - : Richten Sie den Text rechtsbündig aus. Verwenden Sie stattdessen `text-align: right`, direkt auf das `<td>` oder `<th>` angewendet.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie CSS `text-align` auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, hat das Setzen des `align`-Attributs in HTML oder der `text-align`-Eigenschaft in CSS auf einem {{HTMLElement("col")}}-Element keine Wirkung. Stattdessen wählen Sie die Zellen einer Spalte mit einem [`:is(td, tr):nth-child(n)`](/de/docs/Web/CSS/:nth-child), wobei `n` die Spaltennummer ist, oder ähnlichem.

Ein [Beispiel](/de/docs/Web/CSS/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
