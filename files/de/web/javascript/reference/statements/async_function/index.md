---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Das **`async function`**-Deklaration erstellt eine [Bindung](/de/docs/Glossary/binding) einer neuen asynchronen Funktion zu einem gegebenen Namen. Das `await`-Schlüsselwort ist innerhalb des Funktionskörpers erlaubt, was eine asynchrone, auf Promises basierende Arbeitsweise ermöglicht, die in einem saubereren Stil geschrieben werden kann und die Notwendigkeit vermeidet, Promise-Ketten explizit zu konfigurieren.

Sie können asynchrone Funktionen auch mit dem [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

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
> Es darf kein Zeilenumbruch zwischen `async` und `function` stehen, da sonst ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner wird und der Rest zu einer `function`-Deklaration.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Für die Syntax der Parameter siehe die [Funktionsreferenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das mit dem Wert aufgelöst wird, der von der asynchronen Funktion zurückgegeben wird, oder mit einer nicht abgefangenen Ausnahme innerhalb der asynchronen Funktion abgelehnt wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten. Await-Ausdrücke lassen promise-rückgebende Funktionen so erscheinen, als würden sie synchron ablaufen, indem die Ausführung angehalten wird, bis das zurückgegebene Promise erfüllt oder abgelehnt wird. Der aufgelöste Wert des Promises wird als Rückgabewert des await-Ausdrucks behandelt. Die Verwendung von `async` und `await` ermöglicht den Gebrauch von normalen `try` / `catch`-Blöcken um asynchronen Code.

> [!NOTE]
> Das `await`-Schlüsselwort ist nur innerhalb asynchroner Funktionen in regulärem JavaScript-Code gültig. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann alleine mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Der Zweck von `async`/`await` ist es, die notwendige Syntax zu vereinfachen, um promise-basierte APIs zu konsumieren. Das Verhalten von `async`/`await` ähnelt der Kombination von [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und Promises.

Asynchrone Funktionen geben immer ein Promise zurück. Wenn der Rückgabewert einer asynchronen Funktion nicht ausdrücklich ein Promise ist, wird er implizit in ein Promise gewickelt.

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

Beachten Sie, dass selbst wenn der Rückgabewert einer asynchronen Funktion so wirkt, als ob er in ein `Promise.resolve` gewickelt ist, sie nicht gleichwertig sind. Eine asynchrone Funktion gibt einen anderen _Verweis_ zurück, während `Promise.resolve` denselben Verweis zurückgibt, wenn der gegebene Wert ein Promise ist. Dies kann ein Problem sein, wenn Sie die Gleichheit eines Promises und eines Rückgabewertes einer asynchronen Funktion überprüfen möchten.

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

Der Körper einer asynchronen Funktion kann als in null oder mehr await-Ausdrücke aufgeteilt betrachtet werden. Der Code auf oberster Ebene, bis hin zu und einschließlich des ersten await-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne einen await-Ausdruck synchron ausgeführt. Wenn sich jedoch ein await-Ausdruck im Funktionskörper befindet, wird die asynchrone Funktion immer asynchron abgeschlossen.

Zum Beispiel:

```js
async function foo() {
  await 1;
}
```

Es ist auch äquivalent zu:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Der Code nach jedem await-Ausdruck kann so verstanden werden, dass er in einem `.then`-Callback existiert. Auf diese Weise wird eine Promise-Kette progressiv mit jedem Wiedereinstiegs-Schritt durch die Funktion aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Promises. Der Fortschritt bewegt sich in drei Phasen durch die Funktion `foo`.

1. Die erste Zeile des Körpers von Funktion `foo` wird synchron ausgeführt, mit dem await-Ausdruck, der mit dem ausstehenden Promise konfiguriert ist. Der Fortschritt durch `foo` wird dann angehalten und die Kontrolle wird an die Funktion zurückgegeben, die `foo` aufgerufen hat.
2. Einige Zeit später, wenn das erste Promise entweder erfüllt oder abgelehnt wurde, bewegt sich die Kontrolle zurück in `foo`. Das Ergebnis der ersten Promise-Erfüllung (wenn sie nicht abgelehnt wurde) wird vom await-Ausdruck zurückgegeben. Hier wird `1` an `result1` zugewiesen. Der Fortschritt wird fortgesetzt und der zweite await-Ausdruck wird ausgewertet. Erneut wird der Fortschritt durch `foo` angehalten und die Kontrolle wird zurückgegeben.
3. Einige Zeit später, wenn das zweite Promise entweder erfüllt oder abgelehnt wurde, tritt die Kontrolle wieder in `foo` ein. Das Ergebnis der zweiten Promise-Auflösung wird vom zweiten await-Ausdruck zurückgegeben. Hier wird `2` an `result2` zugewiesen. Die Kontrolle bewegt sich zum Rückgabekausdruck (falls vorhanden). Der Standard-Rückgabewert von `undefined` wird als Auflösungswert des aktuellen Promises zurückgegeben.

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

Beachten Sie, wie die Promise-Kette nicht auf einmal aufgebaut wird. Stattdessen wird die Promise-Kette in Phasen aufgebaut, da die Kontrolle nacheinander aus der und zurück in die asynchrone Funktion übertragen wird. Daher müssen wir das Fehlerbehandlungsverhalten berücksichtigen, wenn wir mit gleichzeitigen asynchronen Operationen umgehen.

Beispielsweise wird im folgenden Code ein nicht behandelter Promise-Ablehnungsfehler ausgelöst, selbst wenn ein `.catch`-Handler in der Promise-Kette weiter konfiguriert wurde. Dies liegt daran, dass `p2` nicht in die Promise-Kette "verdrahtet" wird, bis die Kontrolle von `p1` zurückkehrt.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Do not do this! Use Promise.all or Promise.allSettled instead.
}
foo().catch(() => {}); // Attempt to swallow all errors...
```

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen – sie werden an den Anfang ihres Geltungsbereichs gehoben und können überall in ihrem Geltungsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten erneut deklariert werden.

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

#### await und Konkurrenz

In `sequentialStart` wird die Ausführung 2 Sekunden für das erste `await` angehalten und dann eine weitere Sekunde für das zweite `await`. Der zweite Timer wird nicht erstellt, bis der erste bereits ausgelöst hat, sodass der Code nach 3 Sekunden endet.

In `sequentialWait` werden beide Timer erstellt und dann `await`ed. Die Timer laufen gleichzeitig, was bedeutet, dass der Code in 2 statt 3 Sekunden endet, d.h. der langsamste Timer. Die `await`-Aufrufe laufen jedoch immer noch nacheinander, was bedeutet, dass das zweite `await` auf das Ende des ersten wartet. In diesem Fall wird das Ergebnis des schnellsten Timers nach dem langsamsten verarbeitet.

Wenn Sie sicherstellen möchten, dass andere Jobs sicher ausgeführt werden, nachdem zwei oder mehr Jobs gleichzeitig ausgeführt und abgeschlossen sind, müssen Sie einen Aufruf an {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} abwarten, bevor dieser Job erfolgt.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1` sind funktional nicht äquivalent.
>
> In `sequentialWait`, wenn das Promise `fast` abgelehnt wird, bevor das Promise `slow` erfüllt ist, wird ein nicht behandelter Promise-Ablehnungsfehler ausgelöst, unabhängig davon, ob der Aufrufer eine catch-Klausel konfiguriert hat.
>
> In `concurrent1` verdrahtet `Promise.all` die Promise-Kette in einem Durchgang, was bedeutet, dass die Operation unabhängig von der Reihenfolge der Ablehnung der Promises schnell fehlschlägt, und der Fehler wird immer innerhalb der konfigurierten Promise-Kette auftreten, was es ermöglicht, ihn auf normale Weise abzufangen.

### Neuschreiben einer Promise-Kette mit einer asynchronen Funktion

Eine API, die ein {{jsxref("Promise")}} zurückgibt, führt zu einer Promise-Kette, und sie teilt die Funktion in viele Teile. Betrachten Sie den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

Er kann mit einer einzigen asynchronen Funktion wie folgt umgeschrieben werden:

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

In den beiden umgeschriebenen Versionen beachten Sie, dass nach dem `return`-Schlüsselwort keine `await`-Anweisung steht, obwohl dies auch zulässig wäre: Der Rückgabewert einer asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} gewickelt - wenn er nicht bereits ein Promise ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Funktionen](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekorieren asynchroner JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
