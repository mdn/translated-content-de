---
title: "HTMLTableElement: deleteCaption() Methode"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.deleteCaption()`** Methode entfernt das {{HtmlElement("caption")}}-Element aus einem gegebenen {{HtmlElement("table")}}. Wenn kein `<caption>`-Element mit der Tabelle assoziiert ist, macht diese Methode nichts.

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
  <tbody>
    <tr>
      <td>Cell 1.1</td>
      <td>Cell 1.2</td>
    </tr>
    <tr>
      <td>Cell 2.1</td>
      <td>Cell 2.2</td>
    </tr>
  </tbody>
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
