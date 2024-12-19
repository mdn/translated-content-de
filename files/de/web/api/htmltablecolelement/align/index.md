---
title: "HTMLTableColElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)-Interfaces ist ein String, der angibt, wie der Text in einem {{htmlelement("col")}}-Tabellenspalten-Element horizontal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte stattdessen CSS verwendet werden, um Text horizontal in einer Spalte auszurichten. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in einer Spalte horizontal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}}-Element anwenden. Sie müssen die Zellen der Spalte mit `td:nth-last-child(n)` oder ähnlich auswählen (`n` ist die Spaltennummer, vom Ende her gezählt).

## Wert

Die möglichen Werte sind:

- `left`
  - : Der Text wird linksbündig ausgerichtet. Verwenden Sie stattdessen `text-align: left`, das direkt auf das {{HTMLElement("td")}} oder {{HTMLElement("th")}} angewendet wird.
- `right`
  - : Der Text wird rechtsbündig ausgerichtet. Verwenden Sie stattdessen `text-align: right`, das direkt auf `<td>` oder `<th>` angewendet wird.
- `center`
  - : Der Text wird in der Zelle zentriert. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie `text-align` in CSS für die {{htmlelement("td")}}- und {{htmlelement("th")}}-Elemente. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder des {{htmlelement("col")}} sind, hat das Setzen des `align`-Attributs in HTML oder der Eigenschaft `text-align` in CSS auf einem {{HTMLElement("col")}}-Element keinen Effekt. Stattdessen wählen Sie die Zellen einer Spalte mit einem [`:is(td, tr):nth-child(n)`](/de/docs/Web/CSS/:nth-child), wobei `n` die Spaltennummer ist, oder ähnlich.

Ein [Beispiel](/de/docs/Web/CSS/:nth-child#styling_a_table_column) ist auf der Seite {{cssxref(":nth-child()")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
