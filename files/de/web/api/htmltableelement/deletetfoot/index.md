---
title: "HTMLTableElement: deleteTFoot() Methode"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.deleteTFoot()`** Methode entfernt das
{{HTMLElement("tfoot")}}-Element aus einem gegebenen {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteTFoot()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verwendet JavaScript, um den Footer einer Tabelle zu löschen.

### HTML

```html
<table>
  <thead>
    <th>Name</th>
    <th>Score</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>541</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>225</td>
  </tr>
  <tfoot>
    <th>Average</th>
    <td>383</td>
  </tfoot>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTFoot();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
