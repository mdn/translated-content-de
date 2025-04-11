---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableCellElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu den regulären Eigenschaften, die es erbt vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface), um das Layout und die Darstellung von Tabellenzellen zu manipulieren, entweder Kopfzellen ({{HTMLElement("th")}}) oder Datenzellen ({{HTMLElement("td")}}) in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableCellElement.abbr`](/de/docs/Web/API/HTMLTableCellElement/abbr)
  - : Ein String, der bei `<th>` Elementen (nicht bei {{HTMLElement("td")}}) verwendet werden kann, um ein alternatives Label für die Kopfzelle anzugeben. Dieses alternative Label kann in anderen Kontexten verwendet werden, wie zum Beispiel bei der Beschreibung der Header, die auf eine Datenzelle zutreffen. Dies dient dazu, einen kürzeren Begriff bereitzustellen, speziell für Screenreader; und ist ein wertvolles Werkzeug für die Barrierefreiheit. In der Regel ist der Wert von `abbr` eine Abkürzung oder ein Akronym, kann aber jeder Text sein, der kontextuell angemessen ist.
- [`HTMLTableCellElement.cellIndex`](/de/docs/Web/API/HTMLTableCellElement/cellIndex) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells) Sammlung des {{HTMLElement("tr")}} darstellt, in dem sich die Zelle befindet. Wenn die Zelle zu keinem `<tr>` gehört, wird `-1` zurückgegeben.
- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
  - : Eine positive Zahl, die angibt, über wie viele Spalten sich diese Zelle erstrecken muss; dadurch kann die Zelle Platz über mehrere Spalten der Tabelle einnehmen. Sie spiegelt das [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) Attribut wider.
- [`HTMLTableCellElement.headers`](/de/docs/Web/API/HTMLTableCellElement/headers) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die eine Liste von `id` von {{HTMLElement("th")}} Elementen beschreibt, die Header darstellen, die der Zelle zugeordnet sind. Sie spiegelt das [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) Attribut wider.
- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
  - : Eine positive Zahl, die angibt, über wie viele Zeilen sich diese Zelle erstrecken muss; dadurch kann eine Zelle Platz über mehrere Zeilen der Tabelle einnehmen. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) Attribut wider.
- [`HTMLTableCellElement.scope`](/de/docs/Web/API/HTMLTableCellElement/scope)
  - : Ein String, der den Geltungsbereich einer {{HTMLElement("th")}} Zelle angibt. Mögliche Werte für `scope` sind: `col`, `colgroup`, `row`, `rowgroup` oder der leere String (`""`).

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um ältere Codebasen zu verstehen.

- [`HTMLTableCellElement.align`](/de/docs/Web/API/HTMLTableCellElement/align) {{deprecated_inline}}
  - : Ein String, der den Wert des [`align`](/de/docs/Web/HTML/Reference/Elements/td#align) Attributs enthält, falls vorhanden, oder einen leeren String, wenn nicht gesetzt. Es kann verwendet werden, um die Ausrichtung des Inhalts des Elements zum umgebenden Kontext auf `"left"`, `"right"` und `"center"` zu setzen. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}.
- [`HTMLTableCellElement.axis`](/de/docs/Web/API/HTMLTableCellElement/axis) {{deprecated_inline}}
  - : Ein String, der einen Namen enthält, der Zellen in Gruppen innerhalb eines virtuellen Kontexts gruppiert. Er spiegelt das veraltete [`axis`](/de/docs/Web/HTML/Reference/Elements/td#axis) Attribut wider.
- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Reference/Elements/td#bgcolor) Attribut wider.
- [`HTMLTableCellElement.ch`](/de/docs/Web/API/HTMLTableCellElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist das Zeichen, an dem alle Zellen einer Spalte ausgerichtet werden sollen. Er spiegelt das [`char`](/de/docs/Web/HTML/Reference/Elements/td#char) wider und standardmäßig die Dezimalpunkte, die mit der Sprache verbunden sind, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableCellElement.chOff`](/de/docs/Web/API/HTMLTableCellElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine Ganzzahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts gerichtete Skripte; oder links für von rechts nach links gerichtete Skripte) des durch `HTMLTableCellElement.ch` definierten Zeichens belassen werden müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableCellElement.height`](/de/docs/Web/API/HTMLTableCellElement/height) {{deprecated_inline}}
  - : Ein String, der eine Längenangabe in Pixeln der angedeuteten Höhe der Zelle enthält. Er spiegelt das veraltete [`height`](/de/docs/Web/HTML/Reference/Elements/td#height) Attribut wider.
- [`HTMLTableCellElement.noWrap`](/de/docs/Web/API/HTMLTableCellElement/noWrap) {{deprecated_inline}}
  - : Ein Boolean-Wert, der das `nowrap` Attribut widerspiegelt und angibt, ob der Inhalt der Zelle in mehrere Zeilen umgebrochen werden kann oder nicht.
- [`HTMLTableCellElement.vAlign`](/de/docs/Web/API/HTMLTableCellElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert repräsentiert, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Reference/Elements/td#valign) Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}.
- [`HTMLTableCellElement.width`](/de/docs/Web/API/HTMLTableCellElement/width) {{deprecated_inline}}
  - : Ein String, der die Anzahl der Pixel angibt, mit der die Zelle gezeichnet werden sollte, wenn möglich. Diese Eigenschaft spiegelt das ebenfalls veraltete [`width`](/de/docs/Web/HTML/Reference/Elements/td#width) Attribut wider. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
