---
title: "HTMLTableCellElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des {{domxref("HTMLTableCellElement")}}-Interfaces ist ein String, der angibt, wie Text vertikal in einer {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, um Text in einer Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richten Sie den Text oben in der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Vertikale Zentrierung des Textes in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Vertikale Zentrierung des Textes in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text unten in der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richtet die Grundlinie des Textes so nah wie möglich an der Oberseite aus, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, die Vorrang hat, wie im [Beispiel zur vertikalen Ausrichtung von Tabellzellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Tabellenstile](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
