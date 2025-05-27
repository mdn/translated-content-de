---
title: "HTMLTableCellElement: rowSpan-Eigenschaft"
short-title: rowSpan
slug: Web/API/HTMLTableCellElement/rowSpan
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{ APIRef("HTML DOM") }}

Die **`rowSpan`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces ist eine schreibgeschützte Eigenschaft, die die Anzahl der Zeilen darstellt, die diese Zelle überspannen muss; dies ermöglicht es der Zelle, Platz über mehrere Zeilen der Tabelle hinweg einzunehmen. Sie entspricht dem [`rowspan`](/de/docs/Web/HTML/Reference/Elements/td#colspan)-Attribut.

## Wert

Eine positive Zahl, die die Anzahl der Zeilen darstellt. Wenn sie `0` ist, bedeutet dies alle verbleibenden Zeilen in der Spalte.

> [!NOTE]
> Beim Setzen eines neuen Wertes wird ein von 0 abweichender Wert auf die nächstgelegene strikt positive Zahl _geklammert_.

## Beispiele

Dieses Beispiel bietet zwei Buttons, um die Zeilenspanne der ersten Zelle des Körpers zu ändern.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Col 1</th>
      <th>Col 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1</td>
    </tr>
    <tr>
      <td rowspan="2">2</td>
      <td>2</td>
    </tr>
    <tr>
      <td>3</td>
      <td>3</td>
    </tr>
    <tr>
      <td>4</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
<button id="increase">Increase rowspan</button>
<button id="decrease">Decrease rowspan</button>
<div>The second cell of the first column spans <output>2</output> row(s).</div>
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
const row = document.querySelectorAll("tbody tr")[1];
const cell = row.cells[0];
const output = document.querySelectorAll("output")[0];

const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", () => {
  cell.rowSpan += 1;

  // Update the display
  output.textContent = cell.rowSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.rowSpan -= 1;

  // Update the display
  output.textContent = `${cell.rowSpan === 0 ? "all remaining" : cell.rowSpan}`;
});
```

### Ergebnis

{{EmbedLiveSample("Examples", "100%", 180)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableCellElement.colSpan`](/de/docs/Web/API/HTMLTableCellElement/colSpan)
- [`HTMLTableColElement.span`](/de/docs/Web/API/HTMLTableColElement/span)
