---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 30471395dc9e28edda6c228e23d0c465b4fbaf65
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte statt Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setTimeout()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle setzt einen Timer, der eine Funktion oder ein bestimmtes Stück Code ausführt, sobald der Timer abläuft.

## Syntax

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(func)
setTimeout(func, delay)
setTimeout(func, delay, param1)
setTimeout(func, delay, param1, param2)
setTimeout(func, delay, param1, param2, /* …, */ paramN)
```

### Parameter

- `func`
  - : Eine {{jsxref("function")}}, die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String von beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle der Übergabe einer Funktion verwendet werden, wird jedoch _stark abgeraten_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Eine nicht-negative Ganzzahl, die angibt, wie lange der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.

    Hinweis:
    - Die Verzögerung hat einen Maximalwert von 2147483647 ms – die Angabe größerer Werte kann zu Überlauf oder einem verwendeten Wert von 0 führen.
      Siehe [maximaler Verzögerungswert](#maximaler_verzögerungswert) unten für weitere Informationen.
    - Die tatsächliche Verzögerung kann länger sein als eingestellt.
      Beispielsweise wird bei Einstellung von `delay` auf 0 im nächsten Ereigniszyklus und nicht "sofort" ausgeführt.
      Siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) für weitere Informationen.
    - Wenn der Wert keine Zahl ist, wird stille {{Glossary("Type_coercion", "Typkonvertierung")}} auf dem Wert durchgeführt, um ihn in eine Zahl zu konvertieren.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen – siehe [Nicht-Zahlen-Verzögerungswerte werden stillschweigend in Zahlen konvertiert](#nicht-zahlen-verzögerungswerte_werden_stillschweigend_in_zahlen_konvertiert) für ein Beispiel.
    - Negative Werte verhalten sich wie 0.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch `func` spezifizierte Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Diese Kennung, oft als "Timeout ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer zu stornieren.

Innerhalb derselben globalen Umgebung (z.B. einem bestimmten Fenster oder Worker) wird die Timeout-ID nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv ist.
Separate globale Umgebungen unterhalten jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) werden und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder ein `TrustedScript`.

## Beschreibung

Die `setTimeout()` Funktion wird häufig verwendet, um eine Funktion aufzurufen, die nach einer Verzögerung nur einmal ausgeführt wird.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um den Timeout abzubrechen, bevor er abgeschlossen ist.

Wenn Sie eine Funktion wiederholt aufrufen möchten (z.B. alle _N_ Millisekunden), können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, das bedeutet, dass sie sofort nach Planen der Callback-Funktion oder des Codes zurückkehrt.
Sie "wartet" nicht und blockiert die Ausführung der Zeilen nach `setTimeout()`, bis der geplante Code ausgeführt wurde.

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

Die `setTimeout()` Methode wird dreimal aufgerufen und übergibt eine Callback-Funktion, die die Reihenfolge protokolliert, in der `setTimeout()` aufgerufen wurde.
Da die ersten Methodenaufrufe größere Verzögerungen haben, werden die Callback-Methoden in umgekehrter Reihenfolge zu der geplant sind ausgeführt.
Wenn `setTimeout()` blockierte, bis der Callback abgeschlossen ist, würde die Ausgabe die Nachrichten in Reihenfolge anzeigen.

Asynchrone Methoden sind nützlich, weil sie Aufgaben ausführen lassen, wenn die Ausführungsreihenfolge keine Rolle spielt.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, wichtig ist, können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise-Chaining) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Methoden oder Funktionen, die an `setTimeout()` übergeben werden, laufen nicht im gleichen Ausführungskontext wie `setTimeout()` und haben daher nicht dasselbe [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) wie die Funktion, die `setTimeout()` aufrief.
Stattdessen hat die aufgerufene Funktion ein `this`-Schlüsselwort, das auf das `window` (oder `global`) Objekt gesetzt ist.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) detailliert erläutert.

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann:

```js
const myObject = {
  log() {
    console.log(`myProperty: ${this.myProperty}`);
  },
  myProperty: 12,
};

myObject.log(); // myProperty: 12
setTimeout(myObject.log, 1000); // myProperty: undefined
```

Sie können eine Wrapper-Funktion verwenden, z.B. eine [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), um das `this` der Funktion zu übernehmen, in der `setTimeout()` aufgerufen wurde (Arrow-Funktionen haben ein lexikales `this`).

Sie können dies mit folgendem Code testen:

```js
// Arrow function callback
setTimeout(() => myObject.log(), 2000); // myProperty: 12 after 2 seconds

// Anonymous function callback
setTimeout(function () {
  myObject.log();
}, 3000); // myProperty: 12 after 3 seconds
```

Man könnte auch die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, die es Ihnen ermöglicht, den Wert zu spezifizieren, der als `this` für alle Aufrufe einer bestimmten Funktion verwendet werden soll.
Das lässt Sie Probleme umgehen, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde:

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

### Nicht-Zahlen-Verzögerungswerte werden stillschweigend in Zahlen konvertiert

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird stille {{Glossary("Type_coercion", "Typkonvertierung")}} auf dem Wert durchgeführt, um ihn in eine Zahl zu konvertieren.
Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` für den _delay_-Wert, anstatt die Zahl `1000` – aber es funktioniert trotzdem, weil wenn der Code läuft, der String in die Zahl `1000` umgewandelt wird und der Code somit 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typkonvertierung zu unerwarteten und überraschenden Ergebnissen führen.
Zum Beispiel wird der String `"1 second"` letztlich in die Zahl `0` umgewandelt, wenn der folgende Code ausgeführt wird – und somit wird der Code mit null Verzögerung ausgeführt.

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

### Maximaler Verzögerungswert

Das `delay` Argument wird in eine signierte 32-Bit-Ganzzahl konvertiert, was den Wert auf 2147483647 ms, oder grob 24,8 Tage, begrenzt.
Verzögerungen von mehr als diesem Wert führen zu einem Überlauf.
Zum Beispiel führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass der Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass der Timeout nach etwa 5 Sekunden ausgeführt wird.

> [!NOTE]
> In Node.js führt jeder Timeout, der größer als 2.147.483.647 ms ist, zur sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann, um auszulösen als erwartet.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben, wird der Browser nach 5 verschachtelten Aufrufen von `setTimeout` eine Mindestverzögerung von 4 Millisekunden durchsetzen.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird.
Die ersten vier Male beträgt die Verzögerung etwa 0 Millisekunden, danach etwa 4 Millisekunden:

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
  padding: 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("Nested_timeouts", 100, 250)}}

#### Timeouts in inaktiven Tabs

Um die Belastung (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, werden Browser eine Mindestverzögerung bei Timeouts in inaktiven Tabs durchsetzen.
Diese kann aufgehoben werden, wenn eine Seite Ton mit einer Web-Audio-API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Spezifikationen dazu sind browserabhängig:

- Firefox Desktop hat eine Mindestverzögerung von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat eine Mindestverzögerung von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet verschiedene Drosselungsstufen abhängig von der Aktivität des Tabs:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton gemacht hat oder anderweitig als aktiv von Chrome betrachtet wird. Timer laufen nahe am angeforderten Intervall.

  - **Drosselung**: Gilt für Timer, wenn die Bedingungen für minimale Drosselung nicht erfüllt sind und eine der folgenden Bedingungen zutrifft:
    - Verschachtelungsanzahl (d.h. Anzahl der verketteten Timeraufrufe) ist kleiner als 5.
    - Seite war weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was mit anderen Timern mit ähnlichen Zeitüberschreitungen zusammengefasst werden kann.
  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch normale Drosselungsbedingungen erfüllt sind und alle der folgenden Bedingungen zutreffen:
    - Verschachtelungsanzahl ist 5 oder höher.
    - Seite ist seit mehr als 5 Minuten unsichtbar.
    - Seite ist seit mehr als 30 Sekunden still.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was mit anderen Timern mit ähnlichen Zeitüberschreitungen zusammengefasst werden kann.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Beim Ausführen im Vordergrund beträgt die minimale Drosselungsverzögerung immer noch 4ms.
In Hintergrund-Tabs beträgt die minimale Drosselungsverzögerung jedoch 10.000 ms, oder 10 Sekunden, die 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft treten.

Siehe [Tracking-Schutz](https://wiki.mozilla.org/Security/Tracking_protection) für mehr Details.

#### Späte Timeouts

Der Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall zu beachten ist, dass die Funktion oder der Code-Snippet nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist.
Zum Beispiel:

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

Dies liegt daran, dass selbst wenn `setTimeout` mit null Verzögerung aufgerufen wurde, es in eine Warteschlange gesetzt und beim nächsten Gelegenheit ausgeführt wird; nicht sofort.
Der gerade ausgeführte Code muss abgeschlossen werden, bevor Funktionen in der Warteschlange ausgeführt werden, sodass die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Aufschiebung von Timeouts während des Seitenladevorgangs

Firefox wird `setTimeout()` Timer verschieben, während das aktuelle Tab lädt.
Das Auslösen wird aufgeschoben, bis der Hauptthread als leerlaufend betrachtet wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Load-Ereignis gefeuert wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)-API verwenden.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben im `code` Parameter auszuführen.
Wenn die Eingabe eine potentiell unsichere Zeichenfolge ist, die von einem Benutzer bereitgestellt wird, ist dies möglicherweise ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setTimeout()` möglicherweise `untrustedCode` ausführt, das von einem Benutzer bereitgestellt wird:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern standardmäßig die Ausführung solcher Codes.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihre CSP aufnehmen, um `setTimeout()` die Ausführung zu ermöglichen, dies ist jedoch unsicher, da es einen der Hauptschutzmechanismen der CSP deaktiviert.
Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie Scripts über `setTimeout()` laufen lassen müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte statt Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mittels der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `setTimeout()` laufen zu lassen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive angeben.
Dies funktioniert ähnlich wie `unsafe-eval`, erlaubt aber _nur_ die Auswertung, wenn Trusted Types aktiviert sind (wenn Sie `unsafe-eval` verwenden, würde es die Ausführung sogar in Browsern erlauben, die Trusted Types nicht unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Seite folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein benutzerbereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte auf genau den Code beschränken, dem Sie vertrauen, dass er ausgeführt wird.
Wenn das nicht möglich ist, könnten Sie die Nutzung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze auf die Verwendung von Trusted Types verzichten.
Siehe [Using `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

### Einstellen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen in einer Webseite ein und verbindet sie mit den `setTimeout()` und `clearTimeout()` Routinen.
Das Drücken der ersten Schaltfläche setzt einen Timeout, der nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID für die Verwendung durch `clearTimeout()` speichert.
Sie können optional diesen Timeout abbrechen, indem Sie auf die zweite Schaltfläche drücken.

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

- [Polyfill von `setTimeout`, das das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
