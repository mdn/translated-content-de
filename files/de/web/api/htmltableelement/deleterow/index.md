---
title: "HTMLTableElement: Methode deleteRow()"
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
  - : `index` ist eine ganze Zahl, die die zu löschende Zeile repräsentiert. Der spezielle Index `-1` kann jedoch verwendet werden, um die letzte Zeile einer Tabelle zu entfernen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `index` größer oder gleich der Anzahl der verfügbaren Zeilen ist oder wenn es ein negativer Wert außer `-1` ist.

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

- {{domxref("HTMLTableSectionElement.deleteRow()")}}
