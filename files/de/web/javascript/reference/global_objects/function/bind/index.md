---
title: Function.prototype.bind()
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`bind()`**-Methode von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion, die, wenn sie aufgerufen wird, diese Funktion mit ihrem `this`-Schlüsselwort auf den angegebenen Wert gesetzt aufruft, und eine gegebene Sequenz von Argumenten vor denjenigen bereitstellt, die beim Aufruf der neuen Funktion bereitgestellt werden.

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
  - : Der Wert, der als `this`-Parameter an die Ziel-Funktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, die bei der Ausführung von `func` an die gebundene Funktion übergeben werden.

### Rückgabewert

Eine Kopie der angegebenen Funktion mit dem spezifizierten `this`-Wert und anfänglichen Argumenten (falls vorhanden).

## Beschreibung

Die `bind()`-Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umschließt, welche auch die _Ziel-Funktion_ genannt wird. Die gebundene Funktion speichert die übergebenen Parameter – die den Wert von `this` und die ersten Argumente enthalten – als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt zur Aufrufzeit übergeben zu werden. Sie können im Allgemeinen `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` für die Wirkung beim Aufruf sehen (aber nicht beim Konstruieren von `boundFn`).

Eine gebundene Funktion kann durch Aufruf von `boundFn.bind(thisArg, /* weitere args */)` weiter gebunden werden, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, da die Ziel-Funktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, ruft es `boundFn` auf, was wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die von `boundFn` gebundenen Argumente, die von `boundFn2` gebundenen Argumente und die von `boundFn2` empfangenen Argumente.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden, wenn ihre Ziel-Funktion konstruierbar ist. Dies wirkt so, als ob die Ziel-Funktion stattdessen konstruiert worden wäre. Die vorangestellten Argumente werden wie üblich an die Ziel-Funktion übergeben, während der bereitgestellte `this`-Wert ignoriert wird (da Konstruktion ihr eigenes `this` vorbereitet, wie bei den Parametern von {{jsxref("Reflect.construct")}} sichtbar). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Ziel-Funktion anstatt. (Das heißt, die gebundene Funktion ist für `new.target` transparent.)

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

Da eine gebundene Funktion jedoch nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft hat, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, würde `instanceof` nach der Ziel-Funktion (die intern in der gebundenen Funktion gespeichert ist) greifen und ihren `prototype` lesen.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Der `length` der Ziel-Funktion minus die Anzahl der gebundenen Argumente (ohne den `thisArg`-Parameter zu zählen), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Ziel-Funktion plus ein `"bound "`-Präfix.

Die gebundene Funktion erbt auch die [Prototype-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Ziel-Funktion. Sie hat jedoch keine anderen eigenen Eigenschaften der Ziel-Funktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Ziel-Funktion eine Klasse ist).

## Beispiele

### Eine gebundene Funktion erstellen

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler für neue JavaScript-Programmierer ist es, eine Methode aus einem Objekt zu extrahieren, dann diese Funktion später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als ihr `this` verwendet (z.B. durch Verwendung der Methode in rückrufbasierter Code).

Ohne besondere Vorsichtsmaßnahmen geht jedoch das ursprüngliche Objekt normalerweise verloren. Durch das Erstellen einer gebundenen Funktion aus der Funktion unter Verwendung des ursprünglichen Objekts kann dieses Problem elegant gelöst werden:

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
> Wenn Sie dieses Beispiel im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` auf `undefined` gebunden anstatt auf `globalThis`, was dazu führt, dass der Aufruf von `retrieveX()` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das oberste `this` auf `undefined` gebunden anstatt auf `globalThis`, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das oberste `this` auf `module.exports` gebunden anstatt auf `globalThis`. Der `this`-Parameter von `retrieveX` wird jedoch in non-strict mode noch auf `globalThis` gebunden und in strict mode auf `undefined`. Daher wird in non-strict mode (der Voreinstellung) der Aufruf von `retrieveX()` `undefined` zurückgeben, weil `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt als von dem `getX` liest (`globalThis`).

Tatsächlich sind einige eingebauten "Methoden" auch Getter, die gebundene Funktionen zurückgeben — ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), die bei Zugriff eine gebundene Funktion zurückgibt, die Sie direkt als Rückruf weitergeben können.

### Partiell angewendete Funktionen

Eine weitere Verwendung von `bind()` besteht darin, eine Funktion mit vordefinierten Anfangsargumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann am Anfang der Argumente eingefügt, die an die Ziel-Funktion weitergegeben werden, gefolgt von allen Argumenten, die zur Zeitpunkt des Aufrufs an die gebundene Funktion übergeben werden.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this`-Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, das in Browsern [`window`](/de/docs/Web/API/Window) ist. Wenn Sie mit Klassenmethoden arbeiten, die erfordern, dass `this` auf Klasseninstanzen verweist, können Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

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

### Gebundene Funktionen, die als Konstruktoren verwendet werden

Gebundene Funktionen sind automatisch für die Verwendung mit dem {{jsxref("Operators/new", "new")}}-Operator geeignet, um neue Instanzen zu konstruieren, die von der Ziel-Funktion erstellt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Es werden jedoch weiterhin bereitgestellte Argumente vor dem Konstruktorruf eingefügt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zur Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren alle wie erwartet, als ob der Konstruktor nie gebunden wäre. Der einzige Unterschied ist, dass er nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Die Folge davon ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen werden kann, selbst wenn Sie lieber verlangen würden, dass die gebundene Funktion nur unter Verwendung von {{jsxref("Operators/new", "new")}} aufgerufen wird. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufrufbar oder nur ohne `new` aufrufbar machen möchten, muss die Ziel-Funktion diese Einschränkung durchsetzen, z.B. durch Überprüfung von `new.target !== undefined` oder Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Binden von Klassen

Die Verwendung von `bind()` bei Klassen erhält die meisten Semantiken der Klasse, wobei jedoch alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototype-Kette erhalten bleibt, können Sie dennoch auf statische Eigenschaften der übergeordneten Klasse zugreifen.

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

### Methoden in Utility-Funktionen umwandeln

`bind()` ist auch in Fällen hilfreich, bei denen Sie eine Methode, die einen spezifischen `this`-Wert erfordert, in eine einfache Utility-Funktion umwandeln möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie allgemeine Utility-Funktionen: anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, wodurch Sie `map` mit array-ähnlichen Objekten verwenden können, die keine Arrays sind (z.B. [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu ändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}}, zum Beispiel, das Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung erstellen wie diese:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, weil die `call()`-Methode auch ihren `this`-Wert liest, was die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, wobei der `this`-Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dies bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

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
