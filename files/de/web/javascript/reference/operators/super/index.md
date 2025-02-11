---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Operators")}}

Das **`super`** Schlüsselwort wird verwendet, um Eigenschaften eines Objekt-Literals oder des [[Prototype]] einer Klasse aufzurufen oder den Konstruktor einer Superklasse aufzurufen.

Die Ausdrücke `super.prop` und `super[expr]` sind in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) gültig, sowohl in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch in [Objekt-Literals](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Der Ausdruck `super(...args)` ist in Klassenkonstruktoren gültig.

{{InteractiveExample("JavaScript Demo: Expressions - super", "taller")}}

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

## Beschreibung

Das `super`-Schlüsselwort kann auf zwei Arten verwendet werden: als "Funktionsaufruf" (`super(...args)`) oder als "Eigenschaftsaufruf" (`super.prop` und `super[expr]`).

> **Hinweis:** `super` ist ein Schlüsselwort und diese sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototyp-Objekt verweist. Der Versuch, `super` direkt zu lesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor)-Körper einer abgeleiteten Klasse (mit `extends`) kann das `super`-Schlüsselwort als "Funktionsaufruf" (`super(...args)`) auftreten. Es muss vor der Verwendung des `this`-Schlüsselworts und vor der Rückgabe des Konstruktors aufgerufen werden. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse. Anschließend kann der Konstruktor der abgeleiteten Klasse auf `this` zugreifen und es weiter verändern.

Die Form "Eigenschaftsaufruf" kann verwendet werden, um Methoden und Eigenschaften des [[Prototype]] eines Objekt-Literals oder einer Klasse aufzurufen. Innerhalb eines Klassenkörpers kann sich der Verweis von `super` entweder auf den Konstruktor der Superklasse selbst oder auf den `prototype` des Konstruktors beziehen, je nachdem, ob der Ausführungskontext die Erstellung einer Instanz oder die Initialisierung einer Klasse ist. Siehe den Abschnitt Beispiele für weitere Details.

Beachten Sie, dass der Verweis von `super` durch die Klasse oder das Objekt-Literal bestimmt wird, in dem `super` deklariert wurde, nicht durch das Objekt, auf dem die Methode aufgerufen wird. Daher ändert das Entbinden oder Neu-Binden einer Methode nicht den Verweis von `super` darin (obwohl der Verweis von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verändert wird). Sie können `super` als eine in der Klassen- oder Objekt-Literal-Scope befindliche Variable ansehen, über die Methoden eine Closure erstellen. (Beachten Sie jedoch auch, dass es sich tatsächlich nicht um eine Variable handelt, wie oben erklärt.)

Beim Setzen von Eigenschaften über `super` wird die Eigenschaft auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieses Code-Beispiel stammt aus dem [Beispiel für Klassen](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um doppelte Konstruktor-Teile zu vermeiden, die zwischen `Rectangle` und `Square` gemeinsam sind.

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

### Super-Aufrufe von statischen Methoden

Sie können auch `super` in [statischen](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden aufrufen.

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

### Zugriff auf super in Klassenfeldern

`super` kann auch während der Initialisierung von Klassenfeldern verwendet werden. Der Verweis von `super` hängt davon ab, ob das aktuelle Feld ein Instanzfeld oder ein statisches Feld ist.

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

Beachten Sie, dass Instanzfelder statt auf dem `prototype` des Konstruktors auf der Instanz gesetzt werden, sodass Sie `super` nicht verwenden können, um auf das Instanzfeld einer Superklasse zuzugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` `undefined` anstelle von 10, da `baseField` als eigene Eigenschaft der Instanz von `Base` definiert ist und nicht von `Base.prototype`. `super` sucht in diesem Kontext nur nach Eigenschaften von `Base.prototype`, da dies das [[Prototype]] von `Extended.prototype` ist.

### Löschen von super-Eigenschaften führt zu einem Fehler

Sie können den [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) nicht mit `super.prop` oder `super[expr]` verwenden, um eine Eigenschaft der Elternklasse zu löschen — das führt zu einem {{jsxref("ReferenceError")}}.

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

### Verwendung von super.prop in Objekt-Literals

`super` kann auch in der [Objekt-Initializer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Notation verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert dank {{jsxref("Object.setPrototypeOf()")}}, mit dem wir das Prototyp-Objekt von `obj2` auf `obj1` setzen können, sodass `super` in der Lage ist, `method1` auf `obj1` zu finden.

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

### Methoden, die super.prop lesen, verhalten sich nicht anders, wenn sie an andere Objekte gebunden sind

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer auf dem Prototyp des Objekt-Literals oder der Klassendeklaration gesucht wird. Das Entbinden und Neu-Binden einer Methode ändert nicht den Verweis von `super`.

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

Dasselbe gilt in Objekt-Literals.

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

Nur das Zurücksetzen der gesamten Vererbungskette ändert den Verweis von `super`.

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

### Aufrufen von Methoden aus super

Beim Aufrufen von `super.prop` als Funktion ist der Wert von `this` innerhalb der Funktion `prop` das aktuelle `this` und nicht das Objekt, auf das `super` verweist. Zum Beispiel gibt der Aufruf `super.getName()` `"Extended"` aus, obwohl der Code aussieht, als wäre es äquivalent zu `Base.getName()`.

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

Dies ist besonders wichtig, wenn es um die Interaktion mit [statischen privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields) geht.

### super.prop setzen setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften von `super`, wie z. B. `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in denen das Verständnis von `super` als einfache "Referenz des Prototyp-Objekts" unzureichend ist, da es tatsächlich die Eigenschaft an `this` setzt.

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

`super.x = 1` sucht nach dem Eigenschaftsdeskriptor von `x` auf `A.prototype` (und ruft die dort definierten Setter auf), aber der `this`-Wert wird auf `this` gesetzt, was in diesem Fall `b` ist. Sie können mehr Details unter [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) nachlesen, wenn sich `target` und `receiver` unterscheiden.

Das bedeutet, dass während Methoden, die `super.prop` _lesen_, normalerweise nicht anfällig für Änderungen im `this`-Kontext sind, die Methoden, die `super.prop` _setzen_, dies sind.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

Allerdings konsultiert `super.x = 1` immer noch den Eigenschaftsdeskriptor des Prototyp-Objekts, was bedeutet, dass Sie nicht-schreibbare Eigenschaften nicht überschreiben können und Setter aufgerufen werden.

```js
class X {
  constructor() {
    // Create a non-writable property
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

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
