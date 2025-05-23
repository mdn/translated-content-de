---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{JSRef}}

Die **`bind()`** Methode von {{jsxref("Function")}} Instanzen erstellt eine neue Funktion, die, wenn sie aufgerufen wird, diese Funktion mit ihrem `this` Schlüsselwort auf den bereitgestellten Wert einstellt und eine gegebene Sequenz von Argumenten voranfügt, wenn die neue Funktion aufgerufen wird.

{{InteractiveExample("JavaScript Demo: Function.prototype.bind()", "taller")}}

```js interactive-example
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42
```

## Syntax

```js-nolint
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

### Parameter

- `thisArg`
  - : Der Wert, der als `this` Parameter an die Ziel-Funktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn sich die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mithilfe des {{jsxref("Operators/new", "new")}} Operators konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, die der gebundenen Funktion beim Aufruf von `func` übergeben werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem angegebenen `this` Wert und den initialen Argumenten (falls vorhanden).

## Beschreibung

Die `bind()` Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umhüllt, welche auch als _Ziel-Funktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter - die den Wert von `this` und die ersten Argumente umfassen - als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt zur Aufrufzeit übergeben zu werden. Im Allgemeinen können Sie `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` für die Wirkung beim Aufruf sehen (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* more args */)` aufgerufen wird, wodurch eine weitere gebundene Funktion `boundFn2` erstellt wird. Der neu gebundene `thisArg` Wert wird ignoriert, da die Ziel-Funktion von `boundFn2`, die `boundFn` ist, bereits einen gebundenen `this` hat. Wenn `boundFn2` aufgerufen wird, würde es `boundFn` aufrufen, das wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die von `boundFn` gebundenen Argumente, die von `boundFn2` gebundenen Argumente und die von `boundFn2` empfangenen Argumente.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch unter Verwendung des {{jsxref("Operators/new", "new")}} Operators konstruiert werden, wenn ihre Ziel-Funktion konstruierbar ist. Dies wirkt so, als wäre die Ziel-Funktion stattdessen konstruiert worden. Die vorangestellten Argumente werden wie gewohnt an die Ziel-Funktion übergeben, während der bereitgestellte `this` Wert ignoriert wird (weil die Erstellung ihr eigenes `this` vorbereitet, wie anhand der Parameter von {{jsxref("Reflect.construct")}} erkennbar ist). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Ziel-Funktion sein. (Das bedeutet, dass die gebundene Funktion für `new.target` transparent ist.)

```js
class Base {
  constructor(...args) {
    console.log(new.target === Base);
    console.log(args);
  }
}

const BoundBase = Base.bind(null, 1, 2);

new BoundBase(3, 4); // true, [1, 2, 3, 4]
```

Da eine gebundene Funktion jedoch nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft hat, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, greift `instanceof` auf die Ziel-Funktion (die intern in der gebundenen Funktion gespeichert ist) zu und liest stattdessen deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Ziel-Funktion minus der Anzahl der gebundenen Argumente (nicht einschließlich des `thisArg` Parameters), wobei 0 der Minimalwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Ziel-Funktion plus einem `"bound "` Präfix.

Die gebundene Funktion erbt auch die [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Ziel-Funktion. Sie hat jedoch keine anderen eigenen Eigenschaften der Ziel-Funktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Ziel-Funktion eine Klasse ist).

## Beispiele

### Erstellung einer gebundenen Funktion

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, mit einem bestimmten `this` Wert aufgerufen wird.

Ein häufiger Fehler von neuen JavaScript-Programmierern ist es, eine Methode aus einem Objekt zu extrahieren und dann die Funktion später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als `this` verwendet (z.B. durch die Verwendung der Methode in einem Rückruf-basierten Code).

Ohne besondere Sorgfalt geht jedoch in der Regel das ursprüngliche Objekt verloren. Durch die Erstellung einer gebundenen Funktion aus der Funktion mit dem ursprünglichen Objekt wird dieses Problem elegant gelöst:

```js
// Top-level 'this' is bound to 'globalThis' in scripts.
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// The 'this' parameter of 'getX' is bound to 'module'.
console.log(module.getX()); // 81

const retrieveX = module.getX;
// The 'this' parameter of 'retrieveX' is bound to 'globalThis' in non-strict mode.
console.log(retrieveX()); // 9

// Create a new function 'boundGetX' with the 'this' parameter bound to 'module'.
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
```

> [!NOTE]
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this` Parameter von `retrieveX` an `undefined` gebunden anstelle von `globalThis`, wodurch der `retrieveX()` Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das oberste `this` an `undefined` gebunden anstelle von `globalThis`, was die Zuweisung `this.x = 9` fehlschlagen lässt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das oberste `this` an `module.exports` gebunden anstelle von `globalThis`. Der `this` Parameter von `retrieveX` wird jedoch immer noch an `globalThis` im Nicht-Strict-Modus und an `undefined` im Strict-Modus gebunden. Daher wird im Nicht-Strict-Modus (dem Standard) der `retrieveX()` Aufruf `undefined` zurückgeben, weil `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt, als von dem `getX` liest (`globalThis`).

In der Tat sind einige eingebaute "Methoden" ebenfalls Getter, die gebundene Funktionen zurückgeben - ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das, wenn es aufgerufen wird, eine gebundene Funktion zurückgibt, die Sie direkt als Rückruf übergeben können.

### Teilweise angewandte Funktionen

Eine weitere Verwendung von `bind()` besteht darin, eine Funktion mit vorher festgelegten initialen Argumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this` Wert und werden dann am Anfang der an die Ziel-Funktion übergebenen Argumente eingefügt, gefolgt von den Argumenten, die der gebundenen Funktion zum Zeitpunkt ihres Aufrufs übergeben werden.

```js
function list(...args) {
  return args;
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

console.log(list(1, 2, 3)); // [1, 2, 3]

console.log(addArguments(1, 2)); // 3

// Create a function with a preset leading argument
const leadingThirtySevenList = list.bind(null, 37);

// Create a function with a preset first argument.
const addThirtySeven = addArguments.bind(null, 37);

console.log(leadingThirtySevenList()); // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
console.log(addThirtySeven(5)); // 42
console.log(addThirtySeven(5, 10)); // 42
// (the last argument 10 is ignored)
```

### Mit setTimeout()

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this` Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, was in Browsern [`window`](/de/docs/Web/API/Window) entspricht. Wenn Sie mit Klassenmethoden arbeiten, die erfordern, dass `this` auf Klasseninstanzen verweist, können Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

```js
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(this.declare.bind(this), 1000);
  }
  declare() {
    console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
  }
}

const flower = new LateBloomer();
flower.bloom();
// After 1 second, calls 'flower.declare()'
```

Sie können auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) zu diesem Zweck verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwenden

Gebundene Funktionen sind automatisch für die Verwendung mit dem {{jsxref("Operators/new", "new")}} Operator geeignet, um neue Instanzen zu erstellen, die von der Ziel-Funktion erzeugt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch weiterhin dem Konstruktoraufruf vorangestellt.

```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return `${this.x},${this.y}`;
};

const p = new Point(1, 2);
p.toString();
// '1,2'

// The thisArg's value doesn't matter because it's ignored
const YAxisPoint = Point.bind(null, 0 /* x */);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren alle wie erwartet, als ob der Konstruktor nie gebunden worden wäre. Der einzige Unterschied besteht darin, dass es nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Das bedeutet im Umkehrschluss, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen wird, selbst wenn Sie lieber möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen wird. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie möchten, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann oder nur ohne `new` aufgerufen werden kann, muss die Ziel-Funktion diese Einschränkung durchsetzen, zum Beispiel indem `new.target !== undefined` überprüft wird oder eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) verwendet wird.

### Klassen binden

Die Verwendung von `bind()` bei Klassen bewahrt die meisten Semantiken der Klasse, außer dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototypenkette erhalten bleibt, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der Elternklasse geerbt werden.

```js
class Base {
  static baseProp = "base";
}

class Derived extends Base {
  static derivedProp = "derived";
}

const BoundDerived = Derived.bind(null);
console.log(BoundDerived.baseProp); // "base"
console.log(BoundDerived.derivedProp); // undefined
console.log(new BoundDerived() instanceof Derived); // true
```

### Methoden in Dienstprogramme transformieren

`bind()` ist auch hilfreich in Fällen, in denen Sie eine Methode, die einen bestimmten `this` Wert erfordert, in eine einfache Dienstfunktion transformieren möchten, die den vorherigen `this` Parameter als normalen Parameter akzeptiert. Das ist ähnlich wie bei allgemeinen Dienstfunktionen: anstelle von `array.map(callback)` verwenden Sie `map(array, callback)`, was es ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}}, zum Beispiel, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, weil die `call()` Methode auch ihren `this` Wert liest, welcher die Funktion ist, die sie aufrufen sollte. In diesem Fall können Sie `bind()` verwenden, um den `this` Wert für `call()` zu binden. Im folgenden Codebeispiel ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem `this` Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Das bedeutet, dass zusätzliche `call()` Aufrufe ausgeschlossen werden können:

```js
// Same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// …

slice(arguments);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Function.prototype.bind` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
