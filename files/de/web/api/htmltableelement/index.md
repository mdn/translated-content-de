---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement`** Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zur regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt-Schnittstelle, die es ebenfalls durch Vererbung verfügbar hat) zur Manipulation der Layout- und Präsentationsdarstellung von Tabellen in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
  - : Ein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement), das das erste {{HTMLElement("caption")}} darstellt, das ein Kind des Elements ist, oder `null`, wenn keines gefunden wird. Wenn gesetzt, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst, falls das Objekt kein `<caption>` darstellt. Wird ein korrektes Objekt übergeben, wird es als erstes Kind dieses Elements in den Baum eingefügt und das erste `<caption>`, das ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das das erste {{HTMLElement("thead")}} darstellt, das ein Kind des Elements ist, oder `null`, wenn keines gefunden wird. Wenn gesetzt, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst, falls das Objekt kein `<thead>` darstellt. Wird ein korrektes Objekt übergeben, wird es im Baum unmittelbar vor dem ersten Element eingefügt, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist, und das erste `<thead>`, das ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das das erste {{HTMLElement("tfoot")}} darstellt, das ein Kind des Elements ist, oder `null`, wenn keines gefunden wird. Wenn gesetzt, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst, falls das Objekt kein `<tfoot>` darstellt. Wird ein korrektes Objekt übergeben, wird es im Baum unmittelbar vor dem ersten Element eingefügt, das weder ein {{HTMLElement("caption")}}, ein {{HTMLElement("colgroup")}} noch ein {{HTMLElement("thead")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist, und das erste `<tfoot>`, das ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.rows`](/de/docs/Web/API/HTMLTableElement/rows) {{ReadOnlyInline}}
  - : Gibt eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Zeilen des Elements enthält, d.h. alle {{HTMLElement("tr")}}, die ein Kind des Elements sind oder ein Kind eines seiner {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Kinder. Die Reihenfolgen der Zeilen in einem `<thead>` erscheinen zuerst in der Baumreihenfolge, und diese in einem `<tbody>` zuletzt, ebenfalls in der Baumreihenfolge. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.
- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies) {{ReadOnlyInline}}
  - : Gibt eine lebende [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle {{HTMLElement("tbody")}} des Elements enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

### Veraltete Eigenschaften

> [!WARNING]
> Die folgenden Eigenschaften sind veraltet. Sie sollten diese vermeiden.

- [`HTMLTableElement.align`](/de/docs/Web/API/HTMLTableElement/align) {{deprecated_inline}}
  - : Ein String, der einen enumerierten Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/table#align) Attribut wiedergibt. Er gibt die Ausrichtung des Inhalts des Elements im Verhältnis zum umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableElement.bgColor`](/de/docs/Web/API/HTMLTableElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er gibt das veraltete [`bgColor`](/de/docs/Web/HTML/Reference/Elements/table#bgcolor) Attribut wieder.
- [`HTMLTableElement.border`](/de/docs/Web/API/HTMLTableElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des Rahmens der Tabelle enthält. Er gibt das veraltete [`border`](/de/docs/Web/HTML/Reference/Elements/table#border) Attribut wieder.
- [`HTMLTableElement.cellPadding`](/de/docs/Web/API/HTMLTableElement/cellPadding) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des horizontalen und vertikalen Abstands zwischen Zellinhalt und Zellrändern enthält. Er gibt das veraltete [`cellpadding`](/de/docs/Web/HTML/Reference/Elements/table#cellpadding) Attribut wieder.
- [`HTMLTableElement.cellSpacing`](/de/docs/Web/API/HTMLTableElement/cellSpacing) {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des horizontalen und vertikalen Abstands zwischen Zellen enthält. Er gibt das veraltete [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing) Attribut wieder.
- [`HTMLTableElement.frame`](/de/docs/Web/API/HTMLTableElement/frame) {{deprecated_inline}}
  - : Ein String, der den Typ der äußeren Ränder der Tabelle enthält. Er gibt das veraltete [`frame`](/de/docs/Web/HTML/Reference/Elements/table#frame) Attribut wieder und kann einen der folgenden Werte annehmen: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"` oder `"border"`.
- [`HTMLTableElement.rules`](/de/docs/Web/API/HTMLTableElement/rules) {{deprecated_inline}}
  - : Ein String, der den Typ der inneren Ränder der Tabelle enthält. Er gibt das veraltete [`rules`](/de/docs/Web/HTML/Reference/Elements/table#rules) Attribut wieder und kann einen der folgenden Werte annehmen: `"none"`, `"groups"`, `"rows"`, `"cols"` oder `"all"`.
- [`HTMLTableElement.summary`](/de/docs/Web/API/HTMLTableElement/summary) {{deprecated_inline}}
  - : Ein String, der eine Beschreibung des Zwecks oder der Struktur der Tabelle enthält. Er gibt das veraltete [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary) Attribut wieder.
- [`HTMLTableElement.width`](/de/docs/Web/API/HTMLTableElement/width) {{deprecated_inline}}
  - : Ein String, der die Länge in Pixeln oder in Prozent der gewünschten Breite der gesamten Tabelle enthält. Er gibt das veraltete [`width`](/de/docs/Web/HTML/Reference/Elements/table#width) Attribut wieder.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das das erste {{HTMLElement("thead")}} darstellt, das ein Kind des Elements ist. Wenn keines gefunden wird, wird ein neues erstellt und im Baum unmittelbar vor dem ersten Element eingefügt, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist.
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
  - : Entfernt das erste {{HTMLElement("thead")}}, das ein Kind des Elements ist.
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das das erste {{HTMLElement("tfoot")}} darstellt, das ein Kind des Elements ist. Wenn keines gefunden wird, wird ein neues erstellt und im Baum als letztes Kind eingefügt.
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
  - : Entfernt das erste {{HTMLElement("tfoot")}}, das ein Kind des Elements ist.
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das ein neues {{HTMLElement("tbody")}} darstellt, das ein Kind des Elements ist. Es wird im Baum nach dem letzten {{HTMLElement("tbody")}} Element eingefügt, oder als letztes Kind, wenn kein solches Element vorhanden ist.
- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
  - : Gibt ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) zurück, das das erste {{HTMLElement("caption")}} darstellt, das ein Kind des Elements ist. Wenn keines gefunden wird, wird ein neues erstellt und im Baum als erstes Kind des {{HTMLElement("table")}} Elements eingefügt.
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
  - : Entfernt das erste {{HTMLElement("caption")}}, das ein Kind des Elements ist.
- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile der Tabelle darstellt. Es wird in die Zeilen-Sammlung sofort vor dem {{HTMLElement("tr")}} Element an der angegebenen `Index`-Position eingefügt. Bei Bedarf wird ein {{HTMLElement("tbody")}} erstellt. Wenn der `Index` `-1` ist, wird die neue Zeile an das Ende der Sammlung angehängt. Wenn der `Index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableElement.deleteRow()`](/de/docs/Web/API/HTMLTableElement/deleteRow)
  - : Entfernt die der angegebenen `Index`-Position entsprechende Zeile. Wenn der `Index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird eine [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Beispiele

### Verwendung der DOM-Tabellenschnittstelle

Die `HTMLTableElement` Schnittstelle bietet einige bequeme Methoden zum Erstellen und Manipulieren von Tabellen. Zwei häufig verwendete Methoden sind [`HTMLTableElement.insertRow`](/de/docs/Web/API/HTMLTableElement/insertRow) und [`HTMLTableRowElement.insertCell`](/de/docs/Web/API/HTMLTableRowElement/insertCell).

Um eine Zeile und einige Zellen zu einer bestehenden Tabelle hinzuzufügen:

```html
<table id="table0">
  <tbody>
    <tr>
      <td>Row 0 Cell 0</td>
      <td>Row 0 Cell 1</td>
    </tr>
  </tbody>
</table>
```

```js
const table = document.getElementById("table0");
const row = table.insertRow(-1);

for (let i = 0; i < 2; i++) {
  const cell = row.insertCell(-1);
  const text = `Row ${row.rowIndex} Cell ${i}`;
  cell.appendChild(document.createTextNode(text));
}
```

{{EmbedLiveSample("using_the_dom_table_interface", "", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("table")}}.
