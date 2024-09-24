---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement`**-Schnittstelle bietet spezielle Eigenschaften und Methoden (zusätzlich zur regulären {{DOMxRef("HTMLElement")}}-Objektschnittstelle, die auch durch Vererbung verfügbar ist) zur Manipulation des Layouts und der Darstellung von Tabellen in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.caption")}}
  - : Ein {{DOMxRef("HTMLTableCaptionElement")}}, das die erste {{HTMLElement("caption")}} repräsentiert, die ein Kind des Elements ist, oder `null`, wenn keine gefunden wird. Beim Setzen, wenn das Objekt keine `<caption>` repräsentiert, wird ein {{DOMxRef("DOMException")}} mit dem Namen `HierarchyRequestError` ausgelöst. Wenn ein korrektes Objekt angegeben wird, wird es im Baum als erstes Kind dieses Elements eingefügt und die erste `<caption>`, die ein Kind dieses Elements ist, wird aus dem Baum entfernt, wenn eine vorhanden ist.
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : Ein {{DOMxRef("HTMLTableSectionElement")}}, das die erste {{HTMLElement("thead")}} repräsentiert, die ein Kind des Elements ist, oder `null`, wenn keine gefunden wird. Beim Setzen, wenn das Objekt keine `<thead>` repräsentiert, wird ein {{DOMxRef("DOMException")}} mit dem Namen `HierarchyRequestError` ausgelöst. Wenn ein korrektes Objekt angegeben wird, wird es im Baum unmittelbar vor dem ersten Element eingefügt, das weder eine {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn es kein solches Element gibt, und die erste `<thead>`, die ein Kind dieses Elements ist, wird aus dem Baum entfernt, wenn eine vorhanden ist.
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : Ein {{DOMxRef("HTMLTableSectionElement")}}, das die erste {{HTMLElement("tfoot")}} repräsentiert, die ein Kind des Elements ist, oder `null`, wenn keine gefunden wird. Beim Setzen, wenn das Objekt keine `<tfoot>` repräsentiert, wird ein {{DOMxRef("DOMException")}} mit dem Namen `HierarchyRequestError` ausgelöst. Wenn ein korrektes Objekt angegeben wird, wird es im Baum unmittelbar vor dem ersten Element eingefügt, das weder eine {{HTMLElement("caption")}}, noch ein {{HTMLElement("colgroup")}}, noch eine {{HTMLElement("thead")}} ist, oder als letztes Kind, wenn es kein solches Element gibt, und die erste `<tfoot>`, die ein Kind dieses Elements ist, wird aus dem Baum entfernt, wenn eine vorhanden ist.
- {{DOMxRef("HTMLTableElement.rows")}} {{ReadOnlyInline}}
  - : Gibt eine Live-{{DOMxRef("HTMLCollection")}} zurück, die alle Zeilen des Elements enthält, also alle {{HTMLElement("tr")}}, die ein Kind des Elements sind oder ein Kind eines seiner {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}}-Kinder. Die Reihen der Mitglieder eines `<thead>` erscheinen zuerst in Baumreihenfolge und die Mitglieder eines `<tbody>` zuletzt, ebenfalls in Baumreihenfolge. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.
- {{DOMxRef("HTMLTableElement.tBodies")}} {{ReadOnlyInline}}
  - : Gibt eine Live-{{DOMxRef("HTMLCollection")}} zurück, die alle {{HTMLElement("tbody")}} des Elements enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

### Veraltete Eigenschaften

> [!WARNING]
> Die folgenden Eigenschaften sind veraltet. Sie sollten diese vermeiden.

- {{DOMxRef("HTMLTableElement.align")}} {{deprecated_inline}}
  - : Ein String, der einen aufgelisteten Wert enthält, der das [`align`](/de/docs/Web/HTML/Element/table#align)-Attribut widerspiegelt. Er gibt die Ausrichtung der Inhalte des Elements in Bezug auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- {{DOMxRef("HTMLTableElement.bgColor")}} {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Er spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Element/table#bgcolor)-Attribut wider.
- {{DOMxRef("HTMLTableElement.border")}} {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des Rahmens der Tabelle enthält. Er spiegelt das veraltete [`border`](/de/docs/Web/HTML/Element/table#border)-Attribut wider.
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des horizontalen und vertikalen Abstands zwischen Zellinhalt und Zellrändern enthält. Er spiegelt das veraltete [`cellpadding`](/de/docs/Web/HTML/Element/table#cellpadding)-Attribut wider.
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{deprecated_inline}}
  - : Ein String, der die Breite in Pixeln des horizontalen und vertikalen Abstands zwischen Zellen enthält. Er spiegelt das veraltete [`cellspacing`](/de/docs/Web/HTML/Element/table#cellspacing)-Attribut wider.
- {{DOMxRef("HTMLTableElement.frame")}} {{deprecated_inline}}
  - : Ein String, der die Art der äußeren Rahmen der Tabelle enthält. Er spiegelt das veraltete [`frame`](/de/docs/Web/HTML/Element/table#frame)-Attribut wider und kann einen der folgenden Werte annehmen: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"` oder `"border"`.
- {{DOMxRef("HTMLTableElement.rules")}} {{deprecated_inline}}
  - : Ein String, der die Art der inneren Rahmen der Tabelle enthält. Er spiegelt das veraltete [`rules`](/de/docs/Web/HTML/Element/table#rules)-Attribut wider und kann einen der folgenden Werte annehmen: `"none"`, `"groups"`, `"rows"`, `"cols"` oder `"all"`.
- {{DOMxRef("HTMLTableElement.summary")}} {{deprecated_inline}}
  - : Ein String, der eine Beschreibung des Zwecks oder der Struktur der Tabelle enthält. Er spiegelt das veraltete [`summary`](/de/docs/Web/HTML/Element/table#summary)-Attribut wider.
- {{DOMxRef("HTMLTableElement.width")}} {{deprecated_inline}}
  - : Ein String, der die Länge in Pixeln oder in Prozent der gewünschten Breite der gesamten Tabelle enthält. Er spiegelt das veraltete [`width`](/de/docs/Web/HTML/Element/table#width)-Attribut wider.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : Gibt ein {{DOMxRef("HTMLTableSectionElement")}} zurück, das die erste {{HTMLElement("thead")}} repräsentiert, die ein Kind des Elements ist. Wenn keine gefunden wird, wird eine neue erstellt und im Baum unmittelbar vor dem ersten Element eingefügt, das weder eine {{HTMLElement("caption")}}, noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn es kein solches Element gibt.
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : Entfernt die erste {{HTMLElement("thead")}}, die ein Kind des Elements ist.
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : Gibt ein {{DOMxRef("HTMLTableSectionElement")}} zurück, das die erste {{HTMLElement("tfoot")}} repräsentiert, die ein Kind des Elements ist. Wenn keine gefunden wird, wird eine neue erstellt und im Baum als letztes Kind eingefügt.
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : Entfernt die erste {{HTMLElement("tfoot")}}, die ein Kind des Elements ist.
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : Gibt ein {{DOMxRef("HTMLTableSectionElement")}} zurück, das ein neues {{HTMLElement("tbody")}} repräsentiert, das ein Kind des Elements ist. Es wird im Baum nach dem letzten Element eingefügt, das ein {{HTMLElement("tbody")}} ist, oder als letztes Kind, wenn es kein solches Element gibt.
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : Gibt ein {{DOMxRef("HTMLElement")}} zurück, das die erste {{HTMLElement("caption")}} repräsentiert, die ein Kind des Elements ist. Wenn keine gefunden wird, wird eine neue erstellt und im Baum als erstes Kind des {{HTMLElement("table")}}-Elements eingefügt.
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : Entfernt die erste {{HTMLElement("caption")}}, die ein Kind des Elements ist.
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : Gibt ein {{DOMxRef("HTMLTableRowElement")}} zurück, das eine neue Zeile der Tabelle repräsentiert. Sie wird in die Reihen-Sammlung unmittelbar vor dem {{HTMLElement("tr")}}-Element an der angegebenen `index`-Position eingefügt. Falls erforderlich, wird ein {{HTMLElement("tbody")}} erstellt. Wenn der `index` `-1` ist, wird die neue Zeile an die Sammlung angehängt. Wenn der `index` kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein {{DOMxRef("DOMException")}} mit dem Wert `IndexSizeError` ausgelöst.
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : Entfernt die Zeile, die dem angegebenen `index`-Parameter entspricht. Wenn der `index`-Wert `-1` ist, wird die letzte Zeile entfernt; wenn er kleiner als `-1` oder größer als die Anzahl der Zeilen in der Sammlung ist, wird ein {{DOMxRef("DOMException")}} mit dem Wert `IndexSizeError` ausgelöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das HTML-Element, das diese Schnittstelle implementiert: {{HTMLElement("table")}}.
