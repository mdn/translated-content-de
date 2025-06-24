---
title: Verwendung von Promises
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{jsSidebar("JavaScript Leitfaden")}}{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das den Abschluss oder das Scheitern einer asynchronen Operation darstellt. Da die meisten Personen Verbraucher von bereits erstellten Promises sind, wird in diesem Leitfaden die Nutzung von zurückgegebenen Promises erklärt, bevor erläutert wird, wie man sie erstellt.

Im Wesentlichen ist ein Promise ein zurückgegebenes Objekt, an das Sie Rückruffunktionen anhängen, anstatt Rückruffunktionen in eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die eine Audiodatei asynchron erzeugt, wenn ein Konfigurationsdatensatz und zwei Rückruffunktionen übergeben werden: Eine wird aufgerufen, wenn die Audiodatei erfolgreich erstellt wird, und die andere wird aufgerufen, wenn ein Fehler auftritt.

Hier ist etwas Code, der `createAudioFileAsync()` verwendet:

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

Diese Konvention hat mehrere Vorteile. Wir werden jeden einzelnen davon analysieren.

## Verkettung

Ein häufiges Bedürfnis ist es, zwei oder mehr asynchrone Operationen hintereinander auszuführen, wobei jede nachfolgende Operation startet, wenn die vorherige Operation erfolgreich war, unter Verwendung des Ergebnisses des vorherigen Schritts. Früher führte das Ausführen mehrerer asynchroner Operationen hintereinander zum klassischen [Callback-Hell](http://callbackhell.com/):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Promises erreichen wir dies durch Erstellen einer Promise-Kette. Das API-Design von Promises macht dies großartig, weil Rückrufe an das zurückgegebene Promise-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Hier ist der Clou: die Funktion `then()` gibt ein **neues Promise** zurück, das sich von dem ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Promise (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch von dem `successCallback` oder `failureCallback`, das Sie übergeben haben — das kann eine andere asynchrone Funktion sein, die ein Promise zurückgibt. Wenn dies der Fall ist, werden alle Rückrufe, die an `promise2` angehängt werden, in der Warteschlange hinter dem Promise angefügt, das entweder von `successCallback` oder `failureCallback` zurückgegeben wird.

> [!NOTE]
> Wenn Sie ein funktionierendes Beispiel ausprobieren möchten, können Sie die folgende Vorlage verwenden, um jede Funktion zu erstellen, die ein Promise zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Promises erledigt werden müssen
>       console.log("Hat etwas getan");
>       // Der Erfüllungswert des Promises
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellen eines Promises um eine alte Callback-API](#erstellen_eines_promises_um_eine_alte_callback-api) weiter unten diskutiert.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, bei denen jedes Promise den Abschluss eines asynchronen Schrittes in der Kette repräsentiert. Darüber hinaus sind die Argumente für `then` optional, und `catch(failureCallback)` ist eine Abkürzung für `then(null, failureCallback)` — wenn Ihr Fehlerbehandlungscode für alle Schritte gleich ist, können Sie ihn am Ende der Kette anhängen:

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

Sie könnten dies auch mit [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) ausdrücken:

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
> Arrow-Funktionsausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; daher entspricht `() => x` `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können jeden Wert zurückgeben — wenn sie Promises zurückgeben, wird dieses Promise zuerst abgewartet, bis es abgerufen wird, und der nächste Rückruf erhält den Erfüllungswert, nicht das Promise selbst. Es ist wichtig, immer Promises von `then`-Rückrufen zurückzugeben, selbst wenn das Promise immer zu `undefined` führt. Wenn der vorherige Handler ein Promise gestartet, es aber nicht zurückgegeben hat, gibt es keine Möglichkeit, seinen Abschluss mehr zu verfolgen, und das Promise wird als "schwebend" bezeichnet.

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

Indem wir das Ergebnis des `fetch`-Aufrufs (ein Promise) zurückgeben, können wir sowohl dessen Abschluss verfolgen als auch seinen Wert erhalten, wenn es abgeschlossen ist.

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

Schwebende Promises könnten schlimmer sein, wenn Sie Rennenbedingungen haben — wenn das Promise vom letzten Handler nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher sollten Sie als Faustregel, wann immer Ihre Operation einem Promise begegnet, dieses zurückgeben und seine Bearbeitung an den nächsten `then`-Handler delegieren.

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

Noch besser, Sie können die verschachtelte Kette in eine einzige Kette glätten, die einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Verschachtelung](#verschachtelung) weiter unten erörtert.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und synchronem Code ähnelt. Unten ist das gleiche Beispiel mit `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie synchroner Code aussieht, mit Ausnahme der `await`-Schlüsselwörter vor den Promises. Einer der einzigen Kompromisse ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function)-Schlüsselwort zu vergessen, was nur behoben werden kann, wenn es einen Typkonflikt gibt (z.B. der Versuch, ein Promise als Wert zu verwenden).

`async`/`await` baut auf Promises auf — zum Beispiel ist `doSomething()` die gleiche Funktion wie zuvor, daher sind nur minimale Anpassungen nötig, um von Promises zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await`-Syntax in den Referenzen zu [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> [!NOTE] > `async`/`await` hat die gleichen Nebenläufigkeitssemantiken wie normale Promise-Ketten. `await` innerhalb einer async-Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Jobs weiterhin laufen können, während `await` aussteht.

## Fehlerbehandlung

Vielleicht erinnern Sie sich, `failureCallback` dreimal in der Pyramide des Schreckens gesehen zu haben, im Vergleich zu nur einmal am Ende der Promise-Kette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn es eine Ausnahme gibt, sucht der Browser die Kette nach `.catch()`-Handlern oder `onRejected` ab. Dies ist stark daran angelehnt, wie synchroner Code funktioniert:

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

Diese Symmetrie mit asynchronem Code kulminiert in der `async`/`await`-Syntax:

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

Promises lösen einen grundlegenden Fehler mit der Callback-Pyramide des Schreckens, indem sie alle Fehler abfangen, sogar ausgelöste Ausnahmen und Programmierfehler. Dies ist entscheidend für die funktionale Zusammensetzung von asynchronen Operationen. Alle Fehler werden jetzt durch die [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)-Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` ohne `async`/`await` verwenden müssen.

### Verschachtelung

In den obigen Beispielen mit `listOfIngredients` ist das erste ein Promise-Kette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist, während das zweite eine vollständig flache Kette verwendet. Einfache Promise-Ketten sollten ohne Verschachtelung flach gehalten werden, da verschachtelte Ergebnisse das Ergebnis einer unvorsichtigen Komposition sein können.

Verschachtelung ist eine Kontrollstruktur, um den Geltungsbereich von `catch`-Anweisungen zu begrenzen. Konkret fängt ein verschachteltes `catch` nur Fehler in seinem Geltungsbereich und darunter ab, nicht jedoch Fehler, die höher in der Kette außerhalb des verschachtelten Geltungsbereichs auftreten. Bei korrekter Verwendung bietet dies eine größere Genauigkeit bei der Fehlerbehebung:

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

Beachten Sie, dass die optionalen Schritte hier verschachtelt sind — die Verschachtelung erfolgt nicht durch die Einrückung, sondern durch die Platzierung der äußeren Klammern `(` und `)` um die Schritte.

Der innere fehlerunterdrückende `catch`-Handler fängt nur Fehler von `doSomethingOptional()` und `doSomethingExtraNice()` ab, woraufhin der Code mit `moreCriticalStuff()` fortfährt. Wichtig ist, dass wenn `doSomethingCritical()` fehlschlägt, der Fehler nur von dem finalen (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler geschluckt wird.

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
> Wenn Sie keine ausgefeilte Fehlerbehandlung haben, benötigen Sie wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und platzieren Sie die Fehlerbehandlungslogik am Ende.

### Verkettung nach einem Catch

Es ist möglich, _nach_ einem Fehler, also einem `catch`, zu verketten, was nützlich ist, um neue Aktionen auch nach einem Fehler in der Kette zu vermeiden. Lesen Sie das folgende Beispiel:

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
> Der Text "Do this" wird nicht angezeigt, da der Fehler "Something failed" eine Ablehnung verursacht hat.

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

### Promise-Rejektionsereignisse

Wenn ein Promise-Rejektionsereignis von keinem Handler behandelt wird, steigt es in den Aufrufstapel auf, und der Host muss es anzeigen. Im Web werden bei jedem Ablehnen eines Promises zwei Ereignisse an den globalen Umfang gesendet (in der Regel entweder das [`window`](/de/docs/Web/API/Window) oder, falls in einem Web Worker verwendet, ist es der [`Worker`](/de/docs/Web/API/Worker) oder eine andere arbeitsbezogene Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Promise abgelehnt wird, aber kein Ablehnungshandler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein abgelehntes Promise angehängt wird, das bereits ein `unhandledrejection`-Ereignis verursacht hat.

In beiden Fällen hat das Ereignis (des Typs [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise)-Eigenschaft, die das Promise angibt, das abgelehnt wurde, sowie eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason)-Eigenschaft, die den Grund angibt, warum das Promise abgelehnt wurde.

Diese ermöglichen es, ein Rückfallebene bei der Fehlerbehandlung für Promises anzubieten und Probleme mit Ihrem Promise-Management zu debuggen. Diese Handler sind global pro Kontext, sodass alle Fehler zu denselben Ereignishandlern gehen, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} ist die Handhabung von Promise-Ablehnungen etwas anders. Sie fangen nicht behandelte Ablehnungen, indem Sie einen Handler für das Node.js-`unhandledRejection`-Ereignis hinzufügen (beachten Sie die Unterschied im Großbuchstaben des Namens), so:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js reicht es aus, diesen `process.on()`-Listener hinzuzufügen, um zu verhindern, dass der Fehler in die Konsole geloggt wird (die Standardaktion, die sonst auftreten würde); es ist nicht erforderlich, etwas Entsprechendes für die Browser-Laufzeit wie die [`preventDefault()`](/de/docs/Web/API/Event/preventDefault)-Methode zu verwenden.

Wenn Sie diesen `process.on`-Listener jedoch wirklich hinzufügen, aber auch keinen Code darin haben, um abgelehnte Promises zu behandeln, werden Sie einfach auf den Boden fallen und stillschweigend ignoriert. Daher sollten Sie idealerweise Code innerhalb dieses Listeners hinzufügen, um jedes abgelehnte Promise zu untersuchen und sicherzustellen, dass es nicht durch einen tatsächlichen Codefehler verursacht wurde.

## Zusammensetzung

Es gibt vier [Kompositionstools](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency), um asynchrone Operationen gleichzeitig auszuführen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}}, und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und warten, bis sie alle beendet sind, und zwar so:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn einer der Promises im Array abgelehnt wird, lehnt `Promise.all()` das zurückgegebene Promise sofort ab und bricht die anderen Operationen ab. Dies kann zu unerwarteten Zuständen oder Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionstool, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Promises gleichzeitig aus — eine Sequenz von Promises wird gleichzeitig gestartet und wartet nicht aufeinander. Die sequentielle Komposition ist mit cleverem JavaScript möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel [reduzieren](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) wir ein Array von asynchronen Funktionen auf eine Promise-Kette. Der obige Code ist äquivalent zu:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* use result3 */
  });
```

Dies kann in eine wiederverwendbare Compose-Funktion umgewandelt werden, die in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die Funktion `composeAsync()` akzeptiert eine beliebige Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen Anfangswert akzeptiert, der durch die Zusammensetzungs-Pipeline verarbeitet werden soll:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Die sequentielle Komposition kann auch kürzer mit async/await durchgeführt werden:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie jedoch Promises sequentiell zusammensetzen, überlegen Sie, ob es wirklich notwendig ist — es ist immer besser, Promises gleichzeitig auszuführen, sodass sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Promise ist vom Ergebnis eines anderen abhängig.

## Stornierung

`Promise` selbst hat kein erstklassiges Protokoll zur Stornierung, aber Sie können möglicherweise den zugrunde liegenden asynchronen Vorgang direkt stornieren, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellen eines Promises um eine alte Callback-API

Ein {{jsxref("Promise")}} kann von Grund auf mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu umschließen.

In einer idealen Welt würden alle asynchronen Funktionen bereits Promises zurückgeben. Leider erwarten einige APIs immer noch Erfolg und/oder Fehlerrückrufe, die auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die Funktion [`setTimeout()`](/de/docs/Web/API/Window/setTimeout):

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen von alten Rückrufen und Promises ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, fängt nichts es ab. Dies ist intrinsisch in das Design von `setTimeout()` eingebaut.

Glücklicherweise können wir `setTimeout()` in ein Promise einwickeln. Der beste Ansatz ist es, die rückrufakzeptierenden Funktionen auf der niedrigstmöglichen Ebene zu umschließen und dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Promise-Konstruktor nimmt eine Executor-Funktion an, die es uns ermöglicht, ein Promise manuell aufzulösen oder abzulehnen. Da `setTimeout()` tatsächlich nicht fehlschlägt, haben wir in diesem Fall `reject` weggelassen. Weitere Informationen zur Funktionsweise der Executor-Funktion finden Sie in der Referenz [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

## Timing

Schließlich werden wir die technischen Details betrachten, wann die registrierten Rückrufe aufgerufen werden.

### Garantien

In der rückrufbasierten API hängt es vom API-Entwickler ab, wann und wie der Rückruf aufgerufen wird. Zum Beispiel kann der Rückruf synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design wird stark abgeraten, da es zum sogenannten "Zustand von Zalgo" führt. Im Kontext der Gestaltung asynchroner APIs bedeutet dies, dass ein Rückruf in einigen Fällen synchron, in anderen Fällen asynchron aufgerufen wird und somit Ambiguität für den Aufrufer entsteht. Für weitere Hintergrundinformationen siehe den Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), in dem der Begriff erstmals formell vorgestellt wurde. Dieses API-Design macht Seiteneffekte schwer zu analysieren:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Andererseits sind Promises eine Form der [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Entwickler kontrolliert nicht, wann der Rückruf aufgerufen wird. Stattdessen wird die Aufgabe, die Rückrufwarteschlange zu pflegen und zu entscheiden, wann die Rückrufe aufgerufen werden sollen, an die Promise-Implementierung delegiert, und sowohl der API-Nutzer als auch der API-Entwickler erhalten automatisch starke semantische Garantien, einschließlich:

- Rückrufe, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden niemals vor dem [Abschluss des aktuellen Durchlaufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Rückrufe werden aufgerufen, selbst wenn sie _nach_ dem Erfolg oder Fehlerschluss der asynchronen Operation hinzugefügt wurden, die das Promise darstellt.
- Mehrere Rückrufe können durch mehrfache Aufrufe von [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden. Sie werden nacheinander in der Reihenfolge aufgerufen, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst bei bereits aufgelösten Promises:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Statt sofort ausgeführt zu werden, wird die übergebene Funktion in eine Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (erst nachdem die Funktion, die sie erstellt hat, beendet ist, und wenn der JavaScript-Ausführungsstapel leer ist), kurz bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Task-Warteschlangen vs. Microtasks

Promise-Rückrufe werden als [Microtask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/Window/setTimeout)-Rückrufe als Task-Warteschlangen behandelt werden.

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

Für weitere Details siehe [Tasks vs. microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Promises und Tasks kollidieren

Wenn Sie in Situationen geraten, in denen Sie Promises und Tasks (wie Ereignisse oder Rückrufe) haben, die in unvorhersehbarer Reihenfolge ausgelöst werden, kann es möglich sein, dass Sie von der Verwendung einer Microtask profitieren, um den Status zu überprüfen oder Ihre Promises auszugleichen, wenn Promises bedingt erstellt werden.

Wenn Sie glauben, dass Microtasks Ihnen helfen könnten, dieses Problem zu lösen, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden können, um eine Funktion als Microtask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ Spezifikation](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
