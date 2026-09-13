---
title: "HTMLTableSectionElement: insertRow() Methode"
short-title: insertRow()
slug: Web/API/HTMLTableSectionElement/insertRow
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`insertRow()`** Methode des [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement) Schnittstelle erstellt ein {{HTMLElement("tr")}}-Element, fügt es an der angegebenen Position im gegebenen Tabelle-Abschnittselement ({{HTMLElement("thead")}}, {{HTMLElement("tfoot")}} oder {{HTMLElement("tbody")}}) ein und gibt es zurück.

Diese Methode erstellt und fügt das Element direkt ein, ohne dass separate Aufrufe zu Methoden wie [`Document.createElement()`](/de/docs/Web/API/Document/createElement), [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) und [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) erforderlich sind.

## Syntax

```js-nolint
insertRow()
insertRow(index)
```

### Parameter

- `index` {{optional_inline}}
  - : Der Index der neuen Zeile in der [`rows`](/de/docs/Web/API/HTMLTableSectionElement/rows) Sammlung. Wenn `index` `-1` ist oder der Anzahl der Zeilen entspricht, wird die Zeile als letzte Zeile angehängt. Wenn `index` weggelassen wird, ist der Standardwert `-1`.

### Rückgabewert

Ein [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement), das auf die neue Zeile verweist.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer ist als die Anzahl der Zeilen oder kleiner als `-1`.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen, Zeilen im Tabellenkörper hinzuzufügen und zu entfernen; dabei wird auch ein {{HTMLElement("output")}}-Element mit der Anzahl der aktuell in der Tabelle vorhandenen Zeilen aktualisiert.

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

- [`HTMLTableRowElement.insertCell()`](/de/docs/Web/API/HTMLTableRowElement/insertCell)
- [`HTMLTableElement.insertRow()`](/de/docs/Web/API/HTMLTableElement/insertRow)
- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
