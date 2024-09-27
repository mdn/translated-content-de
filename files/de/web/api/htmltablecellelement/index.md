---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTableCellElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle hinaus, die sie ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von Tabellenzellen, entweder Kopfzellen ({{HTMLElement("th")}}) oder Datenzellen ({{HTMLElement("td")}}) in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableCellElement.abbr`](/de/docs/Web/API/HTMLTableCellElement/abbr)
  - : Ein String, der auf `<th>`-Elementen verwendet werden kann (nicht auf {{HTMLElement("td")}}) und ein alternatives Label für die Kopfzelle spezifiziert. Dieses alternative Label kann in anderen Kontexten verwendet werden, etwa wenn die Kopfzeilen beschrieben werden, die auf eine Datenzelle zutreffen. Dies dient dazu, einen kürzeren Begriff anzubieten, insbesondere für Bildschirmausleser, und ist ein wertvolles Hilfsmittel für die Barrierefreiheit. In der Regel ist der Wert von `abbr` eine Abkürzung oder ein Akronym, es kann aber jeder kontextuell passende Text sein.
- [`HTMLTableCellElement.cellIndex`](/de/docs/Web/API/HTMLTableCellElement/cellIndex) {{ReadOnlyInline}}
  - : Eine Zahl, die die Position der Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Sammlung des {{HTMLElement("tr")}}, in dem sich die Zelle befindet, darstellt. Gehört die Zelle nicht zu einem `<tr>`, wird `-1` zurückgegeben.
- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
  - : Eine positive Zahl, die angibt, über wie viele Spalten sich diese Zelle erstrecken muss; dies ermöglicht es der Zelle, Platz über mehrere Spalten der Tabelle zu belegen. Sie spiegelt das [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.
- [`HTMLTableCellElement.headers`](/de/docs/Web/API/HTMLTableCellElement/headers) {{ReadOnlyInline}}
  - : Eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList), die eine Liste von `id` von {{HTMLElement("th")}}-Elementen beschreibt, die Kopfzellen repräsentieren, die mit der Zelle verbunden sind. Sie spiegelt das [`headers`](/de/docs/Web/HTML/Element/td#headers)-Attribut wider.
- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
  - : Eine positive Zahl, die angibt, über wie viele Zeilen sich diese Zelle erstrecken muss; dies ermöglicht es der Zelle, Platz über mehrere Zeilen der Tabelle zu belegen. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Element/td#rowspan)-Attribut wider.
- [`HTMLTableCellElement.scope`](/de/docs/Web/API/HTMLTableCellElement/scope)
  - : Ein String, der den Anwendungsbereich einer {{HTMLElement("th")}}-Zelle angibt. Mögliche Werte für `scope` sind: `col`, `colgroup`, `row`, `rowgroup` oder der leere String (`""`).

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um das Verständnis älterer Codebasen zu erleichtern.

- [`HTMLTableCellElement.align`](/de/docs/Web/API/HTMLTableCellElement/align) {{deprecated_inline}}
  - : Ein String, der den Wert des [`align`](/de/docs/Web/HTML/Element/td#align)-Attributs enthält, falls vorhanden, oder einen leeren String, falls nicht gesetzt. Er kann verwendet werden, um die Ausrichtung des Inhalts des Elements im umgebenden Kontext zu setzen: `"left"`, `"right"`, und `"center"`. Verwenden Sie stattdessen die CSS-{{cssxref("text-align")}}-Eigenschaft.
- [`HTMLTableCellElement.axis`](/de/docs/Web/API/HTMLTableCellElement/axis) {{deprecated_inline}}
  - : Ein String, der einen Gruppennamen für Zellen in einer virtuellen Gliederung enthält. Sie spiegelt das veraltete [`axis`](/de/docs/Web/HTML/Element/td#axis)-Attribut wider.
- [`HTMLTableCellElement.bgColor`](/de/docs/Web/API/HTMLTableCellElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Sie spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/td#bgcolor)-Attribut wider.
- [`HTMLTableCellElement.ch`](/de/docs/Web/API/HTMLTableCellElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen dient dazu, alle Zellen einer Spalte daran auszurichten. Sie spiegelt das [`char`](/de/docs/Web/HTML/Element/td#char)-Attribut wider und standardmäßig sind dies die Dezimalpunkte, die mit der Sprache verbunden sind, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und nicht sehr gut unterstützt.
- [`HTMLTableCellElement.chOff`](/de/docs/Web/API/HTMLTableCellElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für Links-nach-Rechts-Schriften; oder links für Rechts-nach-Links-Schriften) des durch `HTMLTableCellElement.ch` definierten Zeichens freigelassen werden müssen. Diese Eigenschaft war optional und nicht sehr gut unterstützt.
- [`HTMLTableCellElement.height`](/de/docs/Web/API/HTMLTableCellElement/height) {{deprecated_inline}}
  - : Ein String, der eine Pixel-Länge der vorgesehenen Höhe der Zelle enthält. Sie spiegelt das veraltete [`height`](/de/docs/Web/HTML/Element/td#height)-Attribut wider.
- [`HTMLTableCellElement.noWrap`](/de/docs/Web/API/HTMLTableCellElement/noWrap) {{deprecated_inline}}
  - : Ein Boolescher Wert, der das `nowrap`-Attribut widerspiegelt und anzeigt, ob der Zellinhalt in mehrere Zeilen gebrochen werden kann.
- [`HTMLTableCellElement.vAlign`](/de/docs/Web/API/HTMLTableCellElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Element/td#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`. Verwenden Sie stattdessen die CSS-{{cssxref("vertical-align")}}-Eigenschaft.
- [`HTMLTableCellElement.width`](/de/docs/Web/API/HTMLTableCellElement/width) {{deprecated_inline}}
  - : Ein String, der die Anzahl der Pixel angibt, die die Zelle, falls möglich, in der Breite einnehmen soll. Diese Eigenschaft spiegelt das ebenfalls veraltete [`width`](/de/docs/Web/HTML/Element/td#width)-Attribut wider. Verwenden Sie stattdessen die CSS-{{cssxref("width")}}-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die diese Schnittstelle implementieren: {{HTMLElement("th")}} und {{HTMLElement("td")}}.
