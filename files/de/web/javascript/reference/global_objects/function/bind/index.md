---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 5bdcf72ed6ffc7d4fa878060a548869ed6ae149b
---

{{JSRef}}

Die **`bind()`** Methode von {{jsxref("Function")}} Instanzen erstellt eine neue Funktion, die beim Aufruf diese Funktion mit ihrem `this` Schlüsselwort auf den bereitgestellten Wert gesetzt aufruft und eine gegebene Sequenz von Argumenten voranstellen, die bereitgestellt werden, wenn die neue Funktion aufgerufen wird.

{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}

## Syntax

```js-nolint
bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, */ argN)
```

### Parameter

- `thisArg`
  - : Der Wert, der als `this` Parameter an die Zielfunktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion sich nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte werden in Objekte konvertiert. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten, die der gebundenen Funktion bei der Ausführung von `func` übergeben werden, vorangestellt werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem spezifizierten `this` Wert und den Anfangsargumenten (falls vorhanden).

## Beschreibung

Die `bind()` Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umschließt, die auch als _Zielfunktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter - einschließlich des `this` Werts und der ersten Argumente - als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt zur Aufrufzeit übergeben zu werden. Im Allgemeinen können Sie `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` betrachten, was den Effekt beim Aufruf betrifft (nicht aber, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* more args */)` aufgerufen wird, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg` Wert wird ignoriert, da die Zielfunktion von `boundFn2`, die `boundFn` ist, bereits einen gebundenen `this` hat. Wenn `boundFn2` aufgerufen wird, würde sie `boundFn` aufrufen, die wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die Argumente, die durch `boundFn` gebunden sind, die durch `boundFn2` gebundenen Argumente und schließlich die Argumente, die `boundFn2` erhält.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert werden, falls ihre Zielfunktion konstruiert werden kann. In diesem Fall verhält es sich, als hätte die Zielfunktion stattdessen konstruiert werden sollen. Die vorangestellten Argumente werden wie üblich der Zielfunktion übergeben, während der angegebene `this` Wert ignoriert wird (weil die Konstruktion ihr eigenes `this` vorbereitet, wie aus den Parametern von {{jsxref("Reflect.construct")}} ersichtlich wird). Wenn die gebundene Funktion direkt konstruiert wird, ist [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Zielfunktion. (Das bedeutet, dass die gebundene Funktion für `new.target` transparent ist.)

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

Da eine gebundene Funktion jedoch nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft besitzt, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, greift `instanceof` auf die Zielfunktion zu (die intern in der gebundenen Funktion gespeichert ist) und liest stattdessen deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Zielfunktion minus der Anzahl der gebundenen Argumente (ohne das `thisArg` Parameter zu zählen), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Zielfunktion plus einem `"bound "` Präfix.

Die gebundene Funktion erbt auch die [Prototype-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) der Zielfunktion. Sie besitzt jedoch keine anderen eigenen Eigenschaften der Zielfunktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Zielfunktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Der häufigste Einsatz von `bind()` besteht darin, eine Funktion zu erstellen, die unabhängig davon, wie sie aufgerufen wird, mit einem bestimmten `this` Wert aufgerufen wird.

Ein häufiger Fehler für neue JavaScript-Programmierer besteht darin, eine Methode aus einem Objekt zu extrahieren und dann später diese Funktion aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als `this` verwendet (z.B. indem die Methode in einem rückrufbasierten Code verwendet wird).

Ohne besondere Vorsicht geht das ursprüngliche Objekt jedoch in der Regel verloren. Eine gebundene Funktion aus der Funktion zu erstellen, indem das ursprüngliche Objekt verwendet wird, löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this` Parameter von `retrieveX` auf `undefined` anstelle von `globalThis` gebunden, was dazu führt, dass der Aufruf von `retrieveX()` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das top-level `this` auf `undefined` anstelle von `globalThis` gebunden, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das top-level `this` an `module.exports` anstelle von `globalThis` gebunden. Der `this` Parameter von `retrieveX` wird jedoch immer noch auf `globalThis` im Nicht-Strict-Modus und auf `undefined` im Strict-Modus gebunden. Daher wird im Nicht-Strict-Modus (der Standardmodus) der Aufruf von `retrieveX()` `undefined` zurückgeben, da `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt, als `getX` liest (`globalThis`).

Tatsächlich sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben - ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), die, wenn sie aufgerufen wird, eine gebundene Funktion zurückgibt, die direkt als Rückruf übergeben werden kann.

### Partiell angewendete Funktionen

Ein weiterer Einsatz von `bind()` besteht darin, eine Funktion mit vorab festgelegten Anfangsargumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this` Wert und werden dann am Anfang der Argumente eingefügt, die an die Zielfunktion übergeben werden, gefolgt von den Argumenten, die der gebundenen Funktion beim Aufruf übergeben werden.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this` Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, das in Browsern [`window`](/de/docs/Web/API/Window) ist. Bei der Arbeit mit Klassenmethoden, die erfordern, dass `this` auf Klasseninstanzen verweist, können Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

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

Gebundene Funktionen sind automatisch geeignet, um mit dem {{jsxref("Operators/new", "new")}} Operator verwendet zu werden, um neue Instanzen zu konstruieren, die von der Zielfunktion erstellt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Übergebene Argumente werden jedoch immer noch dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zur Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren alle wie erwartet, als wäre der Konstruktor nie gebunden. Der einzige Unterschied besteht darin, dass er nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Das Korollar ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen wird, auch wenn Sie eher möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen wird. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie wünschen, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann, oder nur ohne `new`, muss die Zielfunktion diese Einschränkung erzwingen, zum Beispiel durch Überprüfung von `new.target !== undefined` oder durch die Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Klassen binden

Die Verwendung von `bind()` bei Klassen bewahrt den größten Teil der Semantik der Klasse, außer dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototype-Kette erhalten bleibt, können Sie immer noch auf geerbte statische Eigenschaften der Elternklasse zugreifen.

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

### Methoden in Dienstprogramme umwandeln

`bind()` ist auch in Fällen hilfreich, in denen Sie eine Methode, die einen spezifischen `this` Wert benötigt, in eine einfache Dienstprogrammfunktion umwandeln möchten, die den vorherigen `this` Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Dienstprogrammfunktionen: Anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was es ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen wir {{jsxref("Array.prototype.slice()")}}, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein wirkliches Array umzuwandeln. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die Methode `call()` auch ihren `this` Wert liest, der die Funktion ist, die sie aufrufen sollte. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem `this` Wert, der auf {{jsxref("Array.prototype.slice()")}} gebunden ist. Das bedeutet, dass zusätzliche `call()` Aufrufe eliminiert werden können:

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
- {{jsxref("Functions", "Functions", "", 1)}}
