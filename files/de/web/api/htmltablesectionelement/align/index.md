---
title: "HTMLTableSectionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableSectionElement/align
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die **`align`**-Eigenschaft des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Interfaces ist ein Zeichenfolgenwert, der angibt, wie der Text in einem {{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}}-Tabellenabschnitt horizontal ausgerichtet wird. Einzelne Zeilen und Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in Abschnittszellen horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text linksbündig aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text rechtsbündig aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
