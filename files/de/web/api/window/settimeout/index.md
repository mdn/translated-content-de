---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("HTML DOM")}}

Die **`setTimeout()`** Methode des [`Window`](/de/docs/Web/API/Window) Schnittstelle setzt einen Timer, der eine Funktion oder ein bestimmtes Code-Fragment ausführt, sobald der Timer abläuft.

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
  - : Eine alternative Syntax, die es Ihnen ermöglicht, anstelle einer Funktion einen String anzugeben,
    der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird aus den gleichen Gründen, die auch das Verwenden von
    {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko macht, **nicht empfohlen**.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor
    die angegebene Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0
    verwendet, was bedeutet "sofort" ausführen, oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger sein kann als beabsichtigt; siehe [Gründe für Verzögerungen länger als angegeben](#gründe_für_verzögerungen_länger_als_angegeben) unten.

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend auf den Wert angewendet wird, um ihn in eine Zahl zu konvertieren — was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die von `functionRef` spezifizierte Funktion übergeben werden.

### Rückgabewert

Die `setTimeout()` Methode gibt eine positive ganze Zahl zurück (normalerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z. B. einem bestimmten Fenster oder Worker) wird garantiert, dass die Timeout-ID nicht für einen neuen Timer wiederverwendet wird, solange der ursprüngliche Timer aktiv bleibt. Separate globale Umgebungen führen jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

## Beschreibung

Timeouts werden mit [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) abgebrochen.

Um eine Funktion wiederholt auszuführen (z. B. alle _N_ Millisekunden), erwägen Sie die Verwendung von [`setInterval()`](/de/docs/Web/API/Window/setInterval).

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} stillschweigend auf den Wert angewendet, um ihn in eine Zahl zu konvertieren. Beispielsweise verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_-Wert, anstelle der Zahl `1000` – aber es funktioniert dennoch, weil der String zur Laufzeit in die Zahl `1000` umgewandelt wird, und der Code somit 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

Aber in vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen. Wenn beispielsweise der folgende Code ausgeführt wird, wird der String `"1 second"` letztlich in die Zahl `0` umgewandelt — und so wird der Code sofort ausgeführt, ohne Verzögerung.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Deshalb sollten Sie keine Strings für den _delay_-Wert verwenden, sondern stattdessen immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, das bedeutet, dass die Timer-Funktion die Ausführung anderer Funktionen im Funktionsstapel nicht unterbrechen wird.
Mit anderen Worten: Sie können `setTimeout()` nicht verwenden, um eine "Pause" vor der Ausführung der nächsten Funktion im Funktionsstapel zu erstellen.

Sehen Sie das folgende Beispiel:

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

Beachten Sie, dass die erste Funktion keine 5-Sekunden-"Pause" erzeugt, bevor die zweite Funktion aufgerufen wird. Stattdessen wird die erste Funktion aufgerufen, wartet aber 5 Sekunden, um auszuführen. Während die erste Funktion auf ihre Ausführung wartet, wird die zweite Funktion aufgerufen und eine 3-Sekunden-Wartezeit wird auf die zweite Funktion angewandt, bevor sie ausgeführt wird. Da weder der Timer der ersten noch der der zweiten Funktion abgeschlossen ist, wird die dritte Funktion aufgerufen und zuerst abgeschlossen. Dann folgt die zweite. Schließlich wird die erste Funktion nach Abschluss ihres Timers ausgeführt.

Um eine Abfolge zu erstellen, in der eine Funktion erst nach dem Abschluss einer anderen Funktion ausgelöst wird, sehen Sie sich die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) an.

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise nicht Ihren Erwartungen entspricht. Das allgemeine Problem wird im Detail im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

Code, der von `setTimeout()` ausgeführt wird, wird aus einem Ausführungskontext aufgerufen, der von der Funktion getrennt ist, von der aus `setTimeout` aufgerufen wurde. Die üblichen Regeln für das Setzen des `this`-Schlüsselworts für die aufgerufene Funktion gelten, und wenn Sie `this` nicht in dem Aufruf oder mit `bind` gesetzt haben, wird es standardmäßig auf das `window`- (oder `global`-) Objekt gesetzt, selbst im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht dasselbe sein wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat.

Hier ist ein Beispiel:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das obige funktioniert, weil wenn `myMethod` aufgerufen wird, sein `this` auf `myArray` durch den Aufruf gesetzt wird, weshalb innerhalb der Funktion `this[sProperty]` äquivalent zu `myArray[sProperty]` ist. Jedoch, im folgenden:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Die Funktion `myArray.myMethod` wird an `setTimeout` übergeben, wobei ihr `this` nicht gesetzt ist, also wird es auf das `window`-Objekt standardmäßig gesetzt.

Es gibt auch keine Option, ein `thisArg` an `setTimeout` zu übergeben, wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} möglich ist. Wie unten gezeigt, funktioniert das Verwenden von `call` zum Setzen von `this` ebenfalls nicht:

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwenden einer Wrapper-Funktion

Eine übliche Möglichkeit, das Problem zu lösen, besteht darin, eine Wrapper-Funktion zu verwenden, die `this` auf den erforderlichen Wert setzt:

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

Alternativ können Sie {{jsxref("Function.bind()", "bind()")}} verwenden, um den Wert von `this` für alle Aufrufe einer gegebenen Funktion zu setzen:

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

Ein String, der an `setTimeout()` übergeben wird, wird im globalen Kontext ausgewertet, daher sind lokale Symbole im Kontext, in dem `setTimeout()` aufgerufen wird, nicht verfügbar, wenn der String als Code ausgewertet wird.

### Gründe für Verzögerungen länger als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauert zu feuern als erwartet.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) festgelegt,
werden Browser einen Mindesttimeout von 4 Millisekunden durchsetzen, wenn ein verschachtelter Aufruf von `setTimeout` 5 Mal geplant wurde.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln,
und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird. Die ersten vier Male beträgt die Verzögerung etwa 0 Millisekunden, und danach beträgt sie etwa 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, werden Browser
einen Mindesttimeout-Verzögerung in inaktiven Tabs durchsetzen. Dies kann auch aufgehoben werden, wenn eine Seite Klang mit einer Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Details dazu sind abhängig vom Browser:

- Firefox Desktop hat einen Mindesttimeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat einen Mindesttimeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn Tab ein [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen abhängig von der Tab-Aktivität:

  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton gemacht hat oder anderweitig von Chrome als aktiv betrachtet wird. Timer werden nahe am angeforderten Intervall ausgeführt.

  - **Drosselung**: Gilt für Timer, wenn die minimalen Drosselungsbedingungen nicht erfüllt sind und eine dieser Bedingungen zutrifft:
    - Verschachtelungszahl (d.h. Anzahl verketteter Timeraufrufe) ist kleiner als 5.
    - Seite war weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was mit anderen Timern, die ähnliche Timeouts haben, gebündelt werden kann.

  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselungsbedingungen erfüllt sind, und alle folgenden Bedingungen erfüllt sind:
    - Verschachtelungszahl ist 5 oder höher.
    - Seite war mehr als 5 Minuten unsichtbar.
    - Seite war mehr als 30 Sekunden still.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was mit anderen Timern, die ähnliche Timeouts haben, gebündelt werden kann.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die es als Tracking-Skripte erkennt.
Wenn diese im Vordergrund laufen, bleibt die minimale Drosselungsverzögerung bei 4 ms. In Hintergrund-Tabs beträgt jedoch die minimale Drosselungsverzögerung 10.000 ms oder 10 Sekunden, die 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft tritt.

Weitere Details finden Sie unter [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection).

#### Verspätete Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall, den es zu beachten gilt, ist, dass die Funktion oder der Code-Schnipsel nicht ausgeführt werden kann, bis
der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

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

Dies liegt daran, dass, obwohl `setTimeout` mit einer Verzögerung von null aufgerufen wurde,
es in eine Warteschlange gestellt und für die nächste Gelegenheit eingeplant wird; nicht sofort.
Momentan ausgeführter Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, was die resultierende Ausführungsreihenfolge unerwartet machen kann.

#### Zurückstellung von Timeouts während des Seitennachladens

Firefox wird das Auslösen von `setTimeout()` Timern
während das aktuelle Tab lädt, zurückstellen. Das Auslösen wird zurückgestellt, bis der Hauptthread als
inaktiv angesehen wird (ähnlich wie bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)),
oder bis das Ladevorgangsereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()`
nicht zuverlässig. Erweiterungsentwickler sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
API verwenden.

### Maximaler Verzögerungswert

Browser speichern die Verzögerung intern als 32-Bit-Ganzzahl. Dies verursacht einen Integerüberlauf, wenn Verzögerungen größer als 2.147.483.647 ms (ca. 24,8 Tage) verwendet werden. Zum Beispiel, dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…führt dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…führt dazu, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

**Hinweis**: Dies stimmt nicht mit dem Verhalten von `setTimeout` in Node.js überein, wo jede Verzögerung größer als 2.147.483.647 ms zu einer sofortigen Ausführung führt.

## Beispiele

### Setzen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Knöpfe auf einer Webseite ein und verbindet sie mit den
`setTimeout()` und `clearTimeout()` Routinen. Wenn Sie auf den ersten Knopf drücken, wird ein Timeout gesetzt, das nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID speichert
zur Verwendung von `clearTimeout()`. Sie können optional dieses
Timeout abbrechen, indem Sie auf den zweiten Knopf drücken.

#### HTML

```html
<button id="show">Show a message after two seconds</button>
<button id="cancel">Cancel message before it happens</button>

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

document.getElementById("show").addEventListener("click", delayedMessage);
document.getElementById("cancel").addEventListener("click", clearMessage);
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting_and_clearing_timeouts')}}

Siehe auch das [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, der das Übergeben von Argumenten an den Rückruf in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
