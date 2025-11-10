---
title: "HTMLTableCellElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCellElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist ein String, der angibt, wie der Text horizontal in der {{htmlelement("th")}}- oder {{htmlelement("td")}}-Tabellenzelle ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text in einer Zelle horizontal auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in einer Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Den Text links ausrichten. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Den Text rechts ausrichten. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Den Text in der Zelle zentrieren. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
