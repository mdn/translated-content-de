---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Promise.resolve()`** "löst" einen gegebenen Wert in ein {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, ruft `Promise.resolve()` die `then()`-Methode mit zwei vorbereiteten Callbacks auf; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion reduziert geschachtelte Ebenen von Promise-ähnlichen Objekten (z. B. ein Promise, das zu einem Promise führt, das wiederum zu einem Wert führt) auf eine einzige Ebene — ein Promise, das zu einem Nicht-Thenable-Wert führt.

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
  - : Argument, das von diesem `Promise` aufgelöst werden soll. Kann auch ein `Promise` oder ein Thenable sein, das aufgelöst werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst wird, oder das als Wert übergebene Promise, wenn der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann sich in jedem Zustand befinden — erfüllt, abgelehnt oder ausstehend. Zum Beispiel wird das Auflösen eines abgelehnten Promises ebenfalls zu einem abgelehnten Promise führen.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise auf, was nicht dasselbe ist wie das Erfüllen oder Ablehnen des Promises. Siehe [Beschreibung von Promise](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für Definitionen der Terminologie. Kurz gesagt, `Promise.resolve()` gibt ein Promise zurück, dessen endgültiger Zustand von einem anderen Promise, einem Thenable-Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des Ausdrucks `value` synchron einen Fehler auslösen kann, wird dieser Fehler nicht von `Promise.resolve()` abgefangen und in ein abgelehntes Promise umgewandelt. In diesem Fall sollten Sie {{jsxref("Promise/try", "Promise.try(() => value)")}} verwenden.

`Promise.resolve()` ist generisch und unterstützt Subclassing, was bedeutet, dass es auf Subklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Subklassen-Typs ist. Dafür muss der Konstruktor der Subklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — das Akzeptieren einer einzigen `executor`-Funktion, die mit den `resolve`- und `reject`-Callbacks als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise`-Instanzen besonders. Wenn `value` zu `Promise` oder einer Subklasse gehört und `value.constructor === Promise`, wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Kurzform für `new Promise((resolve) => resolve(value))`.

Der Hauptteil der Logik zur Auflösung wird tatsächlich von [der `resolve`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) implementiert, die vom `Promise()`-Konstruktor übergeben wird. Zusammengefasst:

- Wenn ein nicht-[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)-Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein Thenable übergeben wird, nimmt das zurückgegebene Promise den Zustand dieses Thenables an, indem es die `then`-Methode aufruft und ein Paar auflösender Funktionen als Argumente übergibt. (Aber da native Promises direkt durch `Promise.resolve()` ohne Wrapper durchgereicht werden, wird die `then`-Methode nicht auf nativen Promises aufgerufen.) Wenn die `resolve`-Funktion ein anderes Thenable-Objekt erhält, wird es erneut aufgelöst, sodass der endgültige Erfüllungswert des Promises niemals ein Thenable sein wird.

## Beispiele

### Verwendung der statischen `Promise.resolve`-Methode

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

`Promise.resolve()` verwendet bestehende `Promise`-Instanzen wieder. Wenn es ein natives Promise auflöst, gibt es dieselbe Promise-Instanz zurück, ohne einen Wrapper zu erstellen.

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

Die invertierte Reihenfolge der Konsolenausgaben liegt daran, dass die `then`-Handler asynchron aufgerufen werden. Weitere Informationen finden Sie in der {{jsxref("Promise/then", "then()")}}-Referenz.

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

Geschachtelte Thenables werden "tiefgehend reduziert" auf ein einzelnes Promise.

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
> Rufen Sie `Promise.resolve()` nicht auf einem Thenable auf, das auf sich selbst verweist. Das führt zu einer Endlosschleife, da versucht wird, ein unendlich geschachteltes Promise zu reduzieren.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufruf von `resolve()` auf einem Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als `resolve` weitergibt:

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

Die Fähigkeit, geschachtelte Thenables zu reduzieren, wird von der `resolve`-Funktion des `Promise()`-Konstruktors implementiert. Wenn Sie sie auf einem anderen Konstruktor aufrufen, könnten geschachtelte Thenables je nach Implementierung der `resolve`-Funktion dieses Konstruktors möglicherweise nicht reduziert werden.

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
