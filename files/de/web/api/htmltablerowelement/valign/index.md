---
title: "HTMLTableRowElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableRowElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Interfaces ist ein String, der angibt, wie Text in einer {{htmlelement("tr")}}-Tabellenzeile vertikal ausgerichtet wird. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Nutzen Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, um Text horizontal in einer Zeile auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richten Sie den Text am oberen Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text am unteren Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, richtet jedoch die Grundlinie des Textes so nah wie möglich an der oberen Begrenzung aus, damit kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [Vertikale Ausrichtung in Tabellenzellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
