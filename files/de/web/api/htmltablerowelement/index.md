---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableRowElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen, die durch Vererbung vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface verfügbar sind), um das Layout und die Präsentation von Zeilen in einer HTML-Tabelle zu manipulieren.

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.cells`](/de/docs/Web/API/HTMLTableRowElement/cells) {{ReadOnlyInline}}
  - : Gibt eine Live-`HTMLCollection` zurück, die die Zellen in der Zeile enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.
- [`HTMLTableRowElement.rowIndex`](/de/docs/Web/API/HTMLTableRowElement/rowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb der gesamten Tabelle angibt. Wenn die Zeile nicht Teil einer Tabelle ist, wird `-1` zurückgegeben.
- [`HTMLTableRowElement.sectionRowIndex`](/de/docs/Web/API/HTMLTableRowElement/sectionRowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb des Abschnitts der Tabelle angibt, zu dem sie gehört. Wenn die Zeile nicht Teil eines Abschnitts ist, wird `-1` zurückgegeben.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
  - : Entfernt die Zelle, die dem `Index` entsprechend ist. Wenn `Index` `-1` ist, wird die letzte Zelle der Zeile entfernt. Wenn `Index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
  - : Gibt ein [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) zurück, das eine neue Zelle der Zeile repräsentiert. Die Zelle wird in die Sammlung von Zellen unmittelbar vor der angegebenen `Index`-Position in der Zeile eingefügt. Wenn `Index` `-1` ist, wird die neue Zelle an die Sammlung angehängt. Wenn `Index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um ältere Codebasen zu verstehen.

- [`HTMLTableRowElement.align`](/de/docs/Web/API/HTMLTableRowElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält, der das [`align`](/de/docs/Web/HTML/Element/tr#align) Attribut widerspiegelt. Er gibt die Ausrichtung des Inhalts des Elements zum umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/tr#bgcolor) Attribut wider.
- [`HTMLTableRowElement.ch`](/de/docs/Web/API/HTMLTableRowElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist jenes, an dem alle Zellen einer Spalte ausgerichtet werden. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/tr#char) Attribut wider und standardmäßig auf die Dezimalpunkte, die mit der Sprache verbunden sind, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableRowElement.chOff`](/de/docs/Web/API/HTMLTableRowElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine Ganzzahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts verlaufende Skripte; oder links für von rechts nach links verlaufende Skripte) des Zeichens, das durch `HTMLTableRowElement.ch` definiert ist, verbleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableRowElement.vAlign`](/de/docs/Web/API/HTMLTableRowElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert repräsentiert, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Element/tr#valign) Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("tr")}}.
