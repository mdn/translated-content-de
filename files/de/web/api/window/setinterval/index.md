---
title: "Window: setInterval()-Methode"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{APIRef("HTML DOM")}}

Die **`setInterval()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces ruft wiederholt eine Funktion auf oder führt einen Code-Snippet aus, mit einer festen Zeitverzögerung zwischen jedem Aufruf.

Diese Methode gibt eine Intervall-ID zurück, die das Intervall eindeutig identifiziert, sodass Sie es später durch Aufruf von [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) entfernen können.

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
  - : Eine optionale Syntax, mit der Sie anstelle einer Funktion einen String einfügen können, der kompiliert und alle `delay` Millisekunden ausgeführt wird. Diese Syntax wird aus denselben Gründen _nicht empfohlen_, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (tausendstel einer Sekunde), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Standardwert ist 0, wenn nicht angegeben. Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum zulässigen Bereich der `delay`-Werte.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die vom _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Der zurückgegebene `intervalID` ist ein numerischer, von Null verschiedener Wert, der den durch den Aufruf von `setInterval()` erstellten Timer identifiziert; dieser Wert kann an [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) übergeben werden, um das Intervall zu beenden.

Es kann hilfreich sein zu wissen, dass `setInterval()` und [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) denselben Pool von IDs teilen und dass `clearInterval()` und [`clearTimeout()`](/de/docs/Web/API/Window/clearTimeout) technisch austauschbar verwendet werden können. Zur Klarheit sollten Sie jedoch versuchen, sie immer passend zu verwenden, um Verwirrung bei der Pflege Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay`-Argument wird in eine signierte 32-Bit-Ganzzahl umgewandelt.
> Dies begrenzt `delay` effektiv auf 2147483647 ms, also ungefähr 24,8 Tage, da es als signierte Ganzzahl in der IDL angegeben ist.

## Beispiele

### Beispiel 1: Grundsyntax

Das folgende Beispiel veranschaulicht die Grundsyntax von `setInterval()`.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a);
  console.log(b);
}
```

### Beispiel 2: Zwei Farben abwechselnd

Das folgende Beispiel ruft die Funktion `flashtext()` einmal pro Sekunde auf, bis die Stop-Schaltfläche gedrückt wird.

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

## Das "this"-Problem

Wenn Sie eine Methode an `setInterval()` oder eine andere Funktion übergeben, wird sie mit dem falschen [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Wert aufgerufen. Dieses Problem wird im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) ausführlich erklärt.

### Erklärung

Code, der von `setInterval()` ausgeführt wird, läuft in einem separaten Ausführungskontext als die Funktion, von der er aufgerufen wurde. Folglich wird das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort für die aufgerufene Funktion auf das `window`- (oder `global`-)Objekt gesetzt, es ist nicht dasselbe wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat. Siehe das folgende Beispiel (das `setTimeout()` anstelle von `setInterval()` verwendet – das Problem ist tatsächlich bei beiden Timern dasselbe):

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

Wie Sie sehen, gibt es keine Möglichkeiten, das `this`-Objekt an die Rückruffunktion in dem alten JavaScript zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeiten (in Browsern und anderswo) unterstützen [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) mit lexikalischem `this` – sodass wir `setInterval(() => this.myMethod())` schreiben können, wenn wir uns innerhalb der `myArray`-Methode befinden.

Wenn Sie IE unterstützen müssen, verwenden Sie die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)-Methode, die es Ihnen erlaubt, den Wert zu spezifizieren, der als `this` für alle Aufrufe einer bestimmten Funktion verwendet werden soll. Damit lassen sich Probleme leicht umgehen, bei denen unklar ist, was `this` sein wird, abhängig vom Kontext, von dem aus Ihre Funktion aufgerufen wurde.

## Verwendungshinweise

Die `setInterval()`-Funktion wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie zum Beispiel Animationen. Sie können das Intervall mit [`clearInterval()`](/de/docs/Web/API/Window/clearInterval) abbrechen.

Wenn Sie wünschen, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden Sie [`setTimeout()`](/de/docs/Web/API/Window/setTimeout).

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle geschachtelt werden; das heißt, die Rückruffunktion für `setInterval()` kann ihrerseits `setInterval()` aufrufen, um ein weiteres Intervall zu starten, obwohl das erste noch läuft. Um die möglichen Auswirkungen auf die Leistung zu mildern, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald Intervalle mehr als fünf Ebenen tief verschachtelt sind. Versuche, in tief verschachtelten Aufrufen von `setInterval()` einen Wert von weniger als 4 ms anzugeben, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen noch strengere Mindestwerte für das Intervall erzwingen, obwohl diese nicht häufig sein sollten. Beachten Sie auch, dass die tatsächliche Zeit, die zwischen den Aufrufen der Rückruffunktion verstreicht, länger sein kann als die angegebene `delay`; siehe [Gründe für längere Verzögerungen als angegeben](/de/docs/Web/API/Window/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Sicherstellen, dass die Ausführungsdauer kürzer als die Intervallhäufigkeit ist

Wenn die Möglichkeit besteht, dass Ihre Logik länger als die Intervallzeit zur Ausführung braucht, wird empfohlen, eine benannte Funktion rekursiv mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) aufzurufen. Wenn zum Beispiel `setInterval()` verwendet wird, um alle 5 Sekunden einen Remote-Server abzurufen, könnten Netzwerkverzögerungen, ein nicht reagierender Server und eine Vielzahl anderer Probleme verhindern, dass die Anfrage in ihrer vorgesehenen Zeit abgeschlossen wird. In solchen Fällen könnten Sie mit aufgestauten XHR-Anfragen konfrontiert werden, die nicht unbedingt in der richtigen Reihenfolge zurückkommen.

In diesen Fällen wird ein rekursives `setTimeout()`-Muster bevorzugt:

```js
(function loop() {
  setTimeout(() => {
    // Your logic here

    loop();
  }, delay);
})();
```

Im obigen Snippet wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt. `loop()` wird rekursiv in `setTimeout()` aufgerufen, nachdem die Logik die Ausführung abgeschlossen hat. Während dieses Muster keine Ausführung in einem festen Intervall garantiert, garantiert es, dass das vorherige Intervall abgeschlossen ist, bevor es rekursiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das Argumente an den Rückruf in `core-js` weiterleitet](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`Window.clearInterval()`](/de/docs/Web/API/Window/clearInterval)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`Window.setTimeout()`](/de/docs/Web/API/Window/setTimeout)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
