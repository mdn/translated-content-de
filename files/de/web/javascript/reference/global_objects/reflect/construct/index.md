---
title: Reflect.construct()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/construct
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`Reflect.construct()`**-Methode ist eine statische Methode und funktioniert ähnlich wie der {{jsxref("Operators/new", "new")}}-Operator, jedoch als Funktion. Sie ist äquivalent zu einem Aufruf von `new target(...args)`. Zusätzlich erlaubt sie, einen anderen Wert für [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) anzugeben.

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
  - : Die Ziel-Funktion, die aufgerufen werden soll.
- `argumentsList`
  - : Ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects), das die Argumente angibt, mit denen `target` aufgerufen werden soll.
- `newTarget` {{optional_inline}}
  - : Der Wert des [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)-Ausdrucks innerhalb von `target`. Standardwert ist `target`. Im Allgemeinen ([siehe Beispiel](#ändern_von_new.target)) gibt `target` die _Logik_ zur Initialisierung des Objekts an, während `newTarget.prototype` das _Prototype_ des erzeugten Objekts angibt.

### Rückgabewert

Eine neue Instanz von `target` (oder `newTarget`, falls vorhanden), initialisiert durch `target` als Konstruktor mit der angegebenen `argumentsList`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `target` oder `newTarget` kein Konstruktor ist, oder wenn `argumentsList` kein Objekt ist.

## Beschreibung

`Reflect.construct()` bietet die reflektierende Semantik eines Konstruktaufrufs. Das heißt, `Reflect.construct(target, argumentsList, newTarget)` ist semantisch äquivalent zu:

```js
new target(...argumentsList);
```

Beachten Sie, dass beim Einsatz des `new`-Operators `target` und `newTarget` immer denselben Konstruktor darstellen – aber `Reflect.construct()` ermöglicht es, einen anderen Wert für [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target) zu übergeben. Konzeptionell ist `newTarget` die Funktion, auf der `new` aufgerufen wurde, und `newTarget.prototype` wird zum Prototype des erzeugten Objekts, während `target` der tatsächlich ausgeführte Konstruktor ist, um das Objekt zu initialisieren. Zum Beispiel kann `new.target` auch bei Vererbung von Klassen von dem aktuell ausgeführten Konstruktor abweichen.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}
class B extends A {}

new B(); // "B"
```

`Reflect.construct()` erlaubt es, einen Konstruktor mit einer variablen Anzahl von Argumenten aufzurufen. (Dies ist auch mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) bei einem normalen Konstruktaufruf möglich.)

```js
const obj = new Foo(...args);
const obj = Reflect.construct(Foo, args);
```

`Reflect.construct()` ruft die interne Methode `[[Construct]]` eines [Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) von `target` auf.

## Beispiele

### Verwendung von Reflect.construct()

```js
const d = Reflect.construct(Date, [1776, 6, 4]);
d instanceof Date; // true
d.getFullYear(); // 1776
```

### Ändern von new.target

Wenn `newTarget` übergeben wird, ändert dies den Wert von `new.target` innerhalb des Konstruktors. Das erzeugte Objekt wird eine Instanz von `newTarget` sein, nicht von `target`.

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

Natürlich gibt es keine starke Garantie über die Prototypenkette des erzeugten Objekts, da dies von der Implementierung des Konstruktors abhängt. Zum Beispiel, wenn der `target`-Konstruktor ein Objekt zurückgibt, dann wird dieses Objekt das erzeugte Objekt sein, unabhängig vom Wert von `newTarget`. Wenn `target` ein Proxy mit einer `construct`-Falle ist, kontrolliert die Falle vollständig den Konstruktionsprozess.

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

Ein gültiges `new.target` sollte eine Konstruktorfunktion mit einer [`prototype`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype)-Eigenschaft sein, aber Letzteres wird nicht erzwungen. Wenn der Wert der `prototype`-Eigenschaft kein Objekt ist, wird das initialisierte Objekt von `Object.prototype` erben.

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

### Reflect.construct() vs. Object.create()

Vor der Einführung von `Reflect` konnten Objekte unter Verwendung einer beliebigen Kombination von Konstruktoren und Prototypen mit {{jsxref("Object.create()")}} erstellt werden.

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

Das Endergebnis ist zwar dasselbe, aber es gibt einen wichtigen Unterschied im Prozess. Wenn `Object.create()` und {{jsxref("Function.prototype.apply()")}} verwendet werden, zeigt der `new.target`-Operator innerhalb der Funktion, die als Konstruktor benutzt wird, auf `undefined`, da das Schlüsselwort `new` nicht verwendet wird, um das Objekt zu erstellen. (Tatsächlich wird die [`apply`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply)-Semantik verwendet, nicht `construct`, obwohl normale Funktionen nahezu gleich funktionieren.)

Bei einem Aufruf von `Reflect.construct()` zeigt der `new.target`-Operator hingegen auf den `newTarget`-Parameter, falls angegeben, oder auf `target`, falls nicht.

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

- [Polyfill von `Reflect.construct` in `core-js`](https://github.com/zloirock/core-js#ecmascript-reflect)
- {{jsxref("Reflect")}}
- {{jsxref("Operators/new", "new")}}
- [`new.target`](/de/docs/Web/JavaScript/Reference/Operators/new.target)
- [`handler.construct()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct)
