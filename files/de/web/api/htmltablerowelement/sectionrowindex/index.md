---
title: "HTMLTableRowElement: sectionRowIndex-Eigenschaft"
short-title: sectionRowIndex
slug: Web/API/HTMLTableRowElement/sectionRowIndex
l10n:
  sourceCommit: 502544e192e1bc8d05453f88eb00e8bfde705c65
---

{{ APIRef("HTML DOM") }}

Die **`sectionRowIndex`** schreibgeschützte Eigenschaft des [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)-Interfaces stellt die Position einer Zeile innerhalb des aktuellen Abschnitts dar ({{htmlelement("thead")}}, {{htmlelement("tbody")}} oder {{htmlelement("tfoot")}}).

## Wert

Der Index der Zeile oder `-1`, wenn die Zeile nicht Teil des Abschnitts ist.

## Beispiele

Dieses Beispiel verwendet JavaScript, um alle Zeilennummern des `tbody` zu kennzeichnen.

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
const rows = document.querySelectorAll("tbody tr");

rows.forEach((row) => {
  const z = document.createElement("td");
  z.textContent = `(row #${row.sectionRowIndex})`;
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

- [`HTMLTableRowElement.rowIndex`](/de/docs/Web/API/HTMLTableRowElement/rowIndex)
