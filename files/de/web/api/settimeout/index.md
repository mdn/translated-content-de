---
title: setTimeout() globale Funktion
short-title: setTimeout()
slug: Web/API/setTimeout
l10n:
  sourceCommit: 5fc275a2cb01ea3c361d6a0af057e96a00122984
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale Methode **`setTimeout()`** setzt einen Timer, der eine Funktion oder ein spezifiziertes Code-Stück einmal ausführt, sobald der Timer abgelaufen ist.

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
  - : Eine alternative Syntax, die Ihnen ermöglicht, einen String anstelle einer Funktion einzuschließen, welcher kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird aus den gleichen Gründen **nicht empfohlen**, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der angegebene Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was "sofort" bedeutet, oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger als beabsichtigt sein kann; siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) unten.

    Beachten Sie auch, dass wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} stillschweigend auf den Wert angewendet wird, um ihn in eine Zahl zu konvertieren — was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nichtzahl Verzögerungswerte werden stillschweigend in Zahlen konvertiert](#nichtzahl_verzögerungswerte_werden_stillschweigend_in_zahlen_konvertiert) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` spezifizierte Funktion übergeben werden.

### Rückgabewert

Der zurückgegebene `timeoutID` ist ein positiver Ganzzahlenwert, der den durch den Aufruf von `setTimeout()` erstellten Timer identifiziert. Dieser Wert kann an [`clearTimeout()`](/de/docs/Web/API/ClearTimeout) übergeben werden, um das Timeout abzubrechen.

Es ist garantiert, dass ein `timeoutID`-Wert niemals von einem nachfolgenden Aufruf von `setTimeout()` oder `setInterval()` auf demselben Objekt (ein Fenster oder ein Arbeiter) wiederverwendet wird, solange der Timer noch aktiv ist. Verschiedene Objekte verwenden jedoch separate ID-Pools.

## Beschreibung

Timeouts werden mit
[`clearTimeout()`](/de/docs/Web/API/ClearTimeout) abgebrochen.

Um eine Funktion wiederholt (z.B. alle _N_ Millisekunden) aufzurufen, verwenden Sie `setInterval()`](/de/docs/Web/API/SetInterval).

### Nichtzahl Verzögerungswerte werden stillschweigend in Zahlen konvertiert

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} stillschweigend angewendet, um den Wert in eine Zahl zu konvertieren. Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_ Wert, anstatt die Zahl `1000` – aber es funktioniert trotzdem, weil beim Ausführen des Codes der String erzwungen in die Zahl `1000` umgewandelt wird und so der Code 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typkonvertierung jedoch zu unerwarteten und überraschenden Ergebnissen führen. Zum Beispiel wird der String `"1 second"` letztendlich in die Zahl `0` umgewandelt, wodurch der Code sofort ausgeführt wird, mit null Verzögerung.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Daher sollten Sie keine Strings für den _delay_ Wert verwenden, sondern immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timerfunktion die Ausführung anderer Funktionen im Funktionsstapel nicht pausiert.
Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" zu erstellen, bevor die nächste Funktion im Funktionsstapel ausgeführt wird.

Sehen Sie sich das folgende Beispiel an:

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

Beachten Sie, dass die erste Funktion keine 5-sekündige "Pause" erstellt, bevor sie die zweite Funktion aufruft. Stattdessen wird die erste Funktion aufgerufen, wartet jedoch 5 Sekunden, bis sie ausgeführt wird. Während die erste Funktion wartet, wird die zweite Funktion aufgerufen, und eine 3-sekündige Wartezeit wird auf die zweite Funktion angewendet, bevor sie ausgeführt wird. Da weder der Timer der ersten noch der zweiten Funktion abgeschlossen ist, wird die dritte Funktion aufgerufen und zuerst abgeschlossen. Dann folgt die zweite. Schließlich wird die erste Funktion ausgeführt, nachdem ihr Timer endlich abgeschlossen ist.

Um eine Abfolge zu erstellen, in der eine Funktion erst nach Abschluss einer anderen Funktion ausgelöst wird, sehen Sie sich die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) an.

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise nicht Ihrer Erwartung entspricht. Das allgemeine Problem wird im [JavaScript-Referenzwerk](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erläutert.

Code, der von `setTimeout()` ausgeführt wird, wird aus einem separaten Ausführungskontext aufgerufen als die Funktion, von der `setTimeout` aufgerufen wurde. Die üblichen Regeln für das Setzen des Schlüsselworts `this` für die aufgerufene Funktion gelten. Wenn Sie `this` im Aufruf oder mit `bind` nicht gesetzt haben, wird es standardmäßig auf das `window` (oder `global`) Objekt gesetzt, auch im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht dasselbe sein wie der `this` Wert für die Funktion, die `setTimeout` aufgerufen hat.

Sehen Sie sich das folgende Beispiel an:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das oben Genannte funktioniert, weil, wenn `myMethod` aufgerufen wird, sein `this` durch den Aufruf auf `myArray` gesetzt wird, so dass innerhalb der Funktion `this[sProperty]` gleich `myArray[sProperty]` ist. Jedoch im Folgenden:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Die Funktion `myArray.myMethod` wird an `setTimeout` übergeben, und wenn sie aufgerufen wird, wird ihr `this` nicht gesetzt, sodass es standardmäßig auf das `window` Objekt gesetzt wird.

Es gibt auch keine Möglichkeit, ein `thisArg` an `setTimeout` zu übergeben, wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} der Fall ist. Wie unten gezeigt, funktioniert auch die Verwendung von `call`, um `this` zu setzen, nicht.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwenden Sie eine Wrapper-Funktion

Eine häufige Methode, um das Problem zu lösen, ist die Verwendung einer Wrapper-Funktion, die `this` auf den erforderlichen Wert setzt:

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

### Übergeben von String-Literalen

Das Übergeben eines Strings anstelle einer Funktion an `setTimeout()` hat die gleichen Probleme wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

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

Ein String, der an `setTimeout()` übergeben wird, wird im globalen Kontext ausgewertet, sodass lokale Symbole im Kontext, in dem `setTimeout()` aufgerufen wurde, nicht verfügbar sind, wenn der String als Code ausgewertet wird.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann, als erwartet. Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) festgelegt, erzwingen Browser ein Mindesttimeout von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` fünfmal geplant wurde.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird. Die ersten vier Mal beträgt die Verzögerung ungefähr 0 Millisekunden, und danach sind es ungefähr 4 Millisekunden:

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
  logline(new Date().getMilliseconds());
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

function logline(now) {
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

Um die Last (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, erzwingen Browser ein Mindesttimeout in inaktiven Tabs. Dies kann auch aufgehoben werden, wenn eine Seite Sound mit einem Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Details dazu sind browserabhängig:

- Firefox Desktop und Chrome haben beide ein Mindesttimeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat ein Mindesttimeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die es als Tracking-Skripte erkennt. Beim Ausführen im Vordergrund beträgt die Mindestverzögerung bei der Drosselung immer noch 4 ms. In Hintergrund-Tabs beträgt die Mindestverzögerung bei der Drosselung jedoch 10.000 ms oder 10 Sekunden, was 30 Sekunden nach dem ersten Laden eines Dokuments wirksam wird.

Siehe [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection) für weitere Details.

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgeführt werden, wenn die Seite (oder das OS/der Browser) mit anderen Aufgaben beschäftigt ist. Ein wichtiger Fall ist, dass die Funktion oder der Code-Schnipsel nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

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

Dies liegt daran, dass auch wenn `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in eine Warteschlange gestellt und beim nächsten Gelegenheitstermin geplant wird; nicht sofort. Der derzeit ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, sodass die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ausfällt.

#### Aufschub von Timeouts während des Seitenladens

Firefox wird `setTimeout()` Timer aufschieben, während der aktuelle Tab lädt. Das Auslösen wird aufgeschoben, bis der Hauptthread als untätig angesehen wird (ähnlich wie [window.requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Ladeereignis ausgelöst wird.

### WebExtension Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API verwenden.

### Maximale Verzögerungswert

Browser speichern die Verzögerung intern als 32-Bit vorzeichenbehaftete Ganzzahl. Dies führt zu einem Integerüberlauf, wenn Verzögerungen größer als 2.147.483.647 ms (etwa 24,8 Tage) verwendet werden. So führt zum Beispiel dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

...dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

...dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

**Hinweis**: Dies entspricht nicht dem Verhalten von `setTimeout` in Node.js, wo jedes Timeout größer als 2.147.483.647 ms zu einer sofortigen Ausführung führt.

## Beispiele

### Timer setzen und löschen

Das folgende Beispiel richtet zwei einfache Schaltflächen auf einer Webseite ein und bindet sie an die Routinen `setTimeout()` und `clearTimeout()`. Durch Drücken der ersten Schaltfläche wird ein Timeout eingerichtet, welches nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID zur Verwendung durch `clearTimeout()` speichert. Sie können dieses Timeout optional abbrechen, indem Sie die zweite Schaltfläche drücken.

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

Siehe auch das [`clearTimeout()` Beispiel](/de/docs/Web/API/clearTimeout#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, der das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`clearTimeout`](/de/docs/Web/API/ClearTimeout)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`Window.requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
