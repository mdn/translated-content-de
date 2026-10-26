---
title: "NodeList: keys()-Methode"
short-title: keys()
slug: Web/API/NodeList/keys
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die Methode **`NodeList.keys()`** gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel durchlaufen können. Die Schlüssel sind `unsigned integer`.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","iterator")}} zurück.

## Beispiel

```js
const node = document.createElement("div");
const kid1 = document.createElement("p");
const kid2 = document.createTextNode("hey");
const kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

let list = node.childNodes;

// Using for...of
for (const key of list.keys()) {
  console.log(key);
}
```

Das Ergebnis ist:

```plain
0
1
2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `NodeList.prototype.keys` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
