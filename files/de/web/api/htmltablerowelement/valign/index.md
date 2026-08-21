---
title: "HTMLTableRowElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableRowElement/vAlign
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`vAlign`**-Eigenschaft des [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Interfaces ist ein String, der angibt, wie der Text in einer {{htmlelement("tr")}}-Tabellenzeile vertikal ausgerichtet wird. Einzelne Zellen können diese Einstellung überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft, um Text in einer Zeile horizontal auszurichten.

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richtet den Text am oberen Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Zelle. Synonym von `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Zelle. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text am unteren Rand der Zelle aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, richtet jedoch die Grundlinie des Textes so nah wie möglich an der Oberkante aus, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie stattdessen CSS {{cssxref("vertical-align")}}, das Vorrang hat, wie im Beispiel [vertikale Ausrichtung von Tabellenspalten](/de/docs/Web/CSS/Reference/Properties/vertical-align#vertical_alignment_in_a_table_cell) demonstriert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- [Lernen: Tabellenstile](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
