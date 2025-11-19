---
title: "NodeList: values() Methode"
short-title: values()
slug: Web/API/NodeList/values
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("DOM")}}

Die **`NodeList.values()`** Methode gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Werte durchzugehen. Die Werte sind [`Node`](/de/docs/Web/API/Node) Objekte.

## Syntax

```js-nolint
values()
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
for (const value of list.values()) {
  console.log(value);
}
```

Das Ergebnis ist:

```plain
<p>
#text "hey"
<span>
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `NodeList.prototype.values` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
