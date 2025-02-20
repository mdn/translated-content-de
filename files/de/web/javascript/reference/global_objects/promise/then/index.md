---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`then()`**-Methode von {{jsxref("Promise")}}-Instanzen nimmt bis zu zwei Argumente: Callback-Funktionen für die erfolgreiche Erfüllung und Zurückweisung des `Promise`. Sie speichert die Callbacks innerhalb des Promises, auf dem sie aufgerufen wurde, und gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, wodurch Sie Aufrufe anderer Promise-Methoden [verketteten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

{{InteractiveExample("JavaScript Demo: Promise.then()")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  resolve("Success!");
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "Success!"
});
```

## Syntax

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### Parameter

- `onFulfilled`

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise erfolgreich erfüllt wird. Der Rückgabewert wird zum Erfüllungswert des durch `then()` zurückgegebenen Promises. Die Funktion wird mit folgenden Argumenten aufgerufen:

    - `value`
      - : Der Wert, mit dem das Promise erfüllt wurde.

    Wenn es sich nicht um eine Funktion handelt, wird sie intern durch eine _Identitätsfunktion_ (`(x) => x`) ersetzt, die den Erfüllungswert einfach weitergibt.

- `onRejected` {{optional_inline}}

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgelehnt wird. Der Rückgabewert wird zum Erfüllungswert des durch `then()` zurückgegebenen Promises. Die Funktion wird mit folgenden Argumenten aufgerufen:

    - `reason`
      - : Der Wert, mit dem das Promise abgelehnt wurde.

    Wenn es sich nicht um eine Funktion handelt, wird sie intern durch eine _Thrower-Funktion_ (`(x) => { throw x; }`) ersetzt, die den abgelehnten Grund weitergibt, den sie erhält.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom aktuellen Status des ursprünglichen Promises.

Einer der `onFulfilled`- und `onRejected`-Handler wird ausgeführt, um die Erfüllung oder Zurückweisung des aktuellen Promises zu behandeln. Der Aufruf erfolgt immer asynchron, auch wenn das aktuelle Promise bereits abgeschlossen ist. Das Verhalten des zurückgegebenen Promises (nennen wir es `p`) hängt vom Ergebnis der Ausführung des Handlers ab, gemäß einer spezifischen Regel. Falls die Handler-Funktion:

- einen Wert zurückgibt: `p` wird mit diesem zurückgegebenen Wert erfüllt.
- nichts zurückgibt: `p` wird mit `undefined` erfüllt.
- einen Fehler wirft: `p` wird mit dem geworfenen Fehler zurückgewiesen.
- ein bereits erfülltes Promise zurückgibt: `p` wird mit dem Wert dieses Promises erfüllt.
- ein bereits abgelehntes Promise zurückgibt: `p` wird mit dem Wert dieses Promises zurückgewiesen.
- ein anderes ausstehendes Promise zurückgibt: `p` bleibt ausstehend und wird erfüllt/zurückgewiesen mit dem Wert dieses Promises, sobald dieses Promise erfüllt/zurückgewiesen wird.

## Beschreibung

Die `then()`-Methode plant Callback-Funktionen für die eventuelle Fertigstellung eines Promises — entweder Erfüllung oder Zurückweisung. Sie ist die primitive Methode von Promises: Das [Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)-Protokoll erwartet, dass alle promise-ähnlichen Objekte eine `then()`-Methode bereitstellen, und die {{jsxref("Promise/catch", "catch()")}}- und {{jsxref("Promise/finally", "finally()")}}-Methoden funktionieren beide, indem die `then()`-Methode des Objekts aufgerufen wird.

Weitere Informationen über den `onRejected`-Handler finden Sie in der {{jsxref("Promise/catch", "catch()")}}-Referenz.

`then()` gibt ein neues Promise-Objekt zurück, verändert jedoch das Promise-Objekt, auf dem es aufgerufen wird, indem es die Handler an eine interne Liste anhängt. Daher wird der Handler vom ursprünglichen Promise beibehalten, und seine Lebensdauer ist mindestens so lang wie die des ursprünglichen Promises. Zum Beispiel wird im folgenden Beispiel irgendwann der Speicher ausgehen, auch wenn das zurückgegebene Promise nicht beibehalten wird:

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

Rufen Sie die `then()`-Methode zweimal auf demselben Promise-Objekt auf (statt zu verketteten), dann hat dieses Promise-Objekt zwei Paare von Abwicklungs-Handlern. Alle Handler, die an dasselbe Promise-Objekt angehängt sind, werden immer in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Darüber hinaus starten die beiden Promises, die von jedem Aufruf von `then()` zurückgegeben werden, separate Ketten und warten nicht auf die Abwicklung des jeweils anderen.

[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables)-Objekte, die entlang der `then()`-Kette entstehen, werden immer [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — der `onFulfilled`-Handler erhält niemals ein Thenable-Objekt, und alle Thenables, die von einem der Handler zurückgegeben werden, werden immer aufgelöst, bevor sie an den nächsten Handler weitergegeben werden. Dies liegt daran, dass beim Erstellen des neuen Promises die vom `executor` übergebenen `resolve`- und `reject`-Funktionen gespeichert werden, und wenn das aktuelle Promise abgeschlossen ist, die jeweilige Funktion mit dem Erfüllungswert oder Zurückweisungsgrund aufgerufen wird. Die Auflösungslogik stammt von der `resolve`-Funktion, die vom {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor übergeben wird.

`then()` unterstützt Subclassing, was bedeutet, dass es auf Instanzen von Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis ein Promise des Unterklassentyps ist. Sie können den Typ des Rückgabewerts mithilfe der [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)-Eigenschaft anpassen.

## Beispiele

### Verwendung der then()-Methode

```js
const p1 = new Promise((resolve, reject) => {
  resolve("Success!");
  // or
  // reject(new Error("Error!"));
});

p1.then(
  (value) => {
    console.log(value); // Success!
  },
  (reason) => {
    console.error(reason); // Error!
  },
);
```

### Ein nicht funktionales Argument als Parameter

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### Verkettung

Die `then`-Methode gibt ein neues `Promise` zurück, wodurch eine Methodenverkettung ermöglicht wird.

Wenn die als Handler an `then` übergebene Funktion ein `Promise` zurückgibt, wird ein entsprechendes `Promise` für das nachfolgende `then` in der Methoden-Kette verfügbar. Im unten stehenden Codeausschnitt wird asynchroner Code mit der `setTimeout`-Funktion simuliert.

```js
Promise.resolve("foo")
  // 1. Receive "foo", concatenate "bar" to it, and resolve that to the next then
  .then(
    (string) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          string += "bar";
          resolve(string);
        }, 1);
      }),
  )
  // 2. receive "foobar", register a callback function to work on that string
  // and print it to the console, but not before returning the unworked on
  // string to the next then
  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })
  // 3. print helpful messages about how the code in this section will be run
  // before the string is actually processed by the mocked asynchronous code in the
  // previous then block.
  .then((string) => {
    console.log(
      "Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising",
    );

    // Note that `string` will not have the 'baz' bit of it at this point. This
    // is because we mocked that to happen asynchronously with a setTimeout function
    console.log(string); // foobar
  });

// Logs, in order:
// Last Then: oops... didn't bother to instantiate and return a promise in the prior then so the sequence may be a bit surprising
// foobar
// foobarbaz
```

Der von `then()` zurückgegebene Wert wird auf dieselbe Weise aufgelöst wie {{jsxref("Promise.resolve()")}}. Das bedeutet, dass [Thenable-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) unterstützt werden und der Rückgabewert, wenn es sich nicht um ein Promise handelt, implizit in ein Promise eingewickelt und anschließend aufgelöst wird.

```js
const p2 = new Promise((resolve, reject) => {
  resolve(1);
});

p2.then((value) => {
  console.log(value); // 1
  return value + 1;
}).then((value) => {
  console.log(value, "- A synchronous value works"); // 2 - A synchronous value works
});

p2.then((value) => {
  console.log(value); // 1
});
```

Ein `then`-Aufruf gibt ein Promise zurück, das schließlich abgelehnt wird, wenn die Funktion einen Fehler wirft oder ein abgelehntes Promise zurückgibt.

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .then(
    () => {
      console.log("Not called.");
    },
    (error) => {
      console.error(`onRejected function called: ${error.message}`);
    },
  );
```

In der Praxis ist es oft wünschenswert, abgelehnte Promises mit [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abzufangen, anstatt die zwei-Case-Syntax von `then()` zu verwenden, wie im folgenden Beispiel gezeigt.

```js
Promise.resolve()
  .then(() => {
    // Makes .then() return a rejected promise
    throw new Error("Oh no!");
  })
  .catch((error) => {
    console.error(`onRejected function called: ${error.message}`);
  })
  .then(() => {
    console.log("I am always called even if the prior then's promise rejects");
  });
```

In allen anderen Fällen wird das zurückgegebene Promise schließlich erfüllt. Im folgenden Beispiel gibt das erste `then()` `42` zurück, das in einem erfüllten Promise eingewickelt ist, selbst wenn das vorherige Promise in der Kette abgelehnt wurde.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a fulfilled Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

Wenn `onFulfilled` ein Promise zurückgibt, wird der Rückgabewert von `then` entsprechend dem endgültigen Status dieses Promises erfüllt/abgelehnt.

```js
function resolveLater(resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 1000);
}
function rejectLater(resolve, reject) {
  setTimeout(() => {
    reject(new Error("Error"));
  }, 1000);
}

const p1 = Promise.resolve("foo");
const p2 = p1.then(() => {
  // Return promise here, that will be resolved to 10 after 1 second
  return new Promise(resolveLater);
});
p2.then(
  (v) => {
    console.log("resolved", v); // "resolved", 10
  },
  (e) => {
    // not called
    console.error("rejected", e);
  },
);

const p3 = p1.then(() => {
  // Return promise here, that will be rejected with 'Error' after 1 second
  return new Promise(rejectLater);
});
p3.then(
  (v) => {
    // not called
    console.log("resolved", v);
  },
  (e) => {
    console.error("rejected", e); // "rejected", 'Error'
  },
);
```

Sie können Verkettungen verwenden, um auf einer Funktion mit einer Promise-basierten API eine andere solche Funktion zu implementieren.

```js
function fetchCurrentData() {
  // The fetch() API returns a Promise. This function
  // exposes a similar API, except the fulfillment
  // value of this function's Promise has had more
  // work done on it.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // maybe do something with j

    // fulfillment value given to user of
    // fetchCurrentData().then()
    return j;
  });
}
```

### Asynchronität von then()

Das folgende Beispiel demonstriert die Asynchronität der `then`-Methode.

```js
// Using a resolved promise 'resolvedProm' for example,
// the function call 'resolvedProm.then(...)' returns a new promise immediately,
// but its handler '(value) => {...}' will get called asynchronously as demonstrated by the console.logs.
// the new promise is assigned to 'thenProm',
// and thenProm will be resolved with the value returned by handler
const resolvedProm = Promise.resolve(33);
console.log(resolvedProm);

const thenProm = resolvedProm.then((value) => {
  console.log(
    `this gets called after the end of the main stack. the value received is: ${value}, the value returned is: ${
      value + 1
    }`,
  );
  return value + 1;
});
console.log(thenProm);

// Using setTimeout, we can postpone the execution of a function to the moment the stack is empty
setTimeout(() => {
  console.log(thenProm);
});

// Logs, in order:
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "this gets called after the end of the main stack. the value received is: 33, the value returned is: 34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
