---
title: "HTMLTableSectionElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableSectionElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft der {{domxref("HTMLTableSectionElement")}}-Schnittstelle ist ein String, der angibt, wie Text vertikal in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}} Tabellenabschnitt ausgerichtet werden soll. Einzelne Zeilen und Zellen können sie überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, um Text in Zellen des Abschnitts horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richten Sie den Text am oberen Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentrieren Sie den Text vertikal in der Zelle. Synonym von `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentrieren Sie den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text am unteren Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richten Sie die Grundlinie des Textes so nah wie möglich an der Oberkante aus, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung in Tabellenzellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell) gezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
