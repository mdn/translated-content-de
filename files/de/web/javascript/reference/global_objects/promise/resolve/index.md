---
title: Promise.resolve()
short-title: resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Promise.resolve()`** "löst" einen gegebenen Wert zu einem {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, wird `Promise.resolve()` die Methode `then()` mit zwei speziell dafür vorbereiteten Rückrufen aufrufen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion reduziert geschachtelte Ebenen von Promise-ähnlichen Objekten (z.B. ein Promise, das sich zu einem Promise erfüllt, das sich zu etwas erfüllt) auf eine einzige Ebene — ein Promise, das sich zu einem nicht-thenable Wert erfüllt.

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
  - : Argument, das durch dieses `Promise` aufgelöst wird. Kann auch ein `Promise` oder ein thenable sein, das aufgelöst werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst wird, oder das als Wert übergebene Promise, falls der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann sich in einem beliebigen Zustand befinden – erfüllt, abgelehnt oder ausstehend. Zum Beispiel führt das Auflösen eines abgelehnten Promises immer noch zu einem abgelehnten Promise.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise auf, was nicht dasselbe ist wie das Erfüllen oder Ablehnen des Promises. Siehe [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für Definitionen der Terminologie. Kurz gesagt, `Promise.resolve()` gibt ein Promise zurück, dessen späterer Zustand von einem anderen Promise, thenable Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des `value`-Ausdrucks möglicherweise synchron einen Fehler auslöst, wird dieser Fehler nicht von `Promise.resolve()` erfasst und in ein abgelehntes Promise eingebettet. Erwägen Sie die Verwendung von {{jsxref("Promise/try", "Promise.try(() => value)")}} in diesem Fall.

`Promise.resolve()` ist generisch und unterstützt Subklassenbildung, was bedeutet, dass es auf Subklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Promise des Subklassen-Typs sein. Dafür muss der Konstruktor der Subklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — also eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise`-Instanzen speziell. Wenn `value` zu `Promise` oder einer Subklasse gehört und `value.constructor === Promise`, dann wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Abkürzung für `new Promise((resolve) => resolve(value))`.

Der Großteil der Löselogik wird tatsächlich von [der `resolve`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) implementiert, die vom `Promise()`-Konstruktor übergeben wird. Zusammenfassend:

- Wenn ein nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein thenable übergeben wird, wird das zurückgegebene Promise den Zustand dieses thenables annehmen, indem die `then`-Methode aufgerufen wird und ein Paar von Lösungsmethoden als Argumente übergeben wird. (Da native Promises direkt durch `Promise.resolve()` ohne Erstellung eines Wrappers durchgehen, wird die `then`-Methode auf nativen Promises nicht aufgerufen.) Wenn die `resolve`-Funktion ein weiteres thenable Objekt erhält, wird es erneut aufgelöst, so dass der endgültige Erfüllungswert des Promises niemals ein thenable sein wird.

## Beispiele

### Die statische Methode Promise.resolve verwenden

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

### Auflösung eines Arrays

```js
const p = Promise.resolve([1, 2, 3]);
p.then((v) => {
  console.log(v[0]); // 1
});
```

### Auflösung eines anderen Promises

`Promise.resolve()` verwendet vorhandene `Promise`-Instanzen wieder. Wenn es ein natives Promise auflöst, gibt es dieselbe Promise-Instanz zurück, ohne einen Wrapper zu erstellen.

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

Die umgekehrte Reihenfolge der Logs ist darauf zurückzuführen, dass die `then`-Handler asynchron aufgerufen werden. Für weitere Informationen siehe die {{jsxref("Promise/then", "then()")}}-Referenz.

### Auflösung von thenables und Werfen von Fehlern

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

Geschachtelte thenables werden zu einem einzelnen Promise "tief reduziert".

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
> Rufen Sie `Promise.resolve()` nicht für ein thenable auf, das sich zu sich selbst auflöst. Dies führt zu einer Endlosschleife, da es versucht, ein unendlich geschachteltes Promise zu reduzieren.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufruf von resolve() auf einem Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Es kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir es auf einen Konstruktor aufrufen, der `console.log` als `resolve` übergibt:

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

Die Fähigkeit, verschachtelte thenables zu reduzieren, wird von der `resolve`-Funktion des `Promise()`-Konstruktors implementiert, sodass, wenn Sie es auf einen anderen Konstruktor aufrufen, verschachtelte thenables möglicherweise nicht reduziert werden, abhängig davon, wie dieser Konstruktor seine `resolve`-Funktion implementiert.

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
