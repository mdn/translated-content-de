---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
l10n:
  sourceCommit: 439a8c053d3b2d4f3af60c06f567418eb8fc2f9a
---

Die Deklaration **`async function`** erstellt eine {{Glossary("binding", "Bindung")}} zwischen einem angegebenen Namen und einer neuen asynchronen Funktion. Das Schlüsselwort `await` darf im Funktionskörper verwendet werden. Dadurch lässt sich asynchrones, Promise-basiertes Verhalten übersichtlicher schreiben, ohne Promise-Ketten ausdrücklich konfigurieren zu müssen.

Sie können asynchrone Funktionen auch mit einem [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function) definieren.

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
> Zwischen `async` und `function` darf kein Zeilenumbruch stehen. Andernfalls wird [automatisch ein Semikolon eingefügt](/de/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion), wodurch `async` zu einem Bezeichner und der Rest zu einer `function`-Deklaration wird.

### Parameter

- `name`
  - : Der Name der Funktion.
- `param` {{optional_inline}}
  - : Der Name eines formalen Parameters der Funktion. Informationen zur Parametersyntax finden Sie in der [Referenz zu Funktionen](/de/docs/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : Die Anweisungen, aus denen der Funktionskörper besteht. Der `await`-Mechanismus kann verwendet werden.

## Beschreibung

Eine `async function`-Deklaration erstellt ein {{jsxref("AsyncFunction")}}-Objekt. Bei jedem Aufruf einer asynchronen Funktion gibt sie ein neues {{jsxref("Promise")}} zurück. Dieses wird mit dem Rückgabewert der asynchronen Funktion erfüllt oder wegen einer innerhalb der Funktion nicht abgefangenen Ausnahme zurückgewiesen.

Asynchrone Funktionen können beliebig viele {{jsxref("Operators/await", "await")}}-Ausdrücke enthalten, auch keinen. `await`-Ausdrücke lassen Funktionen, die Promises zurückgeben, wie synchrone Funktionen wirken: Sie setzen die Ausführung aus, bis das zurückgegebene Promise erfüllt oder zurückgewiesen wird. Der Erfüllungswert des Promises wird zum Wert des `await`-Ausdrucks. Mit `async` und `await` lassen sich gewöhnliche `try`- und `catch`-Blöcke für asynchronen Code verwenden.

> [!NOTE]
> Das Schlüsselwort `await` ist in regulärem JavaScript-Code nur innerhalb asynchroner Funktionen gültig. Wenn Sie es außerhalb des Funktionskörpers einer asynchronen Funktion verwenden, erhalten Sie einen {{jsxref("SyntaxError")}}.
>
> In [JavaScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) kann `await` auch eigenständig verwendet werden.

> [!NOTE]
> `async`/`await` soll die Syntax vereinfachen, die für die Verwendung Promise-basierter APIs erforderlich ist. Das Verhalten von `async`/`await` ähnelt einer Kombination aus [Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) und Promises.

Asynchrone Funktionen geben immer ein Promise zurück. Wenn der Rückgabewert einer asynchronen Funktion nicht ausdrücklich ein Promise ist, wird er implizit in ein Promise verpackt.

Betrachten Sie beispielsweise den folgenden Code:

```js
async function foo() {
  return 1;
}
```

Er ähnelt diesem Code:

```js
function foo() {
  return Promise.resolve(1);
}
```

Obwohl sich der Rückgabewert einer asynchronen Funktion so verhält, als wäre er mit `Promise.resolve` verpackt worden, sind die beiden Vorgehensweisen nicht gleichwertig. Eine asynchrone Funktion gibt eine andere _Referenz_ zurück, während `Promise.resolve` dieselbe Referenz zurückgibt, wenn der übergebene Wert ein Promise ist. Das kann problematisch sein, wenn Sie prüfen möchten, ob ein Promise und der Rückgabewert einer asynchronen Funktion identisch sind.

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

Sie können sich den Körper einer asynchronen Funktion so vorstellen, als würde er durch beliebig viele `await`-Ausdrücke in Abschnitte unterteilt. Der Code vor und einschließlich des ersten `await`-Ausdrucks wird synchron ausgeführt. Eine asynchrone Funktion ohne `await`-Ausdruck wird daher synchron ausgeführt. Enthält der Funktionskörper hingegen einen `await`-Ausdruck, wird die asynchrone Funktion immer asynchron abgeschlossen.

Zum Beispiel:

```js
async function foo() {
  await 1;
}
```

Dies ist auch gleichbedeutend mit:

```js
function foo() {
  return Promise.resolve(1).then(() => undefined);
}
```

Den Code nach jedem `await`-Ausdruck können Sie sich als Teil eines `.then`-Callbacks vorstellen. So wird bei jedem Wiedereintritt in die Funktion schrittweise eine Promise-Kette aufgebaut. Der Rückgabewert bildet das letzte Glied dieser Kette.

Im folgenden Beispiel warten wir nacheinander auf zwei Promises. Die Ausführung der Funktion `foo` verläuft in drei Phasen:

1. Die erste Zeile des Funktionskörpers von `foo` wird synchron ausgeführt. Dabei wird der `await`-Ausdruck mit dem noch ausstehenden Promise eingerichtet. Anschließend wird die Ausführung von `foo` ausgesetzt und die Steuerung an die Funktion zurückgegeben, die `foo` aufgerufen hat.
2. Sobald das erste Promise erfüllt oder zurückgewiesen wurde, kehrt die Steuerung zu `foo` zurück. Der Erfüllungswert des ersten Promises wird, sofern es nicht zurückgewiesen wurde, zum Wert des `await`-Ausdrucks. Hier wird `result1` der Wert `1` zugewiesen. Die Ausführung wird fortgesetzt und der zweite `await`-Ausdruck ausgewertet. Daraufhin wird die Ausführung von `foo` erneut ausgesetzt und die Steuerung zurückgegeben.
3. Sobald das zweite Promise erfüllt oder zurückgewiesen wurde, kehrt die Steuerung erneut zu `foo` zurück. Der Wert, mit dem das zweite Promise erfüllt wurde, wird zum Wert des zweiten `await`-Ausdrucks. Hier wird `result2` der Wert `2` zugewiesen. Danach wird, falls vorhanden, der Rückgabeausdruck ausgewertet. Andernfalls wird der standardmäßige Rückgabewert `undefined` als Erfüllungswert des aktuellen Promises zurückgegeben.

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

Beachten Sie, dass die Promise-Kette nicht auf einmal aufgebaut wird. Sie entsteht schrittweise, während die Steuerung wiederholt von der asynchronen Funktion abgegeben wird und zu ihr zurückkehrt. Bei gleichzeitig ablaufenden asynchronen Operationen müssen Sie deshalb besonders auf die Fehlerbehandlung achten.

Im folgenden Code tritt beispielsweise ein Fehler wegen einer unbehandelten Promise-Zurückweisung auf, selbst wenn weiter hinten in der Promise-Kette ein `.catch`-Handler eingerichtet wurde. Der Grund ist, dass `p2` erst dann in die Promise-Kette eingebunden wird, wenn die Steuerung von `p1` zurückkehrt.

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

`async function`-Deklarationen verhalten sich ähnlich wie {{jsxref("Statements/function", "function")}}-Deklarationen: Sie werden an den Anfang ihres Gültigkeitsbereichs {{Glossary("Hoisting", "gehoben")}} und können überall innerhalb dieses Bereichs aufgerufen werden. Eine erneute Deklaration ist nur in bestimmten Kontexten möglich.

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

In `sequentialStart` wird die Ausführung beim ersten `await` für zwei Sekunden und beim zweiten `await` für eine weitere Sekunde ausgesetzt. Der zweite Timer wird erst erstellt, nachdem der erste ausgelöst wurde. Daher ist der Code nach drei Sekunden abgeschlossen.

In `sequentialWait` werden beide Timer erstellt, bevor auf sie mit `await` gewartet wird. Die Timer laufen gleichzeitig, sodass der Code nach zwei statt nach drei Sekunden abgeschlossen ist – sobald der langsamere Timer ausgelöst wurde. Die `await`-Aufrufe werden jedoch weiterhin nacheinander ausgeführt: Der zweite `await`-Aufruf wartet, bis der erste abgeschlossen ist. In diesem Fall wird das Ergebnis des schnelleren Timers erst nach dem des langsameren verarbeitet.

Wenn Sie nach dem Abschluss von zwei oder mehr gleichzeitig ablaufenden Aufgaben sicher weitere Aufgaben ausführen möchten, müssen Sie zuvor einen Aufruf von {{jsxref("Promise.all()")}} oder {{jsxref("Promise.allSettled()")}} mit `await` abwarten.

> [!WARNING]
> Die Funktionen `sequentialWait` und `concurrent1` sind funktional nicht gleichwertig.
>
> Wenn in `sequentialWait` das Promise `fast` zurückgewiesen wird, bevor das Promise `slow` erfüllt ist, tritt ein Fehler wegen einer unbehandelten Promise-Zurückweisung auf – unabhängig davon, ob die aufrufende Funktion eine `catch`-Klausel eingerichtet hat.
>
> In `concurrent1` verknüpft `Promise.all` die Promise-Kette auf einmal. Dadurch schlägt die Operation unabhängig von der Reihenfolge der Zurückweisungen sofort fehl. Der Fehler tritt immer innerhalb der eingerichteten Promise-Kette auf und kann daher auf die übliche Weise abgefangen werden.

### Eine Promise-Kette mit einer asynchronen Funktion umschreiben

Eine API, die ein {{jsxref("Promise")}} zurückgibt, führt zu einer Promise-Kette und teilt die Funktion in viele Teile auf. Betrachten Sie den folgenden Code:

```js
function getProcessedData(url) {
  return downloadData(url) // returns a promise
    .catch((e) => downloadFallbackData(url)) // returns a promise
    .then((v) => processDataInWorker(v)); // returns a promise
}
```

Er lässt sich wie folgt als einzelne asynchrone Funktion schreiben:

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

Alternativ können Sie `catch()` an die Promise-Kette anhängen:

```js
async function getProcessedData(url) {
  const v = await downloadData(url).catch((e) => downloadFallbackData(url));
  return processDataInWorker(v);
}
```

Beachten Sie, dass in den beiden umgeschriebenen Versionen nach dem Schlüsselwort `return` kein `await` steht, obwohl dies ebenfalls gültig wäre: Der Rückgabewert einer asynchronen Funktion wird implizit mit {{jsxref("Promise.resolve")}} in ein Promise verpackt, falls er nicht bereits selbst ein Promise ist – wie in diesen Beispielen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [Funktionen](/de/docs/Web/JavaScript/Guide/Functions)
- Leitfaden zur [Verwendung von Promises](/de/docs/Web/JavaScript/Guide/Using_promises)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- {{jsxref("AsyncFunction")}}
- [`async function`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/async_function)
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("Operators/await", "await")}}
- {{jsxref("Promise")}}
- [Asynchrone JavaScript-Funktionen mit Dekoratoren versehen](https://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/) auf innolitics.com (2016)
