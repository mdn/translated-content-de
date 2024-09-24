---
title: "HTMLTableRowElement: deleteCell()-Methode"
short-title: deleteCell()
slug: Web/API/HTMLTableRowElement/deleteCell
l10n:
  sourceCommit: 712156520cf3aaca9f9b37d9a82831063eb9c87b
---

{{APIRef("HTML DOM")}}

Die **`deleteCell()`** Methode der {{domxref("HTMLTableRowElement")}} Schnittstelle entfernt eine spezifische Tabellenzelle aus einem gegebenen {{htmlelement("tr")}}.

## Syntax

```js-nolint
deleteCell(index)
```

### Parameter

- `index`
  - : Der Zellenindex der zu entfernenden Zelle. Wenn `index` `-1` oder gleich der Anzahl der Zellen ist, wird die letzte Zelle der Reihe entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `index` größer ist als die Anzahl der Zellen oder kleiner als `-1`.

## Beispiele

Dieses Beispiel verwendet {{domxref("HTMLTableRowElement.insertCell()")}}, um eine neue Zelle zu einer Zeile hinzuzufügen.

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
      <td>Zelle 1</td>
      <td>Zelle 2</td>
    </tr>
  </tbody>
</table>

<button id="add">Fügen Sie eine Zelle hinzu</button>
<button id="remove">Entfernen Sie die letzte Zelle</button>
<div>Diese erste Zeile hat <output>2</output> Zelle(n).</div>
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
// Relevante Schnittstellenelemente abrufen
const bodySection = document.querySelectorAll("tbody")[0];
const row = bodySection.rows[0]; // Die erste Zeile des body-Bereichs auswählen
const cells = row.cells; // Die Sammlung ist live und daher immer auf dem neuesten Stand
const cellNumberDisplay = document.querySelectorAll("output")[0];

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

function updateCellNumber() {
  cellNumberDisplay.textContent = cells.length;
}

addButton.addEventListener("click", () => {
  // Fügen Sie am Ende der ersten Zeile eine neue Zelle hinzu
  const newCell = row.insertCell();
  newCell.textContent = `Zelle ${cells.length}`;

  // Aktualisieren Sie den Zellzähler
  updateCellNumber();
});

removeButton.addEventListener("click", () => {
  // Löschen Sie die Zelle aus dem body
  row.deleteCell(-1);

  // Aktualisieren Sie den Zellzähler
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

- {{domxref("HTMLTableElement.insertRow()")}}
- Das HTML-Element, das Zellen darstellt: {{domxref("HTMLTableCellElement")}}
