---
title: "HTMLTableCaptionElement: align Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCaptionElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`** Eigenschaft der {{domxref("HTMLTableCaptionElement")}} Schnittstelle ist ein String, der angibt, wie der Text horizontal im {{htmlelement("caption")}}-Tabellenelement ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und es sollte CSS verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in der Beschriftungszelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text nach links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text nach rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der Seite zu {{cssxref("text-align")}} verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- {{cssxref("caption-side")}}
- [Tabellen gestalten](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
