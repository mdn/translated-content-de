---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 3f91fdcc678991410f4f5adcbff44d1b3b1ede88
---

{{jsSidebar("Statements")}}

Die **`async function`**-Deklaration erstellt eine {{Glossary("binding")}} einer neuen asynchronen Funktion mit einem gegebenen Namen. Das Schlüsselwort `await` ist innerhalb des Funktionskörpers zulässig, was es ermöglicht, asynchrones, auf Promises basiertes Verhalten in einem saubereren Stil zu schreiben und die Notwendigkeit zu vermeiden, Promise-Ketten explizit zu konfigurieren.

Sie können auch asynchrone Funktionen mit dem [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

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
> Es darf kein Zeilenumbruch zwischen `async` und `function` stehen, da ansonsten ein Semikolon [automatisch eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) wird, wodurch `async` zu einem Bezeichner wird und der Rest zu einer `function`-Deklaration.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters für die Funktion. Informationen zur Syntax der Parameter finden Sie im [Functions-Referenz](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, die den Körper der Funktion bilden. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Jedes Mal, wenn eine asynchrone Funktion aufgerufen wird, gibt sie ein neues {{jsxref("Promise")}} zurück, das mit dem Wert aufgelöst wird, der von der asynchronen Funktion zurückgegeben wird, oder mit einer innerhalb der asynchronen Funktion nicht abgefangenen Ausnahme abgelehnt wird.

Asynchrone Funktionen können null oder mehr {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten. Await-Ausdrücke lassen Promise-zurückgebende Funktionen so verhalten, als wären sie synchron, indem sie die Ausführung aussetzen, bis das zurückgegebene Promise erfüllt oder abgelehnt wird. Der aufgelöste Wert des Promises wird als Rückgabewert des Await-Ausdrucks behandelt. Die Verwendung von `async` und `await` ermöglicht die Verwendung von gewöhnlichen `try`/`catch`-Blöcken um asynchronen Code herum.

> [!NOTE]
> Das Schlüsselwort `await` ist nur innerhalb asynchroner Funktionen gültig, die im regulären JavaScript-Code verwendet werden. Wenn Sie es außerhalb des Körpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> `await` kann eigenständig mit [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) verwendet werden.

> [!NOTE]
> Das Ziel von `async`/`await` ist es, die Syntax zu vereinfachen,
> die notwendig ist, um auf Promise-basierte APIs zuzugreifen. Das Verhalten
> von `async`/`await` ist ähnlich wie die Kombination von [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und
> Promises.

Asynchrone Funktionen geben immer ein Promise zurück. Wenn der Rückgabewert einer asynchronen Funktion
nicht explizit ein Promise ist, wird er implizit in ein Promise verpackt.

Zum Beispiel, betrachten Sie den folgenden Code:

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

Beachten Sie, dass selbst wenn der Rückgabewert einer asynchronen Funktion so behandelt wird, als wäre er in ein `Promise.resolve` eingebettet, sie nicht äquivalent sind. Eine asynchrone Funktion gibt einen anderen _Verweis_ zurück, während `Promise.resolve` denselben Verweis zurückgibt, wenn der gegebene Wert ein Promise ist. Dies kann ein Problem sein, wenn Sie die Gleichheit eines Promises und eines Rückgabewerts einer asynchronen Funktion überprüfen möchten.

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

Der Körper einer asynchronen Funktion kann als in null oder mehr await
Ausdrücke aufgeteilt betrachtet werden. Top-Level-Code, bis einschließlich des ersten await-Ausdrucks (falls vorhanden), wird synchron ausgeführt. Auf diese Weise wird eine asynchrone Funktion ohne einen await-Ausdruck synchron ausgeführt. Wenn es jedoch einen await-Ausdruck innerhalb des Funktionskörpers gibt, wird die asynchrone Funktion immer asynchron abgeschlossen.

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

Code nach jedem Await-Ausdruck kann als im `.then`
Callback existierend betrachtet werden. Auf diese Weise wird eine Promise-Kette schrittweise mit jedem wiederkehrenden
Schritt durch die Funktion aufgebaut. Der Rückgabewert bildet das letzte Glied in der Kette.

Im folgenden Beispiel warten wir sukzessive auf zwei Promises. Der Fortschritt verläuft durch die
Funktion `foo` in drei Stufen.

1. Die erste Zeile des Funktionskörpers von `foo` wird synchron ausgeführt,
   mit dem Await-Ausdruck, der mit dem ausstehenden Promise konfiguriert wird. Der Fortschritt durch
   `foo` wird dann ausgesetzt und die Steuerung wird an die Funktion zurückgegeben, die
   `foo` aufgerufen hat.
2. Einige Zeit später, wenn das erste Promise entweder erfüllt oder abgelehnt wurde,
   wird die Kontrolle zurück an `foo` gegeben. Das Ergebnis der ersten Promise-Erfüllung
   (falls es nicht abgelehnt wurde) wird vom Await-Ausdruck zurückgegeben. Hier wird `1`
   `result1` zugewiesen. Der Fortschritt wird fortgesetzt, und der zweite Await-Ausdruck
   wird ausgewertet. Erneut wird der Fortschritt durch `foo` ausgesetzt und die Steuerung wird
   zurückgegeben.
3. Einige Zeit später, wenn das zweite Promise entweder erfüllt oder abgelehnt wurde,
   wird die Kontrolle erneut an `foo` zurückgegeben. Das Ergebnis der zweiten Promise-Auflösung wird
   vom zweiten Await-Ausdruck zurückgegeben. Hier wird `2` `result2` zugewiesen. Die Kontrolle bewegt sich zum Rückgabewert-Ausdruck (falls vorhanden). Der Standard-Rückgabewert von `undefined` wird als Auflösungswert des
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

Beachten Sie, dass die Promise-Kette nicht in einem Zug aufgebaut wird. Stattdessen wird die Promise-Kette
in Stufen aufgebaut, während die Kontrolle sukzessive von und an die asynchrone Funktion zurückgegeben wird. Als Ergebnis müssen wir uns des Verhaltens bei der Fehlerbehandlung bewusst sein, wenn wir mit
gleichzeitigen asynchronen Operationen umgehen.

Zum Beispiel, im folgenden Code wird ein nicht behandelter Promise-Ablehnungsfehler geworfen,
auch wenn ein `.catch`-Handler weiter entlang der Promise-Kette konfiguriert
wurde. Dies liegt daran, dass `p2` nicht "in" die Promise-Kette "verdrahtet" wird, bis
die Kontrolle von `p1` zurückgegeben wird.

```js
async function foo() {
  const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
  const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
  const results = [await p1, await p2]; // Tun Sie dies nicht! Verwenden Sie stattdessen Promise.all oder Promise.allSettled.
}
foo().catch(() => {}); // Versuch, alle Fehler zu unterdrücken...
```

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen — sie werden [gehoben](/de/docs/Glossary/Hoisting) an die Spitze ihres Gültigkeitsbereichs und können überall in ihrem Gültigkeitsbereich aufgerufen werden, und sie können nur in bestimmten Kontexten erneut deklariert werden.

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

  // 1. Ein Timer wird gestartet, Protokoll wenn er fertig ist
  const slow = resolveAfter2Seconds();
  console.log(await slow);

  // 2. Starten Sie den nächsten Timer nach dem Warten auf den vorherigen
  const fast = resolveAfter1Second();
  console.log(await fast);

  console.log("== sequentialStart done ==");
}

async function sequentialWait() {
  console.log("== sequentialWait starts ==");

  // 1. Starten Sie zwei Timer, ohne aufeinander zu warten
  const slow = resolveAfter2Seconds();
  const fast = resolveAfter1Second();

  // 2. Warten Sie, bis der langsame Timer abgeschlossen ist, und protokollieren Sie dann das Ergebnis
  console.log(await slow);
  // 3. Warten Sie, bis der schnelle Timer abgeschlossen ist, und protokollieren Sie dann das Ergebnis
  console.log(await fast);

  console.log("== sequentialWait done ==");
}

async function concurrent1() {
  console.log("== concurrent1 starts ==");

  // 1. Starten Sie zwei Timer gleichzeitig und warten Sie, bis beide abgeschlossen sind
  const results = await Promise.all([
    resolveAfter2Seconds(),
    resolveAfter1Second(),
  ]);
  // 2. Protokollieren Sie die Ergebnisse zusammen
  console.log(results[0]);
  console.log(results[1]);

  console.log("== concurrent1 done ==");
}

async function concurrent2() {
  console.log("== concurrent2 starts ==");

  // 1. Starten Sie zwei Timer gleichzeitig, protokollieren Sie sofort, nachdem jeder beendet ist
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
  console.log("== concurrent2 done ==");
}

sequentialStart(); // nach 2 Sekunden, protokolliert "slow", dann nach 1 weiterer Sekunde "fast"

// warten, bis das oben beendet ist
setTimeout(sequentialWait, 4000); // nach 2 Sekunden, protokolliert "slow" und dann "fast"

// erneut warten
setTimeout(concurrent1, 7000); // dasselbe wie sequentialWait

// erneut warten
setTimeout(concurrent2, 10000); // nach 1 Sekunde, protokolliert "fast", dann nach 1 weiterer Sekunde "slow"
```

#### await und Gleichzeitigkeit

In `sequentialStart` wird die Ausführung 2 Sekunden lang für das erste
`await` angehalten und dann noch eine Sekunde für das zweite `await`. Der
zweite Timer wird nicht erstellt, bis der erste bereits ausgelöst wurde, sodass der Code nach 3 Sekunden beendet ist.

In `sequentialWait` werden beide Timer erstellt und dann `await`ed.
Die Timer laufen gleichzeitig, was bedeutet, dass der Code nach 2, anstatt nach 3 Sekunden fertig ist,
d.h. der langsamste Timer.
Die `await`-Aufrufe laufen jedoch immer noch in Serie, was bedeutet, dass das zweite
`await` auf das erste warten wird, um es zu beenden. In diesem Fall wird das Ergebnis des
schnellsten Timers nach dem langsamsten abgearbeitet.

Wenn Sie sicher andere Aufgaben durchführen möchten, nachdem zwei oder mehr Aufgaben gleichzeitig ausgeführt wurden und abgeschlossen sind, müssen Sie auf einen Aufruf von {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} warten, bevor Sie diese Aufgabe ausführen.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1`
> sind nicht funktional gleichwertig.
>
> In `sequentialWait`, wenn das Versprechen `fast` abgelehnt wird, bevor das Versprechen
> `slow` erfüllt ist, wird ein nicht behandelter Promise-Ablehnungsfehler ausgelöst,
> unabhängig davon, ob der Aufrufer eine catch-Klausel konfiguriert hat oder nicht.
>
> In `concurrent1` verdrahtet `Promise.all` die Promise-Kette
> auf einmal, was bedeutet, dass die Operation unabhängig von der Reihenfolge der
> Ablehnung der Promises schnell fehlschlägt und der Fehler immer innerhalb der konfigurierten
> Promise-Kette auftritt, wodurch er auf normale Weise abgefangen werden kann.

### Umgeschriebene Promise-Kette mit einer asynchronen Funktion

Eine API, die ein {{jsxref("Promise")}} zurückgibt, wird zu einer Promise-Kette führen und die
Funktion in viele Teile zerlegen. Betrachten Sie folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

kann mit einer einzigen asynchronen Funktion folgendermaßen umgeschrieben werden:

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

Alternativ können Sie das Promise mit `catch()` verkettet:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

In den beiden umgeschriebenen Versionen beachten Sie, dass es keine `await`-Anweisung nach dem
`return`-Schlüsselwort gibt, obwohl das auch gültig wäre: Der Rückgabewert einer
asynchronen Funktion wird implizit in {{jsxref("Promise.resolve")}} eingeschlossen - wenn
er nicht bereits selbst ein Promise ist (wie in den Beispielen).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Functions](/de/docs/Web/JavaScript/Guide/Functions) Leitfaden
- [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises) Leitfaden
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Dekorieren von async JavaScript-Funktionen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
