---
title: "HTMLTableElement: deleteCaption()-Methode"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.deleteCaption()`**-Methode entfernt das {{HtmlElement("caption")}}-Element von einem gegebenen {{HtmlElement("table")}}. Wenn kein `<caption>`-Element mit der Tabelle verbunden ist, bewirkt diese Methode nichts.

## Syntax

```js-nolint
deleteCaption()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verwendet JavaScript, um die Beschriftung einer Tabelle zu löschen.

### HTML

```html
<table>
  <caption>
    This caption will be deleted!
  </caption>
  <tr>
    <td>Cell 1.1</td>
    <td>Cell 1.2</td>
  </tr>
  <tr>
    <td>Cell 2.1</td>
    <td>Cell 2.2</td>
  </tr>
</table>
```

### JavaScript

```js
let table = document.querySelector("table");
table.deleteCaption();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
