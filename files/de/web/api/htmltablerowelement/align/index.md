---
title: "HTMLTableRowElement: Eigenschaft align"
short-title: align
slug: Web/API/HTMLTableRowElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Schnittstelle ist ein String, der angibt, wie Text horizontal in der {{htmlelement("tr")}}-Tabellenzeile ausgerichtet wird. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie stattdessen die CSS {{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in einer Zeile horizontal auszurichten.

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
  - : Nie vollständig unterstützt, richten Sie Text an einem bestimmten Zeichen aus. Verwenden Sie `text-align: <string>`, wobei der String ein einzelnes Zeichen ist, falls unterstützt.

## Beispiele

Verwenden Sie stattdessen das CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Lernen: Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
