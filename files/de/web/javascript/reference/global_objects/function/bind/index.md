---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`bind()`**-Methode von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion, die, wenn sie aufgerufen wird, diese Funktion mit ihrem `this`-Schlüsselwort auf den bereitgestellten Wert setzt und eine gegebene Sequenz von Argumenten voranstellt, die beim Aufruf der neuen Funktion bereitgestellt werden.

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
  - : Der Wert, der als `this`-Parameter an die Zielfunktion `func` übergeben werden soll, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den an die gebundene Funktion bereitgestellten Argumenten vorangestellt werden, wenn `func` aufgerufen wird.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem spezifizierten `this`-Wert und anfänglichen Argumenten (falls bereitgestellt).

## Beschreibung

Die `bind()`-Funktion erstellt eine neue _gebundene Funktion_. Das Aufrufen der gebundenen Funktion führt in der Regel zur Ausführung der umhüllten Funktion, die auch als _Zielfunktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter – darunter den Wert von `this` und die ersten Argumente – als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt sie bei der Aufrufzeit zu übergeben. Man kann `const boundFn = fn.bind(thisArg, arg1, arg2)` im Allgemeinen als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` für die Wirkung sehen, wenn sie aufgerufen wird (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* more args */)` aufgerufen wird, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, da die Zielfunktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, würde sie `boundFn` aufrufen, die dann `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind der Reihenfolge nach: die von `boundFn` gebundenen Argumente, die von `boundFn2` gebundenen Argumente und die von `boundFn2` empfangenen Argumente.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden, wenn ihre Zielfunktion konstruierbar ist. Dies wirkt, als wäre stattdessen die Zielfunktion konstruiert worden. Die vorangestellten Argumente werden wie üblich an die Zielfunktion übergeben, während der bereitgestellte `this`-Wert ignoriert wird (da die Konstruktion ihr eigenes `this` vorbereitet, wie bei den Parametern von {{jsxref("Reflect.construct")}} zu sehen). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Zielfunktion sein. (Das heißt, die gebundene Funktion ist für `new.target` transparent.)

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

Da jedoch eine gebundene Funktion nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft besitzt, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Beim Verwenden einer gebundenen Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) würde `instanceof` auf die Zielfunktion (die intern in der gebundenen Funktion gespeichert ist) zugreifen und deren `prototype` lesen.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Zielfunktion minus die Anzahl der gebundenen Argumente (wobei der `thisArg`-Parameter nicht mitgezählt wird), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Zielfunktion plus ein `"bound "`-Präfix.

Die gebundene Funktion erbt auch die [Prototypkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Zielfunktion. Sie besitzt jedoch nicht andere eigene Eigenschaften der Zielfunktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), falls die Zielfunktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler bei neuen JavaScript-Programmierern besteht darin, eine Methode aus einem Objekt zu extrahieren, dann diese Funktion später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als `this` verwendet (z.B. indem sie die Methode in Callback-basiertem Code verwenden).

Ohne besondere Vorsichtsmaßnahmen geht das ursprüngliche Objekt jedoch normalerweise verloren. Das Erstellen einer gebundenen Funktion aus der Funktion mit dem ursprünglichen Objekt löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` an `undefined` gebunden statt an `globalThis`, was dazu führt, dass der `retrieveX()`-Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das top-level `this` an `undefined` gebunden statt an `globalThis`, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das top-level `this` an `module.exports` gebunden statt an `globalThis`. Der `this`-Parameter von `retrieveX` wird jedoch im Nicht-Strict-Modus weiterhin an `globalThis` gebunden und im Strict-Modus an `undefined`. Daher gibt der `retrieveX()`-Aufruf im Nicht-Strict-Modus (dem Standard) `undefined` zurück, weil `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt, als `getX` davon liest (`globalThis`).

Tatsächlich sind einige eingebaute "Methoden" auch Getters, die gebundene Funktionen zurückgeben – ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), die, wenn sie aufgerufen wird, eine gebundene Funktion zurückgibt, die Sie direkt als Callback übergeben können.

### Teilweise angewandte Funktionen

Eine weitere Verwendung von `bind()` besteht darin, eine Funktion mit vordefinierten Anfangsargumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann zu Beginn der an die Zielfunktion übergebenen Argumente eingefügt, gefolgt von beliebigen Argumenten, die zur Laufzeit der gebundenen Funktion übergeben werden.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this`-Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, was in Browsern [`window`](/de/docs/Web/API/Window) ist. Wenn Sie mit Klassenmethoden arbeiten, die `this` erfordern, um auf Klasseninstanzen zu verweisen, können Sie `this` explizit an die Callback-Funktion binden, um die Instanz beizubehalten.

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

Sie können auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für diesen Zweck verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwendet

Gebundene Funktionen eignen sich automatisch für die Verwendung mit dem {{jsxref("Operators/new", "new")}}-Operator, um neue Instanzen zu erstellen, die von der Zielfunktion erzeugt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Trotzdem werden bereitgestellte Argumente weiterhin dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren alle wie erwartet, als ob der Konstruktor nie gebunden wurde. Der einzige Unterschied besteht darin, dass sie nicht länger für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden können.

Das Resultat ist, dass man nichts Besonderes tun muss, um eine gebundene Funktion zu erstellen, die einfach aufgerufen werden soll, auch wenn man lieber hätte, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie wünschen, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann, oder nur ohne `new` aufgerufen werden kann, muss die Zielfunktion diese Einschränkung erzwingen, zum Beispiel durch Prüfen von `new.target !== undefined` oder durch die Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Binding von Klassen

Die Verwendung von `bind()` auf Klassen bewahrt die meisten Semantiken der Klasse, mit Ausnahme, dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototypkette erhalten bleibt, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der Elternklasse geerbt wurden.

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

### Methoden zu Hilfsfunktionen transformieren

`bind()` ist auch hilfreich in Fällen, in denen Sie eine Methode, die einen spezifischen `this`-Wert benötigt, in eine einfache Hilfsfunktion transformieren möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ähnelt der Arbeitsweise von universellen Hilfsfunktionen: Anstatt `array.map(callback)` zu rufen, verwenden Sie `map(array, callback)`, was es Ihnen ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und sie als einfache Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem `this`-Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Das bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

```js
// Same as "slice" in the previous example
const unboundSlice = Array.prototype.slice;
const slice = Function.prototype.call.bind(unboundSlice);

// ...

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
