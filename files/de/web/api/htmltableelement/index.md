---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Das **`HTMLTableElement`** Interface bietet spezielle Eigenschaften und Methoden (zusätzlich zu der regulären [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Objektschnittstelle, die es durch Vererbung ebenfalls zur Verfügung hat) zur Manipulation des Layouts und der Präsentation von Tabellen in einem HTML-Dokument.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)._

- [`HTMLTableElement.caption`](/de/docs/Web/API/HTMLTableElement/caption)
  - : Ein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement), das das erste {{HTMLElement("caption")}}-Elementkind der gegebenen {{HTMLElement("table")}} darstellt, oder `null`, wenn kein solches Element existiert. Diese Eigenschaft kann zugewiesen werden, wodurch das vorhandene erste `<caption>`-Elementkind, falls vorhanden, entfernt und der gegebene Wert, falls nicht `null`, als erstes Kind eingefügt wird. Wenn der zugewiesene Wert kein [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement) oder `null` ist, wird eine {{jsxref("TypeError")}} ausgelöst.
- [`HTMLTableElement.tHead`](/de/docs/Web/API/HTMLTableElement/tHead)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das das erste {{HTMLElement("thead")}}-Elementkind der gegebenen {{HTMLElement("table")}} darstellt, oder `null`, wenn kein solches Element existiert. Diese Eigenschaft kann zugewiesen werden, wodurch das vorhandene erste `<thead>`-Elementkind, falls vorhanden, entfernt und der gegebene Wert, falls nicht `null`, unmittelbar vor dem ersten Elementkind eingefügt wird, das weder eine {{HTMLElement("caption")}} noch eine {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn kein solches Element vorhanden ist. Wenn der zugewiesene Wert kein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) oder `null` ist, wird eine {{jsxref("TypeError")}} ausgelöst; andernfalls, wenn es kein {{HTMLElement("thead")}}-Element oder `null` ist, wird eine `HierarchyRequestError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`HTMLTableElement.tFoot`](/de/docs/Web/API/HTMLTableElement/tFoot)
  - : Ein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement), das das erste {{HTMLElement("tfoot")}}-Elementkind der gegebenen {{HTMLElement("table")}} darstellt, oder `null`, wenn kein solches Element existiert. Diese Eigenschaft kann zugewiesen werden, wodurch das vorhandene erste `<tfoot>`-Elementkind, falls vorhanden, entfernt und der gegebene Wert, falls nicht `null`, als letztes Kind eingefügt wird. Wenn der zugewiesene Wert kein [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) oder `null` ist, wird eine {{jsxref("TypeError")}} ausgelöst; andernfalls, wenn es kein {{HTMLElement("tfoot")}}-Element oder `null` ist, wird eine `HierarchyRequestError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst.
- [`HTMLTableElement.rows`](/de/docs/Web/API/HTMLTableElement/rows) {{ReadOnlyInline}}
  - : Gibt eine lebendige [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{HTMLElement("tr")}}-Elemente zurück, die Kind des gegebenen {{HTMLElement("table")}}-Elements oder Kind eines der {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} und {{HTMLElement("tfoot")}} der Tabelle sind. Die Mitglieder des `<thead>` erscheinen zuerst, gefolgt von Mitgliedern des `<tbody>` und der Tabelle selbst, und Mitglieder des `<tfoot>` kommen zuletzt, sortiert nach Baumreihenfolge innerhalb jeder Gruppe. Das zurückgegebene Objekt wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.
- [`HTMLTableElement.tBodies`](/de/docs/Web/API/HTMLTableElement/tBodies) {{ReadOnlyInline}}
  - : Gibt eine lebendige [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) aller {{HTMLElement("tbody")}}-Elementkinder der gegebenen {{HTMLElement("table")}} zurück. Das zurückgegebene Objekt wird automatisch aktualisiert, wenn sich das `HTMLTableElement` ändert.

### Veraltete Eigenschaften

> [!WARNING]
> Die folgenden Eigenschaften sind veraltet. Sie sollten deren Nutzung vermeiden.

- [`HTMLTableElement.align`](/de/docs/Web/API/HTMLTableElement/align) {{deprecated_inline}}
  - : Ein String, der einen Enum-Wert enthält, der das [`align`](/de/docs/Web/HTML/Reference/Elements/table#align)-Attribut widerspiegelt. Es zeigt die Ausrichtung des Inhalts des Elements in Bezug auf den umgebenden Kontext an. Die möglichen Werte sind `"left"`, `"right"` und `"center"`.
- [`HTMLTableElement.bgColor`](/de/docs/Web/API/HTMLTableElement/bgColor) {{deprecated_inline}}
  - : Ein String, der die Hintergrundfarbe der Zellen enthält. Es spiegelt das veraltete [`bgColor`](/de/docs/Web/HTML/Reference/Elements/table#bgcolor)-Attribut wider.
- [`HTMLTableElement.border`](/de/docs/Web/API/HTMLTableElement/border) {{deprecated_inline}}
  - : Ein String, der die Breite der Umrandung der Tabelle in Pixeln enthält. Es spiegelt das veraltete [`border`](/de/docs/Web/HTML/Reference/Elements/table#border)-Attribut wider.
- [`HTMLTableElement.cellPadding`](/de/docs/Web/API/HTMLTableElement/cellPadding) {{deprecated_inline}}
  - : Ein String, der die Breite des horizontalen und vertikalen Abstands zwischen Zelleninhalt und -grenzen in Pixeln enthält. Es spiegelt das veraltete [`cellpadding`](/de/docs/Web/HTML/Reference/Elements/table#cellpadding)-Attribut wider.
- [`HTMLTableElement.cellSpacing`](/de/docs/Web/API/HTMLTableElement/cellSpacing) {{deprecated_inline}}
  - : Ein String, der die Breite des horizontalen und vertikalen Abstands zwischen Zellen in Pixeln enthält. Es spiegelt das veraltete [`cellspacing`](/de/docs/Web/HTML/Reference/Elements/table#cellspacing)-Attribut wider.
- [`HTMLTableElement.frame`](/de/docs/Web/API/HTMLTableElement/frame) {{deprecated_inline}}
  - : Ein String, der den Typ der äußeren Rahmen der Tabelle enthält. Es spiegelt das veraltete [`frame`](/de/docs/Web/HTML/Reference/Elements/table#frame)-Attribut wider und kann einen der folgenden Werte annehmen: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"` oder `"border"`.
- [`HTMLTableElement.rules`](/de/docs/Web/API/HTMLTableElement/rules) {{deprecated_inline}}
  - : Ein String, der den Typ der inneren Rahmen der Tabelle enthält. Es spiegelt das veraltete [`rules`](/de/docs/Web/HTML/Reference/Elements/table#rules)-Attribut wider und kann einen der folgenden Werte annehmen: `"none"`, `"groups"`, `"rows"`, `"cols"` oder `"all"`.
- [`HTMLTableElement.summary`](/de/docs/Web/API/HTMLTableElement/summary) {{deprecated_inline}}
  - : Ein String, der eine Beschreibung des Zwecks oder der Struktur der Tabelle enthält. Es spiegelt das veraltete [`summary`](/de/docs/Web/HTML/Reference/Elements/table#summary)-Attribut wider.
- [`HTMLTableElement.width`](/de/docs/Web/API/HTMLTableElement/width) {{deprecated_inline}}
  - : Ein String, der die Länge in Pixeln oder in Prozent der gewünschten Breite der gesamten Tabelle enthält. Es spiegelt das veraltete [`width`](/de/docs/Web/HTML/Reference/Elements/table#width)-Attribut wider.

## Instanzmethoden

_Erbt Methoden von seinem Elternteil, [`HTMLElement`](/de/docs/Web/API/HTMLElement)_.

- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
  - : Erstellt ein {{HTMLElement("thead")}}-Element, fügt es vor dem ersten Elementkind der gegebenen {{HTMLElement("table")}} ein, das weder ein {{HTMLElement("caption")}} noch ein {{HTMLElement("colgroup")}} ist, oder als letztes Kind, wenn keine solche Einfügestelle gefunden wird, und gibt es zurück. Wenn die Tabelle bereits ein `<thead>`-Elementkind hat, gibt diese Methode das erste solche Kind zurück, ohne eines zu erstellen.
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
  - : Entfernt das erste {{HTMLElement("thead")}}-Elementkind aus einer gegebenen {{HTMLElement("table")}}, falls vorhanden.
- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
  - : Erstellt ein {{HTMLElement("tfoot")}}-Element, fügt es als letztes Kind der gegebenen {{HTMLElement("table")}} ein und gibt es zurück. Wenn die Tabelle bereits ein `<tfoot>`-Elementkind hat, gibt diese Methode das erste solche Kind zurück, ohne eines zu erstellen.
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
  - : Entfernt das erste {{HTMLElement("tfoot")}}-Elementkind aus einer gegebenen {{HTMLElement("table")}}, falls vorhanden.
- [`HTMLTableElement.createTBody()`](/de/docs/Web/API/HTMLTableElement/createTBody)
  - : Erstellt ein {{HTMLElement("tbody")}}-Element, fügt es unmittelbar nach dem letzten `<tbody>`-Elementkind der gegebenen {{HTMLElement("table")}} ein, oder als letztes Kind, wenn kein solches Element vorhanden ist, und gibt es zurück.
- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
  - : Erstellt ein {{HTMLElement("caption")}}-Element, fügt es als erstes Kind der gegebenen {{HTMLElement("table")}} ein, und gibt es zurück. Wenn die Tabelle bereits ein `<caption>`-Elementkind hat, gibt diese Methode das erste solche Kind zurück, ohne eines zu erstellen.
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
  - : Entfernt das erste {{HTMLElement("caption")}}-Elementkind aus einer gegebenen {{HTMLElement("table")}}, falls vorhanden.
- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
  - : Erstellt ein {{HTMLElement("tr")}}-Element, fügt es an der angegebenen Position in der [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Sammlung ein und gibt es zurück. Wenn die `rows`-Sammlung leer ist und die Tabelle auch keine {{HTMLElement("tbody")}}-Elemente hat, wird zuerst ein `<tbody>`-Element erstellt und eingefügt.
- [`HTMLTableElement.deleteRow()`](/de/docs/Web/API/HTMLTableElement/deleteRow)
  - : Entfernt eine bestimmte Zeile ({{HTMLElement("tr")}}) aus einer gegebenen {{HTMLElement("table")}}. Wenn `index` `-1` ist, wird die letzte Zeile entfernt.

## Beispiele

### Nutzung des DOM-Tabellen-Interfaces

Das `HTMLTableElement`-Interface bietet einige praktische Methoden zum Erstellen und Manipulieren von Tabellen. Zwei häufig verwendete Methoden sind [`HTMLTableElement.insertRow`](/de/docs/Web/API/HTMLTableElement/insertRow) und [`HTMLTableRowElement.insertCell`](/de/docs/Web/API/HTMLTableRowElement/insertCell).

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

- Das HTML-Element, welches diese Schnittstelle implementiert: {{HTMLElement("table")}}.
