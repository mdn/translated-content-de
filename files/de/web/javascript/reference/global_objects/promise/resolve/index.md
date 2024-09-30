---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Promise.resolve()`** "löst" einen gegebenen Wert in ein {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, ruft `Promise.resolve()` die Methode `then()` mit zwei vorbereiteten Rückruffunktionen auf; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion reduziert geschachtelte Ebenen von promise-ähnlichen Objekten (z.B. ein Promise, das sich zu einem Promise auflöst, das sich zu etwas auflöst) auf eine einzelne Ebene — ein Promise, das sich zu einem nicht-thenable Wert erfüllt.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Syntax

```js-nolint
Promise.resolve(value)
```

### Parameter

- `value`
  - : Argument, das durch dieses `Promise` aufgelöst werden soll. Kann auch ein `Promise` oder ein thenable sein, das aufgelöst werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst wird oder das Promise, das als Wert übergeben wurde, falls der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann in jedem Zustand sein — erfüllt, abgelehnt oder ausstehend. Zum Beispiel wird das Auflösen eines abgelehnten Promises trotzdem zu einem abgelehnten Promise führen.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise, was nicht dasselbe wie die Erfüllung oder Ablehnung des Promises ist. Siehe [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für Definitionen der Terminologie. Kurz gesagt, `Promise.resolve()` gibt ein Promise zurück, dessen endgültiger Zustand von einem anderen Promise, einem thenable Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des `value`-Ausdrucks synchron einen Fehler auslösen kann, wird dieser Fehler nicht abgefangen und in ein abgelehntes Promise von `Promise.resolve()` umgewandelt. Erwägen Sie in diesem Fall die Verwendung von {{jsxref("Promise/try", "Promise.try(() => value)")}}.

`Promise.resolve()` ist generisch und unterstützt Unterklassen, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Promise des Unterklassen-Typs sein. Dazu muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor implementieren — eine einzelne `executor` Funktion akzeptieren, die mit den `resolve` und `reject` Rückrufen als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise` Instanzen speziell. Wenn `value` zu `Promise` oder einer Unterklasse gehört, und `value.constructor === Promise`, dann wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise` Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Abkürzung für `new Promise((resolve) => resolve(value))`.

Der Großteil der Auflösungslogik wird tatsächlich von [der `resolve` Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) durchgeführt, die vom `Promise()` Konstruktor übergeben wird. Zusammengefasst:

- Wenn ein nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein dannable übergeben wird, nimmt das zurückgegebene Promise den Zustand dieses dannables an, indem es die `then` Methode aufruft und ein Paar von Auflösungsfunktionen als Argumente übergibt. (Da native Promises direkt durch `Promise.resolve()` hindurchgehen, ohne einen Wrapper zu erstellen, wird die `then` Methode nicht auf nativen Promises aufgerufen.) Wenn die `resolve` Funktion ein weiteres thenable Objekt erhält, wird es erneut aufgelöst, so dass der endgültige Erfüllungswert des Promises niemals thenable sein wird.

## Beispiele

### Verwendung der statischen Promise.resolve Methode

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

`Promise.resolve()` verwendet vorhandene `Promise` Instanzen. Wenn ein natives Promise aufgelöst wird, gibt es die gleiche Promise-Instanz zurück, ohne einen Wrapper zu erstellen.

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

Die umgekehrte Reihenfolge der Logs liegt daran, dass die `then` Handler asynchron aufgerufen werden. Weitere Informationen finden Sie in der {{jsxref("Promise/then", "then()")}} Referenz.

### Auflösen von thenables und Auslösen von Errors

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

Verschachtelte thenables werden zu einem einzelnen Promise "tief abgeflacht".

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
> Rufen Sie `Promise.resolve()` nicht auf einem thenable auf, das sich selbst auflöst. Dies führt zu einer unendlichen Rekursion, da versucht wird, ein unendlich verschachteltes Promise abzuflachen.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufrufen von resolve() auf einem Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()` Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als `resolve` übergibt:

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

Die Fähigkeit, verschachtelte thenables abzuflachen, wird von der `resolve` Funktion des `Promise()` Konstruktors implementiert. Wenn Sie es auf einen anderen Konstruktor aufrufen, werden verschachtelte thenables möglicherweise nicht abgeflacht, abhängig davon, wie dieser Konstruktor seine `resolve` Funktion implementiert.

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
