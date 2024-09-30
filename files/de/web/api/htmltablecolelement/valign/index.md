---
title: "HTMLTableColElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft der Schnittstelle [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement) ist ein String, der angibt, wie Text in einem Tabellen-<col>-Element vertikal ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Spalte vertikal auszurichten. Verwenden Sie die CSS-Eigenschaft {{cssxref("vertical-align")}}, die Vorrang hat, um Text in jeder Zelle der Spalte vertikal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf ein {{HTMLElement("col")}}-Element anwenden. Sie müssen die Zellen der Spalte mit `td:nth-child(n)` oder ähnlichem auswählen (`n` ist die Nummer der Spalte).

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richtet den Text am oberen Rand der Spalte aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentriert den Text vertikal in der Spalte. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentriert den Text vertikal in der Spalte. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richtet den Text am unteren Rand der Spalte aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, richtet aber die Grundlinie des Textes so nah wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle liegt.

## Beispiele

Verwenden Sie CSS `vertical-align`. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf ein {{HTMLElement("col")}} anwenden. Sie müssen die Zellen mit `td:nth-child(n)` oder ähnlichem auswählen (`n` ist die Nummer der Spalte).

Ein [Beispiel](/de/docs/Web/CSS/:nth-child#styling_a_table_column) finden Sie auf der {{cssxref(":nth-child()")}} Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
