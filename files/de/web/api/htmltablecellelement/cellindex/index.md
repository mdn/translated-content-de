---
title: "HTMLTableCellElement: cellIndex-Eigenschaft"
short-title: cellIndex
slug: Web/API/HTMLTableCellElement/cellIndex
l10n:
  sourceCommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ APIRef("HTML DOM") }}

Die schreibgeschützte **`cellIndex`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces
repräsentiert die Position einer Zelle innerhalb ihrer Zeile ({{htmlelement("tr")}}). Die erste Zelle hat den Index `0`.

## Wert

Gibt den Index der Zelle zurück oder `-1`, wenn die Zelle nicht Teil einer Zeile ist.

## Beispiele

Dieses Beispiel fügt allen Zellennummern der ersten Zeile des `tbody` ein Label hinzu.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bananas</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>Rice</td>
      <td>$2.5</td>
    </tr>
  </tbody>
</table>
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
const rows = document.querySelectorAll("tbody tr");
const cells = rows[0].cells;

for (const cell of cells) {
  cell.textContent = `${cell.textContent} (cell #${cell.cellIndex})`;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
