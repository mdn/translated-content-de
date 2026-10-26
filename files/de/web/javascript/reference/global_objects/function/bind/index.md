---
title: Function.prototype.bind()
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`bind()`** von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion. Wird diese aufgerufen, ruft sie die ursprüngliche Funktion auf, wobei deren `this`-Wert auf den angegebenen Wert gesetzt ist. Außerdem werden die beim Binden angegebenen Argumente den Argumenten vorangestellt, die beim Aufruf der neuen Funktion übergeben werden.

{{InteractiveExample("JavaScript Demo: Function.prototype.bind()", "taller")}}

```js interactive-example
const module = {
  x: 42,
  getX() {
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
  - : Der Wert, der beim Aufruf der gebundenen Funktion als `this`-Parameter an die Zielfunktion `func` übergeben wird. Befindet sich die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem Operator {{jsxref("new")}} konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die beim Aufruf von `func` den an die gebundene Funktion übergebenen Argumenten vorangestellt werden.

### Rückgabewert

Eine Kopie der angegebenen Funktion mit dem festgelegten `this`-Wert und gegebenenfalls vorangestellten Argumenten.

## Beschreibung

Die Funktion `bind()` erstellt eine neue _gebundene Funktion_. Ein Aufruf der gebundenen Funktion führt im Allgemeinen die Funktion aus, die sie umschließt. Diese wird auch als _Zielfunktion_ bezeichnet. Die gebundene Funktion speichert die übergebenen Parameter – darunter den Wert von `this` und die ersten Argumente – als internen Zustand. Diese Werte werden im Voraus gespeichert, statt erst beim Aufruf übergeben zu werden. Hinsichtlich der Wirkung beim Aufruf können Sie `const boundFn = fn.bind(thisArg, arg1, arg2)` im Allgemeinen als gleichwertig mit `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` betrachten. Das gilt jedoch nicht, wenn `boundFn` konstruiert wird.

Eine gebundene Funktion kann durch einen Aufruf von `boundFn.bind(thisArg, /* more args */)` erneut gebunden werden. Dadurch entsteht eine weitere gebundene Funktion namens `boundFn2`. Der neu angegebene Wert für `thisArg` wird ignoriert, da die Zielfunktion von `boundFn2` – also `boundFn` – bereits ein gebundenes `this` besitzt. Beim Aufruf von `boundFn2` wird `boundFn` aufgerufen, das wiederum `fn` aufruft. `fn` erhält die Argumente in folgender Reihenfolge: zuerst die durch `boundFn` gebundenen Argumente, dann die durch `boundFn2` gebundenen Argumente und schließlich die an `boundFn2` übergebenen Argumente.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem Operator {{jsxref("new")}} konstruiert werden, sofern ihre Zielfunktion konstruierbar ist. Das wirkt so, als wäre stattdessen die Zielfunktion konstruiert worden. Die vorangestellten Argumente werden wie gewohnt an die Zielfunktion übergeben, während der angegebene `this`-Wert ignoriert wird. Bei der Konstruktion wird nämlich ein eigener `this`-Wert erzeugt, wie an den Parametern von {{jsxref("Reflect.construct")}} zu sehen ist. Wird die gebundene Funktion direkt konstruiert, verweist [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) stattdessen auf die Zielfunktion. Die gebundene Funktion ist für `new.target` also transparent.

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

Da eine gebundene Funktion jedoch keine [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft besitzt, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wird eine gebundene Funktion auf der rechten Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet, greift `instanceof` auf die intern in der gebundenen Funktion gespeicherte Zielfunktion zu und liest stattdessen deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Der Wert von `length` der Zielfunktion abzüglich der Anzahl der gebundenen Argumente (ohne den Parameter `thisArg`), mindestens jedoch 0.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der Wert von `name` der Zielfunktion mit dem Präfix `"bound "`.

Die gebundene Funktion erbt außerdem die [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Zielfunktion. Andere eigene Eigenschaften der Zielfunktion besitzt sie jedoch nicht. Dazu gehören beispielsweise [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Zielfunktion eine Klasse ist.

## Beispiele

### Eine gebundene Funktion erstellen

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die unabhängig von der Art ihres Aufrufs mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler von JavaScript-Einsteigern besteht darin, eine Methode aus einem Objekt herauszulösen und die Funktion später aufzurufen, in der Erwartung, dass sie das ursprüngliche Objekt als `this` verwendet – etwa wenn die Methode in Code mit Callbacks verwendet wird.

Ohne besondere Vorkehrungen geht der Bezug zum ursprünglichen Objekt jedoch meist verloren. Dieses Problem lässt sich lösen, indem Sie aus der Funktion eine gebundene Funktion erstellen und dabei das ursprüngliche Objekt angeben:

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
> Wenn Sie dieses Beispiel im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` an `undefined` statt an `globalThis` gebunden. Dadurch schlägt der Aufruf von `retrieveX()` fehl.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, ist `this` auf oberster Ebene an `undefined` statt an `globalThis` gebunden. Dadurch schlägt die Zuweisung `this.x = 9` fehl.
>
> Wenn Sie dieses Beispiel in einem Node-CommonJS-Modul ausführen, ist `this` auf oberster Ebene an `module.exports` statt an `globalThis` gebunden. Der `this`-Parameter von `retrieveX` ist jedoch außerhalb des Strict Mode weiterhin an `globalThis` gebunden und im Strict Mode an `undefined`. Außerhalb des Strict Mode – der Standardeinstellung – gibt der Aufruf von `retrieveX()` daher `undefined` zurück: `this.x = 9` schreibt in ein anderes Objekt (`module.exports`) als das, aus dem `getX` liest (`globalThis`).

Tatsächlich sind einige integrierte „Methoden“ zugleich Getter, die gebundene Funktionen zurückgeben. Ein bekanntes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map): Beim Zugriff darauf erhalten Sie eine gebundene Funktion, die Sie direkt als Callback übergeben können.

### Teilweise angewendete Funktionen

Eine weitere Verwendung von `bind()` besteht darin, eine Funktion mit vorab festgelegten Anfangsargumenten zu erstellen.

Diese Argumente folgen, sofern vorhanden, auf den angegebenen `this`-Wert. Sie werden den Argumenten vorangestellt, die beim Aufruf an die gebundene Funktion übergeben werden.

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

Innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) ist `this` standardmäßig auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, in Browsern also auf [`window`](/de/docs/Web/API/Window). Wenn Sie mit Klassenmethoden arbeiten, deren `this` auf eine Klasseninstanz verweisen muss, können Sie `this` ausdrücklich an die Callback-Funktion binden, damit der Bezug zur Instanz erhalten bleibt.

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

Sie können zu diesem Zweck auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwenden

Gebundene Funktionen können mit dem Operator {{jsxref("new")}} verwendet werden, um neue Instanzen durch die Zielfunktion zu erzeugen. Wird eine gebundene Funktion zum Konstruieren eines Werts verwendet, wird der angegebene `this`-Wert ignoriert. Die angegebenen Argumente werden dem Konstruktoraufruf jedoch weiterhin vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren wie erwartet, als wäre der Konstruktor nie gebunden worden. Der einzige Unterschied besteht darin, dass er nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Umgekehrt müssen Sie auch nichts Besonderes tun, um eine gebundene Funktion für einen gewöhnlichen Aufruf zu erstellen – selbst wenn Sie eigentlich verlangen möchten, dass sie nur mit {{jsxref("new")}} aufgerufen wird. Rufen Sie sie ohne `new` auf, wird der gebundene `this`-Wert nicht mehr ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie eine gebundene Funktion so einschränken möchten, dass sie nur mit {{jsxref("new")}} oder nur ohne `new` aufgerufen werden kann, muss die Zielfunktion diese Einschränkung selbst durchsetzen. Dazu kann sie beispielsweise `new.target !== undefined` prüfen oder als [Klasse](/de/docs/Web/JavaScript/Reference/Classes) definiert sein.

### Klassen binden

Die Verwendung von `bind()` mit Klassen erhält den Großteil ihrer Semantik. Allerdings gehen alle eigenen statischen Eigenschaften der betreffenden Klasse verloren. Da die Prototypenkette erhalten bleibt, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der übergeordneten Klasse geerbt wurden.

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

### Methoden in Hilfsfunktionen umwandeln

`bind()` ist auch nützlich, wenn Sie eine Methode, die einen bestimmten `this`-Wert benötigt, in eine gewöhnliche Hilfsfunktion umwandeln möchten. Diese nimmt den bisherigen `this`-Wert als regulären Parameter entgegen. Das entspricht der Funktionsweise allgemeiner Hilfsfunktionen: Statt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`. So können Sie `map` auch mit Array-ähnlichen Objekten verwenden, die keine Arrays sind – beispielsweise mit [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments) –, ohne `Object.prototype` zu verändern.

Nehmen Sie beispielsweise {{jsxref("Array.prototype.slice()")}}, das Sie verwenden möchten, um ein Array-ähnliches Objekt in ein echtes Array umzuwandeln. Dafür könnten Sie die folgende Kurzform erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als gewöhnliche Funktion aufrufen können. Die Methode `call()` liest nämlich ebenfalls ihren `this`-Wert; dieser muss die Funktion sein, die sie aufrufen soll. In diesem Fall können Sie mit `bind()` den `this`-Wert für `call()` binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, deren `this`-Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dadurch sind keine zusätzlichen Aufrufe von `call()` nötig:

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

- [Polyfill für `Function.prototype.bind` in `core-js`](https://core-js.io/docs/features/ecmascript/function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Functions", "", 1)}}
