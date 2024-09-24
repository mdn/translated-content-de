---
title: Using promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den endgültigen Abschluss oder Misserfolg einer asynchronen Operation darstellt. Da die meisten Menschen bereits erstellte Promises konsumieren, wird dieser Leitfaden die Nutzung zurückgegebener Promises erklären, bevor erklärt wird, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Rückrufe anhängen, anstatt Rückrufe in eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Audiodatei erzeugt, gegeben durch einen Konfigurationsdatensatz und zwei Rückruffunktionen: Eine wird aufgerufen, wenn die Audiodatei erfolgreich erstellt wird, und die andere im Fehlerfall.

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

Wenn `createAudioFileAsync()` so umgeschrieben wäre, dass es ein Promise zurückgibt, würden Sie Ihre Rückrufe stattdessen daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden einzelnen erkunden.

## Verkettung

Ein häufiges Bedürfnis ist es, zwei oder mehr asynchrone Operationen nacheinander auszuführen, wobei jede nachfolgende Operation beginnt, wenn die vorherige erfolgreich war, mit dem Ergebnis aus dem vorherigen Schritt. Früher hätte das Ausführen mehrerer asynchroner Operationen in Folge zum klassischen [Callback-Hell](http://callbackhell.com/) geführt:

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies, indem wir eine Promise-Kette erstellen. Das API-Design von Promises macht dies großartig, da Rückrufe an das zurückgegebene Promise-Objekt angefügt werden, anstatt in eine Funktion übergeben zu werden.

Hier ist der Trick: Die Funktion `then()` gibt ein **neues Promise** zurück, das sich vom Original unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch von dem `successCallback` oder `failureCallback`, das Sie übergeben haben — das andere asynchrone Funktionen sein können, die ein Promise zurückgeben. Wenn dies der Fall ist, werden alle Rückrufe, die `promise2` hinzugefügt werden, hinter dem Promise eingereiht, das entweder von `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel spielen möchten, können Sie die folgende Vorlage verwenden, um jede Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Promise zu tun sind
>       console.log("Did something");
>       // Der Erfüllungswert des Promise
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Ein Promise um eine alte Callback-API erstellen](#ein_promise_um_eine_alte_callback-api_erstellen) unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, wobei jedes Promise den Abschluss eines asynchronen Schrittes in der Kette darstellt. Zudem sind die Argumente zu `then` optional, und `catch(failureCallback)` ist eine Kurzform für `then(null, failureCallback)` – wenn also Ihr Fehlerbehandlungscode für alle Schritte gleich ist, können Sie ihn an das Ende der Kette anhängen:

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

Sie könnten dies mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausgedrückt sehen:

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
> Pfeilfunktionsausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; also ist `() => x` eine Kurzform für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben — wenn sie Promises zurückgeben, wird erst gewartet, bis sich dieses Promise auflöst, und der nächste Rückruf erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then` Rückrufen zurückzugeben, auch wenn das Promise immer zu `undefined` auflöst. Wenn der vorherige Handler ein Promise gestartet hat, es aber nicht zurückgab, gibt es keine Möglichkeit mehr, seine Beilegung zu verfolgen, und das Promise wird als "floating" bezeichnet.

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

Indem wir das Ergebnis des `fetch`-Aufrufs zurückgeben (was ein Promise ist), können wir sowohl seinen Abschluss verfolgen als auch seinen Wert erhalten, wenn es abgeschlossen ist.

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

Schwebende Promises könnten ein größeres Problem darstellen, wenn Sie Rennbedingungen haben — wenn das Promise des letzten Handlers nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher, als Faustregel, wann immer Ihre Operation auf ein Promise stößt, geben Sie es zurück und überlassen Sie seine Verarbeitung dem nächsten `then`-Handler.

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

Noch besser, Sie können die verschachtelte Kette in eine einzige Kette vereinfachen, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) unten besprochen.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver und synchronem Code ähnelt. Unten das gleiche Beispiel unter Verwendung von `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie synchroner Code aussieht, abgesehen von den `await`-Schlüsselwörtern vor Promises. Einer der wenigen Nachteile ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Schlüsselwort zu vergessen, was nur dann behoben werden kann, wenn ein Typ-Mismatch auftritt (z.B. der Versuch, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` dieselbe Funktion wie zuvor, sodass nur minimale Refaktorisierung erforderlich ist, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> **Note:** `async`/`await` hat dieselben Nebenläufigkeitssemantiken wie normale Promise-Ketten. `await` innerhalb einer asynchronen Funktion hält nicht das gesamte Programm an, sondern nur die Teile, die von ihrem Wert abhängen, sodass andere asynchrone Aufgaben weiterhin ausgeführt werden können, während das `await` aussteht.

## Fehlerbehandlung

Sie erinnern sich vielleicht, `failureCallback` dreimal in der Pyramid of Doom gesehen zu haben, verglichen mit nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Tritt eine Ausnahme auf, durchsucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected`. Dies ist sehr stark nach dem Vorbild, wie synchroner Code funktioniert:

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

Promises lösen einen grundlegenden Fehler mit der Callback-Pyramid of Doom, indem alle Fehler abgefangen werden, sogar geworfene Ausnahmen und Programmierfehler. Dies ist unerlässlich für die funktionale Komposition asynchroner Operationen. Alle Fehler werden jetzt von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` ohne Verwendung von `async`/`await` benötigen.

### Verschachtelung

In den obigen Beispielen, bei denen `listOfIngredients` beteiligt ist, hat das erste eine Promise-Kette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist, während das zweite eine völlig flache Kette verwendet. Einfache Promise-Ketten werden am besten flach gehalten, ohne Verschachtelung, da Verschachtelung das Ergebnis einer unachtsamen Komposition sein kann.

Verschachtelung ist eine Kontrollstruktur, um den Bereich von `catch`-Anweisungen zu begrenzen. Speziell, ein verschachteltes `catch` fängt nur Fehler in seinem Bereich und darunter ab, nicht jedoch Fehler höher in der Kette außerhalb des verschachtelten Bereichs. Wenn korrekt verwendet, gibt dies größere Präzision in der Fehlerbehebung:

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

Der innere Fehlerunterdrückungs-`catch`-Handler fängt nur Fehler von `doSomethingOptional()` und `doSomethingExtraNice()` ab, danach wird der Code mit `moreCriticalStuff()` fortgesetzt. Wichtig ist, dass wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom letzten (äußeren) `catch` abgefangen wird, und nicht vom inneren `catch`-Handler verschluckt wird.

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
> Wenn Sie keine ausgefeilte Fehlerbehandlung haben, benötigen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und platzieren Sie die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem `catch`

Es ist möglich, _nach_ einem Fehler, also einem `catch`, zu verketten, was nützlich ist, um neue Aktionen auch nach einem Fehlschlag einer Aktion in der Kette auszuführen. Lesen Sie das folgende Beispiel:

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
> Der Text "Do this" wird nicht angezeigt, da der "Something failed"-Fehler eine Ablehnung verursacht hat.

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

### Promise-Verweigerungsereignisse

Wenn ein Promise-Verweigerungsereignis von keinem Handler behandelt wird, steigt es bis zum oberen Ende des Callstacks auf, und der Host muss es anzeigen. Im Web, wann immer ein Promise abgelehnt wird, wird eines von zwei Ereignissen in den globalen Bereich gesendet (in der Regel entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Webworker verwendet wird, ist es der [`Worker`](/de/docs/Web/API/Worker) oder eine andere workerbasierte Schnittstelle). Die zwei Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Verweigerungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis ausgelöst hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das abgelehnte Promise angibt, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund angibt, warum das Promise abgelehnt wurde.

Diese ermöglichen, eine fallback-Fehlerbehandlung für Promises bereitzustellen, sowie Probleme mit Ihrem Promise-Management zu debuggen. Diese Handler sind global für den Kontext, sodass alle Fehler an diejenigen Event-Handler gesendet werden, unabhängig von ihrer Quelle.

In {{Glossary("Node.js", "Node.js")}} ist das Management der Promise-Verweigerung etwas anders. Sie erfassen nicht behandelte Ablehnungen durch Hinzufügen eines Handlers für das Node.js-`unhandledRejection`-Ereignis (beachten Sie den Unterschied in der Großschreibung des Namens), wie folgt:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js reicht es aus, diesen `process.on()`-Listener hinzuzufügen, um zu verhindern, dass der Fehler in die Konsole protokolliert wird (die Standardaktion, die sonst auftreten würde); es gibt keine Notwendigkeit für ein Äquivalent zur `preventDefault()`-Methode der Browsing-Laufzeit.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber keinen Code darin haben, um abgelehnte Promises zu behandeln, werden sie einfach auf den Boden fallen und stillschweigend ignoriert. Daher sollten Sie idealerweise Code in diesen Listener einfügen, um jedes abgelehnte Promise zu prüfen und sicherzustellen, dass es nicht durch einen tatsächlichen Programmierfehler verursacht wurde.

## Komposition

Es gibt vier [Kompositionswerkzeuge](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) zum gleichzeitigen Ausführen von asynchronen Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}}, und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und auf ihr Ende warten, so:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eines der Promises im Array ablehnt, lehnt `Promise.all()` das zurückgegebene Promise sofort ab und bricht die anderen Operationen ab. Dies kann zu unerwarteten Zuständen oder Verhaltensweisen führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionswerkzeug, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus — eine Sequenz von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Eine sequenzielle Komposition ist mit cleverem JavaScript möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel reduzieren wir ein Array asynchroner Funktionen zu einer Promise-Kette. Der obige Code ist gleichbedeutend mit:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* use result3 */
  });
```

Dies kann zu einer wiederverwendbaren Compose-Funktion gemacht werden, die in der funktionalen Programmierung gängig ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die Funktion `composeAsync()` akzeptiert eine beliebige Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert für den Durchlauf durch die Kompositionspipeline akzeptiert:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Sequenzielle Komposition kann auch prägnanter mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie Promises sequentiell zusammensetzen, sollten Sie jedoch überlegen, ob es wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, sodass sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt vom Ergebnis eines anderen ab.

## Stornierung

`Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, typischerweise unter Verwendung von [`AbortController`](/de/docs/Web/API/AbortController).

## Ein Promise um eine alte Callback-API erstellen

Ein {{jsxref("Promise")}} kann von Grund auf neu mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur notwendig sein, um alte APIs einzubinden.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch, dass Erfolgs- und/oder Fehler-Callbacks auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen von alten Callback-Stilen und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, fängt es niemand auf. Dies ist inhärent im Design von `setTimeout()`.

Glücklicherweise können wir `setTimeout()` in ein Promise einwickeln. Die beste Praxis ist es, die Callback-aufrufenden Funktionen auf der niedrigstmöglichen Ebene zu wickeln und sie dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion an, mit der wir ein Promise manuell auflösen oder ablehnen können. Da `setTimeout()` nicht wirklich fehlschlägt, haben wir `reject` in diesem Fall weggelassen. Weitere Informationen dazu, wie die Executor-Funktion funktioniert, finden Sie in der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Referenz.

## Timing

Abschließend betrachten wir die technischeren Details darüber, wann die registrierten Rückrufe aufgerufen werden.

### Garantien

In der Callback-basierten API hängt es vom API-Implementierer ab, wann und wie der Rückruf aufgerufen wird. Zum Beispiel kann der Rückruf synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design wird dringend abgeraten, da es zum sogenannten "State of Zalgo" führt. Im Kontext der Gestaltung asynchroner APIs bedeutet dies, dass ein Rückruf in einigen Fällen synchron und in anderen asynchron aufgerufen wird, was für den Anrufer zu einer Zweideutigkeit führt. Für weitere Hintergrundinformationen siehe den Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals formell vorgestellt wurde. Dieses API-Design macht Nebeneffekte schwer analysierbar:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Andererseits sind Promises eine Form der [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Implementierer kontrolliert nicht mehr, wann der Rückruf aufgerufen wird. Stattdessen wird die Wartung der Rückruf-Warteschlange und die Entscheidung, wann die Rückrufe aufgerufen werden, der Promise-Implementierung überlassen, und sowohl der API-Nutzer als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Rückrufe, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden niemals vor dem [Abschluss des aktuellen Laufs](/de/docs/Web/JavaScript/Event_loop#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Rückrufe werden aufgerufen, auch wenn sie nach dem Erfolg oder Misserfolg der asynchronen Operation hinzugefügt wurden, die das Promise darstellt.
- Es können mehrere Rückrufe hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrfach aufgerufen wird. Sie werden nacheinander in der Reihenfolge, in der sie eingefügt wurden, aufgerufen.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst bei einem bereits aufgelösten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Statt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet wird und wenn der JavaScript-Ausführungsstapel leer ist), direkt bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Microtasks

Promise-Rückrufe werden als [Microtask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Rückrufe als Aufgabenwarteschlangen behandelt werden.

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

Für weitere Details lesen Sie [Tasks vs. Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Aufgaben aufeinandertreffen

Wenn Sie auf Situationen stoßen, in denen Sie Promises und Aufgaben (wie Ereignisse oder Rückrufe) haben, die in unvorhersehbaren Reihenfolgen ausgelöst werden, könnte es sein, dass Ihnen die Verwendung eines Microtasks hilft, den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie glauben, dass Microtasks helfen könnten, dieses Problem zu lösen, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden, um eine Funktion als Microtask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [We haben ein Problem mit Promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
