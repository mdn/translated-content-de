---
title: "HTMLTableColElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)-Schnittstelle ist ein String, der angibt, wie Text in einem {{htmlelement("col")}}-Tabellenspaltenelement horizontal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um Text in einer Spalte horizontal auszurichten. Verwenden Sie stattdessen die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in einer Spalte horizontal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}}-Element festlegen. Sie müssen die Zellen der Spalte mit einer `td:nth-last-child(n)` oder ähnlichen Selektoren auswählen (`n` ist die Spaltennummer, vom Ende gezählt).

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text linksbündig aus. Verwenden Sie stattdessen `text-align: left`, direkt auf die {{HTMLElement("td")}} oder {{HTMLElement("th")}} angewendet.
- `right`
  - : Richten Sie den Text rechtsbündig aus. Verwenden Sie stattdessen `text-align: right`, direkt auf die `<td>` oder `<th>` angewendet.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie CSS `text-align` auf den {{htmlelement("td")}} und {{htmlelement("th")}} Elementen. Da die {{htmlelement("td")}} Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, hat das Setzen des `align`-Attributs in HTML oder der `text-align`-Eigenschaft in CSS auf einem {{HTMLElement("col")}}-Element keine Auswirkung. Wählen Sie stattdessen die Zellen einer Spalte mit [`:is(td, tr):nth-child(n)`](/de/docs/Web/CSS/:nth-child), wobei `n` die Spaltennummer ist, oder ähnlichen Selektoren aus.

Ein [Beispiel](/de/docs/Web/CSS/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}} Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
