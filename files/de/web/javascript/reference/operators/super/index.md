---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 20093e6d064fe1a7efd57e70b99b4af9bb5fa970
---

Das Schlüsselwort **`super`** wird verwendet, um auf Eigenschaften des [[Prototype]] eines Objektliterals oder einer Klasse zuzugreifen oder den Konstruktor einer Oberklasse aufzurufen.

Die Ausdrücke `super.prop` und `super[expr]` sind in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) gültig, sowohl in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Der Ausdruck `super(...args)` ist in Klassenkonstruktoren gültig.

{{InteractiveExample("JavaScript Demo: super expression", "taller")}}

```js interactive-example
class Foo {
  constructor(name) {
    this.name = name;
  }

  getNameSeparator() {
    return "-";
  }
}

class FooBar extends Foo {
  constructor(name, index) {
    super(name);
    this.index = index;
  }

  // Does not get called
  getNameSeparator() {
    return "/";
  }

  getFullName() {
    return this.name + super.getNameSeparator() + this.index;
  }
}

const firstFooBar = new FooBar("foo", 1);

console.log(firstFooBar.name);
// Expected output: "foo"

console.log(firstFooBar.getFullName());
// Expected output: "foo-1"
```

## Syntax

```js-nolint
super()
super(arg1)
super(arg1, arg2)
super(arg1, arg2, /* …, */ argN)

super.propertyOnParent
super[expression]
```

### Parameter

- `arg1`, `arg2`, …, `argN`
  - : Jedes Argument für den Konstruktor der Oberklasse kann ein [Spread-Argument](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) oder ein Ausdruck mit einer [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table) von mindestens 2 (Zuweisung) sein.
- `propertyOnParent`
  - : Der [Bezeichnername](/de/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) der Eigenschaft, auf die zugegriffen werden soll.
- `expression`
  - : Ein Ausdruck mit beliebiger [Priorität](/de/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table). Sein Wert wird in einen Eigenschaftsschlüssel umgewandelt (einen [String](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) oder ein Symbol).

### Rückgabewert

Ein Aufruf von `super()` gibt das Objekt zurück, das im Konstruktor der abgeleiteten Klasse zu `this` wird.

Die Formen für den Eigenschaftszugriff erzeugen eine Referenz auf die angegebene Eigenschaft in der Prototypkette, wobei das aktuelle `this` als Empfänger dient.

## Beschreibung

Das Schlüsselwort `super` kann auf zwei Arten verwendet werden: als „Funktionsaufruf“ (`super(...args)`) oder als „Eigenschaftssuche“ (`super.prop` und `super[expr]`).

> [!NOTE]
> `super` ist ein Schlüsselwort, und diese Formen sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototypobjekt verweist. Der Versuch, `super` selbst auszulesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im Rumpf des [Konstruktors](/de/docs/Web/JavaScript/Reference/Classes/constructor) einer abgeleiteten Klasse (mit `extends`) kann das Schlüsselwort `super` als „Funktionsaufruf“ (`super(...args)`) auftreten. Dieser muss erfolgen, bevor das Schlüsselwort `this` verwendet wird und bevor der Konstruktor zurückkehrt. Er ruft den Konstruktor der Oberklasse auf und bindet deren öffentliche Felder. Anschließend kann der Konstruktor der abgeleiteten Klasse weiter auf `this` zugreifen und es verändern.

Die Form für die „Eigenschaftssuche“ kann verwendet werden, um auf Methoden und Eigenschaften des [[Prototype]] eines Objektliterals oder einer Klasse zuzugreifen. Innerhalb eines Klassenrumpfs kann `super` entweder auf den Konstruktor der Oberklasse selbst oder auf dessen `prototype` verweisen, je nachdem, ob der Ausführungskontext die Instanzerstellung oder die Klasseninitialisierung ist. Weitere Einzelheiten finden Sie im Abschnitt „Beispiele“.

Beachten Sie, dass die Referenz von `super` durch die Klasse oder das Objektliteral bestimmt wird, in der bzw. dem `super` deklariert wurde, und nicht durch das Objekt, auf dem die Methode aufgerufen wird. Daher ändert das Lösen oder erneute Binden einer Methode die Referenz von `super` darin nicht (wohl aber die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)). Sie können sich `super` als Variable im Gültigkeitsbereich der Klasse oder des Objektliterals vorstellen, über die die Methoden eine Closure bilden. (Beachten Sie jedoch auch, dass es sich, wie oben erläutert, tatsächlich nicht um eine Variable handelt.)

Wenn Eigenschaften über `super` gesetzt werden, werden sie stattdessen auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieser Codeausschnitt stammt aus dem [Klassenbeispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, damit die Konstruktorbestandteile, die `Rectangle` und `Square` gemeinsam haben, nicht dupliziert werden müssen.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    // Here, it calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    super(length, length);

    // Note: In derived classes, super() must be called before you
    // can use 'this'. Moving this to the top causes a ReferenceError.
    this.name = "Square";
  }
}
```

### Aufrufen statischer Methoden über super

Sie können `super` auch verwenden, um [statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden aufzurufen.

```js
class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### Zugriff auf super bei der Deklaration von Klassenfeldern

Auf `super` kann auch während der Initialisierung von Klassenfeldern zugegriffen werden. Die Referenz von `super` hängt davon ab, ob das aktuelle Feld ein Instanzfeld oder ein statisches Feld ist.

```js
class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField; // 90
}
```

Beachten Sie, dass Instanzfelder auf der Instanz und nicht auf dem `prototype` des Konstruktors gesetzt werden. Daher können Sie mit `super` nicht auf ein Instanzfeld einer Oberklasse zugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` `undefined` statt 10, weil `baseField` als eigene Eigenschaft der `Base`-Instanz und nicht auf `Base.prototype` definiert ist. `super` sucht in diesem Kontext nur auf `Base.prototype` nach Eigenschaften, da dies der [[Prototype]] von `Extended.prototype` ist.

### Das Löschen von Eigenschaften über super löst einen Fehler aus

Sie können den [Operator `delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) nicht zusammen mit `super.prop` oder `super[expr]` verwenden, um eine Eigenschaft der Oberklasse zu löschen – dies löst einen {{jsxref("ReferenceError")}} aus.

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // this is bad
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### Verwendung von super.prop in Objektliteralen

`super` kann auch in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Notation verwendet werden. In diesem Beispiel definieren zwei Objekte jeweils eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert mithilfe von {{jsxref("Object.setPrototypeOf()")}}: Damit lässt sich der Prototyp von `obj2` auf `obj1` setzen, sodass `super` `method1` auf `obj1` finden kann.

```js
const obj1 = {
  method1() {
    console.log("method 1");
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // Logs "method 1"
```

### Methoden, die super.prop lesen, verhalten sich nach dem Binden an andere Objekte nicht anders

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`. Das bedeutet, dass die Eigenschaft immer auf dem Prototyp der Objektliteral- oder Klassendeklaration gesucht wird. Das Lösen oder erneute Binden einer Methode ändert die Referenz von `super` nicht.

```js
class Base {
  baseGetX() {
    return 1;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}

const e = new Extended();
console.log(e.getX()); // 1
const { getX } = e;
console.log(getX()); // 1
```

Dasselbe gilt für Objektliterale.

```js
const parent1 = { prop: 1 };
const parent2 = { prop: 2 };

const child = {
  myParent() {
    console.log(super.prop);
  },
};

Object.setPrototypeOf(child, parent1);
child.myParent(); // Logs "1"

const myParent = child.myParent;
myParent(); // Still logs "1"

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // Still logs "1"
```

Nur wenn die gesamte Vererbungskette neu festgelegt wird, ändert sich die Referenz von `super`.

```js
class Base {
  baseGetX() {
    return 1;
  }
  static staticBaseGetX() {
    return 3;
  }
}
class AnotherBase {
  baseGetX() {
    return 2;
  }
  static staticBaseGetX() {
    return 4;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
  static staticGetX() {
    return super.staticBaseGetX();
  }
}

const e = new Extended();
// Reset instance inheritance
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // Logs "2" instead of "1", because the prototype chain has changed
console.log(Extended.staticGetX()); // Still logs "3", because we haven't modified the static part yet
// Reset static inheritance
Object.setPrototypeOf(Extended, AnotherBase);
console.log(Extended.staticGetX()); // Now logs "4"
```

### Aufrufen von Methoden über super

Wenn `super.prop` als Funktion aufgerufen wird, ist der Wert von `this` innerhalb der Funktion `prop` das aktuelle `this` und nicht das Objekt, auf das `super` verweist. Beispielsweise gibt der Aufruf `super.getName()` `"Extended"` aus, obwohl der Code so aussieht, als entspräche er `Base.getName()`.

```js
class Base {
  static getName() {
    console.log(this.name);
  }
}

class Extended extends Base {
  static getName() {
    super.getName();
  }
}

Extended.getName(); // Logs "Extended"
```

Dies ist besonders wichtig beim Umgang mit [statischen privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_static_fields).

### Das Setzen von super.prop setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften über `super`, etwa mit `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Hier stößt die Vorstellung, `super` sei lediglich eine „Referenz auf das Prototypobjekt“, an ihre Grenzen: Die Eigenschaft wird tatsächlich stattdessen auf `this` gesetzt.

```js
class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true
```

`super.x = 1` sucht nach dem Eigenschaftsdeskriptor von `x` auf `A.prototype` (und ruft dort definierte Setter auf). Der Wert von `this` wird dabei jedoch auf das aktuelle `this` gesetzt, das in diesem Kontext `b` ist. Weitere Einzelheiten zu Fällen, in denen sich `target` und `receiver` unterscheiden, finden Sie unter [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set).

Das bedeutet: Während Methoden, die `super.prop` _lesen_, normalerweise nicht von Änderungen des `this`-Kontexts betroffen sind, gilt dies für Methoden, die `super.prop` _setzen_, nicht.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

Allerdings berücksichtigt `super.x = 1` weiterhin den Eigenschaftsdeskriptor des Prototypobjekts. Daher können nicht schreibbare Eigenschaften nicht überschrieben werden, und Setter werden aufgerufen.

```js
class X {}

// Create a non-writable property
Object.defineProperty(X.prototype, "prop", {
  configurable: true,
  writable: false,
  value: 1,
});

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // Cannot overwrite the value.
  }
}

const y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
