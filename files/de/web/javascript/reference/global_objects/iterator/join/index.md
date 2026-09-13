---
title: Iterator.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

Die **`join()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich der {{jsxref("Array.prototype.join()")}}: Sie gibt einen String zurück, der die Verkettung aller vom Iterator erzeugten Elemente ist, getrennt durch Kommas oder eine angegebene Trennzeichen-Zeichenkette. Wenn der Iterator nur ein Element hat, wird die Stringdarstellung dieses Elements ohne Verwendung des Trennzeichens zurückgegeben.

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Eine Zeichenkette, um jedes Paar benachbarter Elemente des Iterators zu trennen. Wenn weggelassen, werden die Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String, der alle ausgegebenen Elemente verbindet. Die Elemente werden [in Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String anstelle des Strings `"null"` oder `"undefined"` konvertiert. Wenn der Iterator leer ist, wird der leere String zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.join()")}} für Details darüber, wie `join()` funktioniert. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert es nicht gut mit unendlichen Iteratoren, da es nicht lazy ist.

## Beispiele

### Verwendung von join()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

console.log(fibonacci().take(5).join()); // "1,1,2,3,5"
console.log(fibonacci().take(5).join(" - ")); // "1 - 1 - 2 - 3 - 5"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.join` in `core-js`](https://github.com/zloirock/core-js#iterator-join)
- [es-shims Polyfill von `Iterator.prototype.join`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.join()")}}
