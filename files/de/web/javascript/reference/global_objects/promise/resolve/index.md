---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Promise.resolve()`** "löst" einen gegebenen Wert zu einem {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, ruft `Promise.resolve()` die `then()`-Methode mit zwei vorbereiteten Rückruffunktionen auf; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion reduziert verschachtelte Ebenen von promise-ähnlichen Objekten (z.B. ein Promise, das zu einem Promise erfüllt wird, das zu etwas erfüllt wird) auf eine einzige Ebene — ein Promise, das zu einem nicht-thenable Wert erfüllt wird.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Syntax

```js-nolint
Promise.resolve(value)
```

### Parameter

- `value`
  - : Argument, das von diesem `Promise` aufgelöst werden soll. Kann auch ein `Promise` oder ein Thenable zur Auflösung sein.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst ist, oder das übergebene Promise, wenn der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann in einem beliebigen Zustand sein — erfüllt, abgelehnt oder ausstehend. Zum Beispiel führt die Auflösung eines abgelehnten Promises trotzdem zu einem abgelehnten Promise.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise auf, was nicht dasselbe ist wie ein Promise zu erfüllen oder abzulehnen. Siehe [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für Definitionen der Terminologie. Kurz gesagt, `Promise.resolve()` gibt ein Promise zurück, dessen endgültiger Zustand von einem anderen Promise, thenable Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des `value`-Ausdrucks möglicherweise synchron einen Fehler wirft, wird dieser Fehler nicht abgefangen und von `Promise.resolve()` in ein abgelehntes Promise gewickelt. Erwägen Sie in diesem Fall die Verwendung von {{jsxref("Promise/try", "Promise.try(() => value)")}.

`Promise.resolve()` ist generisch und unterstützt Subklassenbildung, was bedeutet, dass es auf Subklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Subklassen-Typs sein wird. Dazu muss der Konstruktor der Subklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — d.h. eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt spezielle Fälle von nativen `Promise`-Instanzen. Wenn `value` zu `Promise` oder einer Subklasse gehört und `value.constructor === Promise`, dann wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Kurzform für `new Promise((resolve) => resolve(value))`.

Der Großteil der Auflösungslogik wird tatsächlich von [der `resolve`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) implementiert, die vom `Promise()`-Konstruktor übergeben wird. Zusammengefasst:

- Wenn ein nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein Thenable übergeben wird, übernimmt das zurückgegebene Promise den Zustand dieses Thenable, indem die `then`-Methode aufgerufen und ein Paar von auflösenden Funktionen als Argumente übergeben werden. (Aber weil native Promises direkt durch `Promise.resolve()` gehen, ohne ein Wrapper zu erstellen, wird die `then`-Methode bei nativen Promises nicht aufgerufen.) Wenn die `resolve`-Funktion ein weiteres thenable Objekt erhält, wird es erneut aufgelöst, sodass der endgültige Erfüllungswert des Promises niemals thenable sein wird.

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

### Auflösung eines anderen Promises

`Promise.resolve()` verwendet vorhandene `Promise`-Instanzen wieder. Wenn ein natives Promise aufgelöst wird, gibt es dasselbe Promise-Objekt zurück, ohne einen Wrapper zu erstellen.

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

Die umgekehrte Reihenfolge der Protokolle liegt daran, dass die `then`-Handler asynchron aufgerufen werden. Weitere Informationen finden Sie im {{jsxref("Promise/then", "then()")}}-Referenz.

### Auflösen von Thenables und Werfen von Fehlern

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

Verschachtelte Thenables werden "tief abgeflacht" zu einem einzigen Promise.

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
> Rufen Sie `Promise.resolve()` nicht auf ein Thenable auf, das sich selbst auflöst. Dies führt zu einer Endlosrekursion, da versucht wird, ein unendlich verschachteltes Promise abzuflachen.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufruf von resolve() auf einem Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als `resolve` übergibt:

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

Die Fähigkeit, verschachtelte Thenables abzuflachen, wird von der `resolve`-Funktion des `Promise()`-Konstruktor implementiert, sodass, wenn Sie sie auf einem anderen Konstruktor aufrufen, verschachtelte Thenables möglicherweise nicht abgeflacht werden, je nachdem, wie dieser Konstruktor seine `resolve`-Funktion implementiert.

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
