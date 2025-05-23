---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{JSRef}}

Die **`then()`** Methode von {{jsxref("Promise")}} Instanzen nimmt bis zu zwei Argumente: Callback-Funktionen für die erfüllten und abgelehnten Fälle des `Promise`. Sie speichert die Callbacks innerhalb des Promises, auf dem sie aufgerufen wird, und gibt sofort ein weiteres {{jsxref("Promise")}} Objekt zurück, was es Ihnen ermöglicht, Aufrufe zu anderen Promisemethoden zu [verkette](/de/docs/Web/JavaScript/Guide/Using_promises#chaining).

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

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Versprechen erfüllt wird. Sein Rückgabewert wird der Erfüllungswert des von `then()` zurückgegebenen Versprechens. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `value`
      - : Der Wert, mit dem das Versprechen erfüllt wurde.

    Wenn es keine Funktion ist, wird es intern durch eine _Identity_-Funktion (`(x) => x`) ersetzt, die den Erfüllungswert einfach weitergibt.

- `onRejected` {{optional_inline}}

  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Versprechen abgelehnt wird. Sein Rückgabewert wird der Erfüllungswert des von `then()` zurückgegebenen Versprechens. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `reason`
      - : Der Wert, mit dem das Versprechen abgelehnt wurde.

    Wenn es keine Funktion ist, wird es intern durch eine _Thrower_-Funktion (`(x) => { throw x; }`) ersetzt, die den Ablehnungsgrund, den sie erhalten hat, wirft.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Versprechen ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Versprechens.

Einer der Handler `onFulfilled` und `onRejected` wird ausgeführt, um die Erfüllung oder Ablehnung des aktuellen Versprechens zu behandeln. Der Aufruf erfolgt immer asynchron, selbst wenn das aktuelle Versprechen bereits erfüllt ist. Das Verhalten des zurückgegebenen Versprechens (nennen wir es `p`) hängt vom Ergebnis der Ausführung des Handlers ab, nach einem spezifischen Satz von Regeln. Wenn die Handler-Funktion:

- einen Wert zurückgibt: `p` wird mit dem zurückgegebenen Wert als Wert erfüllt.
- nichts zurückgibt: `p` wird mit `undefined` als Wert erfüllt.
- einen Fehler wirft: `p` wird mit dem geworfenen Fehler als Wert abgelehnt.
- ein bereits erfülltes Versprechen zurückgibt: `p` wird mit dem Wert dieses Versprechens als Wert erfüllt.
- ein bereits abgelehntes Versprechen zurückgibt: `p` wird mit dem Wert dieses Versprechens als Wert abgelehnt.
- ein weiteres schwebendes Versprechen zurückgibt: `p` ist schwebend und wird sofort erfüllt/abgelehnt mit dem Wert dieses Versprechens, nachdem dieses erfüllt/abgelehnt wird.

## Beschreibung

Die `then()` Methode plant Callback-Funktionen für den endgültigen Abschluss eines Versprechens ein — entweder Erfüllung oder Ablehnung. Es ist die primitive Methode von Versprechen: das [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Protokoll erwartet von allen Versprechen-ähnlichen Objekten, dass sie eine `then()` Methode bereitstellen, und die {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} Methoden funktionieren beide, indem sie die `then()` Methode des Objekts aufrufen.

Weitere Informationen über den `onRejected` Handler finden Sie unter der Referenz {{jsxref("Promise/catch", "catch()")}}.

`then()` gibt ein neues Versprechen-Objekt zurück, verändert aber das Versprechens-Objekt, auf dem es aufgerufen wird, indem es die Handler einer internen Liste hinzugefügt. Daher wird der Handler vom ursprünglichen Versprechen behalten und seine Lebensdauer ist mindestens so lange wie die Lebensdauer des ursprünglichen Versprechens. Zum Beispiel wird im folgenden Beispiel schließlich der Speicher ausgehen, obwohl das zurückgegebene Versprechen nicht behalten wird:

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

Wenn Sie die `then()` Methode zweimal auf dasselbe Versprechens-Objekt aufrufen (anstatt zu verketteten), dann wird dieses Versprechens-Objekt zwei Paare von Abwicklungshandlern haben. Alle Handler, die an dasselbe Versprechens-Objekt angehängt sind, werden immer in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Zudem beginnen die beiden von jedem Aufruf von `then()` zurückgegebenen Versprechen separate Ketten und warten nicht auf die Erfüllung des anderen.

[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Objekte, die entlang der `then()` Kette entstehen, werden immer [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — der `onFulfilled` Handler erhält niemals ein thenable Objekt, und alle thenable, die von einem der Handler zurückgegeben werden, werden immer aufgelöst, bevor sie an den nächsten Handler übergeben werden. Dies liegt daran, dass beim Erstellen des neuen Versprechens die vom `executor` übergebenen `resolve`- und `reject`-Funktionen gespeichert werden und wenn das aktuelle Versprechen erfüllt ist, wird die jeweilige Funktion mit dem Erfüllungswert oder Ablehnungsgrund aufgerufen. Die Auflösungslogik stammt von der `resolve` Funktion, die vom {{jsxref("Promise/Promise", "Promise()")}} Konstruktor übergeben wird.

`then()` unterstützt Unterklassenbildung, was bedeutet, dass es auf Instanzen von Unterklassen von `Promise` aufgerufen werden kann und das Ergebnis wird ein Versprechen des Unterklassen-Typs sein. Sie können den Typ des Rückgabewertes über die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) Eigenschaft anpassen.

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

### Ein Nicht-Funktion als Parameter

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(new Error("failed")).then(2, 2).then(console.log, console.log); // Error: failed
```

### Verkettung

Die `then` Methode gibt ein neues `Promise` zurück, was die Verkettung von Methoden ermöglicht.

Wenn die als Handler an `then` übergebene Funktion ein `Promise` zurückgibt, wird ein äquivalentes `Promise` dem nachfolgenden `then` in der Methodenkette zugänglich gemacht. Der unten stehende Ausschnitt simuliert asynchronen Code mit der `setTimeout` Funktion.

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

Der von `then()` zurückgegebene Wert wird auf die gleiche Weise aufgelöst wie {{jsxref("Promise.resolve()")}}. Dies bedeutet, dass [thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) unterstützt werden und wenn der Rückgabewert kein Versprechen ist, wird er implizit in ein `Promise` verpackt und dann aufgelöst.

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

Ein `then` Aufruf gibt ein Versprechen zurück, das schließlich abgelehnt wird, wenn die Funktion einen Fehler wirft oder ein abgelehntes Versprechen zurückgibt.

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

In der Praxis ist es oft wünschenswerter, abgelehnte Versprechen mit [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) zu fangen, anstatt `then()`'s Syntax für zwei Fälle zu verwenden, wie im Folgenden gezeigt.

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

In allen anderen Fällen wird das zurückgegebene Versprechen schließlich erfüllt. Im folgenden Beispiel gibt das erste `then()` `42` in ein erfülltes Versprechen zurück, obwohl das vorherige Versprechen in der Kette abgelehnt wurde.

```js
Promise.reject(new Error("Oh no!"))
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a fulfilled Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

Wenn `onFulfilled` ein Versprechen zurückgibt, wird der Rückgabewert von `then` basierend auf dem endgültigen Zustand dieses Versprechens erfüllt/abgelehnt.

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

Sie können die Verkettung verwenden, um eine Funktion mit einer Versprechen-basierten API auf einer anderen solchen Funktion zu implementieren.

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

Das Folgende ist ein Beispiel, um die Asynchronität der `then` Methode zu demonstrieren.

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
