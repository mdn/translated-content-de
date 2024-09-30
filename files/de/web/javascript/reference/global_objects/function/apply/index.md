---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`apply()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert und `arguments` auf, die als Array (oder ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden.

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameter

- `thisArg`
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Wenn die Funktion nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte konvertiert.
- `argsArray` {{optional_inline}}
  - : Ein array-ähnliches Objekt, das die Argumente spezifiziert, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn der Funktion keine Argumente zur Verfügung gestellt werden sollen.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch zu {{jsxref("Function/call", "call()")}}, mit der Ausnahme, dass die Funktionsargumente einzeln als Liste an `call()` übergeben werden, während sie für `apply()` in einem Objekt, typischerweise einem Array, kombiniert sind – zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf das die Funktion zugreift. Mit `apply()` können Sie einen beliebigen Wert als `this` zuweisen, wenn Sie eine vorhandene Funktion aufrufen, ohne die Funktion zuerst dem Objekt als Eigenschaft anzuhängen. Dadurch können Sie Methoden eines Objekts als generische Hilfsfunktionen verwenden.

Sie können auch jedes Arten von Objekten verwenden, die array-ähnlich sind, als zweiten Parameter. In der Praxis bedeutet dies, dass es eine `length`-Eigenschaft und ganzzahlige („Index“-)Eigenschaften im Bereich `(0..length - 1)` haben muss. Zum Beispiel könnten Sie ein [`NodeList`](/de/docs/Web/API/NodeList) verwenden oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

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

Im Allgemeinen ist `fn.apply(null, args)` äquivalent zu `fn(...args)` mit der Parameter-Spread-Syntax, außer dass `args` im ersten Fall von `apply()` als array-ähnliches Objekt erwartet wird und im letzteren Fall mit der Spread-Syntax als [iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketten (zum Beispiel, um Vererbung zu implementieren). Dies ruft die Konstruktorfunktion als normale Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist und Klassen einen Fehler werfen, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) stattdessen.

## Beispiele

### Die Verwendung von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} benutzen, um ein Element an ein Array anzuhängen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente auf einmal anhängen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses Array tatsächlich als ein einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, was zu einem Array innerhalb eines Arrays führt. Auf der anderen Seite hat {{jsxref("Array.prototype.concat()")}} in diesem Fall das gewünschte Verhalten, aber es hängt nicht an das _existierende_ Array an – es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` benutzen, um implizit ein Array als eine Serie von Argumenten zu "verteilen".

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

### Die Verwendung von apply() und eingebauten Funktionen

Eine clevere Nutzung von `apply()` ermöglicht es Ihnen, eingebaute Funktionen für manche Aufgaben zu verwenden, die ansonsten wahrscheinlich erfordern würden, dass manuell über eine Sammlung iteriert wird (oder die Spread-Syntax verwendet wird).

Zum Beispiel können wir {{jsxref("Math.max()")}} und {{jsxref("Math.min()")}} verwenden, um den maximalen und minimalen Wert in einem Array zu finden.

```js
// min/max number in an array
const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// This about equal to Math.max(numbers[0], …)
// or Math.max(5, 6, …)

let min = Math.min.apply(null, numbers);

// vs. simple loop based algorithm
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

Aber Vorsicht: Durch die Verwendung von `apply()` (oder der Spread-Syntax) mit einer beliebig langen Argumentenliste laufen Sie Gefahr, das Argumentlängenlimit der JavaScript-Engine zu überschreiten.

Die Konsequenzen des Aufrufs einer Funktion mit zu vielen Argumenten (d.h. mehr als zigtausend Argumente) sind undefiniert und variieren je nach Engine. (Die JavaScriptCore-Engine hat ein fest codiertes [Argument-Limit von 65536](https://webkit.org/b/80797).) Die meisten Engines werfen eine Ausnahme; aber es gibt keine normative Spezifikation, die andere Verhaltensweisen verhindert, wie eine willkürliche Begrenzung der tatsächlich an die angewendete Funktion übergebenen Argumente. Um diesen letztgenannten Fall zu veranschaulichen: Wenn eine solche Engine ein Limit von vier Argumenten hätte (tatsächliche Limits sind natürlich deutlich höher), wäre es, als ob die Argumente `5, 6, 2, 3` an `apply` in den obigen Beispielen übergeben worden wären, anstatt das volle Array.

Wenn Ihr Wert-Array möglicherweise in die zehntausende wächst, verwenden Sie eine Hybridstrategie: Wenden Sie Ihre Funktion jeweils auf Teile des Arrays an:

```js
function minOfArray(arr) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < arr.length; i += QUANTUM) {
    const submin = Math.min.apply(
      null,
      arr.slice(i, Math.min(i + QUANTUM, arr.length)),
    );
    min = Math.min(submin, min);
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
