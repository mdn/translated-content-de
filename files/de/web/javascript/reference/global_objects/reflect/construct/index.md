---
title: Reflect.construct()
short-title: construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Reflect.construct()`** ähnelt dem Operator {{jsxref("new")}}, ist aber eine Funktion. Sie entspricht dem Aufruf `new target(...args)`. Zusätzlich können Sie damit einen anderen Wert für [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) angeben.

{{InteractiveExample("JavaScript Demo: Reflect.construct()", "taller")}}

```js interactive-example
function func1(a, b, c) {
  this.sum = a + b + c;
}

const args = [1, 2, 3];
const object1 = new func1(...args);
const object2 = Reflect.construct(func1, args);

console.log(object2.sum);
// Expected output: 6

console.log(object1.sum);
// Expected output: 6
```

## Syntax

```js-nolint
Reflect.construct(target, argumentsList)
Reflect.construct(target, argumentsList, newTarget)
```

### Parameter

- `target`
  - : Die aufzurufende Zielfunktion.
- `argumentsList`
  - : Ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects), das die Argumente angibt, mit denen `target` aufgerufen werden soll.
- `newTarget` {{optional_inline}}
  - : Der Wert des Ausdrucks [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) innerhalb von `target`. Der Standardwert ist `target`. Im Allgemeinen ([siehe Beispiel](#new.target_ändern)) bestimmt `target` die _Logik_ zur Initialisierung des Objekts, während `newTarget.prototype` den _Prototyp_ des erzeugten Objekts bestimmt.

### Rückgabewert

Eine neue Instanz von `target` (oder `newTarget`, falls angegeben), die durch `target` als Konstruktor mit der angegebenen `argumentsList` initialisiert wurde.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `newTarget` kein Konstruktor ist oder wenn `argumentsList` kein Objekt ist.

## Beschreibung

`Reflect.construct()` stellt die reflektierende Semantik eines Konstruktoraufrufs bereit. Das heißt, `Reflect.construct(target, argumentsList, newTarget)` ist semantisch gleichbedeutend mit:

```js
new target(...argumentsList);
```

Beachten Sie, dass bei Verwendung des Operators `new` `target` und `newTarget` immer derselbe Konstruktor sind. Mit `Reflect.construct()` können Sie hingegen einen anderen Wert für [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) übergeben. Konzeptionell ist `newTarget` die Funktion, auf die `new` angewendet wurde, und `newTarget.prototype` wird zum Prototyp des erzeugten Objekts. `target` ist dagegen der Konstruktor, der tatsächlich ausgeführt wird, um das Objekt zu initialisieren. Bei Klassenvererbung kann sich `new.target` beispielsweise ebenfalls vom gerade ausgeführten Konstruktor unterscheiden.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {}

new B(); // "B"
```

Mit `Reflect.construct()` können Sie einen Konstruktor mit einer variablen Anzahl von Argumenten aufrufen. (Das ist bei einem gewöhnlichen Konstruktoraufruf auch mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) möglich.)

```js
const obj = new Foo(...args);
const obj = Reflect.construct(Foo, args);
```

`Reflect.construct()` ruft die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Construct]]` von `target` auf.

## Beispiele

### Reflect.construct() verwenden

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### new.target ändern

Wenn `newTarget` übergeben wird, ändert sich der Wert von `new.target` innerhalb des Konstruktors. Das erzeugte Objekt ist dann eine Instanz von `newTarget`, nicht von `target`.

```js
function OneClass() {
  console.log("OneClass executed");
  console.log(`new.target is ${new.target.name}`);
}

function OtherClass() {
  console.log("OtherClass executed");
  console.log(`new.target is ${new.target.name}`);
}

const obj1 = Reflect.construct(OneClass, []);
// Logs:
// OneClass executed
// new.target is OneClass
console.log(obj1 instanceof OneClass); // true

const obj2 = Reflect.construct(OneClass, [], OtherClass);
// Logs:
// OneClass executed
// new.target is OtherClass
console.log(obj2 instanceof OtherClass); // true
console.log(obj2 instanceof OneClass); // false
```

Die Prototypkette des erzeugten Objekts ist allerdings nicht garantiert, da sie von der Implementierung des Konstruktors abhängt. Gibt der Konstruktor `target` beispielsweise ein Objekt zurück, ist dieses Objekt das erzeugte Objekt – unabhängig vom Wert von `newTarget`. Ist `target` ein Proxy mit einem `construct`-Trap, steuert dieser Trap den Erzeugungsprozess vollständig.

```js
function OneClass() {
  return { name: "one" };
}

function OtherClass() {
  return { name: "other" };
}

const obj1 = Reflect.construct(OneClass, [], OtherClass);
console.log(obj1.name); // 'one'
console.log(obj1 instanceof OneClass); // false
console.log(obj1 instanceof OtherClass); // false
```

Ein gültiges `new.target` sollte eine Konstruktorfunktion mit einer [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft sein. Letzteres wird jedoch nicht erzwungen. Ist der Wert der `prototype`-Eigenschaft kein Objekt, erbt das initialisierte Objekt von `Object.prototype`.

```js
function OneClass() {
  console.log("OneClass executed");
  console.log(`new.target is ${new.target.name}`);
}

function OtherClass() {
  console.log("OtherClass executed");
  console.log(`new.target is ${new.target.name}`);
}

OtherClass.prototype = null;

const obj = Reflect.construct(OneClass, [], OtherClass);
// Logs:
// OneClass executed
// new.target is OtherClass
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true
```

### Reflect.construct() im Vergleich zu Object.create()

Vor der Einführung von `Reflect` konnten Objekte mit einer beliebigen Kombination aus Konstruktoren und Prototypen mithilfe von {{jsxref("Object.create()")}} erzeugt werden.

```js
function OneClass() {
  this.name = "one";
}

function OtherClass() {
  this.name = "other";
}

const args = [];
const obj1 = Reflect.construct(OneClass, args, OtherClass);
const obj2 = Object.create(OtherClass.prototype);
OneClass.apply(obj2, args);

console.log(obj1.name); // 'one'
console.log(obj2.name); // 'one'

console.log(obj1 instanceof OneClass); // false
console.log(obj2 instanceof OneClass); // false

console.log(obj1 instanceof OtherClass); // true
console.log(obj2 instanceof OtherClass); // true
```

Obwohl das Endergebnis dasselbe ist, gibt es einen wichtigen Unterschied im Ablauf. Bei Verwendung von `Object.create()` und {{jsxref("Function.prototype.apply()")}} hat der Operator `new.target` innerhalb der als Konstruktor verwendeten Funktion den Wert `undefined`, da das Objekt nicht mit dem Schlüsselwort `new` erzeugt wird. (Tatsächlich wird dabei die [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)-Semantik statt der `construct`-Semantik verwendet, auch wenn sich gewöhnliche Funktionen in beiden Fällen nahezu gleich verhalten.)

Beim Aufruf von `Reflect.construct()` verweist der Operator `new.target` dagegen auf den Parameter `newTarget`, sofern dieser angegeben wurde, andernfalls auf `target`.

```js
function OneClass() {
  console.log("OneClass");
  console.log(new.target);
}
function OtherClass() {
  console.log("OtherClass");
  console.log(new.target);
}

const obj1 = Reflect.construct(OneClass, args);
// Logs:
// OneClass
// function OneClass { ... }

const obj2 = Reflect.construct(OneClass, args, OtherClass);
// Logs:
// OneClass
// function OtherClass { ... }

const obj3 = Object.create(OtherClass.prototype);
OneClass.apply(obj3, args);
// Output:
//     OneClass
//     undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Reflect.construct` in `core-js`](https://core-js.io/docs/features/ecmascript/reflect)
- {{jsxref("Reflect")}}
- {{jsxref("new")}}
- [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)
- [`handler.construct()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
