---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das für den eventuellen Abschluss oder das Scheitern einer asynchronen Operation steht. Da die meisten Menschen Verbraucher bereits erstellter Promises sind, wird dieser Leitfaden die Nutzung von zurückgegebenen Promises erklären, bevor er erklärt, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Callbacks anhängen, anstatt Callbacks in eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Sounddatei basierend auf einem Konfigurationsdatensatz und zwei Callback-Funktionen erstellt: eine, die aufgerufen wird, wenn die Audiodatei erfolgreich erstellt wird, und eine, die bei einem Fehler aufgerufen wird.

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

Würde `createAudioFileAsync()` umgeschrieben, um ein Promise zurückzugeben, würden Sie Ihre Callbacks daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden einzelnen untersuchen.

## Verkettung

Ein häufiges Bedürfnis ist es, zwei oder mehr asynchrone Operationen hintereinander auszuführen, wobei jede nachfolgende Operation beginnt, wenn die vorherige erfolgreich war, mit dem Ergebnis des vorherigen Schritts. Früher führte das Ausführen mehrerer asynchroner Operationen in Folge zu dem klassischen [Callback-Hell](http://callbackhell.com/):

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

Hier ist die Magie: Die `then()`-Funktion gibt ein **neues Promise zurück**, das sich vom ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch der von Ihnen übergebenen `successCallback` oder `failureCallback` — die andere asynchrone Funktionen sein können, die ein Promise zurückgeben. In diesem Fall werden alle an `promise2` hinzugefügten Callbacks hinter dem Promise, das von `successCallback` oder `failureCallback` zurückgegeben wird, in die Warteschlange gestellt.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel ausprobieren möchten, können Sie die folgende Vorlage verwenden, um jede Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Weitere Aufgaben vor Abschluss des Promises
>       console.log("Did something");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellen eines Promises um eine alte Callback-API herum](#erstellen_eines_promises_um_eine_alte_callback-api_herum) unten besprochen.

Mit diesem Muster können Sie längere Bearbeitungsketten erstellen, bei denen jedes Promise den Abschluss eines asynchronen Schrittes in der Kette repräsentiert. Darüber hinaus sind die Argumente von `then` optional, und `catch(failureCallback)` ist die Kurzform für `then(null, failureCallback)` — sodass Sie, wenn Ihr Fehlerbehandlungscode für alle Schritte gleich ist, ihn ans Ende der Kette anhängen können:

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

Sie könnten dies mit [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) anstelle auch so ausdrücken:

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
> Arrow-Funktionsausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; daher ist `() => x` eine Kurzform für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben — wenn sie Promises zurückgeben, wird dieses Promise zuerst abgewartet, bis es sich erfüllt, und die nächste Callback erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then`-Callbacks zurückzugeben, auch wenn das Promise immer zu `undefined` aufgelöst wird. Wenn der vorherige Handler ein Promise gestartet, aber nicht zurückgegeben hat, gibt es keine Möglichkeit mehr, seine Erfüllung zu verfolgen, und das Promise wird als "schwebend" bezeichnet.

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

Indem Sie das Ergebnis des `fetch`-Aufrufs (das ein Promise ist) zurückgeben, können Sie sowohl seinen Abschluss verfolgen als auch seinen Wert erhalten, wenn er abgeschlossen ist.

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

Schwebende Promises könnten schlimmer werden, wenn Sie Rennbedingungen haben — wenn das Promise des letzten Handlers nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher sollten Sie bei der Begegnung mit einem Promise als Faustregel dieses zurückgeben und die Bearbeitung dem nächsten `then`-Handler überlassen.

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

Noch besser, Sie können die verschachtelte Kette in eine einzelne Kette flach machen, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) unten besprochen.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver und synchrone Code ähnelt. Unten folgt das gleiche Beispiel unter Verwendung von `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genauso aussieht wie synchroner Code, mit Ausnahme der `await`-Schlüsselwörter vor den Promises. Einer der wenigen Nachteile ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Schlüsselwort zu vergessen, das nur behoben werden kann, wenn es einen Typenmismatch gibt (z.B. der Versuch, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` die gleiche Funktion wie vorher, sodass nur geringe Umgestaltungen nötig sind, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await` Syntax im [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) Nachschlagen erfahren.

> **Hinweis:** `async`/`await` hat die gleichen Konkurrenzsemantiken wie normale Promise-Ketten. `await` innerhalb einer Async-Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Jobs trotzdem laufen können, während das `await` aussteht.

## Fehlerbehandlung

Möglicherweise erinnern Sie sich daran, das `failureCallback` dreimal in der Pyramide des Doom gesehen zu haben, verglichen mit nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn es eine Ausnahme gibt, sucht der Browser in der Kette nach `.catch()`-Handlern oder `onRejected`. Dies ist sehr stark dem synchronen Code nachempfunden:

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

Diese Symmetrie mit asynchronem Code kulminiert in der `async`/`await` Syntax:

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

Promises lösen einen grundlegenden Mangel des Callback-Dooms-Pyramiden, indem sie alle Fehler abfangen, selbst geworfene Ausnahmen und Programmierfehler. Dies ist für die funktionale Komposition asynchroner Operationen unerlässlich. Alle Fehler werden nun von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` verwenden, ohne `async`/`await` zu verwenden.

### Verschachtelung

In den obigen Beispielen, die `listOfIngredients` beinhalten, hat das erste einen Promise-Kette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist, während das zweite eine vollständig flache Kette verwendet. Einfache Promise-Ketten werden am besten flach ohne Verschachtelung gehalten, da Verschachtelung das Ergebnis einer unachtsamen Komposition sein könnte.

Verschachtelung ist eine Steuerstruktur, um den Umfang von `catch`-Anweisungen zu begrenzen. Insbesondere fängt ein verschachteltes `catch` nur Ausfälle in seinem Umfang und darunter ab, nicht aber Fehler höher oben in der Kette außerhalb des verschachtelten Bereichs. Bei korrekter Anwendung ergibt dies eine größere Genauigkeit bei der Fehlererholung:

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

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind — wobei die Verschachtelung nicht durch die Einrückung, sondern durch die Platzierung der äußeren `(` und `)` Klammern um die Schritte herum verursacht wird.

Der innere fehlerunterdrückende `catch`-Handler fängt nur Ausfälle von `doSomethingOptional()` und `doSomethingExtraNice()` ab, nach denen der Code mit `moreCriticalStuff()` fortfährt. Wichtig ist, dass, wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom letzten (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler verschluckt wird.

In `async`/`await` sieht dieser Code so aus:

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
> Wenn Sie keine ausgefeilte Fehlerbehandlung haben, benötigen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und setzen Sie die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem Catch

Es ist möglich, _nach_ einem Fehler, d.h. einem `catch`, zu verketten, was nützlich ist, um neue Aktionen auch nach einem Fehler in der Kette auszuführen. Lesen Sie das folgende Beispiel:

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
> Der Text "Do this" wird nicht angezeigt, weil der Fehler "Something failed" eine Zurückweisung verursacht hat.

In `async`/`await` sieht dieser Code so aus:

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

### Promise-Ablehnung Ereignisse

Wenn ein Promise-Abweisungsereignis von keinem Handler behandelt wird, wandert es an die Spitze des Aufrufstapels, und der Host muss es sichtbar machen. Im Web, wenn ein Promise abgelehnt wird, werden zwei Ereignisse an den globalen Bereich gesendet (im Allgemeinen ist dies entweder das [`window`](/de/docs/Web/API/Window) oder bei Verwendung in einem Web Worker ist es der [`Worker`](/de/docs/Web/API/Worker) oder eine andere Worker-basierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungs-Handler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis verursacht hat.

In beiden Fällen verfügt das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) über eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das abgelehnte Promise angibt, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund für die Ablehnung des Promises liefert.

Diese ermöglichen eine fallbacks-Fehlerbehandlung für Promises und helfen bei der Debugging von Problemen mit Ihrem Promise-Management. Diese Handler sind kontextübergreifend global, sodass alle Fehler an die gleichen Ereignis-Handler gehen, unabhängig von der Quelle.

In [Node.js](/de/docs/Glossary/Node.js) unterscheidet sich die Handhabung der Promise-Ablehnung leicht. Sie erfassen nicht gehandhabte Ablehnungen durch Hinzufügen eines Handlers für das Node.js-`unhandledRejection`-Ereignis (achten Sie auf den Unterschied in der Großschreibung des Namens), so:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js genügt es, dass ein `process.on()`-Listener hinzugefügt wird, um zu verhindern, dass der Fehler in der Konsole protokolliert wird (die Standardaktion, die sonst auftreten würde); es gibt keine Notwendigkeit für ein Äquivalent zur Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) der Browser-Laufzeit.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber keinen Code innerhalb haben, um abgelehnte Promises zu behandeln, werden sie einfach fallen gelassen und stillschweigend ignoriert. Sie sollten daher idealerweise Code innerhalb dieses Listeners hinzufügen, um jedes abgelehnte Promise zu untersuchen und sicherzustellen, dass es nicht durch einen tatsächlichen Codefehler verursacht wurde.

## Komposition

Es gibt vier [Kompositionstools](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) zum gleichzeitigen Ausführen asynchroner Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und auf deren Abschluss warten, wie folgt:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eine der Promises im Array abgelehnt wird, lehnt `Promise.all()` das zurückgegebene Promise sofort ab und bricht die anderen Operationen ab. Dies kann zu unerwartetem Zustand oder Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionstool, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus — eine Reihe von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Eine sequentielle Komposition ist mit etwas cleverem JavaScript möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel reduzieren wir ein Array von asynchronen Funktionen auf eine Promise-Kette. Der obige Code entspricht:

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

Die `composeAsync()`-Funktion akzeptiert beliebig viele Funktionen als Argumente und gibt eine neue Funktion zurück, die einen initialen Wert akzeptiert, der durch die Kompositionspipeline geleitet wird:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Eine sequentielle Komposition kann auch kürzer mit `async`/`await` erfolgen:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie Promises jedoch sequentiell zusammensetzen, bedenken Sie, ob dies wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, damit sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt vom Ergebnis eines anderen ab.

## Abbruch

`Promise` selbst hat kein erstklassiges Protokoll für den Abbruch, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt abbrechen, normalerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellen eines Promises um eine alte Callback-API herum

Ein {{jsxref("Promise")}} kann von Grund auf mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu umwickeln.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch Erfolgs- und/oder Fehlerschwächen in der alten Art und Weise. Das offensichtlichste Beispiel ist die Funktion [`setTimeout()`](/de/docs/Web/API/setTimeout):

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Wenn Sie alte Callback-Stile und Promises mischen, kann das problematisch sein. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, fängt nichts es ab. Dies liegt im Design von `setTimeout`.

Glücklicherweise können wir `setTimeout` in einem Promise umwidmen. Die beste Praxis besteht darin, die callback-empfangenden Funktionen auf der niedrigstmöglichen Ebene zu umwickeln und sie dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Ausführungsfunktion, die es uns ermöglicht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` eigentlich nicht fehlschlägt, haben wir `reject` in diesem Fall ausgelassen. Weitere Informationen darüber, wie die Ausführungsfunktion funktioniert, finden Sie im [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Nachschlagewerk.

## Timing

Lassen Sie uns abschließend die eher technischen Details betrachten, wann die registrierten Callbacks aufgerufen werden.

### Garantien

In der Callback-basierten API hängt es von dem API-Implementierer ab, wann und wie der Callback aufgerufen wird. Beispielsweise kann der Callback synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Obiges Design wird dringend abgeraten, weil es zu dem sogenannten „State of Zalgo“ führt. Im Kontext des Designs asynchroner APIs bedeutet dies, dass ein Callback manchmal synchron und in anderen Fällen asynchron aufgerufen wird, was für den Anrufer Unklarheit schafft. Für weitere Hintergrundinformationen siehe den Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals formell vorgestellt wurde. Dieses API-Design macht Seiteneffekte schwer zu analysieren:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Promises hingegen sind eine Form der [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Implementierer kontrolliert nicht, wann der Callback aufgerufen wird. Stattdessen wird die Wartung der Callback-Warteschlange und die Entscheidung, wann die Callbacks aufgerufen werden, an die Promise-Implementierung delegiert, und sowohl der API-Benutzer als auch der API-Entwickler erhalten automatische starke semantische Garantien, einschließlich:

- Callbacks, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt wurden, werden niemals aufgerufen, bevor der [Abschluss des aktuellen Laufs](/de/docs/Web/JavaScript/Event_loop#run-to-completion) der JavaScript-Ereignisschleife.
- Diese Callbacks werden aufgerufen, selbst wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation hinzugefügt wurden, die das Promise darstellt.
- Mehrere Callbacks können hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrmals aufgerufen wird. Sie werden nacheinander in der Reihenfolge aufgerufen, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst bei einem bereits aufgelösten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Statt sofort zu laufen, wird die übergebene Funktion in eine Mikrotask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet ist und der JavaScript-Ausführungsstapel leer ist), kurz bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Mikroaufgaben

Promise-Callbacks werden als [Mikroaufgabe](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/setTimeout) Callbacks als Aufgabenwarteschlangen behandelt werden.

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

Der obige Code gibt folgendes aus:

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

Für weitere Details beachten Sie [Tasks vs. Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Aufgaben kollidieren

Wenn Sie in Situationen geraten, in denen Sie Promises und Aufgaben (wie Ereignisse oder Rückrufe) haben, die in unvorhersehbaren Reihenfolgen ausgelöst werden, profitieren Sie möglicherweise von der Verwendung einer Mikroaufgabe, um den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie denken, dass Mikroaufgaben helfen könnten, dieses Problem zu lösen, lesen Sie den [Mikroaufgaben-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden, um eine Funktion als Mikroaufgabe in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ Specification](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
