---
title: "NodeList: entries() Methode"
short-title: entries()
slug: Web/API/NodeList/entries
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("DOM")}}

Die **`NodeList.entries()`** Methode gibt einen
{{jsxref("Iteration_protocols", 'iterator')}} zurück, der es ermöglicht, alle Schlüssel/Wert-Paare in diesem Objekt zu durchlaufen. Die Werte sind [`Node`](/de/docs/Web/API/Node) Objekte.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Gibt einen {{jsxref("Iteration_protocols", "iterator")}} zurück.

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

führt zu:

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

- [Polyfill von `NodeList.prototype.entries` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
