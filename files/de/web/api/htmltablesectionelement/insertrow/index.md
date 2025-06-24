---
title: "HTMLTableSectionElement: insertRow() Methode"
short-title: insertRow()
slug: Web/API/HTMLTableSectionElement/insertRow
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("HTML DOM")}}

Die **`insertRow()`**-Methode des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)-Interfaces fügt eine neue Zeile ({{HtmlElement("tr")}}) in das angegebene Tabellenabschnittselement ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} oder {{HTMLElement("tbody")}}) ein und gibt dann eine Referenz auf diese neue Zeile zurück.

> [!NOTE] > `insertRow()` fügt die Zeile direkt in den Abschnitt ein. Die Zeile muss nicht separat angehängt werden, wie es der Fall wäre, wenn
> [`Document.createElement()`](/de/docs/Web/API/Document/createElement) verwendet worden wäre, um das neue `<tr>`-Element zu erstellen.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

### Parameter

- `index` {{optional_inline}}
  - : Der Zeilenindex der neuen Zeile. Wenn `index` `-1` oder gleich der Anzahl der Zeilen ist, wird die Zeile als letzte Zeile angehängt.
    Wenn `index` weggelassen wird, ist der Standardwert `-1`.

### Rückgabewert

Ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement), das auf die neue Zeile verweist.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer als die Anzahl der Zeilen oder kleiner als `-1` ist.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen das Hinzufügen und Entfernen von Zeilen im Tabellenkörper; außerdem wird ein {{HTMLElement("output")}}-Element mit der Anzahl der aktuell in der Tabelle vorhandenen Zeilen aktualisiert.

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

- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
