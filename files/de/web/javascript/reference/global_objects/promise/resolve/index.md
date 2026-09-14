---
title: Promise.resolve()
short-title: resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: a6a2daec3965d85ef6dfc06cfd3507c1b2f886e2
---

Die statische Methode **`Promise.resolve()`** „löst“ einen angegebenen Wert zu einem {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, ruft `Promise.resolve()` die Methode `then()` mit zwei vorbereiteten Callbacks auf; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion flacht verschachtelte Ebenen Promise-ähnlicher Objekte (z. B. ein Promise, das zu einem Promise erfüllt wird, das zu etwas anderem erfüllt wird) zu einer einzigen Ebene ab — einem Promise, das zu einem Nicht-Thenable-Wert erfüllt wird.

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

Ein {{jsxref("Promise")}}, das mit dem angegebenen Wert aufgelöst wird, oder das als Wert übergebene Promise, wenn der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann sich in jedem der Zustände befinden — erfüllt, abgelehnt oder ausstehend. Beispielsweise führt das Auflösen eines abgelehnten Promise weiterhin zu einem abgelehnten Promise.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise auf, was nicht dasselbe ist wie das Erfüllen oder Ablehnen des Promise. Definitionen der Terminologie finden Sie unter [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description). Kurz gesagt gibt `Promise.resolve()` ein Promise zurück, dessen endgültiger Zustand von einem anderen Promise, Thenable-Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des Ausdrucks `value` synchron einen Fehler auslösen kann, wird dieser Fehler von `Promise.resolve()` nicht abgefangen und in ein abgelehntes Promise verpackt. Erwägen Sie in diesem Fall die Verwendung von {{jsxref("Promise/try", "Promise.try(() => value)")}}.

`Promise.resolve()` ist generisch und unterstützt Vererbung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassentyps ist. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der Konstruktor [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) implementieren — er akzeptiert eine einzelne Funktion `executor`, die mit den Callbacks `resolve` und `reject` als Parametern aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise`-Instanzen speziell. Wenn `value` zu `Promise` oder einer Unterklasse gehört und `value.constructor === Promise` gilt, wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Kurzform für `new Promise((resolve) => resolve(value))`.

Der Großteil der Auflösungslogik wird tatsächlich durch [die Funktion `resolve`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) implementiert, die vom Konstruktor `Promise()` übergeben wird. Zusammenfassend:

- Wenn ein Nicht-[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)-Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein Thenable übergeben wird, übernimmt das zurückgegebene Promise den Zustand dieses Thenable, indem es die Methode `then` aufruft und ihr ein Paar Auflösungsfunktionen als Argumente übergibt. (Da native Promises jedoch direkt durch `Promise.resolve()` weitergegeben werden, ohne einen Wrapper zu erstellen, wird die Methode `then` bei nativen Promises nicht aufgerufen.) Wenn die Funktion `resolve` ein weiteres Thenable-Objekt erhält, wird es erneut aufgelöst, sodass der endgültige Erfüllungswert des Promise niemals ein Thenable ist.

## Beispiele

### Verwendung der statischen Methode Promise.resolve

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

### Auflösen eines anderen Promise

`Promise.resolve()` verwendet vorhandene `Promise`-Instanzen erneut. Wenn es ein natives Promise auflöst, gibt es dieselbe Promise-Instanz zurück, ohne einen Wrapper zu erstellen.

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

Die umgekehrte Reihenfolge der Protokollausgaben liegt daran, dass die `then`-Handler asynchron aufgerufen werden. Weitere Informationen finden Sie in der Referenz zu {{jsxref("Promise/then", "then()")}}.

### Auflösen von Thenables und Auslösen von Errors

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

Verschachtelte Thenables werden zu einem einzelnen Promise „tief abgeflacht“.

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
> Rufen Sie `Promise.resolve()` nicht für ein Thenable auf, das zu sich selbst aufgelöst wird. Dies führt zu unendlicher Rekursion, da versucht wird, ein unendlich verschachteltes Promise abzuflachen.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufrufen von resolve() für einen Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann für jeden Konstruktor aufgerufen werden, der dieselbe Signatur wie der Konstruktor `Promise()` implementiert. Beispielsweise können wir sie für einen Konstruktor aufrufen, der ihm `console.log` als `resolve` übergibt:

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

  static resolve = Promise.resolve;
}

const p = NotPromise.resolve("foo"); // Logs "Resolved foo"
// p is a NotPromise instance
```

Die Fähigkeit, verschachtelte Thenables abzuflachen, wird durch die Funktion `resolve` des Konstruktors `Promise()` implementiert. Wenn Sie sie daher für einen anderen Konstruktor aufrufen, werden verschachtelte Thenables möglicherweise nicht abgeflacht, abhängig davon, wie dieser Konstruktor seine Funktion `resolve` implementiert.

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

const p = NotPromise.resolve(thenable); // Logs "Resolved { then: [Function: then] }"
// p is a NotPromise instance
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
