---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableRowElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu den im [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface durch Vererbung verfügbaren), um das Layout und die Präsentation von Zeilen in einer HTML-Tabelle zu manipulieren.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.cells`](/de/docs/Web/API/HTMLTableRowElement/cells) {{ReadOnlyInline}}
  - : Gibt ein Live-`HTMLCollection` zurück, das die Zellen in der Zeile enthält. Das `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.
- [`HTMLTableRowElement.rowIndex`](/de/docs/Web/API/HTMLTableRowElement/rowIndex) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die logische Position der Zeile innerhalb der gesamten Tabelle angibt. Wenn die Zeile nicht Teil einer Tabelle ist, wird `-1` zurückgegeben.
- [`HTMLTableRowElement.sectionRowIndex`](/de/docs/Web/API/HTMLTableRowElement/sectionRowIndex) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die logische Position der Zeile innerhalb des Tabellenabschnitts angibt, zu dem sie gehört. Wenn die Zeile nicht Teil eines Abschnitts ist, wird `-1` zurückgegeben.

## Instanzmethoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
  - : Entfernt die Zelle, die dem `index` entspricht. Wenn `index` `-1` ist, wird die letzte Zelle der Zeile entfernt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
  - : Gibt ein [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) zurück, das eine neue Zelle der Zeile darstellt. Die Zelle wird in der Zellsammlung unmittelbar vor der angegebenen `index`-Position in der Zeile eingefügt. Wenn `index` `-1` ist, wird die neue Zelle an die Sammlung angehängt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um älteren Code zu verstehen.

- [`HTMLTableRowElement.align`](/de/docs/Web/API/HTMLTableRowElement/align) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/tr#align)-Attribut widerspiegelt. Es gibt die Ausrichtung des Inhalts des Elements im umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Es spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Reference/Elements/tr#bgcolor)-Attribut wider.
- [`HTMLTableRowElement.ch`](/de/docs/Web/API/HTMLTableRowElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, an dem alle Zellen einer Spalte ausgerichtet werden. Es spiegelt das [`char`](/de/docs/Web/HTML/Reference/Elements/tr#char)-Attribut wider und standardmäßig an Dezimalzeichen im Sprachkontext, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht gut unterstützt.
- [`HTMLTableRowElement.chOff`](/de/docs/Web/API/HTMLTableRowElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine Zahl enthält, die angibt, wie viele Zeichen rechts (für links-nach-rechts-Skripte; oder links für rechts-nach-links-Skripte) des durch `HTMLTableRowElement.ch` definierten Zeichens übrig bleiben müssen. Diese Eigenschaft war optional und wurde nicht gut unterstützt.
- [`HTMLTableRowElement.vAlign`](/de/docs/Web/API/HTMLTableRowElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Reference/Elements/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("tr")}}.
