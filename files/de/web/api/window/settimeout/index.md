---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

Die **`setTimeout()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle setzt einen Timer, der eine Funktion oder einen bestimmten Code ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("function")}}, die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Eine alternative Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion einzuschließen, der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird **nicht empfohlen**, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der angegebene Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet, "sofort" auszuführen oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in jedem Fall die tatsächliche Verzögerung länger als beabsichtigt sein kann; siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_verzögerungen_länger_als_angegeben) unten.

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend auf den Wert angewendet wird, um ihn in eine Zahl umzuwandeln – was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-Zahlen-verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-zahlen-verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` angegebene Funktion übergeben werden.

### Rückgabewert

Die zurückgegebene `timeoutID` ist ein positiver ganzzahliger Wert, der den durch den `setTimeout()`-Aufruf erstellten Timer identifiziert. Dieser Wert kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Es ist garantiert, dass ein `timeoutID`-Wert niemals von einem nachfolgenden Aufruf von `setTimeout()` oder `setInterval()` am selben Fenster wiederverwendet wird, solange der Timer noch aktiv ist. Allerdings verwenden verschiedene Objekte separate ID-Pools.

## Beschreibung

Timeouts werden mit [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) abgebrochen.

Um eine Funktion wiederholt (z. B. alle _N_ Millisekunden) aufzurufen, sollten Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) in Betracht ziehen.

### Nicht-Zahlen-verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend auf den Wert angewendet, um ihn in eine Zahl umzuwandeln. Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_-Wert, anstelle der Zahl `1000` – aber es funktioniert trotzdem, weil, wenn der Code ausgeführt wird, der String in die Zahl `1000` umgewandelt wird und der Code somit 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

Aber in vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen. Zum Beispiel wird, wenn der folgende Code ausgeführt wird, der String `"1 second"` letztendlich in die Zahl `0` umgewandelt — und daher wird der Code sofort, ohne Verzögerung, ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Verwenden Sie daher keine Strings für den _delay_-Wert, sondern immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Umgang mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timerfunktion die Ausführung anderer Funktionen im Funktionsstapel nicht pausieren wird. Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" vor der nächsten Funktion im Funktionsstapel zu erstellen.

Betrachten Sie das folgende Beispiel:

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

Beachten Sie, dass die erste Funktion keine 5-Sekunden-"Pause" erstellt, bevor die zweite Funktion aufgerufen wird. Stattdessen wird die erste Funktion aufgerufen, wartet aber 5 Sekunden, bevor sie ausgeführt wird. Während die erste Funktion darauf wartet, ausgeführt zu werden, wird die zweite Funktion aufgerufen, und eine 3-Sekunden-Wartezeit wird auf diese Funktion angewendet. Da weder der erste noch der zweite Funktionstimer abgeschlossen sind, wird die dritte Funktion aufgerufen und abgeschlossen, bevor ihre Ausführung beginnt. Dann folgt die zweite. Schließlich wird die erste Funktion nach Abschluss ihrer Wartezeit ausgeführt.

Um eine Reihenfolge zu erstellen, bei der eine Funktion erst nach Abschluss einer anderen Funktion ausgelöst wird, siehe die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise von Ihrer Erwartung abweicht. Das allgemeine Problem wird detailliert im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

Code, der von `setTimeout()` ausgeführt wird, wird aus einem Ausführungskontext aufgerufen, der von der Funktion getrennt ist, aus der `setTimeout` aufgerufen wurde. Die üblichen Regeln zum Setzen des `this`-Schlüsselworts für die aufgerufene Funktion gelten und wenn Sie `this` nicht im Aufruf oder mit `bind` gesetzt haben, wird es standardmäßig das `window` (oder `global`) Objekt sein, selbst im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht derselbe `this`-Wert sein wie für die Funktion, die `setTimeout` aufgerufen hat.

Sehen Sie das folgende Beispiel:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das obige funktioniert, weil, wenn `myMethod` aufgerufen wird, sein `this` durch den Aufruf auf `myArray` gesetzt wird, sodass innerhalb der Funktion `this[sProperty]` gleich `myArray[sProperty]` ist. In dem folgenden Fall jedoch:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Wird die Funktion `myArray.myMethod` an `setTimeout` übergeben, dann wird, wenn sie aufgerufen wird, ihr `this` nicht gesetzt, sodass es standardmäßig das `window` Objekt ist.

Es gibt auch keine Möglichkeit, ein `thisArg` an `setTimeout` zu übergeben, so wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} der Fall ist. Wie unten gezeigt, funktioniert auch das Verwenden von `call`, um `this` zu setzen, nicht.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwenden Sie eine Wrapper-Funktion

Eine übliche Methode, das Problem zu lösen, ist die Verwendung einer Wrapper-Funktion, die `this` auf den erforderlichen Wert setzt:

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

##### Verwenden von bind()

Alternativ können Sie {{jsxref("Function.bind()", "bind()")}} verwenden, um den Wert von `this` für alle Aufrufe einer bestimmten Funktion zu setzen:

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

### Übergabe von Zeichenfolgenliteralen

Die Übergabe eines Strings anstelle einer Funktion an `setTimeout()` hat dieselben Probleme wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

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

### Gründe für Verzögerungen länger als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann, bis es ausgelöst wird, als erwartet. Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) festgelegt, erzwingen Browser ein Mindest-Timeout von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` 5-mal geplant wurde.

Dies ist im folgenden Beispiel zu sehen, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird. Die ersten vier Mal beträgt die Verzögerung ungefähr 0 Millisekunden, danach etwa 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, erzwingen Browser eine minimale Timeout-Verzögerung in inaktiven Tabs. Es kann auch verzichtet werden, wenn eine Seite mit einem Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) Klänge abspielt.

Die Einzelheiten dazu sind browserabhängig:

- Firefox Desktop und Chrome haben beide ein Mindest-Timeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat ein Mindest-Timeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab ein [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die es als Tracking-Skripte erkennt. Wenn sie im Vordergrund ausgeführt werden, beträgt die Mindestverzögerung für die Drosselung weiterhin 4 ms. In Hintergrund-Tabs beträgt jedoch die Mindestverzögerung für die Drosselung 10.000 ms oder 10 Sekunden, die nach 30 Sekunden in Kraft tritt, nachdem ein Dokument zum ersten Mal geladen wurde.

Siehe [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection) für weitere Details.

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/Browser) mit anderen Aufgaben beschäftigt ist. Ein wichtiger Fall zu beachten ist, dass die Funktion oder der Code-Schnipsel nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

Schreibt in die Konsole:

```plain
After setTimeout
foo has been called
```

Dies liegt daran, dass, obwohl `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in einer Warteschlange platziert wird und zur nächsten Gelegenheit ausgeführt wird; nicht sofort. Der aktuell ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, sodass die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Verzögerung von Timeouts während des Seitenladens

Firefox wird `setTimeout()`-Timer
zurückstellen, während die aktuelle Registerkarte geladen wird. Die Auslösung wird aufgeschoben, bis der Haupt-Thread als untätig angesehen wird (ähnlich wie bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)),
oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()`
nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
API verwenden.

### Maximaler Verzögerungswert

Browser speichern die Verzögerung intern als 32-Bit-Ganzzahl. Dies führt zu einem Ganzzahlüberlauf, wenn Verzögerungen von mehr als 2.147.483.647 ms (etwa 24,8 Tage) verwendet werden. Beispielsweise führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

… dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` in eine negative Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

… dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

**Hinweis**: Das entspricht nicht dem Verhalten von `setTimeout` in Node.js, wo jedes Timeout, das größer als 2.147.483.647 ms ist, in einer sofortigen Ausführung resultiert.

## Beispiele

### Einstellen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen auf einer Webseite ein und verbindet sie mit den `setTimeout()`- und `clearTimeout()`-Routinen. Das Drücken der ersten Schaltfläche setzt einen Timeout, der nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID für die Verwendung durch `clearTimeout()` speichert. Sie können dieses Timeout optional abbrechen, indem Sie die zweite Schaltfläche drücken.

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

Siehe auch das Beispiel [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, das es ermöglicht, Argumente an den Callback in `core-js` zu übergeben](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
