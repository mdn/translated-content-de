---
title: "HTMLTableSectionElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableSectionElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Interfaces ist ein String, der angibt, wie Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}}-Tabellenabschnitt vertikal ausgerichtet wird. Einzelne Zeilen und Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, um Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richtet den Text oben in der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text unten in der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richtet die Grundlinie des Textes so nah wie möglich an der Oberseite aus, sodass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, welches Vorrang hat, wie im [Vertikale Ausrichtung in Tabellenzellen](/de/docs/Web/CSS/vertical-align#vertical_alignment_in_a_table_cell)-Beispiel demonstriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
