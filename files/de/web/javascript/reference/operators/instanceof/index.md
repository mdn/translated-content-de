---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
l10n:
  sourceCommit: 2c762771070a207d410a963166adf32213bc3a45
---

{{jsSidebar("Operators")}}

Der **`instanceof`** Operator testet, ob die `prototype`-Eigenschaft eines Konstruktors irgendwo in der Prototypenkette eines Objekts erscheint. Der Rückgabewert ist ein boolean (boolescher Wert). Sein Verhalten kann mit [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) angepasst werden.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Syntax

```js-nolint
object instanceof constructor
```

### Parameter

- `object`
  - : Das zu testende Objekt.
- `constructor`
  - : Konstruktor, gegen den getestet werden soll.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `constructor` kein Objekt ist. Wenn `constructor` keine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode hat, muss es auch eine Funktion sein.

## Beschreibung

Der `instanceof` Operator testet die Anwesenheit von `constructor.prototype` in der Prototypenkette von `object`. Dies bedeutet üblicherweise (obwohl [nicht immer](#überschreiben_des_verhaltens_von_instanceof)), dass `object` mit `constructor` konstruiert wurde.

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

Beachten Sie, dass sich der Wert eines `instanceof`-Tests ändern kann, wenn `constructor.prototype` neu zugewiesen wird, nachdem das Objekt erstellt wurde (was normalerweise nicht empfohlen wird). Er kann auch geändert werden, indem das Prototypen-Objekt von `object` mit [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) geändert wird.

Klassen verhalten sich auf die gleiche Weise, da Klassen ebenfalls die `prototype`-Eigenschaft haben.

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

Für [gebundene Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) sucht `instanceof` nach der `prototype`-Eigenschaft bei der Ziel-Funktion, da gebundene Funktionen kein `prototype` haben.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // true
```

### instanceof und Symbol.hasInstance

Wenn `constructor` eine [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)-Methode hat, wird die Methode vorrangig aufgerufen, mit `object` als einzigem Argument und `constructor` als `this`.

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

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt meistens die [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance)-Methode das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist. Siehe die {{jsxref("Symbol.hasInstance")}}-Seite für den genauen Algorithmus von `instanceof`.

### instanceof und mehrere Realms

JavaScript-Ausführungsumgebungen (Fenster, Frames, etc.) befinden sich jeweils in ihrem eigenen _Realm_. Das bedeutet, dass sie über unterschiedliche Built-ins (unterschiedliche globale Objekte, unterschiedliche Konstruktoren, etc.) verfügen. Dies kann zu unerwarteten Ergebnissen führen. Zum Beispiel wird `[] instanceof window.frames[0].Array` `false` zurückgeben, weil `Array.prototype !== window.frames[0].Array.prototype` und Arrays im aktuellen Realm von ersterem erben.

Dies mag zunächst unlogisch erscheinen, doch für Skripte, die mit mehreren Frames oder Fenstern arbeiten und Objekte von einem Kontext in einen anderen über Funktionen weitergeben, ist dies ein echtes und bedeutendes Problem. Zum Beispiel können Sie sicher überprüfen, ob ein gegebenes Objekt tatsächlich ein Array ist, indem Sie {{jsxref("Array.isArray()")}} verwenden und ignorieren, aus welchem Realm es stammt.

Um beispielsweise zu prüfen, ob ein [`Node`](/de/docs/Web/API/Node) ein [`SVGElement`](/de/docs/Web/API/SVGElement) in einem anderen Kontext ist, können Sie `myNode instanceof myNode.ownerDocument.defaultView.SVGElement` verwenden.

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

### Verwendung von instanceof mit Date

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit `Date`-Objekten.

```js
const myDate = new Date();

myDate instanceof Date; // true
myDate instanceof Object; // true
myDate instanceof String; // false
```

### Objekte, die mit Object.create() erzeugt wurden

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

### Demonstration, dass myCar vom Typ Car und vom Typ Object ist

Der folgende Code erstellt einen Objekttyp `Car` und eine Instanz dieses Objekttyps, `myCar`. Der `instanceof`-Operator zeigt, dass das `myCar`-Objekt vom Typ `Car` und vom Typ `Object` ist.

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

Um zu testen, ob ein Objekt kein `instanceof` eines bestimmten Konstruktors ist, kann man Folgendes tun:

```js
if (!(myCar instanceof Car)) {
  // Do something, like:
  // myCar = new Car(myCar)
}
```

Dies ist wirklich verschieden von:

```js-nolint example-bad
if (!myCar instanceof Car) {
  // unreachable code
}
```

Dies wird immer `false` sein. (`!myCar` wird vor `instanceof` ausgewertet, sodass Sie immer versuchen, festzustellen, ob ein Boolean eine Instanz von `Car` ist).

### Überschreiben des Verhaltens von instanceof

Ein häufiger Fehler bei der Verwendung von `instanceof` ist die Annahme, dass, wenn `x instanceof C`, dann `x` mit `C` als Konstruktor erstellt wurde. Dies ist nicht wahr, da `x` direkt mit `C.prototype` als seinem Prototyp zugewiesen werden könnte. In diesem Fall würde Ihr Code fehlschlagen, wenn er [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) von `C` aus `x` liest:

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

Um dies zu vermeiden, können Sie das Verhalten von `instanceof` überschreiben, indem Sie eine `Symbol.hasInstance`-Methode zu `C` hinzufügen, damit sie eine markierte Überprüfung mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) durchführt:

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

Beachten Sie, dass Sie dieses Verhalten auf die aktuelle Klasse beschränken sollten, da es sonst zu falsch positiven Ergebnissen für Unterklassen führen könnte:

```js
class D extends C {}
console.log(new C() instanceof D); // true; because D inherits [Symbol.hasInstance] from C
```

Sie könnten dies tun, indem Sie prüfen, ob `this` der aktuelle Konstruktor ist:

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
