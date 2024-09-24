---
title: "NodeList: item() Methode"
short-title: item()
slug: Web/API/NodeList/item
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

Gibt ein Knoten aus einer [`NodeList`](/de/docs/Web/API/NodeList) nach Index zurück. Diese Methode wirft keine Ausnahmen, solange Sie Argumente angeben. Ein Wert von `null`
wird zurückgegeben, wenn der Index außerhalb des Bereichs liegt, und ein {{jsxref("TypeError")}} wird geworfen, wenn kein Argument bereitgestellt wird.

In JavaScript können Sie anstelle des Aufrufs von `nodeList.item(index)` auch direkt auf den `index` zugreifen, wie `nodeList[index]`.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Der Index des Knotens, der abgerufen werden soll. Der Index ist null-basiert.

### Rückgabewert

Der `index`-te Knoten in der `nodeList`, der von der `item` Methode zurückgegeben wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn kein Argument bereitgestellt wird.

## Beispiele

```js
const tables = document.getElementsByTagName("table");
const firstTable = tables.item(1); // oder tables[1] - gibt die zweite Tabelle im DOM zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
