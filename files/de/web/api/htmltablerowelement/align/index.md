---
title: "HTMLTableRowElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableRowElement/align
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Schnittstelle ist ein `string`, der angibt, wie Text in der {{htmlelement("tr")}}-Tabellenzeile horizontal ausgerichtet werden soll. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um stattdessen Text in einer Zeile horizontal auszurichten.

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
  - : War nie vollständig unterstützt, richtet Text an einem bestimmten Zeichen aus. Verwenden Sie `text-align: <string>`, wobei der `string` ein einzelnes Zeichen ist, wenn es unterstützt wird.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der Seite {{cssxref("text-align")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
