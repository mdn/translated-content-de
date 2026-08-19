---
title: "HTMLTableElement: deleteRow()-Methode"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`deleteRow()`**-Methode des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces entfernt eine spezifische Zeile ({{HTMLElement("tr")}}) aus einer gegebenen {{HTMLElement("table")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameter

- `index`
  - : Der Index der zu entfernenden Zeile in der [`rows`](/de/docs/Web/API/HTMLTableElement/rows)-Sammlung. Wenn `index` `-1` ist, wird die letzte Zeile entfernt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer oder gleich der Anzahl der Zeilen oder kleiner als `-1` ist.

## Beispiele

Dieses Beispiel verwendet JavaScript, um die zweite Zeile einer Tabelle zu löschen.

### HTML

```html
<table>
  <tbody>
    <tr>
      <td>Cell 1.1</td>
      <td>Cell 1.2</td>
      <td>Cell 1.3</td>
    </tr>
    <tr>
      <td>Cell 2.1</td>
      <td>Cell 2.2</td>
      <td>Cell 2.3</td>
    </tr>
    <tr>
      <td>Cell 3.1</td>
      <td>Cell 3.2</td>
      <td>Cell 3.3</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");

// Delete second row
table.deleteRow(1);
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.deleteCell()`](/de/docs/Web/API/HTMLTableRowElement/deleteCell)
- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
