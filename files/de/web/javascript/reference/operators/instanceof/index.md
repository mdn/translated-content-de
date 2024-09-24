---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jsSidebar("Operators")}}

Der **`instanceof`** Operator prüft, ob die `prototype` Eigenschaft eines Konstruktors irgendwo in der Prototypenkette eines Objekts erscheint. Der Rückgabewert ist ein boolescher Wert. Sein Verhalten kann mit [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) angepasst werden.

{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}

## Syntax

```js-nolint
object instanceof constructor
```

### Parameter

- `object`
  - : Das zu prüfende Objekt.
- `constructor`
  - : Konstruktor, gegen den getestet wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `constructor` kein Objekt ist. Wenn `constructor` keine [`[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode hat, muss es auch eine Funktion sein.

## Beschreibung

Der `instanceof` Operator prüft das Vorhandensein von `constructor.prototype` in der Prototypenkette von `object`. Dies bedeutet normalerweise (aber [nicht immer](#überschreibung_des_verhaltens_von_instanceof)), dass `object` mit `constructor` konstruiert wurde.

```js
// Konstruktoren definieren
function C() {}
function D() {}

const o = new C();

// wahr, weil: Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// falsch, weil D.prototype nirgends in o's Prototypenkette ist
o instanceof D;

o instanceof Object; // wahr, weil:
C.prototype instanceof Object; // wahr

// Zuweisung von `constructor.prototype`: Sie sollten dies
// in der Praxis selten tun.
C.prototype = {};
const o2 = new C();

o2 instanceof C; // wahr

// falsch, weil C.prototype nirgends mehr in
// o's Prototypenkette ist
o instanceof C;

D.prototype = new C(); // fügt C zur [[Prototype]]-Verknüpfung von D hinzu
const o3 = new D();
o3 instanceof D; // wahr
o3 instanceof C; // wahr, da C.prototype jetzt in o3s Prototypenkette ist
```

Beachten Sie, dass sich der Wert eines `instanceof` Tests ändern kann, wenn `constructor.prototype` nach der Erstellung des Objekts neu zugewiesen wird (was normalerweise nicht empfohlen wird). Es kann auch geändert werden, indem `object`'s Prototyp mit [`Object.setPrototypeOf`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) geändert wird.

Klassen verhalten sich auf die gleiche Weise, da Klassen auch die `prototype` Eigenschaft haben.

```js
class A {}
class B extends A {}

const o1 = new A();
// wahr, weil Object.getPrototypeOf(o1) === A.prototype
o1 instanceof A;
// falsch, weil B.prototype nirgends in o1's Prototypenkette ist
o1 instanceof B;

const o2 = new B();
// wahr, weil Object.getPrototypeOf(Object.getPrototypeOf(o2)) === A.prototype
o2 instanceof A;
// wahr, weil Object.getPrototypeOf(o2) === B.prototype
o2 instanceof B;
```

Bei [gebundenen Funktionen](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) sucht `instanceof` nach der `prototype` Eigenschaft der Ziel-Funktion, da gebundene Funktionen kein `prototype` haben.

```js
class Base {}
const BoundBase = Base.bind(null, 1, 2);
console.log(new Base() instanceof BoundBase); // wahr
```

### instanceof und Symbol.hasInstance

Wenn `constructor` eine [`Symbol.hasInstance`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance) Methode hat, wird die Methode vorrangig aufgerufen, mit `object` als einzigem Argument und `constructor` als `this`.

```js
// Diese Klasse erlaubt es, einfache Objekte als Instanzen dieser Klasse zu tarnen,
// solange das Objekt ein bestimmtes Flag als Eigenschaft hat.
class Forgeable {
  static isInstanceFlag = Symbol("isInstanceFlag");

  static [Symbol.hasInstance](obj) {
    return Forgeable.isInstanceFlag in obj;
  }
}

const obj = { [Forgeable.isInstanceFlag]: true };
console.log(obj instanceof Forgeable); // wahr
```

Da alle Funktionen standardmäßig von `Function.prototype` erben, legt die Methode [`Function.prototype[Symbol.hasInstance]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance) meist das Verhalten von `instanceof` fest, wenn die rechte Seite eine Funktion ist. Siehe die {{jsxref("Symbol.hasInstance")}} Seite für den genauen Algorithmus von `instanceof`.

### instanceof und mehrere Realms

JavaScript-Ausführungsumgebungen (Fenster, Frames, etc.) befinden sich jeweils in ihrem eigenen _Realm_. Das bedeutet, dass sie unterschiedliche eingebaute Objekte (unterschiedliches globales Objekt, unterschiedliche Konstruktoren, etc.) haben. Dies kann zu unerwarteten Ergebnissen führen. Zum Beispiel wird `[] instanceof window.frames[0].Array` `false` zurückgeben, da `Array.prototype !== window.frames[0].Array.prototype` und Arrays im aktuellen Realm vom ersteren erben.

Dies mag auf den ersten Blick nicht sinnvoll erscheinen, aber für Skripte, die mit mehreren Frames oder Fenstern arbeiten und Objekte über Funktionen von einem Kontext in einen anderen übergeben, wird dies ein gültiges und starkes Problem sein. Zum Beispiel können Sie sicher überprüfen, ob ein gegebenes Objekt tatsächlich ein Array ist, indem Sie {{jsxref("Array.isArray()")}} verwenden, ohne dabei den Ursprung zu beachten.

Zum Beispiel, um zu überprüfen, ob ein [`Node`](/de/docs/Web/API/Node) ein [`SVGElement`](/de/docs/Web/API/SVGElement) in einem anderen Kontext ist, können Sie `myNode instanceof myNode.ownerDocument.defaultView.SVGElement` verwenden.

## Beispiele

### Verwendung von instanceof mit String

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit `String` Objekten.

```js
const literalString = "This is a literal string";
const stringObject = new String("String created with constructor");

literalString instanceof String; // falsch, String-Primitiv ist kein String
stringObject instanceof String; // wahr

literalString instanceof Object; // falsch, String-Primitiv ist kein Objekt
stringObject instanceof Object; // wahr

stringObject instanceof Date; // falsch
```

### Verwendung von instanceof mit Date

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit `Date` Objekten.

```js
const myDate = new Date();

myDate instanceof Date; // wahr
myDate instanceof Object; // wahr
myDate instanceof String; // falsch
```

### Objekte, erstellt mit Object.create()

Das folgende Beispiel zeigt das Verhalten von `instanceof` mit Objekten, die mit {{jsxref("Object.create()")}} erstellt wurden.

```js
function Shape() {}

function Rectangle() {
  Shape.call(this); // super-Konstruktor aufrufen.
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

const rect = new Rectangle();

rect instanceof Object; // wahr
rect instanceof Shape; // wahr
rect instanceof Rectangle; // wahr
rect instanceof String; // falsch

const literalObject = {};
const nullObject = Object.create(null);
nullObject.name = "My object";

literalObject instanceof Object; // wahr, jedes Objektliteral hat Object.prototype als Prototyp
({}) instanceof Object; // wahr, gleicher Fall wie oben
nullObject instanceof Object; // falsch, Prototyp ist Ende der Prototypenkette (null)
```

### Demonstration, dass mycar vom Typ Car und Typ Object ist

Der folgende Code erstellt einen Objekttyp `Car` und eine Instanz dieses Objekttyps, `mycar`. Der `instanceof` Operator zeigt, dass das `mycar` Objekt vom Typ `Car` und vom Typ `Object` ist.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const mycar = new Car("Honda", "Accord", 1998);
const a = mycar instanceof Car; // gibt true zurück
const b = mycar instanceof Object; // gibt true zurück
```

### Kein instanceof

Um zu testen, ob ein Objekt kein `instanceof` eines bestimmten Konstruktors ist, können Sie Folgendes tun:

```js
if (!(mycar instanceof Car)) {
  // Etwas tun, wie:
  // mycar = new Car(mycar)
}
```

Dies ist wirklich anders als:

```js-nolint example-bad
if (!mycar instanceof Car) {
  // unerreichbarer Code
}
```

Dies wird immer `false` sein. (`!mycar` wird vor `instanceof` ausgewertet, sodass Sie immer versuchen, zu wissen, ob ein Boolescher Wert eine Instanz eines `Car` ist).

### Überschreibung des Verhaltens von instanceof

Ein häufiger Irrtum bei der Verwendung von `instanceof` ist der Glaube, dass, wenn `x instanceof C`, dann `x` mit `C` als Konstruktor erstellt wurde. Dies ist nicht wahr, da `x` direkt mit `C.prototype` als seinem Prototyp zugewiesen werden könnte. In diesem Fall, wenn Ihr Code [private Felder](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) von `C` aus `x` lesen würde, würde es immer noch fehlschlagen:

```js
class C {
  #value = "foo";
  static getValue(x) {
    return x.#value;
  }
}

const x = { __proto__: C.prototype };

if (x instanceof C) {
  console.log(C.getValue(x)); // TypeError: Kann privates Mitglied #value nicht aus einem Objekt lesen, dessen Klasse es nicht deklariert hat
}
```

Um dies zu vermeiden, können Sie das Verhalten von `instanceof` überschreiben, indem Sie der Klasse `C` eine `Symbol.hasInstance` Methode hinzufügen, sodass sie eine Markenprüfung mit [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) durchführt:

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
  // Läuft nicht, weil x kein C ist
  console.log(C.getValue(x));
}
```

Beachten Sie, dass Sie dieses Verhalten möglicherweise auf die aktuelle Klasse beschränken möchten; andernfalls könnte es zu falschen Positiven für Unterklassen führen:

```js
class D extends C {}
console.log(new C() instanceof D); // wahr; weil D [Symbol.hasInstance] von C erbt
```

Sie könnten dies tun, indem Sie überprüfen, ob `this` der aktuelle Konstruktor ist:

```js
class C {
  #value = "foo";

  static [Symbol.hasInstance](x) {
    return this === C && #value in x;
  }
}

class D extends C {}
console.log(new C() instanceof D); // falsch
console.log(new C() instanceof C); // wahr
console.log({ __proto__: C.prototype } instanceof C); // falsch
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [`typeof`](/de/docs/Web/JavaScript/Reference/Operators/typeof)
- {{jsxref("Symbol.hasInstance")}}
- {{jsxref("Object.prototype.isPrototypeOf")}}
