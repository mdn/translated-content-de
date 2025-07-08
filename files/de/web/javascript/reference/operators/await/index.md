---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der **`await`** Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf oberster Ebene eines [modul](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [thenable object](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promises oder des thenable objects oder, wenn der Ausdruck nicht thenable ist, der eigene Wert des Ausdrucks.

### Ausnahmen

Wirft den Ablehnungsgrund, wenn das Promise oder das thenable object abgelehnt wird.

## Beschreibung

`await` wird üblicherweise verwendet, um Promises zu entpacken, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Die Verwendung von `await` pausiert die Ausführung seiner umgebenden `async` Funktion, bis das Promise abgeschlossen ist (d.h. erfüllt oder abgelehnt wird). Wenn die Ausführung fortgesetzt wird, entspricht der Wert des `await`-Ausdrucks dem des erfüllten Promises.

Wenn das Promise abgelehnt wird, wirft der `await`-Ausdruck den abgelehnten Wert. Die Funktion, die den `await`-Ausdruck enthält, wird im [Stack-Trace](#verbesserung_des_stack-traces) des Fehlers erscheinen. Andernfalls, wenn das abgelehnte Promise nicht erwartet oder sofort zurückgegeben wird, wird die aufrufende Funktion nicht im Stack-Trace erscheinen.

Der `expression`-Ausdruck wird auf die gleiche Weise aufgelöst wie {{jsxref("Promise.resolve()")}}: Er wird immer in ein natives `Promise` umgewandelt und dann erwartet. Wenn der `expression`-Ausdruck ein:

- Natives `Promise` (was bedeutet, dass `expression` zu `Promise` oder einer Unterklasse gehört und `expression.constructor === Promise` ist): Das Promise wird direkt verwendet und nativ ohne Aufruf von `then()` erwartet.
- [Thenable object](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht-nativen Promises, Polyfill, Proxy, Kindklasse, etc.): Ein neues Promise wird mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor erstellt, indem die `then()`-Methode des Objekts aufgerufen und ein Handler übergeben wird, der den `resolve`-Callback aufruft.
- Nicht-thenable Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, pausiert die Ausführung der async Funktion bis zum nächsten Tick. In der Zwischenzeit wird der Aufrufer der async Funktion erneut ausgeführt. [Siehe das Beispiel unten.](#kontrollfluss-effekte_von_await)

Da `await` nur innerhalb von async Funktionen und Modulen gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await`-Ausdruck niemals den Hauptthread und verschiebt nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, d.h. alles, was nach dem `await`-Ausdruck kommt.

## Beispiele

### Warten auf ein Promise, um erfüllt zu werden

Wenn ein `Promise` an einen `await`-Ausdruck übergeben wird, wartet dieser, bis das `Promise` erfüllt ist und gibt den erfüllten Wert zurück.

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

[Thenable Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden genauso aufgelöst wie tatsächliche `Promise`-Objekte.

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

Wenn der Wert kein `Promise` ist, wandelt `await` den Wert in ein aufgelöstes `Promise` um und wartet auf es. Die Identität des erwarteten Wertes ändert sich nicht, solange er keine `then`-Eigenschaft hat, die aufgerufen werden kann.

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

Sie können abgelehnte Promises ohne einen `try`-Block behandeln, indem Sie einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Handler vor dem Erwarten des Promises anhängen.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies basiert auf der Annahme, dass `promisedFunction()` nie synchron einen Fehler wirft, sondern immer ein abgelehntes Promise zurückgibt. Dies ist bei den meisten richtig gestalteten promise-basierten Funktionen der Fall, die normalerweise wie folgt aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn jedoch `promisedFunction()` einen Fehler synchron wirft, wird der Fehler nicht vom `catch()`-Handler erfasst. In diesem Fall ist die `try...catch`-Anweisung erforderlich.

### Top-level await

Sie können das `await`-Schlüsselwort eigenständig (außerhalb einer async-Funktion) auf der obersten Ebene eines [modul](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Das bedeutet, dass Module mit Kindmodulen, die `await` verwenden, darauf warten, dass die Kindmodule ausgeführt werden, bevor sie selbst ausgeführt werden, ohne andere Kindmodule am Laden zu hindern.

Hier ist ein Beispiel für ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und await in der [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung spezifiziert. Alle Module, die dies einschließen, warten darauf, dass der Fetch aufgelöst wird, bevor sie irgendeinen Code ausführen.

```js
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

### Kontrollfluss-Effekte von await

Wenn in einem Code (entweder in einer async-Funktion oder in einem Modul) ein `await` auftritt, wird der erwartete Ausdruck ausgeführt, während aller Code, der vom Wert des Ausdrucks abhängt, angehalten wird. Die Kontrolle verlässt die Funktion und kehrt zum Aufrufer zurück. Wenn der Wert des erwarteten Ausdrucks aufgelöst ist, wird eine weitere [Mikroaufgabe](/de/docs/Web/JavaScript/Reference/Execution_model) geplant, die den angehaltenen Code fortsetzt. Dies geschieht auch, wenn der erwartete Wert bereits ein aufgelöstes Promise ist oder kein Promise ist: Die Ausführung kehrt nicht zur aktuellen Funktion zurück, bis alle bereits geplanten Mikroaufgaben verarbeitet sind. Zum Beispiel, betrachten Sie den folgenden Code:

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

In diesem Fall ist die Funktion `foo` effektiv synchron, weil sie keinen `await`-Ausdruck enthält. Die drei Anweisungen passieren im selben Tick. Daher führen die beiden Funktionsaufrufe alle Anweisungen in Folge aus. In Promise-Begriffen entspricht die Funktion:

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

Sobald es jedoch einen `await` gibt, wird die Funktion asynchron, und die Ausführung der folgenden Anweisungen wird auf den nächsten Tick verschoben.

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

Der zusätzliche `then()`-Handler kann mit dem Executor kombiniert werden, der dem Konstruktor übergeben wird, da er nicht auf eine asynchrone Operation wartet. Sein Vorhandensein teilt jedoch den Code in eine zusätzliche Mikroaufgabe für jeden Aufruf von `foo`. Diese Mikroaufgaben werden geplant und in einer verschachtelten Weise ausgeführt, was Ihren Code sowohl langsamer machen als auch unnötige Race-Conditions einführen kann. Stellen Sie daher sicher, `await` nur dann zu verwenden, wenn es notwendig ist (um Promises in ihre Werte zu entpacken).

Mikroaufgaben werden nicht nur durch die Promise-Auflösung, sondern auch durch andere Web-APIs geplant und sie werden mit derselben Priorität ausgeführt. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu demonstrieren, wie die Mikroaufgaben-Warteschlange verarbeitet wird, wenn jeder `await`-Ausdruck auftritt.

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

In diesem Beispiel wird die `test()`-Funktion immer vor der Fortsetzung der async Funktion aufgerufen, sodass die Mikroaufgaben, die sie jeweils planen, immer in einer verschachtelten Weise ausgeführt werden. Andererseits, da sowohl `await` als auch `queueMicrotask()` Mikroaufgaben planen, basiert die Ausführungsreihenfolge immer auf der Reihenfolge der Planung. Aus diesem Grund tritt die Protokollzeile "queueMicrotask() after calling async function" nach dem ersten Mal Fortsetzen der async Funktion auf.

### Verbesserung des Stack-Traces

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

Nur `lastAsyncTask` erscheint im Stack-Trace, da das Promise abgelehnt wurde, nachdem es bereits von `noAwait` zurückgegeben wurde – in gewissem Sinne ist das Promise nicht mit `noAwait` verbunden. Um den Stack-Trace zu verbessern, können Sie `await` verwenden, um das Promise zu entpacken, sodass die Ausnahme in der aktuellen Funktion geworfen wird. Die Ausnahme wird dann sofort in ein neues abgelehntes Promise verpackt, aber während der Fehlererstellung wird der Aufrufer im Stack-Trace erscheinen.

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

Im Gegensatz zu einem weit verbreiteten Glauben ist `return await promise` mindestens genauso schnell wie `return promise`, aufgrund der Optimierungen, die in der Spezifikation und den Engines zur Auflösung von nativen Promises vorgenommen werden. Es gibt einen Vorschlag, [die Rückgabe von Promises zu beschleunigen](https://github.com/tc39/proposal-faster-promise-adoption), und Sie können auch über [V8s Optimierung von asynchronen Funktionen](https://v8.dev/blog/fast-async) lesen. Daher ist `return await` außer aus stilistischen Gründen fast immer vorzuziehen.

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
