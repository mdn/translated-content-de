---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{JSRef}}

Die **`apply()`**-Methode von {{jsxref("Function")}}-Instanzen ruft diese Funktion mit einem gegebenen `this`-Wert und `arguments` auf, die als Array (oder als [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects)) bereitgestellt werden.

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
  - : Der Wert von `this`, der für den Aufruf von `func` bereitgestellt wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt.
- `argsArray` {{optional_inline}}
  - : Ein array-ähnliches Objekt, das die Argumente angibt, mit denen `func` aufgerufen werden soll, oder [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) oder [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined), wenn keine Argumente an die Funktion übergeben werden sollen.

### Rückgabewert

Das Ergebnis des Funktionsaufrufs mit dem angegebenen `this`-Wert und den Argumenten.

## Beschreibung

> [!NOTE]
> Diese Funktion ist fast identisch mit {{jsxref("Function/call", "call()")}}, außer dass die Funktionsargumente an `call()` einzeln als Liste übergeben werden, während sie bei `apply()` in einem Objekt kombiniert werden, typischerweise einem Array — zum Beispiel `func.call(this, "eat", "bananas")` vs. `func.apply(this, ["eat", "bananas"])`.

Normalerweise ist beim Aufrufen einer Funktion der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) in der Funktion das Objekt, auf dem die Funktion aufgerufen wurde. Mit `apply()` können Sie beim Aufrufen einer bestehenden Funktion einen beliebigen Wert als `this` zuweisen, ohne die Funktion zuerst als Eigenschaft an das Objekt anhängen zu müssen. Dies ermöglicht es, Methoden eines Objekts als generische Hilfsfunktionen zu verwenden.

Sie können auch jede Art von Objekt, das array-ähnlich ist, als zweiten Parameter verwenden. In der Praxis bedeutet dies, dass es eine `length`-Eigenschaft und ganzzahlige ("index") Eigenschaften im Bereich `(0..length - 1)` haben muss. Zum Beispiel könnten Sie ein [`NodeList`](/de/docs/Web/API/NodeList) verwenden oder ein benutzerdefiniertes Objekt wie `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. Sie können auch {{jsxref("Functions/arguments", "arguments")}} verwenden, zum Beispiel:

```js
function wrapper() {
  return anotherFn.apply(null, arguments);
}
```

Mit den [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters) und der Parameter-[Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) kann dies folgendermaßen umgeschrieben werden:

```js
function wrapper(...args) {
  return anotherFn(...args);
}
```

Allgemein gesagt ist `fn.apply(null, args)` äquivalent zu `fn(...args)` mit der Parameter-Spread-Syntax, außer dass `args` im ersten Fall mit `apply()` ein array-ähnliches Objekt sein sollte und im zweiten Fall mit Spread-Syntax ein [iterierbares](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) Objekt.

> [!WARNING]
> Verwenden Sie `apply()` nicht, um Konstruktoren zu verketten (zum Beispiel, um Vererbung zu implementieren). Dies ruft die Konstruktorfunktion als einfache Funktion auf, was bedeutet, dass [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) `undefined` ist, und Klassen werfen einen Fehler, da sie nicht ohne [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden können. Verwenden Sie {{jsxref("Reflect.construct()")}} oder [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) stattdessen.

## Beispiele

### Verwendung von apply(), um ein Array an ein anderes anzuhängen

Sie können {{jsxref("Array.prototype.push()")}} verwenden, um ein Element an ein Array anzuhängen. Da `push()` eine variable Anzahl von Argumenten akzeptiert, können Sie auch mehrere Elemente gleichzeitig hinzufügen. Wenn Sie jedoch ein Array an `push()` übergeben, wird dieses Array tatsächlich als ein einzelnes Element hinzugefügt, anstatt die Elemente einzeln hinzuzufügen, was zu einem Array innerhalb eines Arrays führt. Andererseits hat {{jsxref("Array.prototype.concat()")}} in diesem Fall das gewünschte Verhalten, aber es fügt nicht an das _bestehende_ Array an — es erstellt und gibt ein neues Array zurück.

In diesem Fall können Sie `apply` verwenden, um ein Array implizit als eine Reihe von Argumenten "zu verteilen".

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

### Verwendung von apply() und eingebauten Funktionen

Eine clevere Verwendung von `apply()` ermöglicht es Ihnen, eingebaut Funktionen für einige Aufgaben zu nutzen, die ansonsten wahrscheinlich das manuelle Durchlaufen einer Sammlung erfordern würden (oder die Verwendung der Spread-Syntax).

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

for (const n of numbers) {
  if (n > max) {
    max = n;
  }
  if (n < min) {
    min = n;
  }
}
```

Aber Vorsicht: Durch die Verwendung von `apply()` (oder der Spread-Syntax) mit einer beliebig langen Argumentenliste laufen Sie Gefahr, das Argumentlängenlimit der JavaScript-Engine zu überschreiten.

Die Konsequenzen des Aufrufens einer Funktion mit zu vielen Argumenten (das heißt, mehr als Zehntausende von Argumenten) sind nicht spezifiziert und variieren je nach Engine. (Die JavaScriptCore-Engine hat ein fest kodiertes [Argumentlimit von 65536](https://webkit.org/b/80797).) Die meisten Engines werfen eine Ausnahme; aber es gibt keine normative Spezifikation, die andere Verhaltensweisen verhindert, wie z.B. das willkürliche Begrenzen der tatsächlich an die angewandte Funktion übergebenen Argumente. Um diesen letztgenannten Fall zu veranschaulichen: Wenn eine solche Engine ein Limit von vier Argumenten hätte (tatsächliche Limits sind natürlich deutlich höher), wäre es so, als ob die Argumente `5, 6, 2, 3` an `apply` übergeben worden wären, anstatt das gesamte Array.

Wenn Ihr Werte-Array in die Zehntausende anwächst, verwenden Sie eine hybride Strategie: Wenden Sie Ihre Funktion jeweils auf Teile des Arrays an:

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
