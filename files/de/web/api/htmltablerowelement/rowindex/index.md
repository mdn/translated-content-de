---
title: "HTMLTableRowElement: rowIndex-Eigenschaft"
short-title: rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{ APIRef("HTML DOM") }}

Die **`rowIndex`**-Eigenschaft der [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die Position einer Zeile innerhalb der gesamten {{HtmlElement("table")}} darstellt.

Selbst wenn die {{HtmlElement("thead")}}, {{HtmlElement("tbody")}} und {{HtmlElement("tfoot")}}-Elemente in der HTML-Datei außerhalb der Reihenfolge stehen, rendern Browser die Tabelle in der richtigen Reihenfolge. Daher werden die Zeilen von `<thead>` zu `<tbody>`, von `<tbody>` zu `<tfoot>` gezählt.

## Wert

Der Index der Zeile oder `-1`, wenn die Zeile nicht Teil einer Tabelle ist.

## Beispiele

Dieses Beispiel verwendet JavaScript, um alle Zeilennummern in einer Tabelle zu beschriften.

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
      <td>Oranges</td>
      <td>$8</td>
    </tr>
    <tr>
      <td>Top Sirloin</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>$30</td>
    </tr>
  </tfoot>
</table>
```

### JavaScript

```js
const rows = document.querySelectorAll("tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(row #${row.rowIndex})`;
  row.appendChild(z);
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableRowElement.sectionRowIndex`](/de/docs/Web/API/HTMLTableRowElement/sectionRowIndex)
