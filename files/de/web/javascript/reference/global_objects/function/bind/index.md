---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`bind()`**-Methode von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion, die beim Aufrufen diese Funktion mit dem bereitgestellten Wert als `this`-Schlüsselwort aufruft, und einer gegebenen Abfolge von Argumenten, die den beim Aufrufen der neuen Funktion bereitgestellten vorangehen.

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
  - : Der Wert, der als `this`-Parameter an die Zielfunktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Befindet sich die Funktion nicht im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten, die der gebundenen Funktion beim Aufruf von `func` übergeben werden, vorangestellt werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem spezifizierten `this`-Wert und anfänglichen Argumenten (falls bereitgestellt).

## Beschreibung

Die `bind()`-Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der Funktion, die sie umschließt, die auch als _Zielfunktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter — die den Wert von `this` und die ersten Argumente umfassen — als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt beim Aufruf übergeben zu werden. Sie können im Allgemeinen `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` betrachten, was die Wirkung beim Aufrufen betrifft (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* more args */)` aufgerufen wird, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, da die Zielfunktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, ruft es `boundFn` auf, welches dann `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die Argumente, die von `boundFn` gebunden wurden, Argumente, die von `boundFn2` gebunden wurden, und die Argumente, die `boundFn2` erhalten hat.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert werden, wenn ihre Zielfunktion konstruierbar ist. Das geschieht so, als hätte die Zielfunktion stattdessen konstruiert werden können. Die vorangestellten Argumente werden der Zielfunktion wie gewohnt übergeben, während der bereitgestellte `this`-Wert ignoriert wird (weil bei der Konstruktion ein eigenes `this` vorbereitet wird, wie in den Parametern von {{jsxref("Reflect.construct")}} zu sehen). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Zielfunktion sein. (Das bedeutet, dass die gebundene Funktion für `new.target` transparent ist.)

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

Wenn Sie eine gebundene Funktion als die rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwenden, greift `instanceof` auf die Zielfunktion (die intern in der gebundenen Funktion gespeichert ist) zu und liest ihr `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Zielfunktion minus der Anzahl der gebundenen Argumente (ohne den `thisArg`-Parameter zu zählen), wobei der Mindestwert 0 ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Zielfunktion mit einem `"bound "`-Präfix.

Die gebundene Funktion erbt auch die [Prototyp-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) der Zielfunktion. Sie hat jedoch keine anderen eigenen Eigenschaften der Zielfunktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Zielfunktion eine Klasse ist).

## Beispiele

### Erstellung einer gebundenen Funktion

Die einfachste Verwendung von `bind()` ist, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler für neue JavaScript-Programmierer ist es, eine Methode aus einem Objekt zu extrahieren und dann zu erwarten, dass diese Funktion beim späteren Aufruf das ursprüngliche Objekt als `this` verwendet (z.B. durch die Verwendung der Methode in rückrufbasierter Codeleistung).

Ohne besondere Vorsicht geht das ursprüngliche Objekt jedoch gewöhnlich verloren. Das Erstellen einer gebundenen Funktion aus der Funktion unter Verwendung des ursprünglichen Objekts löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` an `undefined` anstatt an `globalThis` gebunden, was dazu führt, dass der `retrieveX()`-Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das oberste `this` an `undefined` anstatt an `globalThis` gebunden, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das oberste `this` an `module.exports` anstatt an `globalThis` gebunden. Der `this`-Parameter von `retrieveX` wird jedoch immer noch im Nicht-Strict Mode an `globalThis` gebunden und im Strict Mode an `undefined`. Daher gibt der `retrieveX()`-Aufruf im Nicht-Strict Mode (dem Standard) `undefined` zurück, da `this.x = 9` in ein anderes Objekt (`module.exports`) geschrieben wird als das, aus dem `getX` liest (`globalThis`).

In der Tat sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben — ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das, wenn darauf zugegriffen wird, eine gebundene Funktion zurückgibt, die Sie direkt als Rückruf verwenden können.

### Teilweise angewendete Funktionen

Die nächst einfachste Verwendung von `bind()` ist, eine Funktion mit vorab festgelegten anfänglichen Argumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann am Anfang der Argumente eingefügt, die der Zielfunktion übergeben werden, gefolgt von welchen Argumenten auch immer der gebundenen Funktion beim Zeitpunkt des Aufrufs übergeben werden.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/SetTimeout) das `this`-Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, das in Browsern [`window`](/de/docs/Web/API/Window) ist. Wenn Sie mit Klassenmethoden arbeiten, die erfordern, dass `this` auf Klasseninstanzen verweist, müssen Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

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

### Gebundene Funktionen als Konstruktoren verwendet

Gebundene Funktionen sind automatisch geeignet für die Verwendung mit dem {{jsxref("Operators/new", "new")}}-Operator zur Konstruktion neuer Instanzen, die von der Zielfunktion erstellt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch weiterhin dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zur Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren alle wie erwartet, als ob der Konstruktor nie gebunden gewesen wäre. Der einzige Unterschied besteht darin, dass sie nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Daraus folgt, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen werden kann, selbst wenn Sie lieber die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen haben möchten. Wenn Sie es ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht mehr ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie wünschen, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufrufbar ist, oder nur ohne `new` aufrufbar ist, muss die Zielfunktion diese Einschränkung durchsetzen, z. B. durch Überprüfung von `new.target !== undefined` oder durch Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Binden von Klassen

Die Verwendung von `bind()` bei Klassen bewahrt die meisten der Semantiken der Klasse, außer dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototyp-Kette bewahrt wird, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der übergeordneten Klasse geerbt werden.

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

### Transformieren von Methoden zu Dienstprogrammfunktionen

`bind()` ist auch in Fällen hilfreich, in denen Sie eine Methode, die einen spezifischen `this`-Wert erfordert, in eine einfache Dienstprogrammfunktion transformieren möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Dienstprogrammfunktionen: Anstatt `array.map(callback)` zu rufen, verwenden Sie `map(array, callback)`, wodurch Sie `map` mit array-ähnlichen Objekten verwenden können, die keine Arrays sind (z.B. [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu mutieren.

Nehmen Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein wirkliches Array zu konvertieren. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem an {{jsxref("Array.prototype.slice()")}} gebundenen `this`-Wert. Das bedeutet, dass zusätzliche `call()`-Aufrufe eliminiert werden können:

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
