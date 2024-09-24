---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`HTMLTableRowElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zu der {{domxref("HTMLElement")}}-Schnittstelle, die sie durch Vererbung ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von Zeilen in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von ihrem Elternteil, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableRowElement.cells")}} {{ReadOnlyInline}}
  - : Gibt eine dynamische {{domxref("HTMLCollection")}} zurück, die die Zellen in der Zeile enthält. Die `HTMLCollection` ist dynamisch und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.
- {{domxref("HTMLTableRowElement.rowIndex")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb der gesamten Tabelle angibt. Wenn die Zeile nicht Teil einer Tabelle ist, wird `-1` zurückgegeben.
- {{domxref("HTMLTableRowElement.sectionRowIndex")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die logische Position der Zeile innerhalb des Tabellensegments, zu dem sie gehört, angibt. Wenn die Zeile nicht Teil eines Segments ist, wird `-1` zurückgegeben.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableRowElement.deleteCell()")}}
  - : Entfernt die Zelle, die dem `index` entspricht. Wenn `index` `-1` ist, wird die letzte Zelle der Zeile entfernt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird ein {{DOMxRef("DOMException")}} mit dem Wert `IndexSizeError` ausgelöst.
- {{domxref("HTMLTableRowElement.insertCell()")}}
  - : Gibt ein {{domxref("HTMLTableCellElement")}} zurück, das eine neue Zelle der Zeile darstellt. Die Zelle wird in der Sammlung von Zellen unmittelbar vor der angegebenen `index`-Position in der Zeile eingefügt. Wenn `index` `-1` ist, wird die neue Zelle an die Sammlung angehängt. Wenn `index` kleiner als `-1` oder größer als die Anzahl der Zellen in der Sammlung ist, wird ein {{DOMxRef("DOMException")}} mit dem Wert `IndexSizeError` ausgelöst.

## Veraltete Eigenschaften

> [!WARNING]
> Diese Eigenschaften sind veraltet und sollten nicht mehr verwendet werden. Sie werden hauptsächlich dokumentiert, um das Verständnis älterer Codebasen zu erleichtern.

- {{domxref("HTMLTableRowElement.align")}} {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält, der das [`align`](/de/docs/Web/HTML/Element/tr#align)-Attribut widerspiegelt. Er gibt die Ausrichtung des Inhalts des Elements im umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- {{domxref("HTMLTableRowElement.bgColor")}} {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/tr#bgcolor)-Attribut wider.
- {{domxref("HTMLTableRowElement.ch")}} {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen wird verwendet, um alle Zellen einer Spalte daran auszurichten. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/tr#char)-Attribut wider und basiert standardmäßig auf den Dezimaltrennzeichen der jeweiligen Sprache, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- {{domxref("HTMLTableRowElement.chOff")}} {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts gerichtete Skripte; oder links für von rechts nach links gerichtete Skripte) von dem Zeichen, das durch `HTMLTableRowElement.ch` definiert wurde, verbleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- {{domxref("HTMLTableRowElement.vAlign")}} {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Element/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("tr")}}.
