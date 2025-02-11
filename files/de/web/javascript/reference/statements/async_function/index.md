---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`async function`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen asynchronen Funktion zu einem gegebenen Namen. Das Schlüsselwort `await` ist im Funktionskörper erlaubt und ermöglicht es, asynchrones, auf Promises basierendes Verhalten in einem klareren Stil zu schreiben, ohne explizit Promise-Ketten konfigurieren zu müssen.

Sie können asynchrone Funktionen auch mit dem [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

{{InteractiveExample("JavaScript Demo: Statement - Async", "taller")}}

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
> Es darf kein Zeilenumbruch zwischen `async` und `function` stehen, da ansonsten ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner und der Rest zu einer `function`-Deklaration wird.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Die Syntax der Parameter finden Sie in der [Funktionen-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das entweder mit dem von der asynchronen Funktion zurückgegebenen Wert aufgelöst oder mit einer nicht abgefangenen Ausnahme innerhalb der asynchronen Funktion abgelehnt wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten. `await`-Ausdrücke sorgen dafür, dass Funktionen, die ein Promise zurückgeben, so aussehen, als wären sie synchron, indem sie die Ausführung so lange aussetzen, bis das zurückgegebene Promise erfüllt oder abgelehnt wird. Der aufgelöste Wert des Promises wird als Rückgabewert des `await`-Ausdrucks behandelt. Die Verwendung von `async` und `await` ermöglicht die Nutzung üblicher `try`/`catch`-Blöcke für asynchronen Code.

> [!NOTE]
> Das Schlüsselwort `await` ist nur innerhalb von asynchronen Funktionen im regulären JavaScript-Code gültig. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann eigenständig in [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Der Zweck von `async`/`await` besteht darin, die Syntax zu vereinfachen, die notwendig ist, um auf Promises basierende APIs zu verwenden. Das Verhalten von `async`/`await` ähnelt der Kombination aus [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und Promises.

Asynchrone Funktionen geben immer ein Promise zurück. Wenn der Rückgabewert einer asynchronen Funktion nicht explizit ein Promise ist, wird dieser implizit in ein Promise verpackt.

Betrachten Sie zum Beispiel den folgenden Code:

```js
async function foo() {
  return 1;
}
```

Dieser Code ist ähnlich zu:

```js
function foo() {
  return Promise.resolve(1);
}
```

Beachten Sie, dass der Rückgabewert einer asynchronen Funktion zwar so wirkt, als wäre er in ein `Promise.resolve` eingepackt, aber sie sind nicht gleichwertig. Eine asynchrone Funktion gibt einen anderen _Verweis_ zurück, während `Promise.resolve` denselben Verweis zurückgibt, wenn der gegebene Wert ein Promise ist. Das kann problematisch sein, wenn Sie die Gleichheit eines Promises und des Rückgabewerts einer asynchronen Funktion überprüfen möchten.

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

Der Körper einer asynchronen Funktion kann gedanklich durch null oder mehr `await`-Ausdrücke unterteilt werden. Der obere Code, bis einschließlich des ersten `await`-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne `await`-Ausdruck synchron ausgeführt. Befindet sich jedoch ein `await`-Ausdruck im Funktionskörper, wird die asynchrone Funktion immer asynchron fertiggestellt.

Zum Beispiel:

```js
async function foo() {
  await 1;
}
```

Dies ist ebenfalls gleichbedeutend mit:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Der Code nach jedem `await`-Ausdruck kann als Existenz in einem `.then`-Callback betrachtet werden. Auf diese Weise wird eine Promise-Kette schrittweise mit jedem Wiedereintritt in die Funktion aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Promises, und der Fortschritt erfolgt in drei Phasen durch die Funktion `foo`.

1. Die erste Zeile des Körper der Funktion `foo` wird synchron ausgeführt, wobei der `await`-Ausdruck mit dem ausstehenden Promise konfiguriert wird. Der Fortschritt durch `foo` wird dann ausgesetzt, und die Kontrolle wird an die Funktion zurückgegeben, die `foo` aufgerufen hat.
2. Einige Zeit später, wenn das erste Promise entweder erfüllt oder abgelehnt wurde, kehrt die Kontrolle zurück zu `foo`. Das Ergebnis der Erfüllung des ersten Promises (falls es nicht abgelehnt wurde) wird vom `await`-Ausdruck zurückgegeben. Hier wird `1` an `result1` zugewiesen. Der Fortschritt geht weiter, und der zweite `await`-Ausdruck wird ausgewertet. Wieder wird der Fortschritt durch `foo` ausgesetzt und die Kontrolle zurückgegeben.
3. Einige Zeit später, wenn das zweite Promise entweder erfüllt oder abgelehnt wurde, kehrt die Kontrolle erneut zu `foo` zurück. Das Ergebnis der Auflösung des zweiten Promises wird vom zweiten `await`-Ausdruck zurückgegeben. Hier wird `2` an `result2` zugewiesen. Die Kontrolle geht zur Rückgabeanweisung (falls vorhanden). Der Standard-Rückgabewert `undefined` wird als Auflösungswert des aktuellen Promises zurückgegeben.

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

Beachten Sie, wie die Promise-Kette nicht auf einmal erstellt wird. Stattdessen wird die Promise-Kette in Etappen aufgebaut, während die Kontrolle sukzessive aus der asynchronen Funktion abgeleitet und wieder zurückkehrt. Deshalb müssen wir beim Umgang mit konkurrierenden asynchronen Operationen auf das Fehlerbehandlungsverhalten achten.

Zum Beispiel wird im folgenden Code ein Fehler einer nicht abgefangenen Promise-Ablehnung ausgelöst, selbst wenn ein `.catch`-Handler in der Promise-Kette konfiguriert wurde. Dies liegt daran, dass `p2` erst "in" die Promise-Kette "eingewoben" wird, wenn die Kontrolle von `p1` zurückkehrt.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...
```

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen – sie werden {{Glossary("Hoisting", "gehoben")}} an die Spitze ihres Bereichs, können überall innerhalb ihres Bereichs aufgerufen werden und können nur in bestimmten Kontexten erneut deklariert werden.

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

#### await und Parallelität

In `sequentialStart` wird die Ausführung für 2 Sekunden für das erste `await` ausgesetzt und dann eine weitere Sekunde für das zweite `await`. Der zweite Timer wird erst erstellt, nachdem der erste bereits aktiviert wurde, sodass der Code nach 3 Sekunden abgeschlossen ist.

In `sequentialWait` werden beide Timer erstellt und dann `await`ed. Die Timer laufen parallel, was bedeutet, dass der Code nach 2 statt 3 Sekunden abgeschlossen ist, d.h. der langsamste Timer. Die `await`-Aufrufe werden jedoch weiterhin in Reihe ausgeführt, was bedeutet, dass das zweite `await` darauf wartet, dass das erste abgeschlossen ist. In diesem Fall wird das Ergebnis des schnellsten Timers nach dem langsamsten verarbeitet.

Wenn Sie andere Aufgaben sicher ausführen möchten, nachdem zwei oder mehr Aufgaben gleichzeitig ausgeführt und abgeschlossen wurden, müssen Sie einen Aufruf von {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} abwarten, bevor Sie diese Aufgabe ausführen.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1` sind nicht funktional äquivalent.
>
> In `sequentialWait`, wenn das Promise `fast` abgelehnt wird, bevor das Promise `slow` erfüllt ist, wird ein Fehler einer nicht abgefangenen Promise-Ablehnung ausgelöst, unabhängig davon, ob der Aufrufer eine Catch-Klausel konfiguriert hat.
>
> In `concurrent1` verdrahtet `Promise.all` die Promise-Kette auf einmal, was bedeutet, dass der Vorgang schnell fehlschlägt, unabhängig von der Reihenfolge der Ablehnung der Promises, und der Fehler tritt immer innerhalb der konfigurierten Promise-Kette auf, wodurch er auf normale Weise abgefangen werden kann.

### Umschreiben einer Promise-Kette mit einer asynchronen Funktion

Eine API, die ein {{jsxref("Promise")}} zurückgibt, resultiert in einer Promise-Kette und teilt die Funktion in viele Teile auf. Betrachten Sie den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

Dieser kann mit einer einzigen asynchronen Funktion wie folgt umgeschrieben werden:

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

Alternativ können Sie die Promise-Kette mit `catch()` verketten:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

In den beiden umgeschriebenen Versionen fällt auf, dass nach dem Schlüsselwort `return` keine `await`-Anweisung steht, obwohl dies auch gültig wäre: Der Rückgabewert einer asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} verpackt – wenn er nicht bereits selbst ein Promise ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)-Leitfaden
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)-Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekorieren von asynchronen JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
