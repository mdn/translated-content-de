---
title: "HTMLTableCellElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist ein String, der angibt, wie der Text in einer {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle vertikal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, um Text in einer Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

- `top`
  - : Richten Sie den Text oben in der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Vertikal zentrieren Sie den Text in der Zelle. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Vertikal zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text unten in der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richten Sie die Grundlinie des Textes so nah wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung von Tabellenzellen](/de/docs/Web/CSS/Reference/Properties/vertical-align#vertical_alignment_in_a_table_cell) gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Lernen: Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
