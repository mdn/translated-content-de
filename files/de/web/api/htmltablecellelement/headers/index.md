---
title: "HTMLTableCellElement: headers-Eigenschaft"
short-title: headers
slug: Web/API/HTMLTableCellElement/headers
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{ APIRef("HTML DOM") }}

Die **`headers`**-Eigenschaft des [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Interfaces
enthält eine Liste von IDs von {{HTMLElement("th")}}-Elementen, die _Header_ für diese spezifische Zelle sind.

## Wert

Ein String, der Leerzeichen-getrennte IDs enthält.

## Beispiele

Dieses Beispiel listet die ID der zuletzt angeklickten Zelle der Tabelle auf:

### HTML

```html
<table>
  <thead>
    <tr>
      <th rowspan="2" id="h">Homework (ID = h)</th>
      <th colspan="3" id="e">Exams (ID = e)</th>
      <th colspan="3" id="p">Projects (ID = p)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th id="e1" headers="e">1 (ID = e1)</th>
      <th id="e2" headers="e">2 (ID = e2)</th>
      <th id="ef" headers="e">Final (ID = ef)</th>
      <th id="p1" headers="p">1 (ID = p1)</th>
      <th id="p2" headers="p">2 (ID = p2)</th>
      <th id="pf" headers="p">Final (ID = pf)</th>
    </tr>
    <tr>
      <td headers="h">15%</td>
      <td headers="e e1">15%</td>
      <td headers="e e2">15%</td>
      <td headers="e ef">20%</td>
      <td headers="p p1">10%</td>
      <td headers="p p2">10%</td>
      <td headers="p pf">15%</td>
    </tr>
  </tbody>
</table>
IDs of headers of the last clicked cell: <output>none</output>.
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
const table = document.querySelector("table");
const output = document.querySelector("output");

table.addEventListener("click", (ev) => {
  output.textContent = ev.target.headers ? ev.target.headers : "none";
});
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
