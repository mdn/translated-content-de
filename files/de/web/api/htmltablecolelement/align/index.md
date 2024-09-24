---
title: "HTMLTableColElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der {{domxref("HTMLTableColElement")}}-Schnittstelle ist ein String, der angibt, wie Text in einem Tabellen-{{htmlelement("col")}}-Element horizontal ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um Text horizontal in einer Spalte auszurichten. Verwenden Sie stattdessen die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text horizontal in einer Spalte auszurichten.
>
> Da {{htmlelement("td")}}-Elemente keine Kinder von {{htmlelement("col")}} sind, können Sie sie nicht direkt auf einem {{HTMLElement("col")}}-Element setzen. Sie müssen die Zellen der Spalte mit einem `td:nth-last-child(n)` oder Ähnlichem auswählen (`n` ist die Nummer der Spalte, gezählt vom Ende).

## Wert

Die möglichen Werte sind:

- `left`
  - : Richtet den Text linksbündig aus. Verwenden Sie `text-align: left`, das direkt auf {{HTMLElement("td")}} oder {{HTMLElement("th")}} angewendet wird.
- `right`
  - : Richtet den Text rechtsbündig aus. Verwenden Sie `text-align: right`, das direkt auf `<td>` oder `<th>` angewendet wird.
- `center`
  - : Zentriert den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie CSS `text-align` auf den {{htmlelement("td")}}- und {{htmlelement("th")}}-Elementen. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}}-Elementen sind, hat das Setzen des `align`-Attributs in HTML oder der `text-align`-Eigenschaft in CSS auf einem {{HTMLElement("col")}}-Element keine Wirkung. Stattdessen wählen Sie die Zellen einer Spalte mit einem [`:is(td, tr):nth-child(n)`](/de/docs/Web/CSS/:nth-child), wobei `n` die Spaltennummer ist, oder Ähnliches.

Ein [Beispiel](/de/docs/Web/CSS/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
