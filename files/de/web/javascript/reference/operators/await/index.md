---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder irgendein Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promises oder thenable Objekts oder, wenn der Ausdruck nicht thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Löst den Ablehnungsgrund aus, wenn das Promise oder thenable Objekt abgelehnt wird.

## Beschreibung

`await` wird normalerweise verwendet, um Promises zu entpacken, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung der umgebenden `async` Funktion, bis das Promise abgeschlossen ist (d.h. erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, entspricht der Wert des `await` Ausdrucks dem des erfüllten Promises.

Wenn das Promise abgelehnt wird, löst der `await` Ausdruck den abgelehnten Wert aus. Die Funktion, die den `await` Ausdruck enthält, wird [im Stack-Trace erscheinen](#verbesserung_des_stack-traces) des Fehlers. Andernfalls, wenn das abgelehnte Promise nicht gewartet oder sofort zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack-Trace.

Der `expression`- Ausdruck wird auf die gleiche Weise wie {{jsxref("Promise.resolve()")}} aufgelöst: Er wird immer in ein natives `Promise` konvertiert und dann abgewartet. Wenn der `expression` ein:

- Natives `Promise` ist (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ abgewartet, ohne den Aufruf von `then()`.
- [Thenable Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht nativer Promises, Polyfill, Proxy, Unterklasse usw.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor erstellt, indem die `then()` Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve` Rückruf aufruft.
- Nicht-thenable Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, wird die Ausführung der async Funktion dennoch bis zum nächsten Tick pausiert. In der Zwischenzeit setzt der Aufrufer der async Funktion die Ausführung fort. [Siehe Beispiel unten.](#auswirkungen_von_await_auf_den_kontrollfluss)

Da `await` nur innerhalb asynchroner Funktionen und Module gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await` Ausdruck niemals den Hauptthread und verzögert nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d.h. alles, was nach dem `await` Ausdruck kommt.

## Beispiele

### Auf ein erfülltes Promise warten

Wenn ein `Promise` an einen `await` Ausdruck übergeben wird, wartet er darauf, dass das `Promise` erfüllt wird und gibt den erfüllten Wert zurück.

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

[Thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden genauso gelöst wie tatsächliche `Promise` Objekte.

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

### Konvertierung zu Promise

Wenn der Wert kein `Promise` ist, konvertiert `await` den Wert zu einem erfüllten `Promise` und wartet darauf. Die Identität des abgewarteten Wertes ändert sich nicht, solange er keine aufrufbare `then` Eigenschaft hat.

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

Sie können abgelehnte Promises ohne einen `try` Block handhaben, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Handler vor dem Awaiten des Promises verketten.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` niemals synchron eine Fehlermeldung auslöst, sondern immer ein abgelehntes Promise zurückgibt. Dies ist der Fall für die meisten richtig gestalteten, auf Promises basierenden Funktionen, die normalerweise so aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Jedoch, wenn `promisedFunction()` tatsächlich synchron eine Fehlermeldung auslöst, wird der Fehler nicht vom `catch()` Handler erfasst. In diesem Fall ist das `try...catch` Statement notwendig.

### Top Level Await

Sie können das `await` Schlüsselwort eigenständig (außerhalb einer async Funktion) auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Dies bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst ausgeführt werden, ohne jedoch andere Kindmodule am Laden zu hindern.

Hier ist ein Beispiel für ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung angibt. Alle Module, die dies einbeziehen, warten darauf, dass das Fetch gelöst wird, bevor sie Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Auswirkungen von Await auf den Kontrollfluss

Wenn ein `await` in Code auftritt (entweder in einer async Funktion oder in einem Modul), wird der abgewartete Ausdruck ausgeführt, während aller Code, der vom Wert des Ausdrucks abhängt, pausiert und in die [Microtask-Warteschlange](/de/docs/Web/JavaScript/Event_loop) geschoben wird. Der Haupt-Thread wird dann für die nächste Aufgabe in der Ereignisschleife freigegeben. Dies geschieht selbst dann, wenn der abgewartete Wert bereits ein gelöstes Promise ist oder kein Promise ist. Betrachten Sie beispielsweise den folgenden Code:

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

In diesem Fall sind die beiden async Funktionen im Effekt synchron, da sie keinen `await` Ausdruck enthalten. Die drei Anweisungen erfolgen im gleichen Tick. In Promise-Begriffen entspricht die Funktion:

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

Sobald jedoch ein `await` vorhanden ist, wird die Funktion asynchron und die Ausführung der folgenden Anweisungen wird auf den nächsten Tick verschoben.

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

Während der zusätzliche `then()` Handler nicht notwendig ist und der Handler mit dem Executor zusammengeführt werden kann, der an den Konstruktor übergeben wird, bedeutet die Existenz des `then()` Handlers, dass der Code einen zusätzlichen Tick benötigt, um abgeschlossen zu werden. Dasselbe gilt für `await`. Verwenden Sie daher `await` nur, wenn es notwendig ist (um Promises in ihre Werte zu entpacken).

Andere Mikrotasks können ausgeführt werden, bevor die async Funktion wieder aufgenommen wird. In diesem Beispiel wird [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwendet, um zu demonstrieren, wie die Mikrotask-Warteschlange verarbeitet wird, wenn jeder `await` Ausdruck auftritt.

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

In diesem Beispiel wird die `test()` Funktion immer aufgerufen, bevor die async Funktion fortgesetzt wird, sodass die jeweils geplanten Mikrotasks immer abwechselnd ausgeführt werden. Auf der anderen Seite, da sowohl `await` als auch `queueMicrotask()` Mikrotasks planen, basiert die Ausführungsreihenfolge immer auf der Reihenfolge der Planung. Deshalb erfolgt das Protokoll "queueMicrotask() after calling async function" nach der ersten Fortsetzung der async Funktion.

### Verbesserung des Stack-Traces

Manchmal wird das `await` weggelassen, wenn ein Promise direkt aus einer async Funktion zurückgegeben wird.

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

Nur `lastAsyncTask` erscheint im Stack-Trace, weil das Promise nach der Rückgabe aus `noAwait` abgelehnt wird – in gewisser Weise ist das Promise nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise zu entpacken, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise eingebunden, aber während der Fehlererstellung wird der Aufrufer im Stack-Trace erscheinen.

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

Entgegen der landläufigen Meinung ist `return await promise` mindestens so schnell wie `return promise`, aufgrund dessen, wie die Spezifikation und die Engines die Auflösung von nativen Promises optimieren. Es gibt einen Vorschlag, [um `return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption), und Sie können auch über [V8s Optimierung von async Funktionen](https://v8.dev/blog/fast-async) lesen. Daher ist `return await` ausgenommen stilistischer Gründe fast immer vorzuziehen.

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
