---
title: Iterator.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`forEach()`**-Methode von {{jsxref("Iterator")}}-Instanzen ist ähnlich wie {{jsxref("Array.prototype.forEach()")}}: Sie führt eine bereitgestellte Funktion einmal für jedes durch den Iterator produzierte Element aus.

## Syntax

```js-nolint
forEach(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes durch den Iterator produzierte Element ausgeführt wird. Ihr Rückgabewert wird verworfen. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

`forEach()` iteriert über den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Im Gegensatz zu den meisten anderen Helfer-Methoden von Iteratoren funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht lazy ist.

## Beispiele

### Verwendung von forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

Dies ist gleichwertig mit:

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
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.filter()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.forEach()")}}
