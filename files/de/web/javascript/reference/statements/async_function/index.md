---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{jsSidebar("Statements")}}

Die Deklaration einer **`async function`** erstellt eine {{Glossary("binding", "Bindung")}} einer neuen asynchronen Funktion zu einem gegebenen Namen. Das Schlüsselwort `await` ist innerhalb des Funktionskörpers erlaubt, was es ermöglicht, asynchrones, auf Versprechen basiertes Verhalten in einem saubereren Stil zu schreiben und die Notwendigkeit der expliziten Konfiguration von Versprechenskette zu vermeiden.

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
> Es darf kein Zeilenumbruch zwischen `async` und `function` stehen, da ansonsten ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner wird und der Rest zu einer `function` Deklaration wird.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Die Syntax der Parameter finden Sie im [Leitfaden zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden. Der `await`
    Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das mit dem von der asynchronen Funktion zurückgegebenen Wert aufgelöst oder mit einer in der asynchronen Funktion nicht abgefangenen Ausnahme abgelehnt wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten. Await-Ausdrücke lassen Funktionen, die ein Versprechen zurückgeben, so aussehen, als ob sie synchron wären, indem sie die Ausführung aussetzen, bis das zurückgegebene Versprechen erfüllt oder abgelehnt wird. Der Aufgelöste Wert des Versprechens wird als Rückgabewert des await-Ausdrucks behandelt. Der Einsatz von `async` und `await` ermöglicht die Verwendung gewöhnlicher `try` / `catch`-Blöcke um asynchronen Code.

> [!NOTE]
> Das Schlüsselwort `await` ist nur innerhalb von asynchronen Funktionen im regulären JavaScript-Code gültig. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann eigenständig mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Der Zweck von `async`/`await` ist es, die Syntax
> zu vereinfachen, die erforderlich ist, um auf Versprechen basierende APIs zu konsumieren. Das Verhalten
> von `async`/`await` ähnelt der Kombination aus [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und
> Versprechen.

Asynchrone Funktionen geben immer ein Versprechen zurück. Wenn der Rückgabewert einer asynchronen Funktion
nicht explizit ein Versprechen ist, wird es implizit in ein Versprechen eingeschlossen.

Beispielsweise betrachten Sie den folgenden Code:

```js
async function foo() {
  return 1;
}
```

Es ist ähnlich wie:

```js
function foo() {
  return Promise.resolve(1);
}
```

Beachten Sie, dass, obwohl der Rückgabewert einer asynchronen Funktion sich verhält, als ob er in ein `Promise.resolve` eingeschlossen wäre, sie nicht äquivalent sind. Eine asynchrone Funktion gibt eine andere _Referenz_ zurück, während `Promise.resolve` die gleiche Referenz zurückgibt, wenn der gegebene Wert ein Versprechen ist. Dies kann ein Problem sein, wenn Sie die Gleichheit eines Versprechens und eines Rückgabewertes einer asynchronen Funktion überprüfen möchten.

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

Der Körper einer asynchronen Funktion kann als in null oder mehr await-Ausdrücke unterteilt betrachtet werden. Top-Level-Code, bis einschließlich des ersten await-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne await-Ausdruck synchron ausgeführt. Wenn jedoch ein await-Ausdruck im Funktionskörper vorhanden ist, wird die asynchrone Funktion immer asynchron abgeschlossen.

Beispiel:

```js
async function foo() {
  await 1;
}
```

Es ist auch gleichwertig zu:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Code nach jedem await-Ausdruck kann als in einem `.then`
Callback existierend betrachtet werden. Auf diese Weise wird eine Versprechenskette progressiv mit jedem Wiedereintrittsschritt durch die Funktion aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Versprechen. Der Fortschritt bewegt sich durch die Funktion `foo` in drei Phasen.

1. Die erste Zeile des Körpers der Funktion `foo` wird synchron ausgeführt,
   wobei der await-Ausdruck mit dem noch ausstehenden Versprechen konfiguriert wird. Der Fortschritt durch
   `foo` wird dann ausgesetzt und die Kontrolle wird an die Funktion zurückgegeben, die
   `foo` aufgerufen hat.
2. Einige Zeit später, wenn das erste Versprechen entweder erfüllt oder abgelehnt wurde,
   geht die Kontrolle zurück zu `foo`. Das Ergebnis der ersten Erfüllung des Versprechens
   (falls es nicht abgelehnt wurde) wird vom await-Ausdruck zurückgegeben. Hier wird `1`
   `result1` zugewiesen. Der Fortschritt geht weiter und der zweite await-Ausdruck
   wird ausgewertet. Erneut wird der Fortschritt durch `foo` ausgesetzt und die Kontrolle wird
   zurückgegeben.
3. Einige Zeit später, wenn das zweite Versprechen entweder erfüllt oder abgelehnt wurde,
   wird die Kontrolle wieder zu `foo` aufgenommen. Das Ergebnis der zweiten Erfüllung des Versprechens
   wird vom zweiten await-Ausdruck zurückgegeben. Hier wird `2`
   `result2` zugewiesen. Die Kontrolle bewegt sich zum Rückgabewert (falls vorhanden). Der Standard-
   Rückgabewert von `undefined` wird als Auflösungswert des aktuellen Versprechens zurückgegeben.

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

Beachten Sie, wie die Versprechenskette nicht auf einmal aufgebaut wird. Stattdessen wird die Versprechenskette in Stufen aufgebaut, wenn die Kontrolle nacheinander von der asynchronen Funktion abgegeben wird und an diese zurückkehrt. Aus diesem Grund müssen wir uns des Fehlerbehandlungsverhaltens bewusst sein, wenn wir mit gleichzeitigen asynchronen Operationen umgehen.

Beispielsweise wird im folgenden Code ein nicht behandelter Versprechensablehnungsfehler ausgelöst, selbst wenn ein `.catch`-Handler weiter entlang der Versprechenskette konfiguriert wurde. Dies liegt daran, dass `p2` nicht in die Versprechenskette "verkabelt" wird, bis die Kontrolle von `p1` zurückkehrt.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) =>
    setTimeout(() => reject(new Error("failed")), 500),
  );
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...
```

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden {{Glossary("Hoisting", "gehoben")}} an den Anfang ihres Gültigkeitsbereichs und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten erneut deklariert werden.

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

#### await und Nebenläufigkeit

In `sequentialStart` wird die Ausführung für 2 Sekunden für das erste
`await` ausgesetzt, und dann noch eine weitere Sekunde für das zweite `await`. Der
zweite Timer wird nicht erstellt, bevor der erste bereits ausgelöst wurde, sodass der Code
nach 3 Sekunden endet.

In `sequentialWait` werden beide Timer erstellt und dann gewartet.
Die Timer laufen parallel, was bedeutet, dass der Code in 2 statt 3 Sekunden endet,
d.h. der langsamste Timer.
Der `await`-Aufruf läuft jedoch immer noch in Serie, was bedeutet, dass der zweite
`await` wartet, bis der erste fertig ist. In diesem Fall wird das Ergebnis des
schnellsten Timers nach dem langsamsten verarbeitet.

Wenn Sie sicher andere Aufgaben ausführen möchten, nachdem zwei oder mehr Aufgaben parallel ausgeführt und abgeschlossen sind, müssen Sie vor dieser Aufgabe einen Aufruf von {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} erwarten.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1`
> sind funktional nicht äquivalent.
>
> In `sequentialWait`, wenn das Versprechen `fast` abgelehnt wird, bevor das Versprechen
> `slow` erfüllt wird, wird ein nicht behandelter Versprechensablehnungsfehler ausgelöst,
> unabhängig davon, ob der Anrufer eine Catch-Klausel konfiguriert hat.
>
> In `concurrent1` verkabelt `Promise.all` die Versprechenskette
> auf einmal, was bedeutet, dass der Vorgang in jedem Fall schnell ausfällt, unabhängig von der Reihenfolge der
> Ablehnung der Versprechen, und der Fehler tritt immer innerhalb der konfigurierten
> Versprechenskette auf, sodass dieser auf normale Weise gefangen werden kann.

### Umschreiben einer Versprechenskette mit einer asynchronen Funktion

Eine API, die ein {{jsxref("Promise")}} zurückgibt, führt zu einer Versprechenskette, und sie
splittet die Funktion in viele Teile. Betrachten Sie den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

er kann mit einer einzigen asynchronen Funktion neu geschrieben werden, wie folgt:

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

Alternativ können Sie das Versprechen mit `catch()` verketten:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

In den beiden umgeschriebenen Versionen gibt es keine `await`-Anweisung nach dem
`return`-Schlüsselwort, obwohl sie auch gültig wäre: Der Rückgabewert einer
asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} eingeschlossen - wenn
er nicht bereits selbst ein Versprechen ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Leitfaden: Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekorieren von asynchronen JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
