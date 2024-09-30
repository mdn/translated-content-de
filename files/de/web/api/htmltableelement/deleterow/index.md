---
title: "HTMLTableElement: deleteRow()-Methode"
short-title: deleteRow()
slug: Web/API/HTMLTableElement/deleteRow
l10n:
  sourceCommit: cbe37032c94ef804f24e6e37624102fa31e861c7
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.deleteRow()`**-Methode entfernt eine bestimmte Zeile ({{HtmlElement("tr")}}) aus einem gegebenen {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteRow(index)
```

### Parameter

- `index`
  - : `index` ist ein ganzzahliger Wert, der die Zeile repräsentiert, die gelöscht werden soll. Der spezielle Index `-1` kann jedoch verwendet werden, um die allerletzte Zeile einer Tabelle zu entfernen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `index` größer oder gleich der Anzahl der verfügbaren Zeilen ist oder einen negativen Wert ungleich `-1` aufweist.

## Beispiele

Dieses Beispiel verwendet JavaScript, um die zweite Zeile einer Tabelle zu löschen.

### HTML

```html
<table>
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
