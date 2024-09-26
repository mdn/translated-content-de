---
title: "HTMLTableSectionElement: deleteRow()-Methode"
short-title: deleteRow()
slug: Web/API/HTMLTableSectionElement/deleteRow
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{APIRef("HTML DOM")}}

Die **`deleteRow()`**-Methode des {{domxref("HTMLTableSectionElement")}}-Interfaces entfernt eine
spezifische Zeile ({{HtmlElement("tr")}}) aus einem gegebenen {{HtmlElement("section")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameter

- `index`
  - : `index` ist ein ganzzahliger Wert, der die zu löschende Zeile darstellt.
    Allerdings kann der spezielle Index `-1` verwendet werden, um die letzte Zeile der
    Sektion zu entfernen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `index` größer oder gleich der Anzahl der verfügbaren Zeilen ist oder ein negativer Wert außer `-1` ist.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen das Hinzufügen und Entfernen von Zeilen aus dem Tabellenkörperbereich; es wird auch ein {{HTMLElement("output")}}-Element mit der Anzahl der derzeit in der Tabelle vorhandenen Zeilen aktualisiert.

### HTML

```html
<table>
  <thead>
    <th>Col 1</th>
    <th>Col 2</th>
    <th>Col 3</th>
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

- {{domxref("HTMLTableElement.deleteRow()")}}