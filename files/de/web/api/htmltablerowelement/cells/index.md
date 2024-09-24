---
title: "HTMLTableRowElement: cells-Eigenschaft"
short-title: cells
slug: Web/API/HTMLTableRowElement/cells
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{ APIRef("HTML DOM") }}

Die **`cells`** schreibgeschützte Eigenschaft der {{domxref("HTMLTableRowElement")}}-Schnittstelle gibt eine Live-{{domxref("HTMLCollection")}} zurück, die die Zellen in der Zeile enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zellen hinzugefügt oder entfernt werden.

## Wert

Eine Live-{{domxref("HTMLCollection")}} von {{domxref("HTMLTableCellElement")}}-Objekten.

## Beispiele

Dieses Beispiel verwendet `HTMLTableRowElement.cells`, um die Anzahl der Zellen in einer Zeile anzuzeigen.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>C1</th>
      <th>C2</th>
      <th>C3</th>
      <th>C4</th>
      <th>C5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </tr>
  </tbody>
</table>

<button id="add">Add a cell</button>
<button id="remove">Remove last cell</button>
<div>This first row has <output>2</output> cell(s).</div>
```

```css hidden
table {
  border-collapse: collapse;
}

th,
td,
table {
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
const row = bodySection.rows[0]; // Select the first row of the body section
const cells = row.cells; // The collection is live, therefore always up-to-date
const cellNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateCellNumber() {
  cellNumberDisplay.textContent = cells.length;
}

addButton.addEventListener("click", () => {
  // Add a new cell at the end of the first row
  const newCell = row.insertCell();
  newCell.textContent = `Cell ${cells.length}`;

  // Update the row counter
  updateCellNumber();
});

removeButton.addEventListener("click", () => {
  // Delete the row from the body
  row.deleteCell(-1);

  // Update the row counter
  updateCellNumber();
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTableRowElement.insertCell()")}}
- {{domxref("HTMLTableRowElement.deleteCell()")}}
