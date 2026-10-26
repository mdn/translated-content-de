---
title: Iterator.concat()
short-title: concat()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/concat
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Iterator.concat()`** erstellt aus einer Liste iterierbarer Objekte ein neues {{jsxref("Iterator")}}-Objekt. Der neue Iterator gibt die Werte der übergebenen iterierbaren Objekte nacheinander zurück.

## Syntax

```js-nolint
Iterator.concat(it)
Iterator.concat(it1, it2)
Iterator.concat(it1, it2, /* …, */ itN)
```

### Parameter

- `it1`, `it2`, …, `itN`
  - : Ein Objekt, das das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) implementiert. [Iteratoren](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol), die nicht zugleich iterierbar sind, können dieser Methode nicht direkt übergeben werden; sie müssen zuerst mit {{jsxref("Iterator.from()")}} umschlossen werden.

### Rückgabewert

Ein neues {{jsxref("Iterator")}}-Objekt, das die Werte der übergebenen iterierbaren Objekte nacheinander zurückgibt.

## Beschreibung

Die Methode `Iterator.concat()` ähnelt konzeptionell der Methode [`concat()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) von `Array`, funktioniert aber mit jeder Art von iterierbarem Objekt und gibt statt eines Arrays einen Iterator zurück. Dadurch können die iterierbaren Objekte bei Bedarf durchlaufen werden, ohne unnötige Speicherzuweisungen oder Berechnungen vorzunehmen. Das bedeutet auch, dass Sie technisch gesehen [_unendliche iterierbare Objekte_ verketten](#unendliche_iterierbare_objekte_verketten) können. Werte aus iterierbaren Objekten, die auf das erste unendliche iterierbare Objekt folgen, werden allerdings nie erreicht.

Während jedes einzelne iterierbare Objekt unendlich sein kann, muss die Liste der iterierbaren Objekte endlich sein. Ihre Länge ist zudem stark begrenzt, da JavaScript-Engines eine recht niedrige Obergrenze für die Anzahl von Funktionsargumenten festlegen. Wenn Sie eine große – oder sogar unendliche – Anzahl iterierbarer Objekte verketten müssen, verwenden Sie stattdessen {{jsxref("Iterator.prototype.flatMap()")}}.

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

Die Funktionalität von `Iterator.concat()` ähnelt der folgenden Funktion. Sie verwendet den Operator [`yield*`](/de/docs/Web/JavaScript/Reference/Operators/yield*), um die Werte der übergebenen iterierbaren Objekte nacheinander zurückzugeben:

```js
function* concat(...iterables) {
  for (const iterable of iterables) {
    yield* iterable;
  }
}
```

Wie `yield*` unterstützt `Iterator.concat()` keine Argumente, die nicht iterierbar sind, also keine Methode `[Symbol.iterator]()` besitzen. Der Grund dafür ist, dass `Iterator.concat()` stets die Verantwortung für seine Iteratoren übernimmt und offene Iteratoren [schließt](/de/docs/Web/JavaScript/Reference/Iteration_protocols#returnvalue), wenn die Methode beendet wird. Bei iterierbaren Argumenten ruft `Iterator.concat()` die Iteratoren einzeln ab und schließt bei einem Abbruch der Iteration nur den aktuellen Iterator. Bei Iteratoren als Argumenten wäre unklar, ob der aufrufende Code oder `Iterator.concat()` für das Schließen verantwortlich wäre – insbesondere bei Iteratoren, die `Iterator.concat()` noch nicht erreicht hat. Daher lässt die Methode nicht iterierbare Argumente nicht zu.

## Beispiele

### Maps zusammenführen

In diesem Beispiel erstellen wir eine neue {{jsxref("Map")}}, die drei andere Maps vereint. Der Konstruktor {{jsxref("Map/Map", "Map()")}} akzeptiert ein iterierbares Objekt mit Schlüssel-Wert-Paaren. Da der [Map-Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Symbol.iterator) die Schlüssel-Wert-Paare der Map zurückgibt, genügt es, `Iterator.concat()` auf die Maps anzuwenden, um die neue Map zu erstellen.

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

Beachten Sie, dass der Schlüssel `"a"` in der resultierenden Map den Wert `5` hat. Das liegt daran, dass der `Map`-Konstruktor für jeden Schlüssel den zuletzt angegebenen Wert verwendet.

### Unendliche iterierbare Objekte verketten

Wenn eines der übergebenen iterierbaren Objekte unendlich ist, ist auch der resultierende Iterator unendlich. Das ist nicht unmittelbar problematisch, da Iteratoren bei Bedarf durchlaufen und jederzeit geschlossen werden können. Es bedeutet jedoch, dass iterierbare Objekte nach dem ersten unendlichen iterierbaren Objekt nie erreicht werden.

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

### Iterierbare Objekte unterschiedlicher Typen verketten

Sie können iterierbare Objekte unterschiedlicher Typen verketten.

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

Auch die Elemente der einzelnen iterierbaren Objekte können – wie bei Arrays – unterschiedliche Typen haben.

```js
const array = [1, "two", 3];
const set = new Set([true, {}]);

const it = Iterator.concat(array, set);
console.log([...it]); // [1, "two", 3, true, {}]
```

### Nicht iterierbare Objekte verketten

Wird ein nicht iterierbares Objekt an `Iterator.concat()` übergeben, wird ein `TypeError` ausgelöst, weil es keine Methode `[Symbol.iterator]()` besitzt.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(nonIterable); // TypeError: object is not iterable
```

Da alle integrierten Iteratoren von der Klasse {{jsxref("Iterator")}} abgeleitet sind, sind sie alle iterierbar und können an `Iterator.concat()` übergeben werden.

```js
const arrayIterator = [1, 2, 3][Symbol.iterator]();

const it = Iterator.concat(arrayIterator); // No error
```

Um einen Iterator zu übergeben, der nicht zugleich iterierbar ist, können Sie ihn mit {{jsxref("Iterator.from()")}} umschließen.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = Iterator.concat(Iterator.from(nonIterable)); // No error
```

Eine weitere Möglichkeit ist {{jsxref("Iterator.prototype.flatMap()")}}, das `Iterator.from()` automatisch aufruft. Achten Sie jedoch darauf, `flatMap()` auf einem Iterator und nicht auf einem Array aufzurufen, da {{jsxref("Array.prototype.flatMap()")}} als Rückgabewerte nur Arrays unterstützt.

```js
const nonIterable = {
  next() {
    return { done: true };
  },
};

const it = [nonIterable].values().flatMap((x) => x); // No error
```

Wenn Sie eigene Iteratoren implementieren, sollten Sie diese iterierbar machen: entweder durch [Ableiten von `Iterator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Iterator#subclassing_iterator) oder durch Hinzufügen einer Methode `[Symbol.iterator]()`, die `this` zurückgibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.concat` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.concat` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.from()")}}
- {{jsxref("Array.prototype.concat()")}}
