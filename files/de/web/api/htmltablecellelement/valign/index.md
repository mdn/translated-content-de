---
title: "HTMLTableCellElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableCellElement/vAlign
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist ein String, der angibt, wie der Text vertikal in einer {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}, um Text in einer Zelle vertikal auszurichten.

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
  - : Ähnlich wie `top`, aber richten Sie die Grundlinie des Textes so nah oben aus, dass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung von Tabellenzellen](/de/docs/Web/CSS/Reference/Properties/vertical-align#vertical_alignment_in_a_table_cell) gezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Lernen: Tabellen gestalten](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
