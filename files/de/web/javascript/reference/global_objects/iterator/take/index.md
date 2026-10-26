---
title: Iterator.prototype.take()
short-title: take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`take()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die angegebene Anzahl von Elementen aus diesem Iterator liefert und danach endet.

## Syntax

```js-nolint
take(limit)
```

### Parameter

- `limit`
  - : Die Anzahl der Elemente, die vom Anfang der Iteration übernommen werden sollen.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Es liefert die Elemente des ursprünglichen Iterators nacheinander und endet dann (die Methode `next()` gibt `{ value: undefined, done: true }` zurück), sobald `limit` Elemente geliefert wurden oder der ursprüngliche Iterator erschöpft ist – je nachdem, was zuerst eintritt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` bei der [Umwandlung in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) zu {{jsxref("NaN")}} oder einem negativen Wert wird.

## Beispiele

### take() verwenden

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert, und gibt anschließend die ersten drei Glieder aus:

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

### take() mit einer for...of-Schleife verwenden

`take()` ist besonders praktisch, wenn Sie den Iterator nicht selbst implementieren. Da Iteratoren auch iterierbar sind, können Sie das zurückgegebene Hilfsobjekt mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

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

Da `fibonacci()` ein unendlicher Iterator ist, würde das Durchlaufen mit einer `for`-Schleife ohne eine Möglichkeit zum vorzeitigen Beenden (etwa eine {{jsxref("Statements/break", "break")}}-Anweisung) zu einer Endlosschleife führen.

### drop() mit take() kombinieren

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

### Untere und obere Grenzen der Anzahl

Wenn `limit` negativ oder {{jsxref("NaN")}} ist, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

Wenn `limit` größer ist als die Gesamtzahl der Elemente, die der Iterator liefern kann (beispielsweise {{jsxref("Infinity")}}), verhält sich das zurückgegebene Iterator-Hilfsobjekt im Wesentlichen wie der ursprüngliche Iterator:

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

- [Polyfill für `Iterator.prototype.take` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.take` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.drop()")}}
