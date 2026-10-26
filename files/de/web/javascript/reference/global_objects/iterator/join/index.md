---
title: Iterator.prototype.join()
short-title: join()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/join
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`join()`** von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.join()")}}: Sie gibt einen String zurück, der aus allen vom Iterator erzeugten Elementen besteht, getrennt durch Kommas oder einen angegebenen Trennstring. Wenn der Iterator nur ein Element enthält, wird dessen String-Darstellung ohne Trennzeichen zurückgegeben.

## Syntax

```js-nolint
join()
join(separator)
```

### Parameter

- `separator` {{optional_inline}}
  - : Ein String, der jeweils zwei benachbarte Elemente des Iterators voneinander trennt. Wird er weggelassen, werden die Elemente durch ein Komma (",") getrennt.

### Rückgabewert

Ein String, der alle erzeugten Elemente miteinander verbindet. Die Elemente werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Ist ein Element `undefined` oder `null`, wird es statt in den String `"null"` oder `"undefined"` in einen leeren String umgewandelt. Ist der Iterator leer, wird ein leerer String zurückgegeben.

## Beschreibung

Einzelheiten zur Funktionsweise von `join()` finden Sie unter {{jsxref("Array.prototype.join()")}}. Anders als die meisten anderen Iterator-Hilfsmethoden eignet sich die Methode nicht für unendliche Iteratoren, da sie nicht lazy ist.

## Beispiele

### join() verwenden

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

- [Polyfill für `Iterator.prototype.join` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.join` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.join()")}}
