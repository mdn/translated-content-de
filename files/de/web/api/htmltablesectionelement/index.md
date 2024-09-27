---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableSectionElement`**-Interface bietet spezielle Eigenschaften und Methoden (über das hinaus, was das durch Vererbung ebenfalls verfügbare [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface bietet) zur Manipulation des Layouts und der Darstellung von Abschnitten, das heißt von Kopfzeilen, Fußzeilen und Körpern ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} und {{HTMLElement("tbody")}}, jeweils) in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.align`](/de/docs/Web/API/HTMLTableSectionElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält, der das [`align`](/de/docs/Web/HTML/Element/tr#align)-Attribut widerspiegelt. Es gibt die Ausrichtung des Inhalts des Elements im Hinblick auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableSectionElement.rows`](/de/docs/Web/API/HTMLTableSectionElement/rows) {{ReadOnlyInline}}
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die die Zeilen im Abschnitt enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.
- [`HTMLTableSectionElement.ch`](/de/docs/Web/API/HTMLTableSectionElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen dient dazu, alle Zellen einer Spalte auszurichten. Es spiegelt das [`char`](/de/docs/Web/HTML/Element/tr#char) wider und standardmäßig die Dezimaltrennzeichen der jeweiligen Sprache, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht gut unterstützt.
- [`HTMLTableSectionElement.chOff`](/de/docs/Web/API/HTMLTableSectionElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine ganze Zahl enthält, die angibt, wie viele Zeichen rechts (für links-nach-rechts-Schriften; oder links für rechts-nach-links-Schriften) des von `HTMLTableRowElement.ch` definierten Zeichens verbleiben müssen. Diese Eigenschaft war optional und wurde nicht gut unterstützt.
- [`HTMLTableSectionElement.vAlign`](/de/docs/Web/API/HTMLTableSectionElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Es spiegelt das [`valign`](/de/docs/Web/HTML/Element/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
  - : Entfernt die Zeile, die dem im Parameter angegebenen `index` entspricht, im Abschnitt. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; ist er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile des Abschnitts darstellt. Es fügt es in die Zeilensammlung unmittelbar vor dem {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position ein. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Ist der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}} und {{HTMLElement("tbody")}}.
