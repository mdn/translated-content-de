---
title: "NodeList: values() Methode"
short-title: values()
slug: Web/API/NodeList/values
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("DOM")}}

Die **`NodeList.values()`** Methode gibt einen {{jsxref("Iteration_protocols",'Iterator')}} zurück, der es ermöglicht, alle in diesem Objekt enthaltenen Werte zu durchlaufen. Die Werte sind [`Node`](/de/docs/Web/API/Node) Objekte.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

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

- [Polyfill von `NodeList.prototype.values` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
