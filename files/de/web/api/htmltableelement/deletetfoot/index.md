---
title: "HTMLTableElement: deleteTFoot() Methode"
short-title: deleteTFoot()
slug: Web/API/HTMLTableElement/deleteTFoot
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`deleteTFoot()`**-Methode der [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Schnittstelle entfernt das erste {{HTMLElement("tfoot")}}-Element-Kind aus einem gegebenen {{HTMLElement("table")}}, falls vorhanden.

## Syntax

```js-nolint
deleteTFoot()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verwendet JavaScript, um die Fußzeile einer Tabelle zu löschen.

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
const table = document.querySelector("table");
table.deleteTFoot();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createTFoot()`](/de/docs/Web/API/HTMLTableElement/createTFoot)
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
- [`HTMLTableElement.deleteTHead()`](/de/docs/Web/API/HTMLTableElement/deleteTHead)
