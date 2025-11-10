---
title: "HTMLTableColElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)-Interfaces ist eine Zeichenkette, die angibt, wie der Text in einem Tabellen-{{htmlelement("col")}}-Element vertikal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Spalte vertikal auszurichten. Verwenden Sie die CSS-{{cssxref("vertical-align")}}-Eigenschaft, die Vorrang hat, um Text in jeder Spaltenzelle vertikal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}}-Element festlegen. Sie müssen die Zellen der Spalte mit einem `td:nth-child(n)` oder ähnlichem auswählen (`n` ist die Spaltennummer).

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richtet den Text oben in der Spalte aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Spalte. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Spalte. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text unten in der Spalte aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, richtet jedoch die Basislinie des Textes so nah wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie `vertical-align` in CSS. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}} festlegen. Sie müssen die Zellen mit einem `td:nth-child(n)` oder ähnlichem auswählen (`n` ist die Spaltennummer).

Ein [Beispiel](/de/docs/Web/CSS/Reference/Selectors/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [Lernen: Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
