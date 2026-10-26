---
title: "Window: Methode setInterval()"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der Parameter `code` verwendet wird, führt diese Methode dessen Wert dynamisch als JavaScript aus.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`setInterval()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) ruft eine Funktion wiederholt auf oder führt wiederholt ein Codefragment aus. Zwischen den Aufrufen liegt jeweils eine feste Zeitspanne.

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
    Dies kann anstelle einer Funktion übergeben werden, wird aber aus denselben Gründen, aus denen {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt, _dringend abgeraten_.
- `delay` {{optional_inline}}
  - : Die Wartezeit zwischen den Ausführungen der angegebenen Funktion oder des Codes in Millisekunden.
    Wird kein Wert angegeben, beträgt sie standardmäßig 0.
    Einzelheiten zum zulässigen Wertebereich von `delay` finden Sie weiter unten unter [Beschränkungen der Wartezeit](#beschränkungen_der_wartezeit).
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die nach Ablauf des Timers an die durch _func_ angegebene Funktion übergeben werden.

### Rückgabewert

Eine positive Ganzzahl (üblicherweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erzeugten Intervall-Timer eindeutig identifiziert.

Diese Kennung, oft als „Intervall-ID“ bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu beenden.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Parameter `code` auf eine Zeichenfolge gesetzt ist, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Der Fehler wird auch ausgelöst, wenn der erste Parameter keinem der unterstützten Typen entspricht: Funktion, Zeichenfolge oder `TrustedScript`.

## Beschreibung

Die Funktion `setInterval()` wird häufig verwendet, um Funktionen wie Animationen in regelmäßigen Abständen wiederholt auszuführen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) beenden.

Wenn Ihre Funktion nach der angegebenen Wartezeit nur _einmal_ aufgerufen werden soll, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Beschränkungen der Wartezeit

Intervalle können verschachtelt werden: Der Callback von `setInterval()` kann seinerseits `setInterval()` aufrufen, um ein weiteres Intervall zu starten, während das erste noch läuft.
Um mögliche Leistungseinbußen zu begrenzen, erzwingt der Browser bei einer Verschachtelungstiefe von mehr als fünf Ebenen automatisch einen Mindestwert von 4 ms für das Intervall.
Werte unter 4 ms werden bei stark verschachtelten Aufrufen von `setInterval()` auf 4 ms angehoben.

Unter bestimmten Umständen können Browser noch strengere Mindestwerte für das Intervall erzwingen; dies sollte jedoch selten vorkommen.
Beachten Sie außerdem, dass die tatsächlich zwischen Callback-Aufrufen verstrichene Zeit länger sein kann als der angegebene Wert für `delay`. Beispiele finden Sie unter [Gründe für längere als die angegebenen Wartezeiten](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified).

> [!NOTE]
> Das Argument `delay` wird in eine vorzeichenbehaftete 32-Bit-Ganzzahl umgewandelt. Dadurch ist sein Wert auf 2147483647 ms beziehungsweise ungefähr 24,8 Tage begrenzt.

### Intervall-IDs werden mit `setTimeout()` geteilt

Die Methode gibt eine Kennung zurück, die den durch den Aufruf erzeugten Intervall-Timer eindeutig identifiziert.
Diese Kennung, oft als „Intervall-ID“ bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu beenden.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Workers) bleibt die Intervall-ID garantiert eindeutig und wird keinem neuen Intervall-Timer zugewiesen, solange der ursprüngliche Timer aktiv ist.
Verschiedene globale Umgebungen verwalten jedoch jeweils eigene, voneinander unabhängige Mengen von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) dieselbe Menge von IDs verwenden und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar sind.
Der Übersichtlichkeit halber sollten Sie dennoch jeweils die passende Methode verwenden, um Verwechslungen bei der Pflege Ihres Codes zu vermeiden.

### Stellen Sie sicher, dass die Ausführungsdauer kürzer als das Intervall ist

Falls Ihre Logik möglicherweise länger für die Ausführung benötigt als die Dauer des Intervalls, empfiehlt es sich, eine benannte Funktion mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) rekursiv aufzurufen.
Wenn Sie beispielsweise mit `setInterval()` alle fünf Sekunden einen entfernten Server abfragen, können Netzwerklatenz, ein nicht reagierender Server und zahlreiche andere Probleme verhindern, dass die Anfrage innerhalb der vorgesehenen Zeit abgeschlossen wird.
Dadurch können sich XHR-Anfragen anstauen, deren Antworten nicht unbedingt in der Reihenfolge der Anfragen eintreffen.

In solchen Fällen ist ein rekursives Muster mit `setTimeout()` vorzuziehen:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Codefragment wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt.
Nachdem die Logik vollständig ausgeführt wurde, wird `loop()` innerhalb von `setTimeout()` rekursiv aufgerufen.
Dieses Muster garantiert zwar keine Ausführung in festen Zeitabständen, stellt aber sicher, dass die vorherige Ausführung abgeschlossen ist, bevor der nächste Aufruf erfolgt.

### Funktionen werden mit dem globalen `this` aufgerufen

Für die an `setInterval()` übergebenen Funktionen gelten bei der Bestimmung der Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) die üblichen Regeln für Funktionsaufrufe.
Diese Problematik wird in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erläutert.

Bei Funktionen, die keine Pfeilfunktionen sind, wird der `this`-Kontext auf das Objekt [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt (in Browsern ein Alias für [`window`](/de/docs/Web/API/Window/window)).

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann. Wenn wir die Methode `counter.count` direkt an `setInterval()` übergeben, geht der `this`-Kontext verloren. Die Methode wird dann für das globale Objekt statt für die `Counter`-Instanz aufgerufen. Dadurch entsteht ein `TypeError`, wenn die Methode `count` versucht, auf `this` zuzugreifen:

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

Um dies zu vermeiden, müssen Sie sicherstellen, dass die an `setInterval` übergebene Funktion den richtigen `this`-Kontext hat. Dafür gibt es drei wesentliche Möglichkeiten:

1. Wenn Sie den `this`-Kontext ausdrücklich festlegen möchten, übergeben Sie die Methode nicht direkt. Schließen Sie den Methodenaufruf stattdessen in eine weitere anonyme Funktion ein, die die Methode ausdrücklich mit dem richtigen Kontext aufruft:

   ```js
   setInterval(() => counter.count("bar"), 1000);
   setInterval(function () {
     counter.count("bar");
   }, 1000);
   ```

2. Wenn Sie den `this`-Kontext des Codes verwenden möchten, der `setInterval()` aufruft, verwenden Sie immer eine Pfeilfunktion. Diese übernimmt den `this`-Kontext des umgebenden Gültigkeitsbereichs:

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

3. Wenn Sie zusätzliche Funktionshüllen vermeiden möchten (die den Speicherverbrauch erhöhen), den `this`-Kontext aber ausdrücklich festlegen wollen, können Sie mit der Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) eine neue Funktion mit dem richtigen `this`-Kontext erstellen:

   ```js
   setInterval(counter.count.bind(counter), 1000, "bar");
   ```

### Sicherheitsaspekte

Mit der Methode lassen sich beliebige Eingaben ausführen, die über den Parameter `code` übergeben werden.
Wenn die Eingabe eine potenziell unsichere, von einem Benutzer bereitgestellte Zeichenfolge ist, kann dies einen Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.

Der folgende Code zeigt beispielsweise, wie `setInterval()` von einem Benutzer bereitgestellten `untrustedCode` ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) festlegt, verhindern standardmäßig die Ausführung solchen Codes.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, damit `setInterval()` den Code ausführen kann. Dies ist jedoch unsicher, da dadurch einer der wichtigsten Schutzmechanismen der CSP deaktiviert wird.

Weitere Informationen finden Sie unter [Inline-JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Ausführung der Skripte über `setInterval()` zulassen müssen, können Sie diese Risiken verringern, indem Sie stets [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte statt Zeichenfolgen zuweisen und mit der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft.

Damit `setInterval()` den Code ausführen kann, müssen Sie zusätzlich das [Schlüsselwort `trusted-types-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in der CSP-Direktive `script-src` angeben.
Es wirkt wie `unsafe-eval`, erlaubt die Auswertung durch die Methode aber _nur_, wenn Trusted Types aktiviert sind. Mit `unsafe-eval` wäre die Ausführung dagegen auch in Browsern erlaubt, die Trusted Types nicht unterstützen.

Die für Ihre Website erforderliche CSP könnte beispielsweise so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom konkreten Anwendungsfall ab, für den ein vom Benutzer bereitgestelltes Skript erforderlich ist.
Wenn möglich, sollten Sie die zulässigen Skripte auf genau den Code beschränken, dessen Ausführung Sie vertrauen.
Ist das nicht möglich, können Sie die Verwendung bestimmter Funktionen innerhalb der bereitgestellten Zeichenfolge erlauben oder blockieren.

## Beispiele

Der Kürze halber verzichten diese Beispiele auf die Verwendung von Trusted Types.
Ein Codebeispiel für die empfohlene Vorgehensweise finden Sie unter [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) bei `eval()`.

### Beispiel 1: Grundlegende Syntax

Das folgende Beispiel zeigt die grundlegende Syntax von `setInterval()`.

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

Im folgenden Beispiel wird die Funktion `flashtext()` einmal pro Sekunde aufgerufen, bis die Stopp-Schaltfläche gedrückt wird.

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

- [Polyfill für `setInterval` in `core-js`, das die Übergabe von Argumenten an den Callback ermöglicht](https://core-js.io/docs/features/web-standards/settimeout-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
