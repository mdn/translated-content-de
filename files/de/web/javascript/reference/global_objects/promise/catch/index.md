---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{JSRef}}

Die **`catch()`**-Methode von {{jsxref("Promise")}}-Instanzen plant die Ausführung einer Funktion, wenn das Promise abgelehnt wird. Sie gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, wodurch es Ihnen ermöglicht wird, [Methodenverkettungen](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) mit anderen Promise-Methoden zu erstellen. Sie ist eine Abkürzung für {{jsxref("Promise/then", "then(undefined, onRejected)")}}.

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## Syntax

```js-nolint
promiseInstance.catch(onRejected)
```

### Parameter

- `onRejected`
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgelehnt wird. Ihr Rückgabewert wird zum Erfüllungswert des von `catch()` zurückgegebenen Promises. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `reason`
      - : Der Wert, mit dem das Promise abgelehnt wurde.

### Rückgabewert

Gibt ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises. Wenn `onRejected` aufgerufen wird, wird das zurückgegebene Promise basierend auf dem Rückgabewert dieses Aufrufs aufgelöst oder mit dem von diesem Aufruf geworfenen Fehler abgelehnt. Wenn das aktuelle Promise erfüllt wird, wird `onRejected` nicht aufgerufen und das zurückgegebene Promise wird mit demselben Wert erfüllt.

## Beschreibung

Die `catch`-Methode wird zur Fehlerbehandlung in der Promisekomposition verwendet. Da sie ein {{jsxref("Promise")}} zurückgibt, [kann sie verkettet werden](/de/docs/Web/JavaScript/Guide/Using_promises#chaining_after_a_catch), genau wie ihre Schwester-Methode, {{jsxref("Promise/then", "then()")}}.

Wenn ein Promise abgelehnt wird und keine Ablehnungs-Handler aufgerufen werden (ein Handler kann durch eines der {{jsxref("Promise/then", "then()")}}, `catch()` oder {{jsxref("Promise/finally", "finally()")}} angehängt werden), dann wird das Ablehnungsereignis vom Host geordnet. Im Browser resultiert dies in einem [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)-Ereignis. Wenn ein Handler an ein abgelehntes Promise angehängt wird, dessen Ablehnung bereits ein unbehandeltes Ablehnungsereignis verursacht hat, dann wird ein weiteres [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)-Ereignis ausgelöst.

`catch()` ruft intern `then()` auf dem Objekt auf, auf dem es aufgerufen wurde, und übergibt `undefined` und `onRejected` als Argumente. Der Wert dieses Aufrufs wird direkt zurückgegeben. Dies ist beobachtbar, wenn Sie die Methoden umwickeln.

```js
// Überschreiben der ursprünglichen Promise.prototype.then/catch, um einige Logs hinzuzufügen
((Promise) => {
  const originalThen = Promise.prototype.then;
  const originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function (...args) {
    console.log("Called .then on %o with arguments: %o", this, args);
    return originalThen.apply(this, args);
  };
  Promise.prototype.catch = function (...args) {
    console.error("Called .catch on %o with arguments: %o", this, args);
    return originalCatch.apply(this, args);
  };
})(Promise);

// .catch auf einem bereits aufgelösten Promise aufrufen
Promise.resolve().catch(function XXX() {});

// Logs:
// Called .catch on Promise{} with arguments: Arguments{1} [0: function XXX()]
// Called .then on Promise{} with arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

Dies bedeutet, dass das Übergeben von `undefined` dazu führt, dass das zurückgegebene Promise abgelehnt wird, und Sie müssen eine Funktion übergeben, um zu verhindern, dass das endgültige Promise abgelehnt wird.

Da `catch()` nur `then()` aufruft, unterstützt es Subklassebildung.

> [!NOTE]
> In den untenstehenden Beispielen werden Instanzen von [`Error`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) geworfen. Wie bei synchronen [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw)-Anweisungen wird dies als gute Praxis angesehen; andernfalls müsste der Teil, der das Abfangen durchführt, prüfen, ob das Argument ein String oder ein Fehler war, und Sie könnten wertvolle Informationen wie Stack-Traces verlieren.

## Beispiele

### Verwenden und Verketten der catch()-Methode

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success");
});

p1.then((value) => {
  console.log(value); // "Success!"
  throw new Error("oh, no!");
})
  .catch((e) => {
    console.error(e.message); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );

// Das folgende verhält sich genauso wie oben
p1.then((value) => {
  console.log(value); // "Success!"
  return Promise.reject("oh, no!");
})
  .catch((e) => {
    console.error(e); // "oh, no!"
  })
  .then(
    () => console.log("after a catch the chain is restored"), // "after a catch the chain is restored"
    () => console.log("Not fired due to the catch"),
  );
```

### Fallstricke beim Werfen von Fehlern

Das Werfen eines Fehlers ruft die `catch()`-Methode meistens auf:

```js
const p1 = new Promise((resolve, reject) => {
  throw new Error("Uh-oh!");
});

p1.catch((e) => {
  console.error(e); // "Uh-oh!"
});
```

Fehler, die innerhalb asynchroner Funktionen geworfen werden, wirken wie nicht abgefangene Fehler:

```js
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    throw new Error("Uncaught Exception!");
  }, 1000);
});

p2.catch((e) => {
  console.error(e); // Dies wird nie aufgerufen
});
```

Fehler, die nach dem Aufruf von `resolve` geworfen werden, werden unterdrückt:

```js
const p3 = new Promise((resolve, reject) => {
  resolve();
  throw new Error("Silenced Exception!");
});

p3.catch((e) => {
  console.error(e); // Dies wird nie aufgerufen
});
```

### catch() wird nicht aufgerufen, wenn das Promise erfüllt ist

```js
// Ein Promise erstellen, das onReject nicht aufruft
const p1 = Promise.resolve("calling next");

const p2 = p1.catch((reason) => {
  // Dies wird nie aufgerufen
  console.error("catch p1!");
  console.error(reason);
});

p2.then(
  (value) => {
    console.log("next promise's onFulfilled");
    console.log(value); // calling next
  },
  (reason) => {
    console.log("next promise's onRejected");
    console.log(reason);
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
- {{jsxref("Promise.prototype.finally()")}}
