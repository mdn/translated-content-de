---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableSectionElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu denen, die es durch Vererbung vom [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface hat) zum Manipulieren des Layouts und der Darstellung von Sektionen, das heißt Kopfzeilen, Fußzeilen und Körper ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tbody")}}, jeweils) in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.align`](/de/docs/Web/API/HTMLTableSectionElement/align) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/tr#align)-Attribut widerspiegelt. Er gibt die Ausrichtung des Inhalts des Elements in Bezug auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableSectionElement.rows`](/de/docs/Web/API/HTMLTableSectionElement/rows) {{ReadOnlyInline}}
  - : Gibt eine Live-`HTMLCollection` zurück, die die Zeilen im Abschnitt enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.
- [`HTMLTableSectionElement.ch`](/de/docs/Web/API/HTMLTableSectionElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen wird verwendet, um alle Zellen einer Spalte darauf auszurichten. Es spiegelt das [`char`](/de/docs/Web/HTML/Reference/Elements/tr#char)-Attribut wider und standardmäßig auf die Dezimalpunkte, die mit der Sprache verbunden sind, z.B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.chOff`](/de/docs/Web/API/HTMLTableSectionElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine Ganzzahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts verlaufende Schriften; oder links für von rechts nach links verlaufende Schriften) von dem durch `HTMLTableRowElement.ch` definierten Zeichen bleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.vAlign`](/de/docs/Web/API/HTMLTableSectionElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen aufgezählten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Reference/Elements/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
  - : Entfernt die Zeile, die dem im Parameter angegebenen `index` entspricht, im Abschnitt. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile des Abschnitts repräsentiert. Es fügt es in die Zeilensammlung unmittelbar vor dem {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position ein. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}.
