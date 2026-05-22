---
title: Function.prototype.bind()
short-title: bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die **`bind()`**-Methode von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion, die, wenn sie aufgerufen wird, diese Funktion mit ihrem `this`-Schlüsselwort, das auf den bereitgestellten Wert gesetzt ist, und einer gegebenen Abfolge von Argumenten, welche den bei Aufruf der neuen Funktion bereitgestellten Argumenten vorausgehen, ausführt.

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
  - : Der Wert, der als `this`-Parameter an die Ziel-Funktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) mit dem globalen Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("new")}}-Operator erzeugt wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, welche an die gebundene Funktion beim Aufruf von `func` übergeben werden.

### Rückgabewert

Eine Kopie der übergebenen Funktion mit dem angegebenen `this`-Wert und den initialen Argumenten (falls angegeben).

## Beschreibung

Die `bind()`-Funktion erstellt eine neue _gebundene Funktion_. Das Aufrufen dieser gebundenen Funktion resultiert in der Regel in der Ausführung der Funktion, die sie umschließt, welche auch als _Ziel-Funktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter — dazu gehören der Wert von `this` und die ersten Argumente — als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt bei der Ausführung übergeben zu werden. Man kann im Allgemeinen `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` betrachten, was den Effekt beim Aufruf betrifft (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* more args */)` aufgerufen wird, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, weil die Ziel-Funktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, ruft es `boundFn` auf, welches wiederum `fn` aufruft. Die Argumente, die `fn` letztlich erhält, sind in der Reihenfolge: die Argumente, die von `boundFn` gebunden sind, die von `boundFn2` gebundenen Argumente und die von `boundFn2` empfangenen Argumente.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("new")}}-Operator konstruiert werden, wenn ihre Ziel-Funktion konstruierbar ist. Dies wirkt so, als ob die Ziel-Funktion stattdessen konstruiert worden wäre. Die vorangestellten Argumente werden der Ziel-Funktion wie gewohnt übergeben, während der bereitgestellte `this`-Wert ignoriert wird (weil der Konstruktion ein eigenes `this` vorbereitet, wie an den Parametern von {{jsxref("Reflect.construct")}} zu sehen ist). Wenn die gebundene Funktion direkt konstruiert wird, ist [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Ziel-Funktion. (Das bedeutet, dass die gebundene Funktion für `new.target` transparent ist.)

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

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, würde `instanceof` nach der Ziel-Funktion greifen (die intern in der gebundenen Funktion gespeichert ist) und deren `prototype` lesen.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Ziel-Funktion minus der Anzahl der zu bindenden Argumente (ohne den `thisArg`-Parameter zu zählen), wobei 0 der Minimalwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Ziel-Funktion plus ein `"bound "`-Präfix.

Die gebundene Funktion erbt auch die [Prototypenkette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Ziel-Funktion. Sie hat jedoch nicht andere eigene Eigenschaften der Ziel-Funktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Ziel-Funktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die unabhängig davon, wie sie aufgerufen wird, mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler bei neuen JavaScript-Programmierern ist es, eine Methode aus einem Objekt zu extrahieren, dann diese Funktion aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als `this` verwendet (z.B. indem die Methode in callback-basiertem Code verwendet wird).

Ohne besondere Vorsicht geht das ursprüngliche Objekt jedoch normalerweise verloren. Das Erstellen einer gebundenen Funktion aus der Funktion unter Verwendung des ursprünglichen Objekts löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` auf `undefined` anstatt auf `globalThis` gebunden, was dazu führt, dass der `retrieveX()`-Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das top-level `this` auf `undefined` anstatt auf `globalThis` gebunden, was dazu führt, dass die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das Top-Level-`this` auf `module.exports` anstatt auf `globalThis` gebunden. Der `this`-Parameter von `retrieveX` wird jedoch in nicht-striktem Modus weiterhin an `globalThis` gebunden und in strengem Modus an `undefined`. Daher wird im nicht-strikten Modus (der Standard) der `retrieveX()`-Aufruf `undefined` zurückgeben, da `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt, als von dem `getX` liest (`globalThis`).

Tatsächlich sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben — ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das, wenn darauf zugegriffen wird, eine gebundene Funktion zurückgibt, die Sie direkt als Callback verwenden können.

### Partiell angewandte Funktionen

Eine weitere Verwendung von `bind()` besteht darin, eine Funktion mit vorgegebenen Anfangsargumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann am Anfang der an die Ziel-Funktion übergebenen Argumente eingefügt, gefolgt von den Argumenten, die beim Aufruf der gebundenen Funktion übergeben werden.

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

Per Standard wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this`-Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, welches in Browsern dem [`window`](/de/docs/Web/API/Window) entspricht. Beim Arbeiten mit Klassenmethoden, die `this` benötigen, um auf Klasseninstanzen zu verweisen, können Sie `this` explizit an die Callback-Funktion binden, um die Instanz zu erhalten.

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

Sie können auch [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für diesen Zweck verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwendet

Gebundene Funktionen sind automatisch geeignet für die Verwendung mit dem {{jsxref("new")}}-Operator, um neue Instanzen zu erstellen, die durch die Ziel-Funktion erzeugt wurden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch immer noch dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren wie erwartet, als wäre der Konstruktor nie gebunden. Der einzige Unterschied ist, dass sie nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Die Schlussfolgerung ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die schlicht aufgerufen werden soll, selbst wenn Sie möchten, dass die gebundene Funktion nur mit {{jsxref("new")}} aufgerufen wird. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /* x */);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie möchten, dass eine gebundene Funktion nur mit {{jsxref("new")}} aufgerufen werden kann, oder nur ohne `new` aufgerufen werden kann, muss die Ziel-Funktion diese Einschränkung durchsetzen, z.B. indem sie prüft, ob `new.target !== undefined` oder indem sie eine [Klasse](/de/docs/Web/JavaScript/Reference/Classes) verwendet.

### Binden von Klassen

Die Verwendung von `bind()` bei Klassen bewahrt die meisten Semantiken der Klasse, außer dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototypenkette bewahrt wird, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der Elternklasse geerbt werden.

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

### Transformation von Methoden zu Hilfsfunktionen

`bind()` ist auch hilfreich in Fällen, in denen Sie eine Methode, die einen bestimmten `this`-Wert benötigt, in eine einfache Hilfsfunktion umwandeln möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Hilfsfunktionen: anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was es Ihnen erlaubt, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}} als Beispiel, das Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// …

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da die `call()`-Methode auch ihren `this`-Wert liest, welcher die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Codebeispiel ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, wobei der `this`-Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dies bedeutet, dass zusätzliche `call()`-Aufrufe vermieden werden können:

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
- {{jsxref("Functions", "Functions", "", 1)}}
