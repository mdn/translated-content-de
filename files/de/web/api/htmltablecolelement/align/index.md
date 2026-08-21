---
title: "HTMLTableColElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`align`**-Eigenschaft des [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement) Interfaces ist ein String, der angibt, wie Text horizontal in einem {{htmlelement("col")}}-Spaltentag ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text horizontal in einer Spalte auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text horizontal in einer Spalte auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie diese Eigenschaft nicht direkt auf ein {{HTMLElement("col")}}-Element setzen. Stattdessen müssen Sie die Zellen der Spalte mit `td:nth-last-child(n)` oder Ähnlichem auswählen (`n` ist die Spaltennummer, vom Ende gezählt).

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text links aus. Verwenden Sie stattdessen `text-align: left`, das direkt auf das {{HTMLElement("td")}} oder {{HTMLElement("th")}} angewendet wird.
- `right`
  - : Richten Sie den Text rechts aus. Verwenden Sie stattdessen `text-align: right`, das direkt auf das `<td>` oder `<th>` angewendet wird.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie CSS `text-align` auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, hat das Setzen des `align`-Attributs in HTML oder der `text-align`-Eigenschaft in CSS auf ein {{HTMLElement("col")}}-Element keine Wirkung. Wählen Sie stattdessen die Zellen einer Spalte mit einem [`:is(td, tr):nth-child(n)`](/de/docs/Web/CSS/Reference/Selectors/:nth-child), wobei `n` die Spaltennummer ist, oder Ähnlichem.

Ein [Beispiel](/de/docs/Web/CSS/Reference/Selectors/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Lernen: Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
