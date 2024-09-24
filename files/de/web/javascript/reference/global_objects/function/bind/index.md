---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`bind()`** Methode von {{jsxref("Function")}} Instanzen erzeugt eine neue Funktion, die, wenn aufgerufen, diese Funktion mit dem `this` Schlüsselwort auf den bereitgestellten Wert setzt und eine gegebene Sequenz von Argumenten voranstellt, die beim Aufruf der neuen Funktion bereitgestellt werden.

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
  - : Der Wert, der als `this` Parameter an die Ziel-Funktion `func` übergeben wird, wenn die gebundene Funktion aufgerufen wird. Wenn die Funktion sich nicht im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) befindet, werden [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) und [`undefined`](/de/docs/Web/JavaScript/Reference/Global_Objects/undefined) durch das globale Objekt ersetzt und primitive Werte in Objekte umgewandelt. Der Wert wird ignoriert, wenn die gebundene Funktion mit dem {{jsxref("Operators/new", "new")}} Operator konstruiert wird.
- `arg1`, …, `argN` {{optional_inline}}
  - : Argumente, die den Argumenten vorangestellt werden, die der gebundenen Funktion beim Aufruf von `func` übergeben werden.

### Rückgabewert

Eine Kopie der gegebenen Funktion mit dem angegebenen `this` Wert und den anfänglichen Argumenten (falls angegeben).

## Beschreibung

Die `bind()` Funktion erstellt eine neue _gebundene Funktion_. Der Aufruf der gebundenen Funktion resultiert im Allgemeinen in der Ausführung der Funktion, die sie umrahmt, die auch _Ziel-Funktion_ genannt wird. Die gebundene Funktion speichert die übergebenen Parameter — dazu gehören der Wert von `this` und die ersten Argumente — als ihren internen Zustand. Diese Werte werden im Voraus gespeichert anstatt zur Aufrufzeit übergeben zu werden. Im Allgemeinen kann man `const boundFn = fn.bind(thisArg, arg1, arg2)` als gleichwertig betrachten mit `const boundFn = (...restArgs) => fn.call(thisArg, arg1, arg2, ...restArgs)` in ihrer Wirkung, wenn sie aufgerufen wird (aber nicht, wenn `boundFn` konstruiert wird).

Eine gebundene Funktion kann durch Aufrufen von `boundFn.bind(thisArg, /* more args */)` weiter gebunden werden, wodurch eine weitere gebundene Funktion `boundFn2` erstellt wird. Der neu gebundene `thisArg` Wert wird ignoriert, da die Ziel-Funktion von `boundFn2`, die `boundFn` ist, bereits einen gebundenen `this` hat. Wenn `boundFn2` aufgerufen wird, ruft sie `boundFn` auf, was wiederum `fn` aufruft. Die Argumente, die `fn` letztendlich erhält, sind in der Reihenfolge: die Argumente, die von `boundFn` gebunden sind, die Argumente, die von `boundFn2` gebunden sind, und die Argumente, die von `boundFn2` empfangen werden.

```js
"use strict"; // verhindert, dass `this` in das Wrapper-Objekt verpackt wird

function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6
```

Eine gebundene Funktion kann auch verwendet werden, um mithilfe des {{jsxref("Operators/new", "new")}} Operators ein neues Objekt zu konstruieren, sofern ihre Ziel-Funktion konstruierbar ist. Das bedeutet, dass die Ziel-Funktion statt der gebundenen Funktion konstruiert wird. Die vorangestellten Argumente werden wie gewohnt an die Ziel-Funktion übergeben, während der `this` Wert ignoriert wird (da die Konstruktion ihr eigenes `this` vorbereitet, wie in den Parametern von {{jsxref("Reflect.construct")}} zu sehen ist). Wenn die gebundene Funktion direkt konstruiert wird, wird [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) die Ziel-Funktion sein. (Das heißt, die gebundene Funktion ist für `new.target` transparent.)

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

Da eine gebundene Funktion jedoch nicht die [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) Eigenschaft hat, kann sie nicht als Basisklasse für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden.

```js example-bad
class Derived extends class {}.bind(null) {}
// TypeError: Class extends value does not have valid prototype property undefined
```

Wenn eine gebundene Funktion als rechter Operand von [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof) verwendet wird, greift `instanceof` auf die Ziel-Funktion (die intern in der gebundenen Funktion gespeichert ist) zu und liest deren `prototype`.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

Die gebundene Funktion hat die folgenden Eigenschaften:

- [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/length)
  - : Der `length` der Ziel-Funktion minus der Anzahl der gebundenen Argumente (ohne den `thisArg` Parameter), wobei 0 der minimale Wert ist.
- [`name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/name)
  - : Der `name` der Ziel-Funktion plus ein `"bound "` Präfix.

Die gebundene Funktion erbt auch die [Prototype-Kette](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) der Ziel-Funktion. Allerdings besitzt sie keine anderen eigenen Eigenschaften der Ziel-Funktion (wie [statische Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/static), wenn die Ziel-Funktion eine Klasse ist).

## Beispiele

### Erstellen einer gebundenen Funktion

Die einfachste Verwendung von `bind()` besteht darin, eine Funktion zu erstellen, die, egal wie sie aufgerufen wird, immer mit einem bestimmten `this` Wert aufgerufen wird.

Ein häufiger Fehler von neuen JavaScript-Programmierern ist es, eine Methode aus einem Objekt zu extrahieren und diese Funktion später aufzurufen und zu erwarten, dass sie das ursprüngliche Objekt als `this` verwendet (z.B. durch die Verwendung der Methode in callbackbasiertem Code).

Ohne besondere Vorkehrungen geht das ursprüngliche Objekt in der Regel verloren. Das Erstellen einer gebundenen Funktion aus der Funktion unter Verwendung des ursprünglichen Objekts löst dieses Problem elegant:

```js
// Top-level 'this' ist in Skripten an 'globalThis' gebunden.
this.x = 9;
const module = {
  x: 81,
  getX() {
    return this.x;
  },
};

// Der 'this' Parameter von 'getX' ist an 'module' gebunden.
console.log(module.getX()); // 81

const retrieveX = module.getX;
// Der 'this' Parameter von 'retrieveX' ist im Nicht-Strict-Modus an 'globalThis' gebunden.
console.log(retrieveX()); // 9

// Erstellen Sie eine neue Funktion 'boundGetX' mit dem 'this' Parameter, der an 'module' gebunden ist.
const boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81
```

> [!NOTE]
> Wenn Sie dieses Beispiel im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausführen, wird der `this` Parameter von `retrieveX` an `undefined` statt an `globalThis` gebunden, was dazu führt, dass der `retrieveX()`-Aufruf fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem ECMAScript-Modul ausführen, wird das Top-Level `this` an `undefined` statt an `globalThis` gebunden, was dazu führt, dass die Zuordnung `this.x = 9` fehlschlägt.
>
> Wenn Sie dieses Beispiel in einem Node CommonJS-Modul ausführen, wird das Top-Level `this` an `module.exports` statt an `globalThis` gebunden. Der `this` Parameter von `retrieveX` ist jedoch im Nicht-Strict-Modus immer noch an `globalThis` und im Strict-Modus an `undefined` gebunden. Daher gibt der `retrieveX()`-Aufruf im Nicht-Strict-Modus (Standard) `undefined` zurück, weil `this.x = 9` auf ein anderes Objekt (`module.exports`) schreibt als das, von dem `getX` liest (`globalThis`).

Tatsächlich sind einige eingebaute "Methoden" ebenfalls Getter, die gebundene Funktionen zurückgeben — ein bemerkenswertes Beispiel ist [`Intl.NumberFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format#using_format_with_map), das, wenn zugegriffen, eine gebundene Funktion zurückgibt, die direkt als Callback übergeben werden kann.

### Teilweise angewandte Funktionen

Die nächst einfachere Verwendung von `bind()` besteht darin, eine Funktion mit vorab festgelegten Anfangsargumenten zu erstellen.

Diese Argumente (falls vorhanden) folgen dem bereitgestellten `this`-Wert und werden dann an den Anfang der Argumente eingefügt, die an die Ziel-Funktion übergeben werden, gefolgt von den Argumenten, die an die gebundene Funktion übergeben werden, wenn sie aufgerufen wird.

```js
function list(...args) {
  return args;
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

console.log(list(1, 2, 3)); // [1, 2, 3]

console.log(addArguments(1, 2)); // 3

// Erstellen Sie eine Funktion mit einem voreingestellten Anfangsargument
const leadingThirtySevenList = list.bind(null, 37);

// Erstellen Sie eine Funktion mit einem voreingestellten ersten Argument.
const addThirtySeven = addArguments.bind(null, 37);

console.log(leadingThirtySevenList()); // [37]
console.log(leadingThirtySevenList(1, 2, 3)); // [37, 1, 2, 3]
console.log(addThirtySeven(5)); // 42
console.log(addThirtySeven(5, 10)); // 42
// (das letzte Argument 10 wird ignoriert)
```

### Mit setTimeout()

Standardmäßig wird das `this` Schlüsselwort innerhalb von {{domxref("setTimeout()")}} auf [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis) gesetzt, was in Browsern {{domxref("window")}} ist. Wenn man mit Klassenmethoden arbeitet, die erfordern, dass `this` sich auf Klasseninstanzen bezieht, kann man `this` explizit an die Callback-Funktion binden, um die Instanz beizubehalten.

```js
class LateBloomer {
  constructor() {
    this.petalCount = Math.floor(Math.random() * 12) + 1;
  }
  bloom() {
    // Bloom nach einer Verzögerung von 1 Sekunde deklarieren
    setTimeout(this.declare.bind(this), 1000);
  }
  declare() {
    console.log(`Ich bin eine schöne Blume mit ${this.petalCount} Blütenblättern!`);
  }
}

const flower = new LateBloomer();
flower.bloom();
// Nach 1 Sekunde wird 'flower.declare()' aufgerufen
```

Man kann auch [Pfeilfunktionen](/de/docs/Web/JavaScript/Reference/Functions/Arrow_functions) für diesen Zweck verwenden.

```js
class LateBloomer {
  bloom() {
    // Bloom nach einer Verzögerung von 1 Sekunde deklarieren
    setTimeout(() => this.declare(), 1000);
  }
}
```

### Gebundene Funktionen als Konstruktoren verwenden

Gebundene Funktionen sind automatisch für die Verwendung mit dem {{jsxref("Operators/new", "new")}} Operator geeignet, um neue Instanzen zu erstellen, die von der Ziel-Funktion erzeugt werden. Wenn eine gebundene Funktion verwendet wird, um einen Wert zu konstruieren, wird das bereitgestellte `this` ignoriert. Die bereitgestellten Argumente werden jedoch weiterhin dem Konstruktaufruf vorangestellt.

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

// Der Wert von thisArg ist egal, weil er ignoriert wird
const YAxisPoint = Point.bind(null, 0 /*x*/);

const axisPoint = new YAxisPoint(5);
axisPoint.toString(); // '0,5'

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new YAxisPoint(17, 42) instanceof Point; // true
```

Beachten Sie, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erzeugen, die mit {{jsxref("Operators/new", "new")}} verwendet werden kann. [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target), [`instanceof`](/de/docs/Web/JavaScript/Reference/Operators/instanceof), [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) etc. funktionieren alle wie erwartet, als ob der Konstruktor niemals gebunden wurde. Der einzige Unterschied besteht darin, dass er nicht mehr für [`extends`](/de/docs/Web/JavaScript/Reference/Classes/extends) verwendet werden kann.

Das bedeutet, dass Sie nichts Besonderes tun müssen, um eine gebundene Funktion zu erstellen, die einfach aufgerufen werden soll, auch wenn Sie lieber möchten, dass die gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufgerufen werden soll. Wird sie ohne `new` aufgerufen, wird das gebundene `this` plötzlich nicht ignoriert.

```js
const emptyObj = {};
const YAxisPoint = Point.bind(emptyObj, 0 /*x*/);

// Kann immer noch als normale Funktion aufgerufen werden
// (obwohl dies normalerweise unerwünscht ist)
YAxisPoint(13);

// Die Modifikationen an `this` sind jetzt von außen sichtbar
console.log(emptyObj); // { x: 0, y: 13 }
```

Wenn Sie eine gebundene Funktion nur mit {{jsxref("Operators/new", "new")}} aufrufen möchten oder sie nur ohne `new` aufrufen möchten, muss die Ziel-Funktion diese Einschränkung durchsetzen, z.B. durch Überprüfung von `new.target !== undefined` oder durch die Verwendung einer [Klasse](/de/docs/Web/JavaScript/Reference/Classes).

### Klassen binden

Die Verwendung von `bind()` auf Klassen bewahrt die meisten Semantiken der Klasse, mit der Ausnahme, dass alle statischen eigenen Eigenschaften der aktuellen Klasse verloren gehen. Da jedoch die Prototyp-Kette beibehalten wird, können Sie dennoch auf die vererbten statischen Eigenschaften der übergeordneten Klasse zugreifen.

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

`bind()` ist auch in Fällen hilfreich, in denen Sie eine Methode, die einen bestimmten `this` Wert erfordert, in eine einfache Hilfsfunktion umwandeln möchten, die den vorherigen `this` Parameter als normalen Parameter akzeptiert. Dies ähnelt der Funktionsweise von allgemeinen Hilfsfunktionen: anstatt `array.map(callback)` aufzurufen, verwenden Sie `map(array, callback)`, was Ihnen erlaubt, `map` mit einem array-ähnlichen Objekt zu verwenden, das keine echte Array ist (zum Beispiel [`arguments`](/de/docs/Web/JavaScript/Reference/Functions/arguments)), ohne `Object.prototype` zu verändern.

Nehmen Sie zum Beispiel {{jsxref("Array.prototype.slice()")}}, die Sie verwenden möchten, um ein array-ähnliches Objekt in ein echtes Array zu konvertieren. Sie könnten eine Abkürzung wie diese erstellen:

```js
const slice = Array.prototype.slice;

// ...

slice.call(arguments);
```

Beachten Sie, dass Sie `slice.call` nicht speichern und als einfache Funktion aufrufen können, da auch die `call()`-Methode ihren `this` Wert liest, der die Funktion ist, die sie aufrufen soll. In diesem Fall können Sie `bind()` verwenden, um den `this` Wert für `call()` zu binden. Im folgenden Stück Code ist `slice()` eine gebundene Version von {{jsxref("Function.prototype.call()")}}, mit dem `this` Wert, der an {{jsxref("Array.prototype.slice()")}} gebunden ist. Dadurch können zusätzliche `call()`-Aufrufe vermieden werden:

```js
// Gleich wie "slice" im vorherigen Beispiel
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
