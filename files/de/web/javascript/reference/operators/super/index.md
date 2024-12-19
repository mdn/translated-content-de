---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: dce87c7e1908d9d25178371c6db75681f4384110
---

{{jsSidebar("Operators")}}

Das **`super`** Schlüsselwort wird verwendet, um Eigenschaften auf einem Objektliteral oder dem [[Prototype]] einer Klasse zuzugreifen oder einen Konstruktor der Oberklasse aufzurufen.

Die Ausdrücke `super.prop` und `super[expr]` sind in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) in sowohl [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) gültig. Der Ausdruck `super(...args)` ist in Klassenkonstruktoren gültig.

{{EmbedInteractiveExample("pages/js/expressions-super.html", "taller")}}

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

Das Schlüsselwort `super` kann auf zwei Arten verwendet werden: als "Funktionsaufruf" (`super(...args)`) oder als "Eigenschaftsabfrage" (`super.prop` und `super[expr]`).

> **Hinweis:** `super` ist ein Schlüsselwort und diese sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototyp-Objekt zeigt. Der Versuch, `super` selbst zu lesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor) einer abgeleiteten Klasse (mit `extends`) kann das Schlüsselwort `super` als "Funktionsaufruf" (`super(...args)`) erscheinen, was aufgerufen werden muss, bevor das Schlüsselwort `this` verwendet wird und bevor der Konstruktor zurückkehrt. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse, wonach der Konstruktor der abgeleiteten Klasse weiter auf `this` zugreifen und es ändern kann.

Die Form der "Eigenschaftsabfrage" kann verwendet werden, um auf Methoden und Eigenschaften des [[Prototype]] eines Objektliterals oder einer Klasse zuzugreifen. Innerhalb des Körpers einer Klasse kann die Referenz von `super` entweder der Konstruktor der Oberklasse selbst sein oder das `prototype` des Konstruktors, abhängig davon, ob der Ausführungskontext eine Instanzerstellung oder eine Klasseninitialisierung ist. Siehe den Abschnitt Beispiele für weitere Details.

Beachten Sie, dass die Referenz von `super` durch die Klasse oder das Objektliteral bestimmt wird, in dem `super` deklariert wurde, nicht durch das Objekt, auf dem die Methode aufgerufen wird. Daher ändert das Entbinden oder Neubinden einer Methode nicht die Referenz von `super` darin (auch wenn sie die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ändern). Sie können `super` als eine Variable im Bereich der Klasse oder des Objektliterals sehen, über die die Methoden eine Closure erstellen. (Aber auch hier Vorsicht, dass es tatsächlich keine Variable ist, wie oben erklärt.)

Wenn Sie Eigenschaften über `super` setzen, wird die Eigenschaft auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieser Codeausschnitt stammt aus dem [Klassenbeispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um die Konstruktorbestandteile zu vermeiden, die zwischen `Rectangle` und `Square` gemeinsam sind.

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

### Super-Aufrufe statischer Methoden

Es ist Ihnen auch möglich, super auf [statischen](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden aufzurufen.

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

### Aufrufen von super in einer Klassendeklaration

`super` kann auch während der Initialisierung von Klassenfeldern aufgerufen werden. Die Referenz von `super` hängt davon ab, ob das aktuelle Feld ein Instanzfeld oder ein statisches Feld ist.

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

Beachten Sie, dass Instanzfelder auf der Instanz und nicht auf dem `prototype` des Konstruktors gesetzt werden, sodass Sie `super` nicht verwenden können, um auf das Instanzfeld einer Oberklasse zuzugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` `undefined` statt 10, weil `baseField` als eigene Eigenschaft der `Base`-Instanz definiert ist, statt `Base.prototype`. `super`, in diesem Kontext, sucht nur nach Eigenschaften auf `Base.prototype`, weil das der [[Prototype]] von `Extended.prototype` ist.

### Löschen von super-Eigenschaften wird einen Fehler auslösen

Sie können nicht den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) und `super.prop` oder `super[expr]` verwenden, um eine Eigenschaft der Elternklasse zu löschen — das wird einen {{jsxref("ReferenceError")}} auslösen.

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

Super kann auch in der [Objektinitialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer)-Notation verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objektes auf. Dies funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}, mit dem wir in der Lage sind, das Prototyp des `obj2` auf `obj1` zu setzen, sodass `super` in der Lage ist, `method1` auf `obj1` zu finden.

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

### Methoden, die super.prop lesen, verhalten sich nicht anders, wenn sie an andere Objekte gebunden werden

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer auf dem Prototyp des Objektliterals/der Klassendeklaration gesucht wird, und das Entbinden und Neubinden einer Methode ändert nicht die Referenz von `super`.

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

Das Gleiche passiert in Objektliteralen.

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

Nur das Zurücksetzen der gesamten Vererbungskette wird die Referenz von `super` ändern.

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

### Aufrufen von Methoden von super

Beim Aufruf von `super.prop` als Funktion ist der Wert `this` innerhalb der `prop` Funktion das aktuelle `this`, nicht das Objekt, auf das `super` zeigt. Zum Beispiel protokolliert der Aufruf `super.getName()` `"Extended"`, obwohl der Code so aussieht, als wäre er äquivalent zu `Base.getName()`.

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

Dies ist besonders wichtig beim Umgang mit [statischen privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields).

### Setzen von super.prop setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften von `super`, wie `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in denen das Verständnis von `super` als einfach "Referenz des Prototyp-Objekts" nicht ausreicht, weil es tatsächlich die Eigenschaft auf `this` setzt.

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

`super.x = 1` wird nach dem Eigenschaftsdescriptor von `x` auf `A.prototype` suchen (und die dort definierten Setter aufrufen), aber der `this` Wert wird auf `this` gesetzt, was in diesem Kontext `b` ist. Sie können [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) für mehr Details zu dem Fall lesen, wenn sich `target` und `receiver` unterscheiden.

Dies bedeutet, dass während Methoden, die _super.prop_ **holen**, normalerweise nicht anfällig für Änderungen im `this` Kontext sind, diejenigen, die _super.prop_ **setzen**, es sind.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

Allerdings wird `super.x = 1` weiterhin den Eigenschaftsdescriptor des Prototyp-Objekts konsultieren, was bedeutet, dass Sie nicht schreibgeschützte Eigenschaften überschreiben können und Setter aufgerufen werden.

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
