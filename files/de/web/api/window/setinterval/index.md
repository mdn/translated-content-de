---
title: "Window: setInterval() Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("HTML DOM")}}

Die **`setInterval()`** Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle ruft wiederholt eine Funktion auf oder führt einen Codeabschnitt aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

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
  - : Eine optionale Syntax erlaubt es Ihnen, anstelle einer Funktion einen String einzuschließen, der alle `delay` Millisekunden kompiliert und ausgeführt wird. Diese Syntax wird _nicht empfohlen_ aus denselben Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (tausendstel Sekunden), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern sollte. Standardmäßig 0, wenn nicht angegeben. Weitere Details zum zugelassenen Bereich der `delay`-Werte finden Sie unter [Delay restrictions](#verzögerungsbeschränkungen).
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ spezifizierte Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Die `setInterval()` Methode gibt eine positive Ganzzahl zurück (typischerweise im Bereich von 1 bis 2.147.483.647), die den durch den Aufruf erstellten Intervall-Timer eindeutig identifiziert. Dieser Bezeichner, oft als "Intervall-ID" bezeichnet, kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um die wiederholte Ausführung der angegebenen Funktion zu stoppen.

Innerhalb derselben globalen Umgebung (z.B. einem bestimmten Fenster oder Worker) bleibt die Intervall-ID eindeutig und wird nicht für einen neuen Intervall-Timer wiederverwendet, solange der ursprüngliche Timer noch aktiv ist. Allerdings haben verschiedene globale Umgebungen ihre eigenen unabhängigen Pools von Intervall-IDs.

Beachten Sie, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können. Zur Klarheit sollten Sie jedoch immer darauf achten, sie zuzuordnen, um Verwirrung beim Warten an Ihrem Code zu vermeiden.

> [!NOTE]
> Das `delay` Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt. Dies begrenzt `delay` effektiv auf 2147483647 ms, etwa 24,8 Tage, da es im IDL als signierte Ganzzahl spezifiziert ist.

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

### Beispiel 2: Zwei Farben abwechselnd anzeigen

Im folgenden Beispiel wird die `flashtext()` Funktion einmal pro Sekunde aufgerufen, bis die Stop-Taste gedrückt wird.

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

## Das "this" Problem

Wenn Sie eine Methode an `setInterval()` oder eine andere Funktion übergeben, wird sie mit dem falschen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Wert aufgerufen. Dieses Problem wird im Detail in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

### Erklärung

Code, der von `setInterval()` ausgeführt wird, läuft in einem separaten Ausführungskontext als die Funktion, von der er aufgerufen wurde. Infolgedessen wird das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Schlüsselwort für die aufgerufene Funktion auf das `window`- (oder `global`) Objekt gesetzt. Es ist nicht dasselbe wie der `this` Wert für die Funktion, die `setTimeout` aufgerufen hat. Siehe das folgende Beispiel (das `setTimeout()` anstelle von `setInterval()` verwendet - das Problem ist in der Tat für beide Timer dasselbe):

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

Wie Sie sehen können, gibt es keine Möglichkeit, das `this` Objekt an die Rückruffunktion im alten JavaScript zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeiten (in Browsern und anderswo) unterstützen [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) mit lexikalischem `this` - was es uns ermöglicht, `setInterval(() => this.myMethod())` zu schreiben, wenn wir uns innerhalb der `myArray` Methode befinden.

Wenn Sie IE unterstützen müssen, verwenden Sie die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) Methode, die es Ihnen ermöglicht, den Wert festzulegen, der als `this` für alle Aufrufe einer bestimmten Funktion verwendet werden soll. Dadurch können Sie Probleme leicht umgehen, bei denen unklar ist, was `this` sein wird, je nachdem, aus welchem Kontext Ihre Funktion aufgerufen wurde.

## Nutzungshinweise

Die `setInterval()` Funktion wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z.B. Animationen. Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie wünschen, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle verschachtelt werden; das bedeutet, dass der Rückruf für `setInterval()` seinerseits `setInterval()` aufrufen kann, um ein weiteres Intervall laufen zu lassen, obwohl das erste noch läuft. Um die mögliche Auswirkung auf die Leistung abzumildern, erzwingt der Browser automatisch einen minimalen Wert von 4 ms für das Intervall, sobald Intervalle über fünf Ebenen tief verschachtelt sind. Versuche, in tief verschachtelten Aufrufen von `setInterval()` einen Wert unter 4 ms anzugeben, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen sogar noch strengere Minimumwerte für das Intervall durchsetzen, obwohl diese nicht häufig vorkommen sollten. Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen des Rückrufs vergeht, länger sein kann als das angegebene `delay`; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallfrequenz ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger dauert als die Intervallzeit, wird empfohlen, eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufzurufen. Wenn Sie beispielsweise `setInterval()` verwenden, um alle 5 Sekunden einen Remote-Server zu pollen, könnten Netzwerklatenz, ein nicht reagierender Server und eine Reihe anderer Probleme verhindern, dass die Anfrage in der festgelegten Zeit abgeschlossen wird. So könnten Sie sich mit aufgestauten XHR-Anfragen wiederfinden, die nicht unbedingt in der richtigen Reihenfolge zurückkehren.

In diesen Fällen wird ein rekursives `setTimeout()` Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Codeabschnitt wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt. `loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik ausgeführt wurde. Während dieses Muster keine Ausführung in einem festen Intervall garantiert, stellt es sicher, dass das vorherige Intervall abgeschlossen ist, bevor es erneut aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, der das Übergeben von Argumenten an den Rückruf in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
