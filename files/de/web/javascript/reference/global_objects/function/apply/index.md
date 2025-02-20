---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`apply()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem angegebenen `this`-Wert und `arguments`, die als Array (oder ein [Array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden, auf.

{{InteractiveExample("JavaScript Demo: Function.apply()")}}

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
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Befindet sich die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt.
- `argsArray` {{optional_inline}}
  - : Ein Array-ähnliches Objekt, das die Argumente angibt, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) beziehungsweise [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn keine Argumente an die Funktion übergeben werden sollen.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/call", "call()")}}, mit der Ausnahme, dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt, typischerweise einem Array, kombiniert werden — zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb dieser Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `apply()` können Sie beim Aufrufen einer bestehenden Funktion einen beliebigen Wert als `this` zuweisen, ohne die Funktion zuerst als Eigenschaft an ein Objekt anfügen zu müssen. Dadurch können Sie Methoden eines Objekts als generische Utility-Funktionen verwenden.

Sie können auch jedes Array-ähnliche Objekt als zweiten Parameter verwenden. Praktisch bedeutet das, dass das Objekt eine Eigenschaft `length` und ganzzahlige ("Index")-Eigenschaften im Bereich `(0..length - 1)` besitzen muss. Beispielsweise können Sie ein [`NodeList`](/de/docs/Web/API/NodeList) oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }` verwenden. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

Mit den [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und der Parameter-[Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kann dies neu formuliert werden als:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

Im Allgemeinen entspricht `fn.apply(null, args)` dem Aufruf `fn(...args)` mit der Spread-Syntax der Parameter, mit dem Unterschied, dass `args` bei der Verwendung mit `apply()` ein Array-ähnliches Objekt sein muss und bei der Spread-Syntax ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt erwartet wird.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketteten (z. B. um Vererbung zu implementieren). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen geben einen Fehler aus, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie stattdessen {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends).

## Beispiele

### Verwendung von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} verwenden, um ein Element an ein Array anzuhängen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente gleichzeitig anhängen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses tatsächlich als einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, was dazu führt, dass sich ein Array innerhalb eines Arrays befindet. Andererseits hat {{jsxref("Array.prototype.concat()")}} in diesem Fall das gewünschte Verhalten, fügt jedoch nicht zu einem _bestehenden_ Array hinzu – es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` verwenden, um ein Array implizit als Serie von Argumenten "zu spreizen".

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

### Verwendung von apply() und eingebauten Funktionen

Ein cleverer Einsatz von `apply()` ermöglicht es Ihnen, eingebaute Funktionen für Aufgaben zu nutzen, die ansonsten möglicherweise das manuelle Durchlaufen einer Sammlung (oder die Nutzung der Spread-Syntax) erfordern würden.

Zum Beispiel können wir {{jsxref("Math.max()")}} und {{jsxref("Math.min()")}} verwenden, um den maximalen und minimalen Wert in einem Array zu ermitteln.

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

Aber Vorsicht: Durch die Verwendung von `apply()` (oder der Spread-Syntax) mit einer willkürlich langen Argumentliste riskieren Sie, die Argumentlängenbegrenzung der JavaScript-Engine zu überschreiten.

Die Folgen des Aufrufs einer Funktion mit zu vielen Argumenten (d. h. mehr als zehntausend Argumente) sind nicht spezifiziert und variieren je nach Engine. (Die JavaScriptCore-Engine hat eine festgelegte [Argumentbegrenzung von 65536](https://webkit.org/b/80797).) Die meisten Engines werfen eine Ausnahme; es gibt jedoch keine normative Spezifikation, die andere Verhaltensweisen ausschließt, wie z. B. die willkürliche Begrenzung der tatsächlich an die angewandte Funktion übergebenen Argumente. Um diesen Fall zu verdeutlichen: Wenn eine solche Engine ein Argumentlimit von vier hätte (tatsächliche Limits sind natürlich deutlich höher), wäre es so, als ob die Argumente `5, 6, 2, 3` in den obigen Beispielen an `apply` übergeben worden wären, anstelle des vollständigen Arrays.

Wenn Ihr Werte-Array auf zehntausende Einträge anwachsen könnte, verwenden Sie eine hybride Strategie: Wenden Sie die Funktion in Teilabschnitten des Arrays an:

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
