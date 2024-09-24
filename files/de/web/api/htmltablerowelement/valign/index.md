---
title: "HTMLTableRowElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableRowElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft der {{domxref("HTMLTableRowElement")}}-Schnittstelle ist ein String, der angibt, wie Text in einer {{htmlelement("tr")}}-Tabellenzeile vertikal ausgerichtet werden soll. Einzelne Zellen können diese überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, um Text in einer Zeile horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Den Text am oberen Rand der Zelle ausrichten. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Den Text vertikal in der Mitte der Zelle ausrichten. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Den Text vertikal in der Mitte der Zelle ausrichten. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Den Text am unteren Rand der Zelle ausrichten. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber die Basislinie des Textes so nah wie möglich am oberen Rand ausrichten, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung von Tabellenzellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) demonstriert.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
