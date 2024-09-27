---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTableRowElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (über die hinaus, die ihr durch Vererbung von der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle ebenfalls zur Verfügung stehen) zur Manipulation von Layout und Darstellung von Zeilen in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.cells`](/de/docs/Web/API/HTMLTableRowElement/cells) {{ReadOnlyInline}}
  - : Gibt eine Live-`HTMLCollection` zurück, die die Zellen in der Zeile enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.
- [`HTMLTableRowElement.rowIndex`](/de/docs/Web/API/HTMLTableRowElement/rowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb der gesamten Tabelle angibt. Wenn die Zeile nicht Teil einer Tabelle ist, wird `-1` zurückgegeben.
- [`HTMLTableRowElement.sectionRowIndex`](/de/docs/Web/API/HTMLTableRowElement/sectionRowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb des Tabellenabschnitts angibt, zu dem sie gehört. Wenn die Zeile nicht Teil eines Abschnitts ist, wird `-1` zurückgegeben.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
  - : Entfernt die Zelle, die dem `index` entspricht. Wenn `index` `-1` ist, wird die letzte Zelle der Zeile entfernt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
  - : Gibt ein `HTMLTableCellElement` zurück, das eine neue Zelle der Zeile darstellt. Die Zelle wird direkt vor der angegebenen `index`-Position in der Sammlung von Zellen eingefügt. Wenn `index` `-1` ist, wird die neue Zelle an die Sammlung angehängt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um ältere Codebasen zu verstehen.

- [`HTMLTableRowElement.align`](/de/docs/Web/API/HTMLTableRowElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält, welcher dem [`align`](/de/docs/Web/HTML/Element/tr#align)-Attribut entspricht. Er gibt die Ausrichtung des Inhalts des Elements zum umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er entspricht dem veralteten [`bgColor`](/de/docs/Web/HTML/Element/tr#bgcolor)-Attribut.
- [`HTMLTableRowElement.ch`](/de/docs/Web/API/HTMLTableRowElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, an dem alle Zellen einer Spalte ausgerichtet werden. Es entspricht dem [`char`](/de/docs/Web/HTML/Element/tr#char) und standardmäßig den Dezimalpunkten, die mit der Sprache verbunden sind, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und war nicht sehr gut unterstützt.
- [`HTMLTableRowElement.chOff`](/de/docs/Web/API/HTMLTableRowElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine Zahl enthält, die angibt, wie viele Zeichen rechts (für Links-nach-Rechts-Schriften) oder links (für Rechts-nach-Links-Schriften) des durch `HTMLTableRowElement.ch` definierten Zeichens verbleiben müssen. Diese Eigenschaft war optional und war nicht sehr gut unterstützt.
- [`HTMLTableRowElement.vAlign`](/de/docs/Web/API/HTMLTableRowElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert repräsentiert, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet sein muss. Er entspricht dem [`valign`](/de/docs/Web/HTML/Element/tr#valign)-Attribut und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("tr")}}.
