---
title: Promise.resolve()
short-title: resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Promise.resolve()`** statische Methode "löst" einen gegebenen Wert in ein {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, wird `Promise.resolve()` die `then()`-Methode mit zwei vorbereiteten Rückrufmethoden aufrufen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion reduziert verschachtelte Ebenen von promise-ähnlichen Objekten (z. B. ein Promise, das zu einem Promise erfüllt wird, das zu etwas erfüllt wird) auf eine einzelne Ebene — ein Promise, das zu einem nicht-thenable Wert erfüllt wird.

{{InteractiveExample("JavaScript Demo: Promise.resolve()")}}

```js interactive-example
const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(value);
  // Expected output: 123
});
```

## Syntax

```js-nolint
Promise.resolve(value)
```

### Parameter

- `value`
  - : Argument, das von diesem `Promise` aufgelöst werden soll. Kann auch ein `Promise` oder ein thenable sein, das aufgelöst werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst wird oder das Promise, das als Wert übergeben wurde, wenn der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann in jedem der Zustände sein — erfüllt, abgelehnt oder ausstehend. Zum Beispiel wird das Auflösen eines abgelehnten Promises immer noch zu einem abgelehnten Promise führen.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise auf, was nicht dasselbe ist wie das Erfüllen oder Ablehnen des Promises. Weitere Definitionen der Terminologie finden Sie in der [Beschreibung von Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description). Kurz gesagt gibt `Promise.resolve()` ein Promise zurück, dessen endgültiger Zustand von einem anderen Promise, thenable Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des `value`-Ausdrucks möglicherweise synchron einen Fehler auslöst, wird dieser Fehler von `Promise.resolve()` nicht abgefangen und in ein abgelehntes Promise eingebettet. Ziehen Sie in diesem Fall in Betracht, {{jsxref("Promise/try", "Promise.try(() => value)")}} zu verwenden.

`Promise.resolve()` ist generisch und unterstützt die Unterklassenbildung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassentyps sein wird. Hierfür muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — das Akzeptieren einer einzelnen `executor`-Funktion, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise`-Instanzen speziell. Wenn `value` zu `Promise` oder einer Unterklasse gehört und `value.constructor === Promise`, wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Kurzform für `new Promise((resolve) => resolve(value))`.

Der Großteil der Auflösungslogik wird tatsächlich von der [der `resolve`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) implementiert, die vom `Promise()`-Konstruktor übergeben wird. Zusammengefasst:

- Wenn ein nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)-Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein thenable übergeben wird, übernimmt das zurückgegebene Promise den Zustand dieses thenable, indem die `then`-Methode aufgerufen und ein Paar von Auflösungsfunktionen als Argumente übergeben werden. (Da jedoch native Promises direkt über `Promise.resolve()` ohne die Erstellung eines Wrappers durchlaufen werden, wird die `then`-Methode nicht für native Promises aufgerufen.) Wenn die `resolve`-Funktion ein weiteres thenable-Objekt erhält, wird es erneut aufgelöst, sodass der letztendliche Erfüllungswert des Promises niemals thenable sein wird.

## Beispiele

### Verwenden der statischen Methode Promise.resolve

```js
Promise.resolve("Success").then(
  (value) => {
    console.log(value); // "Success"
  },
  (reason) => {
    // not called
  },
);
```

### Auflösen eines Arrays

```js
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Auflösen eines anderen Promises

`Promise.resolve()` verwendet bestehende `Promise`-Instanzen wieder. Wenn es ein natives Promise auflöst, wird die gleiche Promise-Instanz zurückgegeben, ohne einen Wrapper zu erstellen.

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// Logs, in order:
// original === cast ? true
// value: 33
```

Die umgekehrte Reihenfolge der Protokolle liegt daran, dass die `then`-Handler asynchron aufgerufen werden. Weitere Informationen finden Sie in der {{jsxref("Promise/then", "then()")}}-Referenz.

### Auflösen von thenables und das Auslösen von Fehlern

```js
// Resolving a thenable object
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true, object casted to a Promise

p1.then(
  (v) => {
    console.log(v); // "fulfilled!"
  },
  (e) => {
    // not called
  },
);

// Thenable throws
// Promise rejects
const p2 = Promise.resolve({
  then() {
    throw new TypeError("Throwing");
  },
});
p2.then(
  (v) => {
    // not called
  },
  (e) => {
    console.error(e); // TypeError: Throwing
  },
);

// Thenable throws after callback
// Promise resolves
const p3 = Promise.resolve({
  then(onFulfilled) {
    onFulfilled("Resolving");
    throw new TypeError("Throwing");
  },
});
p3.then(
  (v) => {
    console.log(v); // "Resolving"
  },
  (e) => {
    // not called
  },
);
```

Verschachtelte thenables werden "tief abgeflacht" zu einem einzigen Promise.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(thenable).then((v) => {
  console.log(v); // 42
});
```

> [!WARNING]
> Rufen Sie `Promise.resolve()` nicht auf einem thenable auf, das sich selbst auflöst. Dies führt zu einer Endlosschleife, da versucht wird, ein unendlich verschachteltes Promise abzuflachen.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufrufen von resolve() bei einem Nicht-Promise Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann bei jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie bei einem Konstruktor aufrufen, der `console.log` als `resolve` übergibt:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the
    // native promise's, but Promise.resolve() calls them in the same way.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.resolve.call(NotPromise, "foo"); // Logs "Resolved foo"
```

Die Fähigkeit, verschachtelte thenables abzuflachen, wird von der `resolve`-Funktion des `Promise()`-Konstruktors implementiert. Wenn Sie sie bei einem anderen Konstruktor aufrufen, werden verschachtelte thenables möglicherweise nicht abgeflacht, je nachdem, wie dieser Konstruktor seine `resolve`-Funktion implementiert.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve.call(NotPromise, thenable); // Logs "Resolved { then: [Function: then] }"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
