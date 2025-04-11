---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Das **`HTMLTableElement`** Interface bietet spezielle Eigenschaften und Methoden (über die reguläre [`HTMLElement`](/de/docs/Web/API/HTMLElement) Objekt-Schnittstelle hinaus, die es ebenfalls durch Vererbung zur Verfügung hat) zur Manipulation des Layouts und der Darstellung von Tabellen in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
  - : Ein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement), das die erste {{HTMLElement("caption")}} repräsentiert, die ein Kind des Elements ist, oder `null`, wenn keine gefunden wird. Wird ein Wert gesetzt und es handelt sich nicht um ein `<caption>`, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst. Wenn ein korrektes Objekt übergeben wird, wird es als erstes Kind dieses Elements in den Baum eingefügt und die erste `<caption>`, die ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das die erste {{HTMLElement("thead")}} repräsentiert, die ein Kind des Elements ist, oder `null`, wenn keine gefunden wird. Wird ein Wert gesetzt und es handelt sich nicht um ein `<thead>`, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst. Wenn ein korrektes Objekt übergeben wird, wird es im Baum direkt vor dem ersten Element eingefügt, das weder eine {{HTMLElement("caption")}}, noch eine {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist, und die erste `<thead>`, die ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das die erste {{HTMLElement("tfoot")}} repräsentiert, die ein Kind des Elements ist, oder `null`, wenn keine gefunden wird. Wird ein Wert gesetzt und es handelt sich nicht um ein `<tfoot>`, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Namen `HierarchyRequestError` ausgelöst. Wenn ein korrektes Objekt übergeben wird, wird es im Baum direkt vor dem ersten Element eingefügt, das weder eine {{HTMLElement("caption")}}, noch eine {{HTMLElement("colgroup")}}, noch eine {{HTMLElement("thead")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist, und die erste `<tfoot>`, die ein Kind dieses Elements ist, wird aus dem Baum entfernt, falls vorhanden.
- [`HTMLTableElement.rows`](/de/docs/Web/API/HTMLTableElement/rows) {{ReadOnlyInline}}
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Zeilen des Elements enthält, d.h. alle {{HTMLElement("tr")}}, die ein Kind des Elements sind, oder ein Kind eines seiner {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} Kinder. Die Zeilenmitglieder eines `<thead>` erscheinen zuerst in Baumordnung und die Mitglieder eines `<tbody>` zuletzt, ebenfalls in Baumordnung. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.
- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies) {{ReadOnlyInline}}
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle {{HTMLElement("tbody")}} des Elements enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

### Veraltete Eigenschaften

> [!WARNING]
> Die folgenden Eigenschaften sind veraltet. Sie sollten deren Verwendung vermeiden.

- [`HTMLTableElement.align`](/de/docs/Web/API/HTMLTableElement/align) {{deprecated_inline}}
  - : Ein String, der einen aufzählbaren Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/table#align) Attribut widerspiegelt. Er gibt die Ausrichtung des Inhalts des Elements im Verhältnis zum umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableElement.bgColor`](/de/docs/Web/API/HTMLTableElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Reference/Elements/table#bgcolor) Attribut wider.
- [`HTMLTableElement.border`](/de/docs/Web/API/HTMLTableElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite des Rahmens der Tabelle in Pixeln enthält. Er spiegelt das veraltete [`border`](/de/docs/Web/HTML/Reference/Elements/table#border) Attribut wider.
- [`HTMLTableElement.cellPadding`](/de/docs/Web/API/HTMLTableElement/cellPadding) {{deprecated_inline}}
  - : Ein String, der die Breite des horizontalen und vertikalen Abstands zwischen Zellinhalten und Zellgrenzen in Pixeln enthält. Er spiegelt das veraltete [`cellpadding`](/de/docs/Web/HTML/Reference/Elements/table#cellpadding) Attribut wider.
- [`HTMLTableElement.cellSpacing`](/de/docs/Web/API/HTMLTableElement/cellSpacing) {{deprecated_inline}}
  - : Ein String, der die Breite des horizontalen und vertikalen Abstands zwischen Zellen in Pixeln enthält. Er spiegelt das veraltete [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing) Attribut wider.
- [`HTMLTableElement.frame`](/de/docs/Web/API/HTMLTableElement/frame) {{deprecated_inline}}
  - : Ein String, der die Art der äußeren Rahmen der Tabelle enthält. Er spiegelt das veraltete [`frame`](/de/docs/Web/HTML/Reference/Elements/table#frame) Attribut wider und kann einen der folgenden Werte annehmen: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"` oder `"border"`.
- [`HTMLTableElement.rules`](/de/docs/Web/API/HTMLTableElement/rules) {{deprecated_inline}}
  - : Ein String, der die Art der inneren Rahmen der Tabelle enthält. Er spiegelt das veraltete [`rules`](/de/docs/Web/HTML/Reference/Elements/table#rules) Attribut wider und kann einen der folgenden Werte annehmen: `"none"`, `"groups"`, `"rows"`, `"cols"` oder `"all"`.
- [`HTMLTableElement.summary`](/de/docs/Web/API/HTMLTableElement/summary) {{deprecated_inline}}
  - : Ein String, der eine Beschreibung des Zwecks oder der Struktur der Tabelle enthält. Er spiegelt das veraltete [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary) Attribut wider.
- [`HTMLTableElement.width`](/de/docs/Web/API/HTMLTableElement/width) {{deprecated_inline}}
  - : Ein String, der die Länge in Pixeln oder in Prozent der gewünschten Breite der gesamten Tabelle enthält. Er spiegelt das veraltete [`width`](/de/docs/Web/HTML/Reference/Elements/table#width) Attribut wider.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das die erste {{HTMLElement("thead")}} repräsentiert, die ein Kind des Elements ist. Wenn keine gefunden wird, wird eine neue erstellt und im Baum direkt vor dem ersten Element eingefügt, das weder eine {{HTMLElement("caption")}}, noch eine {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist.
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
  - : Entfernt die erste {{HTMLElement("thead")}}, die ein Kind des Elements ist.
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das die erste {{HTMLElement("tfoot")}} repräsentiert, die ein Kind des Elements ist. Wenn keine gefunden wird, wird eine neue erstellt und als letztes Kind in den Baum eingefügt.
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
  - : Entfernt die erste {{HTMLElement("tfoot")}}, die ein Kind des Elements ist.
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
  - : Gibt ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) zurück, das ein neues {{HTMLElement("tbody")}} darstellt, das ein Kind des Elements ist. Es wird in den Baum nach dem letzten Element eingefügt, das eine {{HTMLElement("tbody")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist.
- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
  - : Gibt ein [`HTMLElement`](/de/docs/Web/API/HTMLElement) zurück, das die erste {{HTMLElement("caption")}} repräsentiert, die ein Kind des Elements ist. Wenn keine gefunden wird, wird eine neue erstellt und im Baum als erstes Kind des {{HTMLElement("table")}} Elements eingefügt.
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
  - : Entfernt die erste {{HTMLElement("caption")}}, die ein Kind des Elements ist.
- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
  - : Gibt ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement) zurück, das eine neue Zeile der Tabelle repräsentiert. Es wird in die Zeilensammlung unmittelbar vor das {{HTMLElement("tr")}} Element an der angegebenen `index` Position eingefügt. Falls nötig, wird ein {{HTMLElement("tbody")}} erstellt. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Ist der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.
- [`HTMLTableElement.deleteRow()`](/de/docs/Web/API/HTMLTableElement/deleteRow)
  - : Entfernt die Zeile, die dem angegebenen `index` Parameter entspricht. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das dieses Interface implementiert: {{HTMLElement("table")}}.
