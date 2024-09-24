---
title: Iterator.prototype.take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`take()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der die angegebene Anzahl von Elementen in diesem Iterator liefert und dann terminiert.

## Syntax

```js-nolint
take(limit)
```

### Parameter

- `limit`
  - : Die Anzahl der Elemente, die vom Beginn der Iteration an genommen werden sollen.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Der zurückgegebene Iterator-Helfer liefert die Elemente im ursprünglichen Iterator einzeln und beendet (die `next()`-Methode erzeugt `{ value: undefined, done: true }`), sobald `limit` Elemente geliefert wurden oder der ursprüngliche Iterator erschöpft ist, je nachdem, was zuerst eintritt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` zu {{jsxref("NaN")}} oder negativ wird, wenn es [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

## Beispiele

### Verwendung von take()

Das folgende Beispiel erstellt einen Iterator, der Terme der Fibonacci-Folge liefert, und protokolliert dann die ersten drei Terme:

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

`take()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife iterieren:

```js
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// Protokolliert:
// 1
// 1
// 2
// 3
// 5
```

Da `fibonacci()` ein unendlicher Iterator ist, können Sie keine `for`-Schleife verwenden, um ihn direkt zu iterieren.

### Kombination von drop() mit take()

Sie können `take()` mit {{jsxref("Iterator.prototype.drop()")}} kombinieren, um einen Teil eines Iterators zu erhalten:

```js
for (const n of fibonacci().drop(2).take(5)) {
  // Lässt die ersten zwei Elemente aus und nimmt dann die nächsten fünf
  console.log(n);
}
// Protokolliert:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Nimmt die ersten fünf Elemente und lässt dann die ersten zwei aus
  console.log(n);
}
// Protokolliert:
// 2
// 3
// 5
```

### Untere und obere Grenzen der "take"-Anzahl

Wenn das `limit` negativ oder {{jsxref("NaN")}} ist, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

Wenn das `limit` größer ist als die Gesamtanzahl der Elemente, die der Iterator erzeugen kann (wie {{jsxref("Infinity")}}), hat der zurückgegebene Iterator-Helfer im Wesentlichen das gleiche Verhalten wie der ursprüngliche Iterator:

```js
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// Protokolliert:
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
