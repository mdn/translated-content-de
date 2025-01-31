---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`apply()`** Methode von {{jsxref("Function")}} Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert auf und übergibt `arguments` als ein Array (oder ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameter

- `thisArg`
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Wenn die Funktion sich nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt.
- `argsArray` {{optional_inline}}
  - : Ein array-ähnliches Objekt, das die Argumente spezifiziert, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn keine Argumente an die Funktion übergeben werden sollen.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist nahezu identisch mit {{jsxref("Function/call", "call()")}}, außer dass die Funktionsargumente für `call()` einzeln als Liste übergeben werden, während sie für `apply()` in einem Objekt kombiniert werden, typischerweise einem Array — zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `apply()` können Sie einen beliebigen Wert als `this` beim Aufrufen einer bestehenden Funktion zuweisen, ohne die Funktion zuerst als Eigenschaft an das Objekt anhängen zu müssen. Dies ermöglicht die Nutzung von Methoden eines Objekts als generische Hilfsfunktionen.

Sie können auch jede Art von Objekt, das array-ähnlich ist, als zweiten Parameter verwenden. In der Praxis bedeutet dies, dass es eine `length`-Eigenschaft haben muss und ganzzahlige ("Index")-Eigenschaften im Bereich `(0..length - 1)`. Zum Beispiel könnten Sie eine [`NodeList`](/de/docs/Web/API/NodeList) verwenden oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

Mit den [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und der Parameter-[Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kann dies umgeschrieben werden als:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

Im Allgemeinen ist `fn.apply(null, args)` äquivalent zu `fn(...args)` mit der Parameter-Spread-Syntax, außer dass `args` im ersten Fall mit `apply()` als array-ähnliches Objekt erwartet wird und im zweiten Fall mit der Spread-Syntax als ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketten (zum Beispiel zur Implementierung von Vererbung). Dies würde die Konstruktorfunktion als normale Funktion aufrufen, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen werfen einen Fehler, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) stattdessen.

## Beispiele

### Verwenden von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} verwenden, um ein Element an ein Array anzuhängen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente gleichzeitig hinzufügen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses tatsächlich als einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, was dazu führt, dass sich ein Array in einem Array befindet. Andererseits hat {{jsxref("Array.prototype.concat()")}} in diesem Fall das gewünschte Verhalten, fügt jedoch nicht zum _bestehenden_ Array hinzu — es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` verwenden, um ein Array implizit als eine Reihe von Argumenten "zu verteilen".

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

Der gleiche Effekt kann mit der Spread-Syntax erreicht werden.

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### Verwenden von apply() und eingebauten Funktionen

Durch cleveres Verwenden von `apply()` können Sie eingebaute Funktionen für einige Aufgaben verwenden, die wahrscheinlich ansonsten ein manuelles Schleifen über eine Sammlung (oder die Spread-Syntax) erfordern würden.

Zum Beispiel können wir {{jsxref("Math.max()")}} und {{jsxref("Math.min()")}} verwenden, um den maximalen und den minimalen Wert in einem Array zu finden.

```js
// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], …)
// or Math.max(5, 6, …)

let min = Math.min.apply(null, numbers);

// vs. loop based algorithm
max = -Infinity;
min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
```

Aber Vorsicht: Durch die Verwendung von `apply()` (oder der Spread-Syntax) mit einer willkürlich langen Argumentenliste laufen Sie Gefahr, das Argumentlängenlimit der JavaScript-Engine zu überschreiten.

Die Konsequenzen des Aufrufs einer Funktion mit zu vielen Argumenten (das bedeutet mehr als zehntausend Argumente) sind unbestimmt und variieren je nach Engine. (Die JavaScriptCore-Engine hat ein fest codiertes [Argument-Limit von 65536](https://webkit.org/b/80797).) Die meisten Engins werfen eine Ausnahme; es gibt jedoch keine normative Spezifikation, die andere Verhaltensweisen verhindert, wie zum Beispiel, die Anzahl der tatsächlich an die aufgerufene Funktion übergebenen Argumente willkürlich zu begrenzen. Um diesen letzteren Fall zu veranschaulichen: Wenn eine solche Engine ein Limit von vier Argumenten hätte (tatsächliche Limits sind natürlich wesentlich höher), wäre es, als ob die Argumente `5, 6, 2, 3` in den obigen Beispielen an `apply` übergeben worden wären, anstatt das vollständige Array.

Wenn Ihr Werte-Array in die Zehntausende anwachsen könnte, verwenden Sie eine hybride Strategie: Wenden Sie Ihre Funktion auf Teile des Arrays gleichzeitig an:

```js
function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const subMin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length)),
    );
    min = Math.min(subMin, min);
  }

  return min;
}

const min = minOfArray([5, 6, 2, 3, 7]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Functions/arguments", "arguments")}}
- {{jsxref("Function.prototype.bind()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [Spread-Syntax (`...`)](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
