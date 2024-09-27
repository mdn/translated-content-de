---
title: "NodeList: keys() Methode"
short-title: keys()
slug: Web/API/NodeList/keys
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{APIRef("DOM")}}

Die **`NodeList.keys()`** Methode gibt einen
{{jsxref("Iteration_protocols", 'Iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Schlüssel zu durchlaufen. Die Schlüssel sind `unsigned integer`.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols", "Iterator")}} zurück.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `NodeList.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
