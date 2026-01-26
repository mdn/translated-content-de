---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableRowElement`**-Interface stellt spezielle Eigenschaften und Methoden zur Verfügung (zusätzlich zu denen des durch Vererbung verfügbaren [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces), die zur Manipulation des Layouts und der Darstellung von Zeilen in einem HTML-Tabellen dienen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.cells`](/de/docs/Web/API/HTMLTableRowElement/cells) {{ReadOnlyInline}}
  - : Gibt ein "live" [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, das die Zellen in der Zeile enthält. Das `HTMLCollection` ist "live" und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.
- [`HTMLTableRowElement.rowIndex`](/de/docs/Web/API/HTMLTableRowElement/rowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb der gesamten Tabelle angibt. Wenn die Zeile nicht Teil einer Tabelle ist, wird `-1` zurückgegeben.
- [`HTMLTableRowElement.sectionRowIndex`](/de/docs/Web/API/HTMLTableRowElement/sectionRowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb des Tabellensegments angibt, zu dem sie gehört. Wenn die Zeile nicht Teil eines Segments ist, wird `-1` zurückgegeben.

## Instanzmethoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
  - : Entfernt die der `index` entsprechenden Zelle. Wenn `index` `-1` ist, wird die letzte Zelle der Zeile entfernt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
  - : Gibt ein [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) zurück, das eine neue Zelle der Zeile darstellt. Die Zelle wird in der Sammlung der Zellen unmittelbar vor der angegebenen `index`-Position in der Zeile eingefügt. Wenn `index` `-1` ist, wird die neue Zelle an die Sammlung angehängt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um ältere Codebasen besser zu verstehen.

- [`HTMLTableRowElement.align`](/de/docs/Web/API/HTMLTableRowElement/align) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/tr#align)-Attribut widerspiegelt. Es gibt die Ausrichtung der Inhaltselemente im Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Es spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Reference/Elements/tr#bgcolor)-Attribut wider.
- [`HTMLTableRowElement.ch`](/de/docs/Web/API/HTMLTableRowElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist das, an dem alle Zellen einer Spalte ausgerichtet werden. Es spiegelt das [`char`](/de/docs/Web/HTML/Reference/Elements/tr#char) wider und standardmäßig an Dezimalstellen, die mit der Sprache assoziiert sind, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableRowElement.chOff`](/de/docs/Web/API/HTMLTableRowElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für Links-nach-Rechts-Schreibweisen oder links für Rechts-nach-Links-Schreibweisen) vom durch `HTMLTableRowElement.ch` definierten Zeichen verbleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableRowElement.vAlign`](/de/docs/Web/API/HTMLTableRowElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Reference/Elements/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("tr")}}.
