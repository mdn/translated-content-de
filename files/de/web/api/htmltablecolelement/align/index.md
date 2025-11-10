---
title: "HTMLTableColElement: align Eigenschaft"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)-Schnittstelle ist ein String, der angibt, wie Text in einer Tabelle horizontal im Spalten-{{htmlelement("col")}}-Element ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text horizontal in einer Spalte auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text horizontal in einer Spalte auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie sie nicht direkt auf ein {{HTMLElement("col")}}-Element anwenden. Sie müssen die Zellen der Spalte mit einem `td:nth-last-child(n)` oder Ähnlichem auswählen (`n` ist die Spaltennummer, vom Ende gezählt).

## Wert

Die möglichen Werte sind:

- `left`
  - : Der Text wird linksbündig ausgerichtet. Verwenden Sie stattdessen `text-align: left`, das direkt auf die {{HTMLElement("td")}} oder {{HTMLElement("th")}} angewendet wird.
- `right`
  - : Der Text wird rechtsbündig ausgerichtet. Verwenden Sie stattdessen `text-align: right`, das direkt auf `<td>` oder `<th>` angewendet wird.
- `center`
  - : Der Text wird in der Zelle zentriert. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie CSS-`text-align` auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, hat das Setzen des `align`-Attributs in HTML oder der `text-align`-Eigenschaft in CSS auf ein {{HTMLElement("col")}}-Element keine Wirkung. Stattdessen wählen Sie die Zellen einer Spalte mit einem [`:is(td, tr):nth-child(n)`](/de/docs/Web/CSS/Reference/Selectors/:nth-child), wobei `n` die Spaltennummer ist, oder Ähnlichem.

Ein [Beispiel](/de/docs/Web/CSS/Reference/Selectors/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Lernen: Stil von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
