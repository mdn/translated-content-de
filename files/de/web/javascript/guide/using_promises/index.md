---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den endgültigen Abschluss oder das Scheitern einer asynchronen Operation darstellt. Da die meisten Menschen bereits bestehende Promises nutzen, wird dieser Leitfaden zunächst die Nutzung von zurückgegebenen Promises erklären, bevor er erläutert, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Rückruffunktionen (Callbacks) anhängen, anstatt Callbacks an eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Sounddatei erstellt, basierend auf einem Konfigurationsdatensatz und zwei Rückruffunktionen: Eine, die aufgerufen wird, wenn die Audiodatei erfolgreich erstellt wurde, und eine andere, die aufgerufen wird, wenn ein Fehler auftritt.

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

Wenn `createAudioFileAsync()` umgeschrieben werden würde, um ein Promise zurückzugeben, würden Sie Ihre Callbacks daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden von ihnen untersuchen.

## Verkettung

Es ist häufig erforderlich, zwei oder mehr asynchrone Operationen hintereinander auszuführen, wobei jede nachfolgende Operation startet, wenn die vorherige erfolgreich war, mit dem Ergebnis des vorherigen Schritts. Früher hätte das Ausführen mehrerer asynchroner Operationen nacheinander zum klassischen [Callback-Hell](http://callbackhell.com/) geführt:

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies durch die Erstellung einer Promise-Kette. Das API-Design von Promises macht dies großartig, da Callbacks an das zurückgegebene Promise-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Das ist das Besondere: die `then()`-Funktion gibt ein **neues Promise** zurück, das sich vom ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch von `successCallback` oder `failureCallback`, die Sie übergeben haben — dies können andere asynchrone Funktionen sein, die ein Promise zurückgeben. Wenn das der Fall ist, werden alle Callbacks, die zu `promise2` hinzugefügt werden, in die Warteschlange hinter dem Promise gestellt, das entweder von `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionsfähiges Beispiel ausprobieren möchten, können Sie die folgende Vorlage verwenden, um eine beliebige Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Promises zu tun sind
>       console.log("Did something");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellung eines Promises um eine alte Callback-API](#erstellung_eines_promises_um_eine_alte_callback-api) weiter unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, wobei jedes Promise den Abschluss eines asynchronen Schritts in der Kette darstellt. Darüber hinaus sind die Argumente von `then` optional, und `catch(failureCallback)` ist eine Kurzform für `then(null, failureCallback)` — wenn Ihr Fehlerbehandlungscode also für alle Schritte gleich ist, können Sie ihn an das Ende der Kette hängen:

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

Möglicherweise sehen Sie dies stattdessen mit [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausgedrückt:

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
> Arrow-Funktion-Ausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben, so dass `() => x` eine Kurzform für `() => { return x; }` ist.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben – wenn sie Promises zurückgeben, wird dieses Promise zuerst abgewartet, bis es sich auflöst, und der nächste Callback erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then`-Callbacks zurückzugeben, auch wenn das Promise immer zu `undefined` aufgelöst wird. Wenn der vorherige Handler ein Promise gestartet hat, es aber nicht zurückgegeben wurde, gibt es keine Möglichkeit mehr, seine Beilegung zu verfolgen, und das Promise wird als "floating" (schwebend) bezeichnet.

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

Indem wir das Ergebnis des `fetch`-Aufrufs zurückgeben (was ein Promise ist), können wir sowohl seinen Abschluss verfolgen als auch seinen Wert erhalten, wenn er abgeschlossen ist.

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

Schwebende Promises könnten schlimmer sein, wenn Sie Rennbedingungen haben — wenn das Promise vom letzten Handler nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher sollte als Faustregel gelten, wann immer Ihre Operation ein Promise trifft, geben Sie es zurück und überlassen Sie seine Behandlung dem nächsten `then`-Handler.

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

Noch besser ist es, die verschachtelte Kette in eine einzelne Kette zu glätten, was einfacher ist und das Fehlerhandling erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) unten erörtert.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und synchronem Code ähnelt. Das folgende Beispiel verwendet `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie synchroner Code aussieht, abgesehen von den `await`-Schlüsselwörtern vor den Promises. Einer der wenigen Nachteile ist, dass es leicht passieren kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort zu vergessen, was nur behoben werden kann, wenn es zu einem Typ-Mismatch kommt (z. B. wenn man versucht, ein Promise als Wert zu verwenden).

`async`/`await` basiert auf Promises — beispielsweise ist `doSomething()` dieselbe Funktion wie zuvor, sodass nur minimale Umstrukturierungen erforderlich sind, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> **Hinweis:** `async`/`await` hat dieselben Nebenläufigkeits-Semantiken wie normale Promise-Ketten. `await` innerhalb einer async-Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Aufgaben weiterhin ausgeführt werden können, während das `await` anhängig ist.

## Fehlerbehandlung

Sie erinnern sich vielleicht daran, `failureCallback` dreimal in der Pyramide des Schreckens gesehen zu haben, verglichen mit nur einem Mal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn eine Ausnahme auftritt, durchsucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected`. Dies ist weitgehend dem synchronen Code-Modell nachempfunden:

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

Promises lösen einen grundlegenden Fehler der Callback-Pyramide auf, indem alle Fehler, auch geworfene Ausnahmen und Programmierfehler, abgefangen werden. Dies ist für die funktionale Komposition von asynchronen Operationen unerlässlich. Alle Fehler werden jetzt von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` ohne Verwendung von `async`/`await` verwenden.

### Verschachtelung

In den oben beschriebenen Beispielen mit `listOfIngredients` ist das erste Beispiel mit einer Promise-Kette verschachtelt, die in den Rückgabewert eines anderen `then()`-Handlers eingebettet ist, während das zweite Beispiel eine vollständig flache Kette verwendet. Einfache Promise-Ketten sollten am besten flach gehalten werden, ohne Verschachtelung, da Verschachtelung das Ergebnis einer unachtsamen Komposition sein kann.

Verschachtelung ist eine Kontrollstruktur, um den Geltungsbereich von `catch`-Anweisungen zu begrenzen. Insbesondere fängt ein verschachteltes `catch` nur Fehlschläge in seinem Gültigkeitsbereich und darunter ein, nicht jedoch Fehler höher in der Kette außerhalb des verschachtelten Bereichs. Bei korrekter Anwendung bietet dies eine größere Präzision in der Fehlerbehebung:

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

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind — die Verschachtelung wird nicht durch die Einrückung verursacht, sondern durch die Platzierung der äußeren `(` und `)` Klammern um die Schritte.

Der innere Fehler-stillende `catch`-Handler fängt nur Fehlschläge von `doSomethingOptional()` und `doSomethingExtraNice()` ein, nach denen der Code mit `moreCriticalStuff()` fortfährt. Wichtig ist, dass wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom finalen (äußeren) `catch`-Handler gefangen wird und nicht vom inneren `catch`-Handler verschluckt wird.

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
> Wenn Sie keine ausgefeilte Fehlerbehandlung haben, benötigen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Stattdessen verwenden Sie eine flache Kette und platzieren die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem Catch

Es ist möglich, nach einem Fehlschlag, d.h. einem `catch`, weiter zu verkette, was nützlich ist, um neue Aktionen auch nach einem Fehlschlag in der Kette auszuführen. Lesen Sie das folgende Beispiel:

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
> Der Text "Do this" wird nicht angezeigt, weil der "Something failed"-Fehler eine Ablehnung verursachte.

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

### Promise-Rejection-Ereignisse

Wenn ein Promise-Rejection-Ereignis nicht von einem Handler behandelt wird, steigt es bis zum oberen Ende des Aufrufstapels auf und muss vom Host ausgegeben werden. Im Web wird, wenn ein Promise abgelehnt wird, eines von zwei Ereignissen an den globalen Bereich gesendet (im Allgemeinen ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web-Worker verwendet wird, der [`Worker`](/de/docs/Web/API/Worker) oder eine andere arbeiterbasierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungs-Handler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein bereits abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis ausgelöst hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die auf das abgelehnte Promise hinweist, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund angibt, warum das Promise abgelehnt wurde.

Diese machen es möglich, eine Rückfallfehlerbehandlung für Promises anzubieten und helfen, Probleme mit dem Promise-Management zu debuggen. Diese Handler sind global pro Kontext, sodass alle Fehler an dieselben Ereignis-Handler weitergeleitet werden, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} ist die Behandlung von Promise-Ablehnungen etwas anders. Sie erfassen nicht behandelte Ablehnungen, indem Sie einen Handler für das Node.js-`unhandledRejection`-Ereignis hinzufügen (beachten Sie den Unterschied in der Großschreibung des Namens), wie folgt:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js, um zu verhindern, dass der Fehler standardmäßig im Konsolenprotokoll angezeigt wird (was ansonsten standardmäßig passieren würde), genügt es, diesen `process.on()`-Listener hinzuzufügen; ein Äquivalent zur [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode der Browser-Laufzeitumgebung ist nicht erforderlich.

Wenn Sie diesen `process.on`-Listener hinzufügen, aber keinen Code darin haben, um abgelehnte Promises zu behandeln, werden sie einfach fallen gelassen und stillschweigend ignoriert. Idealerweise sollten Sie Code in diesem Listener hinzufügen, um jedes abgelehnte Promise zu prüfen und sicherzustellen, dass es nicht durch einen tatsächlichen Programmfehler verursacht wurde.

## Komposition

Es gibt vier [Kompositionswerkzeuge](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) für das gleichzeitige Ausführen von asynchronen Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und auf ihren Abschluss warten:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eines der Promises im Array abgelehnt wird, weist `Promise.all()` das zurückgegebene Promise sofort ab und bricht die anderen Operationen ab. Dies kann zu unerwarteten Zuständen oder Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionswerkzeug, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor sie aufgelöst werden.

Diese Methoden führen alle Promises gleichzeitig aus — eine Reihe von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Eine sequentielle Komposition ist mit einigen cleveren JavaScript-Anweisungen möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel reduzieren wir ein Array von asynchronen Funktionen zu einer Promise-Kette. Der obige Code ist gleichwertig mit:

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

Die `composeAsync()`-Funktion akzeptiert eine beliebige Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert akzeptiert, der durch die Kompositions-Pipeline weitergegeben wird:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Die sequentielle Komposition kann auch prägnanter mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie jedoch Promises sequentiell komponieren, überlegen Sie, ob es wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, sodass sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt vom Ergebnis eines anderen ab.

## Stornierung

`Promise` selbst hat kein hervorgehobenes Protokoll für die Stornierung, aber Sie können möglicherweise direkt die zugrundeliegende asynchrone Operation abbrechen, typischerweise durch die Verwendung des [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellung eines Promises um eine alte Callback-API

Ein {{jsxref("Promise")}} kann von Grund auf mittels seines [Konstruktors](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu umschließen.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch Erfolgs- und/oder Fehlschlag-Callbacks, die auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen von alten Style-Callbacks und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, fängt es niemand auf. Dies liegt intrinsisch im Design von `setTimeout()`.

Zum Glück können wir `setTimeout()` in ein Promise einwickeln. Die beste Praxis besteht darin, die Callback-abhängigen Funktionen auf der niedrigstmöglichen Ebene zu umschließen und sie dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion an, die es uns ermöglicht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` eigentlich nicht fehlschlägt, haben wir in diesem Fall `reject` weggelassen. Weitere Informationen darüber, wie die Executor-Funktion funktioniert, finden Sie in der Referenz zu [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

## Timing

Zum Schluss werden wir uns die technischen Details ansehen, wann die registrierten Callbacks aufgerufen werden.

### Garantien

In der callback-basierten API hängt es vom API-Implementierer ab, wann und wie der Callback aufgerufen wird. Zum Beispiel könnte der Callback synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design wird stark entmutigt, da es zum sogenannten "Zustand von Zalgo" führt. Im Kontext des Designs asynchroner APIs bedeutet dies, dass ein Callback in einigen Fällen synchron und in anderen Fällen asynchron aufgerufen wird, was für den Aufrufer zu Zweifeln führt. Für weitere Hintergrundinformationen siehe den Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), wo der Begriff erstmals formell vorgestellt wurde. Dieses API-Design macht Seiteneffekte schwer analysierbar:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Auf der anderen Seite sind Promises eine Form der [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Implementierer kontrolliert nicht, wann der Callback aufgerufen wird. Stattdessen wird die Aufgabe, die Callback-Warteschlange zu verwalten und zu entscheiden, wann die Callbacks aufgerufen werden, an die Promise-Implementierung delegiert, und sowohl der API-Nutzer als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Callbacks, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden niemals vor [Beendigung des aktuellen Laufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Callbacks werden aufgerufen, selbst wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation, die das Promise repräsentiert, hinzugefügt wurden.
- Mehrere Callbacks können hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrmals aufgerufen wird. Sie werden nacheinander aufgerufen, in der Reihenfolge, in der sie hinzugefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst wenn ein bereits aufgelöstes Promise vorliegt:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Statt direkt zu laufen, wird die übergebene Funktion in eine Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet ist und der JavaScript-Ausführungsstack leer ist), direkt bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Mikroaufgaben

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

Der obige Code gibt folgendes aus:

```plain
Promise callback
Promise (pending) Promise {<pending>}
Promise callback (.then)
event-loop cycle: Promise (fulfilled) Promise {<fulfilled>}
```

Für weitere Details siehe [Tasks vs. Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Aufgaben kollidieren

Wenn Sie auf Situationen stoßen, in denen Sie Promises und Aufgaben (wie Ereignisse oder Callbacks) haben, die in unvorhersehbarer Reihenfolge ausgelöst werden, könnte es hilfreich sein, eine Microtask zu verwenden, um den Status zu prüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie glauben, dass Microtasks dazu beitragen können, dieses Problem zu lösen, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden, um eine Funktion als Microtask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ spec](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
