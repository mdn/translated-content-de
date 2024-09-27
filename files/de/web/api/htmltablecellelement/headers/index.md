---
title: "HTMLTableCellElement: headers-Eigenschaft"
short-title: headers
slug: Web/API/HTMLTableCellElement/headers
l10n:
  sourceCommit: 3466b077e26ce0293b7b95cba0bd05559c3a3194
---

{{ APIRef("HTML DOM") }}

Die **`headers`**-Eigenschaft der [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)-Schnittstelle
enthält eine Liste von IDs von {{HTMLElement("th")}}-Elementen, die _Header_ für diese spezielle Zelle sind.

## Wert

Ein String, der durch Leerzeichen getrennte IDs enthält.

## Beispiele

Dieses Beispiel listet die ID der zuletzt angeklickten Zelle der Tabelle auf:

### HTML

```html
<table>
  <tr>
    <th rowspan="2" id="h">Homework (ID = h)</th>
    <th colspan="3" id="e">Exams (ID = e)</th>
    <th colspan="3" id="p">Projects (ID = p)</th>
  </tr>
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
