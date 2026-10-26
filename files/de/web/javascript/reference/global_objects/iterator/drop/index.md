---
title: Iterator.prototype.drop()
short-title: drop()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/drop
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`drop()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die angegebene Anzahl von Elementen am Anfang dieses Iterators überspringt.

## Syntax

```js-nolint
drop(limit)
```

### Parameter

- `limit`
  - : Die Anzahl der Elemente, die am Anfang der Iteration übersprungen werden sollen.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Beim ersten Aufruf der Methode `next()` des zurückgegebenen Iterator-Hilfsobjekts wird der aktuelle Iterator sofort um `limit` Elemente vorgerückt. Anschließend wird das nächste Element (das Element an Position `limit+1`) zurückgegeben. Danach gibt das Iterator-Hilfsobjekt die übrigen Elemente einzeln zurück. Hat der aktuelle Iterator weniger als `limit` Elemente, ist das neue Iterator-Hilfsobjekt bereits beim ersten Aufruf von `next()` abgeschlossen.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `limit` bei der [Umwandlung in eine Ganzzahl](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion) zu {{jsxref("NaN")}} wird oder negativ ist.

## Beispiele

### drop() verwenden

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge ausgibt. Durch das Überspringen der ersten beiden Glieder beginnt er beim dritten Glied:

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

Dies entspricht:

```js
const seq = fibonacci();
seq.next();
seq.next();
```

### drop() mit einer for...of-Schleife verwenden

`drop()` ist besonders praktisch, wenn Sie den Iterator nicht selbst implementieren. Da Iteratoren auch iterierbar sind, können Sie das zurückgegebene Hilfsobjekt mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

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

### drop() mit take() kombinieren

Sie können `drop()` mit {{jsxref("Iterator.prototype.take()")}} kombinieren, um einen Ausschnitt eines Iterators zu erhalten:

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

### Untere und obere Grenzen für die Anzahl übersprungener Elemente

Wenn `limit` negativ oder {{jsxref("NaN")}} ist, wird ein {{jsxref("RangeError")}} ausgelöst:

```js
fibonacci().drop(-1); // RangeError: -1 must be positive
fibonacci().drop(undefined); // RangeError: undefined must be positive
```

Wenn `limit` größer ist als die Gesamtzahl der Elemente, die der Iterator liefern kann (beispielsweise {{jsxref("Infinity")}}), überspringt das zurückgegebene Iterator-Hilfsobjekt sofort alle Elemente und ist beim ersten Aufruf von `next()` abgeschlossen. Ist der aktuelle Iterator unendlich, wird das zurückgegebene Iterator-Hilfsobjekt nie abgeschlossen.

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

- [Polyfill für `Iterator.prototype.drop` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.drop` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.take()")}}
