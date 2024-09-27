---
title: "HTMLTableCellElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist eine Zeichenkette, die angibt, wie der Text vertikal in einer {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, um Text in einer Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

- `top`
  - : Richten Sie den Text oben in der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text unten in der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich zu `top`, aber richtet die Basislinie des Textes so nah wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle bleibt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das den Vorrang hat, wie im Beispiel [vertikale Ausrichtung in Tabellenzellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) demonstriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
