---
title: Verwenden von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den zukünftigen Abschluss oder das Scheitern einer asynchronen Operation darstellt. Da die meisten Leute Verbraucher bereits erstellter Promises sind, erklärt dieser Leitfaden zunächst den Verbrauch zurückgegebener Promises, bevor er erklärt, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Callbacks anhängen, anstatt Callbacks an eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Audiodatei aus einem Konfigurationsdatensatz und zwei Callback-Funktionen erzeugt: eine, die aufgerufen wird, wenn die Audiodatei erfolgreich erstellt wird, und die andere, wenn ein Fehler auftritt.

Hier ist ein Code, der `createAudioFileAsync()` verwendet:

```js
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

Wenn `createAudioFileAsync()` umgeschrieben würde, um ein Promise zurückzugeben, würden Sie Ihre Callbacks daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden davon untersuchen.

## Verkettung

Es besteht oft das Bedürfnis, zwei oder mehr asynchrone Operationen hintereinander auszuführen, wobei jede nachfolgende Operation startet, wenn die vorherige erfolgreich ist, und das Ergebnis des vorhergehenden Schrittes verwendet. Früher führte das Durchführen mehrerer asynchroner Operationen hintereinander zum klassischen [Callback-Hell](http://callbackhell.com/):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies, indem wir eine Promise-Kette erstellen. Das API-Design von Promises macht dies großartig, da Callbacks an das zurückgegebene Promise-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Hier ist die Magie: Die Funktion `then()` gibt ein **neues Promise** zurück, das sich von dem ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Das zweite Promise (`promise2`) stellt nicht nur den Abschluss von `doSomething()` dar, sondern auch von dem `successCallback` oder `failureCallback`, das Sie übergeben haben – die wiederum andere asynchrone Funktionen sein können, die ein Promise zurückgeben. Wenn dies der Fall ist, werden alle Callbacks, die zu `promise2` hinzugefügt werden, hinter dem von `successCallback` oder `failureCallback` zurückgegebenen Promise eingeordnet.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel haben möchten, mit dem Sie experimentieren können, können Sie die folgende Vorlage verwenden, um eine beliebige Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Promise zu tun sind
>       console.log("Did something");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellung eines Promises um eine alte Callback-API](#erstellung_eines_promises_um_eine_alte_callback-api) unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, bei denen jedes Promise den Abschluss eines asynchronen Schritts in der Kette darstellt. Darüber hinaus sind die Argumente für `then` optional, und `catch(failureCallback)` ist kurz für `then(null, failureCallback)` – also wenn Ihr Fehlerbehandlungscode für alle Schritte derselbe ist, können Sie ihn an das Ende der Kette anhängen:

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

Sie könnten dies stattdessen mit [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausdrücken:

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
> Ausdrucksarrow-Funktionen können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; also ist `() => x` kurz für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben – wenn sie Promises zurückgeben, wird dieses Promise zuerst abgewartet, bis es sich auflöst, und der nächste Callback erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises aus `then`-Callbacks zurückzugeben, selbst wenn das Promise immer auf `undefined` aufgelöst wird. Wenn der vorherige Handler ein Promise gestartet hat, es aber nicht zurückgegeben hat, gibt es keine Möglichkeit mehr, seine Erledigung zu verfolgen, und das Promise wird als "schwebend" bezeichnet.

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

Indem wir das Ergebnis des `fetch`-Aufrufs (das ein Promise ist) zurückgeben, können wir sowohl seinen Abschluss verfolgen als auch seinen Wert bei Abschluss erhalten.

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

Schwebende Promises könnten schlimmer sein, wenn Sie Race-Bedingungen haben – wenn das Promise vom letzten Handler nicht zurückgegeben wird, wird der nächste `then`-Handler zu früh aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher ist es eine Faustregel: Wann immer Ihre Operation auf ein Promise trifft, geben Sie es zurück und überlassen Sie das Handling dem nächsten `then`-Handler.

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

Noch besser ist, Sie können die verschachtelte Kette in eine einzige Kette flachmachen, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) unten besprochen.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und synchronem Code ähnelt. Nachfolgend ist dasselbe Beispiel mit `async`/`await` dargestellt:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code exakt wie synchroner Code aussieht, abgesehen von den `await`-Schlüsselwörtern vor den Promises. Ein Nachteil ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort zu vergessen, das nur dann behoben werden kann, wenn es zu einem Typenmismatch kommt (z. B. beim Versuch, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` die gleiche Funktion wie zuvor, also ist nur minimaler Refactoring nötig, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> **Hinweis:** `async`/`await` hat die gleichen Nebenläufigkeitssemantiken wie normale Promiseketten. `await` innerhalb einer async-Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Jobs weiter ausgeführt werden können, während das `await` noch aufgelöst wird.

## Fehlerbehandlung

Sie erinnern sich vielleicht daran, `failureCallback` dreimal in der Pyramide des Untergangs gesehen zu haben, verglichen mit nur einmal am Ende der Promisekette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn ein Ausnahmefehler auftritt, durchsucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected`. Dies ist sehr ähnlich wie bei synchronem Code:

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

Diese Symmetrie mit asynchronem Code gipfelt in der `async`/`await`-Syntax:

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

Promises lösen einen grundlegenden Fehler mit der Callback-Pyramide des Untergangs, indem sie alle Fehler abfangen, selbst ausgelöste Ausnahmen und Programmfehler. Dies ist entscheidend für die funktionale Komposition asynchroner Operationen. Alle Fehler werden jetzt von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` verwenden müssen, ohne `async`/`await` zu nutzen.

### Verschachtelung

In den obigen Beispielen mit `listOfIngredients` hat das erste eine Promisekette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist, während das zweite eine vollständig flache Kette verwendet. Einfache Promiseketten sollten am besten ohne Verschachtelung flach gehalten werden, da Verschachtelung das Ergebnis unachtsamer Komposition sein kann.

Verschachtelung ist eine Kontrollstruktur zur Einschränkung des Geltungsbereichs von `catch`-Anweisungen. Insbesondere fängt ein verschachteltes `catch` nur Fehlschläge in seinem Geltungsbereich und darunter ab, nicht aber Fehler weiter oben in der Kette außerhalb des verschachtelten Geltungsbereichs. Wenn richtig verwendet, bietet dies eine größere Präzision bei der Fehlerbehebung:

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

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind — wobei die Verschachtelung nicht durch die Einrückung erfolgt, sondern durch die Platzierung der äußeren `(` und `)` Klammern um die Schritte.

Der innere fehlerunterdrückende `catch`-Handler fängt nur Fehler von `doSomethingOptional()` und `doSomethingExtraNice()` ab, woraufhin der Code mit `moreCriticalStuff()` fortgesetzt wird. Wichtig ist, dass wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom finalen (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler unterdrückt wird.

In `async`/`await` sieht dieser Code wie folgt aus:

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
> Wenn Sie keine ausgeklügelte Fehlerbehandlung haben, benötigen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Stattdessen verwenden Sie eine flache Kette und platzieren die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem Catch

Es ist möglich, _nach_ einem Fehler zu verketteten, d.h. einem `catch`, was nützlich ist, um auch nach einem Fehlschlag in der Kette neue Aktionen zu erreichen. Lesen Sie das folgende Beispiel:

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

Dies wird den folgenden Text ausgeben:

```plain
Initial
Do that
Do this, no matter what happened before
```

> [!NOTE]
> Der Text "Do this" wird nicht angezeigt, da der Fehler "Something failed" eine Zurückweisung verursacht hat.

In `async`/`await` sieht dieser Code wie folgt aus:

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

### Promise Ablehnungsereignisse

Wenn ein Ablehnungsereignis eines Promises von keinem Handler behandelt wird, „bubbelt“ es an die Spitze des Aufrufstapels, und der Host muss es anzeigen. Im Web, wenn ein Promise abgelehnt wird, wird eines von zwei Ereignissen an den globalen Geltungsbereich gesendet (in der Regel ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web-Worker verwendet wird, das [`Worker`](/de/docs/Web/API/Worker) oder eine andere worker-basierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis ausgelöst hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das Promise anzeigt, das abgelehnt wurde, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund angibt, der für die Ablehnung des Promises angegeben wurde.

Diese machen es möglich, einen alternativen Fehlerbehandlungsmechanismus für Promises anzubieten, sowie Probleme mit Ihrem Promise-Management zu debuggen. Diese Handler sind global pro Kontext, sodass alle Fehler an dieselben Ereignishandler geleitet werden, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} unterscheidet sich die Behandlung von Promise-Ablehnungen geringfügig. Sie erfassen unbehandelte Ablehnungen, indem Sie einen Handler für das Node.js-`unhandledRejection`-Ereignis hinzufügen (beachten Sie die Unterschiede in der Groß-/Kleinschreibung des Namens):

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js ist es, um zu verhindern, dass der Fehler im Konsolenprotokoll angezeigt wird (die Standardaktion, die ansonsten auftreten würde), nur erforderlich, diesen `process.on()`-Listener hinzuzufügen; es ist kein Äquivalent zur [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode der Browser-Laufzeitumgebung erforderlich.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber keinen Code darin haben, um abgelehnte Promises zu behandeln, werden sie einfach auf den Boden fallen gelassen und stillschweigend ignoriert. Ideal wäre es, innerhalb dieses Listeners Code hinzuzufügen, um jedes abgelehnte Promise zu überprüfen und sicherzustellen, dass es nicht durch einen tatsächlichen Codefehler verursacht wurde.

## Zusammensetzung

Es gibt vier [Kompositionswerkzeuge](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) zum gleichzeitigen Ausführen asynchroner Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und darauf warten, dass sie alle so fertiggestellt werden:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eines der Promises im Array scheitert, lehnt `Promise.all()` sofort das zurückgegebene Promise ab und bricht die anderen Operationen ab. Dies kann zu unerwarteten Zuständen oder Verhaltensweisen führen. {{jsxref("Promise.allSettled()")}} ist ein anderes Kompositionswerkzeug, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen Promises gleichzeitig aus — eine Reihe von Promises wird simultan gestartet und wartet nicht aufeinander. Eine sequentielle Komposition ist mit cleverem JavaScript möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel [reduzieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) wir ein Array asynchroner Funktionen zu einer Promisekette. Der obige Code ist gleichbedeutend mit:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* use result3 */
  });
```

Dies kann in eine wiederverwendbare Compose-Funktion verwandelt werden, die in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die `composeAsync()`-Funktion akzeptiert mehrere Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert annimmt, der durch die Kompositionspipeline geleitet wird:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Eine sequentielle Komposition kann auch prägnanter mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Vor der sequentiellen Komposition von Promises sollten Sie jedoch überlegen, ob dies wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, damit sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt vom Ergebnis eines anderen ab.

## Kündigung

`Promise` selbst hat kein erstklassiges Protokoll zur Kündigung, aber Sie könnten möglicherweise die zugrundeliegende asynchrone Operation direkt abbrechen, typischerweise mithilfe von [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellung eines Promises um eine alte Callback-API

Ein {{jsxref("Promise")}} kann von Grund auf mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu umschließen.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch Erfolgs- und/oder Fehler-Callbacks auf altmodische Weise übergeben zu werden. Das offensichtlichste Beispiel ist die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen alter Callbacks und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmfehler enthält, fängt nichts es auf. Dies ist intrinsisch mit dem Design von `setTimeout()` verbunden.

Glücklicherweise können wir `setTimeout()` in ein Promise umwickeln. Die bewährte Vorgehensweise besteht darin, die Callback-akzeptierenden Funktionen auf der niedrigstmöglichen Ebene zu umwickeln und sie dann nie mehr direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion an, die uns ermöglicht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` wirklich nicht fehlschlägt, haben wir reject in diesem Fall weggelassen. Weitere Informationen darüber, wie die Executor-Funktion funktioniert, finden Sie in der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Referenz.

## Timing

Zum Schluss werden wir uns die technischeren Details ansehen, wann die registrierten Callbacks aufgerufen werden.

### Garantien

Im Callback-basierten API hängt ab, wann und wie der Callback aufgerufen wird, vom API-Implementierer ab. Beispielsweise kann der Callback synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design ist stark entmutigt, da es zum sogenannten "Zalgo-Zustand" führt. Im Kontext des Entwurfs asynchroner APIs bedeutet dies, dass ein Callback in einigen Fällen synchron, in anderen Fällen jedoch asynchron aufgerufen wird, was beim Anrufer zu Mehrdeutigkeiten führt. Weitere Hintergrundinformationen finden Sie im Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals formal vorgestellt wurde. Dieses API-Design macht Seiteneffekte schwer analysierbar:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Auf der anderen Seite sind Promises eine Form der [Inversion of Control](https://de.wikipedia.org/wiki/Inversion_of_Control) — der API-Implementierer kontrolliert nicht, wann der Callback aufgerufen wird. Stattdessen wird die Aufgabe der Verwaltung der Callback-Warteschlange und der Entscheidung, wann die Callbacks aufgerufen werden, der Promise-Implementierung überlassen, und sowohl der API-Benutzer als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Callbacks, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt wurden, werden niemals vor dem [Abschluss des aktuellen Laufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Callbacks werden auch dann aufgerufen, wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation, die das Promise darstellt, hinzugefügt wurden.
- Mehrere Callbacks können durch mehrmaliges Aufrufen von [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden. Sie werden nacheinander in der Reihenfolge aufgerufen, in der sie eingesetzt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst bei einem bereits aufgelösten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Statt sofort zu laufen, wird die übergebene Funktion in eine Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet ist, und wenn der JavaScript-Ausführungsstapel leer ist), direkt bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Microtasks

Promise-Callbacks werden als [Microtask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Callbacks als Aufgabenwarteschlangen behandelt werden.

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

Der obige Code gibt aus:

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

Für weitere Details siehe [Aufgaben vs. Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Aufgaben kollidieren

Wenn Sie in Situationen geraten, in denen Sie Promises und Aufgaben (wie Ereignisse oder Callbacks) haben, die in unvorhersehbarer Reihenfolge ausgelöst werden, kann es sein, dass Ihnen ein Microtask hilfreich sein kann, um den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie denken, dass Microtasks helfen könnten, dieses Problem zu lösen, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden, um eine Funktion als Microtask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
