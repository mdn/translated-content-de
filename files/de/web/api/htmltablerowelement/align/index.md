---
title: "HTMLTableRowElement: Eigenschaft align"
short-title: align
slug: Web/API/HTMLTableRowElement/align
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die **`align`**-Eigenschaft der [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Schnittstelle ist ein String, der angibt, wie Text horizontal in der {{htmlelement("tr")}}-Tabellenzeile ausgerichtet werden soll. Einzelne Zellen können dies überschreiben.

> [!NOTE]
> Diese Eigenschaft ist veraltet, und CSS sollte verwendet werden, um Text horizontal in einer Zelle auszurichten. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}, die Vorrang hat, um Text in einer Zeile horizontal auszurichten.

## Wert

Die möglichen Werte sind:

- `left`
  - : Richten Sie den Text links aus. Verwenden Sie stattdessen `text-align: left`.
- `right`
  - : Richten Sie den Text rechts aus. Verwenden Sie stattdessen `text-align: right`.
- `center`
  - : Zentrieren Sie den Text in der Zelle. Verwenden Sie stattdessen `text-align: center`.
- `justify`
  - : Verteilen Sie den Text über die Zelle. Verwenden Sie stattdessen `text-align: justify`.
- `char`
  - : Wurde nie vollständig unterstützt, richten Sie den Text an einem bestimmten Zeichen aus. Verwenden Sie `text-align: <string>`, wobei der String ein einzelnes Zeichen ist, wenn unterstützt.

## Beispiele

Verwenden Sie stattdessen CSS `text-align`. Ein [Beispiel](/de/docs/Web/CSS/text-align#table_alignment) ist auf der {{cssxref("text-align")}}-Seite verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
- [Tabellenstile](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
