---
title: "HTMLTableElement: deleteTHead() Methode"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.deleteTHead()`** Methode entfernt das {{HTMLElement("thead")}}-Element aus einem gegebenen {{HtmlElement("table")}}.

## Syntax

```js-nolint
deleteTHead()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verwendet JavaScript, um den Header einer Tabelle zu löschen.

### HTML

```html
<table>
  <thead>
    <th>Name</th>
    <th>Occupation</th>
  </thead>
  <tr>
    <td>Bob</td>
    <td>Plumber</td>
  </tr>
  <tr>
    <td>Jim</td>
    <td>Roofer</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteTHead();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
