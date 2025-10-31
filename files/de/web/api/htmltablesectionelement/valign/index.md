---
title: "HTMLTableSectionElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableSectionElement/vAlign
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Interfaces ist ein String, der angibt, wie Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}}-Tabellenabschnitt vertikal ausgerichtet werden soll. Einzelne Zeilen und Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, um Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richten Sie den Text oben in der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentrieren Sie den Text vertikal in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentrieren Sie den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text unten in der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richten Sie die Basislinie des Textes so nah wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung von Tabellenzellen](/de/docs/Web/CSS/Reference/Properties/vertical-align#vertical_alignment_in_a_table_cell) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
