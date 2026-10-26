---
title: "NodeList: entries()-Methode"
short-title: entries()
slug: Web/API/NodeList/entries
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die Methode **`NodeList.entries()`** gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Schlüssel-Wert-Paare durchlaufen können. Die Werte sind [`Node`](/de/docs/Web/API/Node)-Objekte.

## Syntax

```js-nolint
entries()
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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `NodeList.prototype.entries` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
