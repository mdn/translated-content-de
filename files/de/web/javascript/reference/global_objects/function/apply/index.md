---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`apply()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert und den als Array (oder als [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellten `arguments` auf.

{{EmbedInteractiveExample("pages/js/function-apply.html")}}

## Syntax

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### Parameter

- `thisArg`
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Wenn die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte in Objekte umgewandelt.
- `argsArray` {{optional_inline}}
  - : Ein array-ähnliches Objekt, das die Argumente angibt, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn der Funktion keine Argumente bereitgestellt werden sollen.

### Rückgabewert

Das Ergebnis des Aufrufs der Funktion mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/call", "call()")}}, außer dass die Funktionsargumente bei `call()` einzeln in einer Liste übergeben werden, während sie bei `apply()` in einem Objekt kombiniert sind, typischerweise einem Array — zum Beispiel `func.call(this, "essen", "Bananen")` vs. `func.apply(this, ["essen", "Bananen"])`.

Normalerweise ist beim Aufruf einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) innerhalb der Funktion das Objekt, auf dem die Funktion abgerufen wurde. Mit `apply()` können Sie beim Aufruf einer bestehenden Funktion einen beliebigen Wert als `this` zuweisen, ohne die Funktion zuerst als Eigenschaft an das Objekt anzuhängen. Dies ermöglicht es Ihnen, Methoden eines Objekts als allgemeine Utility-Funktionen zu verwenden.

Sie können auch jede Art von Objekt verwenden, das array-ähnlich ist, als zweiten Parameter. In der Praxis bedeutet das, dass es eine `length`-Eigenschaft und ganzzahlige ("index") Eigenschaften im Bereich `(0..length - 1)` haben muss. Sie könnten zum Beispiel eine [`NodeList`](/de/docs/Web/API/NodeList) verwenden oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'essen', '1': 'Bananen' }`. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

Mit den [Rest-Parametern](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und der Parameter [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kann dies umgeschrieben werden als:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

Im Allgemeinen ist `fn.apply(null, args)` äquivalent zu `fn(...args)` mit der Parameter-Spread-Syntax, außer dass `args` im ersten Fall mit `apply()` ein array-ähnliches Objekt erwartet wird und im letzteren Fall mit der Spread-Syntax ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketten (zum Beispiel, um Vererbung zu implementieren). Dies führt dazu, dass die Konstruktorfunktion als normale Funktion aufgerufen wird, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen werfen einen Fehler, weil sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) stattdessen.

## Beispiele

### Verwendung von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} verwenden, um ein Element an ein Array anzuhängen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente auf einmal hinzufügen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses Array tatsächlich als ein einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, was dazu führt, dass sich ein Array innerhalb eines Arrays befindet. Auf der anderen Seite hat {{jsxref("Array.prototype.concat()")}} in diesem Fall das gewünschte Verhalten, aber es fügt nicht an das _bestehende_ Array an — es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` verwenden, um implizit ein Array als eine Serie von Argumenten "zu verbreiten".

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

Eine clevere Verwendung von `apply()` ermöglicht es Ihnen, eingebaute Funktionen für einige Aufgaben zu nutzen, die wahrscheinlich sonst manuelles Durchlaufen einer Sammlung (oder Einsatz der Spread-Syntax) erfordern würden.

Zum Beispiel können wir {{jsxref("Math.max()")}} und {{jsxref("Math.min()")}} verwenden, um den maximalen und minimalen Wert in einem Array zu ermitteln.

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

Aber Vorsicht: Bei der Verwendung von `apply()` (oder der Spread-Syntax) mit einer beliebig langen Argumentenliste besteht das Risiko, die Argumentlängenbegrenzung der JavaScript-Engine zu überschreiten.

Die Konsequenzen des Aufrufs einer Funktion mit zu vielen Argumenten (d. h. mehr als zehntausend Argumente) sind nicht spezifiziert und variieren je nach Engine. (Die JavaScriptCore-Engine hat eine festgelegte [Argumentgrenze von 65536](https://webkit.org/b/80797).) Die meisten Engines werfen eine Ausnahme; Es gibt jedoch keine normative Spezifikation, die andere Verhaltensweisen wie das willkürliche Begrenzen der Anzahl der tatsächlich an die aufgerufene Funktion übergebenen Argumente verhindert. Um diesen letzteren Fall zu veranschaulichen: Wenn eine solche Engine eine Beschränkung von vier Argumenten hätte (tatsächliche Einschränkungen sind natürlich erheblich höher), wäre es, als ob die Argumente `5, 6, 2, 3` an `apply` in den obigen Beispielen übergeben worden wären, anstatt das vollständige Array.

Wenn Ihr Wertearray in die zehntausenden anwachsen könnte, verwenden Sie eine Hybridstrategie: Wenden Sie Ihre Funktion auf Teile des Arrays gleichzeitig an:

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
