---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{jsSidebar("Operators")}}

Der **`await`**-Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf oberster Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenables Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des `Promise` oder `thenables` Objekts, oder, wenn der Ausdruck nicht thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Wirft den Ablehnungsgrund, wenn das `Promise` oder das `thenables` Objekt abgelehnt wird.

## Beschreibung

`await` wird normalerweise verwendet, um `Promises` zu entpacken, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung der umgebenden `async`-Funktion, bis das Promise abgeschlossen ist (d.h. erfüllt oder abgelehnt). Wenn die Ausführung fortgesetzt wird, wird der Wert des `await`-Ausdrucks zu dem des erfüllten Promises.

Wenn das Promise abgelehnt wird, wirft der `await`-Ausdruck den abgelehnten Wert. Die Funktion, die den `await`-Ausdruck enthält, wird [im Stacktrace erscheinen](#verbesserte_stacktrace) des Fehlers. Andernfalls, wenn auf das abgelehnte Promise nicht gewartet wird oder es sofort zurückgegeben wird, wird die aufrufende Funktion nicht im Stacktrace erscheinen.

Der `expression` wird auf die gleiche Weise aufgelöst wie {{jsxref("Promise.resolve()")}}: es wird immer in ein natives `Promise` konvertiert und dann aufgelöst. Wenn der `expression` ein:

- Natives `Promise` ist (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise`): Das Promise wird direkt verwendet und nativ aufgelöst, ohne `then()` aufzurufen.
- [Thenables Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-nativer Promises, Polyfill, Proxy, Unterklasse, etc.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor konstruiert, indem die `then()`-Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve`-Callback aufruft.
- Nicht-thenables Wert: Ein bereits erfülltes `Promise` wird konstruiert und verwendet.

Auch wenn das verwendete Promise bereits erfüllt ist, pausiert die Ausführung der async-Funktion bis zum nächsten Tick. In der Zwischenzeit setzt der Aufrufer der async-Funktion die Ausführung fort. [Siehe Beispiel unten.](#kontrolleffekte_von_await)

Da `await` nur innerhalb von async-Funktionen und Modulen gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await`-Ausdruck nie den Haupt-Thread und verschiebt die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d.h. alles nach dem `await`-Ausdruck.

## Beispiele

### Auf ein zu erfüllendes Promise warten

Wenn ein `Promise` an einen `await`-Ausdruck übergeben wird, wartet er, bis das `Promise` erfüllt ist, und gibt den erfüllten Wert zurück.

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

### Thenables Objekte

[Thenables Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden genauso aufgelöst wie tatsächliche `Promise`-Objekte.

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

### Umwandlung zu Promise

Wenn der Wert kein `Promise` ist, konvertiert `await` den Wert in ein aufgelöstes `Promise` und wartet darauf. Die Identität des gewarteten Wertes ändert sich nicht, solange er keine `then`-Eigenschaft hat, die aufrufbar ist.

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

Sie können abgelehnte Promises ohne einen `try`-Block behandeln, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Handler vor dem Warten auf das Promise in die Kette einfügen.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` niemals synchron einen Fehler wirft, sondern immer ein abgelehntes Promise zurückgibt. Dies ist der Fall bei den meisten ordnungsgemäß gestalteten, auf Promises basierenden Funktionen, die in der Regel so aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn jedoch `promisedFunction()` tatsächlich synchron einen Fehler wirft, wird dieser Fehler nicht vom `catch()`-Handler abgefangen. In diesem Fall ist die `try...catch`-Anweisung notwendig.

### `Top level await`

Sie können das `await`-Schlüsselwort alleine (außerhalb einer async-Funktion) auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Das bedeutet, dass Module mit Kind-Modulen, die `await` verwenden, darauf warten, dass die Kind-Module ausgeführt werden, bevor sie selbst laufen, während andere Kind-Module nicht am Laden gehindert werden.

Hier ist ein Beispiel für ein einfaches Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung angibt. Jede Module, die dieses einbeziehen, werden warten, bis das Fetch aufgelöst ist, bevor irgendein Code ausgeführt wird.

![](8-e4b7d7b.md)

### Kontrolleffekte von await

Wenn ein `await` im Code angetroffen wird (entweder in einer async-Funktion oder in einem Modul), wird der gewartete Ausdruck ausgeführt, während aller Code, der vom Wert des Ausdrucks abhängt, angehalten und in die [Microtask-Warteschlange](/de/docs/Web/JavaScript/Event_loop) verschoben wird. Der Haupt-Thread wird dann für die nächste Aufgabe in der Ereignisschleife freigegeben. Dies passiert selbst dann, wenn der gewartete Wert ein bereits aufgelöstes Promise ist oder kein Promise. Betrachten Sie zum Beispiel den folgenden Code:

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

In diesem Fall sind die beiden async-Funktionen in der Wirkung synchron, da sie keinen `await`-Ausdruck enthalten. Die drei Anweisungen passieren im gleichen Tick. Versprochenen Begriffen zufolge entspricht die Funktion den Begriffen:

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

Sobald jedoch ein `await` vorhanden ist, wird die Funktion asynchron, und die Ausführung der nachfolgenden Anweisungen wird auf den nächsten Tick verschoben.

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

Obwohl der zusätzliche `then()`-Handler nicht notwendig ist und der Handler mit dem an den Konstruktor übergebenen Executor zusammengeführt werden kann, bedeutet das Vorhandensein des `then()`-Handlers, dass der Code einen zusätzlichen Tick benötigt, um zu vervollständigen. Dasselbe passiert bei `await`. Verwenden Sie `await` also nur dann, wenn es erforderlich ist (um `Promises` in ihre Werte zu entpacken).

Andere Microtasks können ausgeführt werden, bevor die async-Funktion wieder aufgenommen wird. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu demonstrieren, wie die Microtask-Warteschlange verarbeitet wird, wenn jeder `await`-Ausdruck angetroffen wird.

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

In diesem Beispiel wird die `test()`-Funktion immer aufgerufen, bevor die async-Funktion wieder aufgenommen wird, sodass die Microtasks, die sie jeweils planen, immer in verschachtelter Reihenfolge ausgeführt werden. Auf der anderen Seite, da sowohl `await` als auch `queueMicrotask()` Microtasks planen, basiert die Reihenfolge der Ausführung immer auf der Reihenfolge der Planung. Deshalb passiert das "queueMicrotask() after calling async function"-Protokoll erst, nachdem die async-Funktion das erste Mal fortgesetzt wird.

### Verbesserte Stacktrace

Manchmal wird `await` weggelassen, wenn ein Promise direkt von einer async-Funktion zurückgegeben wird.

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

Nur `lastAsyncTask` erscheint im Stacktrace, weil das Promise abgelehnt wird, nachdem es bereits von `noAwait` zurückgegeben wurde — in gewissem Sinne ist das Promise nicht mit `noAwait` verbunden. Um den Stacktrace zu verbessern, können Sie `await` verwenden, um das Promise zu entpacken, sodass die Ausnahme in die aktuelle Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise gewickelt, aber während der Fehlererstellung erscheint der Anrufer im Stacktrace.

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

Entgegen mancher populärer Meinung ist `return await promise` mindestens genauso schnell wie `return promise`, aufgrund der Art und Weise, wie die Spezifikation und Maschinen die Auflösung von nativen `Promises` optimieren. Es gibt einen Vorschlag, um [`return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption), und Sie können auch über [V8s Optimierung bei asynchronen Funktionen lesen](https://v8.dev/blog/fast-async). Deshalb ist `return await` fast immer vorzuziehen, außer aus stilistischen Gründen.

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
