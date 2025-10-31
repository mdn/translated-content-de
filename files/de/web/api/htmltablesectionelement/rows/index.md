---
title: "HTMLTableSectionElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableSectionElement/rows
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die **`rows`**-Eigenschaft der Schnittstelle [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) gibt eine schreibgeschützte live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die die Zeilen im Abschnitt enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.

## Wert

Eine live [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) von [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Objekten.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen das Hinzufügen und Entfernen von Zeilen im Tabellenkörperabschnitt. Außerdem wird ein {{HTMLElement("output")}}-Element mit der aktuellen Anzahl der Zeilen in der Tabelle aktualisiert.

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

- {{cssxref("text-align")}}
