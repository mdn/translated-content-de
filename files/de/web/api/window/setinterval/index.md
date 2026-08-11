---
title: "Fenster: setInterval() Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 3b7310aac5ffd95db697bf136b7323cffc7e5bd2
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind bekannt als [Injection Points](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`setInterval()`** Methode des [`Fenster`](/de/docs/Web/API/Window) Interfaces ruft wiederholt eine Funktion auf oder führt ein Code-Snippet aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

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
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder eine Zeichenfolge mit beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle einer Funktion verwendet werden, wird aber _stark davon abgeraten_, da die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt.
- `delay` {{optional_inline}}
  - : Die Zeitverzögerung zwischen den Ausführungen der angegebenen Funktion oder des Codes in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details über den zulässigen Bereich der `delay` Werte.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ spezifizierte Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf eine Zeichenfolge gesetzt wird, während [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, Zeichenfolge oder `TrustedScript`.

## Beschreibung

Die Funktion `setInterval()` wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z. B. Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie möchten, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle geschachtelt sind; das heißt, der Rückruf für `setInterval()` kann seinerseits `setInterval()` aufrufen, um ein weiteres Intervall zu starten, auch wenn das erste noch läuft.
Um die potenziellen Auswirkungen auf die Leistung zu mildern, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald Intervalle über fünf Ebenen hinaus geschachtelt sind.
Versuche, einen Wert von weniger als 4 ms in tief geschachtelten Aufrufen von `setInterval()` anzugeben, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen noch strengere Mindestwerte für das Intervall durchsetzen, obwohl dies nicht häufig vorkommen sollte.
Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Rückrufs vergeht, länger sein kann als die angegebene `delay`; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) für Beispiele.

> [!NOTE]
> Das `delay`-Argument wird in eine signierte 32-Bit-Ganzzahl konvertiert, die den Wert auf 2147483647 ms begrenzt, was ungefähr 24,8 Tagen entspricht.

### Intervall-IDs werden mit `setTimeout()` geteilt

Die Methode gibt einen Bezeichner zurück, der den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.
Dieser Bezeichner, der oft als "Intervall-ID" bezeichnet wird, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) bleibt die Intervall-ID eindeutig und wird nicht für einen neuen Intervall-Timer wiederverwendet, solange der ursprüngliche Timer noch aktiv ist.
Verschiedene globale Umgebungen führen jedoch ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Um jedoch Verwirrung bei der Wartung Ihres Codes zu vermeiden, sollten Sie versuchen, sie immer passend zu verwenden.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger dauert als die Intervallzeit, wird empfohlen, rekursiv eine benannte Funktion mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufzurufen.
Wenn Sie z. B. `setInterval()` verwenden, um alle 5 Sekunden einen Remote-Server zu pollen, könnten Netzwerklatenz, ein nicht reagierender Server und viele andere Probleme verhindern, dass die Anfrage in ihrer vorgesehenen Zeit abgeschlossen wird.
Daher könnten Sie in einer Situation mit einer Schlange von XHR-Anfragen enden, die möglicherweise nicht in der richtigen Reihenfolge zurückkehren.

In solchen Fällen ist ein rekursives `setTimeout()`-Muster vorzuziehen:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Code-Snippet wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt.
`loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik vollständig ausgeführt wurde.
Während dieses Muster keine Ausführung in einem festen Intervall garantiert, stellt es sicher, dass das vorherige Intervall abgeschlossen ist, bevor es erneut aufgerufen wird.

### Funktionen werden mit dem globalen `this` aufgerufen

Die Funktionen, die an `setInterval()` übergeben werden, laufen mit den normalen Funktionsaufruf-Semantiken ab, um die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zu bestimmen.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) detailliert erklärt.

Für Nicht-Pfeil-Funktionen wird der `this`-Kontext auf das [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (ein Alias für [`window`](/de/docs/Web/API/Window/window) in Browsern) Objekt gesetzt.

Das folgende Beispiel demonstriert, wie dies zu unerwartetem Verhalten führen kann. Hier, wenn wir die Methode `counter.count` direkt an `setInterval()` übergeben, geht der `this`-Kontext verloren, und die Methode wird auf dem globalen Objekt anstelle der `Counter`-Instanz aufgerufen, was zu einem `TypeError` führt, wenn die `count`-Methode versucht, auf `this` zuzugreifen:

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

Um dies zu umgehen, müssen Sie sicherstellen, dass die Funktion, die an `setInterval` übergeben wird, den korrekten `this`-Kontext hat. Es gibt drei Hauptmethoden, dies zu erreichen:

1. Wenn Sie den `this`-Kontext explizit spezifizieren möchten, anstelle die Methode direkt zu übergeben, wickeln Sie den Methodenaufruf in eine andere anonyme Funktion, die die Methode mit dem korrekten Kontext explizit aufruft:

   ```js
   setInterval(() => counter.count("bar"), 1000);
   setInterval(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes, der `setInterval()` aufruft, verwenden möchten, sollten Sie immer eine Pfeilfunktion nutzen, die den `this`-Kontext ihres umgebenden Scopes erbt:

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

3. Wenn Sie zusätzliche Funktions-Wrapper (die den Speicherverbrauch erhöhen) vermeiden möchten, während Sie den `this`-Kontext explizit spezifizieren, können Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, um eine neue Funktion mit dem korrekten `this`-Kontext zu erstellen:

   ```js
   setInterval(counter.count.bind(counter), 1000, "bar");
   ```

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um beliebige Eingaben auszuführen, die im `code`-Parameter übergeben werden.
Wenn die Eingabe eine potenziell unsichere Zeichenfolge ist, die von einem Benutzer bereitgestellt wird, stellt dies einen möglichen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar.

Zum Beispiel zeigt der folgende Code, wie `setInterval()` möglicherweise `untrustedCode` ausführt, das von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Webseiten mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifizieren, verhindern standardmäßig das Ausführen eines solchen Codes.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, um `setInterval()` die Ausführung zu erlauben, aber das ist unsicher, da es einen der Hauptschutzmechanismen von CSP deaktiviert.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Skripte über `setInterval()` ausführen müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Um `setInterval()` auszuführen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src` Direktive angeben.
Dies funktioniert auf die gleiche Weise wie `unsafe-eval`, erlaubt jedoch _nur_ die Methode zur Ausführung, wenn vertrauenswürdige Typen aktiviert sind (wenn Sie `unsafe-eval` verwenden, würde es die Ausführung auch in Browsern erlauben, die keine vertrauenswürdigen Typen unterstützen).

Zum Beispiel, könnte die erforderliche CSP für Ihre Seite so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein benutzerdefiniertes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte auf den genaujenigen Code beschränken, den Sie für vertrauenswürdig halten.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge zulassen oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele der Kürze halber keine vertrauenswürdigen Typen verwenden.
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

### Beispiel 2: Zwei Farben alternieren

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
