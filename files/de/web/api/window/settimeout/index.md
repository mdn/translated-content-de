---
title: "Window: setTimeout()-Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 29d6bb944a1c1fe42eb9957e2a6e5b4f85a2656e
---

{{APIRef("HTML DOM")}}

Die **`setTimeout()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle setzt einen Timer, der eine Funktion oder ein angegebenes Code-Stück ausführt, sobald der Timer abläuft.

## Syntax

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, /* …, */ paramN)
```

### Parameter

- `functionRef`
  - : Eine {{jsxref("function")}}, die ausgeführt wird, nachdem der Timer abläuft.
- `code`
  - : Eine alternative Syntax, die es ermöglicht, einen String anstelle einer Funktion einzuschließen, der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird aus denselben Gründen, die die Nutzung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen, **nicht empfohlen**.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet "sofort" oder genauer gesagt im nächsten Ereigniszyklus ausführen.

    Beachten Sie, dass die tatsächliche Verzögerung in beiden Fällen länger als beabsichtigt sein kann; siehe [Gründe für länger als angegebene Verzögerungen](#gründe_für_länger_als_angegebene_verzögerungen) unten.

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} des Wertes in eine Zahl stillschweigend durchgeführt wird - was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` angegebene Funktion weitergegeben werden.

### Rückgabewert

Die `setTimeout()`-Methode gibt eine positive ganze Zahl zurück (typischerweise im Bereich von 1 bis 2.147.483.647), die den aufgerufenen Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer zu beenden.

Innerhalb derselben globalen Umgebung (z. B. ein bestimmtes Fenster oder Worker) wird die Timeout-ID nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv bleibt. Allerdings unterhalten separate globale Umgebungen ihre eigenen unabhängigen Pools von Timer-IDs.

## Beschreibung

Timeouts werden mit [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) abgebrochen.

Um eine Funktion wiederholt aufzurufen (z. B. alle _N_ Millisekunden), sollten Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) in Betracht ziehen.

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird die implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend durchgeführt, um den Wert in eine Zahl zu konvertieren. Zum Beispiel wird im folgenden Code der String `"1000"` fälschlicherweise als _delay_-Wert verwendet anstelle der Zahl `1000` – aber es funktioniert trotzdem, weil beim Ausführen des Codes der String in die Zahl `1000` umgewandelt wird und der Code somit 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

Aber in vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen. Zum Beispiel wird beim Ausführen des folgenden Codes der String `"1 second"` letztlich in die Zahl `0` umgewandelt – und der Code wird daher sofort, ohne Verzögerung, ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Daher sollten Sie keine Strings für den _delay_-Wert verwenden, sondern immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timerfunktion die Ausführung anderer Funktionen im Funktionsstapel nicht unterbricht. Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" vor dem nächsten Aufruf im Funktionsstapel zu erzeugen.

Siehe folgendes Beispiel:

```js
setTimeout(() => {
  console.log("this is the first message");
}, 5000);
setTimeout(() => {
  console.log("this is the second message");
}, 3000);
setTimeout(() => {
  console.log("this is the third message");
}, 1000);

// Output:

// this is the third message
// this is the second message
// this is the first message
```

Beachten Sie, dass die erste Funktion keine 5-Sekunden-"Pause" erstellt, bevor sie die zweite Funktion aufruft. Stattdessen wird die erste Funktion aufgerufen, aber wartet 5 Sekunden, um ausgeführt zu werden. Während die erste Funktion auf die Ausführung wartet, wird die zweite Funktion aufgerufen und es wird eine 3-Sekunden-Verzögerung auf die zweite Funktion angewendet, bevor sie ausgeführt wird. Da der Timer der ersten und der zweiten Funktion noch nicht abgeschlossen ist, wird die dritte Funktion aufgerufen und zuerst ausgeführt. Danach folgt die zweite. Schließlich wird die erste Funktion nach Ablauf ihres Timers ausgeführt.

Um eine Abfolge zu erstellen, bei der eine Funktion erst nach Abschluss einer anderen Funktion ausgelöst wird, lesen Sie die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise nicht Ihren Erwartungen entspricht. Das allgemeine Problem wird detailliert im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

Der Code, der von `setTimeout()` ausgeführt wird, wird aus einem Ausführungskontext aufgerufen, der sich von der Funktion unterscheidet, aus der `setTimeout` aufgerufen wurde. Die üblichen Regeln für das Einstellen des `this`-Schlüsselworts für die aufgerufene Funktion gelten, und wenn Sie `this` nicht im Aufruf oder mit `bind` einstellen, wird es standardmäßig auf das `window`- (oder `global`-) Objekt gesetzt, selbst im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht dasselbe sein wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat.

Siehe folgendes Beispiel:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das obige funktioniert, weil `myMethod` aufgerufen wird, sein `this` wird durch den Aufruf auf `myArray` gesetzt, daher ist innerhalb der Funktion `this[sProperty]` äquivalent zu `myArray[sProperty]`. In folgendem Fall jedoch:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Die `myArray.myMethod`-Funktion wird an `setTimeout` übergeben, und wenn sie aufgerufen wird, ist ihr `this` nicht gesetzt, daher setzt es sich standardmäßig auf das `window`-Objekt.

Es gibt auch keine Option, einen `thisArg` an `setTimeout` zu übergeben, wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} der Fall ist. Wie unten gezeigt, funktioniert die Verwendung von `call`, um `this` zu setzen, ebenfalls nicht.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwenden Sie eine Wrapper-Funktion

Ein gängiger Weg, um das Problem zu lösen, besteht darin, eine Wrapper-Funktion zu verwenden, die `this` auf den erforderlichen Wert setzt:

```js
setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
setTimeout(function () {
  myArray.myMethod("1");
}, 2.5 * 1000); // prints "one" after 2.5 seconds
```

Die Wrapper-Funktion kann eine Pfeilfunktion sein:

```js
setTimeout(() => {
  myArray.myMethod();
}, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
setTimeout(() => {
  myArray.myMethod("1");
}, 2.5 * 1000); // prints "one" after 2.5 seconds
```

##### Verwenden Sie bind()

Alternativ können Sie {{jsxref("Function.bind()", "bind()")}} verwenden, um den Wert von `this` für alle Aufrufe einer bestimmten Funktion festzulegen:

```js
const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // prints "zero,one,two" because 'this' is bound to myArray in the function
myBoundMethod(1); // prints "one"
setTimeout(myBoundMethod, 1.0 * 1000); // still prints "zero,one,two" after 1 second because of the binding
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // prints "one" after 1.5 seconds
```

### Übergabe von String-Literalen

Das Übergeben eines Strings anstelle einer Funktion an `setTimeout()` hat dasselbe Problem wie die Nutzung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

```js example-bad
// Don't do this
setTimeout("console.log('Hello World!');", 500);
```

```js example-good
// Do this instead
setTimeout(() => {
  console.log("Hello World!");
}, 500);
```

Ein String, der an `setTimeout()` übergeben wird, wird im globalen Kontext ausgewertet, sodass lokale Symbole im Kontext, in dem `setTimeout()` aufgerufen wurde, nicht verfügbar sein werden, wenn der String als Code ausgeführt wird.

### Gründe für länger als angegebene Verzögerungen

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann, als erwartet. Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben, werden Browser einen Mindest-Timeout von 4 Millisekunden erzwingen, sobald ein verschachtelter Aufruf von `setTimeout` 5 Mal geplant wurde.

Dies kann im folgenden Beispiel gesehen werden, bei dem ein Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachtelt wird und die Verzögerung jedes Mal protokolliert wird, wenn der Handler aufgerufen wird. Die ersten vier Male beträgt die Verzögerung ungefähr 0 Millisekunden, und danach beträgt sie ungefähr 4 Millisekunden:

```html
<button id="run">Run</button>
<table>
  <thead>
    <tr>
      <th>Previous</th>
      <th>This</th>
      <th>Actual delay</th>
    </tr>
  </thead>
  <tbody id="log"></tbody>
</table>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // log the time of this call
  log(new Date().getMilliseconds());
  // if we are not finished, schedule the next call
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // clear the log
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // initialize iteration count and the starting timestamp
  iterations = 10;
  last = new Date().getMilliseconds();
  // start timer
  setTimeout(timeout, 0);
}

function log(now) {
  // log the last timestamp, the new timestamp, and the difference
  const tableBody = document.getElementById("log");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = last;
  logRow.insertCell().textContent = now;
  logRow.insertCell().textContent = now - last;
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

```css hidden
* {
  font-family: monospace;
}
th,
td {
  padding: 0 10px 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("Nested_timeouts", 100, 420)}}

#### Timeouts in inaktiven Tabs

Um die Last (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, erzwingen Browser eine minimale Timeout-Verzögerung in inaktiven Tabs. Diese kann auch aufgehoben werden, wenn eine Seite mit einem Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) Sound abspielt.

Die Spezifikationen hierzu sind browserabhängig:

- Firefox Desktop und Chrome haben beide eine Mindest-Timeout-Verzögerung von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat eine Mindest-Timeout-Verzögerung von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden. Wenn sie im Vordergrund laufen, beträgt die Mindestverzögerung für die Drosselung immer noch 4 ms. In Hintergrund-Tabs beträgt die Mindestverzögerung für die Drosselung jedoch 10.000 ms oder 10 Sekunden, die 30 Sekunden nach dem ersten Laden des Dokuments in Kraft tritt.

Weitere Informationen finden Sie unter [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection).

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgeführt werden, wenn die Seite (oder das OS/der Browser) mit anderen Aufgaben beschäftigt ist. Ein wichtiger Fall ist, dass der Funktion oder das Code-Schnipsel nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, abgeschlossen ist. Zum Beispiel:

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

Wird in die Konsole schreiben:

```plain
After setTimeout
foo has been called
```

Dies ist, weil obwohl `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in eine Warteschlange gestellt und zur nächsten Gelegenheit ausgeführt geplant wird, nicht sofort. Der aktuell ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, sodass die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Aufschub von Timeouts während des Seitenladens

Firefox wird `setTimeout()`-Timer während des Ladevorgangs der aktuellen Registerkarte aufschieben. Die Ausführung wird aufgeschoben, bis der Haupt-Thread als inaktiv angesehen wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()`
nicht zuverlässig. Erweiterungsautoren sollten statt dessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)-API verwenden.

### Maximale Verzögerungswert

Browser speichern die Verzögerung intern als 32-Bit-Ganzzahl. Dies führt zu einem Integer-Überlauf, wenn Verzögerungen größer als 2.147.483.647 ms (ca. 24,8 Tage) verwendet werden. So führt zum Beispiel dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

**Hinweis**: Das entspricht nicht dem Verhalten von `setTimeout` in Node.js, wo jedes Timeout größer als 2.147.483.647 ms zu einer sofortigen Ausführung führt.

## Beispiele

### Setzen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Buttons auf einer Webseite ein und verknüpft sie mit den `setTimeout()`- und `clearTimeout()`-Routinen. Das Drücken des ersten Buttons wird ein Timeout setzen, das nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID für den Gebrauch durch `clearTimeout()` speichert. Sie können dieses Timeout optional durch Drücken des zweiten Buttons abbrechen.

#### HTML

```html
<button onclick="delayedMessage();">Show a message after two seconds</button>
<button onclick="clearMessage();">Cancel message before it happens</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "That was really slow!");
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_and_clearing_timeouts')}}

Siehe auch das [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, das das Übergeben von Argumenten an den Callback in `core-js` erlaubt](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
