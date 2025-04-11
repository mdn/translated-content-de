---
title: "HTMLTableCellElement: colSpan-Eigenschaft"
short-title: colSpan
slug: Web/API/HTMLTableCellElement/colSpan
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ APIRef("HTML DOM") }}

Die **`colSpan`** Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement) Schnittstelle gibt an, wie viele Spalten diese Zelle überspannen muss; dies ermöglicht es der Zelle, Platz über mehrere Spalten der Tabelle einzunehmen. Sie entspricht dem [`colspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan) Attribut.

## Wert

Eine positive Zahl, die die Anzahl der Spalten repräsentiert.

> [!NOTE]
> Beim Setzen eines neuen Wertes wird der Wert auf die nächstgelegene streng positive Zahl _geklammert_.

## Beispiele

Dieses Beispiel bietet zwei Schaltflächen, um die Spaltenbreite der ersten Zelle des Körpers zu ändern.

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

- [`HTMLTableCellElement.rowSpan`](/de/docs/Web/API/HTMLTableCellElement/rowSpan)
- [`HTMLTableColElement.span`](/de/docs/Web/API/HTMLTableColElement/span)
