---
title: "HTMLTableElement: deleteTHead() Methode"
short-title: deleteTHead()
slug: Web/API/HTMLTableElement/deleteTHead
l10n:
  sourceCommit: ea061caed30f127a79157d07c538d26f01b8702b
---

{{APIRef("HTML DOM")}}

Die **`deleteTHead()`**-Methode des [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)-Interfaces entfernt das erste {{HTMLElement("thead")}}-Elementkind von einem angegebenen {{HTMLElement("table")}}, falls vorhanden.

## Syntax

```js-nolint
deleteTHead()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel verwendet JavaScript, um den Kopf einer Tabelle zu löschen.

### HTML

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Occupation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Bob</td>
      <td>Plumber</td>
    </tr>
    <tr>
      <td>Jim</td>
      <td>Roofer</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
const table = document.querySelector("table");
table.deleteTHead();
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLTableElement.createTHead()`](/de/docs/Web/API/HTMLTableElement/createTHead)
- [`HTMLTableElement.deleteCaption()`](/de/docs/Web/API/HTMLTableElement/deleteCaption)
- [`HTMLTableElement.deleteTFoot()`](/de/docs/Web/API/HTMLTableElement/deleteTFoot)
