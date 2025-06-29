---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Operators")}}

Das **`super`** Schlüsselwort wird verwendet, um auf Eigenschaften eines Objekt-Literals oder des [[Prototype]] einer Klasse zuzugreifen oder um den Konstruktor einer Superklasse aufzurufen.

Die Ausdrücke `super.prop` und `super[expr]` sind in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sowohl in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch in [Objekt-Literals](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) gültig. Der Ausdruck `super(...args)` ist in Klassenkonstruktoren gültig.

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

## Beschreibung

Das `super` Schlüsselwort kann auf zwei Arten verwendet werden: als "Funktionsaufruf" (`super(...args)`) oder als "Eigenschaftslookup" (`super.prop` und `super[expr]`).

> [!NOTE]
> `super` ist ein Schlüsselwort und dies sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototypobjekt zeigt. Der Versuch, `super` selbst zu lesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor)-Körper einer abgeleiteten Klasse (mit `extends`) kann das `super`-Schlüsselwort als "Funktionsaufruf" (`super(...args)`) erscheinen, das aufgerufen werden muss, bevor das `this`-Schlüsselwort verwendet wird und bevor der Konstruktor zurückkehrt. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse, wonach der Konstruktor der abgeleiteten Klasse weiter auf `this` zugreifen und es modifizieren kann.

Die Form des "Eigenschaftslookups" kann verwendet werden, um Methoden und Eigenschaften des [[Prototype]] eines Objekt-Literals oder einer Klasse zuzugreifen. Innerhalb des Klassenkörpers kann die Referenz von `super` entweder der Konstruktor der Superklasse selbst sein oder das `prototype` des Konstruktors, abhängig davon, ob der Ausführungskontext die Instanz-Erstellung oder die Klasseninitialisierung ist. Siehe den Abschnitt Beispiele für weitere Details.

Beachten Sie, dass die Referenz von `super` durch die Klasse oder das Objekt-Literal bestimmt wird, in dem `super` deklariert wurde, nicht durch das Objekt, auf das die Methode aufgerufen wird. Daher ändert sich die Referenz von `super` in einer neu gebundenen oder ungebundenen Methode nicht (obwohl sich die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ändert). Sie können `super` als eine Variable im Geltungsbereich der Klasse oder des Objekts betrachten, über die die Methoden eine Closure bilden. (Aber beachten Sie, dass es tatsächlich keine Variable ist, wie oben erklärt.)

Wenn Sie durch `super` Eigenschaften setzen, wird die Eigenschaft auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieses Code-Beispiel stammt aus dem [Klassen-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um häufige Teile des Konstruktors zwischen `Rectangle` und `Square` nicht zu duplizieren.

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

### Super-Aufruf von statischen Methoden

Sie können auch Super auf [statischen](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden aufrufen.

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

### Zugriff auf super in der Klassendeklaration

`super` kann auch während der Initialisierung von Klassenfeldern zugegriffen werden. Die Referenz von `super` hängt davon ab, ob das aktuelle Feld ein Instanzfeld oder ein statisches Feld ist.

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

Beachten Sie, dass Instanzfelder auf der Instanz und nicht auf dem `prototype` des Konstruktors gesetzt werden, sodass Sie `super` nicht verwenden können, um auf das Instanzfeld einer Superklasse zuzugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` `undefined` anstelle von 10, weil `baseField` als eigene Eigenschaft der `Base`-Instanz definiert ist, anstatt `Base.prototype`. `super` sucht in diesem Kontext nur nach Eigenschaften auf `Base.prototype`, da dies der [[Prototype]] von `Extended.prototype` ist.

### Löschen von super-Eigenschaften wird einen Fehler werfen

Sie können den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) nicht mit `super.prop` oder `super[expr]` verwenden, um eine Eigenschaft der Elternklasse zu löschen — dies wird einen {{jsxref("ReferenceError")}} werfen.

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

Super kann auch in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) Notation verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}, mit dem wir in der Lage sind, das Prototype von `obj2` auf `obj1` zu setzen, sodass `super` in der Lage ist, `method1` auf `obj1` zu finden.

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

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer auf dem Prototype des Objekts/Literalklassen-Deklaration gesucht wird und das Neubinden und Entbinden einer Methode die Referenz von `super` nicht ändert.

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

Dasselbe passiert in Objekt-Literals.

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

Nur das Zurücksetzen der gesamten Vererbungskette ändert die Referenz von `super`.

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

### Aufruf von Methoden aus super

Wenn Sie `super.prop` als Funktion aufrufen, ist der `this`-Wert innerhalb der `prop`-Funktion das aktuelle `this`, nicht das Objekt, auf das `super` zeigt. Zum Beispiel gibt der `super.getName()`-Aufruf `"Extended"` aus, obwohl der Code aussieht, als wäre er äquivalent zu `Base.getName()`.

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

Dies ist besonders wichtig, wenn Sie mit [statischen privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_static_fields) interagieren.

### Setzen von super.prop setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften von `super`, wie `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in denen das Verständnis von `super` als einfach "Referenz zum Prototyp-Objekt" unzureichend ist, da es die Eigenschaft tatsächlich auf `this` setzt.

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

`super.x = 1` sucht nach dem Eigenschaftsdeskriptor von `x` auf `A.prototype` (und ruft die dort definierten Setzer auf), aber der `this`-Wert wird auf `this` gesetzt, was in diesem Kontext `b` ist. Sie können [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) lesen, um weitere Details zu dem Fall zu erfahren, wenn sich `target` und `receiver` unterscheiden.

Das bedeutet, dass während Methoden, die _get_ `super.prop` normalerweise nicht anfällig für Änderungen im `this`-Kontext sind, diejenigen, die _set_ `super.prop` jedoch schon.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

Allerdings konsultiert `super.x = 1` trotzdem den Eigenschaftsdeskriptor des Prototypobjekts, was bedeutet, dass Sie schreibgeschützte Eigenschaften nicht überschreiben können und Setzer aufgerufen werden.

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
