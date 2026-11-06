---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: 696a0436bb4dd20eb4d30ac3f1d4fc5140d1eee9
---

Der **`await`**-Operator wird verwendet, um auf ein {{jsxref("Promise")}} zu warten und dessen Erfüllungswert zu erhalten. Er kann nur innerhalb einer [async function](/de/docs/Web/JavaScript/Reference/Statements/async_function) oder auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

## Syntax

```js-nolint
await expression
```

### Parameter

- `expression`
  - : Ein {{jsxref("Promise")}}, ein [Thenable-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) oder ein beliebiger Wert, auf den gewartet werden soll.

### Rückgabewert

Der Erfüllungswert des Promise oder Thenable-Objekts oder, falls der Ausdruck nicht thenable ist, der Wert des Ausdrucks selbst.

### Ausnahmen

Löst den Ablehnungsgrund als Ausnahme aus, wenn das Promise oder Thenable-Objekt abgelehnt wird.

## Beschreibung

`await` wird üblicherweise verwendet, um den Wert eines Promise zu erhalten, indem ein {{jsxref("Promise")}} als `expression` übergeben wird. Durch `await` wird die Ausführung der umgebenden `async`-Funktion angehalten, bis das Promise abgeschlossen ist, also entweder erfüllt oder abgelehnt wurde. Wenn die Ausführung fortgesetzt wird, hat der `await`-Ausdruck den Wert des erfüllten Promise.

Wenn das Promise abgelehnt wird, löst der `await`-Ausdruck den Ablehnungswert als Ausnahme aus. Die Funktion, die den `await`-Ausdruck enthält, [erscheint im Stack-Trace](#stack-trace_verbessern) des Fehlers. Wenn dagegen nicht auf das abgelehnte Promise gewartet oder es unmittelbar zurückgegeben wird, erscheint die aufrufende Funktion nicht im Stack-Trace.

`expression` wird auf dieselbe Weise wie bei {{jsxref("Promise.resolve()")}} verarbeitet: Der Ausdruck wird immer in ein natives `Promise` umgewandelt, auf das anschließend gewartet wird. Wenn `expression` Folgendes ist:

- Natives `Promise` (das heißt, `expression` gehört zu `Promise` oder einer Unterklasse, und `expression.constructor === Promise`): Das Promise wird direkt verwendet und es wird nativ darauf gewartet, ohne `then()` aufzurufen.
- [Thenable-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) (einschließlich nicht nativer Promises, Polyfills, Proxys, Unterklassen usw.): Mit dem nativen [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Konstruktor wird ein neues Promise erstellt. Dazu wird die `then()`-Methode des Objekts mit einem Handler aufgerufen, der den `resolve`-Callback aufruft.
- Nicht thenabler Wert: Ein bereits erfülltes `Promise` wird erstellt und verwendet.

Selbst wenn das verwendete Promise bereits erfüllt ist, wird die Ausführung der async function bis zum nächsten Tick angehalten. In der Zwischenzeit setzt der Aufrufer der async function seine Ausführung fort. [Siehe das folgende Beispiel.](#auswirkungen_von_await_auf_den_kontrollfluss)

Da `await` nur innerhalb von async functions und Modulen gültig ist, die selbst asynchron sind und Promises zurückgeben, blockiert der `await`-Ausdruck niemals den Haupt-Thread. Er verzögert nur die Ausführung von Code, der tatsächlich vom Ergebnis abhängt, also allem nach dem `await`-Ausdruck.

## Beispiele

### Auf die Erfüllung eines Promise warten

Wenn einem `await`-Ausdruck ein `Promise` übergeben wird, wartet er auf dessen Erfüllung und gibt den Erfüllungswert zurück.

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

### Thenable-Objekte

[Thenable-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) werden genauso verarbeitet wie echte `Promise`-Objekte.

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

Wenn der Wert kein `Promise` ist, wandelt `await` ihn in ein erfülltes `Promise` um und wartet darauf. Die Identität des Werts, auf den gewartet wird, ändert sich nicht, solange er keine aufrufbare `then`-Eigenschaft besitzt.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### Abgelehnte Promises behandeln

Wenn das `Promise` abgelehnt wird, wird der Ablehnungswert als Ausnahme ausgelöst.

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

Sie können abgelehnte Promises ohne `try`-Block behandeln, indem Sie vor dem Warten auf das Promise einen [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Handler anhängen.

```js
const response = await promisedFunction().catch((err) => {
  console.error(err);
  return "default response";
});
// response will be "default response" if the promise is rejected
```

Dies setzt voraus, dass `promisedFunction()` niemals synchron einen Fehler auslöst, sondern immer ein abgelehntes Promise zurückgibt. Das trifft auf die meisten gut gestalteten Promise-basierten Funktionen zu, die üblicherweise so aussehen:

```js
function promisedFunction() {
  // Immediately return a promise to minimize chance of an error being thrown
  return new Promise((resolve, reject) => {
    // do something async
  });
}
```

Wenn `promisedFunction()` jedoch synchron einen Fehler auslöst, wird dieser nicht vom `catch()`-Handler abgefangen. In diesem Fall ist eine `try...catch`-Anweisung erforderlich.

### Top-Level-Await

Sie können das Schlüsselwort `await` auch für sich allein, also außerhalb einer async function, auf der obersten Ebene eines [Moduls](/de/docs/Web/JavaScript/Guide/Modules) verwenden. Das bedeutet: Module, deren untergeordnete Module `await` verwenden, warten auf deren Ausführung, bevor sie selbst ausgeführt werden. Andere Module, die nicht von diesen untergeordneten Modulen abhängen, werden dadurch nicht an der Ausführung gehindert.

Das folgende Beispiel zeigt ein Modul, das die [Fetch API](/de/docs/Web/API/Fetch_API) verwendet und `await` innerhalb einer [`export`](/de/docs/Web/JavaScript/Reference/Statements/export)-Anweisung angibt. Alle Module, die dieses Modul einbinden, warten auf den Abschluss der Fetch-Anfrage, bevor sie Code ausführen.

```js
// fetch request
const colors = fetch(
  "https://mdn.github.io/js-examples/module-examples/top-level-await/data/colors.json",
).then((response) => response.json());

export default await colors;
```

Top-Level-`await` hat seinen Preis: Es hat weitreichende Auswirkungen, da ein Teil des [Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph) nur asynchron ausgewertet werden kann. Weitere Informationen finden Sie im [Leitfaden zum Modulgraphen](/de/docs/Web/JavaScript/Guide/Modules/Module_graph#top-level_await_and_asynchronous_evaluation).

### Auswirkungen von await auf den Kontrollfluss

Wenn im Code ein `await` erreicht wird – entweder in einer async function oder in einem Modul –, wird der Ausdruck, auf den gewartet wird, ausgeführt. Der gesamte Code, der vom Wert dieses Ausdrucks abhängt, wird dagegen angehalten. Die Ausführung verlässt die Funktion und kehrt zum Aufrufer zurück. Sobald der Wert des Ausdrucks feststeht, wird ein weiterer [Microtask](/de/docs/Web/JavaScript/Reference/Execution_model) eingeplant, der den angehaltenen Code fortsetzt. Das geschieht auch dann, wenn der Wert ein bereits erfülltes Promise oder gar kein Promise ist: Die Ausführung kehrt erst zur aktuellen Funktion zurück, nachdem alle anderen bereits eingeplanten Microtasks verarbeitet wurden. Betrachten Sie beispielsweise den folgenden Code:

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

In diesem Fall ist die Funktion `foo` praktisch synchron, da sie keinen `await`-Ausdruck enthält. Die drei Anweisungen werden im selben Tick ausgeführt. Daher führen die beiden Funktionsaufrufe alle Anweisungen nacheinander aus. Aus Sicht von Promises entspricht die Funktion Folgendem:

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

Sobald jedoch ein `await` vorhanden ist, wird die Funktion asynchron und die Ausführung der folgenden Anweisungen auf den nächsten Tick verschoben.

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

Der zusätzliche `then()`-Handler kann mit dem an den Konstruktor übergebenen Executor zusammengeführt werden, da er nicht auf eine asynchrone Operation wartet. Dennoch teilt er den Code bei jedem Aufruf von `foo` in einen zusätzlichen Microtask auf. Diese Microtasks werden ineinander verschachtelt eingeplant und ausgeführt. Das kann Ihren Code verlangsamen und unnötige Race-Conditions verursachen. Verwenden Sie `await` daher nur, wenn es nötig ist, um den Wert eines Promise zu erhalten.

Microtasks werden nicht nur durch die Erfüllung von Promises, sondern auch durch andere Web-APIs eingeplant und mit derselben Priorität ausgeführt. Dieses Beispiel verwendet [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask), um zu zeigen, wie die Microtask-Warteschlange verarbeitet wird, wenn jeweils ein `await`-Ausdruck erreicht wird.

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

In diesem Beispiel wird die Funktion `test()` immer aufgerufen, bevor die async function fortgesetzt wird. Deshalb werden die Microtasks, die beide einplanen, stets ineinander verschachtelt ausgeführt. Da sowohl `await` als auch `queueMicrotask()` Microtasks einplanen, richtet sich die Ausführungsreihenfolge jedoch immer nach der Reihenfolge, in der sie eingeplant wurden. Deshalb erscheint die Log-Ausgabe „queueMicrotask() after calling async function“, nachdem die async function zum ersten Mal fortgesetzt wurde.

### Stack-Trace verbessern

Manchmal wird `await` weggelassen, wenn ein Promise direkt aus einer async function zurückgegeben wird.

```js
async function noAwait() {
  // Some actions...

  return /* await */ lastAsyncTask();
}
```

Betrachten Sie jedoch den Fall, dass `lastAsyncTask` asynchron einen Fehler auslöst.

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

Im Stack-Trace erscheint nur `lastAsyncTask`, weil das Promise erst abgelehnt wird, nachdem es bereits von `noAwait` zurückgegeben wurde. In gewisser Weise besteht dann keine Verbindung mehr zwischen dem Promise und `noAwait`. Um den Stack-Trace zu verbessern, können Sie mit `await` den Wert des Promise erhalten, sodass die Ausnahme in der aktuellen Funktion ausgelöst wird. Die Ausnahme wird dann zwar sofort in ein neues abgelehntes Promise verpackt, beim Erstellen des Fehlers erscheint aber der Aufrufer im Stack-Trace.

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

Entgegen einer verbreiteten Annahme ist `return await promise` mindestens genauso schnell wie `return promise`, da die Spezifikation und JavaScript-Engines die Verarbeitung nativer Promises entsprechend optimieren. Es gibt einen Vorschlag, [`return promise` schneller zu machen](https://github.com/tc39/proposal-faster-promise-adoption). Außerdem können Sie mehr über [die Optimierung von async functions in V8](https://v8.dev/blog/fast-async) lesen. Abgesehen von stilistischen Gründen ist `return await` daher fast immer vorzuziehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function")}}
- [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("AsyncFunction")}}
- [Top-Level-Await](https://v8.dev/features/top-level-await) auf v8.dev (2019)
- [typescript-eslint-Regel: `return-await`](https://typescript-eslint.io/rules/return-await/)
