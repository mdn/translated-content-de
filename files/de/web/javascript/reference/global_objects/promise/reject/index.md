---
title: Promise.reject()
short-title: reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
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

Die statische Funktion `Promise.reject` gibt ein `Promise` zurück, das abgelehnt wird. Für Debugging-Zwecke und selektives Fehlerfangen ist es nützlich, `reason` als `instanceof` {{jsxref("Error")}} zu gestalten.

`Promise.reject()` ist generisch und unterstützt Subclassing, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Promise des Unterklasstyps sein. Dazu muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — indem sie eine einzelne `executor`-Funktion akzeptiert, die mit den `resolve` und `reject` Rückrufen als Parameter aufgerufen werden kann. `Promise.reject()` ist im Wesentlichen eine Kurzform für `new Promise((resolve, reject) => reject(reason))`.

Im Gegensatz zu {{jsxref("Promise.resolve()")}} verpackt `Promise.reject()` den `reason` immer in einem neuen `Promise`-Objekt, selbst wenn `reason` bereits ein `Promise` ist.

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

### Dem Ablehnen mit einem Promise

Im Gegensatz zu {{jsxref("Promise.resolve")}} verwendet die `Promise.reject` Methode keine bestehenden `Promise`-Instanzen erneut. Sie gibt immer eine neue `Promise`-Instanz zurück, die `reason` umschließt.

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Aufruf von reject() bei einem Konstruktor, der kein Promise ist

`Promise.reject()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einem Konstruktor aufrufen, der `console.log` als `reject` übergibt:

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
