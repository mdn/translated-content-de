---
title: "HTMLTableCellElement: rowSpan-Eigenschaft"
short-title: rowSpan
slug: Web/API/HTMLTableCellElement/rowSpan
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

Die **`rowSpan`**-Eigenschaft der {{domxref("HTMLTableCellElement")}}-Schnittstelle gibt an, über wie viele Zeilen sich diese Zelle erstrecken muss. Dies ermöglicht es der Zelle, Platz über mehrere Zeilen der Tabelle hinweg einzunehmen. Sie spiegelt das [`rowspan`](/de/docs/Web/HTML/Element/td#colspan)-Attribut wider.

## Wert

Eine positive Zahl, die die Anzahl der Zeilen darstellt. Wenn sie `0` ist, bedeutet es alle verbleibenden Zeilen in der Spalte.

> [!NOTE]
> Beim Setzen eines neuen Wertes wird ein Wert ungleich 0 auf die nächstgelegene strikt positive Zahl beschränkt.

## Beispiele

Dieses Beispiel bietet zwei Schaltflächen, um die Zeilenspanne der ersten Zelle des Körpers zu ändern.

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
<div>Die zweite Zelle der ersten Spalte erstreckt sich über <output>2</output> Zeile(n).</div>
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

- {{domxref("HTMLTableCellElement.colSpan")}}
- {{domxref("HTMLTableColElement.span")}}
