---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Methode **`Promise.resolve()`** "löst" einen gegebenen Wert zu einem {{jsxref("Promise")}} auf. Wenn der Wert ein Promise ist, wird dieses Promise zurückgegeben; wenn der Wert ein [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist, wird `Promise.resolve()` die Methode `then()` mit zwei vorbereiteten Rückrufmethoden aufrufen; andernfalls wird das zurückgegebene Promise mit dem Wert erfüllt.

Diese Funktion reduziert geschachtelte Ebenen von promise-ähnlichen Objekten (z.B. ein Promise, das zu einem Promise führt, das zu etwas führt) auf eine einzige Ebene – ein Promise, das zu einem nicht-thenable Wert führt.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

## Syntax

```js-nolint
Promise.resolve(value)
```

### Parameter

- `value`
  - : Argument, das von diesem `Promise` aufgelöst werden soll. Kann auch ein `Promise` oder ein thenable sein, das aufgelöst werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Wert aufgelöst wird, oder das Promise, das als Wert übergeben wurde, wenn der Wert ein Promise-Objekt war. Ein aufgelöstes Promise kann in jedem der Zustände sein – erfüllt, abgelehnt oder ausstehend. Zum Beispiel wird das Auflösen eines abgelehnten Promises immer noch zu einem abgelehnten Promise führen.

## Beschreibung

`Promise.resolve()` _löst_ ein Promise auf, was nicht dasselbe ist wie das Erfüllen oder Ablehnen des Promises. Siehe [Promise-Beschreibung](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#description) für Definitionen der Terminologie. Kurz gesagt, gibt `Promise.resolve()` ein Promise zurück, dessen endgültiger Zustand von einem anderen Promise, thenable Objekt oder Wert abhängt.

> [!NOTE]
> Wenn die Bewertung des `value`-Ausdrucks synchron einen Fehler verursachen kann, wird dieser Fehler nicht abgefangen und in ein abgelehntes Promise von `Promise.resolve()` eingewickelt. Erwägen Sie in diesem Fall die Verwendung von {{jsxref("Promise/try", "Promise.try(() => value)")}}.

`Promise.resolve()` ist generisch und unterstützt Subklassierung. Das bedeutet, dass es auf Subklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Promise des Subklasstyps sein. Dazu muss der Konstruktor der Subklasse die gleiche Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren – das heißt, eine einzelne `executor` Funktion zu akzeptieren, die mit den `resolve` und `reject` Rückrufen als Parameter aufgerufen werden kann.

`Promise.resolve()` behandelt native `Promise`-Instanzen auf besondere Weise. Wenn `value` zu `Promise` oder einer Unterklasse gehört und `value.constructor === Promise`, dann wird `value` direkt von `Promise.resolve()` zurückgegeben, ohne eine neue `Promise`-Instanz zu erstellen. Andernfalls ist `Promise.resolve()` im Wesentlichen eine Abkürzung für `new Promise((resolve) => resolve(value))`.

Der Großteil der Auflösungslogik wird tatsächlich von der [`resolve`-Funktion](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) implementiert, die vom `Promise()`-Konstruktor übergeben wird. Zusammengefasst:

- Wenn ein nicht-[thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Wert übergeben wird, ist das zurückgegebene Promise bereits mit diesem Wert erfüllt.
- Wenn ein thenable übergeben wird, wird das zurückgegebene Promise den Zustand dieses thenable annehmen, indem die `then`-Methode aufgerufen wird und ein Paar von auflösenden Funktionen als Argumente übergeben werden. (Da native Promises direkt durch `Promise.resolve()` ohne Erstellen einer Umhüllung weitergegeben werden, wird die `then`-Methode nicht auf nativen Promises aufgerufen.) Wenn die `resolve`-Funktion ein weiteres thenable-Objekt erhält, wird es erneut aufgelöst, sodass der endgültige Erfüllungswert des Promises niemals thenable sein wird.

## Beispiele

### Verwendung der statischen Promise.resolve Methode

```js
Promise.resolve("Success").then(
  (value) => {
    console.log(value); // "Success"
  },
  (reason) => {
    // nicht aufgerufen
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

`Promise.resolve()` verwendet vorhandene `Promise`-Instanzen erneut. Wenn es ein natives Promise auflöst, gibt es die gleiche Promise-Instanz zurück, ohne eine Umhüllung zu erstellen.

```js
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((value) => {
  console.log(`value: ${value}`);
});
console.log(`original === cast ? ${original === cast}`);

// Protokolliert, in Ordnung:
// original === cast ? true
// value: 33
```

Die umgekehrte Reihenfolge der Protokolle liegt daran, dass die `then`-Handler asynchron aufgerufen werden. Siehe die {{jsxref("Promise/then", "then()")}} Referenz für weitere Informationen.

### Auflösen von thenables und Werfen von Fehlern

```js
// Auflösen eines thenable Objekts
const p1 = Promise.resolve({
  then(onFulfill, onReject) {
    onFulfill("fulfilled!");
  },
});
console.log(p1 instanceof Promise); // true, Objekt in ein Promise umgewandelt

p1.then(
  (v) => {
    console.log(v); // "fulfilled!"
  },
  (e) => {
    // nicht aufgerufen
  },
);

// Thenable wirft
// Promise lehnt ab
const p2 = Promise.resolve({
  then() {
    throw new TypeError("Throwing");
  },
});
p2.then(
  (v) => {
    // nicht aufgerufen
  },
  (e) => {
    console.error(e); // TypeError: Throwing
  },
);

// Thenable wirft nach Rückruf
// Promise löst auf
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
    // nicht aufgerufen
  },
);
```

Verschachtelte thenables werden in ein einzelnes Promise "tief abgeflacht".

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // Das thenable wird mit einem weiteren thenable erfüllt
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
> Rufen Sie `Promise.resolve()` nicht auf ein thenable auf, das sich selbst auflöst. Das führt zu einer Endlosrekursion, da versucht wird, ein unendlich verschachteltes Promise abzuflachen.

```js example-bad
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled(thenable);
  },
};

Promise.resolve(thenable); // Führt zu Endlosrekursion.
```

### Aufrufen von resolve() auf einem Nicht-Promise-Konstruktor

`Promise.resolve()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der die gleiche Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir es auf einem Konstruktor aufrufen, der `console.log` als `resolve` übergibt:

```js
class NotPromise {
  constructor(executor) {
    // Die "resolve" und "reject" Funktionen verhalten sich ganz anders als die
    // des nativen Promises, aber Promise.resolve() ruft sie auf die gleiche Weise auf.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.resolve.call(NotPromise, "foo"); // Protokolliert "Resolved foo"
```

Die Fähigkeit, verschachtelte thenables abzuflachen, wird von der `resolve`-Funktion des `Promise()`-Konstruktors implementiert. Wenn Sie es auf einen anderen Konstruktor aufrufen, werden verschachtelte thenables möglicherweise nicht abgeflacht, abhängig davon, wie dieser Konstruktor seine `resolve`-Funktion implementiert.

```js
const thenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // Das thenable wird mit einem weiteren thenable erfüllt
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve.call(NotPromise, thenable); // Protokolliert "Resolved { then: [Function: then] }"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
