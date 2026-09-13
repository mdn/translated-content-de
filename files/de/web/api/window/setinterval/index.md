---
title: "Fenster: setInterval()-Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setInterval()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle ruft wiederholt eine Funktion auf oder führt einen Code-Schnipsel aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

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
  - : Eine {{jsxref("Function")}}, die alle `delay` Millisekunden ausgeführt wird.
    Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge von beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird aber _dringend abgeraten_, aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Verzögerungszeit zwischen den Ausführungen der angegebenen Funktion oder des Codes, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum erlaubten Bereich der `delay`-Werte.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ spezifizierte Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Eine positive Ganzzahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf eine Zeichenfolge gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [von einer CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, Zeichenfolge oder `TrustedScript`.

## Beschreibung

Die `setInterval()`-Funktion wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z. B. Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie wünschen, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle verschachtelt werden; das bedeutet, dass der Rückruf für `setInterval()` seinerseits `setInterval()` aufrufen kann, um ein weiteres Intervall zu starten, obwohl das erste noch läuft.
Um den potenziellen Einfluss auf die Leistung zu mindern, erzwingt der Browser automatisch einen minimalen Wert von 4 ms für das Intervall, wenn Intervalle über fünf Ebenen tief verschachtelt sind.
Versuche, einen Wert von weniger als 4 ms in tief verschachtelten Aufrufen von `setInterval()` anzugeben, werden auf 4 ms festgesetzt.

Browser können in bestimmten Umständen sogar noch strengere Mindestwerte für das Intervall durchsetzen, obwohl diese nicht häufig auftreten sollten.
Beachten Sie auch, dass die tatsächliche Zeitspanne zwischen den Aufrufen des Rückrufs länger sein kann als das angegebene `delay`; schauen Sie sich [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) für Beispiele an.

> [!NOTE]
> Das `delay`-Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt, was den Wert auf 2147483647 ms oder etwa 24,8 Tage beschränkt.

### Intervall-IDs werden mit `setTimeout()` geteilt

Die Methode gibt einen Bezeichner zurück, der den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.
Dieser Bezeichner, der oft als "Intervall-ID" bezeichnet wird, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) bleibt die Intervall-ID eindeutig und wird nicht für irgendeinen neuen Intervall-Timer wiederverwendet, solange der ursprüngliche Timer noch aktiv ist.
Jedoch halten unterschiedliche globale Umgebungen ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Zur Klarheit sollten Sie jedoch versuchen, sie immer zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger dauern könnte als die Intervallzeit, wird empfohlen, dass Sie eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufrufen.
Zum Beispiel, wenn Sie `setInterval()` verwenden, um alle 5 Sekunden einen Remote-Server abzufragen, könnten Netzwerkverzögerungen, ein nicht antwortender Server und eine Vielzahl anderer Probleme verhindern, dass die Anfrage in der zugewiesenen Zeit abgeschlossen wird.
In solchen Fällen könnten Sie auf aufgestaute XHR-Anfragen stoßen, die nicht unbedingt in Reihenfolge zurückkehren.

In diesen Fällen wird ein rekursives `setTimeout()`-Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Code-Schnipsel wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt.
`loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik abgeschlossen ist.
Obwohl dieses Muster keine garantierte Ausführung in einem festen Intervall gewährleistet, stellt es sicher, dass das vorherige Intervall abgeschlossen ist, bevor es rekursiv aufgerufen wird.

### Funktionen werden mit dem globalen `this` aufgerufen

Die an `setInterval()` übergebenen Funktionen werden mit normalen Funktionsaufrufsemantiken ausgeführt, um die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu bestimmen.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) im Detail erklärt.

Für Nicht-Arrow-Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel zeigt, wie dies unerwartetes Verhalten verursachen kann. Hier, wenn wir die Methode `counter.count` direkt an `setInterval()` übergeben, geht der `this`-Kontext verloren und die Methode wird auf dem globalen Objekt anstelle der `Counter`-Instanz aufgerufen, was zu einem `TypeError` führt, wenn die `count`-Methode versucht, auf `this` zuzugreifen:

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

Um dies zu umgehen, müssen Sie sicherstellen, dass die an `setInterval` übergebene Funktion den korrekten `this`-Kontext hat. Es gibt drei Hauptmethoden, dies zu erreichen:

1. Wenn Sie den `this`-Kontext ausdrücklich angeben möchten, anstatt die Methode direkt zu übergeben, wickeln Sie den Methodenaufruf in eine andere anonyme Funktion, die die Methode mit dem korrekten Kontext ausdrücklich aufruft:

   ```js
   setInterval(() => counter.count("bar"), 1000);
   setInterval(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setInterval()` aufruft, nutzen Sie immer eine Arrow-Funktion, die den `this`-Kontext ihres umgebenden Scope erbt:

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

3. Wenn Sie zusätzliche Funktions-Wrapper vermeiden möchten (die den Speicherverbrauch erhöhen) und gleichzeitig den `this`-Kontext ausdrücklich festlegen möchten, können Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, um eine neue Funktion mit dem korrekten `this`-Kontext zu erstellen:

   ```js
   setInterval(counter.count.bind(counter), 1000, "bar");
   ```

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben, die im `code`-Parameter übergeben werden, auszuführen.
Wenn die Eingabe eine potenziell unsichere Zeichenfolge von einem Benutzer ist, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setInterval()` möglicherweise `untrustedCode`, bereitgestellt von einem Benutzer, ausführt:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern, dass ein solcher Code standardmäßig ausgeführt wird.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP spezifizieren, um die Ausführung von `setInterval()` zu erlauben, aber das ist unsicher, da es einen der Hauptschutzmechanismen der CSP deaktiviert.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie zulassen müssen, dass die Skripte über `setInterval()` ausgeführt werden, können Sie diese Probleme mildern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mittels der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `setInterval()` auszuführen, müssen Sie zusätzlich das [`trusted-types-eval` Keyword](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive angeben.
Dies wirkt auf die gleiche Weise wie `unsafe-eval`, erlaubt aber _nur_, dass die Methode ausgeführt wird, wenn vertrauenswürdige Typen aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, würde es die Ausführung auch in Browsern erlauben, die keine vertrauenswürdigen Typen unterstützen).

Zum Beispiel, die erforderliche CSP für Ihre Website könnte folgendermaßen aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, dass er ausgeführt werden darf.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele zur Klarheit auf die Verwendung vertrauenswürdiger Typen verzichten.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

### Beispiel 1: Grundlegende Syntax

Das folgende Beispiel demonstriert die grundlegende Syntax von `setInterval()`.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

### Beispiel 2: Wechsel zwischen zwei Farben

Das folgende Beispiel ruft die Funktion `flashtext()` einmal pro Sekunde auf, bis die Stopptaste gedrückt wird.

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
