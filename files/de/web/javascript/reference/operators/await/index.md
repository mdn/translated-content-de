---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des `promise` oder `thenable` Objekts oder, wenn das Ausdruck kein Thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Wirft den Ablehnungsgrund, wenn das `promise` oder `thenable` Objekt abgelehnt wird.

## Beschreibung

`await` wird normalerweise verwendet, um `promises` zu entpacken, indem man ein {{jsxref("Promise")}} als `expression` übergibt. Die Verwendung von `await` pausiert die Ausführung der umgebenden `async` Funktion, bis das `promise` abgeschlossen ist (d. h. erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, erhält der `await` Ausdruck den Wert des erfüllten `promise`.

Wenn das `promise` abgelehnt wird, wirft der `await` Ausdruck den abgelehnten Wert. Die Funktion, die den `await` Ausdruck enthält, wird [im Stack-Trace erscheinen](#verbesserung_des_stack-traces) des Fehlers. Andernfalls, wenn das abgelehnte `promise` nicht erwartet wird oder sofort zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack-Trace.

Der `expression` wird auf die gleiche Weise wie {{jsxref("Promise.resolve()")}} aufgelöst: Er wird immer in ein nativer `Promise` umgewandelt und dann erwartet. Wenn der `expression` ein ist:

- Nativer `Promise` (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise`): Das `promise` wird direkt verwendet und nativ erwartet, ohne `then()` aufzurufen.
- [Thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-nativer `promises`, Polyfills, Proxys, Unterklasse, etc.): Ein neues `promise` wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor konstruiert, indem die `then()` Methode des Objekts aufgerufen wird und ein Handler übergeben wird, der den `resolve` Rückruf aufruft.
- Nicht-thenabler Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Selbst wenn das verwendete `promise` bereits erfüllt ist, wird die Ausführung der asynchronen Funktion bis zum nächsten Takt pausiert. In der Zwischenzeit wird die ausführende Funktion des aufrufenden Funktion fortgesetzt. [Siehe untenstehendes Beispiel.](#steuerflusseffekte_von_await)

Da `await` nur innerhalb von `async` Funktionen und Modulen gültig ist, die selbst asynchron sind und `promises` zurückgeben, blockiert der `await` Ausdruck nie den Hauptthread und verzögert nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, also alles, was nach dem `await` Ausdruck kommt.

## Beispiele

### Warten auf ein erfülltes Promise

Wenn ein `Promise` an einen `await` Ausdruck übergeben wird, wartet dieser auf die Erfüllung des `Promise` und gibt den erfüllten Wert zurück.

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

### Umwandlung in ein Promise

Wenn der Wert kein `Promise` ist, wandelt `await` den Wert in ein erfülltes `Promise` um und wartet darauf. Die Identität des erwarteten Werts ändert sich nicht, solange er keine aufrufbare `then` Eigenschaft hat.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### Behandlung abgelehnter Promises

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

Sie können abgelehnte `promises` ohne einen `try` Block behandeln, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Handler vor dem Warten des `promise` verketten.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` niemals synchron einen Fehler auslöst, sondern immer ein abgelehntes `promise` zurückgibt. Dies ist bei den meisten richtig gestalteten, auf `promise` basierenden Funktionen der Fall, die normalerweise so aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn jedoch `promisedFunction()` einen Fehler synchron auslöst, wird der Fehler nicht vom `catch()` Handler erfasst. In diesem Fall ist die `try...catch` Anweisung erforderlich.

### Top-Level Await

Sie können das `await` Schlüsselwort allein (außerhalb einer async Funktion) auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Das bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst laufen, ohne den Ladevorgang anderer Kindmodule zu blockieren.

Hier ist ein Beispiel für ein einfaches Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung angibt. Alle Module, die dieses enthalten, warten darauf, dass der Fetch gelöst wird, bevor sie Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Steuerflusseffekte von Await

Wenn ein `await` im Code (entweder in einer `async` Funktion oder einem Modul) auftritt, wird der erwartete Ausdruck ausgeführt, während der gesamte Code, der von dem Ausdruck abhängt, pausiert und in die [Mikrotask-Warteschlange](/de/docs/Web/JavaScript/Event_loop) verschoben wird. Der Hauptthread wird dann für die nächste Aufgabe im Ereignisschleife freigegeben. Dies geschieht selbst dann, wenn der erwartete Wert bereits erfüllt ist oder kein `Promise` ist. Betrachten Sie zum Beispiel den folgenden Code:

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

In diesem Fall sind die beiden `async` Funktionen im Wesentlichen synchron, da sie keinen `await` Ausdruck enthalten. Die drei Anweisungen passieren im selben Takt. Im `promise`-Sinne entspricht die Funktion:

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

Sobald jedoch ein `await` vorhanden ist, wird die Funktion asynchron, und die Ausführung der folgenden Anweisungen wird auf den nächsten Takt verschoben.

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

Obwohl der zusätzliche `then()` Handler nicht notwendig ist und der Handler mit dem an den Konstruktor übergebenen Executor zusammengelegt werden kann, bedeutet das Vorhandensein des `then()` Handlers, dass der Code einen zusätzlichen Takt benötigt, um fertigzustellen. Dasselbe gilt für `await`. Daherstellen Sie sicher, dass Sie `await` nur dann verwenden, wenn es notwendig ist (um `promises` in ihre Werte zu entpacken).

Andere Mikrotasks können ausgeführt werden, bevor die `async` Funktion fortgesetzt wird. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu demonstrieren, wie die Mikrotask-Warteschlange verarbeitet wird, wenn jeder `await` Ausdruck auftritt.

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

In diesem Beispiel wird die `test()` Funktion immer aufgerufen, bevor die `async` Funktion fortsetzt, sodass die von ihnen jeweils geplanten Mikrotasks immer auf verschachtelte Weise ausgeführt werden. Andererseits, da sowohl `await` als auch `queueMicrotask()` Mikrotasks planen, basiert die Ausführungsreihenfolge immer auf der Planungsreihenfolge. Dies ist der Grund, warum das „queueMicrotask() after calling async function“ Protokoll nach der ersten Fortsetzung der `async` Funktion auftritt.

### Verbesserung des Stack-Traces

Manchmal wird `await` ausgelassen, wenn ein `promise` direkt aus einer `async` Funktion zurückgegeben wird.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

Betrachten Sie jedoch den Fall, wenn `lastAsyncTask` asynchron einen Fehler auslöst.

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

Nur `lastAsyncTask` erscheint im Stack-Trace, weil das `promise` zurückgewiesen wird, nachdem es bereits von `noAwait` zurückgegeben wurde — in gewissem Sinne ist das `promise` nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das `promise` zu entpacken, so dass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes `promise` eingewickelt, aber während der Fehlererstellung wird der Aufrufer im Stack-Trace erscheinen.

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

Entgegen einigen populären Annahmen ist `return await promise` mindestens so schnell wie `return promise`, aufgrund der Spezifikation und wie Engines die Auflösung von nativen `promises` optimieren. Es gibt einen Vorschlag, um [„return promise“ schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption) und Sie können auch über die [Optimierung von `async` Funktionen in V8](https://v8.dev/blog/fast-async) lesen. Daher, außer aus stilistischen Gründen, ist `return await` fast immer vorzuziehen.

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
