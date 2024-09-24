---
title: Promise.reject()
slug: Web/JavaScript/Reference/Global_Objects/Promise/reject
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

Die statische Methode **`Promise.reject()`** gibt ein `Promise`-Objekt zurück, das mit einem angegebenen Grund abgelehnt wird.

{{EmbedInteractiveExample("pages/js/promise-reject.html")}}

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

Die statische Funktion `Promise.reject` gibt ein `Promise` zurück, das abgelehnt wird. Aus Debugging-Zwecken und für selektives Fehler-Catching ist es nützlich, `reason` zu einem `instanceof` {{jsxref("Error")}} zu machen.

`Promise.reject()` ist generisch und unterstützt die Unterklassenbildung, was bedeutet, dass es auf Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklasstyps sein wird. Damit dies funktioniert, muss der Konstruktor der Unterklasse dieselbe Signatur wie der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor implementieren — eine einzelne `executor`-Funktion akzeptieren, die mit den `resolve`- und `reject`-Rückrufen als Parameter aufgerufen werden kann. `Promise.reject()` ist im Wesentlichen eine Kurzschreibweise für `new Promise((resolve, reject) => reject(reason))`.

Im Gegensatz zu {{jsxref("Promise.resolve()")}} umschließt `Promise.reject()` den `reason` immer in einem neuen `Promise`-Objekt, selbst wenn `reason` bereits ein `Promise` ist.

## Beispiele

### Verwenden der statischen Methode Promise.reject()

```js
Promise.reject(new Error("fail")).then(
  () => {
    // nicht aufgerufen
  },
  (error) => {
    console.error(error); // Stacktrace
  },
);
```

### Ablehnung mit einem Promise

Anders als bei {{jsxref("Promise.resolve")}} verwendet die `Promise.reject`-Methode keine bestehenden `Promise`-Instanzen wieder. Sie gibt immer eine neue `Promise`-Instanz zurück, die den `reason` umschließt.

```js
const p = Promise.resolve(1);
const rejected = Promise.reject(p);
console.log(rejected === p); // false
rejected.catch((v) => {
  console.log(v === p); // true
});
```

### Aufruf von reject() auf einem Nicht-Promise-Konstruktor

`Promise.reject()` ist eine generische Methode. Sie kann auf jedem Konstruktor aufgerufen werden, der dieselbe Signatur wie der `Promise()`-Konstruktor implementiert. Zum Beispiel können wir sie auf einen Konstruktor aufrufen, der `console.log` als `reject` übergibt:

```js
class NotPromise {
  constructor(executor) {
    // Die "resolve"- und "reject"-Funktionen verhalten sich ganz anders
    // als die des nativen Promise, aber Promise.reject() ruft sie auf die gleiche Weise auf.
    executor(
      (value) => console.log("Resolved", value),
      (reason) => console.log("Rejected", reason),
    );
  }
}

Promise.reject.call(NotPromise, "foo"); // Protokolliert "Rejected foo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
