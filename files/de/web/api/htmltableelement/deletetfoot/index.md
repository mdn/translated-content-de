---
title: "HTMLTableElement: deleteTFoot() Methode"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die Methode **`HTMLTableElement.deleteTFoot()`** entfernt das
{{HTMLElement("tfoot")}}-Element von einem gegebenen {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteTFoot()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verwendet JavaScript, um den Footer einer Tabelle zu löschen.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>541</td>
    </tr>
    <tr>
      <td>Jim</td>
      <td>225</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th>Average</th>
      <td>383</td>
    </tr>
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
