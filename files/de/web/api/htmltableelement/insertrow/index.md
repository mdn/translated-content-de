---
title: "HTMLTableElement: insertRow() Methode"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
l10n:
  sourceCommit: cbe37032c94ef804f24e6e37624102fa31e861c7
---

{{APIRef("HTML DOM")}}

Die **`insertRow()`** Methode des {{domxref("HTMLTableElement")}} Interfaces fügt eine neue Zeile
({{HtmlElement("tr")}}) in eine gegebene {{HtmlElement("table")}} ein und gibt eine Referenz auf
die neue Zeile zurück.

Wenn eine Tabelle mehrere {{HtmlElement("tbody")}} Elemente hat, wird standardmäßig die neue Zeile
in das letzte `<tbody>` eingefügt.
Um die Zeile in einen bestimmten Abschnitt einzufügen, verwenden Sie {{domxref("HTMLTableSectionElement.insertRow()")}}.

> **Note:** `insertRow()` fügt die Zeile direkt in die
> Tabelle ein. Die Zeile muss nicht separat angehängt werden, wie dies der Fall wäre, wenn
> {{domxref("Document.createElement()")}} verwendet worden wäre, um das neue
> `<tr>` Element zu erstellen.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

{{domxref("HTMLTableElement")}} ist eine Referenz auf ein HTML {{HtmlElement("table")}}
Element.

### Parameter

- `index` {{optional_inline}}
  - : Der Zeilenindex der neuen Zeile. Wenn `index` `-1` ist oder
    der Anzahl der Zeilen entspricht, wird die Zeile als letzte Zeile angehängt.
    Wenn `index` weggelassen wird, ist der Standardwert `-1`.

### Rückgabewert

Ein {{domxref("HTMLTableRowElement")}}, das auf die neue
Zeile verweist.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `index` größer als die Anzahl der Zeilen ist.

## Beispiele

Dieses Beispiel verwendet `insertRow(-1)`, um eine neue Zeile an eine Tabelle anzuhängen.

Wir verwenden dann {{domxref("HTMLTableRowElement.insertCell()")}}, um eine neue Zelle in der
neuen Zeile einzufügen. (Um gültiges HTML zu sein, muss ein `<tr>` mindestens ein
`<td>` Element haben.) Schließlich fügen wir der Zelle etwas Text hinzu, indem wir
{{domxref("Document.createTextNode()")}} und {{domxref("Node.appendChild()")}} verwenden.

### HTML

```html
<table id="my-table">
  <tr>
    <td>Row 1</td>
  </tr>
  <tr>
    <td>Row 2</td>
  </tr>
  <tr>
    <td>Row 3</td>
  </tr>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Get a reference to the table
  let tableRef = document.getElementById(tableID);

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode("New bottom row");
  newCell.appendChild(newText);
}

// Call addRow() with the table's ID
addRow("my-table");
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTableRowElement.insertCell()")}}
- {{domxref("HTMLTableSectionElement.insertRow()")}}
