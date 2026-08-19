---
title: "HTMLTableSectionElement: deleteRow() Methode"
short-title: deleteRow()
slug: Web/API/HTMLTableSectionElement/deleteRow
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`deleteRow()`**-Methode der [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Schnittstelle entfernt eine bestimmte Zeile ({{HTMLElement("tr")}}) aus dem angegebenen Tabellensektionselement ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} oder {{HTMLElement("tbody")}}).

## Syntax

```js-nolint
deleteRow(index)
```

### Parameter

- `index`
  - : Der Index der zu entfernenden Zeile in der [`rows`](/de/docs/Web/API/HTMLTableSectionElement/rows)-Sammlung. Wenn `index` `-1` ist, wird die letzte Zeile entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer oder gleich der Anzahl der Zeilen ist oder kleiner als `-1`.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen das Hinzufügen und Entfernen von Zeilen im Tabellenkörperbereich; es aktualisiert auch ein {{HTMLElement("output")}}-Element mit der Anzahl der derzeit in der Tabelle vorhandenen Zeilen.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th>Col 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>X</td>
      <td>Y</td>
      <td>Z</td>
    </tr>
  </tbody>
</table>
<button id="add">Add a row</button>
<button id="remove">Remove last row</button>
<div>This table's body has <output>1</output> row(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
}

button {
  margin: 1em 1em 1em 0;
}
```

### JavaScript

```js
// Obtain relevant interface elements
const bodySection = document.querySelectorAll("tbody")[0];
const rows = bodySection.rows; // The collection is live, therefore always up-to-date
const rowNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateRowNumber() {
  rowNumberDisplay.textContent = rows.length;
}

addButton.addEventListener("click", () => {
  // Add a new row at the end of the body
  const newRow = bodySection.insertRow();

  // Add cells inside the new row
  ["A", "B", "C"].forEach(
    (elt) => (newRow.insertCell().textContent = `${elt}${rows.length}`),
  );

  // Update the row counter
  updateRowNumber();
});

removeButton.addEventListener("click", () => {
  // Delete the row from the body
  bodySection.deleteRow(-1);

  // Update the row counter
  updateRowNumber();
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
- [`HTMLTableElement.deleteRow()`](/de/docs/Web/API/HTMLTableElement/deleteRow)
- [`HTMLTableSectionElement.insertRow()`](/de/docs/Web/API/HTMLTableSectionElement/insertRow)
