---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableRowElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu dem, was es durch Vererbung vom [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface bereits hat) zur Manipulation des Layouts und der Darstellung von Zeilen in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableRowElement.cells`](/de/docs/Web/API/HTMLTableRowElement/cells) {{ReadOnlyInline}}
  - : Gibt ein live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, das die Zellen in der Zeile enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.
- [`HTMLTableRowElement.rowIndex`](/de/docs/Web/API/HTMLTableRowElement/rowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb der gesamten Tabelle angibt. Wenn die Zeile nicht Teil einer Tabelle ist, wird `-1` zurückgegeben.
- [`HTMLTableRowElement.sectionRowIndex`](/de/docs/Web/API/HTMLTableRowElement/sectionRowIndex) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb des Tabellenabschnitts angibt, zu dem sie gehört. Wenn die Zeile nicht Teil eines Abschnitts ist, wird `-1` zurückgegeben.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
  - : Entfernt die Zelle, die dem `index` entspricht. Wenn `index` `-1` ist, wird die letzte Zelle der Zeile entfernt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
  - : Gibt ein [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) zurück, das eine neue Zelle der Zeile darstellt. Die Zelle wird in die Zellensammlung unmittelbar vor der angegebenen `index`-Position in der Zeile eingefügt. Wenn `index` `-1` ist, wird die neue Zelle an die Sammlung angehängt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie sind hauptsächlich dokumentiert, um das Verständnis älterer Codebasen zu erleichtern.

- [`HTMLTableRowElement.align`](/de/docs/Web/API/HTMLTableRowElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält, der das [`align`](/de/docs/Web/HTML/Element/tr#align)-Attribut widerspiegelt. Es gibt die Ausrichtung des Inhalts des Elements im Verhältnis zum umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableRowElement.bgColor`](/de/docs/Web/API/HTMLTableRowElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Es spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/tr#bgcolor)-Attribut wider.
- [`HTMLTableRowElement.ch`](/de/docs/Web/API/HTMLTableRowElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, an dem alle Zellen einer Spalte ausgerichtet werden. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/tr#char) wider und standardmäßig auf die Dezimalpunkte, die mit der Sprache verbunden sind, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableRowElement.chOff`](/de/docs/Web/API/HTMLTableRowElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für Links-nach-Rechts-Schriften; oder links für Rechts-nach-Links-Schriften) des Zeichens sein müssen, das durch `HTMLTableRowElement.ch` definiert ist. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableRowElement.vAlign`](/de/docs/Web/API/HTMLTableRowElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet sein muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Element/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("tr")}}.
