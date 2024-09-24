---
title: "NodeList: forEach()-Methode"
short-title: forEach()
slug: Web/API/NodeList/forEach
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

Die **`forEach()`**-Methode der {{domxref("NodeList")}}-Schnittstelle ruft den im Parameter angegebenen Callback einmal für jedes Wertpaar in der Liste in Einfügereihenfolge auf.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`

  - : Eine Funktion, die auf jedes Element von `someNodeList` ausgeführt wird. Sie akzeptiert 3 Parameter:

    - `currentValue`
      - : Das aktuelle Element, das in `someNodeList` verarbeitet wird.
    - `currentIndex` {{Optional_inline}}
      - : Der Index des verarbeiteten `currentValue` in `someNodeList`.
    - `listObj` {{Optional_inline}}
      - : Die `someNodeList`, auf die `forEach()` angewendet wird.

- `thisArg` {{Optional_inline}}
  - : Wert, der als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) bei der Ausführung von `callback` verwendet wird.

### Rückgabewert

{{jsxref('undefined')}}.

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

list.forEach(function (currentValue, currentIndex, listObj) {
  console.log(`${currentValue}, ${currentIndex}, ${this}`);
}, "myThisArg");
```

Der obige Code ergibt folgendes:

```plain
[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `NodeList.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#iterable-dom-collections)
- {{domxref("Node")}}
- {{domxref("NodeList")}}
