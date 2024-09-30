---
title: "HTMLTableElement: insertRow()-Methode"
short-title: insertRow()
slug: Web/API/HTMLTableElement/insertRow
l10n:
  sourceCommit: cbe37032c94ef804f24e6e37624102fa31e861c7
---

{{APIRef("HTML DOM")}}

Die **`insertRow()`**-Methode des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces fügt eine neue Zeile
({{HtmlElement("tr")}}) in eine angegebene {{HtmlElement("table")}} ein und gibt eine Referenz auf
die neue Zeile zurück.

Wenn eine Tabelle mehrere {{HtmlElement("tbody")}}-Elemente hat, wird die neue Zeile standardmäßig in das letzte `<tbody>` eingefügt.
Um die Zeile in einen bestimmten Abschnitt einzufügen, verwenden Sie [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow).

> **Note:** `insertRow()` fügt die Zeile direkt in die
> Tabelle ein. Die Zeile muss nicht separat angehängt werden, wie es der Fall wäre, wenn
> [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue
> `<tr>`-Element zu erstellen.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

[`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement) bezieht sich auf ein HTML-{{HtmlElement("table")}}-Element.

### Parameter

- `index` {{optional_inline}}
  - : Der Zeilenindex der neuen Zeile. Wenn `index` `-1` oder gleich der Anzahl der Zeilen ist, wird die Zeile als letzte Zeile angefügt.
    Wenn `index` weggelassen wird, ist der Standardwert `-1`.

### Rückgabewert

Ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement), das auf die neue Zeile verweist.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer als die Anzahl der Zeilen ist.

## Beispiele

Dieses Beispiel verwendet `insertRow(-1)`, um eine neue Zeile in eine Tabelle einzufügen.

Wir verwenden dann [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell), um eine neue Zelle in der
neuen Zeile einzufügen. (Um gültiges HTML zu sein, muss ein `<tr>`-Element mindestens ein
`<td>`-Element haben.) Schließlich fügen wir der Zelle mit
[`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) Text hinzu.

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

- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
