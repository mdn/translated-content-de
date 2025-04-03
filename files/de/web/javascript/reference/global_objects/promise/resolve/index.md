---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{JSRef}}

Die statische Methode **`Promise.resolve()`** "löst" einen gegebenen Wert zu einem {{jsxref("Promise")}} auf. Wenn der Wert ein Versprechen (Promise) ist, wird dieses Versprechen zurückgegeben; wenn der Wert ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, wird `Promise.resolve()` die `then()`-Methode mit zwei vorbereiteten Rückruf-Funktionen aufrufen; andernfalls wird das zurückgegebene Versprechen mit dem Wert erfüllt.

Diese Funktion glättet verschachtelte Schichten von promise-ähnlichen Objekten (z. B. ein Versprechen, das zu einem Versprechen erfüllt wird, das zu etwas anderem erfüllt wird) in eine einzige Schicht — ein Versprechen, das zu einem nicht-thennable Wert erfüllt wird.

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
  - : Argument, das von diesem `Promise` aufgelöst werden soll. Kann auch ein `Promise` oder ein dann erfüllbarem Objekt (thenable) sein, das aufgelöst werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst wird, oder das Versprechen, das als Wert übergeben wurde, falls es sich um ein Versprechen-Objekt handelte. Ein aufgelöstes Versprechen kann in jedem der Zustände sein — erfüllt, abgelehnt oder ausstehend. Beispielsweise führt das Auflösen eines abgelehnten Versprechens weiterhin zu einem abgelehnten Versprechen.

## Beschreibung

`Promise.resolve()` _löst_ ein Versprechen auf, was nicht dasselbe ist wie das Erfüllen oder Ablehnen des Versprechens. Siehe [Promise Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für Definitionen der Terminologie. Kurz gesagt, `Promise.resolve()` gibt ein Versprechen zurück, dessen endgültiger Zustand von einem anderen Versprechen, einem then-fähigen Objekt oder einem anderen Wert abhängt.

> [!NOTE]
> Wenn die Auswertung des Ausdrucks `value` synchron einen Fehler auslösen kann, wird dieser Fehler nicht von `Promise.resolve()` abgefangen und in ein abgelehntes Versprechen gewickelt. In diesem Fall sollten Sie {{jsxref("Promise/try", "Promise.try(() => value)")}} in Betracht ziehen.

`Promise.resolve()` ist generisch und unterstützt Subklassierung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Versprechen vom Typ der Unterklasse sein. Zu diesem Zweck muss der Konstruktor der Unterklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — indem er eine einzelne `executor`-Funktion akzeptiert, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise`-Instanzen speziell. Wenn `value` zu `Promise` oder einer Unterklasse gehört und `value.constructor === Promise`, wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Kurzform für `new Promise((resolve) => resolve(value))`.

Die meisten Logiken zur Auflösung werden tatsächlich von der [`resolve`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) umgesetzt, die vom `Promise()`-Konstruktor übergeben wird. Zusammengefasst:

- Wenn ein nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert übergeben wird, ist das zurückgegebene Versprechen bereits mit diesem Wert erfüllt.
- Wenn ein dann erfüllbares Objekt übergeben wird, übernimmt das zurückgegebene Versprechen den Zustand dieses Objekts, indem die `then`-Methode mit einem Paar von Auflösungsfunktionen als Argumente aufgerufen wird. (Da native Versprechen direkt durch `Promise.resolve()` ohne Erstellung eines Wrappers durchlaufen, wird die `then`-Methode nicht auf nativen Versprechungen aufgerufen.) Wenn die `resolve`-Funktion ein weiteres thenables Objekt erhält, wird es erneut aufgelöst, sodass der endgültige Erfüllungswert des Versprechens niemals thenable sein wird.

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

### Auflösen eines anderen Versprechens

`Promise.resolve()` verwendet bestehende `Promise`-Instanzen erneut. Wenn es ein natives Versprechen auflöst, wird die gleiche Versprechen-Instanz zurückgegeben, ohne einen Wrapper zu erstellen.

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

Die umgekehrte Reihenfolge der Protokolle ist darauf zurückzuführen, dass die `then`-Handler asynchron aufgerufen werden. Siehe die {{jsxref("Promise/then", "then()")}} Referenz für weitere Informationen.

### Auflösen von thenables und Werfen von Fehlern

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

Verschachtelte thenables werden "tief geflättet" zu einem einzelnen Versprechen.

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
> Rufen Sie `Promise.resolve()` nicht auf einem thenable auf, das sich selbst auflöst. Das führt zu einer unendlichen Rekursion, da es versucht, ein unendlich verschachteltes Versprechen zu glätten.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Will lead to infinite recursion.
```

### Aufrufen von resolve() bei einem Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einen Konstruktor aufrufen, der `console.log` als `resolve` übergibt:

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

Die Fähigkeit, verschachtelte thenables zu glätten, wird von der `resolve`-Funktion des `Promise()`-Konstruktors implementiert. Wenn Sie sie also bei einem anderen Konstruktor aufrufen, werden verschachtelte thenables möglicherweise nicht geglättet, abhängig davon, wie dieser Konstruktor seine `resolve`-Funktion implementiert.

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
