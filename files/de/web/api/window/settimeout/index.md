---
title: "Window: setTimeout() Methode"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der Parameter `code` verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setTimeout()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle setzt einen Timer, der eine Funktion oder ein bestimmtes Stück Code ausführt, sobald der Timer abläuft.

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
  - : Eine {{jsxref("Function")}}, die ausgeführt wird, nachdem der Timer abgelaufen ist.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge mit beliebigem Code, der nach `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle des Übergabens einer Funktion verwendet werden, wird jedoch _stark abgeraten_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Ein nicht-negativer ganzzahliger Wert, der angibt, wie lange der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird, in Millisekunden.
    Wenn nicht angegeben, beträgt der Standardwert 0.

    Hinweis:
    - Der Delay hat einen maximalen Wert von 2147483647 ms — die Angabe größerer Werte kann zu einem Überlauf oder einem Wert von 0 führen.
      Siehe [Maximalwert der Verzögerung](#maximalwert_der_verzögerung) unten für weitere Informationen.
    - Die tatsächliche Verzögerung kann länger als eingestellt sein.
      Zum Beispiel wird bei einem `delay` von 0 im nächsten Ereigniszyklus ausgeführt, statt "sofort".
      Siehe [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben) für mehr Informationen.
    - Wenn der Wert keine Zahl ist, wird stillschweigend eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} am Wert vorgenommen, um ihn in eine Zahl umzuwandeln.
      Dies kann zu unerwarteten und überraschenden Ergebnissen führen — siehe [Nicht-zahlische Verzögerungswerte werden stillschweigend in Zahlen konvertiert](#nicht-zahlische_verzögerungswerte_werden_stillschweigend_in_zahlen_konvertiert) für ein Beispiel.
    - Negative Werte verhalten sich wie 0.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die mit `func` spezifizierte Funktion übergeben werden.

### Rückgabewert

Eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Dieser Bezeichner, oft als "Timeout-ID" bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer zu abbrechen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Workers) wird garantiert, dass die Timeout-ID nicht wiederverwendet wird, solange der ursprüngliche Timer aktiv bleibt.
Jedoch halten separate globale Umgebungen ihre eigenen unabhängigen Pools von Timer-IDs aufrecht.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf eine Zeichenfolge gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, eine Zeichenfolge oder ein `TrustedScript`.

## Beschreibung

Die `setTimeout()`-Funktion wird häufig verwendet, um eine Funktion mit einer Verzögerung einmal auszuführen.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um den Timeout abzubrechen, bevor er abgeschlossen ist.

Wenn Sie eine Funktion wiederholt (z. B. alle _N_ Millisekunden) aufrufen möchten, können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion, was bedeutet, dass sie sofort zurückkehrt, nachdem sie die Rückruffunktion oder den Code zur Ausführung eingeplant hat.
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

Die `setTimeout()`-Methode wird dreimal aufgerufen und übergibt eine Rückruffunktion, die die Reihenfolge protokolliert, in der `setTimeout()` aufgerufen wurde.
Da die früheren Methodenaufrufe größere Verzögerungen haben, werden die Rückruffunktionen in umgekehrter Reihenfolge ausgeführt, wie sie eingeplant wurden.
Wenn `setTimeout()` blockiert, bis der Rückruf abgeschlossen ist, würden die Nachrichten in der Reihenfolge angezeigt.

Asynchrone Methoden sind nützlich, da sie es erlauben, Aufgaben parallel auszuführen, wenn die Reihenfolge der Ausführung keine Rolle spielt.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, eine Rolle spielt, können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise-Ketten) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Die an `setTimeout()` übergebenen Funktionen werden mit den normalem Funktionsaufrufsemantiken für die Bestimmung der Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ausgeführt.
Dieses Problem wird ausführlich in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

Für Nicht-Arrow-Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann. Hier, als wir die Methode `counter.count` direkt an `setTimeout()` übergeben, geht der `this`-Kontext verloren und die Methode wird auf dem globalen Objekt anstelle der `Counter`-Instanz aufgerufen, was zu einem `TypeError` führt, wenn die `count`-Methode versucht, auf `this` zuzugreifen:

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

Um dies zu umgehen, müssen Sie sicherstellen, dass die an `setTimeout` übergebene Funktion den richtigen `this`-Kontext hat. Es gibt drei Hauptmethoden, dies zu tun:

1. Wenn Sie den `this`-Kontext ausdrücklich angeben möchten, wickeln Sie den Methodenaufruf in eine andere anonyme Funktion, die die Methode ausdrücklich mit dem richtigen Kontext aufruft:

   ```js
   setTimeout(() => counter.count("bar"), 1000);
   setTimeout(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setTimeout()` aufruft, verwenden Sie immer eine Arrow-Funktion, die den `this`-Kontext ihres umgebenden Scopes erbt:

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

3. Wenn Sie zusätzliche Funktionswrapper (die den Speicherverbrauch erhöhen) vermeiden möchten, während Sie den `this`-Kontext ausdrücklich angeben, können Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, um eine neue Funktion mit dem korrekten `this`-Kontext zu erstellen:

   ```js
   setTimeout(counter.count.bind(counter), 1000, "bar");
   ```

### Nicht-zahlische Verzögerungswerte werden stillschweigend in Zahlen konvertiert

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird stillschweigend eine implizite {{Glossary("Type_coercion", "Typkonvertierung")}} am Wert vorgenommen, um ihn in eine Zahl umzuwandeln.
Zum Beispiel verwendet der folgende Code fälschlicherweise die Zeichenfolge `"1000"` für den _delay_-Wert, anstatt die Zahl `1000` – aber es funktioniert dennoch, da bei der Ausführung des Codes die Zeichenkette in die Zahl `1000` konvertiert wird und der Code so 1 Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typkonvertierung zu unerwarteten und überraschenden Ergebnissen führen.
Wenn z. B. der folgende Code ausgeführt wird, wird die Zeichenfolge `"1 second"` letztendlich in die Zahl `0` konvertiert — und der Code wird mit einer Verzögerung von null ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Daher sollten Sie keine Zeichenfolgen für den _delay_-Wert verwenden, sondern immer Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Maximalwert der Verzögerung

Das `delay`-Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt, was den Wert auf 2147483647 ms oder etwa 24,8 Tage beschränkt.
Verzögerungen, die diesen Wert überschreiten, führen zu einem Ganzzahlüberlauf.
Wenn z. B. dieser Code ausgeführt wird:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

...führt das dazu, dass das Timeout sofort ausgeführt wird (da `2**32 - 5000` in eine negative Zahl überläuft), während der folgende Code:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

... dazu führt, dass das Timeout nach ungefähr 5 Sekunden ausgeführt wird.

> [!NOTE]
> In Node.js führt jeder Timeout, der größer als 2.147.483.647 ms ist, zu einer sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt eine Reihe von Gründen, warum ein Timeout länger dauern kann als erwartet.
In diesem Abschnitt sind die häufigsten Gründe beschrieben.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) festgelegt, erzwingen Browser nach 5-maligem Verschachteln von `setTimeout`-Aufrufen eine Mindestzeitüberschreitung von 4 Millisekunden.

Dies kann im folgenden Beispiel gesehen werden, in dem wir einen `setTimeout`-Aufruf mit einer Verzögerung von `0` Millisekunden verschachteln und die Verzögerung jedes Mal protokollieren, wenn der Handler aufgerufen wird.
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

Um die Last (und den damit verbundenen Batterieverbrauch) von Hintergrund-Tabs zu reduzieren, erzwingen Browser eine Mindestzeitüberschreitung bei inaktiven Tabs.
Sie kann auch ausgesetzt werden, wenn eine Seite über eine Web Audio API [`AudioContext`](/de/docs/Web/API/AudioContext) Tonwiedergabe verwendet.

Die Einzelheiten hierzu sind browserabhängig:

- Firefox Desktop hat eine Mindestzeitüberschreitung von 1 Sekunde für inaktive Tabs.
- Firefox für Android hat eine Mindestzeitüberschreitung von 15 Minuten für inaktive Tabs und kann sie vollständig entladen.
- Firefox drosselt keine inaktiven Tabs, wenn der Tab ein [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet unterschiedliche Drosselungsstufen, je nach Aktivität des Tabs:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Sound abgespielt hat oder anderweitig von Chrome als aktiv angesehen wird. Timer laufen in der Nähe des angeforderten Intervalls.

  - **Drosselung**: Gilt für Timer, wenn die minimalen Drosselbedingungen nicht erfüllt sind und einer der folgenden Bedingungen zutrifft:
    - Der Verschachtelungszähler (d.h. die Anzahl der verketteten Timeraufrufe) ist kleiner als 5.
    - Die Seite war weniger als 5 Minuten unsichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft, was gebündelt mit anderen Timern mit ähnlichen Zeitüberschreitungen geschehen kann.
  - **Intensive Drosselung**: Eingeführt in Chrome 88 (Januar 2021). Gilt für Timer, wenn weder minimale Drosselung noch Drosselungsbedingungen erfüllt sind und alle der folgenden Bedingungen erfüllt sind:
    - Der Verschachtelungszähler ist 5 oder höher.
    - Die Seite war mehr als 5 Minuten unsichtbar.
    - Die Seite war mehr als 30 Sekunden still.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft, was gebündelt mit anderen Timern mit ähnlichen Zeitüberschreitungen geschehen kann.

#### Drosselung von Tracking-Skripten

Firefox erzwingt eine zusätzliche Drosselung für Skripte, die als Tracking-Skripte erkannt werden.
Im Vordergrund beträgt die Mindestzeitüberschreitung 4ms. In Hintergrund-Tabs beträgt die Mindestzeitüberschreitung jedoch 10.000 ms oder 10 Sekunden, was 30 Sekunden nach dem erstmaligen Laden eines Dokuments in Kraft tritt.

Weitere Details finden Sie unter [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection).

#### Verspätete Timeouts

Das Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem/der Browser) mit anderen Aufgaben beschäftigt ist.
Ein wichtiger Fall ist, dass das Funktions- oder Codesegment nicht ausgeführt werden kann, bis der Thread, der `setTimeout()` aufgerufen hat, beendet ist.
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

Dies liegt daran, dass, obwohl `setTimeout` mit einer Verzögerung von null aufgerufen wurde, es in eine Warteschlange gestellt und bei der nächsten Gelegenheit ausgeführt wird; nicht sofort.
Derzeit ausgeführter Code muss abgeschlossen sein, bevor Funktionen in der Warteschlange ausgeführt werden, weshalb die resultierende Ausführungsreihenfolge möglicherweise nicht wie erwartet ist.

#### Verschiebung von Timeouts während des Ladevorgangs

Firefox wird `setTimeout()`-Timer verzögern, während der aktuelle Tab geladen wird. Das Auslösen wird verzögert, bis der Haupt-Thread als untätig angesehen wird (ähnlich wie [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)) oder bis das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Erweiterungsautoren sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms) API verwenden.

### Sicherheitsüberlegungen

Die Methode kann benutzt werden, um beliebige Eingabe auszuführen, die im `code`-Parameter übergeben wird.
Wenn die Eingabe eine möglicherweise unsichere Zeichenkette ist, die von einem Benutzer bereitgestellt wurde, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setTimeout()` untrustedCode ausführen könnte, das von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern, dass solcher Code standardmäßig ausgeführt wird.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP spezifizieren, um `setTimeout()` die Ausführung zu ermöglichen, aber das ist unsicher, da es einen der Hauptschutze von CSP deaktiviert.
Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Ausführung der Skripte über `setTimeout()` erlauben müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenketten zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `setTimeout()` ausführen zu lassen, müssen Sie zudem das [`trusted-types-eval` Schlagwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive spezifizieren.
Dies funktioniert ähnlich wie `unsafe-eval`, ermöglicht jedoch nur die Methode zur Ausführung, wenn vertrauenswürdige Typen aktiv sind (würden Sie `unsafe-eval` verwenden, würde es die Ausführung auch in Browsern erlauben, die vertrauenswürdige Typen nicht unterstützen).

Zum Beispiel könnte eine notwendige CSP für Ihre Website so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt von dem spezifischen Anwendungsfall ab, der ein benutzerbereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, ihn auszuführen.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenkette erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele zur Kürze die Verwendung von vertrauenswürdigen Typen weglassen.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

### Einstellen und Abbrechen von Timeouts

Im folgenden Beispiel werden zwei einfache Schaltflächen in einer Webseite erstellt und mit den `setTimeout()`- und `clearTimeout()`-Routinen verbunden.
Durch Drücken der ersten Schaltfläche wird ein Timeout eingestellt, das nach zwei Sekunden eine Nachricht anzeigt und die Timeout-ID zur Verwendung durch `clearTimeout()` speichert.
Sie können dieses Timeout optional durch Drücken der zweiten Schaltfläche abbrechen.

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

Siehe auch das Beispiel für [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setTimeout`, der das Übergeben von Argumenten an die Rückruffunktion in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
