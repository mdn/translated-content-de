---
title: "Fenster: setInterval() Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 29d6bb944a1c1fe42eb9957e2a6e5b4f85a2656e
---

{{APIRef("HTML DOM")}}

Die **`setInterval()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces ruft wiederholt eine Funktion auf oder führt ein Code-Snippet aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

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
  - : Eine optionale Syntax ermöglicht es Ihnen, anstelle einer Funktion einen String einzufügen, der kompiliert und alle `delay` Millisekunden ausgeführt wird. Diese Syntax wird _nicht empfohlen_, aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstel einer Sekunde), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Standardmäßig auf 0 gesetzt, wenn nicht angegeben. Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum erlaubten Bereich von `delay`-Werten.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ angegebene Funktion übergeben werden, sobald der Timer abgelaufen ist.

### Rückgabewert

Die `setInterval()`-Methode gibt eine positive Ganzzahl zurück (typischerweise im Bereich von 1 bis 2.147.483.647), die den Intervall-Timer, der durch den Aufruf erstellt wurde, eindeutig identifiziert. Dieser Bezeichner, oft als "Interval-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z. B. eines bestimmten Fensters oder Arbeiters) wird sichergestellt, dass die Intervall-ID einzigartig bleibt und nicht für einen neuen Intervall-Timer wiederverwendet wird, solange der ursprüngliche Timer noch aktiv ist. Andere globale Umgebungen führen ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch gesehen austauschbar verwendet werden können. Zur Klarheit sollten Sie jedoch versuchen, sie immer zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay`-Argument wird in eine vorzeichenbehaftete 32-Bit-Ganzzahl umgewandelt. Das begrenzt `delay` effektiv auf 2147483647 ms, ungefähr 24,8 Tage, da es in der IDL als vorzeichenbehaftete Ganzzahl angegeben ist.

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

### Beispiel 2: Zwei Farben abwechseln

Das folgende Beispiel ruft die `flashtext()`-Funktion jede Sekunde auf, bis
der Stopp-Button gedrückt wird.

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

## Das "this"-Problem

Wenn Sie eine Methode an `setInterval()` oder eine andere Funktion übergeben, wird sie mit dem falschen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert aufgerufen. Dieses Problem wird im Detail in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

### Erklärung

Der von `setInterval()` ausgeführte Code läuft in einem separaten Ausführungskontext als die Funktion, von der er aufgerufen wurde. Folglich ist das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort für die aufgerufene Funktion auf das `window`- (oder `global`-) Objekt gesetzt und entspricht nicht dem `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat. Siehe das folgende Beispiel (das `setTimeout()` anstelle von `setInterval()` verwendet – das Problem ist in der Tat dasselbe für beide Timer):

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

Wie Sie sehen, gibt es keine Möglichkeiten, das `this`-Objekt an die Callback-Funktion im traditionellen JavaScript zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeiten (in Browsern und anderswo) unterstützen [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) mit lexikalischem `this` – was es ermöglicht, `setInterval(() => this.myMethod())` zu schreiben, wenn wir uns innerhalb der `myArray`-Methode befinden.

Wenn Sie IE unterstützen müssen, verwenden Sie die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)-Methode, die es Ihnen ermöglicht, den Wert anzugeben, der als `this` für alle Aufrufe einer gegebenen Funktion verwendet werden soll. Damit können Sie leicht Probleme umgehen, bei denen es unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde.

## Verwendungshinweise

Die `setInterval()`-Funktion wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die wiederholt ausgeführt werden, wie z. B. Animationen. Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie möchten, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle geschachtelt werden; das heißt, der Callback für `setInterval()` kann seinerseits `setInterval()` aufrufen, um ein weiteres Intervall zu starten, auch wenn das erste noch läuft. Um die potenzielle Auswirkung auf die Leistung zu minimieren, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald die Schachtelungstiefe von fünf Ebenen überschritten wird. Versuche, einen Wert von weniger als 4 ms in tief geschachtelten Aufrufen von `setInterval()` anzugeben, werden auf 4 ms festgelegt.

Unter bestimmten Umständen können Browser noch strengere Mindestwerte für das Intervall erzwingen, obwohl diese nicht häufig vorkommen sollten. Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Callbacks vergeht, länger als das angegebene `delay` sein kann; siehe [Gründe für länger als angegebene Verzögerungen](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Sicherstellen, dass die Ausführungsdauer kürzer ist als die Intervallhäufigkeit

Falls die Möglichkeit besteht, dass Ihre Logik länger dauert als die Intervallzeit, wird empfohlen, eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufzurufen. Wenn Sie beispielsweise `setInterval()` verwenden, um alle 5 Sekunden einen Remote-Server abzufragen, könnten Netzwerklatenz, ein nicht reagierender Server und eine Vielzahl anderer Probleme verhindern, dass die Anfrage in der vorgegebenen Zeit abgeschlossen wird. In solchen Fällen könnten Sie sich mit angehäuften XHR-Anfragen wiederfinden, die nicht unbedingt in der Reihenfolge zurückkehren.

In diesen Fällen wird ein rekursives `setTimeout()`-Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Beispiel wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt. `loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik ihre Ausführung abgeschlossen hat. Während dieses Muster keine Ausführung in einem festen Intervall garantiert, gewährleistet es, dass das vorherige Intervall abgeschlossen ist, bevor es rekursiv aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, der das Übergeben von Argumenten an den Callback in `core-js` erlaubt](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
