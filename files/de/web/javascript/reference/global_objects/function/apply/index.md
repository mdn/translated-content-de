---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`apply()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert auf und erhält `arguments`, die als Array (oder als [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden.

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameter

- `thisArg`
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Wenn die Funktion sich nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte werden in Objekte umgewandelt.
- `argsArray` {{optional_inline}}
  - : Ein array-ähnliches Objekt, das die Argumente spezifiziert, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn der Funktion keine Argumente bereitgestellt werden sollen.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/call", "call()")}}, außer dass die Funktionsargumente bei `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt, typischerweise einem Array, kombiniert werden — zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `apply()` können Sie beim Aufruf einer existierenden Funktion einen beliebigen Wert als `this` zuweisen, ohne die Funktion erst als Eigenschaft an das Objekt anhängen zu müssen. Dies ermöglicht es Ihnen, Methoden eines Objekts als generische Utility-Funktionen zu verwenden.

Sie können auch jedes Objekt verwenden, das array-ähnlich ist, als zweiten Parameter. In der Praxis bedeutet dies, dass es eine `length`-Eigenschaft haben muss und Integer-("Index")-Eigenschaften im Bereich `(0..length - 1)`. Zum Beispiel könnten Sie ein {{domxref("NodeList")}} verwenden oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

Mit den [Restparametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kann dies umgeschrieben werden als:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

Im Allgemeinen ist `fn.apply(null, args)` äquivalent zu `fn(...args)` mit der Spread-Syntax, außer dass `args` im ersten Fall mit `apply()` ein array-ähnliches Objekt sein muss und im letzteren Fall mit Spread-Syntax ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt erwartet wird.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketten (zum Beispiel, um Vererbung zu implementieren). Dies ruft die Konstruktorfunktion als einfache Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist und Klassen einen Fehler auslösen, weil sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) stattdessen.

## Beispiele

### Verwenden von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} verwenden, um ein Element an ein Array anzufügen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente auf einmal hinzufügen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses Array tatsächlich als einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, und endet mit einem Array innerhalb eines Arrays. Andererseits hat {{jsxref("Array.prototype.concat()")}} das gewünschte Verhalten in diesem Fall, fügt jedoch nicht an das bestehende Array an – es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` verwenden, um ein Array implizit als Serie von Argumenten zu "spreaden".

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

Der gleiche Effekt kann mit der Spread-Syntax erzielt werden.

```js
const array = ["a", "b"];
const elements = [0, 1, 2];
array.push(...elements);
console.info(array); // ["a", "b", 0, 1, 2]
```

### Verwenden von apply() und eingebauten Funktionen

Geschickte Nutzung von `apply()` ermöglicht es Ihnen, eingebaute Funktionen für einige Aufgaben zu verwenden, die wahrscheinlich sonst das manuelle Durchlaufen einer Sammlung (oder die Verwendung der Spread-Syntax) erfordern würden.

Zum Beispiel können wir {{jsxref("Math.max()")}} und {{jsxref("Math.min()")}} verwenden, um den größten und kleinsten Wert in einem Array zu ermitteln.

```js
// min/max Zahl in einem Array
const numbers = [5, 6, 2, 3, 7];

// Verwenden von Math.min/Math.max apply
let max = Math.max.apply(null, numbers);
// Dies ist ungefähr gleichbedeutend mit Math.max(numbers[0], …)
// oder Math.max(5, 6, …)

let min = Math.min.apply(null, numbers);

// im Gegensatz zu einem einfachen schleifenbasierten Algorithmus
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

Aber Vorsicht: Durch die Verwendung von `apply()` (oder der Spread-Syntax) mit einer beliebig langen Argumentenliste riskieren Sie, die Argumentlängenbegrenzung der JavaScript-Engine zu überschreiten.

Die Konsequenzen des Aufrufs einer Funktion mit zu vielen Argumenten (das heißt mehr als Zehntausende von Argumenten) sind nicht spezifiziert und variieren je nach Engine. (Die JavaScriptCore-Engine hat eine fest codierte [Argumentgrenze von 65536](https://webkit.org/b/80797).) Die meisten Engines werfen eine Ausnahme; es gibt jedoch keine normative Spezifikation, die andere Verhaltensweisen verbietet, wie das willkürliche Begrenzen der tatsächlich an die angewandte Funktion übergebenen Argumente. Um diesen letzteren Fall zu illustrieren: Wenn eine solche Engine eine Grenze von vier Argumenten hätte (tatsächliche Grenzen sind natürlich erheblich höher), wäre es, als ob die Argumente `5, 6, 2, 3` in den obigen Beispielen an `apply` übergeben worden wären, anstatt des gesamten Arrays.

Wenn Ihr Wertearray auf Zehntausende anwachsen könnte, verwenden Sie eine hybride Strategie: Wenden Sie Ihre Funktion auf Teile des Arrays auf einmal an:

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
