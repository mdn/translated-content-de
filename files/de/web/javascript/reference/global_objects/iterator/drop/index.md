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
  - : Die Anzahl der Elemente, die am Anfang der Iteration übersprungen werden sollen.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Wenn die `next()`-Methode des zurückgegebenen Iterator-Helfers zum ersten Mal aufgerufen wird, wird der aktuelle Iterator sofort um `limit` Elemente vorwärts bewegt, und dann wird das nächste Element (das `limit+1`-te Element) geliefert. Der Iterator-Helfer liefert dann die verbleibenden Elemente einzeln. Wenn der aktuelle Iterator weniger als `limit` Elemente hat, wird der neue Iterator-Helfer sofort abgeschlossen, wenn `next()` zum ersten Mal aufgerufen wird.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` zu {{jsxref("NaN")}} oder negativ wird, wenn es [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) wird.

## Beispiele

### Verwendung von drop()

Das folgende Beispiel erstellt einen Iterator, der Terme der Fibonacci-Sequenz liefert, beginnend mit dem dritten Term, indem die ersten beiden Terme übersprungen werden:

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

Dies ist gleichbedeutend mit:

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

// Protokolliert:
// 2
// 3
// 5
// 8
// 13
// 21
// 34
```

### Kombinieren von drop() mit take()

Sie können `drop()` mit {{jsxref("Iterator.prototype.take()")}} kombinieren, um einen Ausschnitt eines Iterators zu erhalten:

```js
for (const n of fibonacci().drop(2).take(5)) {
  // Überspringt die ersten zwei Elemente, dann werden die nächsten fünf genommen
  console.log(n);
}
// Protokolliert:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Nimmt die ersten fünf Elemente, dann werden die ersten zwei übersprungen
  console.log(n);
}
// Protokolliert:
// 2
// 3
// 5
```

### Untere und obere Grenzen der Drop-Anzahl

Wenn `limit` negativ oder {{jsxref("NaN")}} ist, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().drop(-1); // RangeError: -1 muss positiv sein
fibonacci().drop(undefined); // RangeError: undefined muss positiv sein
```

Wenn `limit` größer als die Gesamtanzahl der Elemente ist, die der Iterator erzeugen kann (wie z. B. {{jsxref("Infinity")}}), wird der zurückgegebene Iterator-Helfer sofort alle Elemente überspringen und dann abgeschlossen, wenn `next()` zum ersten Mal aufgerufen wird. Wenn der aktuelle Iterator unendlich ist, wird der zurückgegebene Iterator-Helfer niemals abgeschlossen.

```js
fibonacci().drop(Infinity).next(); // Endet nie
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
