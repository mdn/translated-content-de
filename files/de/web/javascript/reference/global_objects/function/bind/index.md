---
title: Function.prototype.bind()
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`bind()`** Methode von {{jsxref("Function")}} Instanzen erstellt eine neue Funktion, die, wenn sie aufgerufen wird, diese Funktion mit ihrem `this`-Schlüsselwort auf den bereitgestellten Wert setzt und eine gegebene Sequenz von Argumenten als Vorsatz der neuen Funktion aufruft.

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
  - : Der Wert, der als `this`-Parameter an die Ziel-Funktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, die der gebundenen Funktion beim Aufruf von `func` übergeben werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem spezifizierten `this`-Wert und den anfänglichen Argumenten (falls angegeben).

## Beschreibung

Die `bind()` Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umschließt, die auch als _Ziel-Funktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter — die den Wert von `this` und die ersten wenigen Argumente beinhalten — als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt zur Aufrufzeit übergeben zu werden. Sie können allgemein `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` für den Effekt beim Aufruf sehen (jedoch nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* weitere Argumente */)` aufgerufen wird, wodurch eine weitere gebundene Funktion `boundFn2` erstellt wird. Der neu gebundene `thisArg`-Wert wird ignoriert, da die Ziel-Funktion von `boundFn2`, die `boundFn` ist, bereits eine gebundene `this` hat. Wenn `boundFn2` aufgerufen wird, würde es `boundFn` aufrufen, das wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die Argumente, die von `boundFn` gebunden werden, die Argumente, die von `boundFn2` gebunden werden, und die Argumente, die von `boundFn2` empfangen werden.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert werden, wenn ihre Ziel-Funktion konstruierbar ist. Das tut so, als ob die Ziel-Funktion stattdessen konstruiert wurde. Die vorgesetzten Argumente werden der Ziel-Funktion wie üblich übergeben, während der bereitgestellte `this`-Wert ignoriert wird (weil die Konstruktion ihren eigenen `this` vorbereitet, wie durch die Parameter von {{jsxref("Reflect.construct")}} ersichtlich). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Ziel-Funktion sein. (Das heißt, die gebundene Funktion ist transparent für `new.target`.)

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

Da eine gebundene Funktion allerdings nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft hat, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, würde `instanceof` auf die Ziel-Funktion (die intern in der gebundenen Funktion gespeichert ist) zugreifen und deren `prototype` lesen.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat folgende Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Ziel-Funktion minus der Anzahl der Argumente, die gebunden werden (wobei der `thisArg`-Parameter nicht gezählt wird), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Ziel-Funktion plus ein `"bound "` Präfix.

Die gebundene Funktion erbt zudem die [Prototyp-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Ziel-Funktion. Sie hat jedoch nicht andere eigene Eigenschaften der Ziel-Funktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Ziel-Funktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die, unabhängig davon, wie sie aufgerufen wird, mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler neuer JavaScript-Programmierer besteht darin, eine Methode aus einem Objekt zu extrahieren, und dann erwarten, dass diese Funktion das ursprüngliche Objekt als ihren `this` verwendet (z.B. durch Verwendung der Methode in callback-basiertem Code).

Ohne besondere Vorsichtsmaßnahmen geht das ursprüngliche Objekt jedoch in der Regel verloren. Das Erstellen einer gebundenen Funktion aus der Funktion, mit dem ursprünglichen Objekt, löst dieses Problem auf elegante Weise:

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
> Wenn Sie dieses Beispiel im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` an `undefined` statt an `globalThis` gebunden, wodurch der `retrieveX()`-Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das top-level `this` an `undefined` statt an `globalThis` gebunden, wodurch die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das top-level `this` an `module.exports` statt an `globalThis` gebunden. Der `this`-Parameter von `retrieveX` wird jedoch weiterhin an `globalThis` im Nicht-strict-Modus und an `undefined` im strict mode gebunden. Daher gibt der `retrieveX()`-Aufruf im Nicht-strict-Modus (dem Standardmodus) `undefined` zurück, da `this.x = 9` an ein anderes Objekt (`module.exports`) schreibt, von dem `getX` liest (`globalThis`).

Tatsächlich sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben — ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das beim Zugriff eine gebundene Funktion zurückgibt, die Sie direkt als Rückruffunktion übergeben können.

### Teilweise angewandte Funktionen

Ein weiterer Anwendungsfall von `bind()` ist es, eine Funktion mit vorgegebenen anfänglichen Argumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann am Anfang der Argumente eingefügt, die der Ziel-Funktion übergeben werden, gefolgt von beliebigen Argumenten, die der gebundenen Funktion zum Zeitpunkt ihres Aufrufs übergeben werden.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this`-Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, das in Browsern [`window`](/de/docs/Web/API/Window) ist. Wenn Sie mit Klassenmethoden arbeiten, die `this` benötigen, um sich auf Klasseninstanzen zu beziehen, können Sie `this` explizit an die Callback-Funktion binden, um die Instanz beizubehalten.

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

Sie können für diesen Zweck auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwenden

Gebundene Funktionen sind automatisch geeignet, mit dem {{jsxref("Operators/new", "new")}} Operator verwendet zu werden, um neue Instanzen zu erstellen, die von der Ziel-Funktion erzeugt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird der bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch weiterhin dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zur Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) etc. funktionieren alle wie erwartet, als ob der Konstruktor nie gebunden wäre. Der einzige Unterschied ist, dass sie nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Die Konsequenz davon ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen werden soll, selbst wenn Sie eher möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden sollte. Wenn Sie sie ohne `new` aufrufen, wird der gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie wünschen, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann, oder nur ohne `new` aufgerufen werden kann, muss die Ziel-Funktion diese Einschränkung erzwingen, z.B. durch Überprüfung auf `new.target !== undefined` oder durch Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Binden von Klassen

Die Verwendung von `bind()` bei Klassen bewahrt die meisten Semantiken der Klasse, außer dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototyp-Kette beibehalten wird, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der Elternklasse geerbt wurden.

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

### Umwandeln von Methoden in Dienstprogrammfunktionen

`bind()` ist auch in Fällen hilfreich, in denen Sie eine Methode, die einen bestimmten `this`-Wert benötigt, in eine einfache Dienstprogrammfunktion umwandeln möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Dienstprogrammfunktionen: Anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was es Ihnen ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}} zum Beispiel, die Sie verwenden möchten, um ein Array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Verknüpfung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()` Methode auch ihren eigenen `this`-Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem `this`-Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Das bedeutet, dass zusätzliche `call()` Aufrufe eliminiert werden können:

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

- [Polyfill für `Function.prototype.bind` in `core-js`](https://github.com/zloirock/core-js#ecmascript-function)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Functions", "Funktionen", "", 1)}}
