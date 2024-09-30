---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTableCellElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle, die ihr auch durch Vererbung zur Verfügung steht) zur Manipulation des Layouts und der Darstellung von Tabellenzellen, entweder Kopfzellen ({{HTMLElement("th")}}) oder Datenzellen ({{HTMLElement("td")}}), in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableCellElement.abbr`](/de/docs/Web/API/HTMLTableCellElement/abbr)
  - : Ein String, der auf `<th>`-Elementen verwendet werden kann (nicht auf {{HTMLElement("td")}}) und eine alternative Bezeichnung für die Kopfzelle angibt. Diese alternative Bezeichnung kann in anderen Kontexten verwendet werden, wie z.B. bei der Beschreibung der Header, die für eine Datenzelle gelten. Dies ist besonders wertvoll für Screenreader und stellt ein nützliches Werkzeug für die Barrierefreiheit dar. Normalerweise ist der Wert von `abbr` eine Abkürzung oder ein Akronym, kann aber auch beliebiger Text sein, der kontextuell geeignet ist.
- [`HTMLTableCellElement.cellIndex`](/de/docs/Web/API/HTMLTableCellElement/cellIndex) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Sammlung des {{HTMLElement("tr")}} angibt, in dem sich die Zelle befindet. Gehört die Zelle nicht zu einem `<tr>`, wird `-1` zurückgegeben.
- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
  - : Eine positive Zahl, die angibt, über wie viele Spalten sich diese Zelle erstrecken muss; dies ermöglicht es der Zelle, Platz über mehrere Spalten der Tabelle einzunehmen. Sie spiegelt das [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.
- [`HTMLTableCellElement.headers`](/de/docs/Web/API/HTMLTableCellElement/headers) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die eine Liste von `id`-Werten von {{HTMLElement("th")}}-Elementen beschreibt, die Header darstellen, die mit der Zelle verknüpft sind. Sie spiegelt das [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribut wider.
- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
  - : Eine positive Zahl, die angibt, über wie viele Zeilen sich diese Zelle erstrecken muss; dies ermöglicht es der Zelle, Platz über mehrere Zeilen der Tabelle einzunehmen. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut wider.
- [`HTMLTableCellElement.scope`](/de/docs/Web/API/HTMLTableCellElement/scope)
  - : Ein String, der den Geltungsbereich einer {{HTMLElement("th")}}-Zelle angibt. Mögliche Werte für `scope` sind: `col`, `colgroup`, `row`, `rowgroup` oder der leere String (`""`).

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie werden hauptsächlich dokumentiert, um das Verständnis älterer Codebasen zu unterstützen.

- [`HTMLTableCellElement.align`](/de/docs/Web/API/HTMLTableCellElement/align) {{deprecated_inline}}
  - : Ein String, der den Wert des [`align`](/de/docs/Web/HTML/Element/td#align)-Attributs enthält, falls vorhanden, oder einen leeren String, falls nicht gesetzt. Es kann verwendet werden, um die Ausrichtung des Inhalts des Elements im umgebenden Kontext auf `"left"`, `"right"` und `"center"` zu setzen. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("text-align")}}.
- [`HTMLTableCellElement.axis`](/de/docs/Web/API/HTMLTableCellElement/axis) {{deprecated_inline}}
  - : Ein String, der eine Namensgruppierung von Zellen in virtuellen beschreibt. Es spiegelt das veraltete [`axis`](/de/docs/Web/HTML/Element/td#axis)-Attribut wider.
- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Es spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/td#bgcolor)-Attribut wider.
- [`HTMLTableCellElement.ch`](/de/docs/Web/API/HTMLTableCellElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, an dem alle Zellen einer Spalte ausgerichtet werden. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/td#char)-Attribut wider und basiert auf den Dezimalpunkten der Sprache, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableCellElement.chOff`](/de/docs/Web/API/HTMLTableCellElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (bei links-nach-rechts-Schriften; oder links bei rechts-nach-links-Schriften) des Zeichens definiert in `HTMLTableCellElement.ch` verbleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableCellElement.height`](/de/docs/Web/API/HTMLTableCellElement/height) {{deprecated_inline}}
  - : Ein String, der eine Pixel-Länge der empfohlenen Höhe der Zelle enthält. Es spiegelt das veraltete [`height`](/de/docs/Web/HTML/Element/td#height)-Attribut wider.
- [`HTMLTableCellElement.noWrap`](/de/docs/Web/API/HTMLTableCellElement/noWrap) {{deprecated_inline}}
  - : Ein boolescher Wert, der das `nowrap`-Attribut widerspiegelt und angibt, ob der Zellinhalt in mehrere Zeilen umgebrochen werden kann.
- [`HTMLTableCellElement.vAlign`](/de/docs/Web/API/HTMLTableCellElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen Aufzählungswert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Element/td#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("vertical-align")}}.
- [`HTMLTableCellElement.width`](/de/docs/Web/API/HTMLTableCellElement/width) {{deprecated_inline}}
  - : Ein String, der die Anzahl der Pixel angibt, die die Breite der Zelle idealerweise haben sollte. Diese Eigenschaft spiegelt das ebenfalls veraltete [`width`](/de/docs/Web/HTML/Element/td#width)-Attribut wider. Verwenden Sie stattdessen die CSS-Eigenschaft {{cssxref("width")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
