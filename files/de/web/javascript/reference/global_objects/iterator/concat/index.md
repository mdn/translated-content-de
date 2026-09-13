---
title: Iterator.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/concat
l10n:
  sourceCommit: 1474534461893381d54c502e655f334b5568e597
---

Die statische Methode **`Iterator.concat()`** erzeugt ein neues {{jsxref("Iterator")}}-Objekt aus einer Liste von iterierbaren Objekten. Der neue Iterator liefert die Werte aus jeder der Eingabe-Iterables sequenziell.

## Syntax

```js-nolint
Iterator.concat(it)
Iterator.concat(it1, it2)
Iterator.concat(it1, it2, /* …, */ itN)
```

### Parameter

- `it1`, `it2`, …, `itN`
  - : Ein Objekt, das das [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)-Protokoll implementiert. [Iterators](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol), die nicht auch iterable sind, können nicht direkt an diese Methode übergeben werden; sie müssen zuerst mit {{jsxref("Iterator.from()")}} umwickelt werden.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt, das die Werte aus jeder der Eingabe-Iterables sequenziell liefert.

## Beschreibung

Die Methode `Iterator.concat()` ist konzeptionell ähnlich zur `Array`-Methode [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), aber sie funktioniert mit jeder Art von Iterable und gibt einen Iterator anstelle eines Array zurück. Das bedeutet, dass die Iterables verzögert iteriert werden können, um unnötige Allokationen oder Berechnungen zu vermeiden. Es bedeutet auch, dass Sie technisch gesehen [_unendliche Iterables_](#verkettung_unendlicher_iterables) verketten können, aber die Ergebnisse von Iterables nach dem ersten unendlichen Iterable werden niemals erreicht.

Während jedes Iterable unendlich sein kann, muss die Liste der Iterables endlich und ziemlich begrenzt in der Anzahl sein, da die Engines sehr niedrige Limits für die Anzahl der Funktionsargumente setzen. Wenn Sie eine große — oder sogar unendliche — Anzahl von Iterables verketten müssen, verwenden Sie stattdessen {{jsxref("Iterator.prototype.flatMap()")}}.

```js
function* infiniteIterables() {
  for (let i = 1; ; i++) {
    yield Array(i).fill(i);
  }
}

// BAD:
// Iterator.concat(...infiniteIterables());
// The spread operator never finishes

// GOOD:
const it = infiniteIterables().flatMap((x) => x);
// Infinite sequence of numbers: 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, ...
```

Die `Iterator.concat()`-Methode ist funktional ähnlich der folgenden Funktion, die den [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*)-Operator verwendet, um Werte aus jeder der Eingabe-Iterables sequenziell zu liefern:

```js
function* concat(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}
```

Wie `yield*` unterstützt `Iterator.concat()` keine Argumente, die nicht iterierbar sind (d.h. die nicht die `[Symbol.iterator]()`-Methode haben). Dies liegt daran, dass `Iterator.concat()` immer die Kontrolle über seine Iteratoren übernimmt und offene Iteratoren [schließt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#returnvalue), wenn die Methode beendet wird. Mit iterierbaren Argumenten erwirbt `Iterator.concat()` Iteratoren nacheinander und schließt einfach den aktuellen Iterator, wenn die Iteration gestoppt wird. Bei Iterator-Argumenten ist nicht klar, ob der Anrufer oder `Iterator.concat()` für das Schließen der Iteratoren verantwortlich sein soll, insbesondere für die, die `Iterator.concat()` nicht erreicht hat, daher erlaubt die Methode einfach keine nicht-iterierbaren Argumente.

## Beispiele

### Kombinieren von Maps

In diesem Beispiel erstellen wir eine neue {{jsxref("Map")}}, die die Vereinigung von drei anderen Maps ist. Der Konstruktor {{jsxref("Map/Map", "Map()")}} akzeptiert ein Iterable von Schlüssel-Wert-Paaren, während der [Map-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) Schlüssel-Wert-Paare aus der Map liefert, so dass es ausreicht, `Iterator.concat()` auf die Maps anzuwenden, um die neue Map zu erstellen.

```js
const map1 = new Map([
  ["a", 1],
  ["b", 2],
]);
const map2 = new Map([
  ["c", 3],
  ["d", 4],
]);
const map3 = new Map([
  ["a", 5],
  ["e", 6],
]);

const map = new Map(Iterator.concat(map1, map2, map3));
console.log(map);
// Map(5) {'a' => 5, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 6}
```

Beachten Sie, dass der Wert des Schlüssels `"a"` in der resultierenden Map `5` ist. Das liegt daran, dass der `Map`-Konstruktor den letzten Wert für jeden Schlüssel verwendet.

### Verkettung unendlicher Iterables

Wenn eines der Eingabe-Iterables unendlich ist, wird auch der resultierende Iterator unendlich sein. Das stellt nicht sofort ein Problem dar, da Iteratoren verzögert konsumiert und jederzeit geschlossen werden können, aber es bedeutet, dass Iterables nach dem ersten unendlichen Iterable niemals erreicht werden.

```js
function* it1() {
  yield 1;
  yield 2;
}

function* it2() {
  let i = 3;
  while (true) {
    yield i++;
  }
}

function* it3() {
  yield "done";
}

const it = Iterator.concat(it1(), it2(), it3());
for (const value of it.take(10)) {
  console.log(value); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
// "done" is never reached
```

### Verkettung von Iterables unterschiedlicher Typen

Sie können Iterables unterschiedlicher Typen verketten.

```js
const array = [1, 2, 3];
const set = new Set([4, 5, 6]);
function* gen() {
  yield 7;
  yield 8;
  yield 9;
}

const it = Iterator.concat(array, set, gen());
console.log([...it]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Die Elemente jedes Iterables können auch unterschiedliche Typen haben, genau wie Arrays.

```js
const array = [1, "two", 3];
const set = new Set([true, {}]);

const it = Iterator.concat(array, set);
console.log([...it]); // [1, "two", 3, true, {}]
```

### Verkettung nicht-iterierbarer Objekte

Nicht-iterierbare Objekte lösen einen `TypeError` aus, wenn sie an `Iterator.concat()` übergeben werden, weil sie nicht die `[Symbol.iterator]()`-Methode haben.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(nonIterable); // TypeError: object is not iterable
```

Da alle eingebauten Iteratoren die {{jsxref("Iterator")}}-Klasse erweitern, sind sie alle iterierbar und können an `Iterator.concat()` übergeben werden.

```js
const arrayIterator = [1, 2, 3][Symbol.iterator]();

const it = Iterator.concat(arrayIterator); // No error
```

Um einen Iterator zu übergeben, der nicht auch iterierbar ist, können Sie ihn mit {{jsxref("Iterator.from()")}} umwickeln.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(Iterator.from(nonIterable)); // No error
```

Eine weitere Option ist die Verwendung von {{jsxref("Iterator.prototype.flatMap()")}}, das automatisch `Iterator.from()` aufruft. Aber seien Sie vorsichtig: Sie müssen `flatMap()` auf einem Iterator aufrufen, nicht auf einem Array, da {{jsxref("Array.prototype.flatMap()")}} nur Array-Rückgabewerte unterstützt.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = [nonIterable].values().flatMap((x) => x); // No error
```

Wenn Sie Ihre eigenen Iteratoren implementieren, sollten Sie in Betracht ziehen, sie iterierbar zu machen, indem Sie entweder die `Iterator`-Klasse [subclassen](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Iterator#subclassing_iterator) oder eine `[Symbol.iterator]()`-Methode hinzufügen, die `this` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.concat` in `core-js`](https://github.com/zloirock/core-js#iterator-sequencing)
- [es-shims Polyfill von `Iterator.concat`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Array.prototype.concat()")}}
