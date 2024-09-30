---
title: "HTMLTableCellElement: rowSpan-Eigenschaft"
short-title: rowSpan
slug: Web/API/HTMLTableCellElement/rowSpan
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`rowSpan`**-Nur-Lese-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces repräsentiert die Anzahl der Zeilen, die diese Zelle überspannen muss; dies ermöglicht es der Zelle, Raum über mehrere Zeilen der Tabelle einzunehmen. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.

## Wert

Eine positive Zahl, die die Anzahl der Zeilen darstellt. Wenn sie `0` ist, bedeutet das alle verbleibenden Zeilen in der Spalte.

> [!NOTE]
> Beim Festlegen eines neuen Wertes wird ein Wert, der ungleich 0 ist, auf die nächstgelegene, strikt positive Zahl _geklemmt_.

## Beispiele

Dieses Beispiel stellt zwei Schaltflächen bereit, um die Zeilenanzahl der ersten Zelle des Tabellenkörpers zu ändern.

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
  cell.rowSpan = cell.rowSpan + 1;

  // Update the display
  output.textContent = cell.rowSpan;
});

decreaseButton.addEventListener("click", () => {
  cell.rowSpan = cell.rowSpan - 1;

  // Update the display
  output.textContent = `${cell.rowSpan == 0 ? "all remaining" : cell.rowSpan}`;
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
