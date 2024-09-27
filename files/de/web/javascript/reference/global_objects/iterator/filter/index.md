---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`filter()`**-Methode von {{jsxref("Iterator")}} Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der nur diejenigen Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.

## Syntax

```js-nolint
filter(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator produzierte Element ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, damit das Element vom Iterator-Helfer geliefert wird, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Jedes Mal, wenn die `next()` Methode des Iterator-Helfers aufgerufen wird, gibt sie das nächste Element im Iterator zurück, für das die Callback-Funktion `true` zurückgibt. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch der Iterator-Helfer abgeschlossen (die `next()` Methode produziert `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Mit unendlichen Iteratoren ermöglicht `filter()` Ihnen, nur über die Elemente zu iterieren, die eine gegebene Bedingung erfüllen.

## Beispiele

### Verwenden von filter()

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert, und liest dann die ersten wenigen Glieder, die gerade sind:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### Verwenden von filter() mit einer for...of Schleife

`filter()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie über den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}} Schleife iterieren:

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 8
// 34
```

Dies entspricht:

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
