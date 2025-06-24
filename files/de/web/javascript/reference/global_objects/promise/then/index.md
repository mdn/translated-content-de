---
title: Promise.prototype.then()
short-title: then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{JSRef}}

Die **`then()`** Methode von {{jsxref("Promise")}} Instanzen nimmt bis zu zwei Argumente auf: Callback-Funktionen für die erfüllten und abgelehnten Fälle des `Promise`. Es speichert die Callbacks innerhalb des Promise, auf dem es aufgerufen wird, und gibt sofort ein weiteres {{jsxref("Promise")}} Objekt zurück, wodurch Sie [Aufrufe zu anderen Promise-Methoden verketten](/de/docs/Web/JavaScript/Guide/Using_promises#chaining) können.

{{InteractiveExample("JavaScript Demo: Promise.prototype.then()")}}

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

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise erfüllt wird. Der Rückgabewert wird zum Erfüllungswert des von `then()` zurückgegebenen Promise. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `value`
      - : Der Wert, mit dem das Promise erfüllt wurde.

    Wenn keine Funktion angegeben wird, wird es intern durch eine _Identitäts_-Funktion (`(x) => x`) ersetzt, die den Erfüllungswert einfach weitergibt.

- `onRejected` {{optional_inline}}

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgelehnt wird. Der Rückgabewert wird zum Erfüllungswert des von `then()` zurückgegebenen Promise. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `reason`
      - : Der Wert, mit dem das Promise abgelehnt wurde.

    Wenn keine Funktion angegeben wird, wird es intern durch eine _Werfer_-Funktion (`(x) => { throw x; }`) ersetzt, die den abgelehnten Grund, den sie erhalten hat, wirft.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer am Anfang ausstehend, unabhängig vom Status des aktuellen Promise.

Einer der `onFulfilled`- oder `onRejected`-Handler wird ausgeführt, um die Erfüllung oder Ablehnung des aktuellen Promise zu behandeln. Der Aufruf erfolgt immer asynchron, selbst wenn das aktuelle Promise bereits abgeschlossen ist. Das Verhalten des zurückgegebenen Promise (nennen wir es `p`) hängt vom Ausführungsergebnis des Handlers ab, nach einem spezifischen Satz von Regeln. Wenn die Handler-Funktion:

- einen Wert zurückgibt: wird `p` mit dem zurückgegebenen Wert als Wert erfüllt.
- nichts zurückgibt: wird `p` mit `undefined` als Wert erfüllt.
- einen Fehler wirft: wird `p` mit dem geworfenen Fehler als Wert abgelehnt.
- ein bereits erfülltes Promise zurückgibt: wird `p` mit dem Wert dieses Promise als Wert erfüllt.
- ein bereits abgelehntes Promise zurückgibt: wird `p` mit dem Wert dieses Promise als Wert abgelehnt.
- ein anderes ausstehendes Promise zurückgibt: ist `p` ausstehend und wird sofort erfüllt/abgelehnt mit dem Wert dieses Promise, nachdem es erfüllt/abgelehnt wird.

## Beschreibung

Die `then()` Methode terminiert Callback-Funktionen für den eventuellen Abschluss eines Promises — entweder Erfüllung oder Ablehnung. Sie ist die primitive Methode von Promises: das [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Protokoll erwartet, dass alle verkettbaren Objekte eine `then()` Methode bereitstellen, und die {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} Methoden funktionieren beide durch Aufrufen der `then()` Methode des Objekts.

Weitere Informationen über den `onRejected` Handler finden Sie in der {{jsxref("Promise/catch", "catch()")}} Referenz.

`then()` gibt ein neues Promise-Objekt zurück, verändert jedoch das Promise-Objekt, auf dem es aufgerufen wird, indem es die Handler einer internen Liste anfügt. Daher wird der Handler vom ursprünglichen Promise beibehalten und seine Lebensdauer ist mindestens so lang wie die Lebensdauer des ursprünglichen Promise. Zum Beispiel läuft das folgende Beispiel schließlich aus dem Speicher, obwohl das zurückgegebene Promise nicht beibehalten wird:

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

Wenn Sie die `then()` Methode zweimal auf demselben Promise-Objekt aufrufen (anstatt zu verketten), dann hat dieses Promise-Objekt zwei Paare von Abschluss-Handlern. Alle Handler, die an dasselbe Promise-Objekt angehängt sind, werden immer in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Außerdem starten die beiden durch jeden `then()` Aufruf zurückgegebenen Promises separate Ketten und warten nicht auf den Abschluss des anderen.

[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Objekte, die entlang der `then()` Kette entstehen, werden immer [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — der `onFulfilled`-Handler empfängt niemals ein Thenable-Objekt, und alle Thenables, die von einem der Handler zurückgegeben werden, werden immer vor der Weitergabe an den nächsten Handler aufgelöst. Dies liegt daran, dass beim Erstellen des neuen Promises die vom `executor` übergebenen `resolve` und `reject` Funktionen gespeichert werden, und wenn das aktuelle Promise abgeschlossen wird, wird die jeweilige Funktion mit dem Erfüllungswert oder Ablehnungsgrund aufgerufen. Die Auflösung erfolgt über die `resolve` Funktion, die vom {{jsxref("Promise/Promise", "Promise()")}} Konstruktor übergeben wird.

`then()` unterstützt Subclassing, das heißt, es kann auf Instanzen von Unterklassen von `Promise` aufgerufen werden, und das Ergebnis wird ein Promise vom Subklassen-Typ sein. Sie können den Typ des Rückgabewerts über die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) Eigenschaft anpassen.

## Beispiele

### Verwendung der then() Methode

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

### Einen Nicht-Funktionswert als Parameter verwenden

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(new Error("failed")).then(2, 2).then(console.log, console.log); // Error: failed
```

### Verkettung

Die `then` Methode gibt ein neues `Promise` zurück, was die Verkettung von Methoden ermöglicht.

Wenn die als Handler an `then` übergebene Funktion ein `Promise` zurückgibt, wird ein gleichwertiges `Promise` an das nachfolgende `then` in der Methodenverbindung weitergegeben. Der folgende Ausschnitt simuliert asynchronen Code mit der `setTimeout` Funktion.

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

Der von `then()` zurückgegebene Wert wird auf dieselbe Weise aufgelöst wie {{jsxref("Promise.resolve()")}}. Das bedeutet, dass [thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) unterstützt werden, und wenn der Rückgabewert kein Promise ist, wird er implizit in ein `Promise` eingeschlossen und dann aufgelöst.

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

Ein `then` Aufruf gibt ein Promise zurück, das schließlich abgelehnt wird, wenn die Funktion einen Fehler wirft oder ein zurückgewiesenes Promise zurückgibt.

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

In der Praxis ist es oft wünschenswert, abgelehnte Promises mit [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abzufangen, anstatt die Zwei-Fälle-Syntax von `then()` zu verwenden, wie unten demonstriert wird.

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

In allen anderen Fällen wird das zurückgegebene Promise schließlich erfüllt. Im folgenden Beispiel wird das erste `then()` liefert `42`, das in ein erfülltes Promise eingeschlossen wird, obwohl das vorherige Promise in der Kette abgelehnt wurde.

```js
Promise.reject(new Error("Oh no!"))
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a fulfilled Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

Wenn `onFulfilled` ein Promise zurückgibt, wird der Rückgabewert von `then` basierend auf dem endgültigen Zustand dieses Promise erfüllt / abgelehnt.

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
// Return promise here, that will be resolved to 10 after 1 second
const p2 = p1.then(() => new Promise(resolveLater));
p2.then(
  (v) => {
    console.log("resolved", v); // "resolved", 10
  },
  (e) => {
    // not called
    console.error("rejected", e);
  },
);

// Return promise here, that will be rejected with 'Error' after 1 second
const p3 = p1.then(() => new Promise(rejectLater));
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

Sie können Verkettungen verwenden, um auf einem anderen solcher Funktionen eine Funktion mit einer Promise-basierten API zu implementieren.

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

Das folgende Beispiel demonstriert die Asynchronität der `then` Methode.

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
