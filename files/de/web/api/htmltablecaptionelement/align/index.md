---
title: "HTMLTableCaptionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCaptionElement/align
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)-Schnittstelle ist ein String, der angibt, wie der Text horizontal im {{htmlelement("caption")}}-Tabellenelement ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie stattdessen die CSS {{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in der Beschriftungszelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richtet den Text linksbündig aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richtet den Text rechtsbündig aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentriert den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/Reference/Properties/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref("caption-side")}}
- [Lernen: Tabellen stylen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
