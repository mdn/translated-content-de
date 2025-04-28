---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{JSRef}}

Die **`bind()`** Methode von {{jsxref("Function")}} Instanzen erstellt eine neue Funktion, die bei Aufruf diese Funktion mit ihrem `this` Schlüsselwort, das auf den bereitgestellten Wert gesetzt ist, aufruft, und eine gegebene Sequenz von Argumenten vor jeden bereitgestellten, wenn die neue Funktion aufgerufen wird.

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
  - : Der Wert, der als `this` Parameter an die Zielfunktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Befindet sich die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die an Argumente angehängt werden, die an die gebundene Funktion beim Aufrufen von `func` übergeben werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem angegebenen `this` Wert und den anfänglichen Argumenten (falls bereitgestellt).

## Beschreibung

Die `bind()` Funktion erstellt eine neue _gebundene Funktion_. Das Aufrufen der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umhüllt, die auch _Zielfunktion_ genannt wird. Die gebundene Funktion speichert die übergebenen Parameter — dazu gehören der Wert von `this` und die ersten Argumente — als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt sie zur Aufrufzeit zu übergeben. Im Allgemeinen können Sie `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` für die Wirkung betrachten, wenn sie aufgerufen wird (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* weitere Argumente */)` aufgerufen wird, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, weil die Zielfunktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, würde es `boundFn` aufrufen, das wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die Argumente, die von `boundFn` gebunden wurden, die Argumente, die von `boundFn2` gebunden wurden, und die Argumente, die von `boundFn2` empfangen wurden.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert werden, wenn ihre Zielfunktion konstruiert werden kann. Dies wirkt so, als wäre die Zielfunktion stattdessen konstruiert worden. Die angehängten Argumente werden wie gewöhnlich an die Zielfunktion übergeben, während der bereitgestellte `this`-Wert ignoriert wird (weil die Konstruktion ihr eigenes `this` vorbereitet, wie durch die Parameter von {{jsxref("Reflect.construct")}} sichtbar wird). Wenn die gebundene Funktion direkt konstruiert wird, ist [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Zielfunktion. (Das heißt, die gebundene Funktion ist transparent zu `new.target`.)

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

Allerdings kann eine gebundene Funktion nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden, weil sie die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft nicht hat.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, greift `instanceof` auf die Zielfunktion (die intern in der gebundenen Funktion gespeichert ist) zu und liest deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Zielfunktion minus der Anzahl der gebundenen Argumente (ausgenommen das `thisArg` Parameter), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Zielfunktion plus ein `"bound "` Präfix.

Die gebundene Funktion erbt auch die [Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Zielfunktion. Sie hat jedoch keine anderen eigenen Eigenschaften der Zielfunktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Zielfunktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die häufigste Verwendung von `bind()` ist die Erstellung einer Funktion, die, egal wie sie aufgerufen wird, mit einem bestimmten `this` Wert aufgerufen wird.

Ein häufiger Fehler neuer JavaScript-Programmierer ist es, eine Methode aus einem Objekt zu extrahieren, um diese Funktion später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als ihr `this` verwendet (z.B. durch die Verwendung der Methode in Callback-basierter Code).

Ohne besondere Vorsicht geht das ursprüngliche Objekt jedoch meist verloren. Die Erstellung einer gebundenen Funktion aus der Funktion, unter Verwendung des ursprünglichen Objekts, löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this` Parameter von `retrieveX` an `undefined` statt an `globalThis` gebunden, was dazu führt, dass der `retrieveX()` Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das oberste `this` an `undefined` statt an `globalThis` gebunden, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das oberste `this` an `module.exports` statt an `globalThis` gebunden. Der `this` Parameter von `retrieveX` wird jedoch im nicht-strikten Modus immer noch an `globalThis` gebunden und im strikten Modus an `undefined`. Daher wird im nicht-strikten Modus (dem Standard) der `retrieveX()` Aufruf `undefined` zurückgeben, weil `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt, als von dem `getX` liest (`globalThis`).

Tatsächlich sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben — ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das, wenn es aufgerufen wird, eine gebundene Funktion zurückgibt, die Sie direkt als Callback übergeben können.

### Partiell angewendete Funktionen

Eine weitere Verwendung von `bind()` ist die Erstellung einer Funktion mit vorgegebenen Anfangsargumenten.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this` Wert und werden dann am Anfang der an die Zielfunktion übergebenen Argumente eingefügt, gefolgt von den Argumenten, die zu dem Zeitpunkt an die gebundene Funktion übergeben werden, wenn diese aufgerufen wird.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this` Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, das im Browser [`window`](/de/docs/Web/API/Window) ist. Wenn man mit Klassenmethoden arbeitet, die erfordern, dass `this` sich auf Klasseninstanzen bezieht, können Sie explizit `this` an die Callback-Funktion binden, um die Instanz beizubehalten.

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

Sie können hierfür auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwenden

Gebundene Funktionen sind automatisch geeignet für den Gebrauch mit dem {{jsxref("Operators/new", "new")}} Operator, um neue Instanzen zu erstellen, die von der Zielfunktion erzeugt wurden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch weiterhin dem Konstruktoraufruf vorangestellt.

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
const YAxisPoint = Point.bind(null, 0 /*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zur Nutzung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) etc. funktionieren alle wie erwartet, als ob der Konstruktor niemals gebunden wurde. Der einzige Unterschied ist, dass sie nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Die Konsequenz ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen wird, selbst wenn Sie lieber möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht mehr ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie möchten, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann, oder nur ohne `new` aufgerufen werden kann, muss die Zielfunktion diese Einschränkung erzwingen, z.B. indem sie `new.target !== undefined` prüft oder eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) verwendet.

### Klassen binden

Die Verwendung von `bind()` auf Klassen bewahrt den größten Teil der Semantik der Klasse, mit der Ausnahme, dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototype-Kette erhalten bleibt, können Sie weiterhin auf statische Eigenschaften, die von der Elternklasse geerbt wurden, zugreifen.

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

### Methoden in Dienstprogrammfunktionen umwandeln

`bind()` ist auch hilfreich in Fällen, wo Sie eine Methode, die einen spezifischen `this`-Wert benötigt, in eine einfache Dienstprogrammfunktion umwandeln möchten, die den vorherigen `this` Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Dienstprogrammfunktionen: anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was es Ihnen ermöglicht, `map` mit Array-ähnlichen Objekten, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), zu verwenden, ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}}, zum Beispiel, das Sie für die Umwandlung eines array-ähnlichen Objekts in ein echtes Array verwenden möchten. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, weil die `call()` Methode ihren `this` Wert liest, der die Funktion ist, die sie aufrufen sollte. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Codebeispiel ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, wobei der `this` Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dies bedeutet, dass zusätzliche `call()` Aufrufe eliminiert werden können:

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
