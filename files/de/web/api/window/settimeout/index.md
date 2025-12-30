---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenketten zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setTimeout()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle setzt einen Timer, der eine Funktion oder ein angegebenes Stück Code ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("function")}}, die nach Ablauf des Timers ausgeführt werden soll.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenkette beliebigen Codes, die alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird jedoch _dringend abgeraten_, aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden, die der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird.
    Standard ist 0, wenn nicht angegeben.

    Hinweis:
    - Der Verzögerungswert hat einen maximalen Wert von 2147483647 ms — größere Werte können zu einem Überlauf oder einem Wert von 0 führen.
      Siehe [maximaler Verzögerungswert](#maximaler_verzögerungswert) unten für weitere Informationen.
    - Die tatsächliche Verzögerung kann länger als eingestellt sein.
      Wenn Sie beispielsweise `delay` auf 0 setzen, wird dies im nächsten Ereigniszyklus und nicht "sofort" ausgeführt.
      Siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) für weitere Informationen.
    - Wenn der Wert keine Zahl ist, wird stillschweigend eine {{Glossary("Type_coercion", "Typkonvertierung")}} auf den Wert durchgeführt, um ihn in eine Zahl zu konvertieren.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen — siehe [Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen konvertiert](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_konvertiert) für ein Beispiel.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die von `func` spezifizierte Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) wird die Timeout-ID nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv bleibt.
Allerdings haben separate globale Umgebungen ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der `code`-Parameter auf eine Zeichenkette gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht zu den unterstützten Typen gehört: eine Funktion, eine Zeichenkette oder `TrustedScript`.

## Beschreibung

Die `setTimeout()` Funktion wird häufig verwendet, um eine Funktion aufzurufen, die nach einer Verzögerung nur einmal ausgeführt wird.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um das Timeout abzubrechen, bevor es abgeschlossen ist.

Wenn Sie eine Funktion wiederholt aufrufen möchten (z.B. alle _N_ Millisekunden), können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass sie sofort nach der Planung der Rückruffunktion oder des Codes zurückkehrt.
Sie "wartet" nicht und blockiert die Ausführung der Codezeilen nach `setTimeout()`, bis der geplante Code ausgeführt wurde.

Berücksichtigen Sie das folgende Beispiel:

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

Die `setTimeout()` Methode wird dreimal aufgerufen und übergibt eine Rückruffunktion, die die Reihenfolge protokolliert, in der `setTimeout()` aufgerufen wurde.
Da die früheren Methodenaufrufe größere Verzögerungen haben, werden die Rückruffunktionen in umgekehrter Reihenfolge ausgeführt.
Wenn `setTimeout()` blockiert wäre, bis der Rückruf abgeschlossen ist, würden die Nachrichten in Reihenfolge angezeigt.

Asynchrone Methoden sind nützlich, weil sie es ermöglichen, Aufgaben parallel auszuführen, wenn die Ausführungsreihenfolge unwichtig ist.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, wichtig ist, können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise-Ketten) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Methoden oder Funktionen, die an `setTimeout()` übergeben werden, laufen nicht im gleichen Ausführungskontext wie `setTimeout()` und haben daher nicht dasselbe [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) wie die Funktion, die `setTimeout()` aufgerufen hat.
Stattdessen hat die aufgerufene Funktion ein `this`-Schlüsselwort, das auf das `window` (oder `global`) Objekt gesetzt ist.
Dieses Problem wird im [JavaScript Reference](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

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

Sie können eine Wrapper-Funktion wie eine [Arrow-Funktion](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden, um das `this` der Funktion anzunehmen, in der `setTimeout()` aufgerufen wird (Arrow-Funktionen haben ein lexeikalisches `this`).

Sie können dies mit folgendem Code testen:

```js
// Arrow function callback
setTimeout(() => myObject.log(), 2000); // myProperty: 12 after 2 seconds

// Anonymous function callback
setTimeout(function () {
  myObject.log();
}, 3000); // myProperty: 12 after 3 seconds
```

Sie können auch die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, mit der Sie den Wert angeben können, der als `this` für alle Aufrufe einer bestimmten Funktion verwendet werden soll.
Das ermöglicht es Ihnen, Probleme zu umgehen, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde:

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

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen konvertiert

Wenn `setTimeout()` mit einem [delay](#delay) Wert aufgerufen wird, der keine Zahl ist, wird stillschweigend eine {{Glossary("Type_coercion", "Typkonvertierung")}} auf den Wert durchgeführt, um ihn in eine Zahl zu konvertieren.
Zum Beispiel wird der folgende Code fälschlicherweise mit dem String `"1000"` für den _delay_ Wert anstelle der Zahl `1000` verwendet – funktioniert aber dennoch, weil der String bei der Ausführung des Codes in die Zahl `1000` umgewandelt wird, und der Code somit 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typkonvertierung zu unerwarteten und überraschenden Ergebnissen führen.
Zum Beispiel wird, wenn der folgende Code ausgeführt wird, der String `"1 second"` letztlich in die Zahl `0` umgewandelt — und der Code wird somit ohne Verzögerung ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Daher sollten Sie keine Zeichenketten für den _delay_ Wert verwenden, sondern immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Maximaler Verzögerungswert

Das `delay` Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt, was den Wert auf 2147483647 ms, oder ungefähr 24,8 Tage, begrenzt.
Verzögerungen, die diesen Wert überschreiten, führen zu einem Integer-Überlauf.
Zum Beispiel führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

> [!NOTE]
> In Node.js führt ein Timeout größer als 2.147.483.647 ms zu einer sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Anzahl von Gründen, warum ein Timeout länger dauern kann, als erwartet.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben, erzwingen Browser ein Mindesttimeout von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` 5-mal geplant wurde.

Dies ist im folgenden Beispiel zu sehen, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird.
Die ersten vier Mal beträgt die Verzögerung ungefähr 0 Millisekunden, und danach ungefähr 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, erzwingen Browser ein Mindesttimeout in inaktiven Tabs.
Es kann auch erlassen werden, wenn eine Seite Ton über eine Web-Audio-API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Details dazu sind browserabhängig:

- Firefox Desktop hat ein Mindesttimeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat ein Mindesttimeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen je nach Tab-Aktivität:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Töne erzeugt hat oder von Chrome sonst als aktiv betrachtet wird. Timer laufen nahe dem angeforderten Intervall.

  - **Drosselung**: Gilt für Timer, wenn die Bedingungen für minimale Drosselung nicht erfüllt sind, und eine dieser Bedingungen zutrifft:
    - Nesting-Zähler (d.h. Anzahl der verketteten Timer-Aufrufe) ist niedriger als 5.
    - Seite ist seit weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was möglicherweise mit anderen Timern, die ähnliche Timeouts haben, zusammengefasst wird.
  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselungsbedingungen erfüllt sind, und alle folgenden Bedingungen zutreffen:
    - Nesting-Zähler ist 5 oder höher.
    - Seite ist seit mehr als 5 Minuten unsichtbar.
    - Seite ist seit mehr als 30 Sekunden stumm.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was möglicherweise mit anderen Timern, die ähnliche Timeouts haben, zusammengefasst wird.

#### Drosselung von Tracking-Skripten

Firefox erzwingt eine zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Beim Ausführen im Vordergrund bleibt die minimale Drosselungsverzögerung 4ms. Bei Hintergrund-Tabs beträgt die minimale Drosselungsverzögerung jedoch 10.000 ms oder 10 Sekunden, was 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft tritt.

Siehe [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection) für mehr Details.

#### Verspätete Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Punkt ist, dass die Funktion oder der Codeausschnitt nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist.
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

Das liegt daran, dass auch wenn `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in eine Warteschlange gestellt und beim nächsten Gelegenheit eingeplant wird; nicht unmittelbar.
Der aktuell ausgeführte Code muss abgeschlossen werden, bevor Funktionen in der Warteschlange ausgeführt werden, daher kann die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet sein.

#### Verzögerung von Timeouts während des Seitenladens

Firefox verzögert das Auslösen von `setTimeout()` Timern, während die aktuelle Registerkarte geladen wird. Das Auslösen wird verzögert, bis der Hauptthread als inaktiv angesehen wird (ähnlich wie bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Ladeereignis ausgelöst wird.

### WebExtension Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Entwickler sollten die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API verwenden.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben auszuführen, die im `code`-Parameter übergeben werden.
Wenn die Eingabe eine potenziell unsichere Zeichenkette ist, die von einem Benutzer bereitgestellt wurde, ist dies ein möglicher Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setTimeout()` möglicherweise von einem Benutzer bereitgestellten `untrustedCode` ausführt:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) angeben, verhindern standardmäßig die Ausführung solcher Codes.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, um `setTimeout()` die Ausführung zu erlauben, aber dies ist unsicher, da es einen der Hauptschutzmechanismen von CSP deaktiviert.
Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Skripte über `setTimeout()` zur Ausführung zulassen müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenketten zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mittels der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `setTimeout()` die Ausführung zu erlauben, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive angeben.
Dies funktioniert genauso wie `unsafe-eval`, erlaubt jedoch _nur_ die Bewertung, wenn vertrauenswürdige Typen aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, würde es die Ausführung auch in Browsern erlauben, die keine vertrauenswürdigen Typen unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Seite folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein benutzerüberliefertes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dessen Ausführung Sie vertrauen.
Falls das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der übergebenen Zeichenfolge erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele der Kürze halber keine vertrauenswürdigen Typen verwenden.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Beispiele des erwarteten Ansatzes.

### Timeouts setzen und löschen

Das folgende Beispiel richtet zwei einfache Buttons in einer Webseite ein und verbindet sie mit den Routinen `setTimeout()` und `clearTimeout()`.
Das Drücken des ersten Buttons setzt ein Timeout, das nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID für die Verwendung durch `clearTimeout()` speichert.
Sie können dieses Timeout optional abbrechen, indem Sie auf den zweiten Button drücken.

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

- [Polyfill von `setTimeout`, mit dem Argumente an den Rückruf in `core-js` übergeben werden können](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
