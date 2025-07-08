---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die **`async function`**-Deklaration erstellt eine {{Glossary("binding", "Binding")}} einer neuen asynchronen Funktion mit einem gegebenen Namen. Das `await`-Schlüsselwort ist innerhalb des Funktionskörpers erlaubt, was ermöglicht, dass asynchrones, auf Versprechen basierendes Verhalten in einem saubereren Stil geschrieben wird, und die Notwendigkeit vermieden wird, Versprechensketten explizit zu konfigurieren.

Sie können auch asynchrone Funktionen mit dem [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

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
> Es darf kein Zeilenumbruch zwischen `async` und `function` sein, sonst wird ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), was dazu führt, dass `async` zu einem Bezeichner wird und der Rest zu einer `function`-Deklaration.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe das [Funktions-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das mit dem Wert aufgelöst wird, der von der asynchronen Funktion zurückgegeben wird, oder mit einer Ausnahme abgelehnt wird, die innerhalb der asynchronen Funktion nicht abgefangen wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten. Await-Ausdrücke lassen versprechensbasierte Funktionen so verhalten, als wären sie synchron, indem sie die Ausführung bis zur Erfüllung oder Ablehnung des zurückgegebenen Versprechens aussetzen. Der erfüllte Wert des Versprechens wird als Rückgabewert des Await-Ausdrucks behandelt. Der Gebrauch von `async` und `await` ermöglicht die Verwendung gewöhnlicher `try` / `catch`-Blöcke um asynchronen Code.

> [!NOTE]
> Das `await`-Schlüsselwort ist nur innerhalb von asynchronen Funktionen in regulärem JavaScript-Code gültig. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann eigenständig mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Der Zweck von `async`/`await` ist die Vereinfachung der Syntax
> die zur Nutzung von Promise-basierten APIs notwendig ist. Das Verhalten
> von `async`/`await` ist ähnlich wie die Kombination von [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und
> Promises.

Asynchrone Funktionen geben immer ein Versprechen zurück. Wenn der Rückgabewert einer asynchronen Funktion
nicht explizit ein Promise ist, wird es implizit in ein Promise gehüllt.

Betrachten Sie zum Beispiel folgenden Code:

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

Beachten Sie, dass selbst wenn der Rückgabewert einer asynchronen Funktion so behandelt wird, als sei er in `Promise.resolve` gewickelt, sie nicht gleich sind. Eine asynchrone Funktion wird einen anderen _Verweis_ zurückgeben, wohingegen `Promise.resolve` denselben Verweis zurückgibt, wenn der gegebene Wert ein Promise ist. Dies kann ein Problem sein, wenn Sie die Gleichheit eines Versprechens und eines Rückgabewerts einer asynchronen Funktion überprüfen möchten.

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

Der Körper einer asynchronen Funktion kann so betrachtet werden, dass er durch null oder mehr await
-Ausdrücke aufgeteilt wird. Top-Level-Code, bis einschließlich des ersten Await-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne einen Await-Ausdruck synchron ausgeführt. Ist jedoch ein Await-Ausdruck im Funktionskörper vorhanden,
wird die asynchrone Funktion immer asynchron abgeschlossen.

Zum Beispiel:

```js
async function foo() {
  await 1;
}
```

Er ist ebenfalls gleichbedeutend mit:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Code nach jedem Await-Ausdruck kann so betrachtet werden, als würde er in einem `.then`
Rückruf existieren. Auf diese Weise wird eine Versprechenskette mit jedem Wiedereintritt
in die Funktion progressiv aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Versprechen. Der Fortschritt bewegt sich durch
die Funktion `foo` in drei Phasen.

1. Die erste Zeile des Körpers der Funktion `foo` wird synchron ausgeführt,
   mit dem Await-Ausdruck, der mit dem ausstehenden Versprechen konfiguriert ist. Der Fortschritt durch
   `foo` wird dann ausgesetzt und die Kontrolle wird an die Funktion, die
   `foo` aufgerufen hat, zurückgegeben.
2. Einige Zeit später, wenn das erste Versprechen entweder erfüllt oder abgelehnt wurde,
   wird die Kontrolle zurück an `foo` gegeben. Das Ergebnis der ersten Versprechens-Erfüllung
   (falls es nicht abgelehnt wurde) wird vom Await-Ausdruck zurückgegeben. Hier wird `1`
   `result1` zugewiesen. Der Fortschritt geht weiter und der zweite Await-Ausdruck
   wird ausgewertet. Wieder wird der Fortschritt durch `foo` unterbrochen und die Kontrolle wird
   zurückgegeben.
3. Einige Zeit später, wenn das zweite Versprechen entweder erfüllt oder abgelehnt wird,
   wird die Kontrolle erneut an `foo` gegeben. Das Ergebnis der zweiten Versprechensauflösung wird
   vom zweiten Await-Ausdruck zurückgegeben. Hier wird `2`
   `result2` zugewiesen. Die Kontrolle geht zum Rückgabewert-Ausdruck (falls vorhanden). Der Standard-Rückgabewert von `undefined` wird als der Auflösungswert des
   aktuellen Versprechens zurückgegeben.

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

Beachten Sie, wie die Versprechenskette nicht auf einen Schlag aufgebaut wird. Stattdessen wird die Versprechenskette
in Phasen konstruiert, da die Kontrolle nacheinander von der asynchronen
Funktion abgegeben und dorthin zurückgegeben wird. Als Ergebnis müssen wir uns des Fehlerbehandlungsverhaltens bewusst sein, wenn wir mit
gleichzeitigen asynchronen Operationen umgehen.

Zum Beispiel wird im folgenden Code ein unbehandelter Versprechensablehnungsfehler geworfen,
selbst wenn ein `.catch`-Handler weiter entlang der Versprechenskette
konfiguriert wurde. Das liegt daran, dass `p2` nicht in die Versprechenskette "eingebunden" wird, bis
die Kontrolle von `p1` zurückkommt.

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

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden {{Glossary("Hoisting", "gehoisted")}} an die Spitze ihres Gültigkeitsbereichs und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten neu deklariert werden.

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

In `sequentialStart` wird die Ausführung für 2 Sekunden für das erste
`await` ausgesetzt und dann nochmal eine Sekunde für das zweite `await`. Der
zweite Timer wird nicht erstellt, bis der erste bereits ausgelöst hat, sodass der Code nach 3 Sekunden beendet wird.

In `sequentialWait` werden beide Timer erstellt und dann `await`ed.
Die Timer laufen gleichzeitig, was bedeutet, dass der Code nach 2 statt 3 Sekunden abgeschlossen wird,
d.h. dem langsamsten Timer.
Die `await`-Aufrufe laufen jedoch weiterhin in Serie, was bedeutet, dass der zweite
`await` darauf wartet, dass der erste abgeschlossen wird. In diesem Fall wird das Ergebnis des
schnellsten Timers nach dem langsamsten verarbeitet.

Wenn Sie sicher andere Aufgaben ausführen möchten, nachdem zwei oder mehr Aufgaben gleichzeitig ausgeführt wurden und abgeschlossen sind, müssen Sie einen Aufruf zu {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} erwarten, bevor die Aufgabe ausgeführt wird.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1`
> sind funktional nicht gleichwertig.
>
> In `sequentialWait`, wenn das Versprechen `fast` zurückgewiesen wird, bevor das Versprechen
> `slow` erfüllt wird, wird ein unbehandelter Versprechensablehnungsfehler
> ausgelöst, unabhängig davon, ob der Aufrufer eine catch-Klausel konfiguriert hat.
>
> In `concurrent1` verdrahtet `Promise.all` die Versprechenskette
> in einem Durchgang, was bedeutet, dass der Vorgang schnell fehlschlägt, unabhängig von der Reihenfolge der
> Zurückweisungen der Versprechen, und der Fehler tritt immer innerhalb der konfigurierten
> Versprechenskette auf, sodass er auf normale Weise abgefangen werden kann.

### Umschreiben einer Promise-Kette mit einer asynchronen Funktion

Ein API, das ein {{jsxref("Promise")}} zurückgibt, wird zu einer Versprechenskette, und es
teilt die Funktion in viele Teile. Betrachten Sie den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

dieser kann mit einer einzigen asynchronen Funktion wie folgt umgeschrieben werden:

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

In den beiden umgeschriebenen Versionen bemerken Sie, dass es nach dem
`return`-Schlüsselwort keine `await`-Anweisung gibt, obwohl das auch gültig wäre: Der Rückgabewert einer
asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} gewickelt - wenn
er nicht bereits selbst ein Versprechen ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Verwendung von Versprechen](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekorieren asynchroner JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
