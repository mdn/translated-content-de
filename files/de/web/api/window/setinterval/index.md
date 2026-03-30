---
title: "Window: setInterval() Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 6ee50f37f78b647f2d61741e94d0792098d8af88
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setInterval()`** Methode des [`Window`](/de/docs/Web/API/Window) Interface ruft wiederholt eine Funktion auf oder führt ein Code-Snippet aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

## Syntax

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, param1)
setInterval(func, delay, param1, param2)
setInterval(func, delay, param1, param2, /* …, */ paramN)
```

### Parameter

- `func`
  - : Eine {{jsxref("function")}}, die alle `delay` Millisekunden ausgeführt wird.
    Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String von beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird jedoch _dringend abgeraten_, aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Verzögerungszeit zwischen den Ausführungen der angegebenen Funktion oder des Codes, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.
    Siehe [Delay-Beschränkungen](#delay-beschränkungen) unten für Details zum zulässigen Bereich der `delay`-Werte.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die Funktion übergeben werden, die von _func_ spezifiziert wird, sobald der Timer abläuft.

### Rückgabewert

Eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den Intervall-Timer identifiziert, der durch den Aufruf erstellt wird.

Dieser Bezeichner, häufig als "interval ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Script geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) durch eine CSP [durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist. Sie wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder `TrustedScript`.

## Beschreibung

Die `setInterval()` Funktion wird häufig verwendet, um eine Verzögerung für Funktionen einzustellen, die immer wieder ausgeführt werden, wie z.B. Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen werden soll, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Delay-Beschränkungen

Es ist möglich, dass Intervalle geschachtelt sind; d.h. der Rückruf für `setInterval()` kann wiederum `setInterval()` aufrufen, um ein weiteres Intervall zu starten, auch wenn das erste noch läuft.
Um die möglichen Auswirkungen auf die Leistung zu mindern, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald Intervalle tiefer als fünf Ebenen geschachtelt sind.
Versuche, einen Wert von weniger als 4 ms in tief geschachtelten Aufrufen von `setInterval()` anzugeben, werden auf 4 ms festgelegt.

Unter bestimmten Umständen können Browser noch strengere Mindestwerte für das Intervall durchsetzen, obwohl diese nicht häufig vorkommen sollten.
Beachten Sie auch, dass die tatsächlich verstrichene Zeit zwischen den Aufrufen des Rückrufs länger als die angegebene `delay` sein kann; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) für Beispiele.

> [!NOTE]
> Das `delay` Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt, die den Wert auf 2147483647 ms beschränkt, was ungefähr 24,8 Tagen entspricht.

### Intervall-IDs werden mit `setTimeout()` geteilt

Die Methode gibt einen Bezeichner zurück, der den Intervall-Timer, der durch den Aufruf erstellt wurde, eindeutig identifiziert.
Dieser Bezeichner, der häufig als "interval ID" bezeichnet wird, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb desselben globalen Umfelds (z.B. ein bestimmtes Fenster oder Worker) bleibt die Intervall-ID eindeutig und wird nicht für einen neuen Intervall-Timer wiederverwendet, solange der ursprüngliche Timer noch aktiv ist.
Verschiedene globale Umgebungen pflegen jedoch ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Um Klarheit zu bewahren, sollten Sie jedoch immer versuchen, sie zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger zur Ausführung benötigt als die Intervallzeit, wird empfohlen, dass Sie rekursiv eine benannte Funktion mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufrufen.
Beispielsweise, wenn Sie `setInterval()` verwenden, um alle 5 Sekunden einen externen Server zu pollieren, könnten Netzwerkverzögerungen, ein nicht reagierender Server und eine Vielzahl anderer Probleme verhindern, dass die Anforderung in ihrer vorgegebenen Zeit abgeschlossen wird.
In solchen Fällen könnten Sie mit aufgereihten XHR-Anfragen konfrontiert sein, die nicht unbedingt in der richtigen Reihenfolge zurückkehren.

In diesen Fällen wird ein rekursives `setTimeout()` Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Beispiel wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt.
`loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik ausgeführt wurde.
Während dieses Muster keine garantierte Ausführung in einem festen Intervall sicherstellt, garantiert es, dass das vorherige Intervall abgeschlossen ist, bevor es rekursiv aufgerufen wird.

### Funktionen werden mit dem globalen `this` aufgerufen

Die an `setInterval()` übergebenen Funktionen werden mit normalen Funktionsaufruf-Semantiken ausgeführt, um die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu bestimmen.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Für nicht-Arrow-Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann. Hier, wenn wir die Methode `counter.count` direkt an `setInterval()` übergeben, geht der `this` Kontext verloren und die Methode wird auf dem globalen Objekt anstelle der `Counter` Instanz aufgerufen, was zu einem `TypeError` führt, wenn die `count`-Methode versucht, auf `this` zuzugreifen:

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
setInterval(counter.count, 1000, "bar");
// TypeError: Cannot read properties of undefined (reading 'set')
```

Um dies zu umgehen, müssen Sie sicherstellen, dass die an `setInterval` übergebene Funktion den korrekten `this` Kontext hat. Es gibt drei Hauptwege, dies zu tun:

1. Wenn Sie den `this` Kontext explizit angeben möchten, anstatt die Methode direkt zu übergeben, wickeln Sie den Methodenaufruf in eine andere anonyme Funktion, die die Methode explizit mit dem korrekten Kontext aufruft:

   ```js
   setInterval(() => counter.count("bar"), 1000);
   setInterval(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this` Kontext des Codes verwenden möchten, der `setInterval()` aufruft, verwenden Sie immer eine Arrow-Funktion, die den `this` Kontext ihres umgebenden Scopes erbt:

   ```js example-bad
   class Counter {
     // …
     repeatedCount(item) {
       // BAD: the `this` context is lost in the callback
       setInterval(function () {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

   ```js example-good
   class Counter {
     // …
     repeatedCount(item) {
       // GOOD: the arrow function inherits the `this` context of `repeatedCount()`
       setInterval(() => {
         this.data.set(item, (this.data.get(item) || 0) + 1);
       }, 1000);
     }
   }
   ```

3. Wenn Sie zusätzliche Funktions-Wrapper vermeiden möchten (die den Speicherverbrauch erhöhen), während Sie explizit den `this` Kontext angeben, können Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, um eine neue Funktion mit dem korrekten `this` Kontext zu erstellen:

   ```js
   setInterval(counter.count.bind(counter), 1000, "bar");
   ```

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben auszuführen, die im `code` Parameter übergeben werden.
Wenn die Eingabe ein möglicherweise unsicherer String ist, der von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-site-scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setInterval()` den von einem Benutzer bereitgestellten `untrustedCode` ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, verhindern standardmäßig die Ausführung solcher Codes.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, um `setInterval()` die Ausführung zu erlauben, aber dies ist unsicher, da es einen der wichtigsten Schutzmechanismen der CSP deaktiviert.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP Guide.

Wenn Sie die Ausführung der Skripte über `setInterval()` erlauben müssen, können Sie diese Probleme mildern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstatt Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types), indem Sie die [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive verwenden.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion übergeben wird.

Um `setInterval()` ausführen zu lassen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrem CSP `script-src`-Direktiv angeben.
Dies wirkt in derselben Weise wie `unsafe-eval`, erlaubt jedoch _nur_ die Ausführung der Methode, wenn Trusted Types aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, würde es die Ausführung auch in Browsern erlauben, die Trusted Types nicht unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Website folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, dass er ausgeführt wird.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze keine Trusted Types verwenden.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

### Beispiel 1: Grundsyntax

Das folgende Beispiel demonstriert die Grundsyntax von `setInterval()`.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

### Beispiel 2: Zwei Farben abwechselnd

Das folgende Beispiel ruft die Funktion `flashtext()` einmal pro Sekunde auf, bis die Stop-Taste gedrückt wird.

#### HTML

```html
<div id="my_box">
  <h3>Hello World</h3>
</div>
<button id="start">Start</button>
<button id="stop">Stop</button>
```

#### CSS

```css
.go {
  color: green;
}
.stop {
  color: red;
}
```

#### JavaScript

```js
// variable to store our intervalID
let intervalId;

function changeColor() {
  // check if an interval has already been set up
  intervalId ??= setInterval(flashText, 1000);
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(intervalId);
  // release our intervalId from the variable
  intervalId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### Ergebnis

{{EmbedLiveSample("Example_2:_Alternating_two_colors")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Rückruf in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
