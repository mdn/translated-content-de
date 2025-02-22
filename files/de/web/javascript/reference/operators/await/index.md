---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 0d9ac8989ff0da1ada8d31a93d8afea9f50ac143
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenable object](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promises oder thenable Objekts oder, wenn der Ausdruck nicht thenable ist, der eigentliche Wert des Ausdrucks.

### Ausnahmen

Wirft den Zurückweisungsgrund, wenn das Promise oder thenable Objekt zurückgewiesen wird.

## Beschreibung

`await` wird normalerweise verwendet, um Versprechen aufzulösen, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung der umgebenden `async` Funktion, bis das Promise beigelegt ist (d. h. erfüllt oder zurückgewiesen). Wenn die Ausführung fortgesetzt wird, entspricht der Wert des `await` Ausdrucks dem des erfüllten Promises.

Wenn das Promise zurückgewiesen wird, wirft der `await` Ausdruck den zurückgewiesenen Wert. Die Funktion, die den `await` Ausdruck enthält, wird im [Stack-Trace erscheinen](#verbesserung_des_stack-traces) des Fehlers angezeigt. Andernfalls, wenn das zurückgewiesene Promise nicht abgewartet oder sofort zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack-Trace.

Der `expression` wird auf die gleiche Weise aufgelöst wie {{jsxref("Promise.resolve()")}}: es wird immer in ein natives `Promise` konvertiert und dann abgewartet. Wenn der `expression` ein:

- Nativer `Promise` (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört, und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ abgewartet, ohne `then()` aufzurufen.
- [Thenable object](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-nativer Versprechen, Polyfill, Proxy, Kindklasse, etc.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor konstruiert, indem die `then()` Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve` Rückruf aufruft.
- Nicht-thenable Wert: Ein bereits erfülltes `Promise` wird konstruiert und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, pausiert die Ausführung der Async-Funktion bis zum nächsten Tick. In der Zwischenzeit wird die Ausführung des Aufrufers der Async-Funktion fortgesetzt. [Siehe untenstehendes Beispiel.](#kontrollfluss-effekte_von_await)

Da `await` nur innerhalb von Async-Funktionen und Modulen gültig ist, welche selbst asynchron sind und Versprechen zurückgeben, blockiert der `await` Ausdruck niemals den Hauptthread und verschiebt nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d.h. alles nach dem `await` Ausdruck.

## Beispiele

### Warten auf ein erfülltes Promise

Wenn ein `Promise` an einen `await` Ausdruck übergeben wird, wartet er darauf, dass das `Promise` erfüllt wird, und gibt den erfüllten Wert zurück.

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

Sie können auch zurückgewiesen werden:

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

Wenn der Wert kein `Promise` ist, konvertiert `await` den Wert in ein gelöstes `Promise` und wartet darauf. Die Identität des abgewarteten Wertes ändert sich nicht, solange er keine `then` Eigenschaft hat, die aufrufbar ist.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### Behandlung abgewiesener Promises

Wenn das `Promise` abgelehnt wird, wird der zurückgewiesene Wert geworfen.

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

Sie können abgelehnte Promises ohne einen `try` Block behandeln, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Handler vor dem Abwarten des Promises anketten.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` niemals synchron einen Fehler wirft, sondern immer ein abgelehntes Promise zurückgibt. Dies ist der Fall bei den meisten gut gestalteten, auf Versprechen basierenden Funktionen, die normalerweise wie folgt aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn jedoch `promisedFunction()` einen Fehler synchron wirft, wird der Fehler nicht vom `catch()` Handler abgefangen. In diesem Fall ist die `try...catch` Anweisung erforderlich.

### Top-level await

Sie können das `await` Schlüsselwort für sich allein (außerhalb einer Async-Funktion) auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Dies bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst ausgeführt werden, während sie nicht verhindern, dass andere Kindmodule geladen werden.

Hier ist ein Beispiel für ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung angibt. Alle Module, die dieses einbeziehen, werden warten, bis das Fetch aufgelöst wird, bevor sie einen Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Kontrollfluss-Effekte von await

Wenn ein `await` in Code auftritt (entweder in einer Async-Funktion oder in einem Modul), wird der abgewartete Ausdruck ausgeführt, während aller Code, der vom Wert des Ausdrucks abhängt, pausiert wird. Die Kontrolle verlässt die Funktion und kehrt zum Aufrufer zurück. Wenn der Wert des abgewarteten Ausdrucks aufgelöst wird, wird ein weiteres [Mikrotask](/de/docs/Web/JavaScript/Event_loop), das den pausierten Code fortsetzt, geplant. Dies geschieht, selbst wenn der abgewartete Wert ein bereits aufgelöstes Promise oder kein Promise ist: Die Ausführung kehrt erst zur aktuellen Funktion zurück, wenn alle anderen bereits geplanten Mikrotasks verarbeitet wurden. Betrachten Sie zum Beispiel den folgenden Code:

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

In diesem Fall ist die Funktion `foo` effektiv synchron, da sie keinen `await` Ausdruck enthält. Die drei Anweisungen erfolgen im gleichen Tick. Daher führen die beiden Funktionsaufrufe alle Anweisungen in Sequenz aus. In Promise-Begriffen entspricht die Funktion:

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

Der zusätzliche `then()` Handler kann mit dem Executor zusammengeführt werden, der an den Konstruktor übergeben wird, da er nicht auf eine asynchrone Operation wartet. Aber seine Existenz teilt den Code in ein zusätzliches Mikrotask für jeden Aufruf von `foo`. Diese Mikrotasks werden geplant und auf eine verschachtelte Weise ausgeführt, was Ihren Code sowohl langsamer machen als auch unnötige Race-Conditions einführen kann. Verwenden Sie daher `await` nur dann, wenn es notwendig ist (um Promises in ihre Werte aufzulösen).

Mikrotasks werden nicht nur durch Promise-Auflösung, sondern auch durch andere Web-APIs geplant und sie werden mit der gleichen Priorität ausgeführt. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) um zu demonstrieren, wie die Mikrotask-Warteschlange verarbeitet wird, wenn jeder `await` Ausdruck auftritt.

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

In diesem Beispiel wird die `test()` Funktion immer aufgerufen, bevor die Async-Funktion fortgesetzt wird, sodass die Mikrotasks, die sie jeweils planen, immer auf eine verschachtelte Weise ausgeführt werden. Auf der anderen Seite, weil sowohl `await` als auch `queueMicrotask()` Mikrotasks planen, basiert die Ausführungsreihenfolge immer auf der Reihenfolge der Planung. Dies ist der Grund, warum das "queueMicrotask() after calling async function" Protokoll nach dem ersten Fortsetzen der Async-Funktion auftritt.

### Verbesserung des Stack-Traces

Manchmal wird das `await` weggelassen, wenn ein Promise direkt aus einer Async-Funktion zurückgegeben wird.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

Betrachten Sie jedoch den Fall, wo `lastAsyncTask` asynchron einen Fehler wirft.

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

Nur `lastAsyncTask` erscheint im Stack-Trace, da das Promise zurückgewiesen wird, nachdem es bereits von `noAwait` zurückgegeben wurde – in gewisser Weise ist das Promise nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise aufzulösen, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues zurückgewiesenes Promise umgewandelt, aber während der Fehlererstellung erscheint der Aufrufer im Stack-Trace.

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

Entgegen einiger populärer Meinungen ist `return await promise` mindestens so schnell wie `return promise`, aufgrund der Art und Weise, wie die Spezifikationen und Engines die Auflösung nativer Promises optimieren. Es gibt einen Vorschlag, um [`return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption) und Sie können auch über [V8's Optimierung von Async-Funktionen](https://v8.dev/blog/fast-async) lesen. Daher ist `return await` außer aus stilistischen Gründen fast immer vorzuziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` expression](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- [typescript-eslint Regel: `return-await`](https://typescript-eslint.io/rules/return-await/)
