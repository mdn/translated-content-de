---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [dannfähiges Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promises oder dannfähigen Objekts oder, falls der Ausdruck nicht dannfähig ist, der Wert des Ausdrucks selbst.

### Ausnahmen

Wirft den Ablehnungsgrund, wenn das Promise oder das dannfähige Objekt abgelehnt wird.

## Beschreibung

`await` wird normalerweise verwendet, um Promises aufzulösen, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Mit `await` wird die Ausführung der umgebenden `async`-Funktion angehalten, bis das Promise abgeschlossen ist (also erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, wird der Wert des `await`-Ausdrucks zu dem des erfüllten Promises.

Wenn das Promise abgelehnt wird, wirft der `await`-Ausdruck den abgelehnten Wert. Die Funktion, die den `await`-Ausdruck enthält, wird [im Stack-Trace erscheinen](#verbesserung_des_stack-traces) des Fehlers. Andernfalls, wenn das abgelehnte Promise nicht erwartet oder unmittelbar zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack.

Der `expression`-Ausdruck wird auf die gleiche Weise wie {{jsxref("Promise.resolve()")}} aufgelöst: Er wird immer in ein natives `Promise` umgewandelt und dann erwartet. Wenn der `expression`-Ausdruck ist:

- Ein natives `Promise` (das bedeutet, dass `expression` zu `Promise` oder einer Subklasse gehört, und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ abgewartet, ohne `then()` aufzurufen.
- Ein [dannfähiges Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-nativer Promises, Polyfill, Proxy, Subklasse, etc.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor erstellt, indem die `then()`-Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve`-Callback aufruft.
- Ein nicht-dannfähiger Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Auch wenn das verwendete Promise bereits erfüllt ist, wird die Ausführung der async-Funktion immer noch bis zur nächsten Tick angehalten. In der Zwischenzeit wird die aufrufende Funktion der async-Funktion fortgesetzt. [Siehe Beispiel unten.](#kontrollflusseffekte_von_await)

Da `await` nur innerhalb von async-Funktionen und Modulen gültig ist, die ihrerseits asynchron sind und Promises zurückgeben, blockiert der `await`-Ausdruck niemals den Haupt-Thread und verschiebt nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d.h. alles nach dem `await`-Ausdruck.

## Beispiele

### Warten, bis ein Promise erfüllt wird

Wenn ein `Promise` an einen `await`-Ausdruck übergeben wird, wartet er, bis das `Promise` erfüllt wird, und gibt den erfüllten Wert zurück.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}

f1();
```

### Dannfähige Objekte

[Dannfähige Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden auf die gleiche Weise aufgelöst wie tatsächliche `Promise`-Objekte.

```js
async function f2() {
  const thenable = {
    then(resolve) {
      resolve("resolved!");
    },
  };
  console.log(await thenable); // "resolved!"
}

f2();
```

Sie können auch abgelehnt werden:

```js
async function f2() {
  const thenable = {
    then(_, reject) {
      reject(new Error("rejected!"));
    },
  };
  await thenable; // Throws Error: rejected!
}

f2();
```

### Umwandlung in Promise

Wenn der Wert kein `Promise` ist, wandelt `await` den Wert in ein erfülltes `Promise` um und wartet darauf. Die Identität des gewarteten Wertes ändert sich nicht, solange er keine aufrufbare `then`-Eigenschaft hat.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### Umgang mit abgelehnten Promises

Wenn das `Promise` abgelehnt wird, wird der abgelehnte Wert geworfen.

```js
async function f4() {
  try {
    const z = await Promise.reject(new Error("rejected!"));
  } catch (e) {
    console.error(e); // Error: rejected!
  }
}

f4();
```

Sie können abgelehnte Promises ohne einen `try`-Block behandeln, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Handler vor dem Warten auf das Promise anketten.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` nie synchron einen Fehler wirft, sondern immer ein abgelehntes Promise zurückgibt. Dies trifft auf die meisten richtig gestalteten, auf Promises basierenden Funktionen zu, die normalerweise wie folgt aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn jedoch `promisedFunction()` tatsächlich synchron einen Fehler wirft, wird der Fehler nicht vom `catch()`-Handler erfasst. In diesem Fall ist der `try...catch`-Block erforderlich.

### Top-Level-Await

Sie können das Schlüsselwort `await` auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden (außerhalb einer async-Funktion). Das bedeutet, dass Module mit Kind-Modulen, die `await` verwenden, warten, bis die Kind-Module ausgeführt werden, bevor sie selbst ausgeführt werden, ohne dass andere Kind-Module am Laden gehindert werden.

Hier ist ein Beispiel für ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung angibt. Alle Module, die dieses enthalten, warten, bis der Fetch abgeschlossen ist, bevor sie einen Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Kontrollflusseffekte von await

Wenn in einem Code `await` auftritt (entweder in einer async-Funktion oder in einem Modul), wird der erwartete Ausdruck ausgeführt, während der gesamte Code, der von dem Ausdruckswert abhängt, pausiert wird. Die Kontrolle verlässt die Funktion und kehrt zum Aufrufer zurück. Wenn der Wert des gewarteten Ausdrucks aufgelöst ist, wird eine weitere [Mikroaufgabe](/de/docs/Web/JavaScript/Reference/Execution_model) geplant, die den pausierten Code fortsetzt. Dies geschieht auch, wenn der gewartete Wert ein bereits gelöstes Promise ist oder kein Promise: Die Ausführung kehrt nicht zur aktuellen Funktion zurück, bis alle anderen bereits geplanten Mikroaufgaben abgearbeitet sind. Zum Beispiel:

```js
async function foo(name) {
  console.log(name, "start");
  console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// First end
// Second start
// Second middle
// Second end
```

In diesem Fall ist die Funktion `foo` im Effekt synchron, da sie keinen `await`-Ausdruck enthält. Die drei Anweisungen passieren im selben Takt. Daher werden die beiden Funktionsaufrufe alle Anweisungen der Reihe nach ausgeführt. In Promise-Begriffen entspricht die Funktion:

```js
function foo(name) {
  return new Promise((resolve) => {
    console.log(name, "start");
    console.log(name, "middle");
    console.log(name, "end");
    resolve();
  });
}
```

Sobald es jedoch ein `await` gibt, wird die Funktion asynchron und die Ausführung der folgenden Anweisungen wird auf den nächsten Takt verschoben.

```js
async function foo(name) {
  console.log(name, "start");
  await console.log(name, "middle");
  console.log(name, "end");
}

foo("First");
foo("Second");

// First start
// First middle
// Second start
// Second middle
// First end
// Second end
```

Das entspricht:

```js
function foo(name) {
  return new Promise((resolve) => {
    console.log(name, "start");
    resolve(console.log(name, "middle"));
  }).then(() => {
    console.log(name, "end");
  });
}
```

Der zusätzliche `then()`-Handler kann mit dem Ersteller zusammengeführt werden, der an den Konstruktor übergeben wird, da er nicht auf eine asynchrone Operation wartet. Sein Vorhandensein teilt den Code jedoch in eine zusätzliche Mikroaufgabe für jeden Aufruf von `foo`. Diese Mikroaufgaben werden geplant und in einem verflochtenen Muster ausgeführt, was sowohl den Code verlangsamen als auch unnötige Race-Bedingungen einführen kann. Daher stellen Sie sicher, dass Sie `await` nur dann verwenden, wenn es notwendig ist, um Promises in ihre Werte aufzulösen.

Mikroaufgaben werden nicht nur durch Promise-Auflösung, sondern auch durch andere Web-APIs geplant, und sie werden mit derselben Priorität ausgeführt. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu demonstrieren, wie die Mikroaufgaben-Warteschlange verarbeitet wird, wenn jeder `await`-Ausdruck auftritt.

```js
let i = 0;

queueMicrotask(function test() {
  i++;
  console.log("microtask", i);
  if (i < 3) {
    queueMicrotask(test);
  }
});

(async () => {
  console.log("async function start");
  for (let i = 1; i < 3; i++) {
    await null;
    console.log("async function resume", i);
  }
  await null;
  console.log("async function end");
})();

queueMicrotask(() => {
  console.log("queueMicrotask() after calling async function");
});

console.log("script sync part end");

// Logs:
// async function start
// script sync part end
// microtask 1
// async function resume 1
// queueMicrotask() after calling async function
// microtask 2
// async function resume 2
// microtask 3
// async function end
```

In diesem Beispiel wird die `test()`-Funktion immer aufgerufen, bevor die async-Funktion fortgesetzt wird, sodass die Mikroaufgaben, die sie planen, immer in verflochtener Weise ausgeführt werden. Auf der anderen Seite, da sowohl `await` als auch `queueMicrotask()` Mikroaufgaben planen, basiert die Reihenfolge der Ausführung immer auf der Reihenfolge der Planung. Aus diesem Grund erfolgt das "queueMicrotask() after calling async function"-Log nach dem erstmaligen Fortsetzen der async-Funktion.

### Verbesserung des Stack-Traces

Manchmal wird `await` weggelassen, wenn ein Promise direkt aus einer async-Funktion zurückgegeben wird.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

Betrachten Sie jedoch den Fall, in dem `lastAsyncTask` asynchron einen Fehler wirft.

```js
async function lastAsyncTask() {
  await null;
  throw new Error("failed");
}

async function noAwait() {
  return lastAsyncTask();
}

noAwait();

// Error: failed
//    at lastAsyncTask
```

Nur `lastAsyncTask` erscheint im Stack-Trace, da das Promise abgelehnt wird, nachdem es bereits von `noAwait` zurückgegeben wurde — in gewisser Weise ist das Promise nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise aufzulösen, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise eingeschlossen, aber während der Fehlererstellung erscheint der Aufrufer im Stack-Trace.

```js
async function lastAsyncTask() {
  await null;
  throw new Error("failed");
}

async function withAwait() {
  return await lastAsyncTask();
}

withAwait();

// Error: failed
//    at lastAsyncTask
//    at async withAwait
```

Entgegen einiger populärer Meinungen ist `return await promise` mindestens genauso schnell wie `return promise`, aufgrund der Optimierung der Spezifikation und Engines zur Auflösung nativer Promises. Es gibt einen Vorschlag, [um `return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption) und Sie können auch über [V8's Optimierung von async-Funktionen](https://v8.dev/blog/fast-async) lesen. Ausgenommen stilistische Gründe ist `return await` daher fast immer vorzuziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- [typescript-eslint-Regel: `return-await`](https://typescript-eslint.io/rules/return-await/)
