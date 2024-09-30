---
title: "NodeList: item() Methode"
short-title: item()
slug: Web/API/NodeList/item
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Gibt ein Knoten aus einer [`NodeList`](/de/docs/Web/API/NodeList) nach Index zurück. Diese Methode löst keine Ausnahmen aus, solange Sie Argumente übergeben. Ein Wert von `null` wird zurückgegeben, wenn der Index außerhalb des Bereichs liegt, und ein {{jsxref("TypeError")}} wird ausgelöst, wenn kein Argument angegeben wird.

In JavaScript können Sie statt `nodeList.item(index)` aufzurufen, auch direkt auf den `index` zugreifen, wie `nodeList[index]`.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des Knotens, der abgerufen werden soll. Der Index ist nullbasiert.

### Rückgabewert

Der `index`-te Knoten in der `nodeList`, der von der `item`-Methode zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein Argument angegeben wird.

## Beispiele

```js
const tables = document.getElementsByTagName("table");
const firstTable = tables.item(1); // or tables[1] - returns the second table in the DOM
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
