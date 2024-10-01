---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das das eventuale Eintreten oder Scheitern einer asynchronen Operation repräsentiert. Da die meisten Menschen Verbraucher von bereits erstellten Promises sind, wird in diesem Leitfaden zuerst erklärt, wie man zurückgegebene Promises konsumiert, bevor erklärt wird, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Callbacks anhängen, anstatt Callbacks in eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Audiodatei basierend auf einem Konfigurationsdatensatz und zwei Callback-Funktionen erzeugt: eine, die aufgerufen wird, wenn die Audiodatei erfolgreich erstellt wurde, und eine andere, die aufgerufen wird, wenn ein Fehler auftritt.

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

Wenn `createAudioFileAsync()` so umgeschrieben wäre, dass es ein Promise zurückgibt, würden Sie Ihre Callbacks daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden davon erkunden.

## Verkettung

Ein häufiges Bedürfnis ist es, zwei oder mehr asynchrone Operationen hintereinander auszuführen, wobei jede nachfolgende Operation startet, wenn die vorherige Operation erfolgreich ist, zusammen mit dem Ergebnis des vorherigen Schritts. In früheren Tagen führte die Ausführung mehrerer asynchroner Operationen hintereinander zu dem klassischen [Callback-Hell](http://callbackhell.com/):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies, indem wir eine Promise-Kette erstellen. Das API-Design von Promises macht dies großartig, weil Callbacks an das zurückgegebene Promise-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Hier ist der Zauber: Die Funktion `then()` gibt ein **neues Promise** zurück, das sich von dem ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch von dem `successCallback` oder `failureCallback`, das Sie übergeben haben — das können andere asynchrone Funktionen sein, die ein Promise zurückgeben. Wenn dies der Fall ist, werden alle Callbacks, die zu `promise2` hinzugefügt wurden, hinter das Promise gestellt, das entweder von `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel haben möchten, mit dem Sie experimentieren können, können Sie die folgende Vorlage verwenden, um eine beliebige Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Promise zu tun sind
>       console.log("Hat etwas getan");
>       // Der Erfüllungswert des Promise
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellen eines Promise um eine alte Callback-API](#erstellen_eines_promise_um_eine_alte_callback-api) unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsreihen erstellen, bei denen jedes Promise den Abschluss eines asynchronen Schritts in der Kette darstellt. Darüber hinaus sind die Argumente für `then` optional, und `catch(failureCallback)` ist eine Abkürzung für `then(null, failureCallback)` — also wenn Ihr Fehlerbehandlungscode für alle Schritte gleich ist, können Sie ihn am Ende der Kette anhängen:

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

Sie können dies auch mit [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausdrücken:

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
> Arrow Function-Ausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; daher ist `() => x` eine Abkürzung für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können beliebige Werte zurückgeben — wenn sie Promises zurückgeben, wird auf die Erfüllung dieses Promises gewartet, und der nächste Callback erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then`-Callbacks zurückzugeben, selbst wenn das Promise immer auf `undefined` auflöst. Wenn der vorherige Handler ein Promise gestartet hat, es jedoch nicht zurückgegeben hat, gibt es keine Möglichkeit mehr, seine Erfüllung zu verfolgen, und das Promise wird "schwebend" genannt.

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

Durch Rückgabe des Ergebnisses des `fetch`-Aufrufs (welches ein Promise ist), können wir sowohl seinen Abschluss verfolgen als auch seinen Wert erhalten, wenn es abgeschlossen ist.

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

Schwebende Promises könnten schlimmer sein, wenn Sie Rennbedingungen haben — wenn das Promise des letzten Handlers nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher gilt als Faustregel: Wann immer Ihre Operation auf ein Promise stößt, geben Sie es zurück und überlassen Sie die Handhabung dem nächsten `then`-Handler.

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

Noch besser, Sie können die verschachtelte Kette in eine einzelne Kette flachen, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) unten besprochen.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und synchronem Code ähnelt. Unten ist dasselbe Beispiel unter Verwendung von `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie synchroner Code aussieht, mit Ausnahme der `await`-Schlüsselwörter vor Promises. Einer der wenigen Kompromisse besteht darin, dass es leicht ist, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort zu vergessen, was nur behoben werden kann, wenn es zu einem Typfehler kommt (z. B. wenn versucht wird, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` die gleiche Funktion wie zuvor, sodass nur eine minimale Umstrukturierung erforderlich ist, um von Promises zu `async`/`await` zu wechseln. Weitere Informationen zur `async`/`await`-Syntax finden Sie in den Referenzen zu [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await).

> **Hinweis:** `async`/`await` hat die gleichen Nebenläufigkeits-Semantiken wie normale Promise-Ketten. `await` innerhalb einer async-Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von ihrem Wert abhängen, sodass andere asynchrone Aufgaben weiterhin laufen können, während `await` in Bearbeitung ist.

## Fehlerbehandlung

Vielleicht erinnern Sie sich, dass Sie `failureCallback` dreimal in dem Schreckens-Pyramide im früheren Beispiel gesehen haben, verglichen mit nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn es zu einer Ausnahme kommt, sucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected` ab. Dies ist sehr stark nach dem Vorbild, wie synchroner Code funktioniert:

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

Diese Symmetrie mit asynchronem Code gipfelt in der Syntax von `async`/`await`:

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

Promises lösen ein grundlegendes Problem mit der Rückruf-Pyramide des Schreckens, indem sie alle Fehler abfangen, selbst geworfene Ausnahmen und Programmfehler. Dies ist für die funktionale Komposition asynchroner Operationen unerlässlich. Alle Fehler werden jetzt von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` ohne Verwendung von `async`/`await` verwenden müssen.

### Verschachtelung

In den obigen Beispielen mit `listOfIngredients` hat das erste eine Promise-Kette, die in den Rückgabewert einer anderen `then()`-Handler verschachtelt ist, während das zweite eine vollständig flache Kette verwendet. Einfache Promise-Ketten werden am besten flach und ohne Verschachtelung gehalten, da Verschachtelung aus unachtsamer Komposition entstehen kann.

Verschachtelung ist eine Kontrollstruktur, um den Geltungsbereich von `catch`-Anweisungen zu begrenzen. Speziell fangt ein verschachteltes `catch` nur Fehler in seinem Geltungsbereich und darunter auf, nicht jedoch Fehler höher in der Kette außerhalb des verschachtelten Geltungsbereichs. Bei richtiger Verwendung bietet dies eine größere Präzision in der Fehlerbehebung:

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

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind — wobei die Verschachtelung nicht durch die Einrückung, sondern durch die Platzierung der äußeren `(` und `)` Klammern um die Schritte verursacht wird.

Der innere fehlerunterdrückende `catch`-Handler fängt nur Fehler von `doSomethingOptional()` und `doSomethingExtraNice()` ab, danach wird der Code mit `moreCriticalStuff()` fortgesetzt. Wichtig ist, dass, wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom letzten (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler geschluckt wird.

In `async`/`await` sieht dieser Code aus wie:

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
> Wenn Sie keine ausgeklügelte Fehlerbehandlung haben, brauchen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und platzieren Sie die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem catch

Es ist möglich, _nach_ einem Fehler zu verkettet, d.h. ein `catch`, was nützlich ist, um neue Aktionen auszuführen, selbst wenn eine Aktion in der Kette fehlgeschlagen ist. Lesen Sie das folgende Beispiel:

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
> Der Text "Do this" wird nicht angezeigt, weil der Fehler "Something failed" eine Ablehnung verursacht hat.

In `async`/`await` sieht dieser Code aus wie:

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

Wenn ein Promise-Ablehnungsereignis von keinem Handler behandelt wird, steigert es sich bis an die Spitze des Aufrufstapels, und der Host muss es bekannt machen. Im Web, immer wenn ein Promise abgelehnt wird, wird eines von zwei Ereignissen an den globalen Bereich gesendet (im Allgemeinen ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web-Worker verwendet wird, der [`Worker`](/de/docs/Web/API/Worker) oder eine andere worker-basierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis verursacht hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das Promise angibt, das abgelehnt wurde, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund liefert, warum das Promise abgelehnt wurde.

Diese machen es möglich, eine fallback Fehlerbehandlung für Promises anzubieten und helfen dabei, Probleme mit Ihrer Promise-Verwaltung zu debuggen. Diese Handler sind global pro Kontext, daher gehen alle Fehler an die gleichen Ereignishandler, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} ist die Handhabung von Promise-Ablehnungen etwas anders. Sie erfassen nicht erfasste Ablehnungen, indem Sie einen Handler für das `unhandledRejection`-Ereignis von Node.js hinzufügen (beachten Sie den Unterschied in der Großschreibung des Namens), wie folgt:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js, um zu verhindern, dass der Fehler in die Konsole protokolliert wird (die Standardaktion, die andernfalls durchgeführt würde), reicht es aus, diesen `process.on()`-Listener hinzuzufügen; es ist kein Äquivalent zur [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode der Browser-Laufzeitumgebung erforderlich.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber keine Logik innerhalb davon haben, um abgelehnte Promises zu behandeln, werden sie einfach fallengelassen und stillschweigend ignoriert. Idealerweise sollten Sie also Code in diesen Listener einfügen, um jedes abgelehnte Promise zu untersuchen und sicherzustellen, dass es nicht durch einen tatsächlichen Programmfehler verursacht wurde.

## Komposition

Es gibt vier [Kompositionswerkzeuge](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) für das parallele Ausführen asynchroner Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}}, und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und warten, bis sie alle wie folgt abgeschlossen sind:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn einer der Promises im Array abgelehnt wird, lehnt `Promise.all()` das zurückgegebene Promise sofort ab und bricht die anderen Operationen ab. Dies kann zu unerwarteten Zuständen oder Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionswerkzeug, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus — eine Abfolge von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Sequenzielle Komposition ist mit einigen cleveren JavaScript-Kniffen möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel reduzieren wir ein Array von asynchronen Funktionen zu einer Promise-Kette. Der obige Code entspricht:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* use result3 */
  });
```

Dies kann in eine wiederverwendbare Compose-Funktion umgewandelt werden, was in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die `composeAsync()`-Funktion akzeptiert jede Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert akzeptiert, der durch die Kompositionspipeline geleitet werden soll:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Sequenzielle Komposition kann auch kürzer mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie jedoch Promises sequentiell komponieren, überlegen Sie, ob es wirklich notwendig ist — es ist immer besser, Promises gleichzeitig laufen zu lassen, damit sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt vom Ergebnis eines anderen ab.

## Stornierung

`Promise` selbst hat kein erstes Protokoll für die Stornierung, aber Sie können möglicherweise die zugrunde liegende asynchrone Operation direkt stornieren, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellen eines Promise um eine alte Callback-API

Ein {{jsxref("Promise")}} kann von Grund auf neu erstellt werden, indem sein [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) verwendet wird. Dies sollte nur erforderlich sein, um alte APIs zu umschließen.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch, dass Erfolg und/oder Fehler-Callbacks auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die [`setTimeout()`](/de/docs/Web/API/setTimeout)-Funktion:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen von alten Callback-Stilen und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmfehler enthält, fängt nichts es ab. Das liegt an dem intrinsischen Design von `setTimeout`.

Glücklicherweise können wir `setTimeout` in ein Promise einhüllen. Die beste Praxis besteht darin, die Rückruf akzeptierenden Funktionen auf der niedrigst möglichen Ebene zu kapseln und dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor benötigt eine Executor-Funktion, die es uns ermöglicht, ein Promise manuell zu lösen oder abzulehnen. Da `setTimeout()` eigentlich nicht fehlschlägt, haben wir in diesem Fall das Ablehnen ausgelassen. Weitere Informationen dazu, wie die Executor-Funktion funktioniert, finden Sie in der Referenz zu [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

## Timing

Zum Schluss betrachten wir mehr technische Details darüber, wann die registrierten Callbacks aufgerufen werden.

### Garantien

In der rückrufbasierten API hängt es vom API-Implementor ab, wann und wie der Rückruf aufgerufen wird. Beispielsweise kann der Rückruf synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design ist stark entmutigt, weil es zum sogenannten "Zalgo-Zustand" führt. Im Kontext der Gestaltung asynchroner APIs bedeutet dies, dass ein Rückruf manchmal synchron, in anderen Fällen jedoch asynchron aufgerufen wird, wodurch für den Aufrufer Mehrdeutigkeit entsteht. Für weitere Hintergrundinformationen siehe den Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), wo der Begriff zuerst formell vorgestellt wurde. Dieses API-Design macht Seiteneffekte schwer analysierbar:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Auf der anderen Seite sind Promises eine Form der [Umkehrung der Kontrolle](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Implementor kontrolliert nicht, wann der Rückruf aufgerufen wird. Stattdessen wird die Aufgabe, die Rückruf-Warteschlange zu verwalten und zu entscheiden, wann die Rückrufe aufgerufen werden, an die Implementierung des Promise delegiert, und sowohl der API-Nutzer als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Rückrufe, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden niemals vor dem [Abschluss des aktuellen Durchlaufs](/de/docs/Web/JavaScript/Event_loop#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Rückrufe werden selbst dann aufgerufen, wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation, die das Promise repräsentiert, hinzugefügt wurden.
- Mehrere Rückrufe können hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrmals aufgerufen wird. Sie werden nacheinander in der Reihenfolge aufgerufen, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst bei einem bereits aufgelösten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Anstatt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet ist und wenn der JavaScript-Ausführungsstapel leer ist), kurz bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Microtasks

Promise-Rückrufe werden als [Microtask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/setTimeout)-Rückrufe als Aufgabenwarteschlangen behandelt werden.

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

Wenn Sie in Situationen geraten, in denen Sie Promises und Aufgaben (wie Ereignisse oder Rückrufe) haben, die in unvorhersehbaren Reihenfolgen ausgelöst werden, könnten Sie von einem Microtask profitieren, um den Status zu überprüfen oder Ihre Promises auszubalancieren, wenn Promises bedingt erstellt werden.

Wenn Sie denken, dass Microtasks helfen könnten, dieses Problem zu lösen, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden können, um eine Funktion als Microtask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
