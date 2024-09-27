---
title: setInterval() globale Funktion
short-title: setInterval()
slug: Web/API/setInterval
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`setInterval()`**-Methode, angeboten in den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope), ruft wiederholt eine Funktion auf oder führt einen Code-Snippet aus, mit einer festen Zeitverzögerung zwischen den Aufrufen.

Diese Methode gibt eine Intervall-ID zurück, die das Intervall eindeutig identifiziert, sodass Sie es später durch Aufrufen von [`clearInterval()`](/de/docs/Web/API/ClearInterval) entfernen können.

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
  - : Eine optionale Syntax, die es Ihnen erlaubt, anstelle einer Funktion einen String einzufügen, der kompiliert und alle `delay` Millisekunden ausgeführt wird.
    Diese Syntax wird _nicht empfohlen_, da sie aus denselben Gründen ein Sicherheitsrisiko darstellt, wie die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}}.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstel einer Sekunde), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Der Standardwert ist 0, wenn nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum erlaubten Bereich der `delay`-Werte.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Die zurückgegebene `intervalID` ist ein numerischer, nicht null-Wert, der den durch den Aufruf von `setInterval()` erstellten Timer identifiziert; dieser Wert kann an [`clearInterval()`](/de/docs/Web/API/ClearInterval) übergeben werden, um das Intervall zu beenden.

Es kann hilfreich sein zu wissen, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/SetTimeout) den gleichen Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/ClearTimeout) technisch austauschbar verwendet werden können.
Zur Klarheit sollten Sie jedoch versuchen, sie immer richtig zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay`-Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt.
> Dies begrenzt `delay` effektiv auf 2147483647 ms, ungefähr 24,8 Tage, da es in der IDL als signierte Ganzzahl angegeben ist.

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

### Beispiel 2: Zwei Farben abwechseln

Das folgende Beispiel ruft die `flashtext()`-Funktion jede Sekunde auf, bis die Stop-Taste gedrückt wird.

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
let nIntervId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
```

#### Ergebnis

{{EmbedLiveSample("Example_2:_Alternating_two_colors")}}

Siehe auch: [`clearInterval()`](/de/docs/Web/API/clearInterval).

## Das "this"-Problem

Wenn Sie eine Methode an `setInterval()` oder eine andere Funktion übergeben, wird sie mit dem falschen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert aufgerufen.
Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

### Erklärung

Code, der von `setInterval()` ausgeführt wird, läuft in einem separaten Ausführungskontext als die Funktion, von der sie aufgerufen wurde. Infolgedessen ist das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort für die aufgerufene Funktion auf das `window`- (oder `global`-) Objekt gesetzt, es ist nicht dasselbe wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat. Siehe folgendes Beispiel (das `setTimeout()` anstelle von `setInterval()` verwendet – das Problem ist tatsächlich dasselbe für beide Timer):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // prints "zero,one,two"
myArray.myMethod(1); // prints "one"
setTimeout(myArray.myMethod, 1000); // prints "[object Window]" after 1 second
setTimeout(myArray.myMethod, 1500, "1"); // prints "undefined" after 1,5 seconds

// Passing the 'this' object with .call won't work
// because this will change the value of this inside setTimeout itself
// while we want to change the value of this inside myArray.myMethod.
// In fact, it will be an error because setTimeout code expects this to be the window object:
setTimeout.call(myArray, myArray.myMethod, 2000); // error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // same error
```

Wie Sie sehen können, gibt es in der alten JavaScript-Version keine Möglichkeit, das `this`-Objekt an die Rückruffunktion zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeiten (in Browsern und anderswo) unterstützen [Arrow Functions](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) mit lexikalischem `this` — damit können wir `setInterval(() => this.myMethod())` schreiben, wenn wir uns innerhalb der `myArray`-Methode befinden.

Wenn Sie IE unterstützen müssen, verwenden Sie die Methode [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind), die es Ihnen ermöglicht, den Wert anzugeben, der als `this` für alle Aufrufe einer bestimmten Funktion verwendet werden soll. Dadurch können Sie problemlos Probleme umgehen, bei denen unklar ist, was `this` sein wird, je nachdem, von welchem Kontext Ihre Funktion aufgerufen wurde.

## Nutzungshinweise

Die Funktion `setInterval()` wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z.B. Animationen. Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/ClearInterval) beenden.

Wenn Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen werden soll, verwenden Sie
[`setTimeout()`](/de/docs/Web/API/SetTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle verschachtelt sind; das heißt, dass der Callback für
`setInterval()` seinerseits `setInterval()` aufrufen kann, um ein weiteres
Intervall zu starten, obwohl das erste noch läuft. Um die potenziellen
Auswirkungen auf die Leistung abzumildern, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald Intervalle tiefer als fünf Ebenen verschachtelt sind.
Versuche, in tief verschachtelten Aufrufen von `setInterval()` einen Wert unter 4 ms anzugeben,
werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen noch strengere Mindestwerte für das Intervall erzwingen,
obwohl diese nicht häufig vorkommen sollten. Beachten Sie auch, dass die tatsächlich
verstrichene Zeit zwischen den Aufrufen des Callbacks länger sein kann als die angegebene
`delay`; siehe
[Gründe für Verzögerungen, die länger als angegeben sind](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Stellen Sie sicher, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger dauert als die
Intervallzeit, wird empfohlen, dass Sie eine benannte Funktion rekursiv mit
[`setTimeout()`](/de/docs/Web/API/SetTimeout) aufrufen. Zum Beispiel, wenn
Sie `setInterval()` verwenden, um einen entfernten Server alle 5 Sekunden abzufragen, könnten Netzwerkverzögerungen, ein nicht reagierender Server und eine Vielzahl anderer Probleme verhindern, dass die Anfrage
in der zugeteilten Zeit abgeschlossen wird. In solchen Fällen könnten Sie sich mit aufgestauten XHR-Anfragen wiederfinden, die nicht unbedingt in der Reihenfolge zurückkommen.

In diesen Fällen wird ein rekursives `setTimeout()`-Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Snippet wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt. `loop()` wird rekursiv innerhalb von
`setTimeout()` aufgerufen, nachdem die Logik ausgeführt wurde. Während dieses Muster keine garantierte Ausführung in einem festen Intervall gewährleistet, stellt es sicher, dass das vorherige
Intervall abgeschlossen ist, bevor es erneut aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, der das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`clearTimeout()`](/de/docs/Web/API/ClearTimeout)
- [`clearInterval()`](/de/docs/Web/API/ClearInterval)
- [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
