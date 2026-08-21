---
title: "HTMLTableSectionElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableSectionElement/vAlign
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Interfaces ist ein String, der angibt, wie Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}} Tabellenabschnitt vertikal ausgerichtet werden soll. Einzelne Zeilen und Zellen können ihn überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, um Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richtet den Text am oberen Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text am unteren Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richtet die Basislinie des Textes so nah wie möglich an der Oberseite aus, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel für die [vertikale Ausrichtung von Tabellenzellen](/de/docs/Web/CSS/Reference/Properties/vertical-align#vertical_alignment_in_a_table_cell) demonstriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
