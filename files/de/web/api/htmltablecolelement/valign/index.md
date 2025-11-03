---
title: "HTMLTableColElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft der Schnittstelle [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement) ist ein String, der angibt, wie Text in einem Tabellenspalten-Element vom Typ {{htmlelement("col")}} vertikal ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Spalte vertikal auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, die Vorrang hat, um Text in jeder Spaltenzelle vertikal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, kann es nicht direkt auf einem {{HTMLElement("col")}}-Element gesetzt werden. Sie müssen die Zellen der Spalte mithilfe von `td:nth-child(n)` oder ähnlichem auswählen (`n` ist die Spaltennummer).

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
  - : Ähnlich wie `top`, aber richtet die Basislinie des Textes so nah wie möglich an der Oberseite aus, sodass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie `vertical-align` in CSS. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}} setzen. Sie müssen die Zellen mithilfe von `td:nth-child(n)` oder ähnlichem auswählen (`n` ist die Spaltennummer).

Ein [Beispiel](/de/docs/Web/CSS/Reference/Selectors/:nth-child#styling_a_table_column) ist auf der Seite {{cssxref(":nth-child()")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [Lernen: Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
