---
title: "HTMLTableCaptionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCaptionElement/align
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft des [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)-Interfaces ist ein String, der angibt, wie Text in einem {{htmlelement("caption")}}-Tabellenelement horizontal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet und CSS sollte verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Priorität hat, um den Text in der Beschriftungszelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen `text-align` in CSS. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der Seite {{cssxref("text-align")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref("caption-side")}}
- [Lernen: Styling von Tabellen](/de/docs/Learn_web_development/Core/Styling_basics/Tables)
