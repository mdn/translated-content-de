---
title: Versprechen verwenden
slug: Web/JavaScript/Guide/Using_promises
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}

Ein {{jsxref("Promise")}} ist ein Objekt, das die eventuelle Fertigstellung oder das Scheitern einer asynchronen Operation darstellt. Da die meisten Menschen Konsumenten bereits erstellter Versprechen sind, wird in diesem Leitfaden erklärt, wie zurückgegebene Versprechen genutzt werden, bevor erklärt wird, wie man sie erstellt.

Im Wesentlichen ist ein Versprechen ein zurückgegebenes Objekt, dem Sie Rückruffunktionen anhängen, anstatt Rückruffunktionen in eine Funktion zu übergeben. Stellen Sie sich eine Funktion `createAudioFileAsync()` vor, die asynchron eine Audiodatei generiert, basierend auf einem Konfigurationsdatensatz und zwei Rückruffunktionen: eine, die aufgerufen wird, wenn die Audiodatei erfolgreich erstellt wurde, und eine andere, die aufgerufen wird, wenn ein Fehler auftritt.

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

Würde `createAudioFileAsync()` umgeschrieben, um ein Versprechen zurückzugeben, würden Sie Ihre Rückruffunktionen daran anhängen:

```js
createAudioFileAsync(audioSettings).then(successCallback, failureCallback);
```

Diese Konvention hat mehrere Vorteile. Wir werden jeden einzelnen untersuchen.

## Verkettung

Ein häufiges Bedürfnis ist es, zwei oder mehr asynchrone Operationen nacheinander auszuführen, wobei jede nachfolgende Operation beginnt, wenn die vorherige erfolgreich ist, mit dem Ergebnis aus dem vorherigen Schritt. Früher führte das Ausführen mehrerer asynchroner Operationen in Reihe zum klassischen [Callback-Hell](http://callbackhell.com/):

```js-nolint
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

Mit Versprechen erreichen wir dies, indem wir eine Versprechenskette erstellen. Das API-Design von Versprechen macht das großartig, da Rückrufe an das zurückgegebene Versprechen-Objekt angehängt werden, anstatt in eine Funktion übergeben zu werden.

Hier ist das Magische: Die `then()`-Funktion gibt ein **neues Versprechen** zurück, das sich vom ursprünglichen unterscheidet:

```js
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
```

Dieses zweite Versprechen (`promise2`) repräsentiert den Abschluss nicht nur von `doSomething()`, sondern auch der von Ihnen übergebenen `successCallback` oder `failureCallback` — die andere asynchrone Funktionen sein können, die ein Versprechen zurückgeben. In diesem Fall werden alle zu `promise2` hinzugefügten Rückrufe hinter dem von `successCallback` oder `failureCallback` zurückgegebenen Versprechen in eine Warteschlange gesetzt.

> [!NOTE]
> Wenn Sie mit einem funktionierenden Beispiel experimentieren möchten, können Sie die folgende Vorlage verwenden, um eine Funktion zu erstellen, die ein Versprechen zurückgibt:
>
> ```js
> function doSomething() {
>   return new Promise((resolve) => {
>     setTimeout(() => {
>       // Andere Dinge, die vor dem Abschluss des Versprechens zu tun sind
>       console.log("Hat etwas getan");
>       // Der Erfüllungswert des Versprechens
>       resolve("https://example.com/");
>     }, 200);
>   });
> }
> ```
>
> Die Implementierung wird im Abschnitt [Erstellen eines Versprechens um eine alte Rückruf-API](#erstellen_eines_versprechens_um_eine_alte_rückruf-api) unten diskutiert.

Mit diesem Muster können Sie längere Verarbeitungsketten erstellen, wobei jedes Versprechen den Abschluss eines asynchronen Schritts in der Kette darstellt. Zusätzlich sind die Argumente von `then` optional, und `catch(failureCallback)` ist eine Abkürzung für `then(null, failureCallback)` — also, wenn Ihr Fehlerbehandlungscode für alle Schritte gleich ist, können Sie ihn am Ende der Kette anhängen:

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

Möglicherweise sehen Sie dies ausgedrückt mit [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions):

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
> Pfeilfunktionsausdrücke können eine [implizite Rückgabe](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) haben; daher ist `() => x` eine Abkürzung für `() => { return x; }`.

`doSomethingElse` und `doThirdThing` können beliebige Werte zurückgeben — wenn sie Versprechen zurückgeben, wird auf die Erfüllung dieser Versprechen gewartet, und der nächste Rückruf erhält den Erfüllungswert, nicht das Versprechen selbst. Es ist wichtig, immer Versprechen aus `then`-Rückrufen zurückzugeben, selbst wenn das Versprechen sich immer auf `undefined` auflöst. Wenn der vorherige Handler ein Versprechen gestartet hat, es aber nicht zurückgegeben hat, gibt es keine Möglichkeit mehr, seinen Abschluss zu verfolgen, und das Versprechen gilt als "schwebend".

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

Indem wir das Ergebnis des `fetch`-Aufrufs (ein Versprechen) zurückgeben, können wir sowohl seinen Abschluss verfolgen als auch seinen Wert erhalten, wenn es abgeschlossen ist.

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

Schwebende Versprechen könnten schlimmer sein, wenn Sie Rennenbedingungen haben — wenn das Versprechen aus dem letzten Handler nicht zurückgegeben wird, wird der nächste `then`-Handler frühzeitig aufgerufen, und jeder Wert, den er liest, könnte unvollständig sein.

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

Daher gilt als Daumenregel: Immer wenn Ihr Vorgang auf ein Versprechen stößt, geben Sie es zurück und überlassen Sie seine Behandlung dem nächsten `then`-Handler.

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

Noch besser: Sie können die verschachtelte Kette in eine einzelne Kette umwandeln, was einfacher ist und die Fehlerbehandlung erleichtert. Die Details werden im Abschnitt [Nesting](#verschachtelung) weiter unten erläutert.

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

Die Verwendung von [`async`/`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) kann Ihnen helfen, Code zu schreiben, der intuitiver ist und dem synchronen Code ähnelt. Unten ist das gleiche Beispiel mit `async`/`await`:

```js
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
```

Beachten Sie, wie der Code genau wie der synchrone Code aussieht, abgesehen von den `await`-Schlüsselwörtern vor den Versprechen. Einer der wenigen Nachteile ist, dass es leicht sein kann, das [`await`](/de/docs/Web/JavaScript/Reference/Statements/async_function) Schlüsselwort zu vergessen, das nur behoben werden kann, wenn ein Typfehler vorliegt (z.B. das Versprechen wird fälschlicherweise wie ein Wert verwendet).

`async`/`await` baut auf Versprechen auf — zum Beispiel ist `doSomething()` dieselbe Funktion wie vorher, sodass kaum Umstrukturierung benötigt wird, um von Versprechen zu `async`/`await` zu wechseln. Sie können mehr über die `async`/`await` Syntax in den Verweisen zu [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und [`await`](/de/docs/Web/JavaScript/Reference/Operators/await) lesen.

> [!NOTE]
> `async`/`await` hat dieselben Gleichzeitigkeitseigenschaften wie normale Versprechensketten. `await` innerhalb einer asynchronen Funktion stoppt nicht das gesamte Programm, sondern nur die Teile, die von seinem Wert abhängen, sodass andere asynchrone Aufgaben weiterhin ausgeführt werden können, während das `await` ausstehend ist.

## Fehlerbehandlung

Sie erinnern sich vielleicht daran, `failureCallback` dreimal im Pyramiden des Verderbens gesehen zu haben, im Vergleich zu nur einmal am Ende der Versprechenskette:

```js
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`Got the final result: ${finalResult}`))
  .catch(failureCallback);
```

Wenn ein Ausnahmefall auftritt, sucht der Browser in der Kette nach `.catch()`-Handlern oder `onRejected`. Dies ist stark nach dem Modell des synchronen Codes gestaltet:

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

Versprechen lösen einen grundlegenden Fehler in der Rückruf-Pyramide des Verderbens, indem sie alle Fehler abfangen, selbst geworfene Ausnahmen und Programmierfehler. Dies ist entscheidend für die funktionale Komposition von asynchronen Operationen. Alle Fehler werden jetzt durch die [`catch()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) Methode am Ende der Kette behandelt, und Sie sollten fast nie `try`/`catch` ohne die Verwendung von `async`/`await` verwenden.

### Verschachtelung

In den obigen Beispielen mit `listOfIngredientes`, enthält das erste eine Versprechenskette, die im Rückgabewert eines anderen `then()`-Handlers verschachtelt ist, während das zweite eine vollständig flache Kette verwendet. Einfache Versprechensketten sollten flach gehalten werden, ohne Verschachtelung, da Verschachtelung ein Ergebnis sorgloser Zusammensetzung sein kann.

Verschachtelung ist eine Kontrollstruktur, um den Umfang von `catch`-Anweisungen zu begrenzen. Insbesondere fängt ein verschachteltes `catch` nur Fehler in seinem Umfang und darunter ab, nicht jedoch Fehler höher oben in der Kette außerhalb des verschachtelten Umfangs. Werden sie korrekt verwendet, bieten sie eine größere Genauigkeit bei der Fehlerbehebung:

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

Der interne Fehler-silencing `catch`-Handler fängt nur Fehler von `doSomethingOptional()` und `doSomethingExtraNice()` ab, wonach der Code mit `moreCriticalStuff()` fortfährt. Wichtig ist, dass, wenn `doSomethingCritical()` fehlschlägt, sein Fehler nur vom finalen (äußeren) `catch` abgefangen wird und nicht vom inneren `catch`-Handler verschluckt wird.

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
> Wenn Sie keine komplizierte Fehlerbehandlung haben, benötigen Sie wahrscheinlich keine verschachtelten `then`-Handler. Verwenden Sie stattdessen eine flache Kette und fügen Sie die Fehlerbehandlungslogik am Ende hinzu.

### Verkettung nach einem Catch

Es ist möglich, _nach_ einem Fehler zu verketteten, d.h. nach einem `catch`, was nützlich ist, um neue Aktionen auszuführen, selbst nachdem eine Aktion in der Kette fehlgeschlagen ist. Lesen Sie das folgende Beispiel:

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

In `async`/`await`, sieht dieser Code so aus:

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

### Ereignisse der Versprechensablehnung

Wenn ein Versprechen-Ereignis nicht von einem Handler behandelt wird, steigt es bis an die Spitze des Aufrufstapels auf und der Host muss es sichtbar machen. Im Web wird bei Ablehnung eines Versprechens eines von zwei Ereignissen an den globalen Bereich gesendet (normalerweise ist dies entweder das [`window`](/de/docs/Web/API/Window) oder, wenn es in einem Web-Worker verwendet wird, der [`Worker`](/de/docs/Web/API/Worker) oder eine andere Worker-basierte Schnittstelle). Die beiden Ereignisse sind:

- [`unhandledrejection`](/de/docs/Web/API/Window/unhandledrejection_event)
  - : Wird gesendet, wenn ein Versprechen abgelehnt wird, aber kein Ablehnungs-Handler verfügbar ist.
- [`rejectionhandled`](/de/docs/Web/API/Window/rejectionhandled_event)
  - : Wird gesendet, wenn ein Handler an ein bereits abgelehntes Versprechen angehängt wird, das bereits ein `unhandledrejection` Ereignis verursacht hat.

In beiden Fällen hat das Ereignis (vom Typ [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)) als Mitglieder eine [`promise`](/de/docs/Web/API/PromiseRejectionEvent/promise) Eigenschaft, die das abgelehnte Versprechen angibt, und eine [`reason`](/de/docs/Web/API/PromiseRejectionEvent/reason) Eigenschaft, die den Grund angibt, warum das Versprechen abgelehnt wurde.

Diese ermöglichen es, eine alternative Fehlerbehandlung für Versprechen anzubieten sowie Probleme mit Ihrem Versprechensmanagement beim Debuggen zu helfen. Diese Handler sind global pro Kontext, sodass alle Fehler an dieselben Event-Handler gehen, unabhängig von der Quelle.

In {{Glossary("Node.js", "Node.js")}} unterscheidet sich die Behandlung von Versprechensablehnungen leicht. Sie erfassen unbehandelte Ablehnungen, indem Sie einen Handler für das Node.js `unhandledRejection` Ereignis hinzufügen (beachten Sie den Unterschied in der Großschreibung des Namens), so:

```js
process.on("unhandledRejection", (reason, promise) => {
  // Add code here to examine the "promise" and "reason" values
});
```

Für Node.js ist es, um zu verhindern, dass der Fehler in der Konsole protokolliert wird (die Standardeinstellung), lediglich notwendig, diesen `process.on()` Listener hinzuzufügen; es gibt keinen Bedarf für ein Äquivalent zur [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) Methode der Browser-Laufzeitumgebung.

Wenn Sie jedoch diesen `process.on` Listener hinzufügen, aber keinen Code darin haben, um abgelehnte Versprechen zu bearbeiten, werden sie einfach unter den Teppich gekehrt und stillschweigend ignoriert. Daher sollten Sie idealerweise Code in diesen Listener einfügen, um jedes abgelehnte Versprechen zu prüfen und sicherzustellen, dass es nicht von einem tatsächlichen Programmfehler verursacht wurde.

## Komposition

Es gibt vier [Kompositionstools](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise#promise_concurrency) zum gleichzeitigen Ausführen asynchroner Operationen: {{jsxref("Promise.all()")}}, {{jsxref("Promise.allSettled()")}}, {{jsxref("Promise.any()")}} und {{jsxref("Promise.race()")}}.

Wir können Operationen gleichzeitig starten und auf deren Abschluss warten, wie folgt:

```js
Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  // use result1, result2 and result3
});
```

Wenn eines der Versprechen im Array ablehnt, lehnt `Promise.all()` sofort das zurückgegebene Versprechen ab und bricht die anderen Operationen ab. Dies kann zu unerwarteten Zuständen oder Verhalten führen. {{jsxref("Promise.allSettled()")}} ist ein weiteres Kompositionstool, das sicherstellt, dass alle Operationen abgeschlossen sind, bevor es aufgelöst wird.

Diese Methoden führen alle Versprechen gleichzeitig aus — eine Abfolge von Versprechen wird gleichzeitig gestartet und wartet nicht aufeinander. Die sequenzielle Komposition ist mit etwas cleverem JavaScript möglich:

```js
[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* use result3 */
  });
```

In diesem Beispiel reduzieren wir ein Array von asynchronen Funktionen auf eine Versprechenskette. Der oben stehende Code ist äquivalent zu:

```js
Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* use result3 */
  });
```

Dies kann in eine wiederverwendbare Komplexitätsfunktion umgewandelt werden, die in der funktionalen Programmierung üblich ist:

```js
const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
  (x) =>
    funcs.reduce(applyAsync, Promise.resolve(x));
```

Die `composeAsync()` Funktion akzeptiert eine beliebige Anzahl von Funktionen als Argumente und gibt eine neue Funktion zurück, die einen initialen Wert akzeptiert, der durch die Kompositionspipeline geleitet werden kann:

```js
const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);
```

Die sequenzielle Komposition kann auch prägnanter mit async/await erfolgen:

```js
let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */
```

Bevor Sie Versprechen jedoch sequenziell kombinieren, überlegen Sie, ob es wirklich notwendig ist — es ist immer besser, Versprechen gleichzeitig auszuführen, damit sie sich nicht unnötig blockieren, es sei denn, die Ausführung eines Versprechens hängt vom Ergebnis eines anderen ab.

## Stornierung

Das `Promise` selbst hat kein erstklassiges Protokoll für die Stornierung, aber Sie können möglicherweise das zugrunde liegende asynchrone Verfahren direkt stornieren, typischerweise mit [`AbortController`](/de/docs/Web/API/AbortController).

## Erstellen eines Versprechens um eine alte Rückruf-API

Ein {{jsxref("Promise")}} kann von Grund auf mit seinem [Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) erstellt werden. Dies sollte nur erforderlich sein, um alte APIs zu umwickeln.

In einer idealen Welt würden alle asynchronen Funktionen bereits Versprechen zurückgeben. Leider erwarten einige APIs immer noch, dass Erfolgs- und/oder Fehler-Rückrufe auf die alte Weise übergeben werden. Das offensichtlichste Beispiel ist die [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Funktion:

```js
setTimeout(() => saySomething("10 seconds passed"), 10 * 1000);
```

Das Mischen alter Rückrufe und Versprechen ist problematisch. Wenn `saySomething()` fehlschlägt oder einen Programmierfehler enthält, fängt nichts dies ab. Dies ist im Design von `setTimeout()` verankert.

Zum Glück können wir `setTimeout()` in einem Versprechen umwickeln. Die beste Praxis ist es, die Rückruf-empfangenden Funktionen auf der niedrigsten möglichen Ebene zu umwickeln und sie dann nie wieder direkt aufzurufen:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 seconds"))
  .catch(failureCallback);
```

Der Versprechenkonstruktor benötigt eine Executor-Funktion, die uns erlaubt, ein Versprechen manuell zu lösen oder abzulehnen. Da `setTimeout()` nicht wirklich fehlschlägt, haben wir `reject` in diesem Fall weggelassen. Für weitere Informationen zu den Funktionsweisen der Executor-Funktion siehe die [`Promise()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) Referenz.

## Timing

Abschließend betrachten wir die technischeren Details darüber, wann die registrierten Rückrufe aufgerufen werden.

### Garantien

In der rückrufbasierten API hängt es vom API-Implementierer ab, wann und wie der Rückruf aufgerufen wird. Beispielsweise kann der Rückruf synchron oder asynchron aufgerufen werden:

```js example-bad
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}
```

Das obige Design wird stark abgeraten, da es zum sogenannten "Zustand von Zalgo" führt. Im Kontext des Entwerfens asynchroner APIs bedeutet dies, dass ein Rückruf in einigen Fällen synchron, in anderen asynchron aufgerufen wird, was für den Aufrufer Unklarheit schafft. Weitere Hintergrundinformationen finden Sie im Artikel [Designing APIs for Asynchrony](https://blog.izs.me/2013/08/designing-apis-for-asynchrony/), wo der Begriff erstmals formal präsentiert wurde. Dieses API-Design macht Seiteneffekte schwer zu analysieren:

```js
let value = 1;
doSomething(() => {
  value = 2;
});
console.log(value); // 1 or 2?
```

Versprechen hingegen sind eine Form der [Kontrollumkehr](https://en.wikipedia.org/wiki/Inversion_of_control) — der API-Implementierer kontrolliert nicht, wann der Rückruf aufgerufen wird. Stattdessen wird die Aufgabe, die Rückrufwarteschlange zu pflegen und zu entscheiden, wann die Rückrufe aufgerufen werden, der Versprechen-Implementierung überlassen, und sowohl der API-Benutzer als auch der API-Entwickler erhalten automatisch starke Semantik-Garantien, einschließlich:

- Rückrufe, die mit [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) hinzugefügt werden, werden niemals vor dem [Abschluss des aktuellen Ablaufs](/de/docs/Web/JavaScript/Reference/Execution_model#run-to-completion) der JavaScript-Ereignisschleife aufgerufen.
- Diese Rückrufe werden aufgerufen, selbst wenn sie hinzugefügt wurden, _nachdem_ der Erfolg oder das Scheitern der asynchronen Operation, die das Versprechen darstellt, abgeschlossen wurde.
- Es können mehrere Rückrufe hinzugefügt werden, indem [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) mehrere Male aufgerufen wird. Sie werden nacheinander aufgerufen, in der Reihenfolge, in der sie eingefügt wurden.

Um Überraschungen zu vermeiden, werden Funktionen, die an [`then()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) übergeben werden, niemals synchron aufgerufen, selbst bei einem bereits aufgelösten Versprechen:

```js
Promise.resolve().then(() => console.log(2));
console.log(1);
// Logs: 1, 2
```

Anstatt sofort zu laufen, wird die übergebene Funktion in die Microtask-Warteschlange gestellt, was bedeutet, dass sie später ausgeführt wird (nur nach dem Verlassen der Funktion, die sie erstellt hat, und wenn der JavaScript-Ausführungsstapel leer ist), direkt bevor die Kontrolle an die Ereignisschleife zurückgegeben wird; d.h. ziemlich bald:

```js
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4
```

### Aufgabenwarteschlangen vs. Mikrotasks

Versprechen-Rückrufe werden als [Microtask](/de/docs/Web/API/HTML_DOM_API/Microtask_guide) behandelt, während [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) Rückrufe als Aufgabenwarteschlangen behandelt werden.

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

Weitere Details finden Sie unter [Tasks vs. microtasks](/de/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth#tasks_vs._microtasks).

### Wenn Versprechen und Aufgaben kollidieren

Wenn Sie auf Situationen stoßen, in denen Sie Versprechen und Aufgaben (wie Ereignisse oder Rückrufe) haben, die in unvorhersehbaren Reihenfolgen ausgelöst werden, könnte es hilfreich sein, eine Microtask zu verwenden, um den Status zu überprüfen oder Ihre Versprechen auszugleichen, wenn Versprechen bedingt erstellt werden.

Wenn Sie glauben, dass Microtasks helfen könnten, dieses Problem zu lösen, lesen Sie den [Microtask-Leitfaden](/de/docs/Web/API/HTML_DOM_API/Microtask_guide), um mehr darüber zu erfahren, wie Sie [`queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask) verwenden können, um eine Funktion als eine Microtask in die Warteschlange zu stellen.

## Siehe auch

- {{jsxref("Promise")}}
- {{jsxref("Statements/async_function", "async function")}}
- {{jsxref("Operators/await", "await")}}
- [Promises/A+ specification](https://promisesaplus.com/)
- [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) auf pouchdb.com (2015)

{{PreviousNext("Web/JavaScript/Guide/Using_classes", "Web/JavaScript/Guide/Typed_arrays")}}
