---
title: "HTMLTableRowElement: Methode insertCell()"
short-title: insertCell()
slug: Web/API/HTMLTableRowElement/insertCell
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`insertCell()`**-Methode des [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Interfaces erstellt ein {{HTMLElement("td")}}-Element, fügt es an der angegebenen Position in das gegebene {{HTMLElement("tr")}}-Element ein und gibt es zurück.

Diese Methode erstellt und fügt das Element direkt ein, ohne separate Aufrufe von Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement), [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) zu erfordern. Sie können jedoch `insertCell()` nicht verwenden, um ein neues `<th>`-Element zu erstellen.

## Syntax

```js-nolint
insertCell()
insertCell(index)
```

### Parameter

- `index` {{optional_inline}}
  - : Der Index der neuen Zelle in der [`cells`](/de/docs/Web/API/HTMLTableRowElement/cells)-Sammlung. Wenn `index` `-1` oder gleich der Anzahl der Zellen ist, wird die Zelle als letzte Zelle in der Zeile angehängt. Wenn `index` weggelassen wird, ist der Standardwert `-1`.

### Rückgabewert

Ein [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement), das die neue Zelle referenziert.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer als die Anzahl der Zellen oder kleiner als `-1` ist.

## Beispiele

Dieses Beispiel verwendet `HTMLTableRowElement.insertCell()`, um eine neue Zelle an eine Zeile anzuhängen.

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
- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
- Das HTML-Element, das Zellen darstellt: [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)
