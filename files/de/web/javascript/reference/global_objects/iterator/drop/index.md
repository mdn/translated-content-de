---
title: Iterator.prototype.drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`drop()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.

## Syntax

```js-nolint
drop(limit)
```

### Parameter

- `limit`
  - : Die Anzahl der Elemente, die zu Beginn der Iteration übersprungen werden sollen.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Beim ersten Aufruf der `next()`-Methode des zurückgegebenen Iterator-Helfers wird der aktuelle Iterator sofort um `limit` Elemente vorgesetzt, und dann wird das nächste Element (also das `limit+1`-te Element) geliefert. Der Iterator-Helfer liefert dann die verbleibenden Elemente einzeln. Wenn der aktuelle Iterator weniger als `limit` Elemente hat, wird der neue Iterator-Helfer beim ersten Aufruf von `next()` sofort abgeschlossen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` {{jsxref("NaN")}} oder negativ wird, wenn es [in eine Ganzzahl konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

## Beispiele

### Verwendung von drop()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Folge liefert, beginnend mit dem 3. Term durch Überspringen der ersten zwei Terme:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().drop(2);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 3
```

Dies ist äquivalent zu:

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### Verwendung von drop() mit einer for...of-Schleife

`drop()` ist am bequemsten, wenn Sie den Iterator nicht manuell implementieren. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

```js
for (const n of fibonacci().drop(2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### Kombinieren von drop() mit take()

Sie können `drop()` mit {{jsxref("Iterator.prototype.take()")}} kombinieren, um ein Teilstück eines Iterators zu erhalten:

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

### Untere und obere Grenzen der Übersprungsanzahl

Wenn `limit` negativ oder {{jsxref("NaN")}} ist, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

Wenn `limit` größer ist als die Gesamtanzahl der Elemente, die der Iterator produzieren kann (wie {{jsxref("Infinity")}}), wird der zurückgegebene Iterator-Helfer sofort alle Elemente fallenlassen und dann beim ersten Aufruf von `next()` abgeschlossen. Wenn der aktuelle Iterator unendlich ist, wird der zurückgegebene Iterator-Helfer niemals abgeschlossen.

```js
fibonacci().drop(Infinity).next(); // Never ends
new Set([1, 2, 3]).values().drop(Infinity).next(); // { value: undefined, done: true }
new Set([1, 2, 3]).values().drop(4).next(); // { value: undefined, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.drop` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.take()")}}
