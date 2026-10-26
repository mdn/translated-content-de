---
title: "Window: Methode setTimeout()"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der Parameter `code` verwendet wird, führt diese Methode dessen Wert dynamisch als JavaScript aus.
> Solche APIs werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie statt Strings stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`setTimeout()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) setzt einen Timer, der nach Ablauf eine Funktion oder einen angegebenen Codeabschnitt einmalig ausführt.

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
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String mit beliebigem Code, der nach `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird aber aus denselben Gründen, aus denen {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt, _dringend abgeraten_.
- `delay` {{optional_inline}}
  - : Eine nicht negative Ganzzahl in Millisekunden, die angibt, wie lange der Timer warten soll, bevor die angegebene Funktion oder der Code ausgeführt wird.
    Wird der Wert nicht angegeben, beträgt er standardmäßig 0.

    Hinweise:
    - Die Verzögerung darf höchstens 2147483647 ms betragen. Größere Werte können zu einem Überlauf führen oder dazu, dass der Wert 0 verwendet wird.
      Weitere Informationen finden Sie unter [Maximaler Verzögerungswert](#maximaler_verzögerungswert).
    - Die tatsächliche Verzögerung kann länger sein als angegeben.
      Wenn `delay` beispielsweise auf 0 gesetzt wird, erfolgt die Ausführung im nächsten Event-Zyklus und nicht „sofort“.
      Weitere Informationen finden Sie unter [Gründe für längere Verzögerungen als angegeben](#gründe_für_längere_verzögerungen_als_angegeben).
    - Ist der Wert keine Zahl, wird er stillschweigend durch implizite {{Glossary("Type_coercion", "Typumwandlung")}} in eine Zahl umgewandelt.
      Dies kann zu unerwarteten Ergebnissen führen. Ein Beispiel finden Sie unter [Nicht numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt](#nicht_numerische_verzögerungswerte_werden_stillschweigend_in_zahlen_umgewandelt).
    - Negative Werte verhalten sich wie 0.

- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch `func` angegebene Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (üblicherweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Timer eindeutig identifiziert.
Diese Kennung, häufig als „Timeout-ID“ bezeichnet, kann an [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) übergeben werden, um den Timer abzubrechen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Workers) wird eine Timeout-ID garantiert nicht für einen neuen Timer wiederverwendet, solange der ursprüngliche Timer aktiv ist.
Getrennte globale Umgebungen verwalten jedoch jeweils eigene, unabhängige Pools von Timer-IDs.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `code` auf einen String gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Die Ausnahme wird auch ausgelöst, wenn der erste Parameter keinem der unterstützten Typen entspricht: Funktion, String oder `TrustedScript`.

## Beschreibung

Die Funktion `setTimeout()` wird häufig verwendet, um eine Funktion nach einer Verzögerung genau einmal aufzurufen.
Sie können [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) aufrufen, um den Timeout vor seiner Ausführung abzubrechen.

Wenn Sie eine Funktion wiederholt aufrufen möchten (z. B. alle _N_ Millisekunden), können Sie [`setInterval()`](/de/docs/Web/API/Window/setInterval) verwenden.

### Arbeiten mit asynchronen Funktionen

`setTimeout()` ist eine asynchrone Funktion. Das bedeutet, dass sie sofort zurückkehrt, nachdem sie die Ausführung der Callback-Funktion oder des Codes eingeplant hat.
Sie „wartet“ nicht und blockiert somit nicht die Ausführung der Codezeilen nach `setTimeout()`, bis der eingeplante Code ausgeführt wurde.

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

Die Methode `setTimeout()` wird dreimal aufgerufen. Dabei wird jeweils eine Callback-Funktion übergeben, die die Reihenfolge der `setTimeout()`-Aufrufe protokolliert.
Da die früheren Methodenaufrufe längere Verzögerungen haben, werden die Callback-Funktionen in umgekehrter Reihenfolge ihrer Einplanung ausgeführt.
Würde `setTimeout()` bis zum Abschluss des Callbacks blockieren, würden die Meldungen in der ursprünglichen Reihenfolge ausgegeben.

Asynchrone Methoden sind nützlich, weil sie die parallele Ausführung von Aufgaben ermöglichen, wenn die Ausführungsreihenfolge keine Rolle spielt.
Wenn die Reihenfolge, in der eine asynchrone Methode abgeschlossen wird, wichtig ist, können Sie [Promises](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) (Promise-Verkettung) verwenden, um auf den Abschluss einer Aufgabe zu warten.

### Funktionen werden mit dem globalen `this` aufgerufen

Für Funktionen, die an `setTimeout()` übergeben werden, gelten bei der Bestimmung der Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) die üblichen Regeln für Funktionsaufrufe.
Dieses Problem wird in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erläutert.

Bei Funktionen, die keine Arrow-Funktionen sind, wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)-Objekt gesetzt (in Browsern ein Alias für [`window`](/de/docs/Web/API/Window/window)).

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann. Wenn die Methode `counter.count` direkt an `setTimeout()` übergeben wird, geht der `this`-Kontext verloren. Die Methode wird dann auf dem globalen Objekt statt auf der `Counter`-Instanz aufgerufen. Dies führt zu einem `TypeError`, wenn die Methode `count` versucht, auf `this` zuzugreifen:

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

Um dies zu vermeiden, müssen Sie sicherstellen, dass die an `setTimeout` übergebene Funktion den richtigen `this`-Kontext hat. Dafür gibt es drei wesentliche Möglichkeiten:

1. Wenn Sie den `this`-Kontext ausdrücklich festlegen möchten, übergeben Sie die Methode nicht direkt. Umschließen Sie den Methodenaufruf stattdessen mit einer weiteren anonymen Funktion, die die Methode ausdrücklich mit dem richtigen Kontext aufruft:

   ```js
   setTimeout(() => counter.count("bar"), 1000);
   setTimeout(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setTimeout()` aufruft, verwenden Sie eine Arrow-Funktion. Diese übernimmt den `this`-Kontext ihres umgebenden Gültigkeitsbereichs:

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

3. Wenn Sie zusätzliche Funktions-Wrapper vermeiden möchten (die den Speicherverbrauch erhöhen) und zugleich den `this`-Kontext ausdrücklich festlegen wollen, können Sie mit der Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) eine neue Funktion mit dem richtigen `this`-Kontext erstellen:

   ```js
   setTimeout(counter.count.bind(counter), 1000, "bar");
   ```

### Nicht numerische Verzögerungswerte werden stillschweigend in Zahlen umgewandelt

Wenn `setTimeout()` mit einem [_delay_](#delay)-Wert aufgerufen wird, der keine Zahl ist, wird der Wert stillschweigend durch implizite {{Glossary("Type_coercion", "Typumwandlung")}} in eine Zahl umgewandelt.
Im folgenden Code wird beispielsweise fälschlicherweise der String `"1000"` statt der Zahl `1000` als _delay_-Wert verwendet. Dennoch funktioniert der Code, weil der String bei der Ausführung in die Zahl `1000` umgewandelt und der Code somit eine Sekunde später ausgeführt wird.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000");
```

In vielen Fällen kann die implizite Typumwandlung zu unerwarteten Ergebnissen führen.
Bei der Ausführung des folgenden Codes wird der String `"1 second"` letztlich in die Zahl `0` umgewandelt. Daher wird der Code ohne Verzögerung ausgeführt.

```js example-bad
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second");
```

Verwenden Sie daher für den _delay_-Wert keine Strings, sondern stets Zahlen:

```js example-good
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000);
```

### Maximaler Verzögerungswert

Das Argument `delay` wird in eine vorzeichenbehaftete 32-Bit-Ganzzahl umgewandelt. Dadurch ist der Wert auf 2147483647 ms oder ungefähr 24,8 Tage begrenzt.
Größere Verzögerungen führen zu einem Ganzzahlüberlauf.
Dieser Code beispielsweise:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 - 5000);
```

… führt dazu, dass der Timeout sofort ausgeführt wird (da `2**32 - 5000` in eine negative Zahl überläuft). Der folgende Code hingegen:

```js
setTimeout(() => console.log("hi!"), 2 ** 32 + 5000);
```

… führt dazu, dass der Timeout nach ungefähr 5 Sekunden ausgeführt wird.

> [!NOTE]
> In Node.js führt jeder Timeout von mehr als 2.147.483.647 ms zur sofortigen Ausführung.

### Gründe für längere Verzögerungen als angegeben

Es gibt verschiedene Gründe, weshalb ein Timeout später als erwartet ausgelöst werden kann.
Dieser Abschnitt beschreibt die häufigsten Gründe.

#### Verschachtelte Timeouts

Wie im [HTML-Standard](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers) festgelegt, setzen Browser eine Mindestverzögerung von 4 Millisekunden durch, sobald ein verschachtelter Aufruf von `setTimeout` fünfmal eingeplant wurde.

Dies zeigt das folgende Beispiel: Ein Aufruf von `setTimeout` mit einer Verzögerung von `0` Millisekunden wird verschachtelt, und bei jedem Aufruf des Handlers wird die Verzögerung protokolliert.
Bei den ersten vier Aufrufen beträgt die Verzögerung ungefähr 0 Millisekunden, danach ungefähr 4 Millisekunden:

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

Um die Belastung (und den damit verbundenen Akkuverbrauch) durch Hintergrund-Tabs zu verringern, setzen Browser in inaktiven Tabs eine Mindestverzögerung für Timeouts durch.
Diese Beschränkung kann auch entfallen, wenn eine Seite über einen [`AudioContext`](/de/docs/Web/API/AudioContext) der Web Audio API Ton wiedergibt.

Die Einzelheiten hängen vom Browser ab:

- Firefox Desktop hat für inaktive Tabs eine Mindestverzögerung von 1 Sekunde.
- Firefox für Android hat für inaktive Tabs eine Mindestverzögerung von 15 Minuten und kann sie vollständig aus dem Speicher entfernen.
- Firefox drosselt inaktive Tabs nicht, wenn der Tab einen [`AudioContext`](/de/docs/Web/API/AudioContext) enthält.
- Chrome verwendet je nach Aktivität des Tabs unterschiedliche Drosselungsstufen:
  - **Minimale Drosselung**: Gilt für Timer, wenn die Seite sichtbar ist, kürzlich Ton wiedergegeben hat oder von Chrome aus anderen Gründen als aktiv eingestuft wird. Timer werden ungefähr im angeforderten Intervall ausgeführt.

  - **Drosselung**: Gilt für Timer, wenn die Voraussetzungen für minimale Drosselung nicht erfüllt sind und mindestens eine der folgenden Bedingungen zutrifft:
    - Die Verschachtelungszahl (d.h. die Anzahl verketteter Timer-Aufrufe) liegt unter 5.
    - Die Seite ist seit weniger als 5 Minuten nicht sichtbar.
    - WebRTC ist aktiv.

  Timer in diesem Zustand werden einmal pro Sekunde überprüft. Die Überprüfung kann zusammen mit anderen Timern erfolgen, die ähnliche Timeouts haben.
  - **Intensive Drosselung**: Eingeführt mit Chrome 88 (Januar 2021). Gilt für Timer, wenn weder die Bedingungen für minimale Drosselung noch die für Drosselung erfüllt sind und alle folgenden Bedingungen zutreffen:
    - Die Verschachtelungszahl beträgt mindestens 5.
    - Die Seite ist seit mehr als 5 Minuten nicht sichtbar.
    - Die Seite hat seit mehr als 30 Sekunden keinen Ton wiedergegeben.
    - WebRTC ist inaktiv.

  Timer in diesem Zustand werden einmal pro Minute überprüft. Die Überprüfung kann zusammen mit anderen Timern erfolgen, die ähnliche Timeouts haben.

#### Drosselung von Tracking-Skripten

Firefox drosselt Skripte zusätzlich, wenn es sie als Tracking-Skripte erkennt.
Bei Ausführung im Vordergrund beträgt die Mindestverzögerung durch die Drosselung weiterhin 4 ms. In Hintergrund-Tabs beträgt sie dagegen 10.000 ms beziehungsweise 10 Sekunden. Diese Regelung tritt 30 Sekunden nach dem ersten Laden eines Dokuments in Kraft.

Weitere Informationen finden Sie unter [Tracking Protection](https://wiki.mozilla.org/Security/Tracking_protection).

#### Verspätete Timeouts

Ein Timeout kann auch später als erwartet ausgelöst werden, wenn die Seite (oder das Betriebssystem bzw. der Browser) mit anderen Aufgaben beschäftigt ist.
Wichtig ist insbesondere, dass die Funktion oder der Codeabschnitt erst ausgeführt werden kann, wenn der Thread, der `setTimeout()` aufgerufen hat, seine Ausführung beendet hat.
Zum Beispiel:

```js
function foo() {
  console.log("foo has been called");
}
setTimeout(foo, 0);
console.log("After setTimeout");
```

Schreibt Folgendes in die Konsole:

```plain
After setTimeout
foo has been called
```

Der Grund dafür ist, dass der Aufruf von `setTimeout` trotz einer Verzögerung von null in eine Warteschlange gestellt und für die nächste Gelegenheit zur Ausführung eingeplant wird – nicht für eine sofortige Ausführung.
Der aktuell ausgeführte Code muss abgeschlossen sein, bevor Funktionen aus der Warteschlange ausgeführt werden. Deshalb kann die tatsächliche Ausführungsreihenfolge von der erwarteten abweichen.

#### Aufschub von Timeouts während des Seitenladens

Firefox schiebt die Auslösung von `setTimeout()`-Timern auf, während der aktuelle Tab geladen wird. Sie werden erst ausgelöst, wenn der Hauptthread als inaktiv gilt (ähnlich wie bei [`Window.requestIdleCallback()`](/de/docs/Web/API/Window/requestIdleCallback)) oder wenn das Ladeereignis ausgelöst wird.

### WebExtension-Hintergrundseiten und Timer

In [WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) funktioniert `setTimeout()` nicht zuverlässig. Entwickler von Erweiterungen sollten stattdessen die [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms)-API verwenden.

### Sicherheitsaspekte

Die Methode kann beliebige Eingaben ausführen, die über den Parameter `code` übergeben werden.
Wenn die Eingabe ein potenziell unsicherer, von einem Benutzer bereitgestellter String ist, kann dies einen Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.

Der folgende Code zeigt beispielsweise, wie `setTimeout()` den von einem Benutzer bereitgestellten Wert `untrustedCode` ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setTimeout(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) festlegt, verhindern standardmäßig die Ausführung solchen Codes.
Sie können in Ihrer CSP [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) angeben, damit `setTimeout()` den Code ausführen darf. Dies ist jedoch unsicher, da dadurch einer der wichtigsten Schutzmechanismen der CSP deaktiviert wird.
Weitere Informationen finden Sie unter [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Ausführung von Skripten über `setTimeout()` zulassen müssen, können Sie diese Risiken verringern, indem Sie statt Strings stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte zuweisen und mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft.

Damit `setTimeout()` den Code ausführen darf, müssen Sie zusätzlich das [Schlüsselwort `trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in der CSP-Direktive `script-src` angeben.
Es wirkt ähnlich wie `unsafe-eval`, erlaubt die Auswertung durch die Methode aber _nur_, wenn Trusted Types aktiviert sind. Mit `unsafe-eval` wäre die Ausführung dagegen auch in Browsern zulässig, die Trusted Types nicht unterstützen.

Die erforderliche CSP für Ihre Website könnte beispielsweise so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom jeweiligen Anwendungsfall ab, für den ein von einem Benutzer bereitgestelltes Skript benötigt wird.
Wenn möglich, sollten Sie die zulässigen Skripte auf genau den Code beschränken, dessen Ausführung Sie vertrauen.
Ist dies nicht möglich, können Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele der Kürze halber auf Trusted Types verzichten.
Ein Codebeispiel für die empfohlene Vorgehensweise finden Sie unter [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) bei `eval()`.

### Timeouts setzen und löschen

Das folgende Beispiel richtet zwei einfache Schaltflächen auf einer Webseite ein und verknüpft sie mit den Routinen `setTimeout()` und `clearTimeout()`.
Ein Klick auf die erste Schaltfläche setzt einen Timeout, der nach zwei Sekunden eine Meldung anzeigt, und speichert die Timeout-ID für die Verwendung durch `clearTimeout()`.
Sie können diesen Timeout durch einen Klick auf die zweite Schaltfläche abbrechen.

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

- [Polyfill für `setTimeout` in `core-js`, mit dem Argumente an den Callback übergeben werden können](https://core-js.io/docs/features/web-standards/settimeout-setinterval)
- [`Window.clearTimeout()`](/de/docs/Web/API/Window/clearTimeout)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`Window.setInterval()`](/de/docs/Web/API/Window/setInterval)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
- [`Window.queueMicrotask()`](/de/docs/Web/API/Window/queueMicrotask)
