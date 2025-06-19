---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("HTML DOM")}}

Die **`setTimeout()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces setzt einen Timer, der eine Funktion oder einen angegebenen Code ausführt, sobald der Timer abgelaufen ist.

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
  - : Eine alternative Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion einzuschließen,
    der kompiliert und ausgeführt wird, wenn der Timer abgelaufen ist. Diese Syntax wird aus den gleichen Gründen **nicht empfohlen**, die auch die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet "sofort ausführen" oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger sein kann als beabsichtigt; siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) unten.

    Beachten Sie auch, dass, wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} stillschweigend auf den Wert angewendet wird, um ihn in eine Zahl umzuwandeln — was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` angegebene Funktion übergeben werden.

### Rückgabewert

Die `setTimeout()` Methode gibt eine positive ganze Zahl zurück (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) wird die Timeout-ID garantiert nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv bleibt. Separate globale Umgebungen unterhalten jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

## Beschreibung

Timeouts werden mit [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) abgebrochen.

Um eine Funktion wiederholt aufzurufen (z.B. alle _N_ Millisekunden), ziehen Sie die Verwendung von [`setInterval()`](/de/docs/Web/API/Window/setInterval) in Betracht.

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay) Wert aufgerufen wird, der keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} stillschweigend auf den Wert angewendet, um ihn in eine Zahl umzuwandeln. Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_ Wert, anstatt die Zahl `1000` – aber es funktioniert dennoch, weil beim Ausführen des Codes der String in die Zahl `1000` umgewandelt wird und der Code somit 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

Aber in vielen Fällen kann die implizite Typkonvertierung zu unerwarteten und überraschenden Ergebnissen führen. Zum Beispiel wird im folgenden Code der String `"1 second"` letztlich in die Zahl `0` umgewandelt — und somit wird der Code sofort ohne Verzögerung ausgeführt.

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

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timer-Funktion die Ausführung anderer Funktionen im Funktionsstapel nicht pausieren wird.
Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" vor der nächsten Funktion im Funktionsstapel zu erzeugen.

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

Beachten Sie, dass die erste Funktion keine 5-sekündige "Pause" erzeugt, bevor sie die zweite Funktion aufruft. Stattdessen wird die erste Funktion aufgerufen, wartet jedoch 5 Sekunden, um ausgeführt zu werden. Während die erste Funktion auf die Ausführung wartet, wird die zweite Funktion aufgerufen, und eine 3-sekündige Wartezeit wird auf die zweite Funktion angewendet, bevor sie ausgeführt wird. Da weder der erste noch der zweite Timer abgeschlossen wurden, wird die dritte Funktion aufgerufen und die Ausführung zuerst abgeschlossen. Dann folgt die zweite Funktion. Schließlich wird die erste Funktion ausgeführt, nachdem ihr Timer schließlich abgeschlossen ist.

Um einen Ablauf zu schaffen, bei dem eine Funktion nur nach dem Abschluss einer anderen Funktion feuert, sehen Sie sich die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) an.

### Das "this" Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this` Wert aufgerufen, der möglicherweise von Ihren Erwartungen abweicht. Das allgemeine Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Der von `setTimeout()` ausgeführte Code wird aus einem Ausführungskontext aufgerufen, der von der Funktion, aus der `setTimeout` aufgerufen wurde, getrennt ist. Es gelten die üblichen Regeln zur Einstellung des `this` Schlüsselworts für die aufgerufene Funktion, und wenn Sie `this` nicht im Aufruf oder mit `bind` gesetzt haben, wird es standardmäßig auf das `window` (oder `global`) Objekt gesetzt, selbst im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht derselbe `this` Wert sein wie für die Funktion, die `setTimeout` aufgerufen hat.

Sehen Sie das folgende Beispiel:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das obige funktioniert, weil, wenn `myMethod` aufgerufen wird, sein `this` durch den Aufruf auf `myArray` gesetzt wird, sodass innerhalb der Funktion `this[sProperty]` gleich `myArray[sProperty]` ist. Jedoch im folgenden:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Wird die `myArray.myMethod` Funktion an `setTimeout` übergeben, und wenn sie aufgerufen wird, ist ihr `this` nicht gesetzt, also wird es auf das `window` Objekt standardmäßig eingestellt.

Es gibt auch keine Möglichkeit, einen `thisArg` an `setTimeout` zu übergeben, wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} der Fall ist. Wie unten gezeigt, funktioniert das Verwenden von `call` zur Einstellung von `this` ebenfalls nicht.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwendung einer Wrapper-Funktion

Eine häufige Methode zur Lösung des Problems besteht darin, eine Wrapper-Funktion zu verwenden, die `this` auf den erforderlichen Wert setzt:

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

Ein an `setTimeout()` übergebener String wird im globalen Kontext ausgewertet, sodass lokale Symbole im Kontext, in dem `setTimeout()` aufgerufen wurde, nicht verfügbar sind, wenn der String als Code ausgewertet wird.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann, als erwartet. Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben,
werden Browser ab dem 5. verschachtelten Aufruf von `setTimeout` einen minimalen Timeout von 4 Millisekunden erzwingen.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird. Die ersten vier Male beträgt die Verzögerung ungefähr 0 Millisekunden, und danach beträgt sie ungefähr 4 Millisekunden:

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

Um die Last (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, erzwingen Browser eine minimale Timeout-Verzögerung in inaktiven Tabs. Dies kann auch aufgehoben werden, wenn eine Seite Ton mit einem Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) wiedergibt.

Die Einzelheiten hierzu sind browserabhängig:

- Firefox Desktop hat eine minimale Timeout-Verzögerung von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat eine minimale Timeout-Verzögerung von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselstufen je nach Aktivität des Tabs:

  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton abgespielt hat oder von Chrome als aktiv angesehen wird. Timer laufen nahe am angeforderten Intervall.

  - **Drosselung**: Gilt für Timer, wenn die Bedingungen für minimale Drosselung nicht erfüllt sind und eine der folgenden Bedingungen zutrifft:
    - Die Verschachtelungstiefe (d.h. Anzahl der verketteten Timeraufrufe) ist kleiner als 5.
    - Die Seite ist seit weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was mit anderen Timern, die ähnliche Timeouts haben, zusammengefasst werden kann.

  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselungsbedingungen erfüllt sind, und alle folgenden Bedingungen erfüllt sind:
    - Die Verschachtelungstiefe ist 5 oder höher.
    - Die Seite ist seit mehr als 5 Minuten unsichtbar.
    - Die Seite ist seit mehr als 30 Sekunden stumm.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was mit anderen Timern, die ähnliche Timeouts haben, zusammengefasst werden kann.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Wenn sie im Vordergrund ausgeführt werden, beträgt die Drosselungs-Minimalverzögerung weiterhin 4 ms. In Hintergrund-Tabs beträgt die Drosselungs-Minimalverzögerung jedoch 10.000 ms oder 10 Sekunden, die 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft tritt.

Weitere Details finden Sie unter [Tracking-Schutz](https://wiki.mozilla.org/Security/Tracking_protection).

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall, den es zu beachten gilt, ist, dass die Funktion oder der Code-Schnipsel nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

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
es in eine Warteschlange gestellt und zur nächsten Gelegenheit ausgeführt wird; nicht sofort.
Der aktuell ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, was dazu führen kann, dass die resultierende Ausführungsreihenfolge nicht wie erwartet ist.

#### Verzögerung von Timeouts während des Seitenladens

Firefox wird die Auslösung von `setTimeout()` Timern
verzögern, während die aktuelle Registerkarte geladen wird. Das Auslösen wird verzögert, bis der Haupt-Thread als
leerlaufend betrachtet wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)),
oder bis das Ladeereignis ausgelöst wird.

### WebExtension Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()`
nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API verwenden.

### Maximale Verzögerungswert

Browser speichern die Verzögerung intern als 32-Bit ganzzahlige Zahl. Dies führt zu einem Überlauf, wenn Verzögerungen größer als 2.147.483.647 ms (etwa 24,8 Tage) verwendet werden. Zum Beispiel führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass das Timeout nach etwa 5 Sekunden ausgeführt wird.

**Hinweis**: Das entspricht nicht dem `setTimeout` Verhalten in Node.js, wo jede Verzögerung größer als 2.147.483.647 ms
zu einer sofortigen Ausführung führt.

## Beispiele

### Setzen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen in einer Webseite ein und verbindet sie mit den
`setTimeout()` und `clearTimeout()` Routinen. Drücken der ersten
Schaltfläche setzt einen Timeout, der nach zwei Sekunden eine Nachricht anzeigt und die
Timeout-ID für die Verwendung von `clearTimeout()` speichert. Sie können diesen
Timeout optional abbrechen, indem Sie die zweite Schaltfläche drücken.

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

Siehe auch das Beispiel zu [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, der das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
