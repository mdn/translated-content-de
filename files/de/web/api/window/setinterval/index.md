---
title: "Window: setInterval()-Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 09fa8031424e381687b12161a04f525c3841b890
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Wenn der `code`-Parameter verwendet wird, führt diese Methode ihren Wert dynamisch als JavaScript aus.
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und stellen potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`setInterval()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle ruft wiederholt eine Funktion auf oder führt ein Codefragment aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

## Syntax

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg1)
setInterval(func, delay, arg1, arg2)
setInterval(func, delay, arg1, arg2, /* …, */ argN)
```

### Parameter

- `func`
  - : Eine {{jsxref("function")}} die alle `delay` Millisekunden ausgeführt wird.
    Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Ein [`TrustedScript`](/de/docs/Web/API/TrustedScript) oder ein String mit beliebigem Code, der alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Dies kann anstelle des Übergebens einer Funktion verwendet werden, wird jedoch _stark abgeraten_, da es aus den gleichen Gründen wie die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} ein Sicherheitsrisiko darstellt.
- `delay` {{optional_inline}}
  - : Die Verzögerungszeit zwischen den Ausführungen der angegebenen Funktion oder des Codes, in Millisekunden.
    Der Standardwert ist 0, wenn nicht angegeben.
    Siehe [Einschränkungen der Verzögerung](#einschränkungen_der_verzögerung) unten für Details zum zulässigen Bereich von `delay`-Werten.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die von _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Eine positive ganze Zahl (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.

Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

### Ausnahmen

- {{jsxref("SyntaxError")}}
  - : Der `code` kann nicht als Skript geparst werden.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der `code`-Parameter auf einen String gesetzt ist, während [vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Es wird auch ausgelöst, wenn der erste Parameter nicht einer der unterstützten Typen ist: eine Funktion, ein String oder `TrustedScript`.

## Beschreibung

Die `setInterval()`-Funktion wird häufig verwendet, um eine Verzögerung für Funktionen zu setzen, die immer wieder ausgeführt werden, wie zum Beispiel Animationen.
Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie möchten, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Einschränkungen der Verzögerung

Es ist möglich, dass Intervalle verschachtelt werden; das heißt, der Rückruf für `setInterval()` kann seinerseits `setInterval()` aufrufen, um ein weiteres Intervall zu starten, auch wenn das erste noch läuft.
Um die potenzielle Auswirkung auf die Leistung zu mindern, erzwingt der Browser nach fünf Ebenen der Verschachtelung automatisch einen Mindestwert von 4 ms für das Intervall.
Versuche, in tief verschachtelten Aufrufen an `setInterval()` einen Wert von weniger als 4 ms festzulegen, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen noch strengere Mindestwerte für das Intervall durchsetzen, obwohl dies nicht üblich sein sollte.
Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Rückrufs vergeht, länger sein kann als die angegebene `delay`; siehe [Gründe für Verzögerungen, die länger als angegeben sind](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

> [!NOTE]
> Das `delay`-Argument wird in einen vorzeichenbehafteten 32-Bit-Integer umgewandelt.
> Dies begrenzt `delay` effektiv auf 2147483647 ms, ungefähr 24,8 Tage, da es als vorzeichenbehafteter Integer im IDL angegeben ist.

### Intervall-IDs werden mit `setTimeout()` geteilt

Die Methode gibt einen Bezeichner zurück, der den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert.
Dieser Bezeichner, der oft als "Intervall-ID" bezeichnet wird, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z.B. ein bestimmtes Fenster oder Worker) bleibt die Intervall-ID eindeutig und wird nicht für einen neuen Intervall-Timer wiederverwendet, solange der Original-Timer noch aktiv ist.
Verschiedene globale Umgebungen behalten jedoch ihre eigenen unabhängigen Pools von Intervall-IDs.

Seien Sie sich bewusst, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Um jedoch Klarheit zu bewahren, sollten Sie stets versuchen, sie anzupassen, um Verwirrung bei der Pflege Ihres Codes zu vermeiden.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger zur Ausführung benötigt als die Intervallzeit, wird empfohlen, dass Sie eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufrufen.
Zum Beispiel, wenn `setInterval()` benutzt wird, um einen Remote-Server alle 5 Sekunden abzufragen, könnten Netzwerkverzögerungen, ein nicht reagierender Server und eine Vielzahl von anderen Problemen verhindern, dass die Anfrage in der vorgesehenen Zeit abgeschlossen wird.
Daher könnten sich XHR-Anfragen aufstauen, die nicht notwendigerweise in der richtigen Reihenfolge zurückkehren.

In diesen Fällen wird ein rekursives `setTimeout()`-Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Code-Snippet wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt.
`loop()` wird rekursiv in `setTimeout()` aufgerufen, nachdem die Logik ausgeführt wurde.
Während dieses Muster keine Ausführung in einem festen Intervall garantiert, stellt es sicher, dass das vorherige Intervall abgeschlossen ist, bevor es erneut aufgerufen wird.

### Funktionen werden mit dem globalen `this` aufgerufen

Methoden oder Funktionen, die an `setInterval()` übergeben werden, laufen nicht im selben Ausführungskontext wie `setInterval()` und haben somit nicht dasselbe [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) wie die Funktion, die `setInterval()` aufgerufen hat.
Stattdessen hat die aufgerufene Funktion ein `this`-Schlüsselwort, das auf das `window` (oder `global`) Objekt gesetzt ist.
Dieses Problem wird ausführlich im [JavaScript Reference](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) beschrieben.

Das folgende Beispiel zeigt, wie dies unerwartetes Verhalten verursachen kann (unter Verwendung von `setTimeout()` anstelle von `setInterval()`, aber das Problem gilt für beide Timer):

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

Sie können [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden, um das `this` der Funktion zu übernehmen, in der `setTimeout()` aufgerufen wird (Arrow Functions haben ein lexikalisches `this`).

Sie können dies mit dem folgenden Code testen.

```js
setTimeout(() => myArray.myMethod(), 1000); // Alert "zero,one,two" after 1 second
setTimeout(() => myArray.myMethod(1), 1500); // Alert "one" after 1.5 seconds
setTimeout(() => myArray.myMethod(2), 3000); // Alert "one" after 3 seconds
```

Sie könnten auch die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)-Methode verwenden, mit der Sie den Wert festlegen können, der für alle Aufrufe einer bestimmten Funktion als `this` verwendet werden soll.
Das ermöglicht Ihnen, Probleme zu umgehen, bei denen unklar ist, was `this` ist, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde.

### Sicherheitsaspekte

Die Methode kann verwendet werden, um beliebige Eingaben auszuführen, die im `code`-Parameter übergeben werden.
Wenn die Eingabe ein potenziell unsicherer String ist, der von einem Benutzer bereitgestellt wurde, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.
Zum Beispiel, im folgenden Beispiel wird angenommen, dass das `scriptElement` ein ausführbares `<script>`-Element ist und dass `untrustedCode` von einem Benutzer bereitgestellt wurde:

```js example-bad
const untrustedCode = "alert('Potentially evil code!');";
const id = setInterval(untrustedCode, 1000);
```

Websites mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verhindern standardmäßig, dass solcher Code ausgeführt wird; wenn Sie die Methode mit `code` verwenden müssen, müssen Sie zuerst das [`unsafe-eval`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) in Ihrer CSP [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) erlauben.

Wenn Sie die Skripte laufen lassen müssen, können Sie diese Probleme mindern, indem Sie immer [`TrustedScript`](/de/docs/Web/API/TrustedScript)-Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird.

Das Verhalten der Transformationsfunktion hängt vom spezifischen Anwendungsfall ab, der ein vom Benutzer bereitgestelltes Skript erfordert.
Wenn möglich, sollten Sie die erlaubten Skripte genau auf den Code beschränken, dem Sie vertrauen, dass er ausgeführt werden darf.
Wenn das nicht möglich ist, könnten Sie die Verwendung bestimmter Funktionen innerhalb des bereitgestellten Strings erlauben oder blockieren.

## Beispiele

### Beispiel 1: Grundsyntax

Das folgende Beispiel zeigt die Grundsyntax von `setInterval()`.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

### Beispiel 2: Abwechseln zweier Farben

Das folgende Beispiel ruft einmal pro Sekunde die Funktion `flashtext()` auf, bis die Stopp-Taste gedrückt wird.

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
