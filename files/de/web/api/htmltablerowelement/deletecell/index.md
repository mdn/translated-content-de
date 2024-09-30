---
title: "HTMLTableRowElement: deleteCell() Methode"
short-title: deleteCell()
slug: Web/API/HTMLTableRowElement/deleteCell
l10n:
  sourceCommit: 712156520cf3aaca9f9b37d9a82831063eb9c87b
---

{{APIRef("HTML DOM")}}

Die **`deleteCell()`**-Methode des [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Interfaces entfernt eine bestimmte Tabellenzelle aus einer gegebenen {{htmlelement("tr")}}.

## Syntax

```js-nolint
deleteCell(index)
```

### Parameter

- `index`
  - : Der Zellindex der zu entfernenden Zelle. Wenn `index` `-1` ist oder gleich der Anzahl der Zellen, wird die letzte Zelle der Zeile entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer ist als die Anzahl der Zellen oder kleiner als `-1`.

## Beispiele

Dieses Beispiel verwendet [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell), um einer Zeile eine neue Zelle hinzuzufügen.

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

- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
- Das HTML-Element, das Zellen darstellt: [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)
