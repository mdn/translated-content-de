---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: c1061f0b15246f344eb4e57941eb305fdaaff6f0
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den endgültigen Abschluss oder das Scheitern einer asynchronen Operation repräsentiert. Da die meisten Menschen Konsumenten bereits erstellter Promises sind, wird dieser Leitfaden die Nutzung von zurückgegebenen Promises erklären, bevor beschrieben wird, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Callbacks anhängen, anstatt Callbacks an eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Audiodatei erstellt, wenn ein Konfigurationsdatensatz und zwei Callback-Funktionen übergeben werden: eine wird aufgerufen, wenn die Audiodatei erfolgreich erstellt wurde, und die andere, wenn ein Fehler auftritt.

Hier ein Code-Beispiel, das `createAudioFileAsync()` verwendet:

```js
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

Falls `createAudioFileAsync()` so umgeschrieben würde, dass es ein Promise zurückgibt, würden Sie Ihre Callbacks daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden davon untersuchen.

## Verkettung

Ein häufiger Bedarf ist das Ausführen von zwei oder mehr asynchronen Operationen nacheinander, wobei jede nachfolgende Operation startet, wenn die vorherige erfolgreich ist, wobei das Ergebnis des vorherigen Schritts genutzt wird. Früher führte das Ausführen mehrerer asynchroner Operationen hintereinander zu dem klassischen [Callback-Hell](http://callbackhell.com/):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies, indem wir eine Promise-Kette erstellen. Das Design der Promises-API macht dies großartig, weil Callbacks an das zurückgegebene Promise-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Hier das Magische daran: Die `then()`-Funktion gibt ein **neues Promise** zurück, das sich vom ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch des `successCallback` oder `failureCallback`, die Sie übergeben haben — was andere asynchrone Funktionen sein können, die ein Promise zurückgeben. In diesem Fall werden alle Callbacks, die zu `promise2` hinzugefügt werden, hinter dem Promise eingereiht, das entweder von `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel ausprobieren möchten, können Sie die folgende Vorlage verwenden, um jede Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Weitere Dinge, die vor Abschluss des Promises getan werden müssen
>       console.log("Did something");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellen eines Promises um eine alte Callback-API](#erstellung_eines_promises_um_eine_alte_callback-api) weiter unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, wobei jedes Promise den Abschluss eines asynchronen Schrittes in der Kette darstellt. Außerdem sind die Argumente von `then` optional, und `catch(failureCallback)` ist eine Kurzform von `then(null, failureCallback)` — wenn also Ihr Code zur Fehlerbehandlung für alle Schritte derselbe ist, können Sie ihn am Ende der Kette anfügen:

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

Sie könnten dies auch mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausdrücken:

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
> Ausdrücke mit Pfeilfunktionen können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; sodass `() => x` eine Kurzform von `() => { return x; }` ist.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben — wenn sie Promises zurückgeben, wird dieses Promise zuerst abgewartet, bis es sich erledigt hat, und der nächste Callback erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises aus `then`-Callbacks zurückzugeben, auch wenn das Promise immer mit `undefined` aufgelöst wird. Wenn der vorherige Handler ein Promise gestartet, aber nicht zurückgegeben hat, gibt es keine Möglichkeit mehr, dessen Erledigung zu verfolgen, und das Promise wird als "schwebend" bezeichnet.

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

Indem wir das Ergebnis des `fetch`-Aufrufs (das ein Promise ist) zurückgeben, können wir sowohl seinen Abschluss verfolgen als auch seinen Wert erhalten, wenn es abgeschlossen ist.

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

Schwebende Promises könnten schlimmer sein, wenn Sie Race-Conditions haben — wenn das Promise vom letzten Handler nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher als Faustregel: Wann immer Ihre Operation auf ein Promise stößt, geben Sie es zurück und überlassen Sie die Handhabung dem nächsten `then`-Handler.

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

Noch besser, Sie können die verschachtelte Kette in eine einzelne Kette abflachen, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) unten besprochen.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und synchronem Code ähnelt. Unten sehen Sie dasselbe Beispiel unter Verwendung von `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie synchroner Code aussieht, abgesehen von den `await`-Schlüsselwörtern vor den Promises. Einer der wenigen Kompromisse ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort zu vergessen, was nur behoben werden kann, wenn es einen Typenfehler gibt (z. B. der Versuch, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` dieselbe Funktion wie zuvor, sodass es nur minimalen Änderungsaufwand erfordert, von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) nachlesen.

> **Hinweis:** `async`/`await` haben dieselben Nebenläufigkeitssemantiken wie normale Promise-Ketten. `await` innerhalb einer asynchronen Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Jobs weiterlaufen können, während `await` anhängig ist.

## Fehlerbehandlung

Sie erinnern sich vielleicht, dass `failureCallback` dreimal in der Pyramide des Schreckens erschien, verglichen mit nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn es eine Ausnahme gibt, sucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected` ab. Dies ist stark an die Arbeitsweise von synchronem Code angelehnt:

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

Promises lösen einen grundlegenden Mangel des Callback-Pyramiden-Problems, indem sie alle Fehler abfangen, selbst geworfene Ausnahmen und Programmierfehler. Dies ist wesentlich für die funktionale Zusammensetzung asynchroner Operationen. Alle Fehler werden jetzt durch die [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und in den meisten Fällen sollten Sie fast nie `try`/`catch` ohne `async`/`await` verwenden müssen.

### Verschachtelung

In den obigen Beispielen, an denen `listOfIngredients` beteiligt ist, hat das erste eine Promise-Kette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist, während das zweite eine vollständig flache Kette verwendet. Einfache Promise-Ketten sollten flach gehalten werden, ohne Verschachtelung, da Verschachtelung oft Ergebnis einer unbedachten Zusammensetzung ist.

Verschachtelung ist eine Kontrollstruktur, um den Anwendungsbereich von `catch`-Anweisungen zu begrenzen. Insbesondere fängt ein verschachteltes `catch` nur Ausfälle in seinem Anwendungsbereich und darunter ab, nicht jedoch Fehler weiter oben in der Kette außerhalb des verschachtelten Anwendungsbereichs. Bei korrekter Anwendung ergibt dies eine größere Präzision bei der Fehlerbehebung:

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

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind — mit der Verschachtelung verursacht nicht durch die Einrückung, sondern durch die Platzierung der äußeren `(` und `)` Klammern um die Schritte.

Der innere, fehlerunterdrückende `catch`-Handler fängt nur Ausfälle von `doSomethingOptional()` und `doSomethingExtraNice()` ab, wonach der Code mit `moreCriticalStuff()` fortgesetzt wird. Wichtig ist, dass wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom endgültigen (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler verschluckt wird.

In `async`/`await` sieht dieser Code folgendermaßen aus:

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
> Wenn Sie keine ausgeklügelte Fehlerbehandlung haben, benötigen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und platzieren Sie die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem catch

Es ist möglich, _nach_ einem Fehler, d.h. einem `catch`, zu verketten, was nützlich ist, um neue Aktionen durchzuführen, selbst nachdem eine Aktion in der Kette fehlgeschlagen ist. Sehen Sie sich das folgende Beispiel an:

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
Do that
Do this, no matter what happened before
```

> [!NOTE]
> Der Text "Do this" wird nicht angezeigt, weil der Fehler "Something failed" eine Ablehnung verursacht hat.

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

### Promise-Ablehnungsereignisse

Wenn ein Promise-Ablehnungsereignis von keinem Handler behandelt wird, steigt es in der Aufrufstapel nach oben und der Host muss es sichtbar machen. Im Web, wenn ein Promise abgelehnt wird, werden zwei Ereignisse an den globalen Kontext gesendet (normalerweise ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web-Worker verwendet wird, der [`Worker`](/de/docs/Web/API/Worker) oder eine andere Worker-basierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis verursacht hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das abgelehnte Promise angibt, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund angibt, warum das Promise abgelehnt wurde.

Diese ermöglichen eine alternative Fehlerbehandlung für Promises sowie die Unterstützung bei der Fehlersuche in Ihrer Promise-Verwaltung. Diese Handler sind global pro Kontext, sodass alle Fehler zu denselben Ereignis-Handlern gehen, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} ist die Behandlung der Promise-Ablehnung etwas anders. Sie fangen unbehandelte Ablehnungen ab, indem Sie einen Handler für das Node.js-`unhandledRejection`-Ereignis hinzufügen (achten Sie auf die unterschiedliche Großschreibung des Namens), wie folgt:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js, um zu verhindern, dass der Fehler standardmäßig im Konsolenprotokoll angezeigt wird (die standardmäßige Aktion, die sonst auftreten würde), ist nur das Hinzufügen dieses `process.on()`-Listeners erforderlich; es ist kein Äquivalent zur `preventDefault()`-Methode im Browser erforderlich.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber keinen Code innerhalb davon haben, um abgelehnte Promises zu behandeln, werden diese einfach ignoriert. Idealerweise sollten Sie also innerhalb dieses Listeners Code hinzufügen, um jedes abgelehnte Promise zu untersuchen und sicherzustellen, dass es nicht durch einen tatsächlichen Programmierfehler verursacht wurde.

## Komposition

Es gibt vier [Kompositionstools](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) für das gleichzeitige Ausführen asynchroner Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und darauf warten, dass sie alle abgeschlossen sind, wie folgt:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eines der Promises im Array ablehnt, lehnt `Promise.all()` sofort das zurückgegebene Promise ab und bricht die anderen Operationen ab. Dies kann zu unerwartetem Zustand oder Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein anderes Kompositionstool, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es gelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus — eine Sequenz von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Eine serielle Komposition ist mit etwas cleverem JavaScript möglich:

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

Dies kann zu einer wiederverwendbaren Compose-Funktion gemacht werden, die in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die `composeAsync()`-Funktion akzeptiert eine beliebige Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert akzeptiert, der durch die Zusammensetzungspipeline geleitet wird:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Die sequentielle Komposition kann auch mit `async`/`await` prägnanter durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie jedoch Promises nacheinander zusammensetzen, überlegen Sie, ob es wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, damit sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt von dem Ergebnis eines anderen ab.

## Stornierung

`Promise` selbst hat kein Protokoll auf erster Ebene für die Stornierung, aber Sie können in der Lage sein, die zugrundeliegende asynchrone Operation direkt zu stornieren, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellung eines Promises um eine alte Callback-API

Ein {{jsxref("Promise")}} kann von Grund auf mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu kapseln.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch, dass Erfolg und/oder Fehler-Callbacks auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen von altmodischen Callbacks und Promises ist problematisch. Wenn `saySomething()` scheitert oder einen Programmfehler enthält, fängt es nichts ab. Dies ist dem Design von `setTimeout()` inhärent.

Zum Glück können wir `setTimeout()` in einem Promise kapseln. Die beste Praxis besteht darin, die Callback-empfangenden Funktionen auf der niedrigstmöglichen Ebene zu kapseln und sie dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion entgegen, die es uns ermöglicht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` eigentlich nicht scheitert, haben wir in diesem Fall `reject` weggelassen. Für weitere Informationen zur Funktionsweise der Executor-Funktion siehe die Refenz [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

## Timing

Zuletzt werfen wir einen Blick auf die mehr technischen Details, wann die registrierten Callbacks aufgerufen werden.

### Garantien

Im auf Callbacks basierenden API hängt es vom API-Implementierer ab, wann und wie der Callback aufgerufen wird. Zum Beispiel kann der Callback synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design wird stark abgeraten, weil es zum sogenannten "Zustand von Zalgo" führt. Im Kontext des Entwerfens asynchroner APIs bedeutet dies, dass ein Callback in einigen Fällen synchron, in anderen Fällen jedoch asynchron aufgerufen wird, wodurch für den Aufrufer eine Mehrdeutigkeit entsteht. Für weitere Informationen siehe den Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals formal vorgestellt wurde. Dieses API-Design macht Nebenwirkungen schwer zu analysieren:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Auf der anderen Seite sind Promises eine Form der [Umkehrung der Steuerung](https://de.wikipedia.org/wiki/Inversion_of_control) — der API-Implementierer kontrolliert nicht, wann der Callback aufgerufen wird. Stattdessen wird die Aufgabe, die Callback-Warteschlange zu pflegen und zu entscheiden, wann die Callbacks aufgerufen werden, an die Promise-Implementierung delegiert und sowohl der API-Nutzer als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Callbacks, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt wurden, werden nie _vor_ dem [Abschluss des aktuellen Laufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Callbacks werden auch dann aufgerufen, wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation, die das Promise repräsentiert, hinzugefügt wurden.
- Mehrere Callbacks können durch mehrmaliges Aufrufen von [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden. Sie werden nacheinander in der Reihenfolge ausgeführt, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, nie synchron aufgerufen, selbst bei einem bereits aufgelösten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Anstatt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Mikroaufgaben-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet ist, und wenn der JavaScript-Ausführungsstack leer ist), kurz bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Mikroaufgaben

Promise-Callbacks werden als [Mikroaufgabe](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) gehandhabt, während [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Callbacks als Aufgabenwarteschlangen gehandhabt werden.

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

Der obige Code wird Folgendes ausgeben:

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

Für weitere Details, siehe [Aufgaben vs. Mikroaufgaben](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Aufgaben zusammenstoßen

Wenn Sie auf Situationen stoßen, in denen Sie Promises und Aufgaben (wie Ereignisse oder Callbacks) haben, die in unvorhersehbarer Reihenfolge ausgelöst werden, könnte es hilfreich sein, eine Mikroaufgabe zu verwenden, um den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie denken, dass Mikroaufgaben dabei helfen könnten, dieses Problem zu lösen, siehe den [Mikroaufgaben-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie man [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwendet, um eine Funktion als Mikroaufgabe einzureihen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ specification](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
