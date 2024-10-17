---
title: "Window: setInterval() Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("HTML DOM")}}

Die **`setInterval()`** Methode des [`Window`](/de/docs/Web/API/Window) Interfaces ruft wiederholt eine Funktion auf oder führt einen Codeausschnitt aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

Diese Methode gibt eine Intervall-ID zurück, die das Intervall eindeutig identifiziert, sodass Sie es später durch Aufrufen von [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) entfernen können.

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
  - : Eine {{jsxref("function")}}, die alle `delay` Millisekunden ausgeführt wird. Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Eine optionale Syntax ermöglicht es, eine Zeichenkette anstelle einer Funktion anzugeben, die alle `delay` Millisekunden kompiliert und ausgeführt wird.
    Diese Syntax wird _nicht empfohlen_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstelsekunden), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Standardmäßig 0, wenn nicht angegeben.
    Siehe [Delay-Beschränkungen](#einschränkungen_bei_verzögerungen) unten für Details zum erlaubten Bereich der `delay` Werte.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Die zurückgegebene `intervalID` ist ein numerischer, ungleich null Wert, der den durch den Aufruf von `setInterval()` erstellten Timer identifiziert; dieser Wert kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um das Intervall abzubrechen.

Es kann hilfreich sein, sich bewusst zu sein, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs verwenden und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können.
Der Klarheit halber sollten Sie jedoch versuchen, sie immer zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay` Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt.
> Dies begrenzt `delay` effektiv auf 2.147.483.647 ms, was ungefähr 24,8 Tagen entspricht, da es in der IDL als signierte Ganzzahl angegeben ist.

## Beispiele

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

### Beispiel 2: Abwechselnde zwei Farben

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
  if (!intervalId) {
    intervalId = setInterval(flashText, 1000);
  }
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

## Das "this" Problem

Wenn Sie eine Methode an `setInterval()` oder eine andere Funktion übergeben, wird sie mit dem falschen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert aufgerufen.
Dieses Problem wird ausführlich im [JavaScript Reference](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

### Erklärung

Von `setInterval()` ausgeführter Code läuft in einem separaten Ausführungskontext als
die Funktion, von der aus sie aufgerufen wurde. Infolgedessen wird das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)
Schlüsselwort für die aufgerufene Funktion auf das `window` (oder
`global`) Objekt gesetzt, es ist nicht dasselbe wie der `this` Wert für die Funktion, die `setTimeout` aufgerufen hat. Siehe das folgende Beispiel (das
verwendet `setTimeout()` anstelle von `setInterval()` – das Problem ist tatsächlich dasselbe für beide Timer):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1.5 seconds

// Passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod.
// In fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

Wie Sie sehen können, gibt es in Legacy-JavaScript keine Möglichkeit, das `this` Objekt an die Rückruffunktion zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeiten (in Browsern und anderswo) unterstützen [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions), mit lexikalischem `this` — dies erlaubt uns, `setInterval(() => this.myMethod())` zu schreiben, wenn wir uns in der `myArray` Methode befinden.

Wenn Sie IE unterstützen müssen, verwenden Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), mit der Sie den Wert angeben können, der als `this` für alle Aufrufe einer gegebenen Funktion verwendet werden soll. Auf diese Weise können Sie Probleme leicht umgehen, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde.

## Anwendungshinweise

Die Funktion `setInterval()` wird häufig verwendet, um eine Verzögerung für Funktionen
festzulegen, die immer wieder ausgeführt werden, wie z.B. Animationen. Sie können das Intervall mit
[`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie möchten, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie
[`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Einschränkungen bei Verzögerungen

Es ist möglich, dass Intervalle verschachtelt werden; das heißt, der Rückruf für
`setInterval()` kann seinerseits `setInterval()` aufrufen, um ein weiteres
Intervall zu starten, obwohl das erste noch läuft. Um die möglichen
Auswirkungen auf die Leistung zu mildern, wird der Browser automatisch einen Mindestwert von 4 ms für das Intervall erzwingen, sobald die Intervalle über fünf Ebenen hinaus verschachtelt sind.
Versuche, in tief verschachtelten Aufrufen von `setInterval()` einen Wert unter 4 ms zu spezifizieren,
werden auf 4 ms gesetzt.

Unter bestimmten Umständen können Browser sogar noch strengere Mindestwerte für das Intervall durchsetzen, obwohl diese nicht häufig vorkommen sollten. Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Rückrufs vergeht, länger sein kann als das angegebene
`delay`; siehe
[Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger braucht, um auszuführen als die
Intervallzeit, wird empfohlen, dass Sie eine benannte Funktion rekursiv mit
[`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufrufen. Zum Beispiel, wenn
`setInterval()` verwendet wird, um einen Remote-Server alle 5 Sekunden abzufragen, könnte die Netzwerklatenz, ein nicht ansprechender Server und eine Reihe anderer Probleme verhindern, dass die Anfrage in ihrer vorgesehenen Zeit abgeschlossen wird. Infolgedessen könnten Sie sich mit aufgereihten XHR-Anfragen konfrontiert sehen, die nicht unbedingt in der Reihenfolge zurückkehren, in der sie gesendet wurden.

In diesen Fällen ist ein rekursives `setTimeout()` Muster vorzuziehen:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Codeausschnitt wird eine benannte Funktion `loop()` deklariert und
sofort ausgeführt. `loop()` wird rekursiv innerhalb von
`setTimeout()` aufgerufen, nachdem die Logik ausgeführt wurde. Während dieses Muster
keine Ausführung in einem festen Intervall garantiert, stellt es sicher, dass das vorherige
Intervall abgeschlossen ist, bevor es erneut aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das es ermöglicht, Argumente an den Rückruf in `core-js` zu übergeben](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
