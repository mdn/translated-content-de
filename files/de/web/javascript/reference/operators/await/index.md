---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [asynchronen Funktion](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promises oder thenable Objekts oder, falls der Ausdruck nicht thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Wirft den Ablehnungsgrund, wenn das Promise oder thenable Objekt abgelehnt wird.

## Beschreibung

`await` wird üblicherweise verwendet, um Promises zu entpacken, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung der umgebenden `async`-Funktion, bis das Promise erledigt ist (d.h. erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, wird der Wert des `await`-Ausdrucks der des erfüllten Promises.

Wenn das Promise abgelehnt wird, wirft der `await`-Ausdruck den abgelehnten Wert. Die Funktion, die den `await`-Ausdruck enthält, wird [im Stack-Trace erscheinen](#verbesserung_des_stack-traces) des Fehlers. Andernfalls, wenn das abgelehnte Promise nicht abgewartet oder sofort zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack-Trace.

Der `expression` wird auf die gleiche Weise wie {{jsxref("Promise.resolve()")}} aufgelöst: Er wird immer in ein natives `Promise` umgewandelt und dann abgewartet. Wenn der `expression` ist ein:

- Natives `Promise` (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ abgewartet, ohne `then()` aufzurufen.
- [Thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-nativer Promises, Polyfill, Proxy, Unterklasse usw.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor konstruiert, indem die `then()`-Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve`-Callback aufruft.
- Nicht-thenable Wert: Ein bereits erfülltes `Promise` wird konstruiert und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, pausiert die Ausführung der asynchronen Funktion, bis der nächste Tick erreicht ist. In der Zwischenzeit setzt der Aufrufer der asynchronen Funktion die Ausführung fort. [Siehe Beispiel unten.](#kontrolleffekte_von_`await`)

Da `await` nur innerhalb asynchroner Funktionen und Module gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await`-Ausdruck nie den Hauptthread und verzögert nur die Ausführung von Code, der tatsächlich von dem Ergebnis abhängt, d.h. alles nach dem `await`-Ausdruck.

## Beispiele

### Warten auf die Erfüllung eines Promises

Wenn ein `Promise` an einen `await`-Ausdruck übergeben wird, wartet dieser, bis das `Promise` erfüllt ist, und gibt den Erfüllungswert zurück.

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

### Thenable Objekte

[Thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden genauso aufgelöst wie tatsächliche `Promise` Objekte.

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

Wenn der Wert kein `Promise` ist, wandelt `await` den Wert in ein erfülltes `Promise` um und wartet darauf. Die Identität des abgewarteten Wertes ändert sich nicht, solange er keine aufrufbare `then`-Eigenschaft hat.

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
    const z = await Promise.reject(30);
  } catch (e) {
    console.error(e); // 30
  }
}

f4();
```

Sie können abgelehnte Promises ohne `try`-Block behandeln, indem Sie vor dem Abwarten des Promises einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Handler anhängen.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` nie synchron einen Fehler auslöst, sondern immer ein abgelehntes Promise zurückgibt. Dies ist der Fall bei den meisten gut gestalteten, Promise-basierten Funktionen, die normalerweise so aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn jedoch `promisedFunction()` einen Fehler synchron auslöst, wird der Fehler nicht vom `catch()`-Handler erfasst. In diesem Fall ist die `try...catch`-Anweisung notwendig.

### Top-Level `await`

Sie können das `await`-Schlüsselwort auch eigenständig (außerhalb einer asynchronen Funktion) auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Das bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst ausgeführt werden, während andere Kindmodule nicht am Laden gehindert werden.

Hier ist ein Beispiel für ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung angibt. Alle Module, die dieses Modul einbinden, warten darauf, dass der Fetch-Abschluss erfolgt, bevor sie eigenen Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Kontrolleffekte von `await`

Wenn ein `await` in Code begegnet wird (entweder in einer asynchronen Funktion oder in einem Modul), wird der abgewartete Ausdruck ausgeführt, während aller Code, der vom Wert des Ausdrucks abhängt, pausiert. Die Steuerung verlässt die Funktion und kehrt zum Aufrufer zurück. Wenn der Wert des abgewarteten Ausdrucks aufgelöst ist, wird eine andere [Mikroaufgabe](/de/docs/Web/JavaScript/Reference/Execution_model) geplant, die den pausierten Code fortsetzt. Dies geschieht selbst dann, wenn der abgewartete Wert ein bereits erfülltes Promise ist oder kein Promise ist: Die Ausführung kehrt nicht zur aktuellen Funktion zurück, bis alle anderen bereits geplanten Mikroaufgaben verarbeitet sind. Betrachten Sie zum Beispiel den folgenden Code:

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

In diesem Fall ist die Funktion `foo` synchron in ihrer Wirkung, weil sie keinen `await`-Ausdruck enthält. Die drei Anweisungen erfolgen im selben Tick. Daher führen die beiden Funktionsaufrufe alle Anweisungen in der Reihe aus. In Promise-Begriffen entspricht die Funktion:

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

Sobald jedoch ein `await` vorhanden ist, wird die Funktion asynchron, und die Ausführung der folgenden Anweisungen wird auf den nächsten Tick verschoben.

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

Dies entspricht:

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

Der zusätzliche `then()`-Handler kann mit dem Executor zusammengeführt werden, der dem Konstruktor übergeben wird, da er nicht auf eine asynchrone Operation wartet. Allerdings teilt seine Existenz den Code in eine zusätzliche Mikroaufgabe für jeden Aufruf von `foo`. Diese Mikroaufgaben werden geplant und in einer verwobenen Weise ausgeführt, was sowohl Ihren Code verlangsamen als auch unnötige Wettlaufbedingungen einführen kann. Stellen Sie daher sicher, `await` nur dann zu verwenden, wenn es notwendig ist (um Promises in ihre Werte zu entpacken).

Mikroaufgaben werden nicht nur durch Promise-Auflösungen, sondern auch durch andere Web-APIs geplant und sie werden mit derselben Priorität ausgeführt. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu demonstrieren, wie die Mikroaufgaben-Warteschlange verarbeitet wird, wenn jeder `await`-Ausdruck aufgerufen wird.

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

In diesem Beispiel wird die `test()`-Funktion immer aufgerufen, bevor die asynchrone Funktion fortgesetzt wird, sodass die Mikroaufgaben, die sie jeweils planen, immer in einer verwobenen Weise ausgeführt werden. Auf der anderen Seite, da sowohl `await` als auch `queueMicrotask()` Mikroaufgaben planen, basiert die Reihenfolge der Ausführung immer auf der Reihenfolge der Planung. Deshalb erfolgt das Log "queueMicrotask() after calling async function" nach dem ersten Fortsetzen der asynchronen Funktion.

### Verbesserung des Stack-Traces

Manchmal wird `await` weggelassen, wenn ein Promise direkt von einer asynchronen Funktion zurückgegeben wird.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

Betrachten Sie jedoch den Fall, in dem `lastAsyncTask` asynchron einen Fehler auslöst.

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

Nur `lastAsyncTask` erscheint im Stack-Trace, weil das Promise abgelehnt wird, nachdem es bereits von `noAwait` zurückgegeben wurde – in gewisser Weise ist das Promise von `noAwait` unabhängig. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise zu entpacken, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise verpackt, aber während der Fehlererstellung erscheint der Aufrufer im Stack-Trace.

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

Entgegen der weit verbreiteten Meinung ist `return await promise` mindestens genauso schnell wie `return promise`, aufgrund der Art und Weise, wie die Spezifikation und die Engines die Auflösung nativer Promises optimieren. Es gibt einen Vorschlag, um [`return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption) und Sie können auch über die [Optimierung von asynchronen Funktionen in V8](https://v8.dev/blog/fast-async) lesen. Daher ist `return await` bis auf stilistische Gründe fast immer vorzuziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function", "asynchrone Funktion")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [Top-Level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- [typescript-eslint Regel: `return-await`](https://typescript-eslint.io/rules/return-await/)
