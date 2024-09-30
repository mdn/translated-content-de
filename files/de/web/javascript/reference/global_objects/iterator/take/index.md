---
title: Iterator.prototype.take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`take()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der die angegebene Anzahl von Elementen in diesem Iterator liefert und dann beendet.

## Syntax

```js-nolint
take(limit)
```

### Parameter

- `limit`
  - : Die Anzahl der Elemente, die vom Beginn der Iteration an genommen werden sollen.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Der zurückgegebene Iterator-Helfer liefert die Elemente im ursprünglichen Iterator nacheinander und beendet dann die Iteration (die `next()`-Methode produziert `{ value: undefined, done: true }`), sobald `limit`-Elemente geliefert wurden oder wenn der ursprüngliche Iterator erschöpft ist, je nachdem, was zuerst eintritt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` zu {{jsxref("NaN")}} wird oder negativ ist, wenn es [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

## Beispiele

### Verwendung von take()

Im folgenden Beispiel wird ein Iterator erstellt, der Elemente der Fibonacci-Folge liefert, und dann werden die ersten drei Elemente protokolliert:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().take(3);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // undefined
```

### Verwendung von take() mit einer for...of-Schleife

`take()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

```js
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// Logs:
// 1
// 1
// 2
// 3
// 5
```

Da `fibonacci()` ein unendlicher Iterator ist, können Sie ihn nicht direkt mit einer `for`-Schleife durchlaufen.

### Kombinieren von drop() mit take()

Sie können `take()` mit {{jsxref("Iterator.prototype.drop()")}} kombinieren, um einen Ausschnitt eines Iterators zu erhalten:

```js
for (const n of fibonacci().drop(2).take(5)) {
  // Drops the first two elements, then takes the next five
  console.log(n);
}
// Logs:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Takes the first five elements, then drops the first two
  console.log(n);
}
// Logs:
// 2
// 3
// 5
```

### Untere und obere Grenzen des take-Zählers

Wenn `limit` negativ ist oder {{jsxref("NaN")}}, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

Wenn `limit` größer als die Gesamtanzahl der Elemente ist, die der Iterator erzeugen kann (wie {{jsxref("Infinity")}}), hat der zurückgegebene Iterator-Helfer im Wesentlichen das gleiche Verhalten wie der ursprüngliche Iterator:

```js
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// Logs:
// 1
// 2
// 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.take` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.drop()")}}
