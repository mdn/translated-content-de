---
title: "NodeList: forEach()-Methode"
short-title: forEach()
slug: Web/API/NodeList/forEach
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("DOM")}}

Die Methode **`forEach()`** des Interfaces [`NodeList`](/de/docs/Web/API/NodeList) ruft die als Parameter übergebene Callback-Funktion für jedes Element der Liste einmal auf, und zwar in der Reihenfolge, in der die Elemente eingefügt wurden.

## Syntax

```js-nolint
forEach(callback)
forEach(callback, thisArg)
```

### Parameter

- `callback`
  - : Eine Funktion, die für jedes Element von `someNodeList` ausgeführt wird. Sie akzeptiert drei Parameter:
    - `currentValue`
      - : Das aktuelle Element, das in `someNodeList` verarbeitet wird.
    - `currentIndex` {{Optional_inline}}
      - : Der Index des `currentValue`, das in `someNodeList` verarbeitet wird.
    - `listObj` {{Optional_inline}}
      - : Die `someNodeList`, auf die `forEach()` angewendet wird.

- `thisArg` {{Optional_inline}}
  - : Der Wert, der beim Ausführen von `callback` als [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwendet wird.

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

Der obige Code liefert folgendes Ergebnis:

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

- [Polyfill für `NodeList.prototype.forEach` in `core-js`](https://core-js.io/docs/features/web-standards/iterable-dom-collections)
- [`Node`](/de/docs/Web/API/Node)
- [`NodeList`](/de/docs/Web/API/NodeList)
