---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promise oder thenable Objekts oder, wenn der Ausdruck nicht thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Löst den Ablehnungsgrund aus, wenn das Promise oder das thenable Objekt abgelehnt wird.

## Beschreibung

`await` wird normalerweise verwendet, um Promises aufzulösen, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung der umgebenden `async` Funktion, bis das Promise abgeschlossen ist (d.h. erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, entspricht der Wert des `await` Ausdrucks dem des erfüllten Promise.

Wenn das Promise abgelehnt wird, wirft der `await` Ausdruck den abgelehnten Wert. Die Funktion, die den `await` Ausdruck enthält, wird [im Stack-Trace erscheinen](#verbesserung_des_stack-traces) des Fehlers. Andernfalls, wenn das abgelehnte Promise nicht abgewartet oder sofort zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack-Trace.

Der `expression` wird auf die gleiche Weise wie {{jsxref("Promise.resolve()")}} aufgelöst: Er wird immer in ein natives `Promise` umgewandelt und dann gewartet. Wenn der `expression` ein:

- Natives `Promise` ist (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ abgewartet, ohne `then()` aufzurufen.
- [Thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) ist (einschließlich nicht-nativer Promises, Polyfill, Proxy, Kindklasse, etc.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor erstellt, indem die `then()` Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve` Rückruf aufruft.
- Nicht-thenable Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, pausiert die Ausführung der async Funktion immer noch bis zum nächsten Tick. In der Zwischenzeit wird die Ausführung des Aufrufers der async Funktion fortgesetzt. [Siehe das Beispiel unten.](#kontrollfluss-effekte_von_await)

Weil `await` nur innerhalb von async Funktionen und Modulen gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await` Ausdruck niemals den Hauptthread und verzögert nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d.h. alles nach dem `await` Ausdruck.

## Beispiele

### Warten auf die Erfüllung eines Promise

Wenn ein `Promise` an einen `await` Ausdruck übergeben wird, wartet er, bis das `Promise` erfüllt wird, und gibt den erfüllten Wert zurück.

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

[Thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden genau wie tatsächliche `Promise` Objekte aufgelöst.

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

### Umwandlung in ein Promise

Wenn der Wert kein `Promise` ist, konvertiert `await` den Wert in ein aufgelöstes `Promise` und wartet darauf. Die Identität des abgewarteten Werts ändert sich nicht, solange er keine aufrufbare `then` Eigenschaft hat.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### Umgehen von abgelehnten Promises

Wenn das `Promise` abgelehnt wird, wird der abgelehnte Wert ausgelöst.

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

Sie können abgelehnte Promises ohne einen `try` Block handhaben, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Handler vor dem Warten des Promises verketten.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` niemals synchron einen Fehler wirft, sondern immer ein abgelehntes Promise zurückgibt. Dies ist der Fall für die meisten gut gestalteten Promise-basierten Funktionen, die normalerweise so aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn `promisedFunction()` jedoch synchron einen Fehler wirft, wird der Fehler nicht vom `catch()` Handler abgefangen. In diesem Fall ist die `try...catch` Anweisung notwendig.

### Top-Level Await

Sie können das `await` Schlüsselwort für sich allein (außerhalb einer async Funktion) auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Dies bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst ausgeführt werden, ohne dabei andere Kindmodule von der Ausführung abzuhalten.

Hier ist ein Beispiel für ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung spezifiziert. Alle Module, die dieses Modul einbeziehen, warten, bis der Fetch gelöst ist, bevor sie jeglichen Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Kontrollfluss-Effekte von Await

Wenn ein `await` in Code (entweder in einer async Funktion oder in einem Modul) auftritt, wird der abgewartete Ausdruck ausgeführt, während aller Code, der von dem Wert des Ausdrucks abhängt, pausiert wird. Die Kontrolle verlässt die Funktion und kehrt zum Aufrufer zurück. Wenn der Wert des abgewarteten Ausdrucks aufgelöst ist, wird eine weitere [Microtask](/de/docs/Web/JavaScript/Reference/Execution_model) geplant, die den pausierten Code fortsetzt. Dies geschieht, selbst wenn der abgewartete Wert ein bereits aufgelöstes Promise ist oder kein Promise ist: Die Ausführung kehrt nicht zu der aktuellen Funktion zurück, bis alle anderen bereits geplanten Microtasks verarbeitet wurden. Betrachten Sie zum Beispiel folgenden Code:

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

In diesem Fall ist die Funktion `foo` faktisch synchron, da sie keinen `await` Ausdruck enthält. Die drei Anweisungen geschehen im gleichen Tick. Daher werden die beiden Funktionsaufrufe alle Anweisungen in Folge ausführen. In Promise-Begriffen entspricht die Funktion:

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

Sobald jedoch ein `await` vorhanden ist, wird die Funktion asynchron und die Ausführung der nachfolgenden Anweisungen wird auf den nächsten Tick verschoben.

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

Der zusätzliche `then()` Handler kann mit dem Executor, der an den Konstruktor übergeben wird, zusammengeführt werden, da er nicht auf eine asynchrone Operation wartet. Seine Existenz teilt den Code jedoch in eine zusätzliche Microtask für jeden Aufruf von `foo`. Diese Microtasks werden geplant und in einer verstrickten Weise ausgeführt, was den Code langsamer machen und unnötige Race Conditions einführen kann. Daher sollten Sie `await` nur dann verwenden, wenn es notwendig ist (um Promises in ihre Werte zu entpacken).

Microtasks werden nicht nur durch die Promise-Resolution, sondern auch durch andere Web-APIs geplant und mit derselben Priorität ausgeführt. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu demonstrieren, wie die Microtask-Warteschlange verarbeitet wird, wenn jeder `await` Ausdruck auftritt.

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

In diesem Beispiel wird die Funktion `test()` immer vor der async Funktion aufgerufen, sodass die von beiden geplanten Microtasks immer auf verschachtelte Weise ausgeführt werden. Andererseits, da sowohl `await` als auch `queueMicrotask()` Microtasks planen, hängt die Ausführungsreihenfolge immer von der Planungsreihenfolge ab. Deshalb erfolgt das "queueMicrotask() nach dem Aufrufen der async Funktion" Protokoll nach dem ersten Wiederaufnehmen der async Funktion.

### Verbesserung des Stack-Traces

Manchmal wird `await` ausgelassen, wenn ein Promise direkt aus einer async Funktion zurückgegeben wird.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

Berücksichtigen Sie jedoch den Fall, in dem `lastAsyncTask` asynchron einen Fehler wirft.

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

Nur `lastAsyncTask` erscheint im Stack-Trace, da das Promise abgelehnt wird, nachdem es bereits aus `noAwait` zurückgegeben wurde — in gewisser Weise ist das Promise nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise zu entpacken, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise eingewickelt, aber während der Fehlererstellung erscheint der Aufrufer im Stack-Trace.

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

Entgegen einiger populärer Annahmen ist `return await promise` mindestens genauso schnell wie `return promise`, aufgrund dessen, wie die Spezifikation und Engines die Auflösung nativer Promises optimieren. Es gibt einen Vorschlag, um [das `return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption) und Sie können auch über [V8s Optimierung bei async Funktionen](https://v8.dev/blog/fast-async) lesen. Daher ist `return await` bis auf stilistische Gründe fast immer vorzuziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [Top-Level Await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- [typescript-eslint Regel: `return-await`](https://typescript-eslint.io/rules/return-await/)
