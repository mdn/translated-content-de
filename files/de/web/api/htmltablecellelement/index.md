---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableCellElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu den regulären Eigenschaften, die es vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface durch Vererbung erhält), um das Layout und die Präsentation von Tabellenzellen, entweder Header-Zellen ({{HTMLElement("th")}}) oder Datenzellen ({{HTMLElement("td")}}), in einem HTML-Dokument zu manipulieren.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableCellElement.abbr`](/de/docs/Web/API/HTMLTableCellElement/abbr)
  - : Ein String, der auf `<th>`-Elementen verwendet werden kann (nicht auf {{HTMLElement("td")}}), um eine alternative Bezeichnung für die Header-Zelle anzugeben. Dieses alternative Label kann in anderen Kontexten verwendet werden, z. B. bei der Beschreibung der Header, die auf eine Datenzelle angewendet werden. Es wird insbesondere als ein wertvolles Hilfsmittel für die Barrierefreiheit verwendet, um eine kürzere Bezeichnung für Screenreader bereitzustellen. Üblicherweise ist der Wert von `abbr` eine Abkürzung oder ein Akronym, es kann aber auch jeder Text sein, der kontextuell angemessen ist.
- [`HTMLTableCellElement.cellIndex`](/de/docs/Web/API/HTMLTableCellElement/cellIndex) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Sammlung des {{HTMLElement("tr")}} repräsentiert, in dem sich die Zelle befindet. Wenn die Zelle nicht zu einem `<tr>` gehört, wird `-1` zurückgegeben.
- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
  - : Eine positive Zahl, die die Anzahl der Spalten angibt, die diese Zelle überspannen muss; dies ermöglicht es, dass die Zelle Platz über mehrere Spalten der Tabelle hinweg einnimmt. Sie spiegelt das [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.
- [`HTMLTableCellElement.headers`](/de/docs/Web/API/HTMLTableCellElement/headers) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die eine Liste von `id`s von {{HTMLElement("th")}}-Elementen beschreibt, welche Header repräsentieren, die mit der Zelle verbunden sind. Sie spiegelt das [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribut wider.
- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
  - : Eine positive Zahl, die die Anzahl der Zeilen angibt, die diese Zelle überspannen muss; dies ermöglicht es, dass eine Zelle Platz über mehrere Zeilen der Tabelle hinweg einnimmt. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut wider.
- [`HTMLTableCellElement.scope`](/de/docs/Web/API/HTMLTableCellElement/scope)
  - : Ein String, der den Gültigkeitsbereich einer {{HTMLElement("th")}}-Zelle angibt. Mögliche Werte für `scope` sind: `col`, `colgroup`, `row`, `rowgroup`, oder der leere String (`""`).

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Eltern-Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie werden hauptsächlich dokumentiert, um das Verständnis älterer Codebasen zu erleichtern.

- [`HTMLTableCellElement.align`](/de/docs/Web/API/HTMLTableCellElement/align) {{deprecated_inline}}
  - : Ein String, der den Wert des [`align`](/de/docs/Web/HTML/Element/td#align)-Attributs enthält, falls vorhanden, oder einen leeren String, wenn nicht gesetzt. Er kann verwendet werden, um die Ausrichtung der Inhalte des Elements zu dem umgebenden Kontext `"left"`, `"right"` und `"center"` festzulegen. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}.
- [`HTMLTableCellElement.axis`](/de/docs/Web/API/HTMLTableCellElement/axis) {{deprecated_inline}}
  - : Ein String, der einen Namen enthält, der Zellen virtuell gruppiert. Er spiegelt das veraltete [`axis`](/de/docs/Web/HTML/Element/td#axis)-Attribut wider.
- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/td#bgcolor)-Attribut wider.
- [`HTMLTableCellElement.ch`](/de/docs/Web/API/HTMLTableCellElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einziges Zeichen enthält. Dieses Zeichen ist das, an dem alle Zellen einer Spalte ausgerichtet werden sollen. Er spiegelt das [`char`](/de/docs/Web/HTML/Element/td#char)-Attribut wider und entspricht standardmäßig den Dezimalpunkten der Sprache, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableCellElement.chOff`](/de/docs/Web/API/HTMLTableCellElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts geschriebene Skripte) oder links (für von rechts nach links geschriebene Skripte) des Zeichens, das durch `HTMLTableCellElement.ch` definiert ist, stehen müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableCellElement.height`](/de/docs/Web/API/HTMLTableCellElement/height) {{deprecated_inline}}
  - : Ein String, der eine Längenangabe in Pixeln der angedeuteten Höhe der Zelle enthält. Er spiegelt das veraltete [`height`](/de/docs/Web/HTML/Element/td#height)-Attribut wider.
- [`HTMLTableCellElement.noWrap`](/de/docs/Web/API/HTMLTableCellElement/noWrap) {{deprecated_inline}}
  - : Ein boolescher Wert, der das `nowrap`-Attribut widerspiegelt und angibt, ob der Zellinhalt in mehrere Zeilen aufgeteilt werden kann.
- [`HTMLTableCellElement.vAlign`](/de/docs/Web/API/HTMLTableCellElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert darstellt, welcher angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Element/td#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"`, oder `"baseline"`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}.
- [`HTMLTableCellElement.width`](/de/docs/Web/API/HTMLTableCellElement/width) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln angibt, wie breit die Zelle gezeichnet werden soll, falls möglich. Diese Eigenschaft spiegelt das ebenfalls veraltete [`width`](/de/docs/Web/HTML/Element/td#width)-Attribut wider. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
