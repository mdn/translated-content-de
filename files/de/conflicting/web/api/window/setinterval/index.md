---
title: Funktion setInterval()
slug: conflicting/Web/API/Window/setInterval
original_slug: Web/API/setInterval
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`setInterval()`**-Methode, die auf den Schnittstellen [`Window`](/de/docs/Web/API/Window) und [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) angeboten wird, ruft wiederholt eine Funktion auf oder führt einen Code-Snippet aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

Diese Methode gibt eine Intervall-ID zurück, die das Intervall eindeutig identifiziert, sodass Sie es später durch Aufruf von [`clearInterval()`](/de/docs/Web/API/ClearInterval) entfernen können.

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
  - : Eine optionale Syntax ermöglicht es Ihnen, einen String anstelle einer Funktion einzuschließen, der kompiliert und alle `delay` Millisekunden ausgeführt wird.
    Diese Syntax wird _nicht empfohlen_ aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstel einer Sekunde), um die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögert werden soll. Standardmäßig 0, falls nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum erlaubten Bereich der `delay` Werte.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Der zurückgegebene `intervalID` ist ein numerischer, nicht nullwertiger Wert, der den durch den Aufruf von `setInterval()` erstellten Timer identifiziert; dieser Wert kann an [`clearInterval()`](/de/docs/Web/API/ClearInterval) übergeben werden, um das Intervall abzubrechen.

Es kann hilfreich sein zu wissen, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/SetTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/ClearTimeout) technisch austauschbar verwendet werden können. Zur Klarheit sollten Sie jedoch versuchen, sie stets korrekt zuzuordnen, um Verwirrung bei der Pflege Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay`-Argument wird in eine 32-Bit-Ganzzahl konvertiert.
> Dies begrenzt `delay` auf effektiv 2147483647 ms, was ungefähr 24,8 Tage entspricht, da es als signierte Ganzzahl im IDL angegeben ist.

## Beispiele

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

### Beispiel 2: Zwei Farben abwechselnd darstellen

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

## Das Problem mit "this"

Wenn Sie eine Methode an `setInterval()` oder eine andere Funktion übergeben, wird sie mit dem falschen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert aufgerufen. Dieses Problem wird ausführlich im [JavaScript-Leitfaden](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

### Erklärung

Der durch `setInterval()` ausgeführte Code läuft in einem separaten Ausführungskontext als die Funktion, von der er aufgerufen wurde. Infolgedessen wird das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort für die aufgerufene Funktion auf das `window`- (oder `global`) Objekt gesetzt, es ist nicht dasselbe wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat. Siehe das folgende Beispiel (das `setTimeout()` anstelle von `setInterval()` verwendet – das Problem ist in der Tat für beide Timer dasselbe):

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

Wie Sie sehen können, gibt es in legacy JavaScript keine Möglichkeit, das `this`-Objekt an die Rückruffunktion zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeiten (in Browsern und anderswo) unterstützen [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) mit lexikalischem `this` — wodurch wir `setInterval(() => this.myMethod())` schreiben können, wenn wir innerhalb der `myArray`-Methode sind.

Wenn Sie den IE unterstützen müssen, verwenden Sie die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)-Methode, die es Ihnen ermöglicht, den Wert anzugeben, der als `this` für alle Aufrufe einer bestimmten Funktion verwendet werden soll. Dies ermöglicht es Ihnen, Probleme leicht zu umgehen, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, aus dem Ihre Funktion aufgerufen wurde.

## Hinweise zur Verwendung

Die Funktion `setInterval()` wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z.B. Animationen. Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/ClearInterval) abbrechen.

Wenn Sie wünschen, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/SetTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle verschachtelt werden; das heißt, der Rückruf für `setInterval()` kann seinerseits `setInterval()` aufrufen, um ein weiteres Intervall zu starten, obwohl das erste noch läuft. Um die potenziellen Auswirkungen auf die Leistung zu mindern, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald Intervalle über fünf Ebenen tief verschachtelt sind. Versuche, einen Wert kleiner als 4 ms in tief verschachtelten Aufrufen von `setInterval()` anzugeben, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen noch strengere Mindestwerte für das Intervall erzwingen, obwohl diese nicht häufig vorkommen sollten. Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Rückrufs verstreicht, länger sein kann als der angegebene `delay`; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Sicherstellen, dass die Ausführungsdauer kürzer ist als die Intervallhäufigkeit

Wenn die Möglichkeit besteht, dass Ihre Logik länger zur Ausführung benötigt als die Intervallzeit, wird empfohlen, eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) aufzurufen. Wenn Sie z.B. `setInterval()` verwenden, um alle 5 Sekunden einen Remote-Server abzufragen, könnten Netzwerkverzögerungen, ein nicht reagierender Server und eine Vielzahl anderer Probleme verhindern, dass die Anfrage in der festgelegten Zeit abgeschlossen wird. Dies könnte dazu führen, dass Sie mit aufgestauten XHR-Anfragen konfrontiert sind, die nicht unbedingt in der richtigen Reihenfolge zurückgegeben werden.

In diesen Fällen ist ein rekursives `setTimeout()`-Muster vorzuziehen:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Snippet wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt. `loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik ausgeführt wurde. Während dieses Muster keine Ausführung in einem festen Intervall garantiert, stellt es sicher, dass das vorherige Intervall abgeschlossen ist, bevor es rekursiv wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Rückruf in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`clearTimeout()`](/de/docs/Web/API/ClearTimeout)
- [`clearInterval()`](/de/docs/Web/API/ClearInterval)
- [`window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
