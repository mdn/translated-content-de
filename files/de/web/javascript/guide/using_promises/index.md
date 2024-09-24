---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den eventuellen Abschluss oder das Scheitern eines asynchronen Vorgangs darstellt. Da die meisten Menschen Konsumenten von bereits erstellten Promises sind, wird in diesem Leitfaden erklärt, wie versprochene Promises konsumiert werden können, bevor erklärt wird, wie sie erstellt werden.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Rückrufe anhängen, anstatt Rückrufe an eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Sounddatei erstellt und dazu ein Konfigurationsprotokoll sowie zwei Rückruffunktionen erhält: eine, die bei erfolgreicher Erstellung der Audiodatei aufgerufen wird, und eine andere, die bei einem Fehler aufgerufen wird.

Hier ist ein Codebeispiel, das `createAudioFileAsync()` verwendet:

```js
function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);
```

Wenn `createAudioFileAsync()` so umgeschrieben würde, dass es ein Promise zurückgibt, würden Sie Ihre Rückrufe daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden Einzelnen untersuchen.

## Verkettung

Es besteht häufig die Notwendigkeit, zwei oder mehr asynchrone Vorgänge hintereinander auszuführen, wobei jeder nachfolgende Vorgang beginnt, wenn der vorherige erfolgreich war, mit dem Ergebnis aus dem vorherigen Schritt. Früher führte das Ausführen mehrerer asynchroner Vorgänge in Folge zum klassischen [Callback-Hell](http://callbackhell.com/):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies durch Erstellen einer Promise-Kette. Das API-Design von Promises macht dies großartig, da Rückrufe an das zurückgegebene Promise-Objekt angehängt werden, anstatt sie an eine Funktion zu übergeben.

Hier ist das Besondere: Die `then()`-Funktion gibt ein **neues Promise** zurück, das sich von dem ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert das Abschließen nicht nur von `doSomething()`, sondern auch des `successCallback` oder `failureCallback`, das Sie übergeben haben – was andere asynchrone Funktionen sein können, die ein Promise zurückgeben. Wenn dies der Fall ist, werden alle Rückrufe, die zu `promise2` hinzugefügt werden, hinter dem Promise eingereiht, das entweder von `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel ausprobieren möchten, können Sie die folgende Vorlage verwenden, um eine beliebige Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Weitere Dinge, die vor Abschluss des Promises zu tun sind
>       console.log("Did something");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Ein Promise um eine alte Callback-API erstellen](#ein_promise_um_eine_alte_callback-api_erstellen) weiter unten besprochen.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, wobei jedes Promise den Abschluss eines asynchronen Schritts in der Kette darstellt. Darüber hinaus sind die Argumente für `then` optional, und `catch(failureCallback)` ist eine Abkürzung für `then(null, failureCallback)` – also wenn Ihr Fehlerbehandlungscode für alle Schritte gleich ist, können Sie ihn am Ende der Kette anhängen:

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

Sie können dies auch mit [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausdrücken:

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
> Arrow Function Expressions können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; daher ist `() => x` eine Verkürzung für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben – wenn sie Promises zurückgeben, wird auf deren Erfüllung gewartet, und der nächste Rückruf erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then`-Rückrufen zurückzugeben, auch wenn das Promise immer auf `undefined` aufgelöst wird. Wenn der vorherige Handler ein Promise gestartet hat, es aber nicht zurückgegeben hat, gibt es keine Möglichkeit mehr, dessen Erfüllung zu verfolgen, und das Promise wird als "schwebend" bezeichnet.

```js example-bad
doSomething()
  .then((url) => {
    // Fehlendes `return`-Schlüsselwort vor fetch(url).
    fetch(url);
  })
  .then((result) => {
    // result ist undefined, da nichts vom vorherigen
    // Handler zurückgegeben wird. Es gibt keine Möglichkeit mehr, den Rückgabewert des fetch()
    // aufzurufen oder zu wissen, ob es überhaupt erfolgreich war.
  });
```

Indem wir das Ergebnis des `fetch`-Aufrufs (ein Promise) zurückgeben, können wir sowohl dessen Abschluss verfolgen als auch seinen Wert erhalten, wenn es abgeschlossen ist.

```js example-good
doSomething()
  .then((url) => {
    // `return`-Schlüsselwort hinzugefügt
    return fetch(url);
  })
  .then((result) => {
    // result ist ein Response-Objekt
  });
```

Schwebende Promises könnten noch schlimmer sein, wenn Sie Race-Conditions haben – wenn das Promise vom letzten Handler nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

```js example-bad
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // Fehlendes `return`-Schlüsselwort vor fetch(url).
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients wird immer [] sein, da die fetch-Anfrage noch nicht abgeschlossen ist.
  });
```

Daher sollten Sie als Faustregel ein Promise immer zurückgeben und seine Behandlung dem nächsten `then`-Handler überlassen.

```js example-good
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // `return`-Schlüsselwort nun vor dem fetch-Aufruf hinzugefügt.
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients wird jetzt Daten aus dem fetch-Aufruf enthalten.
  });
```

Noch besser: Sie können die verschachtelte Kette in eine einzige Kette umwandeln, die einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) weiter unten diskutiert.

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

Mit [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) können Sie Code schreiben, der intuitiver ist und synchronem Code ähnelt. Nachfolgend ist dasselbe Beispiel mit `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genauso wie synchroner Code aussieht, außer dass vor den Promises `await` hinzugefügt wird. Eines der wenigen Nachteile ist, dass man das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort leicht vergessen kann, was nur behoben werden kann, wenn es zu einer Typenmissanpassung kommt (z.B. wenn versucht wird, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf – zum Beispiel ist `doSomething()` dieselbe Funktion wie zuvor, sodass nur minimal refaktoriert werden muss, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> **Hinweis:** `async`/`await` hat dieselben Nebenläufigkeitssemantiken wie normale Promise-Ketten. `await` innerhalb einer async-Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Jobs weiterhin ausgeführt werden können, während `await` aussteht.

## Fehlerbehandlung

Vielleicht erinnern Sie sich daran, dass `failureCallback` im Doom-Pyramiden-Beispiel dreimal vorkam, im Vergleich zu nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn eine Ausnahme auftritt, sucht der Browser nach `.catch()`-Handlern oder `onRejected` in der Kette. Dies ist stark an die Funktionsweise von synchronem Code angepasst:

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

Promises lösen einen grundlegenden Fehler mit der Callback-Pyramide des Schreckens, indem sie alle Fehler abfangen, einschließlich geworfener Ausnahmen und Programmierfehler. Dies ist entscheidend für die funktionale Zusammensetzung asynchroner Vorgänge. Alle Fehler werden jetzt von der [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette verarbeitet, und Sie sollten fast nie `try`/`catch` verwenden müssen, ohne `async`/`await` zu verwenden.

### Verschachtelung

In den obigen Beispielen zu `listOfIngredients` ist das erste ein verschachteltes Promise in der Rückgabewertkette eines anderen `then()`-Handlers, während das zweite eine vollständig flache Kette verwendet. Einfache Promise-Ketten sollten flach gehalten werden, ohne Verschachtelung, da Verschachtelung oft aus unachtsamer Komposition resultiert.

Verschachtelung ist eine Kontrollstruktur, um den Geltungsbereich von `catch`-Anweisungen zu begrenzen. Konkret fängt ein verschachteltes `catch` nur Ausfälle in seinem Bereich und darunter ab, nicht jedoch Fehler weiter oben in der Kette außerhalb des verschachtelten Bereichs. Wenn es richtig verwendet wird, bietet dies eine präzisere Fehlerbehebung:

```js
doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}),
  ) // Ignorieren, wenn optionale Dinge fehlschlagen; fortfahren.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));
```

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind – die Verschachtelung wird nicht durch die Einrückung verursacht, sondern durch die Platzierung der äußeren `(`- und `)`-Klammern um die Schritte.

Der innere fehlerunterdrückende `catch`-Handler fängt nur Ausfälle von `doSomethingOptional()` und `doSomethingExtraNice()` auf, danach wird der Code mit `moreCriticalStuff()` fortgesetzt. Wichtig ist, dass, wenn `doSomethingCritical()` fehlschlägt, dessen Fehler nur vom endgültigen (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler verschluckt wird.

In `async`/`await` sieht dieser Code so aus:

```js
async function main() {
  try {
    const result = await doSomethingCritical();
    try {
      const optionalResult = await doSomethingOptional(result);
      await doSomethingExtraNice(optionalResult);
    } catch (e) {
      // Ausfälle in optionalen Schritten ignorieren und fortfahren.
    }
    await moreCriticalStuff();
  } catch (e) {
    console.error(`Critical failure: ${e.message}`);
  }
}
```

> [!NOTE]
> Wenn Sie keine ausgeklügelte Fehlerbehandlung haben, benötigen Sie sehr wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und setzen Sie die Fehlerbehandlungslogik ans Ende.

### Verkettung nach einem Catch

Es ist möglich, _nach_ einem Fehler, d.h. einem `catch`, weiterzuverkettenden, was nützlich ist, um neue Aktionen durchzuführen, selbst nachdem in der Kette eine Aktion fehlgeschlagen ist. Lesen Sie das folgende Beispiel:

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

Wenn ein Promise-Ablehnungsereignis von keinem Handler behandelt wird, steigt es bis an die Spitze des Aufrufstapels und der Host muss es behandeln. Im Web werden immer, wenn ein Promise abgelehnt wird, zwei Ereignisse an den globalen Bereich gesendet (in der Regel ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web-Worker verwendet wird, das [`Worker`](/de/docs/Web/API/Worker) oder eine andere arbeitsbezogene Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein bereits abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis verursacht hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitgliedseigenschaften eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das abgelehnte Promise angibt, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund bietet, warum das Promise abgelehnt wurde.

Diese machen es möglich, einen Fallback-Fehlerbehandlung für Promises anzubieten und helfen, Probleme mit Ihrer Promise-Verwaltung zu debuggen. Diese Handler sind global pro Kontext, sodass alle Fehler an dieselben Ereignishandler gehen, unabhängig von der Quelle.

In [Node.js](/de/docs/Glossary/Node.js) ist die Behandlung von Promise-Ablehnungen etwas anders. Sie erfassen nicht behandelte Ablehnungen, indem Sie einen Handler für das Node.js-`unhandledRejection`-Ereignis hinzufügen (beachten Sie den Unterschied in der Groß- und Kleinschreibung des Namens), etwa so:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Fügen Sie hier Code ein, um die Werte "promise" und "reason" zu überprüfen
});
```

In Node.js reicht es aus, um zu verhindern, dass der Fehler in die Konsole protokolliert wird (die Standardaktion, die sonst geschehen würde), diesen `process.on()`-Listener hinzuzufügen; es ist nicht erforderlich, ein Äquivalent zur [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode der Browser-Runtime zu haben.

Wenn Sie jedoch diesen `process.on`-Listener hinzufügen, aber nicht auch Code darin haben, um abgelehnte Promises zu behandeln, werden sie einfach ignoriert. Daher sollten Sie idealerweise Code in diesem Listener hinzufügen, um jedes abgelehnte Promise zu überprüfen und sicherzustellen, dass es nicht durch einen tatsächlichen Programmierfehler verursacht wurde.

## Zusammensetzung

Es gibt vier [Kompositionswerkzeuge](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) für die gleichzeitige Ausführung asynchroner Vorgänge: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

Wir können Vorgänge gleichzeitig starten und darauf warten, dass sie alle wie folgt abgeschlossen werden:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // Verwenden Sie result1, result2 und result3
});
```

Wenn eines der Promises im Array abgelehnt wird, lehnt `Promise.all()` das zurückgegebene Promise sofort ab und bricht die anderen Vorgänge ab. Dies könnte zu unerwartetem Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionswerkzeug, das sicherstellt, dass alle Vorgänge abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus – eine Abfolge von Promises wird gleichzeitig gestartet und wartet nicht auf einander. Eine sequentielle Komposition ist möglich, indem man etwas cleveres JavaScript verwendet:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* Verwenden Sie result3 */
  });
```

In diesem Beispiel reduzieren wir ein Array asynchroner Funktionen auf eine Promise-Kette. Der obige Code ist äquivalent zu:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* Verwenden Sie result3 */
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

Die Funktion `composeAsync()` akzeptiert eine beliebige Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Ausgangswert annimmt, der durch die Kompositionspipeline gegeben wird:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Eine sequentielle Komposition kann auch kürzer mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* Verwenden Sie das letzte Ergebnis (d.h. result3) */
```

Bevor Sie jedoch Promises sequentiell zusammensetzen, überlegen Sie, ob es wirklich notwendig ist – es ist immer besser, Promises gleichzeitig auszuführen, damit sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promises hängt vom Ergebnis eines anderen ab.

## Abbruch

`Promise` selbst hat kein erstklassiges Protokoll für den Abbruch, aber Sie können unter Umständen den zugrunde liegenden asynchronen Vorgang direkt abbrechen, meist mit [`AbortController`](/de/docs/Web/API/AbortController).

## Ein Promise um eine alte Callback-API erstellen

Ein {{jsxref("Promise")}} kann von Grund auf mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu umwickeln.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch Erfolg und/oder Fehler-Rückrufe auf die alte Weise. Das offensichtlichste Beispiel ist die Funktion [`setTimeout()`](/de/docs/Web/API/setTimeout):

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen alter Callbacks und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, wird nichts es abfangen. Dies ist ein wesentlicher Bestandteil des Designs von `setTimeout`.

Zum Glück können wir `setTimeout` in ein Promise umwickeln. Die beste Praxis besteht darin, die Funktionen, die Callbacks erwarten, so früh wie möglich zu umwickeln und sie dann niemals mehr direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion, die uns erlaubt, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` eigentlich nicht fehlschlägt, haben wir in diesem Fall reject weggelassen. Weitere Informationen darüber, wie die Executor-Funktion funktioniert, finden Sie in der Referenz [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

## Timing

Zum Schluss werden wir die technischen Details betrachten, wann die registrierten Callbacks aufgerufen werden.

### Garantien

Im Callback-basierten API hängt es vom API-Entwickler ab, wann und wie der Callback aufgerufen wird. Beispielsweise kann der Callback synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design ist stark zu vermeiden, da es zum sogenannten "Zalgo-Zustand" führt. Im Kontext des Entwerfens asynchroner APIs bedeutet dies, dass ein Callback manchmal synchron und manchmal asynchron aufgerufen wird, was für den Aufrufer zu Mehrdeutigkeiten führt. Weitere Hintergrundinformationen finden Sie im Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals formal vorgestellt wurde. Dieses API-Design macht Seiteneffekte schwer zu analysieren:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 oder 2?
```

Promises sind hingegen eine Form von [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Entwickler steuert nicht, wann der Callback aufgerufen wird. Stattdessen wird die Verwaltung der Callback-Warteschlange und die Entscheidung, wann die Callbacks aufgerufen werden, an die Promise-Implementierung delegiert. Sowohl der API-Nutzer als auch der API-Entwickler erhalten damit automatisch starke semantische Garantien, darunter:

- Callbacks, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden nie vor dem [Abschluss des aktuellen Laufs](/de/docs/Web/JavaScript/Event_loop#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Callbacks werden auch dann aufgerufen, wenn sie _nach_ dem Erfolg oder Misserfolg des asynchronen Vorgangs hinzugefügt wurden, den das Promise repräsentiert.
- Mehrere Callbacks können hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrmals aufgerufen wird. Sie werden nacheinander aufgerufen, in der Reihenfolge, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst wenn es sich um ein bereits aufgelöstes Promise handelt:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Ausgabe: 1, 2
```

Anstatt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Mikrotask-Warteschlange eingefügt, was bedeutet, dass sie später ausgeführt wird (nur nachdem die Funktion, die sie erstellt hat, beendet ist und der JavaScript-Ausführungsstapel leer ist), direkt bevor die Steuerung an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Task-Warteschlangen vs. Mikrotasks

Promise-Callbacks werden als [Mikrotask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/setTimeout)-Callbacks als Task-Warteschlangen behandelt werden.

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

Für weitere Details verweisen wir auf [Tasks vs. Mikrotasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Tasks kollidieren

Wenn Sie auf Situationen stoßen, in denen Promises und Tasks (wie Ereignisse oder Rückrufe) in unvorhersehbarer Reihenfolge ausgelöst werden, könnte es sein, dass Sie von der Verwendung einer Mikrotask profitieren, um den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie glauben, dass Mikrotasks helfen könnten, dieses Problem zu lösen, siehe den [Mikrotask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie [`queueMicrotask()`](/de/docs/Web/API/queueMicrotask) verwendet wird, um eine Funktion als Mikrotask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ specification](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
