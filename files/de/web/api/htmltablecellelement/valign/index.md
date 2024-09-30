---
title: "HTMLTableCellElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft der Schnittstelle [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) ist ein String, der angibt, wie Text in einer {{htmlelement("th")}} oder {{htmlelement("td")}} Tabellenzelle vertikal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, um Text in einer Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

- `top`
  - : Richtet den Text am oberen Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Zelle. Ist ein Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text am unteren Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, richtet aber die Basislinie des Textes so nah an der Oberkante aus, dass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung von Tabellensellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Stil von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
