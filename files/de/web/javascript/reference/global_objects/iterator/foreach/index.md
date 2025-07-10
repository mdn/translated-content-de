---
title: Iterator.prototype.forEach()
short-title: forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`forEach()`**-Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.forEach()")}}: Sie führt eine bereitgestellte Funktion einmal für jedes vom Iterator produzierte Element aus.

## Syntax

```js-nolint
forEach(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator produzierte Element ausgeführt wird. Ihr Rückgabewert wird verworfen. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

`forEach()` iteriert über den Iterator und ruft die `callbackFn` Funktion einmal für jedes Element auf. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert es nicht mit unendlichen Iteratoren, da es nicht lazy ist.

## Beispiele

### Verwendung von forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

Dies ist gleichwertig zu:

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

- [Polyfill von `Iterator.prototype.forEach` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.prototype.forEach`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.filter()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
