---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Das **`HTMLTableElement`**-Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu den regulären Eigenschaften des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objekts, die auch durch Vererbung zur Verfügung stehen) zur Manipulation des Layouts und der Präsentation von Tabellen in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
  - : Ein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement), das das erste {{HTMLElement("caption")}} darstellt, welches ein Kind des Elements ist oder `null`, falls keines gefunden wird. Wird ein Objekt festgelegt, das kein `<caption>` darstellt, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst. Bei Angabe eines korrekten Objekts wird dieses als erstes Kind des Elements in den Baum eingefügt und das erste `<caption>`, das ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das das erste {{HTMLElement("thead")}} darstellt, welches ein Kind des Elements ist oder `null`, falls keines gefunden wird. Wird ein Objekt festgelegt, das kein `<thead>` darstellt, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst. Bei Angabe eines korrekten Objekts wird dieses unmittelbar vor dem ersten Element in den Baum eingefügt, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist oder als letztes Kind, falls ein solches Element nicht existiert. Das erste `<thead>`, das ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das das erste {{HTMLElement("tfoot")}} darstellt, welches ein Kind des Elements ist oder `null`, falls keines gefunden wird. Wird ein Objekt festgelegt, das kein `<tfoot>` darstellt, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst. Bei Angabe eines korrekten Objekts wird dieses unmittelbar vor dem ersten Element, das weder ein {{HTMLElement("caption")}}, ein {{HTMLElement("colgroup")}}, noch ein {{HTMLElement("thead")}} ist oder als letztes Kind, falls ein solches Element nicht existiert, in den Baum eingefügt. Das erste `<tfoot>`, das ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.rows`](/de/docs/Web/API/HTMLTableElement/rows) {{ReadOnlyInline}}
  - : Gibt eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Zeilen des Elements enthält, also alle {{HTMLElement("tr")}}, die ein Kind des Elements oder eines seiner {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Kinder sind. Die Zeilen in einem `<thead>` erscheinen zuerst in Baumreihenfolge, und die Mitglieder eines `<tbody>` zuletzt, ebenfalls in Baumreihenfolge. Die `HTMLCollection` ist lebendig und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.
- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies) {{ReadOnlyInline}}
  - : Gibt eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle {{HTMLElement("tbody")}} des Elements enthält. Die `HTMLCollection` ist lebendig und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

### Veraltete Eigenschaften

> [!WARNING]
> Die folgenden Eigenschaften sind veraltet. Sie sollten vermeiden, diese zu verwenden.

- [`HTMLTableElement.align`](/de/docs/Web/API/HTMLTableElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält, der das [`align`](/de/docs/Web/HTML/Element/table#align)-Attribut widerspiegelt. Er gibt die Ausrichtung des Inhalts des Elements in Bezug auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableElement.bgColor`](/de/docs/Web/API/HTMLTableElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/table#bgcolor)-Attribut wider.
- [`HTMLTableElement.border`](/de/docs/Web/API/HTMLTableElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des Rahmens der Tabelle enthält. Er spiegelt das veraltete [`border`](/de/docs/Web/HTML/Element/table#border)-Attribut wider.
- [`HTMLTableElement.cellPadding`](/de/docs/Web/API/HTMLTableElement/cellPadding) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des horizontalen und vertikalen Raums zwischen Zellinhalt und Zellgrenzen enthält. Er spiegelt das veraltete [`cellpadding`](/de/docs/Web/HTML/Element/table#cellpadding)-Attribut wider.
- [`HTMLTableElement.cellSpacing`](/de/docs/Web/API/HTMLTableElement/cellSpacing) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln der horizontalen und vertikalen Trennung zwischen den Zellen enthält. Er spiegelt das veraltete [`cellspacing`](/de/docs/Web/HTML/Element/table#cellspacing)-Attribut wider.
- [`HTMLTableElement.frame`](/de/docs/Web/API/HTMLTableElement/frame) {{deprecated_inline}}
  - : Ein String, der die Art der äußeren Rahmen der Tabelle enthält. Er spiegelt das veraltete [`frame`](/de/docs/Web/HTML/Element/table#frame)-Attribut wider und kann einen der folgenden Werte annehmen: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"` oder `"border"`.
- [`HTMLTableElement.rules`](/de/docs/Web/API/HTMLTableElement/rules) {{deprecated_inline}}
  - : Ein String, der die Art der inneren Rahmen der Tabelle enthält. Er spiegelt das veraltete [`rules`](/de/docs/Web/HTML/Element/table#rules)-Attribut wider und kann einen der folgenden Werte annehmen: `"none"`, `"groups"`, `"rows"`, `"cols"` oder `"all"`.
- [`HTMLTableElement.summary`](/de/docs/Web/API/HTMLTableElement/summary) {{deprecated_inline}}
  - : Ein String, der eine Beschreibung des Zwecks oder der Struktur der Tabelle enthält. Er spiegelt das veraltete [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut wider.
- [`HTMLTableElement.width`](/de/docs/Web/API/HTMLTableElement/width) {{deprecated_inline}}
  - : Ein String, der die Länge in Pixeln oder in Prozent der gewünschten Breite der gesamten Tabelle enthält. Er spiegelt das veraltete [`width`](/de/docs/Web/HTML/Element/table#width)-Attribut wider.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das das erste {{HTMLElement("thead")}} darstellt, welches ein Kind des Elements ist. Falls keines gefunden wird, wird ein neues erstellt und unmittelbar vor dem ersten Element, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist oder als letztes Kind, falls ein solches Element nicht existiert, in den Baum eingefügt.
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
  - : Entfernt das erste {{HTMLElement("thead")}}, das ein Kind des Elements ist.
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das das erste {{HTMLElement("tfoot")}} darstellt, welches ein Kind des Elements ist. Falls keines gefunden wird, wird ein neues erstellt und als letztes Kind in den Baum eingefügt.
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
  - : Entfernt das erste {{HTMLElement("tfoot")}}, das ein Kind des Elements ist.
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das ein neues {{HTMLElement("tbody")}} darstellt, das ein Kind des Elements ist. Es wird nach dem letzten Element eingefügt, das ein {{HTMLElement("tbody")}} ist, oder als letztes Kind, falls ein solches Element nicht existiert.
- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
  - : Gibt ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) zurück, das das erste {{HTMLElement("caption")}} darstellt, welches ein Kind des Elements ist. Falls keines gefunden wird, wird ein neues erstellt und als erstes Kind des {{HTMLElement("table")}}-Elements in den Baum eingefügt.
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
  - : Entfernt das erste {{HTMLElement("caption")}}, das ein Kind des Elements ist.
- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile der Tabelle darstellt. Es fügt es in die Zeilensammlung unmittelbar vor dem {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position ein. Falls notwendig, wird ein {{HTMLElement("tbody")}} erstellt. Wenn der `index` `-1` ist, wird die neue Zeile zur Sammlung hinzugefügt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableElement.deleteRow()`](/de/docs/Web/API/HTMLTableElement/deleteRow)
  - : Entfernt die Zeile, die dem im Parameter angegebenen `index` entspricht. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("table")}}.
