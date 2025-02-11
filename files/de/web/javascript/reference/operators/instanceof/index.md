---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Der **`instanceof`** Operator überprüft, ob die `prototype`-Eigenschaft eines Konstruktors irgendwo in der Prototypkette eines Objekts vorkommt. Der Rückgabewert ist ein boolescher Wert. Sein Verhalten kann mit [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) angepasst werden.

{{InteractiveExample("JavaScript Demo: Expressions - instanceof")}}

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
  - : Das zu testende Objekt.
- `constructor`
  - : Der Konstruktor, gegen den geprüft wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `constructor` kein Objekt ist. Falls `constructor` keine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode hat, muss er außerdem eine Funktion sein.

## Beschreibung

Der `instanceof` Operator überprüft das Vorhandensein von `constructor.prototype` in der Prototypkette von `object`. Dies bedeutet normalerweise (wenn auch [nicht immer](#überschreibung_des_verhaltens_von_instanceof)), dass `object` mit `constructor` erstellt wurde.

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

Beachten Sie, dass sich der Wert eines `instanceof`-Tests ändern kann, wenn `constructor.prototype` nach der Erstellung des Objekts neu zugewiesen wird (was normalerweise nicht empfohlen wird). Er kann auch durch die Änderung des Prototyps von `object` mithilfe von [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) beeinflusst werden.

Klassen verhalten sich auf die gleiche Weise, da Klassen ebenfalls die `prototype`-Eigenschaft besitzen.

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

Für [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) überprüft `instanceof` die `prototype`-Eigenschaft der Ziel-Funktion, da gebundene Funktionen keine eigene `prototype`-Eigenschaft haben.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

### instanceof und Symbol.hasInstance

Falls `constructor` eine [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode hat, wird diese Methode vorrangig aufgerufen, wobei `object` ihr einziges Argument ist und `constructor` als `this` verwendet wird.

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

Da alle Funktionen standardmäßig von `Function.prototype` erben, bestimmt in den meisten Fällen die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) das Verhalten von `instanceof`, wenn die rechte Seite eine Funktion ist. Siehe die Seite {{jsxref("Symbol.hasInstance")}} für den genauen Algorithmus von `instanceof`.

### instanceof und mehrere Realms

JavaScript-Ausführungsumgebungen (Fenster, Frames usw.) existieren jeweils in ihrem eigenen _Realm_. Dies bedeutet, dass sie unterschiedliche Built-ins (unterschiedliche globale Objekte, verschiedene Konstruktoren usw.) haben. Dies kann zu unerwarteten Ergebnissen führen. Zum Beispiel gibt `[] instanceof window.frames[0].Array` `false` zurück, da `Array.prototype !== window.frames[0].Array.prototype` und Arrays im aktuellen Realm von ersterem erben.

Dies mag zunächst keinen Sinn ergeben, ist jedoch für Skripte, die mit mehreren Frames oder Fenstern arbeiten und Objekte über Funktionen von einem Kontext in einen anderen übergeben, ein relevantes und häufiges Problem. Beispielsweise können Sie sicher überprüfen, ob ein gegebenes Objekt tatsächlich ein Array ist, indem Sie {{jsxref("Array.isArray()")}} verwenden, unabhängig davon, aus welchem Realm es stammt.

Um beispielsweise zu überprüfen, ob ein [`Node`](/de/docs/Web/API/Node) in einem anderen Kontext ein [`SVGElement`](/de/docs/Web/API/SVGElement) ist, können Sie `myNode instanceof myNode.ownerDocument.defaultView.SVGElement` verwenden.

## Beispiele

### Verwendung von instanceof mit String

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit `String`-Objekten.

```js
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // false, string primitive is not a String
stringObject instanceof String; // true

literalString instanceof Object; // false, string primitive is not an Object
stringObject instanceof Object; // true

stringObject instanceof Date; // false
```

### Verwendung von instanceof mit Map

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit `Map`-Objekten.

```js
const myMap = new Map();

myMap instanceof Map; // true
myMap instanceof Object; // true
myMap instanceof String; // false
```

### Objekte, die mit Object.create() erstellt wurden

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit Objekten, die mit {{jsxref("Object.create()")}} erstellt wurden.

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

### Demonstration, dass myCar von Typ Car und Typ Object ist

Der folgende Code erstellt einen Objekttyp `Car` sowie eine Instanz dieses Objekttyps, `myCar`. Der `instanceof`-Operator zeigt, dass das `myCar`-Objekt vom Typ `Car` und vom Typ `Object` ist.

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

### Kein instanceof

Um zu testen, ob ein Objekt **nicht** ein `instanceof` eines bestimmten Konstruktors ist, können Sie Folgendes tun:

```js
if (!(myCar instanceof Car)) {
  // Do something, like:
  // myCar = new Car(myCar)
}
```

Dies unterscheidet sich stark von:

```js-nolint example-bad
if (!myCar instanceof Car) {
  // unreachable code
}
```

Dies wird immer `false` sein. (`!myCar` wird vor `instanceof` ausgewertet, sodass Sie immer prüfen, ob ein boolescher Wert eine Instanz von `Car` ist).

### Überschreibung des Verhaltens von instanceof

Ein häufiger Irrtum bei der Verwendung von `instanceof` ist die Annahme, dass, wenn `x instanceof C` wahr ist, `x` mit `C` als Konstruktor erstellt wurde. Dies ist nicht unbedingt der Fall, da `x` direkt mit `C.prototype` als Prototyp zugewiesen werden könnte. In diesem Fall würde Ihr Code beim Zugriff auf [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) von `C` aus `x` dennoch fehlschlagen:

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

Um dies zu vermeiden, können Sie das Verhalten von `instanceof` überschreiben, indem Sie `C` eine `Symbol.hasInstance`-Methode hinzufügen, sodass diese eine Markenprüfung mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) durchführt:

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

Beachten Sie, dass Sie dieses Verhalten auf die aktuelle Klasse beschränken sollten; andernfalls könnten falsche positive Ergebnisse bei Unterklassen auftreten:

```js
class D extends C {}
console.log(new C() instanceof D); // true; because D inherits [Symbol.hasInstance] from C
```

Sie könnten dies erreichen, indem Sie überprüfen, ob `this` der aktuelle Konstruktor ist:

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
