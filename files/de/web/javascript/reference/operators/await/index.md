---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 89151246c776dfcc65983c1a906b2fbf2713694f
---

{{jsSidebar("Operators")}}

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [Thenable-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet wird.

### Rückgabewert

Der Erfüllungswert des Promise- oder Thenable-Objekts, oder, wenn der Ausdruck nicht thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Wirft den Ablehnungsgrund, wenn das Promise oder Thenable-Objekt abgelehnt wird.

## Beschreibung

`await` wird normalerweise verwendet, um Promises zu entpacken, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung seiner umgebenden `async` Funktion, bis das Promise aufgelöst ist (d. h. erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, wird der Wert des `await` Ausdrucks zu dem des erfüllten Promise.

Wenn das Promise abgelehnt wird, wirft der `await` Ausdruck den abgelehnten Wert. Die Funktion, die den `await` Ausdruck enthält, wird [im Stack-Trace erscheinen](#verbesserung_des_stack-trace) des Fehlers. Andernfalls, wenn das abgelehnte Promise nicht erwartet oder sofort zurückgegeben wird, wird die aufrufende Funktion nicht im Stack-Trace erscheinen.

Der `expression` wird auf die gleiche Weise wie {{jsxref("Promise.resolve()")}} aufgelöst: Es wird immer in ein natives `Promise` konvertiert und dann erwartet. Wenn der `expression` ein:

- Natives `Promise` ist (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ erwartet, ohne `then()` aufzurufen.
- [Thenable-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-natives Promise, Polyfill, Proxy, Kindklassen, usw.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Konstruktor erstellt, indem die `then()` Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve` Callback aufruft.
- Nicht-thenable Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, pausiert die Ausführung der `async` Funktion trotzdem bis zum nächsten Tick. In der Zwischenzeit wird die Ausführung des Anrufers der `async` Funktion fortgesetzt. [Siehe Beispiel unten.](#kontrollfluss-effekte_von_await)

Da `await` nur innerhalb von `async` Funktionen und Modulen gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await` Ausdruck nie den Hauptthread und verzögert nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d. h. alles nach dem `await` Ausdruck.

## Beispiele

### Auf Erfüllung eines Promises warten

Wenn ein `Promise` an einen `await` Ausdruck übergeben wird, wartet er, bis das `Promise` erfüllt ist, und gibt den erfüllten Wert zurück.

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
  await thenable; // Wirft Error: rejected!
}

f2();
```

### Konvertierung zu Promise

Wenn der Wert kein `Promise` ist, konvertiert `await` den Wert in ein erfülltes `Promise` und wartet darauf. Die Identität des erwarteten Wertes ändert sich nicht, solange er keine aufrufbare `then` Eigenschaft hat.

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

Sie können abgelehnte Promises ohne einen `try` Block handhaben, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Handler vor dem Await auf das Promise anhängen.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response wird "default response" sein, wenn das Promise abgelehnt wird
```

Dies basiert auf der Annahme, dass `promisedFunction()` niemals synchron einen Fehler wirft, sondern immer ein abgelehntes Promise zurückgibt. Dies ist der Fall für die meisten richtig entworfenen, Promise-basierten Funktionen, die normalerweise so aussehen:

```js
function promisedFunction() {
  // Gibt sofort ein Promise zurück, um die Chance eines Fehlers zu minimieren
  return new Promise((resolve, reject) => {
    // etwas asynchrones tun
  });
}
```

Wenn jedoch `promisedFunction()` synchron einen Fehler wirft, wird der Fehler nicht vom `catch()` Handler abgefangen. In diesem Fall ist die `try...catch` Anweisung notwendig.

### Top-Level Await

Sie können das `await` Schlüsselwort allein (außerhalb einer async Funktion) auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Das bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst ausgeführt werden, während sie andere Kindmodule nicht daran hindern, zu laden.

Hier ist ein Beispiel für ein einfaches Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export) Anweisung `await` spezifiziert. Alle Module, die dies einbeziehen, warten, bis das Fetch aufgelöst ist, bevor sie Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Kontrollfluss-Effekte von Await

Wenn ein `await` im Code gefunden wird (entweder in einer async Funktion oder in einem Modul), wird der erwartete Ausdruck ausgeführt, während der gesamte Code, der vom Wert des Ausdrucks abhängt, pausiert und in die [Microtask-Warteschlange](/de/docs/Web/JavaScript/Event_loop) verschoben wird. Der Haupt-Thread wird dann für die nächste Aufgabe in der Event-Schleife freigegeben. Dies geschieht, selbst wenn der erwartete Wert ein bereits aufgelöstes Promise oder kein Promise ist. Betrachten Sie zum Beispiel folgenden Code:

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

In diesem Fall sind die beiden async Funktionen effektiv synchron, da sie keinen `await` Ausdruck enthalten. Die drei Anweisungen treten im gleichen Tick auf. In Promise-Begriffen entspricht die Funktion:

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

Obwohl der zusätzliche `then()` Handler nicht notwendig ist und der Handler mit dem Executor verbunden werden kann, der an den Konstruktor übergeben wird, bedeutet die Existenz des `then()` Handlers, dass der Code einen zusätzlichen Tick benötigt, um abgeschlossen zu werden. Das Gleiche gilt für `await`. Stellen Sie daher sicher, `await` nur dann zu verwenden, wenn es notwendig ist (um Promises in ihre Werte zu entpacken).

Andere Microtasks können ausgeführt werden, bevor die async Funktion fortgesetzt wird. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/queueMicrotask), um zu demonstrieren, wie die Microtask-Warteschlange verarbeitet wird, wenn auf jeden `await` Ausdruck getroffen wird.

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

// Ausgabe:
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

In diesem Beispiel wird die Funktion `test()` immer vor der Wiederaufnahme der async Funktion aufgerufen, sodass die Microtasks, die sie jeweils planen, immer abwechselnd ausgeführt werden. Andererseits, da sowohl `await` als auch `queueMicrotask()` Microtasks planen, basiert die Ausführungsreihenfolge immer auf der Planungsreihenfolge. Daher geschieht das Log "queueMicrotask() after calling async function" nach der ersten Wiederaufnahme der async Funktion.

### Verbesserung des Stack-Trace

Manchmal wird `await` ausgelassen, wenn ein Promise direkt aus einer async Funktion zurückgegeben wird.

```js
async function noAwait() {
  // Einige Aktionen...

  return /* await */ lastAsyncTask();
}
```

Betrachten Sie jedoch den Fall, bei dem `lastAsyncTask` asynchron einen Fehler wirft.

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

Nur `lastAsyncTask` erscheint im Stack-Trace, weil das Promise abgelehnt wird, nachdem es bereits von `noAwait` zurückgegeben wurde – in gewissem Sinne ist das Promise nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise zu entpacken, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise gewickelt, aber während der Erstellung des Fehlers erscheint der Aufrufer im Stack-Trace.

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

Entgegen der weitverbreiteten Meinung ist `return await promise` mindestens so schnell wie `return promise`, aufgrund der Art und Weise, wie die Spezifikation und Engines die Auflösung von nativen Promises optimieren. Es gibt einen Vorschlag, [`return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption), und Sie können auch über [V8's Optimierung von async Funktionen](https://v8.dev/blog/fast-async) lesen. Daher ist `return await` außer aus stilistischen Gründen fast immer vorzuziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [Top-level await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- [typescript-eslint Regel: `return-await`](https://typescript-eslint.io/rules/return-await/)
