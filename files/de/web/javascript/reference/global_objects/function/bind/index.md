---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`bind()`**-Methode von {{jsxref("Function")}}-Instanzen erstellt eine neue Funktion, die beim Aufruf diese Funktion mit dem `this`-Schlüsselwort auf den bereitgestellten Wert setzt und eine gegebene Sequenz von Argumenten voranstellt, bevor sie mit den bei Aufruf der neuen Funktion übergebenen Argumenten ergänzt wird.

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
  - : Der Wert, der als `this`-Parameter an die Ziel-Funktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ist, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt, und primitive Werte werden in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}}-Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, die bei der Ausführung der gebundenen Funktion an `func` übergeben werden.

### Rückgabewert

Eine Kopie der angegebenen Funktion mit dem definierten `this`-Wert und den anfänglichen Argumenten (falls übergeben).

## Beschreibung

Die Funktion `bind()` erstellt eine neue _gebundene Funktion_. Das Aufrufen der gebundenen Funktion führt in der Regel zur Ausführung der umschlossenen Funktion, die auch als _Ziel-Funktion_ bezeichnet wird. Die gebundene Funktion speichert die übergebenen Parameter – dies umfasst den Wert von `this` sowie die ersten Argumente – als ihren internen Zustand. Diese Werte werden im Vorhinein gespeichert und nicht beim Funktionsaufruf übergeben. Sie können in etwa `const boundFn = fn.bind(thisArg, arg1, arg2)` sehen als gleichbedeutend mit `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` bezüglich der Wirkung beim Aufruf (aber nicht bei der Konstruktion von `boundFn`).

Eine gebundene Funktion kann durch Aufrufen von `boundFn.bind(thisArg, /* more args */)` weiter gebunden werden, was eine weitere gebundene Funktion `boundFn2` erstellt. Der neu gebundene `thisArg`-Wert wird ignoriert, da die Ziel-Funktion von `boundFn2` bereits eine gebundene `this`-Referenz hat. Wenn `boundFn2` aufgerufen wird, ruft es `boundFn` auf, welches wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die Argumente, die von `boundFn` gebunden wurden, gefolgt von den Argumenten, die von `boundFn2` gebunden wurden, und schließlich den Argumenten, die `boundFn2` erhält.

```js
"use strict"; // prevent `this` from being boxed into the wrapper object

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch unter Verwendung des {{jsxref("Operators/new", "new")}}-Operators konstruiert werden, falls ihre Ziel-Funktion konstruierbar ist. In diesem Fall verhält es sich so, als ob die Ziel-Funktion stattdessen konstruiert worden wäre. Die vorangestellten Argumente werden wie gewohnt an die Ziel-Funktion übergeben, während der bereitgestellte `this`-Wert ignoriert wird (da beim Konstruieren automatisch ein eigenes `this` erstellt wird, wie bei den Parametern von {{jsxref("Reflect.construct")}} zu sehen). Wird die gebundene Funktion direkt konstruiert, ist [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Ziel-Funktion (d.h., die gebundene Funktion ist in Bezug auf `new.target` transparent).

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

Wenn eine gebundene Funktion als rechtes Operanden von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, bezieht sich `instanceof` auf die Ziel-Funktion (die in der gebundenen Funktion gespeichert ist) und liest deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat folgende Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Die `length` der Ziel-Funktion abzüglich der Anzahl der gebundenen Argumente (ohne den `thisArg`-Parameter), wobei 0 der minimale Wert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Ziel-Funktion mit einem vorangestellten `"bound "`.

Die gebundene Funktion erbt außerdem die [Prototype-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) der Ziel-Funktion. Sie besitzt jedoch keine weiteren eigenen Eigenschaften der Ziel-Funktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), falls die Ziel-Funktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die häufigste Verwendung von `bind()` ist das Erstellen einer Funktion, die unabhängig davon, wie sie aufgerufen wird, stets mit einem bestimmten `this`-Wert aufgerufen wird.

Ein häufiger Fehler neuer JavaScript-Programmierer besteht darin, eine Methode aus einem Objekt zu extrahieren und später diese Funktion aufzurufen, wobei angenommen wird, dass sie das ursprüngliche Objekt als `this` verwendet (zum Beispiel durch die Verwendung der Methode in einer Callback-basierten Codierung).

Ohne besondere Vorsichtsmaßnahmen geht das ursprüngliche Objekt jedoch meistens verloren. Durch das Erstellen einer gebundenen Funktion mit der ursprünglichen Methode und dem jeweiligen Objekt lässt sich dieses Problem elegant lösen:

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
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this`-Parameter von `retrieveX` anstelle von `globalThis` auf `undefined` gesetzt, was dazu führt, dass der `retrieveX()`-Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, ist das `this`-Element auf oberster Ebene anstelle von `globalThis` auf `undefined` gesetzt, wodurch auch die Zuweisung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, ist das `this`-Element auf oberster Ebene anstelle von `globalThis` auf `module.exports` gesetzt. Jedoch bleibt der `this`-Parameter von `retrieveX` in nicht-striktem Modus auf `globalThis` und in striktem Modus auf `undefined`. Daher gibt `retrieveX()` im standardmäßig nicht-strikten Modus `undefined` zurück, da `this.x = 9` auf ein anderes Objekt (`module.exports`) als das von `getX` gelesene Objekt (`globalThis`) schreibt.

Einige eingebaute "Methoden" sind eigentlich ebenfalls Getter, die gebundene Funktionen zurückgeben – ein bemerkenswertes Beispiel hierfür ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das beim Zugriff eine gebundene Funktion zurückgibt, die Sie direkt als Callback verwenden können.

### Partielle Anwendung von Funktionen

Ein weiterer Anwendungsbereich von `bind()` ist das Erstellen einer Funktion mit vorgegebenen Anfangsargumenten.

Diese Argumente (falls vorhanden) folgen dem angegebenen `this`-Wert und werden dann vor die Argumente gestellt, die an die Ziel-Funktion übergeben werden, gefolgt von den Argumenten, die an die gebundene Funktion bei ihrem Aufruf übergeben werden.

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

Standardmäßig wird das `this`-Schlüsselwort innerhalb von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout) auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, was in Browsern [`window`](/de/docs/Web/API/Window) entspricht. Wenn Sie mit Klassenmethoden arbeiten, die erfordern, dass `this` auf Instanzen der Klasse verweist, können Sie `this` explizit an die Rückruffunktion binden, um die Instanz beizubehalten.

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

Sie können auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) zu diesem Zweck verwenden.

```js
class LateBloomer {
  bloom() {
    // Declare bloom after a delay of 1 second
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwenden

Durch `bind()` erstellte Funktionen eignen sich automatisch dafür, mit dem {{jsxref("Operators/new", "new")}}-Operator verwendet zu werden, um neue Instanzen zu erstellen, die von der Ziel-Funktion erzeugt werden. Beim Verwenden einer gebundenen Funktion zur Konstruktion eines Werts wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch weiterhin dem Konstruktoraufruf vorangestellt.

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

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion für die Verwendung mit {{jsxref("Operators/new", "new")}} zu erstellen. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) usw. funktionieren wie erwartet, als wäre der Konstruktor nie gebunden. Der einzige Unterschied besteht darin, dass die Funktion nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Das bedeutet, dass Sie auch nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die nur auf einfache Weise aufgerufen werden kann, selbst wenn Sie lieber möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden kann. Wird sie ohne `new` aufgerufen, wird die gebundene `this`-Referenz plötzlich ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Can still be called as a normal function
// (although usually this is undesirable)
YAxisPoint(13);

// The modifications to `this` is now observable from the outside
console.log(emptyObj); // { x: 0, y: 13 }
```

Falls Sie möchten, dass eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} oder nur ohne `new` aufgerufen werden kann, muss die Ziel-Funktion diese Einschränkung erzwingen, etwa durch Überprüfung von `new.target !== undefined` oder durch Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Klassen binden

Die Verwendung von `bind()` für Klassen bewahrt die meisten Semantiken der Klasse, allerdings gehen alle statischen eigenen Eigenschaften der aktuellen Klasse verloren. Da jedoch die Prototypen-Kette erhalten bleibt, können Sie weiterhin auf statische Eigenschaften zugreifen, die von der übergeordneten Klasse geerbt wurden.

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

`bind()` ist auch hilfreich, wenn Sie eine Methode, die einen spezifischen `this`-Wert benötigt, in eine einfache Hilfsfunktion umwandeln möchten, die den vorherigen `this`-Parameter als normalen Parameter akzeptiert. Dies ist ähnlich wie bei allgemeinen Hilfsfunktionen: Anstatt `array.map(callback)` zu verwenden, nutzen Sie `map(array, callback)`, was es ermöglicht, `map` mit array-ähnlichen Objekten zu verwenden, die keine Arrays sind (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne dabei `Object.prototype` zu verändern.

Nehmen Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, das Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array umzuwandeln. Folgendes könnte eine Kurzform sein:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als eigenständige Funktion aufrufen können, weil die Methode `call()` ebenfalls auf ihren `this`-Wert zugreift, der die aufzurufende Funktion ist. In diesem Fall können Sie `bind()` verwenden, um den Wert von `this` für `call()` zu binden. Im folgenden Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, bei der der `this`-Wert an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dadurch können zusätzliche `call()`-Aufrufe eliminiert werden:

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
