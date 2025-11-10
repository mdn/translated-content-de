---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: d8a5165fd3c3b35ea9d07a914459e8d468f62276
---

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den endgültigen Abschluss oder das Scheitern einer asynchronen Operation darstellt. Da die meisten Menschen Konsumenten von bereits erstellten Promises sind, erklärt dieser Leitfaden zunächst die Verwendung zurückgegebener Promises, bevor er erklärt, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das man Callbacks anhängt, anstatt Callbacks in eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Audiodatei erstellt, gegeben eine Konfigurationsdatensatz und zwei Callback-Funktionen: eine, die aufgerufen wird, wenn die Audiodatei erfolgreich erstellt wird, und eine andere, die aufgerufen wird, wenn ein Fehler auftritt.

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

Wenn `createAudioFileAsync()` umgeschrieben wäre, um ein Promise zurückzugeben, würden Sie Ihre Callbacks daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden davon untersuchen.

## Verkettung

Ein häufiges Bedürfnis ist es, zwei oder mehr asynchrone Operationen hintereinander auszuführen, wobei jede nachfolgende Operation startet, wenn die vorherige erfolgreich ist, mit dem Ergebnis aus dem vorherigen Schritt. In der Vergangenheit führte die Durchführung mehrerer asynchroner Operationen hintereinander zum klassischen [Callback-Hell](https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies, indem wir eine Promise-Kette erstellen. Das API-Design von Promises macht dies großartig, weil die Callbacks an das zurückgegebene Promise-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Hier ist das Besondere: Die Funktion `then()` gibt ein **neues Promise** zurück, das sich vom ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch von dem an `successCallback` oder `failureCallback` übergebenen Callback — welche andere asynchrone Funktionen sein können, die ein Promise zurückgeben. Wenn dies der Fall ist, werden alle an `promise2` hinzugefügten Callbacks hinter das Promise in die Warteschlange eingereiht, das von entweder `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel verwenden möchten, können Sie die folgende Vorlage verwenden, um eine Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Promises erledigt werden müssen
>       console.log("Did something");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellen eines Promises um eine alte Callback-API](#erstellen_eines_promises_um_eine_alte_callback-api) unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsreihen erstellen, bei denen jedes Promise den Abschluss eines asynchronen Schrittes in der Kette darstellt. Darüber hinaus sind die Argumente zu `then` optional, und `catch(failureCallback)` ist kurz für `then(null, failureCallback)` — wenn also Ihr Fehlerbehandlungscode für alle Schritte gleich ist, können Sie ihn am Ende der Kette anhängen:

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
> Pfeilfunktionsausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; also ist `() => x` kurz für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben — wenn sie Promises zurückgeben, wird das Promise zuerst gewartet, bis es sich erfüllt, und der nächste Callback erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then`-Callbacks zurückzugeben, selbst wenn das Promise immer `undefined` auflöst. Wenn der vorherige Handler ein Promise gestartet hat, es aber nicht zurückgegeben hat, gibt es keine Möglichkeit, seine Behebung weiter zu verfolgen, und das Promise wird als "schwebend" angesehen.

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

Indem wir das Ergebnis des `fetch`-Aufrufs (ein Promise) zurückgeben, können wir sowohl dessen Abschluss verfolgen als auch dessen Wert erhalten, wenn er abgeschlossen ist.

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

Daher, als Daumenregel, wann immer Ihre Operation auf ein Promise trifft, geben Sie es zurück und überlassen Sie seine Behandlung dem nächsten `then`-Handler.

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

Noch besser ist es, die geschachtelte Kette in eine einzige Kette zu glätten, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Schachtelung](#schachtelung) unten besprochen.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und synchronem Code ähnelt. Unten ist dasselbe Beispiel mit `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie synchroner Code aussieht, außer für die `await`-Schlüsselwörter vor Promises. Eines der wenigen Kompromisse ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort zu vergessen, das nur behoben werden kann, wenn ein Typ-Mismatch auftritt (z. B. der Versuch, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` dieselbe Funktion wie zuvor, sodass nur minimales Refactoring erforderlich ist, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [asynchronen Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> [!NOTE]
> `async`/`await` hat die gleichen Nebenläufigkeitssemantiken wie normale Promise-Ketten. `await` innerhalb einer asynchronen Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Jobs noch ausgeführt werden können, während `await` aussteht.

## Fehlerbehandlung

Sie erinnern sich vielleicht, dass `failureCallback` dreimal in der Pyramide des Schreckens vorgekommen ist, verglichen mit nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn eine Ausnahme auftritt, sucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected` ab. Dies ist stark nach dem Modell, wie synchroner Code funktioniert:

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

Promises lösen einen grundlegenden Fehler mit der Callback-Pyramide des Schreckens, indem sie alle Fehler abfangen, sogar geworfene Ausnahmen und Programmierfehler. Dies ist essentiell für die funktionale Komposition asynchroner Operationen. Alle Fehler werden jetzt von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und man sollte fast nie `try`/`catch` verwenden müssen, ohne `async`/`await` zu verwenden.

### Schachtelung

In den obigen Beispielen mit `listOfIngredients` hat das erste einen in den Rückgabewert eines anderen `then()`-Handlers geschachtelten Promise-Strang, während das zweite eine völlig flache Kette verwendet. Einfache Promise-Ketten sollten flach gehalten werden, ohne Schachtelung, da Schachtelung das Ergebnis unvorsichtiger Komposition sein kann.

Schachtelung ist eine Kontrollstruktur, um den Geltungsbereich von `catch`-Anweisungen zu begrenzen. Konkret fängt ein geschachteltes `catch` nur Fehler in seinem Geltungsbereich und darunter ab, nicht aber Fehler, die höher in der Kette außerhalb des geschachtelten Bereichs liegen. Wenn dies richtig verwendet wird, bietet es eine größere Präzision bei der Fehlerbehebung:

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

Beachten Sie, dass die optionalen Schritte hier geschachtelt sind — die Schachtelung wird nicht durch die Einrückung, sondern durch die Platzierung der äußeren `(` und `)` Klammern um die Schritte herum verursacht.

Der innere Fehlerunterdrückung-`catch`-Handler fängt nur Fehler von `doSomethingOptional()` und `doSomethingExtraNice()` ab, danach wird der Code mit `moreCriticalStuff()` fortgesetzt. Wichtig ist, dass, wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom finalen (äußeren) `catch` gefangen wird und nicht vom inneren `catch`-Handler unterdrückt wird.

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
> Wenn Sie keine ausgeklügelte Fehlerbehandlung haben, brauchen Sie sehr wahrscheinlich keine geschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und setzen Sie die Fehlerbehandlungslogik am Ende.

### Chaining nach einem Catch

Es ist möglich, _nach_ einem Fehler, d.h. einem `catch` zu verketteten, was nützlich ist, um nach einem fehlgeschlagenen Vorgang in der Kette neue Aktionen durchzuführen. Lesen Sie das folgende Beispiel:

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

Dies gibt den folgenden Text aus:

```plain
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

### Promise-Ablehnungsereignisse

Wenn ein Promise-Ablehnungsereignis von keinem Handler abgefangen wird, wird es bis zum oberen Ende des Aufrufstapels weitergegeben, und der Host muss es anzeigen. Im Web, wann immer ein Promise abgelehnt wird, wird eines von zwei Ereignissen an den globalen Bereich gesendet (in der Regel ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web Worker verwendet wird, das [`Worker`](/de/docs/Web/API/Worker) oder eine andere arbeitnehmerbasierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis verursacht hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das abgelehnte Promise anzeigt, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund angibt, warum das Promise abgelehnt wurde.

Diese ermöglichen es, eine alternative Fehlerbehandlung für Promises anzubieten und helfen dabei, Probleme mit Ihrem Promise-Management zu debuggen. Diese Handler sind global pro Kontext, sodass alle Fehler an dieselben Ereignis-Handler gehen, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} ist die Behandlung von Promise-Ablehnungen etwas anders. Sie erfassen unbehandelte Ablehnungen, indem Sie einen Handler für das Node.js-`unhandledRejection`-Ereignis hinzufügen (achten Sie auf die Groß- und Kleinschreibung des Namens), so:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js, um zu verhindern, dass der Fehler in die Konsole geloggt wird (die Standardaktion, die sonst erfolgen würde), reicht es aus, diesen `process.on()`-Listener hinzuzufügen; es besteht keine Notwendigkeit für ein Äquivalent zur [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode der Browserlaufzeit.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber keine Logik darin haben, um abgelehnte Promises zu behandeln, werden sie einfach ignoriert. Idealerweise sollten Sie daher Code innerhalb dieses Listeners hinzufügen, um jedes abgelehnte Promise zu untersuchen und sicherzustellen, dass es nicht durch einen tatsächlichen Programmierfehler verursacht wurde.

## Zusammensetzung

Es gibt vier [Zusammensetzungstools](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) für die gleichzeitige Ausführung von asynchronen Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}}, und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und warten, bis sie alle beendet sind, wie folgt:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eines der Promises im Array abgelehnt wird, lehnt `Promise.all()` sofort das zurückgegebene Promise ab. Die anderen Operationen laufen weiter, aber ihre Ergebnisse sind nicht über den Rückgabewert von `Promise.all()` verfügbar. Dies kann zu unerwartetem Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Zusammensetzungstool, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus — eine Folge von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Sequenzielle Zusammensetzung ist mit einigem cleveren JavaScript möglich:

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

Dies kann zu einer wiederverwendbaren Compose-Funktion gemacht werden, die in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die `composeAsync()`-Funktion akzeptiert beliebig viele Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert akzeptiert, der durch die Kompositionspipeline geleitet wird:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Sequentielle Zusammensetzung kann auch prägnanter mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie jedoch Promises sequentiell zusammensetzen, überlegen Sie, ob es wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, sodass sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt von dem Ergebnis eines anderen ab.

## Abbruch

`Promise` selbst verfügt über kein erstklassiges Protokoll für den Abbruch, aber es ist möglich, die zugrunde liegende asynchrone Operation direkt abzubrechen, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellen eines Promises um eine alte Callback-API

Ein {{jsxref("Promise")}} kann von Grund auf neu mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur benötigt werden, um alte APIs zu umschließen.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch, dass Erfolgs- und/oder Fehler-Callbacks auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Funktion:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen von Rückrufen im alten Stil und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, fängt nichts dies ab. Dies ist intrinsisch zum Design von `setTimeout()`.

Glücklicherweise können wir `setTimeout()` in ein Promise verpacken. Die beste Praxis besteht darin, die rückrufannehmenden Funktionen so niedrig wie möglich zu umschließen und sie dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor akzeptiert eine Ausführungsfunktion, die es uns ermöglicht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` nicht wirklich fehlschlägt, haben wir `reject` in diesem Fall weggelassen. Weitere Informationen darüber, wie die Ausführungsfunktion funktioniert, finden Sie in der [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)-Referenz.

## Timing

Zum Schluss schauen wir uns noch die technischen Details an, wann die registrierten Callbacks aufgerufen werden.

### Garantien

In der rückrufbasierten API hängt es vom API-Implementierer ab, wann und wie der Rückruf aufgerufen wird. Zum Beispiel könnte der Rückruf synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design wird stark abgeraten, da es zum sogenannten "Zalgo-Zustand" führt. Im Kontext des Entwerfens asynchroner APIs bedeutet dies, dass ein Rückruf in einigen Fällen synchron, in anderen Fällen jedoch asynchron aufgerufen wird und so Ambiguitäten für den Anrufer entstehen. Weitere Hintergrundinformationen finden Sie im Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), wo der Begriff erstmals formell vorgestellt wurde. Dieses API-Design macht Nebeneffekte schwer analysierbar:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Auf der anderen Seite sind Promises eine Form der [umgekehrten Kontrolle](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Implementierer kontrolliert nicht, wann der Rückruf aufgerufen wird. Stattdessen wird die Verwaltung der Rückrufwarteschlange und die Entscheidung, wann die Rückrufe aufgerufen werden, an die Promise-Implementierung delegiert, und sowohl der API-Anwender als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Rückrufe, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden niemals vor dem [Abschluss des aktuellen Laufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Rückrufe werden aufgerufen, auch wenn sie _nach_ dem Erfolg oder Misserfolg der asynchronen Operation, die das Promise darstellt, hinzugefügt wurden.
- Mehrere Rückrufe können hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrmals aufgerufen wird. Sie werden nacheinander in der Reihenfolge aufgerufen, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, auch nicht bei einem bereits gelösten Promise:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Anstatt sofort zu laufen, wird die übergebene Funktion in eine Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (nur nachdem die Funktion, die sie erstellt hat, beendet ist und wenn der JavaScript-Ausführungsstack leer ist), gerade bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Microtasks

Promise-Callbacks werden als [Microtask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, wohingegen [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Callbacks als Aufgabenwarteschlangen behandelt werden.

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

Weitere Details finden Sie unter [Aufgaben vs. Microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Aufgaben kollidieren

Wenn Sie auf Situationen stoßen, in denen Sie Promises und Aufgaben (wie Ereignisse oder Rückrufe) haben, die in unvorhersehbaren Reihenfolgen ausgelöst werden, ist es möglich, dass Sie von der Verwendung eines Microtasks profitieren könnten, um den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie glauben, dass Microtasks zur Lösung dieses Problems beitragen können, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden, um eine Funktion als Microtask in die Warteschlange einzureihen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ specification](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
