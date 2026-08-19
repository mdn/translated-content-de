---
title: "HTMLTableElement: deleteCaption()-Methode"
short-title: deleteCaption()
slug: Web/API/HTMLTableElement/deleteCaption
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`deleteCaption()`**-Methode der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle entfernt das erste {{HTMLElement("caption")}}-Elementkind von einem gegebenen {{HTMLElement("table")}}, falls vorhanden.

## Syntax

```js-nolint
deleteCaption()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

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
const table = document.querySelector("table");
table.deleteCaption();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createCaption()`](/de/docs/Web/API/HTMLTableElement/createCaption)
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
