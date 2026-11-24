---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Der Operator **`instanceof`** prüft, ob die Eigenschaft `prototype` eines Konstruktors irgendwo in der Prototypkette eines Objekts vorkommt. Der Rückgabewert ist ein boolescher Wert. Sein Verhalten kann mit [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) angepasst werden.

{{InteractiveExample("JavaScript Demo: instanceof operator")}}

```js interactive-example
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
```

## Syntax

```js-nolint
object instanceof constructor
```

### Parameter

- `object`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 9 (Vergleichsoperatoren), dessen Wert geprüft wird.
- `constructor`
  - : Ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 10 (bitweise Verschiebung), der den Konstruktor ergibt, gegen den geprüft werden soll, oder ein Objekt mit einer [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode.

### Rückgabewert

Ein boolescher Wert, der angibt, ob `constructor` das Objekt `object` als Instanz betrachtet. Bei einem gewöhnlichen Konstruktor mit Standardverhalten wird dazu geprüft, ob `constructor.prototype` in der Prototypkette von `object` vorkommt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `constructor` kein Objekt ist. Wenn `constructor` keine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode besitzt, muss `constructor` außerdem eine Funktion sein.

## Beschreibung

Der Operator `instanceof` prüft, ob `constructor.prototype` in der Prototypkette von `object` vorkommt. Das bedeutet normalerweise (wenn auch [nicht immer](#das_verhalten_von_instanceof_überschreiben)), dass `object` mit `constructor` erstellt wurde.

```js
// defining constructors
function C() {}
function D() {}

const o = new C();

// true, because: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, because D.prototype is nowhere in o's prototype chain
o instanceof D;

o instanceof Object; // true, because:
C.prototype instanceof Object; // true

// Re-assign `constructor.prototype`: you should
// rarely do this in practice.
C.prototype = {};
const o2 = new C();

o2 instanceof C; // true

// false, because C.prototype is nowhere in
// o's prototype chain anymore
o instanceof C;

D.prototype = new C(); // add C to [[Prototype]] linkage of D
const o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true since C.prototype is now in o3's prototype chain
```

Beachten Sie, dass sich das Ergebnis einer `instanceof`-Prüfung ändern kann, wenn `constructor.prototype` nach dem Erstellen des Objekts neu zugewiesen wird (wovon in der Regel abgeraten wird). Es kann sich auch ändern, wenn die Prototypkette von `object` mithilfe von [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) geändert wird.

Klassen verhalten sich genauso, da auch sie die Eigenschaft `prototype` besitzen.

```js
class A {}
class B extends A {}

const o1 = new A();
// true, because Object.getPrototypeOf(o1) === A.prototype
o1 instanceof A;
// false, because B.prototype is nowhere in o1's prototype chain
o1 instanceof B;

const o2 = new B();
// true, because Object.getPrototypeOf(Object.getPrototypeOf(o2)) === A.prototype
o2 instanceof A;
// true, because Object.getPrototypeOf(o2) === B.prototype
o2 instanceof B;
```

Bei [gebundenen Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) sucht `instanceof` die Eigenschaft `prototype` auf der Zielfunktion, da gebundene Funktionen kein `prototype` besitzen.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

### instanceof und Symbol.hasInstance

Wenn `constructor` eine [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode besitzt, wird diese vorrangig aufgerufen, mit `object` als einzigem Argument und `constructor` als `this`.

```js
// This class allows plain objects to be disguised as this class's instance,
// as long as the object has a particular flag as its property.
class Forgeable {
  static isInstanceFlag = Symbol("isInstanceFlag");

  static [Symbol.hasInstance](obj) {
    return Forgeable.isInstanceFlag in obj;
  }
}

const obj = { [Forgeable.isInstanceFlag]: true };
console.log(obj instanceof Forgeable); // true
```

Da alle Funktionen standardmäßig von `Function.prototype` erben, bestimmt meist die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) das Verhalten von `instanceof`, wenn die rechte Seite eine Funktion ist. Den genauen Algorithmus von `instanceof` finden Sie auf der Seite zu {{jsxref("Symbol.hasInstance")}}.

### instanceof und mehrere Realms

JavaScript-Ausführungsumgebungen (Fenster, Frames usw.) befinden sich jeweils in einem eigenen _Realm_. Das bedeutet, dass sie unterschiedliche integrierte Objekte haben (unterschiedliche globale Objekte, Konstruktoren usw.). Das kann zu unerwarteten Ergebnissen führen. Beispielsweise gibt `[] instanceof window.frames[0].Array` den Wert `false` zurück, weil `Array.prototype !== window.frames[0].Array.prototype` gilt und Arrays im aktuellen Realm von Ersterem erben.

Das ist zunächst möglicherweise nicht offensichtlich. Für Skripte, die mit mehreren Frames oder Fenstern arbeiten und Objekte über Funktionen von einem Kontext in einen anderen übergeben, kann es jedoch ein erhebliches Problem darstellen. Um unabhängig vom Realm zuverlässig zu prüfen, ob ein Objekt tatsächlich ein Array ist, können Sie beispielsweise {{jsxref("Array.isArray()")}} verwenden.

Um etwa zu prüfen, ob ein [`Node`](/de/docs/Web/API/Node) in einem anderen Kontext ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist, können Sie `myNode instanceof myNode.ownerDocument.defaultView.SVGElement` verwenden.

## Beispiele

### instanceof mit String verwenden

Das folgende Beispiel zeigt das Verhalten von `instanceof` bei `String`-Objekten.

```js
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // false, string primitive is not a String
stringObject instanceof String; // true

literalString instanceof Object; // false, string primitive is not an Object
stringObject instanceof Object; // true

stringObject instanceof Date; // false
```

### instanceof mit Map verwenden

Das folgende Beispiel zeigt das Verhalten von `instanceof` bei `Map`-Objekten.

```js
const myMap = new Map();

myMap instanceof Map; // true
myMap instanceof Object; // true
myMap instanceof String; // false
```

### Mit Object.create() erstellte Objekte

Das folgende Beispiel zeigt das Verhalten von `instanceof` bei Objekten, die mit {{jsxref("Object.create()")}} erstellt wurden.

```js
function Shape() {}

function Rectangle() {
  Shape.call(this); // call super constructor.
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

rect instanceof Object; // true
rect instanceof Shape; // true
rect instanceof Rectangle; // true
rect instanceof String; // false

const literalObject = {};
const nullObject = Object.create(null);
nullObject.name = "My object";

literalObject instanceof Object; // true, every object literal has Object.prototype as prototype
({}) instanceof Object; // true, same case as above
nullObject instanceof Object; // false, prototype is end of prototype chain (null)
```

### Zeigen, dass myCar vom Typ Car und vom Typ Object ist

Der folgende Code erstellt einen Objekttyp `Car` und eine Instanz dieses Objekttyps namens `myCar`. Der Operator `instanceof` zeigt, dass das Objekt `myCar` sowohl vom Typ `Car` als auch vom Typ `Object` ist.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const myCar = new Car("Honda", "Accord", 1998);
const a = myCar instanceof Car; // returns true
const b = myCar instanceof Object; // returns true
```

### Keine instanceof-Instanz

Um zu prüfen, ob ein Objekt **keine** Instanz eines bestimmten Konstruktors im Sinne von `instanceof` ist, können Sie Folgendes verwenden:

```js
if (!(myCar instanceof Car)) {
  // Do something, like:
  // myCar = new Car(myCar)
}
```

Das unterscheidet sich deutlich von:

```js-nolint example-bad
if (!myCar instanceof Car) {
  // unreachable code
}
```

Dieser Ausdruck ergibt immer `false`. (`!myCar` wird vor `instanceof` ausgewertet. Daher wird geprüft, ob ein boolescher Wert eine Instanz von `Car` ist.)

### Das Verhalten von instanceof überschreiben

Ein häufiger Irrtum bei der Verwendung von `instanceof` ist die Annahme, dass `x` mit `C` als Konstruktor erstellt wurde, wenn `x instanceof C` gilt. Das stimmt nicht, denn `C.prototype` könnte `x` direkt als Prototyp zugewiesen worden sein. Wenn Ihr Code in diesem Fall versucht, [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) von `C` aus `x` zu lesen, schlägt dies dennoch fehl:

```js
class C {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  console.log(C.getValue(x)); // TypeError: Cannot read private member #value from an object whose class did not declare it
}
```

Um das zu vermeiden, können Sie das Verhalten von `instanceof` überschreiben, indem Sie `C` eine `Symbol.hasInstance`-Methode hinzufügen, die mithilfe von [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) prüft, ob das private Feld vorhanden ist:

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return #value in x;
  }

  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  // Doesn't run, because x is not a C
  console.log(C.getValue(x));
}
```

Beachten Sie, dass Sie dieses Verhalten möglicherweise auf die aktuelle Klasse beschränken sollten. Andernfalls kann es bei Unterklassen zu falsch positiven Ergebnissen kommen:

```js
class D extends C {}
console.log(new C() instanceof D); // true; because D inherits [Symbol.hasInstance] from C
```

Dazu können Sie prüfen, ob `this` der aktuelle Konstruktor ist:

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return this === C && #value in x;
  }
}

class D extends C {}
console.log(new C() instanceof D); // false
console.log(new C() instanceof C); // true
console.log({ __proto__: C.prototype } instanceof C); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
