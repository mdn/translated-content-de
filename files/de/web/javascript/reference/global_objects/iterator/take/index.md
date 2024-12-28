---
title: Iterator.prototype.take()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/take
l10n:
  sourceCommit: 9066facc8584580afa066ddc3f23cff820e20b8f
---

{{JSRef}}

Die **`take()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die angegebene Anzahl von Elementen in diesem Iterator liefert und dann terminiert.

## Syntax

```js-nolint
take(limit)
```

### Parameter

- `limit`
  - : Die Anzahl der Elemente, die vom Anfang der Iteration genommen werden sollen.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Der zurückgegebene Iterator-Helfer liefert die Elemente im ursprünglichen Iterator einzeln und vervollständigt dann (die `next()`-Methode erzeugt `{ value: undefined, done: true }`), sobald `limit` Elemente geliefert wurden oder wenn der ursprüngliche Iterator erschöpft ist, je nachdem, was zuerst eintritt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` zu {{jsxref("NaN")}} oder negativ wird, wenn es [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

## Beispiele

### Verwendung von take()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Folge liefert, und gibt dann die ersten drei Terme aus:

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

### Verwendung von take() mit einer for...of Schleife

`take()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife iterieren:

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

Da `fibonacci()` ein unendlicher Iterator ist, würde die Verwendung einer `for`-Schleife ohne irgendeine Logik, die ein frühes Beenden ermöglicht (wie z.B. eine {{jsxref("Statements/break", "break")}}-Anweisung), zu einer Endlosschleife führen.

### Kombinieren von drop() mit take()

Sie können `take()` mit {{jsxref("Iterator.prototype.drop()")}} kombinieren, um einen Abschnitt eines Iterators zu erhalten:

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

Wenn `limit` negativ oder {{jsxref("NaN")}} ist, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

Wenn `limit` größer ist als die Gesamtzahl der Elemente, die der Iterator erzeugen kann (wie z.B. {{jsxref("Infinity")}}), hat der zurückgegebene Iterator-Helfer im Wesentlichen dasselbe Verhalten wie der ursprüngliche Iterator:

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
