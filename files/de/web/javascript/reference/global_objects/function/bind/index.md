---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`bind()`**-Methode von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion, die bei Aufruf diese Funktion mit ihrem `this`-Schlüsselwort auf den bereitgestellten Wert setzt und eine gegebene Sequenz von Argumenten vor den bei Aufruf der neuen Funktion bereitgestellten Argumenten aufführt.

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
  - : Der Wert, der als `this`-Parameter an die Zielfunktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente zur Voranstellung von Argumenten, die der gebundenen Funktion beim Aufrufen von `func` übergeben werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem angegebenen `this`-Wert und initialen Argumenten (falls angegeben).

## Beschreibung

Die `bind()`-Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umschließt, die auch als _Zielfunktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter — einschließlich des Wertes von `this` und der ersten paar Argumente — als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt zum Aufrufzeitpunkt übergeben zu werden. Sie können sich `const boundFn = fn.bind(thisArg, arg1, arg2)` im Allgemeinen als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` vorstellen, wenn sie aufgerufen wird (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* weitere args */)` aufgerufen wird, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, da die Zielfunktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, wird es `boundFn` aufrufen, was wiederum `fn` aufruft. Die Argumente, die `fn` schließlich erhält, sind der Reihe nach: die Argumente, die von `boundFn` gebunden sind, die von `boundFn2` gebundenen Argumente und die Argumente, die `boundFn2` erhält.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden, wenn ihre Zielfunktion konstruierbar ist. Dabei wird so vorgegangen, als ob die Zielfunktion stattdessen konstruiert worden wäre. Die vorangestellten Argumente werden wie üblich an die Zielfunktion übergeben, während der bereitgestellte `this`-Wert ignoriert wird (da der Konstruktion bereits ihr eigenes `this` bereitstellt, wie an den Parametern von {{jsxref("Reflect.construct")}} zu sehen ist). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Zielfunktion sein. (Das heißt, die gebundene Funktion ist für `new.target` transparent.)

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

Da eine gebundene Funktion jedoch nicht über die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft verfügt, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Beim Verwenden einer gebundenen Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) greift `instanceof` auf die Zielfunktion (die intern in der gebundenen Funktion gespeichert ist) zu und liest stattdessen deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Zielfunktion minus der Anzahl der gebundenen Argumente (ohne den `thisArg`-Parameter), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Zielfunktion plus ein Präfix `"bound "`.

Die gebundene Funktion erbt auch die [Prototypenkette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) der Zielfunktion. Sie hat jedoch keine anderen eigenen Eigenschaften der Zielfunktion (wie z.B. [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), falls die Zielfunktion eine Klasse ist).

## Beispiele

### Erstellung einer gebundenen Funktion

Der einfachste Gebrauch von `bind()` besteht darin, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler bei neuen JavaScript-Programmierern besteht darin, eine Methode aus einem Objekt zu extrahieren, diese Funktion dann später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als `this` verwendet (z.B. durch Verwenden der Methode in rückrufbasierter Code).

Ohne besondere Sorgfalt geht jedoch das ursprüngliche Objekt normalerweise verloren. Das Erstellen einer gebundenen Funktion aus der Funktion unter Verwendung des ursprünglichen Objekts löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` an `undefined` statt an `globalThis` gebunden, was den `retrieveX()`-Aufruf fehlschlagen lässt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das globale `this` an `undefined` gebunden und nicht an `globalThis`, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das globale `this` an `module.exports` statt an `globalThis` gebunden. Der `this`-Parameter von `retrieveX` wird jedoch im Nicht-Strict-Modus an `globalThis` und im Strict-Modus an `undefined` gebunden. Im Nicht-Strict-Modus (dem Standard) gibt der `retrieveX()`-Aufruf daher `undefined` zurück, da `this.x = 9` ein anderes Objekt (`module.exports`) beschreibt, als das, von dem `getX` liest (`globalThis`).

In der Tat sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben – ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das beim Zugriff eine gebundene Funktion zurückgibt, die direkt als Rückruf übergeben werden kann.

### Partiell angewendete Funktionen

Der nächste einfachste Gebrauch von `bind()` ist das Erstellen einer Funktion mit voreingestellten Anfangsargumenten.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann am Anfang der Argumente eingefügt, die der Zielfunktion übergeben werden, gefolgt von den Argumenten, die bei Aufruf der gebundenen Funktion übergeben werden.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/SetTimeout) das `this`-Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, welches in Browsern [`window`](/de/docs/Web/API/Window) ist. Beim Arbeiten mit Klassenmethoden, die erfordern, dass `this` auf Klasseninstanzen verweist, können Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

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

Für diesen Zweck können Sie auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwendet

Gebundene Funktionen sind automatisch für die Verwendung mit dem {{jsxref("Operators/new", "new")}}-Operator geeignet, um neue Instanzen zu erstellen, die von der Zielfunktion erzeugt werden. Wenn eine gebundene Funktion zur Wertkonstruktion verwendet wird, wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch immer noch vorangestellt an den Konstruktoraufruf übergeben.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren alle wie erwartet, als ob der Konstruktor niemals gebunden worden wäre. Der einzige Unterschied besteht darin, dass er nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Die Folgerung ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen werden kann, auch wenn Sie lieber möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen wird. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht mehr ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie eine gebundene Funktion einschränken möchten, nur mit {{jsxref("Operators/new", "new")}} oder nur ohne `new` aufgerufen zu werden, muss die Zielfunktion diese Einschränkung erzwingen, z.B. durch Überprüfung von `new.target !== undefined` oder durch Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Klassenbindung

Die Verwendung von `bind()` für Klassen erhält die meisten Semantiken der Klasse, außer dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototypenkette erhalten bleibt, können Sie immer noch auf statische Eigenschaften zugreifen, die von der Elternklasse geerbt wurden.

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

### Transformieren von Methoden in Dienstprogrammfunktionen

`bind()` ist auch nützlich in Fällen, in denen Sie eine Methode, die einen bestimmten `this`-Wert erfordert, in eine gewöhnliche Dienstprogrammfunktion transformieren möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Dienstprogrammfunktionen: Anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was Ihnen ermöglicht, `map` mit arrayähnlichen Objekten zu verwenden, die keine Arrays sind (z.B. [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, die Sie zum Konvertieren eines arrayähnlichen Objekts in ein echtes Array verwenden wollen. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()`-Methode ebenfalls ihren `this`-Wert liest, was die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den `this`-Wert für `call()` zu binden. Im folgenden Stück Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, wobei der `this`-Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dies bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

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
