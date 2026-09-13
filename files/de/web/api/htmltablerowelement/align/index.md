---
title: "HTMLTableRowElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableRowElement/align
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`align`**-Eigenschaft der [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Schnittstelle ist ein String, der angibt, wie der Text in der {{htmlelement("tr")}} Tabellenzeile horizontal ausgerichtet werden soll. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um stattdessen Text in einer Zeile horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text nach links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text nach rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.
- `justify`
  - : Verteilen Sie den Text über die Zelle. Verwenden Sie stattdessen `text-align: justify`.
- `char`
  - : Wurde nie vollständig unterstützt, richtet den Text an einem bestimmten Zeichen aus. Verwenden Sie `text-align: <string>`, wobei der String ein einzelnes Zeichen ist, wenn dies unterstützt wird.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/text-align#table_alignment) ist auf der Seite {{cssxref("text-align")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
