---
title: "NodeList: values()-Methode"
short-title: values()
slug: Web/API/NodeList/values
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die Methode **`NodeList.values()`** gibt einen {{jsxref("Iteration_protocols",'iterator')}} zurück, mit dem Sie alle in diesem Objekt enthaltenen Werte durchlaufen können. Die Werte sind [`Node`](/de/docs/Web/API/Node)-Objekte.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `NodeList.prototype.values` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
