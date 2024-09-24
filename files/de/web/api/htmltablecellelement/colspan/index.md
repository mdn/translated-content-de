---
title: "HTMLTableCellElement: colSpan-Eigenschaft"
short-title: colSpan
slug: Web/API/HTMLTableCellElement/colSpan
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`colSpan`** Lese-Eigenschaft des {{domxref("HTMLTableCellElement")}}-Interfaces stellt die Anzahl der Spalten dar, die diese Zelle überspannen muss. Dadurch kann die Zelle Raum über mehrere Spalten der Tabelle einnehmen. Sie spiegelt das [`colspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.

## Wert

Eine positive Zahl, die die Anzahl der Spalten darstellt.

> [!NOTE]
> Beim Festlegen eines neuen Wertes wird der Wert auf die nächstgelegene strikt positive Zahl _geklammert_.

## Beispiele

Dieses Beispiel bietet zwei Schaltflächen, um die Spaltenanzahl der ersten Zelle des Körpers zu ändern.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
      <th>Col 3</th>
      <th>Col 4</th>
      <th>Col 5</th>
      <th>Col 6</th>
      <th>Col 7</th>
      <th>Col 8</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="2">1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
    </tr>
  </tbody>
</table>
<button id="increase">Increase colspan</button>
<button id="decrease">Decrease colspan</button>
<div>The first cell spans <output>2</output> column(s).</div>
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
const cell = document.querySelectorAll("tbody tr td")[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.colSpan = cell.colSpan + 1;

  // Update the display
  output.textContent = cell.colSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.colSpan = cell.colSpan - 1;

  // Update the display
  output.textContent = cell.colSpan;
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 175)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLTableCellElement.rowSpan")}}
- {{domxref("HTMLTableColElement.span")}}
