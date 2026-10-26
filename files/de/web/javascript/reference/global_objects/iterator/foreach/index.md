---
title: Iterator.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`forEach()`** von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.forEach()")}}: Sie führt für jedes vom Iterator erzeugte Element einmal eine bereitgestellte Funktion aus.

## Syntax

```js-nolint
forEach(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird verworfen. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

`forEach()` durchläuft den Iterator und ruft die Funktion `callbackFn` für jedes Element einmal auf. Anders als die meisten anderen Iterator-Hilfsmethoden kann die Methode nicht mit unendlichen Iteratoren verwendet werden, da sie nicht verzögert ausgeführt wird.

## Beispiele

### forEach() verwenden

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

Dies entspricht:

```js
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.forEach` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.forEach` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.filter()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
