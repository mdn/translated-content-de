---
title: "HTMLTableRowElement: rowIndex-Eigenschaft"
short-title: rowIndex
slug: Web/API/HTMLTableRowElement/rowIndex
l10n:
  sourceCommit: e5cb967d09849f77746f82d3526243fa956fbd8b
---

{{ APIRef("HTML DOM") }}

Die **`rowIndex`** schreibgeschützte Eigenschaft der {{domxref("HTMLTableRowElement")}}-Schnittstelle repräsentiert die Position einer Zeile innerhalb der gesamten {{HtmlElement("table")}}.

Selbst wenn die {{HtmlElement("thead")}}, {{HtmlElement("tbody")}} und {{HtmlElement("tfoot")}}-Elemente in der HTML-Datei nicht in der richtigen Reihenfolge sind, rendern Browser die Tabelle in der richtigen Reihenfolge. Daher werden die Zeilen vom `<thead>` zum `<tbody>` und vom `<tbody>` zum `<tfoot>` gezählt.

## Wert

Der Index der Zeile oder `-1`, wenn die Zeile nicht Teil einer Tabelle ist.

## Beispiele

Dieses Beispiel verwendet JavaScript, um alle Zeilen in einer Tabelle zu nummerieren.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Artikel</th>
      <th>Preis</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bananen</td>
      <td>$2</td>
    </tr>
    <tr>
      <td>Orangen</td>
      <td>$8</td>
    </tr>
    <tr>
      <td>Top Sirloin</td>
      <td>$20</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Gesamt</td>
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

- {{domxref("HTMLTableRowElement.sectionRowIndex")}}
