---
title: "Window: setInterval() Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 21ed9a1338b207e8a39064583c19d9f720235235
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe sein.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`setInterval()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle ruft wiederholt eine Funktion auf oder führt einen Code-Snippet aus, wobei zwischen jedem Aufruf ein fester Zeitabstand liegt.

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
    Dies kann anstelle des Übergebens einer Funktion verwendet werden, wird jedoch _dringend abgeraten_, aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Verzögerungszeit zwischen den Ausführungen der angegebenen Funktion oder des Codes, in Millisekunden.
    Standardmäßig 0, wenn nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum erlaubten Bereich der `delay`-Werte.
- `param1`, …, `paramN` {{optional_inline}}
  - : Zusätzliche Argumente, die der durch _func_ angegebenen Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt wird, wenn [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder `TrustedScript`.

## Beschreibung

Die `setInterval()` Funktion wird häufig verwendet, um eine Verzögerung für Funktionen einzustellen, die immer wieder ausgeführt werden, wie zum Beispiel Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Möchten Sie Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufrufen, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle verschachtelt sind; das heißt, der Rückruf für `setInterval()` kann seinerseits `setInterval()` aufrufen, um ein anderes Intervall zu starten, obwohl das erste noch läuft.
Um die potenziellen Auswirkungen auf die Leistung zu mindern, erzwingt der Browser, sobald Intervalle tiefer als fünf Ebenen verschachtelt sind, automatisch einen minimalen Wert von 4 ms für das Intervall.
Versuche, in tief verschachtelten Aufrufen von `setInterval()` einen Wert kleiner als 4 ms anzugeben, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen noch strengere Mindestwerte für das Intervall durchsetzen, obwohl diese nicht häufig sein sollten.
Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Rückrufs verstreicht, länger als die angegebene `delay` sein kann; siehe [Gründe für Verzögerungen, die länger als angegeben sind](/de/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) für Beispiele.

> [!NOTE]
> Das `delay` Argument wird in ein vorzeichenbehaftetes 32-Bit Ganzzahl umgewandelt, was den Wert auf 2147483647 ms, oder etwa 24,8 Tage begrenzt.

### Intervall-IDs werden mit `setTimeout()` geteilt

Die Methode gibt einen Bezeichner zurück, der den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.
Dieser Bezeichner, der oft als "Intervall-ID" bezeichnet wird, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Arbeiters) bleibt die Intervall-ID eindeutig und wird nicht für einen neuen Intervall-Timer wiederverwendet, solange der ursprüngliche Timer noch aktiv ist.
Verschiedene globale Umgebungen führen jedoch ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) den gleichen Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Aus Gründen der Klarheit sollten Sie jedoch versuchen, sie immer zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger dauern könnte als die Intervallzeit, wird empfohlen, dass Sie eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufrufen.
Wenn Sie zum Beispiel `setInterval()` verwenden, um alle 5 Sekunden einen Remote-Server abzufragen, könnten Netzwerkverzögerung, ein nicht antwortender Server und eine Vielzahl anderer Probleme verhindern, dass die Anforderung in ihrer zugewiesenen Zeit abgeschlossen wird.
Daher können Sie sich mit XHR-Anfragen in der Warteschlange wiederfinden, die nicht unbedingt in der Reihenfolge zurückkehren.

In diesen Fällen wird ein rekursives `setTimeout()`-Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Ausschnitt wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt.
`loop()` wird rekursiv innerhalb `setTimeout()` aufgerufen, nachdem die Logik abgeschlossen ist.
Während dieses Muster keine Ausführung in einem festen Intervall garantiert, garantiert es, dass das vorherige Intervall abgeschlossen ist, bevor es erneut aufgerufen wird.

### Funktionen werden mit dem globalen `this` aufgerufen

Methoden oder Funktionen, die an `setInterval()` übergeben werden, laufen nicht im selben Ausführungskontext wie `setInterval()`, und haben daher auch nicht dasselbe [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) wie die Funktion, die `setInterval()` aufruft.
Stattdessen hat die aufgerufene Funktion ein `this`-Schlüsselwort, das auf das `window`- (oder `global`-)Objekt gesetzt ist.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

Das folgende Beispiel zeigt, wie dies zu unerwartetem Verhalten führen kann (mit `setTimeout()` anstelle von `setInterval()`, aber das Problem gilt für beide Timer):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // Alerts "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // Alerts "undefined" after 1.5 seconds
```

Sie können [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden, um das `this` der Funktion zu übernehmen, in der `setTimeout()` aufgerufen wird (Pfeilfunktionen haben ein lexikalisches `this`).

Sie können dies mit dem folgenden Code testen.

```js
setTimeout(() => myArray.myMethod(), 1000); // Alert "zero,one,two" after 1 second
setTimeout(() => myArray.myMethod(1), 1500); // Alert "one" after 1.5 seconds
setTimeout(() => myArray.myMethod(2), 3000); // Alert "one" after 3 seconds
```

Sie können auch die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) verwenden, die es Ihnen ermöglicht, den Wert zu spezifizieren, der als `this` für alle Aufrufe einer gegebenen Funktion verwendet werden soll.
Dies lässt Sie Probleme umgehen, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde.

### Sicherheitsüberlegungen

Die Methode kann verwendet werden, um willkürlichen Input im `code`-Parameter auszuführen.
Wenn der Input ein potenziell unsicherer String von einem Benutzer bereitgestellt wird, ist dies ein möglicher Angriffsvektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Zum Beispiel zeigt der folgende Code, wie `setInterval()` möglicherweise `untrustedCode`, das von einem Benutzer bereitgestellt wird, ausführen könnte:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP), die [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) spezifiziert, werden solch einen Code standardmäßig verhindern.
Sie können [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP angeben, um `setInterval()` ausführen zu lassen, aber dies ist unsicher, da es eine der Hauptschutzmaßnahmen der CSP deaktiviert.

Siehe [Inline JavaScript](/de/docs/Web/HTTP/Guides/CSP#inline_javascript) im CSP-Leitfaden.

Wenn Sie die Skripte über `setInterval()` ausführen lassen müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript) Objekte anstelle von Strings zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mit der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Richtlinie nutzen.
Dies stellt sicher, dass der Input durch eine Transformationsfunktion geleitet wird.

Um `setInterval()` ausführen zu lassen, müssen Sie zusätzlich das [`trusted-types-eval` Schlüsselwort](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) in Ihrer CSP `script-src`-Direktive angeben.
Dies wirkt in gleicher Weise wie `unsafe-eval`, erlaubt jedoch _nur_ die Methode zu bewerten, wenn Trusted Types aktiviert sind (wenn Sie `unsafe-eval` verwenden würden, würde es die Ausführung auch in Browsern erlauben, die Trusted Types nicht unterstützen).

Zum Beispiel könnte die erforderliche CSP für Ihre Website so aussehen:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die zulässigen Skripte genau auf den Code beschränken, dem Sie vertrauen, ihn auszuführen.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings erlauben oder blockieren.

## Beispiele

Beachten Sie, dass diese Beispiele aus Gründen der Kürze auf die Verwendung von Trusted Types verzichten.
Siehe [Verwendung von `TrustedScript`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval#using_trustedscript) in `eval()` für Code, der den erwarteten Ansatz zeigt.

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

### Beispiel 2: Abwechseln zwischen zwei Farben

Das folgende Beispiel ruft die `flashtext()` Funktion jede Sekunde auf, bis die Stop-Taste gedrückt wird.

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

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Rückruf in `core-js` erlaubt](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
