---
title: "HTMLTableCaptionElement: align-Eigenschaft"
short-title: align
slug: Web/API/HTMLTableCaptionElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)-Schnittstelle ist ein String, der angibt, wie der Text im {{htmlelement("caption")}}-Tabellenelement horizontal ausgerichtet werden soll.

> [!NOTE]
> Diese Eigenschaft ist veraltet und es sollte CSS verwendet werden, um den Text in einer Zelle horizontal auszurichten. Verwenden Sie die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um den Text in der Caption-Zelle horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Den Text nach links ausrichten. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Den Text nach rechts ausrichten. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Den Text in der Zelle zentrieren. Verwenden Sie stattdessen `text-align: center`.

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
