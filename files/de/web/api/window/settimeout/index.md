---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 9e226fd3896df83ea12d0c013b5a3b50bcd4183c
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode seinen Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`setTimeout()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle stellt einen Timer ein, der eine Funktion oder ein angegebenes Stück Code einmal ausführt, wenn der Timer abläuft.

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
  - : Eine {{jsxref("function")}}, die ausgeführt wird, nachdem der Timer abgelaufen ist.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String beliebigen Codes, der nach `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion übergeben werden, wird jedoch _dringend abgeraten_, da dies aus den gleichen Gründen ein Sicherheitsrisiko darstellt, wie die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}.
- `delay` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl, die angibt, wie lange der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.

    Hinweis:
    - Der `delay` hat einen Maximalwert von 2147483647 ms — das Vergeben von größeren Werten kann zu einem Überlauf oder einem Wert von 0 führen.
      Siehe [maximaler Verzögerungswert](#maximaler_verzögerungswert) unten für weitere Informationen.
    - Die tatsächliche Verzögerung kann länger sein als eingestellt.
      Zum Beispiel wird `delay` auf 0 gesetzt, um im nächsten Ereigniszyklus anstelle von "sofort" ausgeführt zu werden.
      Siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) für weitere Informationen.
    - Wenn der Wert keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} auf den Wert angewendet, um ihn in eine Zahl umzuwandeln.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen – siehe [Nicht-nummerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht-numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.
    - Negative Werte verhalten sich wie 0.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die durch die bei `func` angegebene Funktion übergeben werden.

### Rückgabewert

Eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Dieser Identifikator, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z.B. ein spezifisches Fenster oder Worker) ist garantiert, dass die Timeout-ID nicht für einen neuen Timer wiederverwendet wird, solange der ursprüngliche Timer aktiv bleibt.
Separate globale Umgebungen führen jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn der `code`-Parameter auf eine Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, eine Zeichenfolge oder `TrustedScript`.

## Beschreibung

Die `setTimeout()`-Funktion wird häufig verwendet, um eine Funktion aufzurufen, die einmal nach einer Verzögerung ausgeführt werden soll.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um den Timeout abzubrechen, bevor er abgeschlossen ist.

Wenn Sie eine Funktion wiederholt (z.B. alle _N_ Millisekunden) aufrufen möchten, können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass sie sofort nach der Planung der Callback-Funktion oder des Codes zurückkehrt.
Sie blockiert nicht die Ausführung der nach `setTimeout()` folgenden Codezeilen, bis der geplante Code ausgeführt wurde.

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

Die `setTimeout()`-Methode wird dreimal aufgerufen und übergibt eine Callback-Funktion, die die Reihenfolge protokolliert, in der `setTimeout()` aufgerufen wurde.
Da die früheren Methodenaufrufe größere Verzögerungen haben, werden die Callback-Methoden in umgekehrter Reihenfolge ausgeführt, in der sie geplant wurden.
Wenn `setTimeout()` blockieren würde, bis die Callback-Funktion abgeschlossen ist, würden die Nachrichten in der Reihenfolge angezeigt.

Asynchrone Methoden sind nützlich, da sie es ermöglichen, Aufgaben parallel auszuführen, wenn die Reihenfolge der Ausführung keine Rolle spielt.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, wichtig ist, können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise-Vernetzung) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Die Funktionen, die an `setTimeout()` übergeben werden, werden mit normalen Funktionsaufrufsemantiken ausgeführt, um die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu bestimmen.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Für nicht-Arrow-Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel demonstriert, wie dies unerwartetes Verhalten verursachen kann. Hier, wenn wir die Methode `counter.count` direkt an `setTimeout()` übergeben, geht der `this`-Kontext verloren, und die Methode wird auf dem globalen Objekt anstelle der `Counter`-Instanz aufgerufen, was zu einem `TypeError` führt, wenn die `count`-Methode versucht, auf `this` zuzugreifen:

```js
class Counter {
  constructor() {
    this.data = new Map();
  }

  count(item) {
    this.data.set(item, (this.data.get(item) || 0) + 1);
  }
}

const counter = new Counter();

counter.count("foo"); // Successfully adds "foo" to the map
setTimeout(counter.count, 1000, "bar");
// TypeError: Cannot read properties of undefined (reading 'set')
```

Um dies zu umgehen, müssen Sie sicherstellen, dass die an `setTimeout` übergebene Funktion den korrekten `this`-Kontext hat. Es gibt drei Hauptmöglichkeiten, dies zu erreichen:

1. Wenn Sie den `this`-Kontext explizit festlegen möchten, anstatt die Methode direkt zu übergeben, wickeln Sie den Methodenaufruf in eine andere anonyme Funktion, die die Methode explizit mit dem richtigen Kontext aufruft:

   ```js
   setTimeout(() => counter.count("bar"), 1000);
   setTimeout(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setTimeout()` aufruft, verwenden Sie immer eine Pfeilfunktion, die den `this`-Kontext ihres umgebenden Bereichs erbt:

   ```js example-bad
   class Counter {
     // …
     delayedCount(item) {
       // BAD: the `this` context is lost in the callback
       setTimeout(function () {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

   ```js example-good
   class Counter {
     // …
     delayedCount(item) {
       // GOOD: the arrow function inherits the `this` context of `delayedCount()`
       setTimeout(() => {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

3. Wenn Sie zusätzliche Funktionswrapper vermeiden möchten (die den Speicherverbrauch erhöhen), während Sie den `this`-Kontext explizit festlegen, können Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, um eine neue Funktion mit dem korrekten `this`-Kontext zu erstellen:

   ```js
   setTimeout(counter.count.bind(counter), 1000, "bar");
   ```

### Nicht-numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [delay](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird implizit eine {{Glossary("Type_coercion", "Typumwandlung")}} auf den Wert angewendet, um ihn in eine Zahl zu konvertieren.
Zum Beispiel verwendet der folgende Code fälschlicherweise die Zeichenkette `"1000"` für den _delay_-Wert, anstelle der Zahl `1000` – aber er funktioniert trotzdem, da die Zeichenkette beim Ausführen des Codes in die Zahl `1000` umgewandelt wird und das Code 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen.
Zum Beispiel wird bei der Ausführung des folgenden Codes die Zeichenkette `"1 second"` letztendlich in die Zahl `0` umgewandelt — und somit wird der Code ohne Verzögerung ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Daher sollten Sie keine Zeichenketten für den _delay_-Wert verwenden, sondern immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Maximaler Verzögerungswert

Das `delay`-Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt, was den Wert auf 2147483647 ms begrenzt, oder ungefähr 24,8 Tage.
Verzögerungen, die diesen Wert überschreiten, führen zu einem Integerüberlauf.
Zum Beispiel führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

… dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

… das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

> [!NOTE]
> In Node.js führt jedes Timeout, das größer als 2.147.483.647 ms ist, zu einer sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger brauchen kann, als erwartet.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie in der [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben, erzwingen Browser ein Mindesttimeout von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` fünfmal geplant wurde.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird.
Die ersten vier Mal ist die Verzögerung ungefähr 0 Millisekunden, und danach beträgt sie ungefähr 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Batterieverbrauch) durch Hintergrund-Tabs zu reduzieren, erzwingen Browser ein Mindesttimeout in inaktiven Tabs.
Dies kann auch aufgehoben werden, wenn eine Seite Sound über ein Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Details hierzu sind abhängig vom Browser:

- Firefox Desktop hat ein Mindesttimeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat ein Mindesttimeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt keine inaktiven Tabs, wenn der Tab ein [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen abhängig von der Tab-Aktivität:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich einen Ton abgespielt hat oder anderweitig von Chrome als aktiv angesehen wird. Timer laufen nahe am angeforderten Intervall.

  - **Drosselung**: Gilt für Timer, wenn minimale Drosselbedingungen nicht erfüllt sind und eine dieser Bedingungen zutrifft:
    - Die Anzahl der Verschachtelung (d.h. Anzahl der verketteten Timer-Aufrufe) ist kleiner als 5.
    - Die Seite ist seit weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was möglicherweise mit anderen Timern mit ähnlichen Timeouts zusammengefasst wird.
  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselbedingungen erfüllt sind, und alle der folgenden Bedingungen erfüllt sind:
    - Die Anzahl der Verschachtelung ist 5 oder höher.
    - Die Seite ist seit mehr als 5 Minuten unsichtbar.
    - Die Seite ist seit mehr als 30 Sekunden stumm.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was möglicherweise mit anderen Timern mit ähnlichen Timeouts zusammengefasst wird.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Im Vordergrund ist die minimal verzögerte Drosselung 4ms. In Hintergrund-Tabs beträgt die minimal verzögerte Drosselung 10.000 ms oder 10 Sekunden, die 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft tritt.

Weitere Einzelheiten finden Sie unter [Tracking-Schutz](https://wiki.mozilla.org/Security/Tracking_protection).

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall ist, dass die Funktion oder der Codeausschnitt nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist.
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

Dies liegt daran, dass auch wenn `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in eine Warteschlange gestellt und zur Ausführung beim nächsten Gelegenheitstermin geplant wird; nicht sofort.
Der aktuell ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, daher kann die resultierende Ausführungsreihenfolge nicht wie erwartet sein.

#### Aufschub von Timeouts während des Seitenladens

Firefox wird `setTimeout()`-Timer zurückhalten, während der aktuelle Tab lädt. Das Auslösen wird zurückgestellt, bis der Haupt-Thread als untätig angesehen wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API verwenden.

### Sicherheitsaspekte

Die Methode kann verwendet werden, um beliebigen Input aus dem `code`-Parameter auszuführen.
Wenn der Input eine potenziell unsichere Zeichenfolge ist, die von einem Benutzer bereitgestellt wurde, ist dies eine mögliche Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS).

Zum Beispiel zeigt der folgende Code, wie `setTimeout()` `untrustedCode` ausführen könnte, das von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern standardmäßig das Ausführen von solchem Code.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP spezifizieren, um `setTimeout()` die Ausführung zu erlauben. Dies ist jedoch unsicher, da es einen der wichtigsten Schutzmechanismen der CSP deaktiviert.
Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie es müssen erlauben, dass Skripte über `setTimeout()` ausgeführt werden können, können diese Probleme gemildert werden, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass der Input durch eine Transformationsfunktion verarbeitet wird.

Um `setTimeout()` R zu ermöglichen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive spezifizieren.
Dies wirkt in gleicher Weise wie `unsafe-eval`, erlaubt aber die Methode _nur_ zu evaluieren, wenn Trusted Types aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, erlaubte es die Ausführung auch auf Browsern, die Trusted Types nicht unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Seite so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt von dem spezifischen Anwendungsfall ab, der ein Nutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte auf genau den Code beschränken, den Sie ausführen lassen möchten.
Wenn das nicht möglich ist, könnten Sie bestimmte Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze auf die Verwendung von Trusted Types verzichten.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

### Setzen und Löschen von Timeouts

Das folgende Beispiel setzt zwei einfache Schaltflächen auf einer Webseite ein und verbindet sie mit den `setTimeout()` und `clearTimeout()` Routinen.
Das Drücken der ersten Schaltfläche setzt ein Timeout, das nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID speichert, für die Verwendung durch `clearTimeout()`.
Sie können dieses Timeout optional abbrechen, indem Sie auf die zweite Schaltfläche drücken.

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

- [Polyfill von `setTimeout`, das das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
