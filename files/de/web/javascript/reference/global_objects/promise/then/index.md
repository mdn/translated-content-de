---
title: Promise.prototype.then()
short-title: then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`then()`** Methode von {{jsxref("Promise")}} Instanzen nimmt bis zu zwei Argumente entgegen: Callback-Funktionen für die erfüllten und abgelehnten Fälle des `Promise`. Sie speichert die Callbacks innerhalb des Versprechens, auf dem sie aufgerufen wird, und gibt sofort ein weiteres {{jsxref("Promise")}} Objekt zurück, was es Ihnen ermöglicht, Aufrufe an andere Promise-Methoden zu [verketteln](/de/docs/Web/JavaScript/Guide/Using_promises#chaining).

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
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Versprechen erfüllt wird. Ihr Rückgabewert wird zum Erfüllungswert des von `then()` zurückgegebenen Versprechens. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `value`
      - : Der Wert, mit dem das Versprechen erfüllt wurde.

    Wenn es sich nicht um eine Funktion handelt, wird sie intern durch eine _Identitätsfunktion_ (`(x) => x`) ersetzt, die den Erfüllungswert einfach weitergibt.

- `onRejected` {{optional_inline}}
  - : Eine Funktion, die asynchron ausgeführt wird, wenn dieses Versprechen abgelehnt wird. Ihr Rückgabewert wird zum Erfüllungswert des von `then()` zurückgegebenen Versprechens. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `reason`
      - : Der Wert, mit dem das Versprechen abgelehnt wurde.

    Wenn es sich nicht um eine Funktion handelt, wird sie intern durch eine _Wurf-Funktion_ (`(x) => { throw x; }`) ersetzt, die den erhaltenen Ablehnungsgrund auslöst.

### Rückgabewert

Gibt sofort ein neues {{jsxref("Promise")}} zurück. Dieses neue Versprechen ist immer schwebend, wenn es zurückgegeben wird, unabhängig vom Status des aktuellen Versprechens.

Einer der `onFulfilled` oder `onRejected` Handler wird ausgeführt, um die Erfüllung oder Ablehnung des aktuellen Versprechens zu behandeln. Der Aufruf erfolgt immer asynchron, auch wenn das aktuelle Versprechen bereits erledigt ist. Das Verhalten des zurückgegebenen Versprechens (nennen wir es `p`) hängt vom Ausführungsergebnis des Handlers ab und folgt einem spezifischen Satz von Regeln. Wenn die Handlerfunktion:

- einen Wert zurückgibt: wird `p` mit dem zurückgegebenen Wert als Wert erfüllt.
- nichts zurückgibt: wird `p` mit `undefined` als Wert erfüllt.
- einen Fehler wirft: wird `p` mit dem geworfenen Fehler als Wert abgelehnt.
- ein bereits erfülltes Versprechen zurückgibt: wird `p` mit dem Wert dieses Versprechens als Wert erfüllt.
- ein bereits abgelehntes Versprechen zurückgibt: wird `p` mit dem Wert dieses Versprechens als Wert abgelehnt.
- ein weiteres schwebendes Versprechen zurückgibt: ist `p` schwebend und wird sofort nach Erfüllung/Ablehnung dieses Versprechens mit dessen Wert als Wert erfüllt/abgelehnt.

## Beschreibung

Die `then()` Methode plant Callback-Funktionen für den eventuellen Abschluss eines Versprechens — entweder Erfüllung oder Ablehnung. Sie ist die primitive Methode von Versprechungen: das mit [thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) arbeitende Protokoll erwartet von allen versprechensartigen Objekten, dass sie eine `then()` Methode bereitstellen, und die {{jsxref("Promise/catch", "catch()")}} und {{jsxref("Promise/finally", "finally()")}} Methoden funktionieren beide durch den Aufruf der `then()` Methode des Objekts.

Für weitere Informationen über den `onRejected` Handler siehe die {{jsxref("Promise/catch", "catch()")}} Referenz.

`then()` gibt ein neues Versprechenobjekt zurück, modifiziert jedoch das Versprechenobjekt, auf dem es aufgerufen wird, indem es die Handler an eine interne Liste anhängt. Daher wird der Handler vom ursprünglichen Versprechen gehalten und seine Lebensdauer ist mindestens so lang wie die des ursprünglichen Versprechens. Zum Beispiel wird folgendes Beispiel schließlich den Speicher überbeanspruchen, auch wenn das zurückgegebene Versprechen nicht gehalten wird:

```js
const pendingPromise = new Promise(() => {});
while (true) {
  pendingPromise.then(doSomething);
}
```

Wenn Sie die `then()` Methode zweimal auf demselben Versprechenobjekt aufrufen (anstatt zu verketten), hat dieses Versprechenobjekt zwei Paare von Abschluss-Handlern. Alle an dasselbe Versprechenobjekt angehängten Handler werden immer in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden. Außerdem starten die beiden durch jeden Aufruf von `then()` zurückgegebenen Versprechen separate Ketten und warten nicht auf die Erfüllung des jeweils anderen.

[Thenable](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) Objekte, die entlang der `then()` Kette auftauchen, werden immer [aufgelöst](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — der `onFulfilled` Handler erhält niemals ein thenable Objekt, und any thenable, das von einem der beiden Handler zurückgegeben wird, wird immer aufgelöst, bevor es an den nächsten Handler weitergegeben wird. Dies liegt daran, dass beim Erstellen des neuen Versprechens die vom `executor` übergebenen `resolve` und `reject` Funktionen gespeichert werden, und wenn das aktuelle Versprechen abgeschlossen wird, die jeweilige Funktion mit dem Erfüllungswert oder Ablehnungsgrund aufgerufen wird. Die Auflösung erfolgt durch die `resolve` Funktion, die vom {{jsxref("Promise/Promise", "Promise()")}} Konstruktor übergeben wird.

`then()` unterstützt Subclassing, was bedeutet, dass sie auf Instanzen von Unterklassen von `Promise` aufgerufen werden kann, und das Ergebnis wird ein Versprechen des Unterklassentyps sein. Sie können den Typ des Rückgabewerts durch die [`[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species) Eigenschaft anpassen.

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

### Eine Nicht-Funktion als einen der Parameter

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(new Error("failed")).then(2, 2).then(console.log, console.log); // Error: failed
```

### Verkettung

Die `then` Methode gibt ein neues `Promise` zurück, das Verkettung von Methoden ermöglicht.

Wenn die als Handler an `then` übergebene Funktion ein `Promise` zurückgibt, wird ein gleichwertiges `Promise` dem nachfolgenden `then` in der Methodenkette ausgesetzt. Der folgende Ausschnitt simuliert asynchronen Code mit der `setTimeout` Funktion.

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

Der von `then()` zurückgegebene Wert wird auf die gleiche Weise aufgelöst wie {{jsxref("Promise.resolve()")}}. Das bedeutet, dass [thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) unterstützt werden und wenn der Rückgabewert kein Versprechen ist, wird er implizit in ein `Promise` eingeschlossen und dann aufgelöst.

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

Ein `then` Aufruf gibt ein Versprechen zurück, das schließlich ablehnt, wenn die Funktion einen Fehler wirft oder ein abgelehntes Versprechen zurückgibt.

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

In der Praxis ist es oft wünschenswert, abgelehnte Versprechen mit [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) abzufangen, anstatt die Zwei-Fall-Syntax von `then()` zu verwenden, wie unten gezeigt.

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

In allen anderen Fällen wird das zurückgegebene Versprechen schließlich erfüllt. Im folgenden Beispiel gibt das erste `then()` `42` umschlossen von einem erfüllten Versprechen zurück, obwohl das vorherige Versprechen in der Kette abgelehnt wurde.

```js
Promise.reject(new Error("Oh no!"))
  .then(
    () => 99,
    () => 42,
  ) // onRejected returns 42 which is wrapped in a fulfilled Promise
  .then((solution) => console.log(`Resolved with ${solution}`)); // Fulfilled with 42
```

Wenn `onFulfilled` ein Versprechen zurückgibt, wird der Rückgabewert von `then` je nach dem endgültigen Zustand dieses Versprechens erfüllt/abgelehnt.

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

Sie können Verkettung verwenden, um eine Funktion mit einer auf Versprechen basierenden API auf einer anderen solchen Funktion zu implementieren.

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
