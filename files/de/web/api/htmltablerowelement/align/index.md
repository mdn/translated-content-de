---
title: "HTMLTableRowElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableRowElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der {{domxref("HTMLTableRowElement")}}-Schnittstelle ist ein String, der angibt, wie Text in der {{htmlelement("tr")}}-Tabellenzeile horizontal ausgerichtet werden soll. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in einer Zeile horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richtet den Text links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richtet den Text rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentriert den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.
- `justify`
  - : Verteilt den Text über die Zelle. Verwenden Sie stattdessen `text-align: justify`.
- `char`
  - : Wurde nie vollständig unterstützt, richtet Text an einem angegebenen Zeichen aus. Verwenden Sie `text-align: <string>`, wobei das String ein einzelnes Zeichen ist, wenn unterstützt.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
