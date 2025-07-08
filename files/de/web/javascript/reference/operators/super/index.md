---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Das **`super`** Schlüsselwort wird verwendet, um auf Eigenschaften eines Objekt-Literals oder des [[Prototyps]] einer Klasse zuzugreifen oder um den Konstruktor einer Oberklasse aufzurufen.

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

Das Schlüsselwort `super` kann auf zwei Arten verwendet werden: als „Funktionsaufruf“ (`super(...args)`) oder als „Eigenschaftszugriff“ (`super.prop` und `super[expr]`).

> [!NOTE]
> `super` ist ein Schlüsselwort und diese sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototyp-Objekt zeigt. Der Versuch, `super` selbst zu lesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor)-Körper einer abgeleiteten Klasse (mit `extends`) kann das Schlüsselwort `super` als „Funktionsaufruf“ (`super(...args)`) erscheinen, der vor der Verwendung des Schlüsselworts `this` und vor der Rückgabe des Konstruktors aufgerufen werden muss. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse, wonach der Konstruktor der abgeleiteten Klasse `this` weiter zugreifen und modifizieren kann.

Die Form „Eigenschaftszugriff“ kann verwendet werden, um Methoden und Eigenschaften des [[Prototyps]] eines Objekt-Literals oder einer Klasse zuzugreifen. Innerhalb des Korpus einer Klasse kann die Referenz von `super` entweder der Konstruktor der Oberklasse selbst oder das `prototype` des Konstruktors sein, je nachdem ob der Ausführungskontext die Erstellung einer Instanz oder die Initialisierung der Klasse ist. Siehe den Abschnitt Beispiele für weitere Details.

Beachten Sie, dass die Referenz von `super` von der Klasse oder dem Objekt-Literal bestimmt wird, in dem `super` deklariert wurde, nicht vom Objekt, auf dem die Methode aufgerufen wird. Daher ändert das Entbinden oder Neu-Binden einer Methode nicht die Referenz von `super` darin (obwohl sie die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ändern). Sie können `super` als eine Variable im Scope der Klasse oder des Objekt-Literals sehen, über die die Methoden einen Closure erstellen. (Aber beachten Sie auch, dass es tatsächlich keine Variable ist, wie oben erklärt.)

Beim Setzen von Eigenschaften über `super` wird die Eigenschaft stattdessen auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieses Codebeispiel stammt aus dem [Klassenbeispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um die Konstruktor-Teile zu vermeiden, die zwischen `Rectangle` und `Square` gemeinsam sind.

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

Sie können auch `super` auf [statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden aufrufen.

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

### Zugriff auf super in Deklarationen von Klassenfeldern

`super` kann auch während der Feldinitialisierung der Klasse zugegriffen werden. Die Referenz von `super` hängt davon ab, ob das aktuelle Feld ein Instanzfeld oder ein statisches Feld ist.

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

Beachten Sie, dass Instanzfelder auf der Instanz anstelle des `prototype` des Konstruktors gesetzt werden, sodass Sie `super` nicht verwenden können, um auf das Instanzfeld einer Oberklasse zuzugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` `undefined` anstelle von 10, weil `baseField` als eine Fremdeigenschaft der `Base` Instanz definiert ist, anstelle von `Base.prototype`. `super` schaut in diesem Kontext nur Eigenschaften auf `Base.prototype` nach, weil das der [[Prototyp]] von `Extended.prototype` ist.

### Das Löschen von super-Eigenschaften führt zu einem Fehler

Sie können den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) und `super.prop` oder `super[expr]` nicht verwenden, um eine Eigenschaft einer Elternklasse zu löschen — es führt zu einem {{jsxref("ReferenceError")}}.

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

Super kann auch in der [Objekt-Initialisierer](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) Notation verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}, mit dem wir in der Lage sind, den Prototyp von `obj2` auf `obj1` zu setzen, sodass `super` in der Lage ist, `method1` auf `obj1` zu finden.

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

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer auf dem Prototyp des Objekt-Literals / der Klassendeklaration gesucht wird, und das Entbinden und Neu-Binden einer Methode die Referenz von `super` nicht verändert.

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

### Methodenaufrufe von super

Beim Aufruf von `super.prop` als Funktion ist der `this` Wert innerhalb der `prop` Funktion das aktuelle `this`, nicht das Objekt, auf das `super` zeigt. Zum Beispiel protokolliert der Aufruf von `super.getName()` `"Extended"`, obwohl der Code so aussieht, als wäre er äquivalent zu `Base.getName()`.

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

Das ist besonders wichtig, wenn Sie mit [statischen privaten Elementen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements#private_static_fields) interagieren.

### Das Setzen von super.prop setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften von `super`, wie `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in denen das Verständnis von `super` als einfache "Referenz des Prototyp-Objekts" nicht ausreicht, da es tatsächlich die Eigenschaft auf `this` setzt.

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

`super.x = 1` wird den Eigenschafts-Deskriptor von `x` auf `A.prototype` suchen (und die dort definierten Setter aufrufen), aber der `this` Wert wird auf `this` gesetzt, was in diesem Kontext `b` ist. Sie können [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) lesen, um mehr Details zu dem Fall zu erfahren, in dem sich `target` und `receiver` unterscheiden.

Das bedeutet, dass während Methoden, die `super.prop` _lesen_, in der Regel nicht anfällig für Änderungen im `this` Kontext sind, diejenigen, die `super.prop` _setzen_, es sind.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

Jedoch konsultiert `super.x = 1` dennoch den Eigenschafts-Deskriptor des Prototyp-Objekts, was bedeutet, dass Sie nicht in der Lage sind, nicht schreibbare Eigenschaften neu zu schreiben, und Setter werden aufgerufen.

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
