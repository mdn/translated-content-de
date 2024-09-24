---
title: setTimeout() globale Funktion
short-title: setTimeout()
slug: Web/API/setTimeout
l10n:
  sourceCommit: 8acf54a3eb1536134a39896c3ceb1578f9b4eea7
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die globale **`setTimeout()`**-Methode setzt einen Timer, der eine Funktion oder einen angegebenen Code einmal ausführt, sobald der Timer abläuft.

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
  - : Eine alternative Syntax, die es Ihnen ermöglicht, einen String anstelle einer Funktion einzufügen, der kompiliert und ausgeführt wird, wenn der Timer abläuft. Diese Syntax wird aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen, **nicht empfohlen**.
- `delay` {{optional_inline}}

  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird. Wenn dieser Parameter weggelassen wird, wird ein Wert von 0 verwendet, was bedeutet, dass die Funktion "sofort" ausgeführt wird, oder genauer gesagt, im nächsten Ereigniszyklus.

    Beachten Sie, dass in beiden Fällen die tatsächliche Verzögerung länger sein kann als beabsichtigt; siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_verzögerungen,_die_länger_sind_als_angegeben) unten.

    Beachten Sie außerdem, dass, wenn der Wert keine Zahl ist, eine implizite [Typkonvertierung](/de/docs/Glossary/Type_coercion) stillschweigend durchgeführt wird, um den Wert in eine Zahl umzuwandeln, was zu unerwarteten und überraschenden Ergebnissen führen kann; siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}

  - : Zusätzliche Argumente, die an die durch `functionRef` spezifizierte Funktion weitergegeben werden.

### Rückgabewert

Der zurückgegebene `timeoutID` ist ein positiver Ganzzahlwert, der den durch den Aufruf von `setTimeout()` erstellten Timer identifiziert. Dieser Wert kann an {{domxref("clearTimeout","clearTimeout()")}} übergeben werden, um den Timeout abzubrechen.

Es ist garantiert, dass ein `timeoutID`-Wert nie von einem nachfolgenden Aufruf von `setTimeout()` oder `setInterval()` auf demselben Objekt (ein Fenster oder ein Worker) wiederverwendet wird, während der Timer noch aktiv ist. Verschiedene Objekte verwenden jedoch separate ID-Pools.

## Beschreibung

Timeouts werden mit {{domxref("clearTimeout()")}} abgebrochen.

Um eine Funktion wiederholt aufzurufen (z.B. alle _N_ Millisekunden), sollten Sie in Betracht ziehen, {{domxref("setInterval()")}} zu verwenden.

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird eine implizite [Typkonvertierung](/de/docs/Glossary/Type_coercion) stillschweigend auf den Wert angewendet, um ihn in eine Zahl umzuwandeln. Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_-Wert, anstatt die Zahl `1000` – aber er funktioniert dennoch, da der String während der Codeausführung in die Zahl `1000` umgewandelt wird, und so wird der Code 1 Sekunde später ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

Aber in vielen Fällen kann die implizite Typkonvertierung zu unerwarteten und überraschenden Ergebnissen führen. Zum Beispiel, wenn der folgende Code ausgeführt wird, wird der String `"1 second"` letztendlich in die Zahl `0` umgewandelt – und so wird der Code sofort ausgeführt, mit null Verzögerung.

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

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass die Timer-Funktion die Ausführung anderer Funktionen im Funktionsstapel nicht unterbricht. Mit anderen Worten, Sie können `setTimeout()` nicht verwenden, um eine "Pause" einzulegen, bevor die nächste Funktion im Funktionsstapel ausgelöst wird.

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

// Ausgabe:

// this is the third message
// this is the second message
// this is the first message
```

Beachten Sie, dass die erste Funktion keine 5-sekündige "Pause" erstellt, bevor die zweite Funktion aufgerufen wird. Stattdessen wird die erste Funktion aufgerufen, aber wartet 5 Sekunden, bevor sie ausgeführt wird. Während die erste Funktion darauf wartet, ausgeführt zu werden, wird die zweite Funktion aufgerufen, und eine 3-sekündige Wartezeit wird auf die zweite Funktion angewendet, bevor sie ausgeführt wird. Da weder der Timer der ersten noch der zweiten Funktion abgeschlossen ist, wird die dritte Funktion aufgerufen und zuerst ausgeführt. Dann folgt die zweite. Schließlich wird die erste Funktion ausgeführt, nachdem ihr Timer endlich abgeschlossen ist.

Um eine Abfolge zu erstellen, bei der eine Funktion nur nach Abschluss einer anderen Funktion ausgelöst wird, sehen Sie sich die Dokumentation zu [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) an.

### Das "this"-Problem

Wenn Sie eine Methode an `setTimeout()` übergeben, wird sie mit einem `this`-Wert aufgerufen, der möglicherweise nicht Ihrer Erwartung entspricht. Das allgemeine Problem wird im Detail in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

Code, der von `setTimeout()` ausgeführt wird, wird aus einem Ausführungskontext aufgerufen, der von der Funktion getrennt ist, von der `setTimeout` aufgerufen wurde. Die üblichen Regeln zum Festlegen des `this`-Schlüsselworts für die aufgerufene Funktion gelten, und wenn Sie `this` nicht im Aufruf oder mit `bind` festgelegt haben, wird es standardmäßig auf das `window` (oder `global`) Objekt gesetzt, selbst im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode). Es wird nicht der gleiche Wert sein wie der `this`-Wert der Funktion, die `setTimeout` aufgerufen hat.

Sehen Sie sich das folgende Beispiel an:

```js
const myArray = ["zero", "one", "two"];
myArray.myMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // druckt "zero,one,two"
myArray.myMethod(1); // druckt "one"
```

Das obige funktioniert, weil beim Aufrufen von `myMethod` sein `this` durch den Aufruf auf `myArray` gesetzt wird, sodass innerhalb der Funktion `this[sProperty]` gleich `myArray[sProperty]` ist. Aber im Folgenden:

```js
setTimeout(myArray.myMethod, 1.0 * 1000); // druckt "[object Window]" nach 1 Sekunde
setTimeout(myArray.myMethod, 1.5 * 1000, "1"); // druckt "undefined" nach 1,5 Sekunden
```

Die Funktion `myArray.myMethod` wird an `setTimeout` übergeben, dann, wenn sie aufgerufen wird, ist ihr `this` nicht gesetzt, sodass es standardmäßig auf das `window`-Objekt gesetzt wird.

Es gibt auch keine Möglichkeit, ein `thisArg` an `setTimeout` zu übergeben, wie es bei Array-Methoden wie {{jsxref("Array.forEach()", "forEach()")}} und {{jsxref("Array.reduce()", "reduce()")}} der Fall ist. Wie unten gezeigt, funktioniert auch die Verwendung von `call`, um `this` zu setzen, nicht.

```js
setTimeout.call(myArray, myArray.myMethod, 2.0 * 1000); // Fehler
setTimeout.call(myArray, myArray.myMethod, 2.5 * 1000, 2); // gleicher Fehler
```

#### Lösungen

##### Verwenden Sie eine Wrapper-Funktion

Eine übliche Lösung für das Problem besteht darin, eine Wrapper-Funktion zu verwenden, die `this` auf den benötigten Wert setzt:

```js
setTimeout(function () {
  myArray.myMethod();
}, 2.0 * 1000); // druckt "zero,one,two" nach 2 Sekunden
setTimeout(function () {
  myArray.myMethod("1");
}, 2.5 * 1000); // druckt "one" nach 2,5 Sekunden
```

Die Wrapper-Funktion kann eine Pfeilfunktion sein:

```js
setTimeout(() => {
  myArray.myMethod();
}, 2.0 * 1000); // druckt "zero,one,two" nach 2 Sekunden
setTimeout(() => {
  myArray.myMethod("1");
}, 2.5 * 1000); // druckt "one" nach 2,5 Sekunden
```

##### Verwenden Sie bind()

Alternativ können Sie {{jsxref("Function.bind()", "bind()")}} verwenden, um den Wert von `this` für alle Aufrufe einer bestimmten Funktion festzulegen:

```js
const myArray = ["zero", "one", "two"];
const myBoundMethod = function (sProperty) {
  console.log(arguments.length > 0 ? this[sProperty] : this);
}.bind(myArray);

myBoundMethod(); // druckt "zero,one,two", da 'this' in der Funktion an myArray gebunden ist
myBoundMethod(1); // druckt "one"
setTimeout(myBoundMethod, 1.0 * 1000); // druckt immer noch "zero,one,two" nach 1 Sekunde aufgrund der Bindung
setTimeout(myBoundMethod, 1.5 * 1000, "1"); // druckt "one" nach 1,5 Sekunden
```

### Übergeben von Zeichenkettenliteralen

Das Übergeben eines Strings statt einer Funktion an `setTimeout()` hat die gleichen Probleme wie die Verwendung von [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval).

```js example-bad
// Tun Sie dies nicht
setTimeout("console.log('Hello World!');", 500);
```

```js example-good
// Tun Sie stattdessen dies
setTimeout(() => {
  console.log("Hello World!");
}, 500);
```

Ein an `setTimeout()` übergebener String wird im globalen Kontext ausgewertet, sodass lokale Symbole im Kontext, in dem `setTimeout()` aufgerufen wurde, nicht verfügbar sind, wenn der String als Code ausgewertet wird.

### Gründe für Verzögerungen, die länger sind als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann, als erwartet. Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) beschrieben, erzwingen Browser ein Mindestzeitlimit von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` fünfmal geplant wurde.

Dies kann im folgenden Beispiel gesehen werden, in dem ein Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachtelt wird, und die Verzögerung jedes Mal protokolliert wird, wenn der Handler aufgerufen wird. Die ersten vier Mal beträgt die Verzögerung ungefähr 0 Millisekunden, und danach sind es ungefähr 4 Millisekunden:

```html
<button id="run">Run</button>
<table>
  <thead>
    <tr>
      <th>Vorherige</th>
      <th>Diese</th>
      <th>Tatsächliche Verzögerung</th>
    </tr>
  </thead>
  <tbody id="log"></tbody>
</table>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // die Uhrzeit dieses Aufrufs protokollieren
  logline(new Date().getMilliseconds());
  // wenn wir nicht fertig sind, den nächsten Aufruf planen
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // das Protokoll löschen
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // Iterationszähler und den Startzeitstempel initialisieren
  iterations = 10;
  last = new Date().getMilliseconds();
  // Timer starten
  setTimeout(timeout, 0);
}

function logline(now) {
  // den letzten Zeitstempel, den neuen Zeitstempel und die Differenz protokollieren
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

Um die Belastung (und den damit verbundenen Batteriegebrauch) von Hintergrundtabs zu reduzieren, erzwingen Browser eine Mindestverzögerung für Timeouts in inaktiven Tabs. Sie kann auch aufgehoben werden, wenn eine Seite über die Web Audio API {{domxref("AudioContext")}} Ton abspielt.

Die Details hängen vom Browser ab:

- Firefox Desktop und Chrome haben eine Mindestverzögerung von 1 Sekunde für inaktive Tabs.
- Firefox for Android hat eine Mindestverzögerung von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox verlangsamt inaktive Tabs nicht, wenn der Tab einen {{domxref("AudioContext")}} enthält.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die es als Tracking-Skripte erkennt. Im Vordergrund beträgt die Mindestverzögerung der Drosselung immer noch 4 ms. In Hintergrundtabs beträgt die Mindestverzögerung der Drosselung jedoch 10.000 ms oder 10 Sekunden, die 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft tritt.

Siehe [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection) für weitere Details.

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das OS/der Browser) mit anderen Aufgaben beschäftigt ist. Ein wichtiger Fall zu beachten ist, dass die Funktion oder der Code-Schnipsel nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist. Zum Beispiel:

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

Wird auf der Konsole ausgegeben:

```plain
After setTimeout
foo has been called
```

Das liegt daran, dass `setTimeout` zwar mit einer Verzögerung von null aufgerufen wurde, es jedoch in die Warteschlange gestellt wird und bei der nächsten Gelegenheit geplant wird; nicht sofort. Derzeit laufender Code muss abgeschlossen werden, bevor Funktionen in der Warteschlange ausgeführt werden. Daher kann die resultierende Ausführungsreihenfolge nicht wie erwartet sein.

#### Verzögerung von Timeouts während des Seitenladevorgangs

Firefox wird `setTimeout()`-Timer
verzögern, während der aktuelle Tab geladen wird. Die Auslösung wird verzögert, bis der Hauptthread als
inaktiv betrachtet wird (ähnlich wie [window.requestIdleCallback()](/de/docs/Web/API/Window/requestIdleCallback)),
oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()`
nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)
API verwenden.

### Maximale Verzögerungszeit

Browser speichern die Verzögerung intern als 32-Bit-Ganzzahl. Dies führt zu einem Ganzzahlüberlauf, wenn Verzögerungen verwendet werden, die größer als 2.147.483.647 ms (ungefähr 24,8 Tage) sind. Beispielsweise führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

**Hinweis**: Das entspricht nicht dem Verhalten von `setTimeout` in Node.js, wo jede Verzögerung größer als 2.147.483.647 ms
sofort zur Ausführung führt.

## Beispiele

### Einstellen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen auf einer Webseite ein und verknüpft sie mit den
`setTimeout()`- und `clearTimeout()`-Routinen. Das Drücken der ersten
Schaltfläche setzt einen Timeout, der nach zwei Sekunden eine Nachricht anzeigt und
die Timeout-ID für die Verwendung von `clearTimeout()` speichert. Sie können optional diesen
Timeout abbrechen, indem Sie die zweite Schaltfläche drücken.

#### HTML

```html
<button onclick="delayedMessage();">Eine Nachricht nach zwei Sekunden anzeigen</button>
<button onclick="clearMessage();">Nachricht abbrechen, bevor sie erscheint</button>

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
  timeoutID = setTimeout(setOutput, 2 * 1000, "Das war wirklich langsam!");
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

Siehe auch das [`clearTimeout()`-Beispiel](/de/docs/Web/API/clearTimeout#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, das die Übergabe von Argumenten an die Rückruffunktion in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("clearTimeout")}}
- {{domxref("setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
- {{domxref("queueMicrotask()")}}
