---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{JSRef}}

Die **`bind()`** Methode von {{jsxref("Function")}} Instanzen erstellt eine neue Funktion, die, wenn sie aufgerufen wird, diese Funktion mit dem `this` Schlüsselwort auf den bereitgestellten Wert gesetzt aufruft, und eine gegebene Abfolge von Argumenten vorangestellt denjenigen, die bei dem Aufruf der neuen Funktion bereitgestellt werden.

{{InteractiveExample("JavaScript Demo: Function.bind()", "taller")}}

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
  - : Der Wert, der als `this` Parameter an die Zielfunktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte konvertiert. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}} Operator erzeugt wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, die bei der Ausführung von `func` an die gebundene Funktion übergeben werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem spezifizierten `this` Wert und den anfänglichen Argumenten (falls bereitgestellt).

## Beschreibung

Die `bind()` Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion führt im Allgemeinen zur Ausführung der von ihr umschlossenen Funktion, die auch als _Zielfunktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter – dazu gehören der Wert von `this` und die ersten paar Argumente – als ihren internen Zustand. Diese Werte werden im Voraus gespeichert, anstatt zur Aufrufzeit übergeben zu werden. Normalerweise kann `const boundFn = fn.bind(thisArg, arg1, arg2)` als äquivalent zu `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` für den Effekt gesehen werden, wenn sie aufgerufen wird (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann weiter gebunden werden, indem `boundFn.bind(thisArg, /* more args */)` aufgerufen wird, hierdurch wird eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg` Wert wird ignoriert, da die Zielfunktion von `boundFn2`, die `boundFn` ist, bereits ein gebundenes `this` hat. Wenn `boundFn2` aufgerufen wird, ruft es `boundFn` auf, das wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind, in der Reihenfolge: die von `boundFn` gebundenen Argumente, die von `boundFn2` gebundenen Argumente und die von `boundFn2` empfangenen Argumente.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert werden, wenn ihre Zielfunktion konstruierbar ist. Dies erfolgt, als ob die Zielfunktion stattdessen konstruierbar wäre. Die vorangestellten Argumente werden wie gewohnt an die Zielfunktion übergeben, während der angegebene `this` Wert ignoriert wird (da die Konstruktion ihr eigenes `this` vorbereitet, wie an den Parametern von {{jsxref("Reflect.construct")}} zu sehen). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Zielfunktion sein. (Das heißt, die gebundene Funktion ist transparent für `new.target`.)

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

Da eine gebundene Funktion jedoch nicht über die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft verfügt, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechte Seite von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, wird `instanceof` die Zielfunktion (die intern in der gebundenen Funktion gespeichert ist) aufrufen und deren `prototype` lesen.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Zielfunktion minus die Anzahl der Argumente, die gebunden werden (ohne die `thisArg` Parameter zu zählen), wobei 0 der Mindestwert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Zielfunktion plus ein `"bound "` Präfix.

Die gebundene Funktion erbt auch die [Prototypen-Kette](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) der Zielfunktion. Allerdings besitzt sie keine anderen eigenen Eigenschaften der Zielfunktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Zielfunktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die häufigste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die unabhängig davon, wie sie aufgerufen wird, mit einem bestimmten `this` Wert aufgerufen wird.

Ein häufiger Fehler von neuen JavaScript-Programmierern ist es, eine Methode aus einem Objekt zu extrahieren und dann zu erwarten, dass diese Funktion das ursprüngliche Objekt als `this` verwendet, wenn sie später aufgerufen wird (z. B. wenn die Methode in rückrufbasiertem Code verwendet wird).

Ohne besondere Beachtung geht das ursprüngliche Objekt jedoch normalerweise verloren. Die Erstellung einer gebundenen Funktion aus der Funktion unter Verwendung des ursprünglichen Objekts löst dieses Problem elegant:

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
> Wenn Sie dieses Beispiel im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this` Parameter von `retrieveX` auf `undefined` anstatt `globalThis` gebunden, wodurch der `retrieveX()` Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das top-level `this` auf `undefined` anstelle von `globalThis` gebunden, wodurch die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS Modul ausführen, wird das top-level `this` auf `module.exports` anstelle von `globalThis` gebunden. Allerdings wird der `this` Parameter von `retrieveX` im nicht-strict mode weiterhin auf `globalThis` und im strict mode auf `undefined` gebunden. Daher gibt der `retrieveX()` Aufruf im nicht-strict mode (dem Standard) `undefined` zurück, weil `this.x = 9` in ein anderes Objekt (`module.exports`) schreibt, von dem `getX` liest (`globalThis`).

In der Tat sind einige eingebaute "Methoden" auch Getter, die gebundene Funktionen zurückgeben - ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das, wenn es aufgerufen wird, eine gebundene Funktion zurückgibt, die Sie direkt als Rückruf übergeben können.

### Teilweise angewendete Funktionen

Eine weitere Verwendung von `bind()` besteht darin, eine Funktion mit vorab festgelegten Anfangsargumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this` Wert und werden dann am Anfang der Argumente eingefügt, die an die Zielfunktion übergeben werden, gefolgt von welchen Argumenten auch immer an die gebundene Funktion übergeben werden, wenn sie aufgerufen wird.

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

Standardmäßig wird innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) das `this` Schlüsselwort auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis), das in Browsern [`window`](/de/docs/Web/API/Window) ist, gesetzt. Wenn Sie mit Klassenmethoden arbeiten, die `this` auf Klasseninstanzen verweisen müssen, können Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

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

Sie können für diesen Zweck auch [Arrow-Funktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwendet

Gebundene Funktionen sind automatisch geeignet, mit dem {{jsxref("Operators/new", "new")}} Operator verwendet zu werden, um neue Instanzen zu konstruieren, die von der Zielfunktion erstellt wurden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Allerdings werden bereitgestellte Argumente nach wie vor dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren erwartungsgemäß, als ob der Konstruktor nie gebunden worden wäre. Der einzige Unterschied ist, dass er nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Das Korollar ist, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die ganz normal aufgerufen werden kann, selbst wenn Sie lieber möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen wird. Wenn Sie sie ohne `new` aufrufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie wünschen, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann, oder nur ohne `new` aufgerufen werden kann, muss die Zielfunktion diese Einschränkung durchsetzen, z. B. durch Überprüfung von `new.target !== undefined` oder durch Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Klassen binden

Die Verwendung von `bind()` auf Klassen bewahrt die meisten der Semantiken der Klasse, mit der Ausnahme, dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototyp-Kette bewahrt wird, können Sie weiterhin auf geerbte statische Eigenschaften von der Elternklasse zugreifen.

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

### Methoden in Utility-Funktionen transformieren

`bind()` ist auch in Fällen hilfreich, in denen Sie eine Methode, die einen bestimmten `this` Wert benötigt, in eine einfache Utility-Funktion verwandeln möchten, die den vorherigen `this` Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei universellen Utility-Funktionen: anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was es Ihnen ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie {{jsxref("Array.prototype.slice()")}}, zum Beispiel, das Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array umzuwandeln. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, weil die `call()` Methode auch ihren `this` Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem `this` Wert gebunden an {{jsxref("Array.prototype.slice()")}}. Dies bedeutet, dass zusätzliche `call()` Aufrufe eliminiert werden können:

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
