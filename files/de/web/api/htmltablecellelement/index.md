---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: 757c86b372ca96d49679d57fb782467584c54f36
---

{{ APIRef("HTML DOM") }}

Die Schnittstelle **`HTMLTableCellElement`** stellt spezielle Eigenschaften und Methoden bereit, mit denen sich das Layout und die Darstellung von Tabellenzellen in einem HTML-Dokument bearbeiten lassen – sowohl von Kopfzellen ({{HTMLElement("th")}}) als auch von Datenzellen ({{HTMLElement("td")}}. Diese ergänzen die Eigenschaften und Methoden, die die Schnittstelle von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableCellElement.abbr`](/de/docs/Web/API/HTMLTableCellElement/abbr)
  - : Eine Zeichenfolge, die für `<th>`-Elemente verwendet werden kann (nicht für {{HTMLElement("td")}}) und eine alternative Beschriftung für die Kopfzelle angibt. Diese kann in anderen Zusammenhängen verwendet werden, beispielsweise bei der Beschreibung der Kopfzellen, die einer Datenzelle zugeordnet sind. Insbesondere Screenreader können so eine kürzere Bezeichnung verwenden; die Eigenschaft ist daher ein wichtiges Hilfsmittel für die Barrierefreiheit. Der Wert von `abbr` ist üblicherweise eine Abkürzung oder ein Akronym, kann aber jeder im jeweiligen Kontext passende Text sein.
- [`HTMLTableCellElement.cellIndex`](/de/docs/Web/API/HTMLTableCellElement/cellIndex) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Sammlung des {{HTMLElement("tr")}}-Elements angibt, in dem sich die Zelle befindet. Gehört die Zelle nicht zu einem `<tr>`, wird `-1` zurückgegeben.
- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
  - : Eine positive Zahl, die angibt, über wie viele Spalten sich die Zelle erstrecken soll. Dadurch kann die Zelle mehrere Spalten der Tabelle belegen. Sie spiegelt das Attribut [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) wider.
- [`HTMLTableCellElement.headers`](/de/docs/Web/API/HTMLTableCellElement/headers)
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die eine Liste von `id`-Werten der {{HTMLElement("th")}}-Elemente beschreibt, die der Zelle als Kopfzellen zugeordnet sind. Sie spiegelt das Attribut [`headers`](/de/docs/Web/HTML/Reference/Elements/td#headers) wider.
- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
  - : Eine positive Zahl, die angibt, über wie viele Zeilen sich die Zelle erstrecken soll. Dadurch kann die Zelle mehrere Zeilen der Tabelle belegen. Sie spiegelt das Attribut [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#rowspan) wider.
- [`HTMLTableCellElement.scope`](/de/docs/Web/API/HTMLTableCellElement/scope)
  - : Eine Zeichenfolge, die den Geltungsbereich einer {{HTMLElement("th")}}-Zelle angibt. Mögliche Werte für `scope` sind `col`, `colgroup`, `row`, `rowgroup` oder die leere Zeichenfolge (`""`).

### Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind vor allem dokumentiert, um das Verständnis älterer Codebestände zu erleichtern.

- [`HTMLTableCellElement.align`](/de/docs/Web/API/HTMLTableCellElement/align) {{deprecated_inline}}
  - : Eine Zeichenfolge, die den Wert des Attributs [`align`](/de/docs/Web/HTML/Reference/Elements/td#align) enthält, sofern es vorhanden ist, andernfalls eine leere Zeichenfolge. Mit ihr lässt sich die Ausrichtung des Elementinhalts auf `"left"`, `"right"` oder `"center"` festlegen. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}.
- [`HTMLTableCellElement.axis`](/de/docs/Web/API/HTMLTableCellElement/axis) {{deprecated_inline}}
  - : Eine Zeichenfolge mit einem Namen, der Zellen virtuell gruppiert. Sie spiegelt das veraltete Attribut [`axis`](/de/docs/Web/HTML/Reference/Elements/td#axis) wider.
- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor) {{deprecated_inline}}
  - : Eine Zeichenfolge, die die Hintergrundfarbe der Zellen enthält. Sie spiegelt das veraltete Attribut [`bgColor`](/de/docs/Web/HTML/Reference/Elements/td#bgcolor) wider.
- [`HTMLTableCellElement.ch`](/de/docs/Web/API/HTMLTableCellElement/ch) {{deprecated_inline}}
  - : Eine Zeichenfolge mit genau einem Zeichen, an dem alle Zellen einer Spalte ausgerichtet werden. Sie spiegelt das Attribut [`char`](/de/docs/Web/HTML/Reference/Elements/td#char) wider und hat standardmäßig den für die jeweilige Sprache üblichen Dezimaltrenner als Wert, beispielsweise `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nur unzureichend unterstützt.
- [`HTMLTableCellElement.chOff`](/de/docs/Web/API/HTMLTableCellElement/chOff) {{deprecated_inline}}
  - : Eine Zeichenfolge mit einer Ganzzahl, die angibt, wie viele Zeichen rechts von dem durch `HTMLTableCellElement.ch` definierten Zeichen frei bleiben müssen (bei von links nach rechts geschriebenen Schriften; bei von rechts nach links geschriebenen Schriften links davon). Diese Eigenschaft war optional und wurde nur unzureichend unterstützt.
- [`HTMLTableCellElement.height`](/de/docs/Web/API/HTMLTableCellElement/height) {{deprecated_inline}}
  - : Eine Zeichenfolge mit einer Pixelangabe für die vorgeschlagene Höhe der Zelle. Sie spiegelt das veraltete Attribut [`height`](/de/docs/Web/HTML/Reference/Elements/td#height) wider.
- [`HTMLTableCellElement.noWrap`](/de/docs/Web/API/HTMLTableCellElement/noWrap) {{deprecated_inline}}
  - : Ein boolescher Wert, der das Attribut `nowrap` widerspiegelt und angibt, ob der Zelleninhalt auf mehrere Zeilen umgebrochen werden darf.
- [`HTMLTableCellElement.vAlign`](/de/docs/Web/API/HTMLTableCellElement/vAlign) {{deprecated_inline}}
  - : Eine Zeichenfolge mit einem Aufzählungswert, der angibt, wie der Zelleninhalt vertikal ausgerichtet werden soll. Sie spiegelt das Attribut [`valign`](/de/docs/Web/HTML/Reference/Elements/td#valign) wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}.
- [`HTMLTableCellElement.width`](/de/docs/Web/API/HTMLTableCellElement/width) {{deprecated_inline}}
  - : Eine Zeichenfolge, die angibt, wie breit die Zelle nach Möglichkeit in Pixeln dargestellt werden soll. Diese Eigenschaft spiegelt das ebenfalls veraltete Attribut [`width`](/de/docs/Web/HTML/Reference/Elements/td#width) wider. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von der übergeordneten Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
