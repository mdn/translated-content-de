---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode seinen Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings zuweisen und vertrauenswürdige Typen [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setTimeout()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle setzt einen Timer, der eine Funktion oder einen angegebenen Codeausschnitt ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("Function")}}, die nach Ablauf des Timers ausgeführt wird.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String von beliebigem Code, der kompiliert und nach `delay` Millisekunden ausgeführt wird.
    Dies kann anstelle der Übergabe einer Funktion verwendet werden, wird jedoch _stark abgeraten_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Eine nicht-negative ganze Zahl, die angibt, wie lange der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Standardwert ist 0, wenn nicht angegeben.

    Hinweis:
    - Der `delay` hat einen maximalen Wert von 2147483647 ms — die Angabe größerer Werte kann zu einem Überlauf oder zur Verwendung eines Werts von 0 führen. Weitere Informationen finden Sie unten unter [Maximaler Verzögerungswert](#maximaler_verzögerungswert).
    - Die tatsächliche Verzögerung kann länger sein als eingestellt.
      Zum Beispiel wird bei der Einstellung von `delay` auf 0 in der nächsten Ereignisschleife ausgeführt, anstatt "sofort". Weitere Informationen finden Sie unter [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben).
    - Wenn der Wert keine Zahl ist, wird die implizite {{Glossary("Type_coercion", "Typumwandlung")}} ohne Rückmeldung auf den Wert angewendet, um ihn in eine Zahl zu konvertieren.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen — siehe [Nicht numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht_numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt) für ein Beispiel.
    - Negative Werte verhalten sich wie 0.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch `func` angegebene Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2,147,483,647), die den durch diesen Aufruf erstellten Timer eindeutig identifiziert.
Dieser Identifikator, häufig als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer zu canceln.

Innerhalb derselben globalen Umgebung (z.B. einem bestimmten Fenster oder Worker) ist gewährleistet, dass die Timeout-ID nicht für einen neuen Timer wiederverwendet wird, solange der ursprüngliche Timer aktiv bleibt.
Separate globale Umgebungen führen jedoch ihre eigenen unabhängigen Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) durch eine CSP [erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist. Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder `TrustedScript`.

## Beschreibung

Die `setTimeout()`-Funktion wird häufig verwendet, um eine Funktion aufzurufen, die einmalig nach einer Verzögerung ausgeführt wird.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um das Timeout abzubrechen, bevor es abgeschlossen ist.

Wenn Sie wiederholt eine Funktion aufrufen möchten (z.B. alle _N_ Millisekunden), können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass sie sofort nach dem Planen der Rückruffunktion oder des Codes zurückkehrt.
Es "wartet" nicht, sodass die Ausführung der Codezeilen nach `setTimeout()` blockiert wird, bis der geplante Code ausgeführt wurde.

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

Die `setTimeout()`-Methode wird dreimal aufgerufen und übergibt eine Rückruffunktion, die die Reihenfolge, in der `setTimeout()` aufgerufen wurde, protokolliert.
Da die vorherigen Methodenaufrufe größere Verzögerungen haben, werden die Rückruffunktionen in umgekehrter Reihenfolge zu der ausgeführt, in der sie geplant wurden.
Wenn `setTimeout()` blockieren würde, bis der Rückruf abgeschlossen ist, würden die Nachrichten in Reihenfolge angezeigt.

Asynchrone Methoden sind nützlich, weil sie es erlauben, Aufgaben parallel auszuführen, wenn die Reihenfolge der Ausführung keine Rolle spielt.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, wichtig ist, können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise Chaining) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Die an `setTimeout()` übergebenen Funktionen werden mit den normalen Funktionsaufrufsemantiken zum Bestimmen der Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ausgeführt.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Für nicht-Pfeil-Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann. Hier, wenn wir die Methode `counter.count` direkt an `setTimeout()` übergeben, geht der `this`-Kontext verloren, und die Methode wird auf dem globalen Objekt anstelle der `Counter`-Instanz aufgerufen, wodurch ein `TypeError` auftritt, wenn die `count`-Methode versucht, auf `this` zuzugreifen:

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

Um dies zu umgehen, müssen Sie sicherstellen, dass die an `setTimeout` übergebene Funktion den richtigen `this`-Kontext hat. Es gibt drei Hauptweisen, dies zu tun:

1. Wenn Sie den `this`-Kontext explizit angeben möchten, anstatt die Methode direkt zu übergeben, umschließen Sie den Methodenaufruf in einer anderen anonymen Funktion, die die Methode mit dem richtigen Kontext explizit aufruft:

   ```js
   setTimeout(() => counter.count("bar"), 1000);
   setTimeout(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setTimeout()` aufruft, verwenden Sie immer eine Pfeilfunktion, die den `this`-Kontext ihres umgebenden Scopes erbt:

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

3. Wenn Sie zusätzliche Funktionseinschließungen vermeiden möchten (die den Speicherverbrauch erhöhen), während Sie den `this`-Kontext explizit angeben, können Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, um eine neue Funktion mit dem richtigen `this`-Kontext zu erstellen:

   ```js
   setTimeout(counter.count.bind(counter), 1000, "bar");
   ```

### Nicht numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay) Wert aufgerufen wird, der keine Zahl ist, wird eine implizite {{Glossary("Type_coercion", "Typumwandlung")}} ohne Rückmeldung auf den Wert angewendet, um ihn in eine Zahl zu konvertieren.
Zum Beispiel wird der folgende Code fälschlicherweise der String `"1000"` für den _delay_ Wert verwendet, anstatt der Zahl `1000` – aber er funktioniert trotzdem, weil beim Ausführen des Codes der String in die Zahl `1000` umgewandelt wird, und somit der Code eine Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typumwandlung zu unerwarteten und überraschenden Ergebnissen führen.
Zum Beispiel wird beim Ausführen des folgenden Codes der String `"1 second"` letztendlich in die Zahl `0` umgewandelt — und so wird der Code ohne Verzögerung ausgeführt.

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

### Maximaler Verzögerungswert

Das `delay` Argument wird in eine unterzeichnete 32-Bit-Ganzzahl konvertiert, wodurch der Wert auf 2147483647 ms, oder ungefähr 24,8 Tage, begrenzt wird.
Verzögerungen, die diesen Wert überschreiten, führen zu einem Überlauf der Ganzzahl.
Zum Beispiel ergibt der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

…das Timeout wird sofort ausgeführt (da `2**32 - 5000` zu einer negativen Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

…das Timeout wird nach etwa 5 Sekunden ausgeführt.

> [!NOTE]
> In Node.js führt jede Verzögerung größer als 2,147,483,647 ms zur sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt mehrere Gründe, warum ein Timeout länger dauern kann als erwartet.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) spezifiziert, werden Browser ein Mindesttimeout von 4 Millisekunden durchsetzen, sobald ein verschachtelter `setTimeout`-Aufruf 5 mal terminiert wurde.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden verschachteln, und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird.
Die ersten vier Male beträgt die Verzögerung ungefähr 0 Millisekunden, danach etwa 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, werden Browser ein Mindesttimeout in inaktiven Tabs durchsetzen.
Es kann auch aufgehoben werden, wenn eine Seite Ton mit einem Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) abspielt.

Die Details dazu sind browserabhängig:

- Firefox Desktop hat ein Mindesttimeout von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat ein Mindesttimeout von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab ein [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen, je nachdem, wie aktiv der Tab ist:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton abgespielt hat oder von Chrome sonst als aktiv betrachtet wird. Timer laufen nahe am angeforderten Intervall.

  - **Drosselung**: Gilt für Timer, wenn die minimalen Bedingungen für die Drosselung nicht erfüllt sind und eine dieser Bedingungen zutrifft:
    - Verschachtelungszähler (Anzahl der verketteten Timer-Aufrufe) ist kleiner als 5.
    - Die Seite ist weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde geprüft, was zusammen mit anderen Timern, die ähnliche Zeitlimits haben, gebündelt werden kann.
  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale noch normale Drosselungsbedingungen erfüllt sind und alle folgenden Bedingungen zutreffen:
    - Verschachtelungszähler beträgt 5 oder mehr.
    - Die Seite ist länger als 5 Minuten unsichtbar.
    - Die Seite ist seit mehr als 30 Sekunden stumm.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute geprüft, was zusammen mit anderen Timern, die ähnliche Zeitlimits haben, gebündelt werden kann.

#### Drosselung von Tracking-Skripten

Firefox erzwingt zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Beim Ausführen im Vordergrund beträgt die minimale Drosselungsverzögerung immer noch 4ms. In Hintergrund-Tabs beträgt die minimale Drosselungsverzögerung jedoch 10.000 ms, oder 10 Sekunden, und tritt 30 Sekunden, nachdem ein Dokument erstmals geladen wurde, in Kraft.

Weitere Details finden Sie unter [Tracking-Schutz](https://wiki.mozilla.org/Security/Tracking_protection).

#### Späte Zeitouts

Das Timeout kann auch später auftreten als erwartet, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall ist, dass das Code-Snippet oder die Funktion nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist.
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

Dies liegt daran, dass selbst wenn `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in einer Warteschlange platziert und bei der nächsten Gelegenheit ausgeführt wird; nicht sofort.
Der momentan ausgeführte Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden. Daher kann die resultierende Ausführungsreihenfolge nicht wie erwartet sein.

#### Verschiebung von Timeouts während des Seitenladevorgangs

Firefox wird das Auslösen von `setTimeout()`-Timern verzögern, während der aktuelle Tab geladen wird. Das Auslösen wird verzögert, bis der Haupt-Thread als inaktiv angesehen wird (ähnlich wie bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)), oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)-API verwenden.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben im `code`-Parameter auszuführen.
Wenn die Eingabe ein potenziell unsicherer String ist, der von einem Benutzer bereitgestellt wird, besteht eine mögliche Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setTimeout()` `untrustedCode`, bereitgestellt von einem Benutzer, ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, werden standardmäßig verhindern, dass solcher Code ausgeführt wird.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, um `setTimeout()` ausführen zu lassen, aber dies ist unsicher, da es einen der Hauptschutzmechanismen der CSP deaktiviert.
Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Skripte zulassen müssen, die über `setTimeout()` ausgeführt werden, können Sie diese Probleme mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings zuweisen und vertrauenswürdige Typen [erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) unter Verwendung der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion erfolgt.

Um `setTimeout()` ausführen zu lassen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP-`script-src`-Directive angeben.
Dies wirkt auf dieselbe Weise wie `unsafe-eval`, erlaubt jedoch _nur_ die Methode zu evaluieren, wenn vertrauenswürdige Typen aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, würde es die Ausführung auch in Browsern erlauben, die keine vertrauenswürdigen Typen unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Seite wie folgt aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripts auf genau den Code beschränken, dem Sie vertrauen, ihn auszuführen.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze auf die Verwendung vertrauenswürdiger Typen verzichten.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

### Setzen und Löschen von Timeouts

Das folgende Beispiel richtet zwei einfache Schaltflächen in einer Webseite ein und verknüpft sie mit den `setTimeout()`- und `clearTimeout()`-Routinen.
Durch Drücken der ersten Schaltfläche wird ein Timeout festgelegt, das nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID zum Löschen mit `clearTimeout()` speichert.
Sie können dieses Timeout optional durch Drücken der zweiten Schaltfläche canceln.

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

Siehe auch das [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)-Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, das das Übergeben von Argumenten an den Rückruf in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
