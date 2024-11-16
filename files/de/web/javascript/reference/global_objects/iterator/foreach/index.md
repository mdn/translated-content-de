---
title: Iterator.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/forEach
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

Die **`forEach()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich zu {{jsxref("Array.prototype.forEach()")}}: Sie führt eine bereitgestellte Funktion einmal für jedes vom Iterator erzeugte Element aus.

## Syntax

```js-nolint
forEach(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Der Rückgabewert wird verworfen. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

{{jsxref("undefined")}}.

## Beschreibung

`forEach()` iteriert über den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Anders als die meisten anderen Helfer-Methoden für Iteratoren funktioniert sie nicht mit unendlichen Iteratoren, da sie nicht lazy ausgeführt wird.

## Beispiele

### Verwendung von forEach()

```js
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

Das ist äquivalent zu:

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
