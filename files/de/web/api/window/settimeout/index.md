---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: e885349d0466a7863b1ab18a1f4e72884679a62c
---

{{APIRef("HTML DOM")}}

Die **`setTimeout()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle setzt einen Timer, der eine Funktion oder einen spezifischen Code einmal ausführt, wenn der Timer abläuft.

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
  - : Eine {{jsxref("function")}}, die ausgeführt wird, nachdem der Timer abgelaufen ist.
- `code`
  - : Eine alternative Syntax, die es erlaubt, einen String anstelle einer Funktion einzufügen,
    der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird **nicht empfohlen**, aus den gleichen Gründen, die
    die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird. Wird dieser Parameter weggelassen, wird ein Wert von 0 verwendet, was bedeutet, "sofort" ausführen, oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger als vorgesehen sein kann; siehe [Gründe für länger als angegebene Verzögerungen](#gründe_für_länger_als_angegebene_verzögerungen) unten.

    Beachten Sie auch, dass wenn der Wert keine Zahl ist, eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} auf den Wert vorgenommen wird, um ihn in eine Zahl zu konvertieren — was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die Funktion übergeben werden, die durch `functionRef` angegeben ist.

### Rückgabewert

Die `setTimeout()`-Methode gibt einen positiven Integer-Wert zurück (typischerweise im Bereich von 1 bis 2.147.483.647), der den durch den Aufruf erstellten Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer zu stornieren.

Innerhalb derselben globalen Umgebung (z. B. ein bestimmtes Fenster oder Worker) ist garantiert, dass die Timeout-ID nicht für einen neuen Timer wiederverwendet wird, solange der ursprüngliche Timer aktiv bleibt. Separate globale Umgebungen halten jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

## Beschreibung

Timeouts werden mit [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) abgebrochen.

Um eine Funktion wiederholt aufzurufen (z. B. alle _N_ Millisekunden), erwägen Sie die Verwendung von [`setInterval()`](/de/docs/Web/API/Window/setInterval).

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird implizit eine {{Glossary("Type_coercion", "Typumwandlung")}} am Wert vorgenommen, um ihn in eine Zahl zu konvertieren. Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` als _delay_-Wert anstelle der Zahl `1000` – aber es funktioniert dennoch, da beim Ausführen des Codes der String in die Zahl `1000` umgewandelt wird und der Code somit eine Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typumwandlung jedoch zu unerwarteten und überraschenden Ergebnissen führen. Zum Beispiel wird beim Ausführen des folgenden Codes der String `"1 second"` letztendlich in die Zahl `0` umgewandelt — und so wird der Code sofort ohne Verzögerung ausgeführt.

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

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timer-Funktion die Ausführung anderer Funktionen im Funktionsstapel nicht pausieren wird. Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" zu erstellen, bevor die nächste Funktion im Funktionsstapel ausgeführt wird.

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

Beachten Sie, dass die erste Funktion keine 5-Sekunden-"Pause" erstellt, bevor die zweite Funktion aufgerufen wird. Stattdessen wird die erste Funktion aufgerufen, wartet jedoch 5 Sekunden, bevor sie ausgeführt wird. Während die erste Funktion auf ihre Ausführung wartet, wird die zweite Funktion aufgerufen, und eine 3-Sekunden-Wartezeit wird der zweiten Funktion zugewiesen, bevor sie ausgeführt wird. Da weder die Timer der ersten noch der zweiten Funktion abgeschlossen sind, wird die dritte Funktion aufgerufen und abgeschlossen. Dann folgt die zweite. Schließlich wird die erste Funktion ausgeführt, nachdem ihr Timer endlich abgeschlossen ist.

Um eine Reihenfolge zu erstellen, in der eine Funktion erst nach Abschluss einer anderen Funktion ausgelöst wird, siehe die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise von Ihrer Erwartung abweicht. Das generelle Problem wird im [JavaScript-Referenzhandbuch](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) detailliert erklärt.

Von `setTimeout()` ausgeführter Code wird aus einem Ausführungskontext aufgerufen, der von der Funktion getrennt ist, von der `setTimeout` aufgerufen wurde. Die üblichen Regeln zum Setzen des `this`-Schlüsselworts für die aufgerufene Funktion gelten, und wenn Sie `this` nicht im Aufruf oder mit `bind` gesetzt haben, wird es standardmäßig auf das `window`- (oder `global`-) Objekt gesetzt, selbst im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht dasselbe sein wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat.

Siehe das folgende Beispiel:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
```

Das obige Beispiel funktioniert, weil beim Aufruf von `myMethod` sein `this` durch den Aufruf auf `myArray` gesetzt wird, sodass innerhalb der Funktion `this[sProperty]` equivalent zu `myArray[sProperty]` ist. In folgendem Code hingegen:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // prints "undefined" after 1.5 seconds
```

Wird die Funktion `myArray.myMethod` an `setTimeout` übergeben und beim Aufruf wird ihr `this` nicht gesetzt, sodass es standardmäßig das `window`-Objekt ist.

Es gibt auch keine Möglichkeit, ein `thisArg` an `setTimeout` zu übergeben, wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} möglich ist. Wie unten gezeigt, funktioniert auch die Verwendung von `call`, um `this` zu setzen, nicht:

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // error
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // same error
```

#### Lösungen

##### Verwenden Sie eine Wrapper-Funktion

Ein häufiger Weg, das Problem zu lösen, ist die Verwendung einer Wrapper-Funktion, die `this` auf den erforderlichen Wert setzt:

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

### String-Literale übergeben

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

Ein an `setTimeout()` übergebener String wird im globalen Kontext ausgewertet, sodass im Kontext, in dem `setTimeout()` aufgerufen wurde, lokale Symbole nicht verfügbar sein werden, wenn der String als Code ausgewertet wird.

### Gründe für länger als angegebene Verzögerungen

Es gibt eine Reihe von Gründen, warum ein Timeout länger verzögert werden kann als erwartet. In diesem Abschnitt werden die häufigsten Gründe beschrieben.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) festgelegt, erzwingen Browser eine Mindesttimeoutzeit von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` fünfmal nacheinander geplant wurde.

Dies lässt sich im folgenden Beispiel beobachten, bei dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird. Die ersten vier Male beträgt die Verzögerung ungefähr 0 Millisekunden, danach beträgt sie ungefähr 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Batterieverbrauch) durch Hintergrund-Tabs zu reduzieren, erzwingen Browser eine Mindesttimeout-Verzögerung in inaktiven Tabs. Dies kann auch aufgehoben werden, wenn eine Seite Ton über eine Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Einzelheiten hierzu sind vom Browser abhängig:

- Firefox Desktop hat eine Mindesttimeoutzeit von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat eine Mindesttimeoutzeit von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen abhängig von der Aktivität des Tabs:

  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton abgespielt hat oder in Chrome anderweitig als aktiv angesehen wird. Timer laufen in der Nähe des angeforderten Intervalls.

  - **Drosselung**: Gilt für Timer, wenn die minimalen Drosselungsbedingungen nicht erfüllt sind und eine der folgenden Bedingungen zutrifft:
    - Verschachtelungsanzahl (d.h. Anzahl der verketteten Timeraufrufe) ist kleiner als 5.
    - Seite war weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was mit anderen Timern gepackt werden kann, die ähnliche Timeoutzeiten haben.

  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselungsbedingungen erfüllt sind, und wenn alle der folgenden Bedingungen erfüllt sind:
    - Verschachtelungsanzahl ist 5 oder höher.
    - Seite war mehr als 5 Minuten unsichtbar.
    - Seite war mehr als 30 Sekunden lang still.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was mit anderen Timern gepackt werden kann, die ähnliche Timeoutzeiten haben.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden. Wenn im Vordergrund ausgeführt, beträgt die Mindestverzögerung der Drosselung immer noch 4 ms. In Hintergrund-Tabs beträgt die Mindestverzögerung der Drosselung jedoch 10.000 ms bzw. 10 Sekunden, und kommt 30 Sekunden nach dem erstmaligen Laden eines Dokuments zum Tragen.

Weitere Details finden Sie im [Tracking-Schutz](https://wiki.mozilla.org/Security/Tracking_protection).

#### Verzögerte Timeouts

Das Timeout kann später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist. Ein wichtiger Fall ist, dass das Snippet nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

Wird an die Konsole schreiben:

```plain
After setTimeout
foo has been called
```

Dies liegt daran, dass `setTimeout` zwar mit einer Verzögerung von null aufgerufen wurde, es jedoch in eine Warteschlange gesetzt und beim nächsten Gelegenheit ausgeführt wird; nicht sofort. Derzeitig ausgeführter Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, so dass die daraus resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Verzögerung von Timeouts während des Seiten-Ladevorgangs

Firefox wird die Ausführung von `setTimeout()`-Timern aufschieben, während die aktuelle Registerkarte geladen wird. Die Ausführung wird aufgeschoben, bis der Haupt-Thread als inaktiv eingestuft wird (ähnlich wie bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)) oder bis das Load-Event ausgelöst wird.

### Hintergrundseiten und Timer von WebExtensions

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)-API verwenden.

### Maximale Verzögerung

Browser speichern die Verzögerung intern als 32-Bit-Integer. Dies führt zu einem Integerüberlauf, wenn Verzögerungen größer als 2.147.483.647 ms (etwa 24,8 Tage) verwendet werden. Dieses Beispielcode:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

...führt dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

...führt dazu, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

**Hinweis**: Das entspricht nicht dem Verhalten von `setTimeout` in Node.js, wo jedes Timeout, das größer als 2.147.483.647 ms ist, zu einer sofortigen Ausführung führt.

## Beispiele

### Setzen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen in einer Webseite ein und verbindet sie mit den `setTimeout()`- und `clearTimeout()`-Routinen. Durch Drücken der ersten Schaltfläche wird ein Timeout festgelegt, das nach zwei Sekunden eine Meldung zeigt und die Timeout-ID für die Verwendung durch `clearTimeout()` speichert. Sie können optional dieses Timeout stornieren, indem Sie die zweite Schaltfläche drücken.

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

- [Polyfill von `setTimeout`, die das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
