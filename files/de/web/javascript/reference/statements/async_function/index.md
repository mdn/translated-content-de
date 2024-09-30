---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`async function`**-Deklaration erstellt eine [Bindung](/de/docs/Glossary/binding) einer neuen asynchronen Funktion mit einem gegebenen Namen. Das `await`-Schlüsselwort ist im Funktionskörper erlaubt und ermöglicht eine asynchrone, auf Promises basierende Verhaltensweise, die in einem klareren Stil geschrieben werden kann, ohne dass explizit Promise-Ketten konfiguriert werden müssen.

Sie können asynchrone Funktionen auch mit dem [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

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
> Zwischen `async` und `function` darf kein Zeilenumbruch stehen, da andernfalls ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner und der Rest zu einer `function`-Deklaration wird.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Für die Syntax der Parameter, siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das mit dem von der asynchronen Funktion zurückgegebenen Wert aufgelöst oder mit einer innerhalb der asynchronen Funktion nicht abgefangenen Ausnahme abgelehnt wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}} Ausdrücke enthalten. Await-Ausdrücke lassen Funktionen, die ein Promise zurückgeben, so erscheinen, als wären sie synchron, indem sie die Ausführung aussetzen, bis das zurückgegebene Promise erfüllt oder abgelehnt wird. Der aufgelöste Wert des Promises wird als der Rückgabewert des Await-Ausdrucks behandelt. Der Gebrauch von `async` und `await` ermöglicht die Verwendung von normalen `try`/`catch`-Blöcken um asynchronen Code.

> [!NOTE]
> Das `await`-Schlüsselwort ist nur innerhalb von asynchronen Funktionen im regulären JavaScript-Code gültig. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann eigenständig mit [JavaScript-Modulen.](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Der Zweck von `async`/`await` ist es, die benötigte Syntax zu vereinfachen,
> um auf Promise-basierte APIs zuzugreifen. Das Verhalten von `async`/`await` ähnelt der Kombination von [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und Promises.

Asynchrone Funktionen geben immer ein Promise zurück. Wenn der Rückgabewert einer asynchronen Funktion nicht explizit ein Promise ist, wird er implizit in ein Promise gewrappt.

Betrachten Sie zum Beispiel den folgenden Code:

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

Beachten Sie, dass der Rückgabewert einer asynchronen Funktion zwar so behandelt wird, als wäre er in einem `Promise.resolve` gewrappt, sie jedoch nicht identisch sind. Eine asynchrone Funktion gibt eine andere _Referenz_ zurück, während `Promise.resolve` dieselbe Referenz zurückgibt, wenn der gegebene Wert ein Promise ist. Dies kann problematisch sein, wenn Sie die Gleichheit eines Promises und eines Rückgabewerts einer asynchronen Funktion überprüfen möchten.

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

Der Körper einer asynchronen Funktion kann als in Null oder mehr await-Ausdrücken geteilt gedacht werden. Der Top-Level-Code, bis einschließlich des ersten await-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne einen await-Ausdruck synchron ausgeführt. Wenn sich jedoch ein await-Ausdruck im Funktionskörper befindet, wird die asynchrone Funktion immer asynchron abgeschlossen.

Zum Beispiel:

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

Der Code nach jedem await-Ausdruck kann als in einer `.then`-Rückruffunktion existierend betrachtet werden. Auf diese Weise wird mit jedem erneuten Eintritt in die Funktion schrittweise eine Promise-Kette aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Promises. Der Fortschritt führt durch die Funktion `foo` in drei Phasen.

1. Die erste Zeile des Körpers der Funktion `foo` wird synchron ausgeführt,
   wobei der await-Ausdruck mit dem ausstehenden Promise konfiguriert ist. Der Fortschritt durch
   `foo` wird dann ausgesetzt und die Kontrolle wird an die Funktion zurückgegeben, die
   `foo` aufgerufen hat.
2. Einige Zeit später, wenn das erste Promise entweder erfüllt oder abgelehnt wurde,
   kehrt die Kontrolle zurück zu `foo`. Das Ergebnis der Erfüllung des ersten Promises
   (falls es nicht abgelehnt wurde) wird aus dem await-Ausdruck zurückgegeben. Hier wird `1`
   zugewiesen an `result1`. Der Fortschritt geht weiter, und der zweite await-Ausdruck
   wird ausgewertet. Wiederum wird der Fortschritt durch `foo` ausgesetzt und die Kontrolle wird
   zurückgegeben.
3. Einige Zeit später, wenn das zweite Promise entweder erfüllt oder abgelehnt wird,
   tritt die Kontrolle wieder in `foo` ein. Das Ergebnis der Auflösung des zweiten Promises wird
   aus dem zweiten await-Ausdruck zurückgegeben. Hier wird `2`
   zugewiesen an `result2`. Die Kontrolle wechselt zum Rückgabewert (falls vorhanden). Der Standard-
   rückgabewert von `undefined` wird als Auflösungswert des
   aktuellen Promises zurückgegeben.

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

Beachten Sie, wie die Promise-Kette nicht in einem Zug aufgebaut wird. Stattdessen wird die Promise-Kette in Phasen aufgebaut, da die Kontrolle sukzessive aus der asynchronen Funktion herausverlagert und zurückgegeben wird. Daher müssen wir uns des Fehlerbehandlungsverhaltens bewusst sein, wenn wir mit gleichzeitigen asynchronen Operationen umgehen.

Zum Beispiel wird im folgenden Code ein nicht behandelter Promise-Ablehnungsfehler geworfen,
selbst wenn ein `.catch`-Handler weiter entlang der Promise-Kette konfiguriert wurde. Dies liegt daran, dass `p2` nicht in die Promise-Kette "verdrahtet" wird, bis die Kontrolle von `p1` zurückkehrt.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...
```

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen – sie werden [gehoben](/de/docs/Glossary/Hoisting) an den Anfang ihres Gültigkeitsbereichs und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und können nur in bestimmten Kontexten neu deklariert werden.

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

In `sequentialStart` wird die Ausführung 2 Sekunden für das erste
`await` ausgesetzt, und dann noch eine Sekunde für das zweite `await`. Der
zweite Timer wird nicht erstellt, bis der erste bereits ausgelöst wurde, sodass der Code nach 3 Sekunden beendet wird.

In `sequentialWait` werden beide Timer erstellt und dann `await`ed.
Die Timer laufen parallel, was bedeutet, dass der Code in 2 statt 3 Sekunden fertig ist,
d.h. nach dem langsamsten Timer.
Dennoch laufen die `await`-Aufrufe immer noch in Serie, was bedeutet, dass der zweite
`await` auf den ersten warten wird, bis er fertig ist. In diesem Fall wird das Ergebnis des
schnellsten Timers nach dem langsamsten verarbeitet.

Falls Sie nach zwei oder mehr gleichzeitig laufenden und abgeschlossenen Aufgaben sicher andere Aufgaben ausführen möchten, müssen Sie einen Aufruf von {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} abwarten, bevor diese Aufgabe ausgeführt wird.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1`
> sind nicht funktional gleichwertig.
>
> In `sequentialWait`, wenn das Promise `fast` abgelehnt wird, bevor das Promise
> `slow` erfüllt ist, wird ein nicht behandelter Promise-Ablehnungsfehler ausgelöst,
> unabhängig davon, ob der Aufrufer eine catch-Klausel konfiguriert hat.
>
> In `concurrent1` wird `Promise.all` die Promise-Kette auf einmal verdrahten,
> was bedeutet, dass der Vorgang bei einem Fehler schnell abgebrochen wird, unabhängig von der Reihenfolge der
> Ablehnung der Promises, und der Fehler wird immer innerhalb der konfigurierten
> Promise-Kette auftreten, wodurch er auf normale Weise abgefangen werden kann.

### Umschreiben einer Promise-Kette mit einer asynchronen Funktion

Eine API, die ein {{jsxref("Promise")}} zurückgibt, erzeugt eine Promise-Kette und
teilt die Funktion in viele Teile. Betrachten Sie den folgenden Code:

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

Alternativ können Sie das Promise mit `catch()` verketten:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

In den beiden umgeschriebenen Versionen beachten Sie, dass es keine `await`-Anweisung nach dem
`return`-Schlüsselwort gibt, obwohl dies auch gültig wäre: Der Rückgabewert einer
asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} gewrappt - falls
es nicht bereits selbst ein Promise ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden: Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- [Leitfaden: Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekorieren von asynchronen JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
