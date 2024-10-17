---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("HTML DOM")}}

Die **`setTimeout()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle setzt einen Timer, der eine Funktion oder ein angegebenes Codefragment ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("function")}}, die nach Ablauf des Timers ausgeführt werden soll.
- `code`
  - : Eine alternative Syntax, die es Ihnen erlaubt, einen String anstelle einer Funktion einzuschließen, der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird **nicht empfohlen** wegen derselben Sicherheitsrisiken, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} mit sich bringt.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird. Wenn dieses Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet, "sofort" ausführen, oder genauer, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger als beabsichtigt sein kann; siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) unten.

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend auf den Wert angewendet wird, um ihn in eine Zahl zu konvertieren – was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-Zahlen-Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-zahlen-verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die Funktion übergeben werden, die von `functionRef` spezifiziert wird.

### Rückgabewert

Der zurückgegebene `timeoutID` ist ein positiver ganzzahliger Wert, der
den Timer identifiziert, der durch den Aufruf von `setTimeout()` erstellt wurde. Dieser Wert kann
an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timeout zu
stornieren.

Es ist garantiert, dass ein `timeoutID`-Wert niemals durch einen nachfolgenden Aufruf von `setTimeout()` oder `setInterval()` im selben Fenster wiederverwendet wird, solange der Timer noch aktiv ist. Unterschiedliche Objekte verwenden jedoch separate ID-Pools.

## Beschreibung

Timeouts werden mit [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) abgebrochen.

Um eine Funktion wiederholt aufzurufen (z.B. alle _N_ Millisekunden), ziehen Sie die Verwendung von [`setInterval()`](/de/docs/Web/API/Window/setInterval) in Betracht.

### Nicht-Zahlen-Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird die implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend auf den Wert angewendet, um ihn in eine Zahl zu konvertieren. Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_-Wert anstelle der Zahl `1000` – aber er funktioniert dennoch, weil beim Ausführen des Codes der String in die Zahl `1000` umgewandelt wird, und der Code daher 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

Aber in vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen. Wenn z.B. der folgende Code ausgeführt wird, wird der String `"1 second"` letztendlich in die Zahl `0` umgewandelt – und der Code wird sofort mit einer Verzögerung von null ausgeführt.

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

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timerfunktion die Ausführung anderer Funktionen im Funktionsstapel nicht pausieren wird.
Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" zu erstellen, bevor die nächste Funktion im Funktionsstapel ausgelöst wird.

Siehe das folgende Beispiel:

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

Beachten Sie, dass die erste Funktion keine 5-Sekunden-"Pause" erstellt, bevor die zweite Funktion aufgerufen wird. Stattdessen wird die erste Funktion aufgerufen, wartet jedoch 5 Sekunden auf die Ausführung. Während die erste Funktion auf die Ausführung wartet, wird die zweite Funktion aufgerufen, und es wird eine 3-Sekunden-Wartezeit auf die zweite Funktion angewendet, bevor sie ausgeführt wird. Da weder der Timer der ersten noch der der zweiten Funktion abgeschlossen ist, wird die dritte Funktion zuerst aufgerufen und abgeschlossen. Dann folgt die zweite. Schließlich wird die erste Funktion nach Abschluss ihres Timers ausgeführt.

Um eine Abfolge zu erstellen, bei der eine Funktion nur nach Abschluss einer anderen Funktion ausgelöst wird, lesen Sie die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise nicht Ihrer Erwartung entspricht. Das allgemeine Problem wird im [JavaScript-Referenzdokument](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Der von `setTimeout()` ausgeführte Code wird aus einem Ausführungskontext aufgerufen, der von der Funktion getrennt ist, von der `setTimeout` aufgerufen wurde. Die üblichen Regeln für das Festlegen des `this`-Schlüsselworts für die aufgerufene Funktion gelten, und wenn Sie `this` nicht im Aufruf oder mit `bind` festgelegt haben, wird es standardmäßig auf das `window` (oder `global`) Objekt gesetzt, selbst im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es ist nicht der gleiche `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat.

Siehe das folgende Beispiel:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das obige funktioniert, weil, wenn `myMethod` aufgerufen wird, dessen `this` durch den Aufruf auf `myArray` gesetzt wird, so dass innerhalb der Funktion `this[sProperty]` gleich `myArray[sProperty]` ist. Jedoch im Folgenden:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Die Funktion `myArray.myMethod` wird an `setTimeout` übergeben, und wenn sie aufgerufen wird, ist `this` nicht gesetzt, also wird es standardmäßig auf das `window`-Objekt gesetzt.

Es gibt auch keine Option, ein `thisArg` an `setTimeout` zu übergeben, wie es in Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} möglich ist. Wie unten gezeigt, funktioniert das Verwenden von `call`, um `this` zu setzen, auch nicht.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwenden Sie eine Wrapper-Funktion

Eine gängige Möglichkeit, das Problem zu lösen, ist die Verwendung einer Wrapper-Funktion, die `this` auf den erforderlichen Wert setzt:

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

Das Übergeben eines Strings anstelle einer Funktion an `setTimeout()` hat dieselben Probleme wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

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

Ein an `setTimeout()` übergebener String wird im globalen Kontext ausgewertet, so dass lokale Symbole im Kontext, in dem `setTimeout()` aufgerufen wurde, nicht verfügbar sind, wenn der String als Code ausgewertet wird.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger als erwartet ausgelöst werden kann.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben,
werden Browser ab einer verschachtelten Aufrufhöhe von 5 Aufrufen von `setTimeout` eine Mindesttimeout von 4 Millisekunden erzwingen.

Das kann man im folgenden Beispiel sehen, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln,
und die Verzögerung bei jedem Aufruf der Handler-Funktion protokollieren. Die ersten vier Male beträgt die Verzögerung etwa 0 Millisekunden, danach etwa 4 Millisekunden:

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

Um die Last (und den damit verbundenen Batteriegebrauch) von Hintergrundtabs zu reduzieren, erzwingen Browser
eine Mindesttimeout-Verzögerung in inaktiven Tabs. Dies kann aufgehoben werden, wenn eine Seite Ton über eine Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Einzelheiten hierzu sind browserabhängig:

- Firefox Desktop und Chrome haben eine Mindesttimeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat eine Mindesttimeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.

#### Drosselung von Tracking-Skripten

Firefox erzwingt eine zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Wenn sie im Vordergrund ausgeführt werden, beträgt die minimale Drosselungsverzögerung trotzdem 4 ms. In Hintergrundtabs beträgt die minimale Drosselungsverzögerung jedoch 10,000 ms oder 10 Sekunden, die 30 Sekunden nachdem ein Dokument erstmals geladen wurde, in Kraft tritt.

Weitere Details finden Sie unter [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection).

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall, den es zu beachten gilt, ist, dass die Funktion oder der Codeschnipsel nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

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

Dies liegt daran, dass, obwohl `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in eine Warteschlange gestellt und beim nächsten geeigneten Zeitpunkt eingeplant wird; nicht sofort.
Aktuell ausgeführter Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, sodass die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Aufschub von Timeouts während des Seitenladens

Firefox wird `setTimeout()`-Timer verzögern, während der aktuelle Tab geladen wird. Die Auslösung wird verschoben, bis der Hauptthread als
inaktiv betrachtet wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)),
oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()`
nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
API verwenden.

### Maximale Verzögerungswert

Browser speichern die Verzögerung intern als 32-Bit-ganzzahliger Wert. Dies führt zu einem Ganzzahlüberlauf bei Verwendung von Verzögerungen, die größer als 2.147.483.647 ms (etwa 24,8 Tage) sind. So führt zum Beispiel dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass das Timeout nach etwa 5 Sekunden ausgeführt wird.

**Hinweis**: Das entspricht nicht dem Verhalten von `setTimeout` in Node.js, wo ein Timeout, das größer als 2.147.483.647 ms ist,
zu einer sofortigen Ausführung führt.

## Beispiele

### Setzen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen in einem Webdokument ein und verbindet sie mit den
`setTimeout()`- und `clearTimeout()`-Routinen. Durch Drücken der ersten
Schaltfläche wird ein Timeout eingestellt, das eine Nachricht nach zwei Sekunden anzeigt und die
Timeout-ID für die Verwendung durch `clearTimeout()` speichert. Sie können optional diesen
Timeout abbrechen, indem Sie auf die zweite Schaltfläche drücken.

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

Siehe auch das Beispiel zu [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `setTimeout`, das das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
