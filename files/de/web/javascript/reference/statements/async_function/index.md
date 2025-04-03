---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("Statements")}}

Die **`async function`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen asynchronen Funktion für einen gegebenen Namen. Das `await`-Schlüsselwort ist innerhalb des Funktionskörpers erlaubt, wodurch asynchrones, auf Promises basierendes Verhalten in einem klareren Stil geschrieben werden kann, ohne die Notwendigkeit, Promise-Ketten explizit zu konfigurieren.

Sie können asynchrone Funktionen auch mithilfe des [`async function` Ausdrucks](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

{{InteractiveExample("JavaScript Demo: async function declaration", "taller")}}

```js interactive-example
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
```

## Syntax

```js-nolint
async function name(param0) {
  statements
}
async function name(param0, param1) {
  statements
}
async function name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> Es darf kein Zeilenumbruch zwischen `async` und `function` sein, da sonst ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, was zur Folge hat, dass `async` zu einem Bezeichner und der Rest zu einer `function`-Deklaration wird.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion ausmachen. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das mit dem von der asynchronen Funktion zurückgegebenen Wert aufgelöst oder mit einer innerhalb der asynchronen Funktion nicht abgefangenen Ausnahme abgelehnt wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten. Await-Ausdrücke lassen Funktionen, die ein Promise zurückgeben, so erscheinen, als seien sie synchron, indem die Ausführung ausgesetzt wird, bis das zurückgegebene Promise erfüllt oder abgelehnt wird. Der aufgelöste Wert des Promise wird als Rückgabewert des Await-Ausdrucks behandelt. Die Verwendung von `async` und `await` ermöglicht die Nutzung gewöhnlicher `try`/`catch`-Blöcke um asynchronen Code.

> [!NOTE]
> Das `await`-Schlüsselwort ist nur innerhalb von asynchronen Funktionen im regulären JavaScript-Code gültig. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann eigenständig mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Ziel von `async`/`await` ist es, die Syntax zu vereinfachen, die notwendig ist, um promise-basierte APIs zu nutzen. Das Verhalten von `async`/`await` ist ähnlich wie eine Kombination aus [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und Promises.

Asynchrone Funktionen geben immer ein Promise zurück. Wenn der Rückgabewert einer asynchronen Funktion nicht explizit ein Promise ist, wird er implizit in ein Promise gewickelt.

Beispielsweise, betrachten Sie den folgenden Code:

```js
async function foo() {
  return 1;
}
```

Er ist ähnlich wie:

```js
function foo() {
  return Promise.resolve(1);
}
```

Beachten Sie, dass selbst wenn der Rückgabewert einer asynchronen Funktion so behandelt wird, als wäre er in ein `Promise.resolve` gewickelt, sie nicht gleichwertig sind. Eine asynchrone Funktion wird einen anderen _Referenzwert_ zurückgeben, während `Promise.resolve` denselben Referenzwert zurückgibt, wenn der gegebene Wert ein Promise ist. Das kann ein Problem sein, wenn Sie die Gleichheit eines Promise und eines Rückgabewerts einer asynchronen Funktion überprüfen möchten.

```js
const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false
```

Der Körper einer asynchronen Funktion kann so betrachtet werden, als sei er durch null oder mehr Await-Ausdrücke geteilt. Top-Level-Code, bis einschließlich des ersten Await-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne einen Await-Ausdruck synchron ausgeführt. Wenn jedoch ein Await-Ausdruck im Funktionskörper vorhanden ist, wird die asynchrone Funktion immer asynchron abgeschlossen.

Beispielsweise:

```js
async function foo() {
  await 1;
}
```

Er ist auch gleichwertig zu:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Code nach jedem Await-Ausdruck kann so betrachtet werden, als existiere er in einem `.then`-Rückruf. Auf diese Weise wird eine Promise-Kette mit jedem erneuten Durchlauf der Funktion progressiv aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Promises. Der Fortschritt erfolgt durch die Funktion `foo` in drei Phasen.

1. Die erste Zeile des Körpers der Funktion `foo` wird synchron ausgeführt, mit dem Pending-Promise, das mit dem Await-Ausdruck konfiguriert ist. Der Fortschritt durch `foo` wird dann ausgesetzt und die Kontrolle an die aufrufende Funktion zurückgegeben.
2. Einige Zeit später, wenn das erste Promise entweder erfüllt oder abgelehnt wurde, kehrt die Kontrolle in `foo` zurück. Das Ergebnis der Erfüllung des ersten Promises (wenn es nicht abgelehnt wurde) wird vom Await-Ausdruck zurückgegeben. Hier wird `1` `result1` zugewiesen. Der Fortschritt geht weiter und der zweite Await-Ausdruck wird ausgewertet. Wieder wird der Fortschritt durch `foo` ausgesetzt und die Kontrolle wird abgegeben.
3. Einige Zeit später, wenn das zweite Promise entweder erfüllt oder abgelehnt wurde, kehrt die Kontrolle erneut in `foo` zurück. Das Ergebnis der Auflösung des zweiten Promises wird vom zweiten Await-Ausdruck zurückgegeben. Hier wird `2` `result2` zugewiesen. Die Kontrolle wird auf den Rückgabewert bewegt (falls vorhanden). Der Standardrückgabewert von `undefined` wird als Auflösungswert des aktuellen Promises zurückgegeben.

```js
async function foo() {
  const result1 = await new Promise((resolve) =>
    setTimeout(() => resolve("1")),
  );
  const result2 = await new Promise((resolve) =>
    setTimeout(() => resolve("2")),
  );
}
foo();
```

Beachten Sie, wie die Promise-Kette nicht auf einmal aufgebaut wird. Stattdessen wird die Promise-Kette in Stufen aufgebaut, wenn die Kontrolle sukzessiv von der asynchronen Funktion abgegeben und zurückgegeben wird. Daher müssen wir auf das Verhalten der Fehlerbehandlung achten, wenn wir es mit gleichzeitigen asynchronen Operationen zu tun haben.

Zum Beispiel führt der folgende Code zu einem unbehandelten Promise-Ablehnungsfehler, selbst wenn ein `.catch`-Handler weiter entlang der Promise-Kette konfiguriert ist. Das liegt daran, dass `p2` erst in die Promise-Kette eingebunden wird, wenn die Kontrolle von `p1` zurückkehrt.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...
```

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden an den Anfang ihres Gültigkeitsbereichs {{Glossary("Hoisting", "hochgehoben")}} und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten erneut deklariert werden.

## Beispiele

### Asynchrone Funktionen und Ausführungsreihenfolge

```js
function resolveAfter2Seconds() {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("== sequentialStart starts ==");

  // 1. Start a timer, log after it's done
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Start the next timer after waiting for the previous one
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Start two timers without waiting for each other
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Wait for the slow timer to complete, and then log the result
  console.log(await slow);
  // 3. Wait for the fast timer to complete, and then log the result
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Start two timers concurrently and wait for both to complete
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Log the results together
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Start two timers concurrently, log immediately after each one is done
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait above to finish
setTimeout(sequentialWait, 4000); // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrent1, 7000); // same as sequentialWait

// wait again
setTimeout(concurrent2, 10000); // after 1 second, logs "fast", then after 1 more second, "slow"
```

#### await und Gleichzeitigkeit

In `sequentialStart` pausiert die Ausführung 2 Sekunden für das erste `await` und dann eine weitere Sekunde für das zweite `await`. Der zweite Timer wird nicht erstellt, bis der erste bereits ausgelöst wurde, sodass der Code nach 3 Sekunden endet.

In `sequentialWait` werden beide Timer erstellt und dann `await`et. Die Timer laufen gleichzeitig, was bedeutet, dass der Code nach 2 statt 3 Sekunden endet, d.h. der langsamste Timer. Die `await`-Aufrufe laufen jedoch weiterhin in Serie, was bedeutet, dass das zweite `await` darauf wartet, dass das erste fertig ist. In diesem Fall wird das Ergebnis des schnellsten Timers nach dem langsamsten verarbeitet.

Wenn Sie nach dem gleichzeitigen Abschluss von zwei oder mehr Vorgängen sicher weitere Arbeiten ausführen möchten, müssen Sie einen Aufruf von {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} abwarten, bevor Sie diese Aufgabe ausführen.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1` sind funktional nicht gleichwertig.
>
> In `sequentialWait`, wenn das Promise `fast` abgelehnt wird, bevor das Promise `slow` erfüllt ist, wird ein unbehandelter Promise-Ablehnungsfehler ausgelöst, unabhängig davon, ob der Aufrufer eine Catch-Klausel konfiguriert hat.
>
> In `concurrent1` verbindet `Promise.all` die Promise-Kette auf einmal, was bedeutet, dass der Vorgang sofort fehlschlägt, unabhängig von der Reihenfolge der Ablehnung der Promises, und der Fehler immer innerhalb der konfigurierten Promise-Kette auftritt, sodass er auf die normale Weise abgefangen werden kann.

### Umschreiben einer Promise-Kette mit einer asynchronen Funktion

Eine API, die ein {{jsxref("Promise")}} zurückgibt, führt zu einer Promise-Kette, und sie teilt die Funktion in viele Teile. Betrachten Sie den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

er kann mit einer einzigen asynchronen Funktion wie folgt umgeschrieben werden:

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

Alternativ können Sie die Promise mit `catch()` verketten:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

In den beiden umgeschriebenen Versionen beachten Sie, dass nach dem `return`-Schlüsselwort keine `await`-Anweisung steht, obwohl dies ebenfalls gültig wäre: Der Rückgabewert einer asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} gewickelt - wenn er nicht bereits selbst ein Promise ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Leitfaden zur Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekoration asynchroner JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
