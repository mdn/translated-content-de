---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{JSRef}}

Die **`apply()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert auf und übergibt die `arguments` als ein Array (oder als ein [Array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)).

{{InteractiveExample("JavaScript Demo: Function.prototype.apply()")}}

```js interactive-example
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
```

## Syntax

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameter

- `thisArg`
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte werden in Objekte konvertiert.
- `argsArray` {{optional_inline}}
  - : Ein Array-ähnliches Objekt, das die Argumente spezifiziert, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn keine Argumente an die Funktion übergeben werden sollen.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem spezifizierten `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/call", "call()")}}, abgesehen davon, dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt, typischerweise einem Array, kombiniert werden — zum Beispiel: `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise, wenn Sie eine Funktion aufrufen, ist der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `apply()` können Sie einen beliebigen Wert als `this` beim Aufruf einer bestehenden Funktion festlegen, ohne die Funktion zuerst als Eigenschaft an das Objekt anzuhängen. Dies ermöglicht es Ihnen, Methoden eines Objekts als generische Dienstfunktionen zu verwenden.

Sie können auch jede Art von Objekt verwenden, das Array-ähnlich ist, als zweiten Parameter. In der Praxis bedeutet dies, dass es eine `length`-Eigenschaft haben muss und ganzzahlige ("index") Eigenschaften im Bereich `(0..length - 1)`. Zum Beispiel könnten Sie eine [`NodeList`](/de/docs/Web/API/NodeList) verwenden oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

Mit den [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und dem Parameter-[Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kann dies umgeschrieben werden als:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

Im Allgemeinen ist `fn.apply(null, args)` gleichwertig mit `fn(...args)` mit der Spread-Syntax, außer dass `args` im ersten Fall mit `apply()` als Array-ähnliches Objekt erwartet wird, und im letzteren Fall mit der Spread-Syntax als [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketten (zum Beispiel zur Implementierung von Vererbung). Dies ruft die Konstruktorfunktion als einfache Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen einen Fehler auslösen, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Nutzung von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} verwenden, um ein Element an ein Array anzuhängen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente gleichzeitig anfügen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses Array tatsächlich als ein einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, was zu einem Array innerhalb eines Arrays führt. Andererseits hat {{jsxref("Array.prototype.concat()")}} in diesem Fall das gewünschte Verhalten, aber es fügt nicht an das _bestehende_ Array an — es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` verwenden, um ein Array implizit als eine Reihe von Argumenten zu "entfalten".

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

### Nutzung von apply() und eingebauten Funktionen

Ein cleverer Gebrauch von `apply()` ermöglicht es Ihnen, eingebaute Funktionen für einige Aufgaben zu verwenden, die wahrscheinlich sonst das manuelle Durchlaufen einer Sammlung (oder die Nutzung der Spread-Syntax) erfordern würden.

Zum Beispiel können wir {{jsxref("Math.max()")}} und {{jsxref("Math.min()")}} verwenden, um den maximalen und minimalen Wert in einem Array zu bestimmen.

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
min = Infinity;

for (const n of numbers) {
  if (n > max) {
    max = n;
  }
  if (n < min) {
    min = n;
  }
}
```

Seien Sie jedoch vorsichtig: Wenn Sie `apply()` (oder die Spread-Syntax) mit einer willkürlich langen Argumentenliste verwenden, riskieren Sie, das Argumentlängenlimit der JavaScript-Engine zu überschreiten.

Die Konsequenzen des Aufrufs einer Funktion mit zu vielen Argumenten (das heißt mehr als zehntausenden von Argumenten) sind nicht spezifiziert und variieren zwischen den Engines. (Die JavaScriptCore-Engine hat ein hart kodiertes [Argumentlimit von 65536](https://webkit.org/b/80797).) Die meisten Engines werfen eine Ausnahme; es gibt jedoch keine normative Spezifikation, die andere Verhaltensweisen verhindert, wie zum Beispiel das willkürliche Begrenzen der tatsächlich an die angewandte Funktion übergebenen Argumente. Um diesen letztgenannten Fall zu veranschaulichen: Wenn eine solche Engine ein Limit von vier Argumenten hätte (tatsächliche Limits sind natürlich bedeutend höher), wäre es so, als wären die Argumente `5, 6, 2, 3` an `apply` in den obigen Beispielen übergeben worden, anstelle des gesamten Arrays.

Wenn Ihr Werte-Array in die zehntausende wachsen könnte, verwenden Sie eine hybride Strategie: Wenden Sie Ihre Funktion auf Teile des Arrays gleichzeitig an:

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
