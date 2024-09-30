---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Methode **`Promise.reject()`** gibt ein `Promise`-Objekt zurück, das mit einem gegebenen Grund abgelehnt wird.

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

## Syntax

```js-nolint
Promise.reject(reason)
```

### Parameter

- `reason`
  - : Grund, warum dieses `Promise` abgelehnt wurde.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit dem gegebenen Grund abgelehnt wird.

## Beschreibung

Die statische Funktion `Promise.reject` gibt ein `Promise` zurück, das abgelehnt wird. Zu Debugging-Zwecken und zur selektiven Fehlerbehandlung ist es nützlich, den `reason` als `instanceof` {{jsxref("Error")}} zu gestalten.

`Promise.reject()` ist generisch und unterstützt Subklassifizierung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein `Promise` des Unterklasstyps sein wird. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — wobei eine einzelne `executor`-Funktion akzeptiert wird, die mit den `resolve`- und `reject`-Rückrufparametern aufgerufen werden kann. `Promise.reject()` ist im Wesentlichen eine Kurzform für `new Promise((resolve, reject) => reject(reason))`.

Anders als {{jsxref("Promise.resolve()")}} umschließt `Promise.reject()` den `reason` immer in einem neuen `Promise`-Objekt, selbst wenn `reason` bereits ein `Promise` ist.

## Beispiele

### Verwendung der statischen Methode Promise.reject()

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

Im Gegensatz zu {{jsxref("Promise.resolve")}} verwendet die Methode `Promise.reject` keine bestehenden `Promise`-Instanzen erneut. Sie gibt immer eine neue `Promise`-Instanz zurück, die `reason` umschließt.

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Aufrufen von reject() mit einem Nicht-Promise-Konstruktor

`Promise.reject()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Beispielsweise können wir es auf einem Konstruktor aufrufen, der `console.log` als `reject` übergibt:

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
}

Promise.reject.call(NotPromise, "foo"); // Logs "Rejected foo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
