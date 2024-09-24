---
title: setInterval() globale Funktion
short-title: setInterval()
slug: Web/API/setInterval
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

Die **`setInterval()`**-Methode, angeboten über die {{domxref("Window")}}- und {{domxref("WorkerGlobalScope")}}-Schnittstellen, ruft wiederholt eine Funktion auf oder führt einen Code-Schnipsel aus, mit einer festen zeitlichen Verzögerung zwischen jedem Aufruf.

Diese Methode gibt eine Intervall-ID zurück, die das Intervall eindeutig identifiziert, sodass Sie es später durch Aufruf von {{domxref("clearInterval", "clearInterval()")}} entfernen können.

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
  - : Eine {{jsxref("function")}}, die alle `delay`-Millisekunden ausgeführt wird. Die erste Ausführung erfolgt nach `delay` Millisekunden.
- `code`
  - : Eine optionale Syntax erlaubt es, einen String anstelle einer Funktion anzugeben, der kompiliert und alle `delay` Millisekunden ausgeführt wird.
    Diese Syntax wird _nicht empfohlen_, aus den gleichen Gründen, die die Verwendung von {{jsxref("Global_Objects/eval", "eval()")}} zu einem Sicherheitsrisiko machen.
- `delay` {{optional_inline}}
  - : Die Zeit in Millisekunden (Tausendstel einer Sekunde), die der Timer zwischen den Ausführungen der angegebenen Funktion oder des Codes verzögern soll. Standardmäßig 0, sofern nicht angegeben.
    Siehe [Verzögerungsbeschränkungen](#verzögerungsbeschränkungen) unten für Details zum erlaubten Wertebereich von `delay`.
- `arg1`, …, `argN` {{optional_inline}}
  - : Zusätzliche Argumente, die an die durch _func_ angegebene Funktion übergeben werden, sobald der Timer abläuft.

### Rückgabewert

Die zurückgegebene `intervalID` ist ein numerischer, nicht null-Wert, der den durch den Aufruf von `setInterval()` erstellten Timer identifiziert; dieser Wert kann an {{domxref("clearInterval()")}} übergeben werden, um das Intervall abzubrechen.

Es kann hilfreich sein zu wissen, dass `setInterval()` und {{domxref("setTimeout()")}} denselben ID-Pool nutzen und dass `clearInterval()` und {{domxref("clearTimeout", "clearTimeout()")}} technisch austauschbar verwendet werden können.
Zur Klarheit sollten Sie jedoch stets versuchen, sie zuzuordnen, um Verwirrung bei der Wartung Ihres Codes zu vermeiden.

> [!NOTE]
> Das `delay`-Argument wird in eine 32-Bit-ganzzahlige Zahl umgewandelt.
> Dies begrenzt `delay` effektiv auf 2147483647 ms, was ungefähr 24,8 Tagen entspricht, da es als Ganzzahl in der IDL angegeben ist.

## Beispiele

### Beispiel 1: Grundsyntax

Das folgende Beispiel zeigt die Grundsyntax von `setInterval()`.

```js
const intervalID = setInterval(myCallback, 500, "Parameter 1", "Parameter 2");

function myCallback(a, b) {
  // Ihr Code hier
  // Parameter sind rein optional.
  console.log(a);
  console.log(b);
}
```

### Beispiel 2: Abwechselnd zwei Farben

Das folgende Beispiel ruft die Funktion `flashtext()` jede Sekunde auf, bis die Stopp-Taste gedrückt wird.

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
// Variable zur Speicherung unserer intervalID
let nIntervId;

function changeColor() {
  // prüfen, ob ein Intervall bereits eingerichtet wurde
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
  // Freigeben unserer intervalID von der Variable
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
Dieses Problem wird im Detail in der [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference/Operators/this#callbacks) erklärt.

### Erklärung

Code, der von `setInterval()` ausgeführt wird, läuft in einem anderen Ausführungskontext als die Funktion, von der er aufgerufen wurde. Daher ist das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort für die aufgerufene Funktion auf das `window`- (oder `global`) Objekt gesetzt und nicht dasselbe wie der `this`-Wert für die Funktion, die `setTimeout` aufgerufen hat. Sehen Sie sich das folgende Beispiel an (das `setTimeout()` anstelle von `setInterval()` verwendet – das Problem ist bei beiden Timern dasselbe):

```js
myArray = ["zero", "one", "two"];

myArray.myMethod = function (sProperty) {
  alert(arguments.length > 0 ? this[sProperty] : this);
};

myArray.myMethod(); // druckt "zero,one,two"
myArray.myMethod(1); // druckt "one"
setTimeout(myArray.myMethod, 1000); // druckt "[object Window]" nach 1 Sekunde
setTimeout(myArray.myMethod, 1500, "1"); // druckt "undefined" nach 1,5 Sekunden

// Das 'this'-Objekt mit .call zu übergeben wird nicht funktionieren
// da dies den Wert von this innerhalb von setTimeout selbst ändern wird
// während wir den Wert von this innerhalb myArray.myMethod ändern wollen.
// Tatsächlich wird es einen Fehler geben, weil der setTimeout-Code erwartet, dass this das Window-Objekt ist:
setTimeout.call(myArray, myArray.myMethod, 2000); // Fehler: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(myArray, myArray.myMethod, 2500, 2); // derselbe Fehler
```

Wie Sie sehen, gibt es in Legacy-JavaScript keine Möglichkeiten, das `this`-Objekt an die Callback-Funktion zu übergeben.

### Eine mögliche Lösung

Alle modernen JavaScript-Laufzeitumgebungen (in Browsern und anderswo) unterstützen [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) mit lexikalischem `this` — dadurch können wir `setInterval(() => this.myMethod())` schreiben, wenn wir uns innerhalb der `myArray`-Methode befinden.

Wenn Sie Internet Explorer unterstützen müssen, verwenden Sie die [`Function.prototype.bind()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)-Methode. Diese ermöglicht es Ihnen, den Wert zu spezifizieren, der als `this` für alle Aufrufe einer gegebenen Funktion verwendet werden soll. Auf diese Weise können Sie leicht Probleme umgehen, bei denen `this` je nach Kontext, aus dem Ihre Funktion aufgerufen wurde, unklar ist.

## Nutzungshinweise

Die `setInterval()`-Funktion wird häufig verwendet, um eine Verzögerung für Funktionen festzulegen, die immer wieder ausgeführt werden, wie z.B. Animationen. Sie können das Intervall mit {{domxref("clearInterval()")}} abbrechen.

Wenn Sie möchten, dass Ihre Funktion _einmal_ nach der angegebenen Verzögerung aufgerufen wird, verwenden
Sie {{domxref("setTimeout()")}}.

### Verzögerungsbeschränkungen

Es ist möglich, dass Intervalle geschachtelt sind; das heißt, der Callback für
`setInterval()` kann wiederum `setInterval()` aufrufen, um ein weiteres
Intervall zu starten, selbst wenn das erste noch läuft. Um die potenziellen
Auswirkungen auf die Leistung zu mindern, erzwingt der Browser automatisch einen Mindestwert von 4 ms für das Intervall, sobald Intervalle mehr als fünf Ebenen tief geschachtelt sind.
Versuche, einen Wert kleiner als 4 ms bei tief geschachtelten Aufrufen von `setInterval()` anzugeben, werden auf 4 ms festgelegt.

Browser können unter bestimmten Umständen sogar noch strengere Mindestwerte für das Intervall durchsetzen, obwohl diese nicht häufig sein sollten. Beachten Sie auch, dass die tatsächliche Zeitspanne zwischen den Aufrufen des Callback länger sein kann als der angegebene
`delay`; siehe
[Gründe für länger als spezifizierte Verzögerungen](/de/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified) für Beispiele.

### Sicherstellen, dass die Ausführungsdauer kürzer ist als die Intervallfrequenz

Wenn die Möglichkeit besteht, dass Ihre Logik länger zur Ausführung benötigt als die
Intervallzeit, wird empfohlen, eine benannte Funktion rekursiv mit
{{domxref("setTimeout()")}} aufzurufen. Zum Beispiel, wenn
`setInterval()` verwendet wird, um einen Remote-Server alle 5 Sekunden abzufragen, können Netzwerk
latenz, ein nicht reagierender Server und eine Vielzahl anderer Probleme verhindern, dass die
Anfrage in der vorgegebenen Zeit abgeschlossen wird. So können Sie mit aufgereihten XHR
Anfragen dastehen, die nicht unbedingt in der Reihenfolge zurückkommen, in der sie gesendet wurden.

In diesen Fällen ist ein rekursives `setTimeout()`-Muster zu bevorzugen:

```js
(function loop() {
  setTimeout(() => {
    // Ihre Logik hier

    loop();
  }, delay);
})();
```

Im obigen Snippet wird eine benannte Funktion `loop()` deklariert und sofort ausgeführt. `loop()` wird rekursiv innerhalb von `setTimeout()` aufgerufen, nachdem die Logik abgeschlossen ist. Während dieses Muster keine garantierte Ausführung in einem festen Intervall bietet, gewährleistet es, dass das vorherige
Intervall abgeschlossen ist, bevor die Funktion wieder aufgerufen wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `setInterval`, das das Übergeben von Argumenten an den Callback in `core-js` ermöglicht](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- {{domxref("setTimeout()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("clearInterval()")}}
- {{domxref("window.requestAnimationFrame()")}}
