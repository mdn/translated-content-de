---
title: Promise.reject()
short-title: reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
l10n:
  sourceCommit: a6a2daec3965d85ef6dfc06cfd3507c1b2f886e2
---

Die statische Methode **`Promise.reject()`** gibt ein `Promise`-Objekt zurück, das mit einem angegebenen Grund abgelehnt wird.

{{InteractiveExample("JavaScript Demo: Promise.reject()")}}

```js interactive-example
function resolved(result) {
  console.log("Resolved");
}

function rejected(result) {
  console.error(result);
}

Promise.reject(new Error("fail")).then(resolved, rejected);
// Expected output: Error: fail
```

## Syntax

```js-nolint
Promise.reject(reason)
```

### Parameter

- `reason`
  - : Grund, warum dieses `Promise` abgelehnt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem angegebenen Grund abgelehnt wird.

## Beschreibung

Die statische Funktion `Promise.reject` gibt ein abgelehntes `Promise` zurück. Für Debugging-Zwecke und selektives Abfangen von Fehlern ist es hilfreich, `reason` zu einem `instanceof` {{jsxref("Error")}} zu machen.

`Promise.reject()` ist generisch und unterstützt Vererbung, was bedeutet, dass sie auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassentyps ist. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der Konstruktor [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) implementieren — er muss eine einzelne `executor`-Funktion akzeptieren, die mit den Callbacks `resolve` und `reject` als Parametern aufgerufen werden kann. `Promise.reject()` ist im Wesentlichen eine Kurzform für `new Promise((resolve, reject) => reject(reason))`.

Anders als {{jsxref("Promise.resolve()")}} verpackt `Promise.reject()` `reason` immer in ein neues `Promise`-Objekt, selbst wenn `reason` bereits ein `Promise` ist.

## Beispiele

### Verwenden der statischen Methode Promise.reject()

```js
Promise.reject(new Error("fail")).then(
  () => {
    // not called
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);
```

### Ablehnen mit einem Promise

Anders als {{jsxref("Promise.resolve")}} verwendet die Methode `Promise.reject` vorhandene `Promise`-Instanzen nicht wieder. Sie gibt immer eine neue `Promise`-Instanz zurück, die `reason` verpackt.

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Aufrufen von reject() auf einem Nicht-Promise-Konstruktor

`Promise.reject()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der Konstruktor `Promise()` implementiert. Beispielsweise können wir sie auf einem Konstruktor aufrufen, der ihr `console.log` als `reject` übergibt:

```js
class NotPromise {
  constructor(executor) {
    // The "resolve" and "reject" functions behave nothing like the
    // native promise's, but Promise.reject() calls them in the same way.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }

  static reject = Promise.reject;
}

const p = NotPromise.reject("foo"); // Logs "Rejected foo"
// p is a NotPromise instance
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
