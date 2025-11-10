---
title: "HTMLTableElement: deleteRow() Methode"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.deleteRow()`**-Methode entfernt eine bestimmte Zeile ({{HtmlElement("tr")}}) aus einer gegebenen {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameter

- `index`
  - : `index` ist ein Ganzzahlwert, der die Zeile repräsentiert, die gelöscht werden soll. Der spezielle Index `-1` kann jedoch verwendet werden, um die letzte Zeile einer Tabelle zu entfernen.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer oder gleich der Anzahl der verfügbaren Zeilen ist oder ein negativer Wert ist, der nicht `-1` ist.

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
let table = document.querySelector("table");

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

- [`HTMLTableSectionElement.deleteRow()`](/de/docs/Web/API/HTMLTableSectionElement/deleteRow)
