---
title: "NodeList: entries()-Methode"
short-title: entries()
slug: Web/API/NodeList/entries
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`NodeList.entries()`**-Methode gibt einen
{{jsxref("Iteration_protocols","Iterator")}} zurück, mit dem alle Schlüssel/Wert-Paare
in diesem Objekt durchlaufen werden können. Die Werte sind {{domxref("Node")}}-Objekte.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols","Iterator")}} zurück.

## Beispiel

```js
const node = document.createElement("div");
const kid1 = document.createElement("p");
const kid2 = document.createTextNode("hey");
const kid3 = document.createElement("span");
node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

const list = node.childNodes;

// Using for...of
for (const entry of list.entries()) {
  console.log(entry);
}
```

ergibt:

```plain
Array [ 0, <p> ]
Array [ 1, #text "hey" ]
Array [ 2, <span> ]
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `NodeList.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
