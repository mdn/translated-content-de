---
title: Promises verwenden
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den späteren Erfolg oder Misserfolg einer asynchronen Operation repräsentiert. Da die meisten Entwickler bereits erstellte Promises verwenden, erklärt dieser Leitfaden zunächst, wie Sie mit zurückgegebenen Promises arbeiten, und anschließend, wie Sie sie erstellen.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Callbacks anhängen, statt Callbacks an eine Funktion zu übergeben. Stellen Sie sich eine Funktion namens `createAudioFileAsync()` vor, die anhand eines Konfigurationsdatensatzes asynchron eine Audiodatei erzeugt und zwei Callback-Funktionen entgegennimmt: Eine wird aufgerufen, wenn die Datei erfolgreich erstellt wurde, die andere, wenn ein Fehler auftritt.

So könnte Code aussehen, der `createAudioFileAsync()` verwendet:

```js
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

Würde `createAudioFileAsync()` so umgeschrieben, dass die Funktion ein Promise zurückgibt, würden Sie Ihre Callbacks stattdessen daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Vorgehensweise hat mehrere Vorteile. Wir betrachten sie im Folgenden.

## Verkettung

Häufig müssen zwei oder mehr asynchrone Operationen nacheinander ausgeführt werden. Dabei beginnt jede weitere Operation, sobald die vorherige erfolgreich abgeschlossen wurde, und verwendet deren Ergebnis. Früher führte die Ausführung mehrerer asynchroner Operationen hintereinander zur klassischen [Callback-Hölle](https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises lösen wir das, indem wir eine Promise-Kette erstellen. Das API-Design von Promises eignet sich dafür besonders gut, weil Callbacks an das zurückgegebene Promise-Objekt angehängt und nicht an eine Funktion übergeben werden.

Der entscheidende Punkt ist: Die Funktion `then()` gibt ein **neues Promise** zurück, das sich vom ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert nicht nur den Abschluss von `doSomething()`, sondern auch den Abschluss des übergebenen `successCallback` oder `failureCallback`. Dabei kann es sich wiederum um asynchrone Funktionen handeln, die ein Promise zurückgeben. In diesem Fall werden alle an `promise2` angehängten Callbacks hinter dem Promise eingereiht, das `successCallback` oder `failureCallback` zurückgibt.

> [!NOTE]
> Wenn Sie ein funktionsfähiges Beispiel ausprobieren möchten, können Sie mit der folgenden Vorlage eine beliebige Funktion erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Other things to do before completion of the promise
>       console.log("Did something");
>       // The fulfillment value of the promise
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird weiter unten im Abschnitt [Ein Promise um eine ältere Callback-API erstellen](#ein_promise_um_eine_ältere_callback-api_erstellen) erläutert.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, in denen jedes Promise den Abschluss eines asynchronen Schritts repräsentiert. Außerdem sind die Argumente von `then` optional, und `catch(failureCallback)` ist eine Kurzform von `then(null, failureCallback)`. Wenn Ihr Code zur Fehlerbehandlung für alle Schritte gleich ist, können Sie ihn daher am Ende der Kette anhängen:

```js
doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

Dasselbe lässt sich auch mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausdrücken:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

> [!NOTE]
> Pfeilfunktionsausdrücke können einen [impliziten Rückgabewert](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben. Daher ist `() => x` eine Kurzform von `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können beliebige Werte zurückgeben. Wenn sie Promises zurückgeben, wird zunächst gewartet, bis das jeweilige Promise erfüllt oder zurückgewiesen wurde. Der nächste Callback erhält dann den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, Promises aus `then`-Callbacks immer zurückzugeben, auch wenn das Promise stets zu `undefined` aufgelöst wird. Wenn der vorherige Handler ein Promise gestartet, aber nicht zurückgegeben hat, lässt sich dessen Abschluss nicht mehr nachverfolgen. Ein solches Promise wird als „schwebend“ bezeichnet.

```js example-bad
doSomething()
  .then((url) => {
    // Missing `return` keyword in front of fetch(url).
    fetch(url);
  })
  .then((result) => {
    // result is undefined, because nothing is returned from the previous
    // handler. There's no way to know the return value of the fetch()
    // call anymore, or whether it succeeded at all.
  });
```

Wenn wir das Ergebnis des `fetch`-Aufrufs zurückgeben – also ein Promise –, können wir sowohl dessen Abschluss nachverfolgen als auch den resultierenden Wert erhalten.

```js example-good
doSomething()
  .then((url) => {
    // `return` keyword added
    return fetch(url);
  })
  .then((result) => {
    // result is a Response object
  });
```

Schwebende Promises können bei Race Conditions noch problematischer sein: Wird das Promise des letzten Handlers nicht zurückgegeben, wird der nächste `then`-Handler zu früh aufgerufen. Ein Wert, den er liest, ist dann möglicherweise noch unvollständig.

```js example-bad
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // Missing `return` keyword in front of fetch(url).
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will always be [], because the fetch request hasn't completed yet.
  });
```

Als Faustregel gilt daher: Wenn Ihre Operation auf ein Promise stößt, geben Sie es zurück und überlassen Sie seine Verarbeitung dem nächsten `then`-Handler.

```js example-good
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // `return` keyword now included in front of fetch call.
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients will now contain data from fetch call.
  });
```

Noch besser ist es, die verschachtelte Kette zu einer einzigen Kette abzuflachen. Das ist einfacher und erleichtert die Fehlerbehandlung. Einzelheiten finden Sie weiter unten im Abschnitt [Verschachtelung](#verschachtelung).

```js
doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    listOfIngredients.push(data);
  })
  .then(() => {
    console.log(listOfIngredients);
  });
```

Mit [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) können Sie Code schreiben, der intuitiver ist und synchronem Code ähnelt. Das folgende Beispiel zeigt denselben Ablauf mit `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, dass der Code bis auf die `await`-Schlüsselwörter vor den Promises genauso aussieht wie synchroner Code. Einer der wenigen Nachteile ist, dass Sie das Schlüsselwort [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) leicht vergessen können. Das fällt unter Umständen erst bei einem Typkonflikt auf, etwa wenn Sie versuchen, ein Promise wie einen Wert zu verwenden.

`async`/`await` baut auf Promises auf. Beispielsweise ist `doSomething()` dieselbe Funktion wie zuvor, sodass für den Wechsel von Promises zu `async`/`await` nur wenige Änderungen erforderlich sind. Weitere Informationen zur Syntax von `async`/`await` finden Sie in den Referenzen zu [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await).

> [!NOTE]
> `async`/`await` hat dieselbe Semantik hinsichtlich gleichzeitiger Ausführung wie normale Promise-Ketten. `await` innerhalb einer asynchronen Funktion hält nicht das gesamte Programm an, sondern nur die Teile, die vom erwarteten Wert abhängen. Während `await` auf ein Ergebnis wartet, können andere asynchrone Aufgaben weiterlaufen.

## Fehlerbehandlung

Vielleicht erinnern Sie sich daran, dass `failureCallback` in der zuvor gezeigten verschachtelten Callback-Struktur dreimal vorkam, am Ende der Promise-Kette dagegen nur einmal:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn eine Ausnahme auftritt, sucht der Browser entlang der Kette nach `.catch()`-Handlern oder `onRejected`. Das ist eng an die Funktionsweise von synchronem Code angelehnt:

```js
try {
  const result = syncDoSomething();
  const newResult = syncDoSomethingElse(result);
  const finalResult = syncDoThirdThing(newResult);
  console.log(`Got the final result: ${finalResult}`);
} catch (error) {
  failureCallback(error);
}
```

Diese Parallele zu synchronem Code zeigt sich auch in der Syntax von `async`/`await`:

```js
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}
```

Promises beheben einen grundlegenden Mangel tief verschachtelter Callbacks, indem sie alle Fehler erfassen – auch ausgelöste Ausnahmen und Programmierfehler. Das ist für die funktionale Komposition asynchroner Operationen unerlässlich. Alle Fehler werden nun von der Methode [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) am Ende der Kette behandelt. Ohne `async`/`await` sollten Sie `try`/`catch` daher fast nie benötigen.

### Verschachtelung

In den obigen Beispielen mit `listOfIngredients` enthält das erste Beispiel eine Promise-Kette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist. Das zweite Beispiel verwendet dagegen eine vollständig flache Kette. Einfache Promise-Ketten sollten möglichst flach bleiben, denn Verschachtelung kann die Folge einer unachtsamen Komposition sein.

Verschachtelung ist eine Kontrollstruktur, mit der sich der Geltungsbereich von `catch`-Anweisungen begrenzen lässt. Ein verschachteltes `catch` erfasst nur Fehler innerhalb seines Geltungsbereichs und darunter, nicht jedoch Fehler weiter oben in der Kette außerhalb dieses Bereichs. Richtig eingesetzt ermöglicht das eine gezieltere Fehlerbehandlung:

```js
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));
```

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind. Die Verschachtelung ergibt sich nicht aus der Einrückung, sondern aus der Position der äußeren Klammern `(` und `)` um diese Schritte.

Der innere `catch`-Handler, der Fehler unterdrückt, erfasst nur Fehler aus `doSomethingOptional()` und `doSomethingExtraNice()`. Danach wird der Code mit `moreCriticalStuff()` fortgesetzt. Schlägt dagegen `doSomethingCritical()` fehl, wird der Fehler nur vom abschließenden (äußeren) `catch` erfasst und nicht vom inneren `catch`-Handler unterdrückt.

Mit `async`/`await` sieht dieser Code so aus:

```js
async function main() {
  try {
    const result = await doSomethingCritical();
    try {
      const optionalResult = await doSomethingOptional(result);
      await doSomethingExtraNice(optionalResult);
    } catch (e) {
      // Ignore failures in optional steps and proceed.
    }
    await moreCriticalStuff();
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
```

> [!NOTE]
> Wenn Sie keine differenzierte Fehlerbehandlung benötigen, brauchen Sie sehr wahrscheinlich auch keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und platzieren Sie die Fehlerbehandlung an deren Ende.

### Verkettung nach einem catch

Sie können die Kette auch _nach_ einem Fehler, also nach einem `catch`, fortsetzen. Das ist nützlich, wenn Sie weitere Aktionen ausführen möchten, obwohl eine vorherige Aktion in der Kette fehlgeschlagen ist. Betrachten Sie das folgende Beispiel:

```js
doSomething()
  .then(() => {
    throw new Error("Something failed");

    console.log("Do this");
  })
  .catch(() => {
    console.error("Do that");
  })
  .then(() => {
    console.log("Do this, no matter what happened before");
  });
```

Es gibt den folgenden Text aus:

```plain
Do that
Do this, no matter what happened before
```

> [!NOTE]
> Der Text „Do this“ wird nicht angezeigt, weil der Fehler „Something failed“ zur Zurückweisung geführt hat.

Mit `async`/`await` sieht dieser Code so aus:

```js
async function main() {
  try {
    await doSomething();
    throw new Error("Something failed");
    console.log("Do this");
  } catch (e) {
    console.error("Do that");
  }
  console.log("Do this, no matter what happened before");
}
```

### Ereignisse bei der Zurückweisung von Promises

Wenn kein Handler die Zurückweisung eines Promise behandelt, wird sie bis an die Spitze des Aufrufstapels weitergegeben und muss von der Host-Umgebung sichtbar gemacht werden. Im Web wird bei jeder Zurückweisung eines Promise eines von zwei Ereignissen an den globalen Geltungsbereich gesendet. Im Allgemeinen ist das entweder [`window`](/de/docs/Web/API/Window) oder, bei Verwendung in einem Web Worker, [`Worker`](/de/docs/Web/API/Worker) beziehungsweise eine andere Worker-basierte Schnittstelle. Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise zurückgewiesen wird, aber kein Handler für die Zurückweisung vorhanden ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn einem zurückgewiesenen Promise ein Handler hinzugefügt wird, nachdem es bereits ein `unhandledrejection`-Ereignis ausgelöst hat.

In beiden Fällen hat das Ereignis vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das zurückgewiesene Promise angibt, sowie eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund für die Zurückweisung enthält.

Damit können Sie eine allgemeine Fehlerbehandlung für Promises bereitstellen und Probleme beim Umgang mit Promises leichter untersuchen. Diese Handler gelten global für den jeweiligen Kontext. Unabhängig von ihrer Herkunft gelangen daher alle entsprechenden Fehler zu denselben Ereignishandlern.

In {{Glossary("Node.js", "Node.js")}} funktioniert die Behandlung zurückgewiesener Promises etwas anders. Nicht behandelte Zurückweisungen erfassen Sie, indem Sie einen Handler für das Node.js-Ereignis `unhandledRejection` hinzufügen. Beachten Sie die andere Großschreibung im Namen:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Um in Node.js zu verhindern, dass der Fehler auf der Konsole protokolliert wird – was andernfalls standardmäßig geschieht –, genügt es, diesen `process.on()`-Listener hinzuzufügen. Ein Gegenstück zur Browser-Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) ist nicht erforderlich.

Wenn Sie diesen `process.on`-Listener hinzufügen, darin aber keinen Code zur Behandlung zurückgewiesener Promises vorsehen, werden diese lediglich stillschweigend ignoriert. Idealerweise prüfen Sie deshalb im Listener jedes zurückgewiesene Promise und stellen sicher, dass die Zurückweisung nicht durch einen tatsächlichen Programmfehler verursacht wurde.

## Komposition

Es gibt vier [Werkzeuge zur Komposition](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency), mit denen sich asynchrone Operationen gleichzeitig ausführen lassen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

So können wir Operationen gleichzeitig starten und warten, bis alle abgeschlossen sind:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wird eines der Promises im Array zurückgewiesen, weist `Promise.all()` das zurückgegebene Promise sofort zurück. Die anderen Operationen laufen weiter, ihre Ergebnisse sind jedoch nicht über den Rückgabewert von `Promise.all()` verfügbar. Das kann zu unerwarteten Zuständen oder Verhaltensweisen führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Werkzeug zur Komposition, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor das zurückgegebene Promise erfüllt wird.

Bei all diesen Methoden laufen Promises gleichzeitig: Mehrere Promises werden zur selben Zeit gestartet und warten nicht aufeinander. Mit etwas geschickt eingesetztem JavaScript ist auch eine sequenzielle Komposition möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel verwenden wir [`reduce`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce), um aus einem Array asynchroner Funktionen eine Promise-Kette zu bilden. Der obige Code entspricht:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* use result3 */
  });
```

Daraus lässt sich eine wiederverwendbare Funktion zur Komposition erstellen, wie sie in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die Funktion `composeAsync()` nimmt eine beliebige Anzahl von Funktionen als Argumente entgegen und gibt eine neue Funktion zurück. Diese nimmt einen Anfangswert entgegen, der die Kompositionskette durchläuft:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Mit async/await lässt sich die sequenzielle Komposition auch kürzer ausdrücken:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie Promises jedoch sequenziell verknüpfen, prüfen Sie, ob das wirklich nötig ist. Sofern die Ausführung eines Promise nicht vom Ergebnis eines anderen abhängt, ist es stets besser, sie gleichzeitig auszuführen, damit sie sich nicht unnötig gegenseitig blockieren.

## Abbruch

`Promise` selbst bietet kein eigenständiges Protokoll zum Abbrechen. Möglicherweise können Sie jedoch die zugrunde liegende asynchrone Operation direkt abbrechen, üblicherweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Ein Promise um eine ältere Callback-API erstellen

Sie können ein {{jsxref("Promise")}} mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) von Grund auf erstellen. Das sollte nur nötig sein, um ältere APIs einzubinden.

Im Idealfall würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten manche APIs noch immer, dass Callbacks für Erfolg und/oder Fehler auf die herkömmliche Weise übergeben werden. Das naheliegendste Beispiel ist die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Herkömmliche Callbacks mit Promises zu mischen, ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, wird dieser nicht abgefangen. Das liegt am Design von `setTimeout()`.

Glücklicherweise können wir `setTimeout()` in ein Promise einbinden. Bewährt hat sich, Funktionen, die Callbacks entgegennehmen, auf der niedrigstmöglichen Ebene einzubinden und sie anschließend nicht mehr direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion entgegen, mit der wir ein Promise selbst erfüllen oder zurückweisen können. Da `setTimeout()` im eigentlichen Sinne nicht fehlschlägt, haben wir `reject` in diesem Fall weggelassen. Weitere Informationen zur Funktionsweise der Executor-Funktion finden Sie in der Referenz zu [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

## Zeitliche Abfolge

Zum Schluss betrachten wir genauer, wann die registrierten Callbacks aufgerufen werden.

### Garantien

Bei einer Callback-basierten API hängt es von der Implementierung ab, wann und wie der Callback aufgerufen wird. Beispielsweise kann er synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Von diesem Design wird dringend abgeraten, weil es zum sogenannten „State of Zalgo“ führt. Beim Entwurf asynchroner APIs bedeutet das, dass ein Callback in manchen Fällen synchron und in anderen asynchron aufgerufen wird. Für den aufrufenden Code entsteht dadurch Unklarheit. Weitere Hintergründe finden Sie im Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals ausdrücklich vorgestellt wurde. Dieses API-Design erschwert die Analyse von Nebeneffekten:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Promises sind dagegen eine Form der [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control): Die API-Implementierung bestimmt nicht, wann der Callback aufgerufen wird. Stattdessen übernimmt die Promise-Implementierung die Verwaltung der Callback-Warteschlange und entscheidet, wann die Callbacks aufgerufen werden. Dadurch erhalten sowohl diejenigen, die die API verwenden, als auch diejenigen, die sie entwickeln, automatisch verlässliche semantische Garantien, darunter:

- Mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügte Callbacks werden niemals vor dem [Abschluss des aktuellen Durchlaufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Event-Loop aufgerufen.
- Diese Callbacks werden auch dann aufgerufen, wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation hinzugefügt wurden, die das Promise repräsentiert.
- Durch mehrmaliges Aufrufen von [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) können mehrere Callbacks hinzugefügt werden. Sie werden nacheinander in der Reihenfolge aufgerufen, in der sie hinzugefügt wurden.

Um Überraschungen zu vermeiden, werden an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergebene Funktionen niemals synchron aufgerufen – auch nicht bei einem bereits erfüllten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Statt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Microtask-Warteschlange eingereiht. Sie läuft also später: erst nachdem die Funktion, die sie erstellt hat, beendet wurde und der JavaScript-Ausführungsstapel leer ist, aber noch bevor die Steuerung an die Event-Loop zurückgegeben wird – also schon bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Task-Warteschlangen und Microtasks

Promise-Callbacks werden als [Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) verarbeitet, während Callbacks von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) über die Task-Warteschlange verarbeitet werden.

```js
const promise = new Promise((resolve, reject) => {
  console.log("Promise callback");
  resolve();
}).then((result) => {
  console.log("Promise callback (.then)");
});

setTimeout(() => {
  console.log("event-loop cycle: Promise (fulfilled)", promise);
}, 0);

console.log("Promise (pending)", promise);
```

Der obige Code gibt Folgendes aus:

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

Weitere Einzelheiten finden Sie unter [Tasks vs. microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Tasks zusammentreffen

Wenn Promises und Tasks – etwa Ereignisse oder Callbacks – in einer unvorhersehbaren Reihenfolge ausgeführt werden, kann es hilfreich sein, mit einem Microtask einen Zustand zu prüfen oder den Ablauf von Promises auszugleichen, die nur unter bestimmten Bedingungen erstellt werden.

Wenn Microtasks bei der Lösung dieses Problems helfen könnten, lesen Sie den [Leitfaden zu Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide). Dort erfahren Sie, wie Sie mit [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) eine Funktion als Microtask einreihen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+-Spezifikation](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
