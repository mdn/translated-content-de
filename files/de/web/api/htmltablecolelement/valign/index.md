---
title: "HTMLTableColElement: vAlign-Eigenschaft"
short-title: vAlign
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`vAlign`**-Eigenschaft des {{domxref("HTMLTableColElement")}}-Interfaces ist ein String, der angibt, wie Text in einem Tabellen-{{htmlelement("col")}} Spaltenelement vertikal ausgerichtet wird.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Spalte vertikal auszurichten. Verwenden Sie die CSS-{{cssxref("vertical-align")}}-Eigenschaft, die Vorrang hat, um Text in jeder Spaltenzelle vertikal auszurichten.
>
> Da {{htmlelement("td")}} keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}}-Element festlegen. Sie müssen die Zellen der Spalte mit `td:nth-child(n)` oder ähnlich auswählen (`n` ist die Spaltennummer).

## Wert

Die möglichen Werte sind: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`

- `top`
  - : Richten Sie den Text oben in der Spalte aus. Verwenden Sie stattdessen `vertical-align: top`.
- `center`
  - : Zentrieren Sie den Text vertikal in der Spalte. Synonym für `middle`. Verwenden Sie stattdessen `vertical-align: middle`.
- `middle`
  - : Zentrieren Sie den Text vertikal in der Spalte. Verwenden Sie stattdessen `vertical-align: middle`.
- `bottom`
  - : Richten Sie den Text unten in der Spalte aus. Verwenden Sie stattdessen `vertical-align: bottom`.
- `baseline`
  - : Ähnlich wie `top`, aber richten Sie die Basislinie des Textes so nahe wie möglich am oberen Rand aus, sodass kein Teil des Zeichens außerhalb der Zelle ist.

## Beispiele

Verwenden Sie CSS `vertical-align`. Da {{htmlelement("td")}}-Elemente einer Spalte keine Kinder von {{htmlelement("col")}} sind, können Sie es nicht direkt auf einem {{HTMLElement("col")}} festlegen. Sie müssen die Zellen mit `td:nth-child(n)` oder ähnlich auswählen (`n` ist die Spaltennummer).

Ein [Beispiel](/de/docs/Web/CSS/:nth-child#styling_a_table_column) ist auf der {{cssxref(":nth-child()")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [Styling von Tabellen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
