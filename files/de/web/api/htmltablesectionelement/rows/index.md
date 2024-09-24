---
title: "HTMLTableSectionElement: rows-Eigenschaft"
short-title: rows
slug: Web/API/HTMLTableSectionElement/rows
l10n:
  sourceCommit: 1197521ff42256b9d298144330cfd5b6e0d98c33
---

{{APIRef("HTML DOM")}}

Die **`rows`** schreibgeschützte Eigenschaft des {{domxref("HTMLTableSectionElement")}}-Interfaces gibt eine Live-{{domxref("HTMLCollection")}} zurück, die die Zeilen im Abschnitt enthält. Die `HTMLCollection` ist live und wird automatisch aktualisiert, wenn Zeilen hinzugefügt oder entfernt werden.

## Wert

Eine Live-{{domxref("HTMLCollection")}} von {{domxref("HTMLTableRowElement")}}-Objekten.

## Beispiele

In diesem Beispiel ermöglichen zwei Schaltflächen das Hinzufügen und Entfernen von Zeilen im Tabellenkörper; es aktualisiert auch ein {{HTMLElement("output")}}-Element mit der Anzahl der aktuell in der Tabelle vorhandenen Zeilen.

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
// Erhalten Sie die relevanten Interface-Elemente
const bodySection = document.querySelectorAll("tbody")[0];
const rows = bodySection.rows; // Die Sammlung ist live und daher immer auf dem neuesten Stand
const rowNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateRowNumber() {
  rowNumberDisplay.textContent = rows.length;
}

addButton.addEventListener("click", () => {
  // Fügen Sie eine neue Zeile am Ende des Körpers hinzu
  const newRow = bodySection.insertRow();

  // Zellen innerhalb der neuen Zeile hinzufügen
  ["A", "B", "C"].forEach(
    (elt) => (newRow.insertCell().textContent = `${elt}${rows.length}`),
  );

  // Aktualisieren Sie den Zeilen-Zähler
  updateRowNumber();
});

removeButton.addEventListener("click", () => {
  // Löschen Sie die Zeile aus dem Körper
  bodySection.deleteRow(-1);

  // Aktualisieren Sie den Zeilen-Zähler
  updateRowNumber();
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-align")}}
