---
title: "HTMLTableColElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`vAlign`**-Eigenschaft der [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)-Schnittstelle ist ein String, der angibt, wie Text in einem Tabellen-{{htmlelement("col")}}-Spaltenelement vertikal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Spalte vertikal auszurichten. Verwenden Sie die CSS-{{cssxref("vertical-align")}}-Eigenschaft, die Vorrang hat, um Text in jeder Spaltenzelle vertikal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}}-Element festlegen. Sie müssen die Zellen der Spalte mit `td:nth-child(n)` oder ähnlich auswählen (`n` ist die Spaltennummer).

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

- `top`
  - : Richtet den Text am oberen Rand der Spalte aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Spalte. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Spalte. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text am unteren Rand der Spalte aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richtet die Grundlinie des Textes so nah wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie CSS `vertical-align`. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}} festlegen. Sie müssen die Zellen mit `td:nth-child(n)` oder ähnlich auswählen (`n` ist die Spaltennummer).

Ein [Beispiel](/de/docs/Web/CSS/Reference/Selectors/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
