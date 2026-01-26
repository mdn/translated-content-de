---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{ APIRef("HTML DOM") }}

Das **`HTMLTableSectionElement`** Interface bietet spezielle Eigenschaften und Methoden (über die das Interface [`HTMLElement`](/de/docs/Web/API/HTMLElement) ebenfalls verfügt, bedingt durch Vererbung) zur Manipulation des Layouts und der Darstellung von Abschnitten, das heißt Header, Fußzeilen und Körper (entsprechend {{HTMLElement("thead")}}, {{HTMLElement("tfoot")}}, und {{HTMLElement("tbody")}}) in einer HTML-Tabelle.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.align`](/de/docs/Web/API/HTMLTableSectionElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält und das [`align`](/de/docs/Web/HTML/Reference/Elements/tr#align)-Attribut widerspiegelt. Er gibt an, wie die Inhalte des Elements im Verhältnis zum umgebenden Kontext ausgerichtet sind. Mögliche Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableSectionElement.rows`](/de/docs/Web/API/HTMLTableSectionElement/rows) {{ReadOnlyInline}}
  - : Gibt eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die die Zeilen im Abschnitt enthält. Die `HTMLCollection` ist dynamisch und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.
- [`HTMLTableSectionElement.ch`](/de/docs/Web/API/HTMLTableSectionElement/ch) {{deprecated_inline}}
  - : Ein String, der ein einzelnes Zeichen enthält. Dieses Zeichen ist dasjenige, an dem alle Zellen einer Spalte ausgerichtet werden. Es spiegelt den [`char`](/de/docs/Web/HTML/Reference/Elements/tr#char) wider und entspricht standardmäßig den Dezimaltrennzeichen der jeweiligen Sprache, z. B. `'.'` für Englisch oder `','` für Französisch. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.chOff`](/de/docs/Web/API/HTMLTableSectionElement/chOff) {{deprecated_inline}}
  - : Ein String, der eine Ganzzahl enthält, die angibt, wie viele Zeichen rechts (für von links nach rechts gerichtete Schriften; oder links für von rechts nach links gerichtete Schriften) des durch `HTMLTableRowElement.ch` definierten Zeichens verbleiben müssen. Diese Eigenschaft war optional und wurde nicht sehr gut unterstützt.
- [`HTMLTableSectionElement.vAlign`](/de/docs/Web/API/HTMLTableSectionElement/vAlign) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert darstellt, der angibt, wie der Inhalt der Zelle vertikal ausgerichtet werden muss. Er spiegelt das [`valign`](/de/docs/Web/HTML/Reference/Elements/tr#valign)-Attribut wider und kann einen der folgenden Werte haben: `"top"`, `"middle"`, `"bottom"` oder `"baseline"`.

## Instanzmethoden

_Erbt Methoden von seinem Eltern-Interface, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
  - : Entfernt die Zeile, die dem im Parameter angegebenen `index` entspricht, im Abschnitt. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile des Abschnitts darstellt. Es wird in die Zeilensammlung direkt vor das {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position eingefügt. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die HTML-Elemente, die dieses Interface implementieren: {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, und {{HTMLElement("tbody")}}.
