---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 6ee50f37f78b647f2d61741e94d0792098d8af88
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode seinen Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings zuweisen und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setTimeout()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle setzt einen Timer, der eine Funktion oder ein bestimmtes Codefragment einmal ausführt, sobald der Timer abgelaufen ist.

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
  - : Eine {{jsxref("function")}} die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String mit beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle der Übergabe einer Funktion verwendet werden, wird jedoch _stark abgeraten_, da die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt.
- `delay` {{optional_inline}}
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie lange der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Standardmäßig auf 0, wenn nicht angegeben.

    Hinweis:
    - Die Verzögerung hat einen Maximalwert von 2147483647 ms — größere Werte können zu einem Überlauf oder einem Wert von 0 führen.
      Siehe [höchster Verzögerungswert](#höchster_verzögerungswert) unten für weitere Informationen.
    - Die tatsächliche Verzögerung kann länger als festgelegt sein.
      Beispielsweise wird `delay` auf 0 gesetzt, um im nächsten Ereigniszyklus und nicht "sofort" ausgeführt zu werden.
      Siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) für weitere Informationen.
    - Wenn der Wert keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Type Coercion")}} des Wertes durchgeführt, um ihn in eine Zahl zu konvertieren.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen — siehe [Nichtzahl-Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nichtzahl-verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.
    - Negative Werte verhalten sich wie 0.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die Funktion übergeben werden, die durch `func` spezifiziert wird.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer zu stoppen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) wird die Timeout-ID garantiert nicht für einen neuen Timer verwendet, solange der ursprüngliche Timer aktiv bleibt.
Separate globale Umgebungen pflegen jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code` Parameter auf einen String gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, String oder `TrustedScript`.

## Beschreibung

Die `setTimeout()` Funktion wird häufig verwendet, um eine Funktion aufzurufen, die nur einmal nach einer Verzögerung ausgeführt wird.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um das Timeout zu stoppen, bevor es abgeschlossen ist.

Wenn Sie eine Funktion wiederholt aufrufen möchten (z.B. alle _N_ Millisekunden), können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass sie sofort nach der Planung der Callback-Funktion oder des Codes zurückkehrt.
Sie "wartet" nicht und blockiert nicht die Ausführung der nach `setTimeout()` folgenden Codezeilen, bis der geplante Code ausgeführt wurde.

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
Da die früheren Methodenaufrufe größere Verzögerungen haben, werden die Callback-Methoden in umgekehrter Reihenfolge ihrer Planung ausgeführt.
Wenn `setTimeout()` blockiert würde, bis der Callback abgeschlossen ist, würden die Nachrichten in der richtigen Reihenfolge angezeigt.

Asynchrone Methoden sind nützlich, weil sie Aufgaben parallel ausführen lassen, wenn die Ausführungsreihenfolge keine Rolle spielt.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, wichtig ist, dann können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise-Chaining) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Die an `setTimeout()` übergebenen Funktionen werden mit normalen Funktionsaufrufsemantiken ausgeführt, um den Verweis von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu bestimmen.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Bei normalen Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann. Wenn wir hier die Methode `counter.count` direkt an `setTimeout()` übergeben, geht der `this`-Kontext verloren, und die Methode wird auf dem globalen Objekt anstelle der `Counter` Instanz aufgerufen, was zu einem `TypeError` führt, wenn die `count` Methode versucht auf `this` zuzugreifen:

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

Um dies zu umgehen, müssen Sie sicherstellen, dass die an `setTimeout` übergebene Funktion den richtigen `this`-Kontext hat. Es gibt drei Hauptmethoden, dies zu erreichen:

1. Wenn Sie den `this`-Kontext explizit angeben möchten, anstatt die Methode direkt zu übergeben, wickeln Sie den Methodenaufruf in eine anonyme Funktion, die die Methode mit dem richtigen Kontext explizit aufruft:

   ```js
   setTimeout(() => counter.count("bar"), 1000);
   setTimeout(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setTimeout()` aufruft, verwenden Sie immer eine Pfeilfunktion, die den `this`-Kontext ihres umgebenden Geltungsbereichs erbt:

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

3. Wenn Sie zusätzliche Funktions-Wrapper (die den Speicherverbrauch erhöhen) vermeiden möchten und dennoch den `this`-Kontext explizit angeben möchten, können Sie die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) Methode verwenden, um eine neue Funktion mit dem richtigen `this`-Kontext zu erstellen:

   ```js
   setTimeout(counter.count.bind(counter), 1000, "bar");
   ```

### Nichtzahl-Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay) Wert aufgerufen wird, der keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Type Coercion")}} des Wertes durchgeführt, um ihn in eine Zahl zu konvertieren.
Zum Beispiel verwendet der folgende Code fälschlicherweise den String `"1000"` als _delay_-Wert, anstatt die Zahl `1000` – aber er funktioniert dennoch, da der String beim Ausführen des Codes in die Zahl `1000` umgewandelt wird und der Code so 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen.
Zum Beispiel wird beim folgenden Code der String `"1 second"` letztendlich in die Zahl `0` umgewandelt und der Code daher ohne Verzögerung ausgeführt.

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

### Höchster Verzögerungswert

Das `delay` Argument wird in eine 32-Bit-Ganzzahl mit Vorzeichen konvertiert, was den Wert auf 2147483647 ms oder ungefähr 24,8 Tage begrenzt.
Verzögerungen über diesem Wert führen zu einem Ganzzahlenüberlauf.
Beispielsweise führt dieser Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` in eine negative Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

> [!NOTE]
> In Node.js führt jedes Timeout größer als 2.147.483.647 ms zu einer sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann als erwartet.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) angegeben, erzwingen Browser eine Mindest-Timeout-Zeit von 4 Millisekunden, sobald ein verschachtelter Aufruf von `setTimeout` fünfmal geplant wurde.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird.
Die ersten vier Male beträgt die Verzögerung ungefähr 0 Millisekunden, danach ungefähr 4 Millisekunden:

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

#### Timeouts in inaktiven Registerkarten

Um die Last (und den damit verbundenen Batterieverbrauch) von Hintergrundregisterkarten zu reduzieren, erzwingen Browser ein Mindest-Timeout in inaktiven Registerkarten.
Es kann auch aufgehoben werden, wenn eine Seite Ton über eine Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Einzelheiten dazu sind browserabhängig:

- Firefox Desktop hat ein Mindest-Timeout von 1 Sekunde für inaktive Registerkarten.
- Firefox für Android hat ein Mindest-Timeout von 15 Minuten für inaktive Registerkarten und kann sie vollständig entladen.
- Firefox drosselt inaktive Registerkarten nicht, wenn die Registerkarte ein [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen abhängig von der Aktivität der Registerkarte:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton erzeugt hat oder anderweitig als aktiv betrachtet wird. Timer laufen nahe am angeforderten Intervall.

  - **Drosselung**: Gilt für Timer, wenn minimale Drosselungsbedingungen nicht erfüllt sind und eine der folgenden Bedingungen wahr ist:
    - Verschachtelungsanzahl (d.h. Anzahl der verketteten Timer-Aufrufe) ist niedriger als 5.
    - Seite war weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was mit anderen Timern, die ähnliche Timeouts haben, zusammengefasst werden kann.
  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselungsbedingungen erfüllt sind und alle folgenden Bedingungen zutreffen:
    - Verschachtelungsanzahl ist 5 oder höher.
    - Seite war mehr als 5 Minuten unsichtbar.
    - Seite ist seit mehr als 30 Sekunden stumm.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was mit anderen Timern, die ähnliche Timeouts haben, zusammengefasst werden kann.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die es als Tracking-Skripte erkennt.
Wenn im Vordergrund ausgeführt, beträgt die Mindestverzögerung der Drosselung weiterhin 4 ms. In Hintergrundregisterkarten jedoch beträgt die Mindestverzögerung der Drosselung 10.000 ms oder 10 Sekunden, was 30 Sekunden nach dem ersten Laden eines Dokuments wirksam wird.

Weitere Informationen finden Sie in der [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection).

#### Späte Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall ist, dass das Funktions- oder Code-Snippet nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist.
Zum Beispiel:

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

Dies liegt daran, dass auch wenn `setTimeout` mit einer Verzögerung von Null aufgerufen wurde, es in einer Warteschlange platziert und zur Ausführung bei der nächsten Gelegenheit geplant wird; nicht sofort.
Der derzeit ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, sodass die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Aufschub von Timeouts während der Seitenladung

Firefox wird `setTimeout()` Timer verzögern, während der aktuelle Tab lädt. Die Ausführung wird verschoben, bis der Hauptthread als frei angesehen wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Ladeereignis ausgelöst wird.

### WebExtension Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsauthoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API verwenden.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebigen Input, der im `code`-Parameter übergeben wird, auszuführen.
Wenn der Input ein potenziell unsicherer String ist, der von einem Benutzer bereitgestellt wird, ist dies ein mögliches Einfallstor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setTimeout()` möglicherweise `untrustedCode` ausführt, das von einem Benutzer bereitgestellt wird:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, werden die Ausführung solchen Codes standardmäßig verhindern.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, um `setTimeout()` die Ausführung zu ermöglichen, aber dies ist unsicher, da es einen der Hauptschutzmechanismen der CSP deaktiviert.
Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Ausführung von Skripten über `setTimeout()` zulassen müssen, können Sie diese Probleme abmildern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings zuweisen und [trusted types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass der Input durch eine Transformationsfunktion geleitet wird.

Um `setTimeout()` die Ausführung zu ermöglichen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive angeben.
Dies wirkt in der gleichen Weise wie `unsafe-eval`, erlaubt die Methode jedoch _nur_ zur Ausführung, wenn trusted types aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, würde es die Ausführung selbst in Browsern erlauben, die trusted types nicht unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Website folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom speziellen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, auszuführen.
Wenn das nicht möglich ist, könnten Sie es erlauben oder blockieren, bestimmte Funktionen innerhalb des bereitgestellten Strings zu verwenden.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze keine trusted types verwenden.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Codes, die den erwarteten Ansatz zeigen.

### Einstellen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen in einer Webseite ein und verbindet sie mit den `setTimeout()` und `clearTimeout()` Routinen.
Das Drücken der ersten Schaltfläche setzt ein Timeout, welches nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID zur Verwendung durch `clearTimeout()` speichert.
Optional können Sie dieses Timeout abbrechen, indem Sie die zweite Schaltfläche drücken.

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
