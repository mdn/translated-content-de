---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{ APIRef("HTML DOM") }}

Die Schnittstelle **`HTMLTableCellElement`** stellt spezielle Eigenschaften und Methoden zur Verfügung, mit denen sich das Layout und die Darstellung von Tabellenzellen in einem HTML-Dokument bearbeiten lassen – sowohl von Kopfzellen ({{HTMLElement("th")}}) als auch von Datenzellen ({{HTMLElement("td")}}). Diese ergänzen die Eigenschaften und Methoden der regulären Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement), die durch Vererbung ebenfalls verfügbar sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableCellElement.abbr`](/de/docs/Web/API/HTMLTableCellElement/abbr)
  - : Ein String, der für `<th>`-Elemente (nicht für {{HTMLElement("td")}}) verwendet werden kann und eine alternative Bezeichnung für die Kopfzelle angibt. Diese alternative Bezeichnung kann in anderen Kontexten verwendet werden, etwa bei der Beschreibung der Kopfzellen, die einer Datenzelle zugeordnet sind. Sie bietet insbesondere Screenreadern eine kürzere Bezeichnung und ist ein wertvolles Hilfsmittel für die Barrierefreiheit. Der Wert von `abbr` ist normalerweise eine Abkürzung oder ein Akronym, kann aber auch ein anderer im jeweiligen Kontext geeigneter Text sein.
- [`HTMLTableCellElement.cellIndex`](/de/docs/Web/API/HTMLTableCellElement/cellIndex) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Collection des {{HTMLElement("tr")}}-Elements angibt, in dem sich die Zelle befindet. Gehört die Zelle zu keinem `<tr>`-Element, wird `-1` zurückgegeben.
- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
  - : Eine positive Zahl, die angibt, über wie viele Spalten sich die Zelle erstreckt. Dadurch kann die Zelle Platz über mehrere Spalten der Tabelle hinweg einnehmen. Sie spiegelt das Attribut [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) wider.
- [`HTMLTableCellElement.headers`](/de/docs/Web/API/HTMLTableCellElement/headers) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die eine Liste der `id`-Werte von {{HTMLElement("th")}}-Elementen beschreibt, die der Zelle zugeordnete Kopfzellen darstellen. Sie spiegelt das Attribut [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) wider.
- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
  - : Eine positive Zahl, die angibt, über wie viele Zeilen sich die Zelle erstreckt. Dadurch kann die Zelle Platz über mehrere Zeilen der Tabelle hinweg einnehmen. Sie spiegelt das Attribut [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) wider.
- [`HTMLTableCellElement.scope`](/de/docs/Web/API/HTMLTableCellElement/scope)
  - : Ein String, der den Geltungsbereich einer {{HTMLElement("th")}}-Zelle angibt. Mögliche Werte für `scope` sind `col`, `colgroup`, `row`, `rowgroup` oder der leere String (`""`).

### Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um das Verständnis älterer Codebasen zu erleichtern.

- [`HTMLTableCellElement.align`](/de/docs/Web/API/HTMLTableCellElement/align) {{deprecated_inline}}
  - : Ein String mit dem Wert des Attributs [`align`](/de/docs/Web/HTML/Reference/Elements/td#align), sofern es vorhanden ist; andernfalls ein leerer String. Damit kann der Inhalt des Elements entsprechend den Werten `"left"`, `"right"` und `"center"` ausgerichtet werden. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}.
- [`HTMLTableCellElement.axis`](/de/docs/Web/API/HTMLTableCellElement/axis) {{deprecated_inline}}
  - : Ein String mit einem Namen, der Zellen virtuell gruppiert. Er spiegelt das veraltete Attribut [`axis`](/de/docs/Web/HTML/Reference/Elements/td#axis) wider.
- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor) {{deprecated_inline}}
  - : Ein String mit der Hintergrundfarbe der Zellen. Er spiegelt das veraltete Attribut [`bgColor`](/de/docs/Web/HTML/Reference/Elements/td#bgcolor) wider.
- [`HTMLTableCellElement.ch`](/de/docs/Web/API/HTMLTableCellElement/ch) {{deprecated_inline}}
  - : Ein String mit einem einzelnen Zeichen, an dem alle Zellen einer Spalte ausgerichtet werden. Er spiegelt das Attribut [`char`](/de/docs/Web/HTML/Reference/Elements/td#char) wider. Der Standardwert ist das in der jeweiligen Sprache verwendete Dezimaltrennzeichen, beispielsweise `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht besonders gut unterstützt.
- [`HTMLTableCellElement.chOff`](/de/docs/Web/API/HTMLTableCellElement/chOff) {{deprecated_inline}}
  - : Ein String mit einer Ganzzahl, die angibt, wie viele Zeichen rechts vom durch `HTMLTableCellElement.ch` festgelegten Zeichen verbleiben müssen (bei von links nach rechts geschriebenen Schriften; bei von rechts nach links geschriebenen Schriften entsprechend links davon). Diese Eigenschaft war optional und wurde nicht besonders gut unterstützt.
- [`HTMLTableCellElement.height`](/de/docs/Web/API/HTMLTableCellElement/height) {{deprecated_inline}}
  - : Ein String mit der empfohlenen Höhe der Zelle in Pixeln. Er spiegelt das veraltete Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/td#height) wider.
- [`HTMLTableCellElement.noWrap`](/de/docs/Web/API/HTMLTableCellElement/noWrap) {{deprecated_inline}}
  - : Ein boolescher Wert, der das Attribut `nowrap` widerspiegelt und angibt, ob der Zelleninhalt auf mehrere Zeilen umgebrochen werden kann.
- [`HTMLTableCellElement.vAlign`](/de/docs/Web/API/HTMLTableCellElement/vAlign) {{deprecated_inline}}
  - : Ein String mit einem Aufzählungswert, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden soll. Er spiegelt das Attribut [`valign`](/de/docs/Web/HTML/Reference/Elements/td#valign) wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}.
- [`HTMLTableCellElement.width`](/de/docs/Web/API/HTMLTableCellElement/width) {{deprecated_inline}}
  - : Ein String, der angibt, mit welcher Breite in Pixeln die Zelle nach Möglichkeit dargestellt werden soll. Diese Eigenschaft spiegelt das ebenfalls veraltete Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/td#width) wider. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
