---
title: Iterator.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
l10n:
  sourceCommit: 7c2fdcaace1ab622a1055b7cc710297c452ce9ee
---

Die **`join()`**-Methode von {{jsxref("Iterator")}}-Instanzen ist ähnlich wie {{jsxref("Array.prototype.join()")}}: sie gibt einen String zurück, der die Verkettung aller vom Iterator erzeugten Elemente ist, getrennt durch Kommas oder einen angegebenen Trennzeichen-String. Hat der Iterator nur ein Element, wird das zur Stringifizierung gebrachte Element ohne Verwendung des Trennzeichens zurückgegeben.

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, der jeweils ein Paar benachbarter Elemente des Iterators trennt. Wenn er weggelassen wird, werden die Elemente mit einem Komma (",") getrennt.

### Rückgabewert

Ein String, der alle erzeugten Elemente verbindet. Die Elemente werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn ein Element `undefined` oder `null` ist, wird es in einen leeren String anstelle des Strings `"null"` oder `"undefined"` umgewandelt. Ist der Iterator leer, wird der leere String zurückgegeben.

## Beschreibung

Siehe {{jsxref("Array.prototype.join()")}} für Details, wie `join()` funktioniert. Im Gegensatz zu den meisten anderen Iterator-Hilfsmethoden funktioniert diese nicht gut mit unendlichen Iteratoren, da sie nicht lazy ist.

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
