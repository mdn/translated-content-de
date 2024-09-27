---
title: "HTMLTableCaptionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCaptionElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der Schnittstelle [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement) ist ein string, der angibt, wie der Text im {{htmlelement("caption")}}-Tabellenelement horizontal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie die CSS-{{cssxref("text-align")}}-Eigenschaft, die Vorrang hat, um Text in der Caption-Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text linksbündig aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text rechtsbündig aus. Verwenden Sie stattdessen `text-align: right`.
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
- {{cssxref("caption-side")}}
- [Tabellen stylen](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
