---
title: "HTMLTableSectionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableSectionElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der {{domxref("HTMLTableSectionElement")}}-Schnittstelle ist ein String, der angibt, wie Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}} Tabellenbereich horizontal ausgerichtet werden soll. Einzelne Zeilen und Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
