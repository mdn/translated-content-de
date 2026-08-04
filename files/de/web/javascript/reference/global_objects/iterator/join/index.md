---
title: Iterator.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{SeeCompatTable}}

Die **`join()`**-Methode von {{jsxref("Iterator")}}-Instanzen ist ähnlich wie {{jsxref("Array.prototype.join()")}}: Sie gibt einen String zurück, der die Verkettung aller vom Iterator produzierten Elemente ist, getrennt durch Kommata oder eine angegebene Trennzeichen-String. Hat der Iterator nur ein Element, wird dessen String-Darstellung ohne das Trennzeichen zurückgegeben.

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, der verwendet wird, um jedes Paar von benachbarten Elementen des Iterators zu trennen. Wenn ausgelassen, werden die Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String, der alle erzeugten Elemente verbindet. Die Elemente werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String konvertiert, anstatt in den String `"null"` oder `"undefined"`. Wenn der Iterator leer ist, wird der leere String zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.join()")}} für Details darüber, wie `join()` funktioniert. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert sie nicht gut mit unendlichen Iteratoren, da sie nicht 'lazy' ist.

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
