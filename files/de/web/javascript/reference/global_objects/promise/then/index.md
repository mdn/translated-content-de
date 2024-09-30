---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 5c55770dc681e7855fe960cf6a725d4c7be4e95f
---

{{JSRef}}

Die **`then()`** Methode von {{jsxref("Promise")}}-Instanzen nimmt bis zu zwei Argumente entgegen: Callback-Funktionen für die erfüllten und abgelehnten Fälle des `Promise`. Sie speichert die Callbacks innerhalb des Promises, auf dem sie aufgerufen wird, und gibt sofort ein weiteres {{jsxref("Promise")}}-Objekt zurück, das es Ihnen ermöglicht, Aufrufe an andere Promise-Methoden zu [verkettung](/de/docs/Web/JavaScript/Guide/Using_promises#chaining).

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## Syntax

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### Parameter

- `onFulfilled`

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise erfüllt wird. Ihr Rückgabewert wird zum Erfüllungswert des Promises, das von `then()` zurückgegeben wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `value`
      - : Der Wert, mit dem das Promise erfüllt wurde.

    Wenn es keine Funktion ist, wird sie intern durch eine _Identität_ Funktion (`(x) => x`) ersetzt, die den Erfüllungswert einfach weitergibt.

- `onRejected` {{optional_inline}}

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Promise abgelehnt wird. Ihr Rückgabewert wird zum Erfüllungswert des Promises, das von `then()` zurückgegeben wird. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `reason`
      - : Der Wert, mit dem das Promise abgelehnt wurde.

    Wenn es keine Funktion ist, wird sie intern durch eine _Thrower_ Funktion (`(x) => { throw x; }`) ersetzt, die den erhaltenen Ablehnungsgrund wirft.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Promise ist immer ausstehend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Promises.

Einer der `onFulfilled`- und `onRejected`-Handler wird ausgeführt, um die Erfüllung oder Ablehnung des aktuellen Promises zu handhaben. Der Aufruf erfolgt immer asynchron, selbst wenn das aktuelle Promise bereits abgeschlossen ist. Das Verhalten des zurückgegebenen Promises (nennen wir es `p`) hängt vom Ausführungsergebnis des Handlers ab, gemäß einer bestimmten Regelmenge. Wenn die Handler-Funktion:

- einen Wert zurückgibt: wird `p` mit dem zurückgegebenen Wert als seinem Wert erfüllt.
- nichts zurückgibt: wird `p` mit `undefined` als seinem Wert erfüllt.
- einen Fehler wirft: wird `p` mit dem geworfenen Fehler als seinem Wert abgelehnt.
- ein bereits erfülltes Promise zurückgibt: wird `p` mit dem Wert dieses Promises als seinem Wert erfüllt.
- ein bereits abgelehntes Promise zurückgibt: wird `p` mit dem Wert dieses Promises als seinem Wert abgelehnt.
- ein anderes ausstehendes Promise zurückgibt: bleibt `p` ausstehend und wird sofort erfüllt/abgelehnt, sobald dieses Promise erfüllt/abgelehnt wird.

## Beschreibung

Die `then()` Methode plant Callback-Funktionen für den eventualen Abschluss eines Promises — entweder Erfüllung oder Ablehnung. Es ist die primitive Methode von Promises: das [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Protokoll erwartet, dass alle Promise-ähnlichen Objekte eine `then()`-Methode bereitstellen, und die {{jsxref("Promise/catch", "catch()")}} sowie {{jsxref("Promise/finally", "finally()")}}-Methoden funktionieren beide durch den Aufruf der `then()`-Methode des Objekts.

Für weitere Informationen über den `onRejected`-Handler, siehe die {{jsxref("Promise/catch", "catch()")}} Referenz.

`then()` gibt ein neues Promise-Objekt zurück, verändert jedoch das Promise-Objekt, auf dem es aufgerufen wird, und fügt die Handler einer internen Liste hinzu. Daher wird der Handler vom ursprünglichen Promise beibehalten und seine Lebensdauer ist mindestens so lang wie die des ursprünglichen Promises. Zum Beispiel wird das folgende Beispiel schließlich den Speicher überlasten, obwohl das zurückgegebene Promise nicht beibehalten wird:

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

Wenn Sie die Methode `then()` zweimal auf dasselbe Promise-Objekt aufrufen (anstatt zu verkette), hat dieses Promise-Objekt zwei Paare von Erledigungshandlern. Alle Handler, die an dasselbe Promise-Objekt angehängt werden, werden immer in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Außerdem beginnen die beiden durch jeden Aufruf von `then()` zurückgegebenen Promises separate Ketten und warten nicht auf den Abschluss des anderen.

[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Objekte, die in der `then()`-Kette entstehen, werden immer [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — der `onFulfilled`-Handler erhält niemals ein thenable Objekt, und jedes thenable, das von einem der beiden Handler zurückgegeben wird, wird immer aufgelöst, bevor es an den nächsten Handler übergeben wird. Dies liegt daran, dass beim Erstellen des neuen Promises die durch den `executor` übergebenen `resolve`- und `reject`-Funktionen gespeichert werden und sobald das aktuelle Promise abgeschlossen ist, die jeweilige Funktion mit dem Erfüllungswert oder Ablehnungsgrund aufgerufen wird. Die Auflösungslogik stammt aus der durch den {{jsxref("Promise/Promise", "Promise()")}}-Konstruktor übergebenen `resolve` Funktion.

`then()` unterstützt Subklassierung, was bedeutet, dass es auf Instanzen von Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis eine Promise des Subklassentyps ist. Sie können den Typ des Rückgabewertes durch die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) Eigenschaft anpassen.

## Beispiele

### Verwenden der then() Methode

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

### Ein nicht-Funktion als Parameter verwenden

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### Verkettung

Die `then`-Methode gibt ein neues `Promise` zurück, das eine Methodenkette ermöglicht.

Wenn die Funktion, die als Handler an `then` übergeben wird, ein `Promise` zurückgibt, wird ein gleichwertiges `Promise` an das nachfolgende `then` in der Methodenkette exponiert. Der unten stehende Codeausschnitt simuliert asynchronen Code mit der `setTimeout` Funktion.

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

Der Wert, der von `then()` zurückgegeben wird, wird auf dieselbe Weise aufgelöst wie {{jsxref("Promise.resolve()")}}. Dies bedeutet, dass [thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) unterstützt werden, und wenn der Rückgabewert kein Promise ist, wird er implizit in ein `Promise` gewickelt und dann aufgelöst.

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

Ein `then`-Aufruf gibt ein Promise zurück, das schließlich ablehnt, wenn die Funktion einen Fehler auslöst oder ein abgelehntes Promise zurückgibt.

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

In der Praxis ist es oft wünschenswert, zurückgewiesene Promises mit [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) zu behandeln, anstatt die Zwei-Fall-Syntax von `then()`, wie unten demonstriert.

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

In allen anderen Fällen erfüllt das zurückgegebene Promise schließlich. Im folgenden Beispiel gibt das erste `then()` `42` zurück, eingeschlossen in einem erfüllten Promise, obwohl das vorherige Promise in der Kette zurückgewiesen wurde.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a fulfilled Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

Wenn `onFulfilled` ein Promise zurückgibt, wird der Rückgabewert von `then` basierend auf dem endgültigen Status dieses Promises erfüllt/abgelehnt.

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

Sie können Verkettung verwenden, um eine Funktion mit einer Promise-basierten API über einer anderen solchen Funktion zu implementieren.

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

Das folgende Beispiel soll die Asynchronität der `then`-Methode demonstrieren.

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
