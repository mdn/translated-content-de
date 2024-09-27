---
title: "HTMLTableSectionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableSectionElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) Interfaces ist ein String, der angibt, wie Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}} Tabellenabschnitt horizontal ausgerichtet werden soll. Einzelne Zeilen und Zellen können diese Einstellung überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richtet den Text links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richtet den Text rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentriert den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) finden Sie auf der {{cssxref("text-align")}}-Seite.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
