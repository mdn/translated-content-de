---
title: "NodeList: keys() Methode"
short-title: keys()
slug: Web/API/NodeList/keys
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{APIRef("DOM")}}

Die **`NodeList.keys()`** Methode gibt einen
{{jsxref("Iteration_protocols",'iterator')}} zurück, der es ermöglicht, alle Schlüssel, die in diesem Objekt enthalten sind, zu durchlaufen. Die Schlüssel sind `unsigned integer`.

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

- [Polyfill von `NodeList.prototype.keys` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
