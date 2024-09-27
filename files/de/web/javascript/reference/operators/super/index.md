---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 1492f12d54c344b099dc49fe291c24c8b41abd90
---

{{jsSidebar("Operators")}}

Das **`super`** Schlüsselwort wird verwendet, um auf Eigenschaften eines Objektliterales oder des [[Prototype]] einer Klasse zuzugreifen oder um den Konstruktor einer Superklasse aufzurufen.

Die Ausdrücke `super.prop` und `super[expr]` sind gültig in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) sowohl in [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer). Der Ausdruck `super(...args)` ist in Klassenkonstruktoren gültig.

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

Das `super` Schlüsselwort kann auf zwei Arten verwendet werden: als "Funktionsaufruf" (`super(...args)`) oder als "Eigenschaftszugriff" (`super.prop` und `super[expr]`).

> **Note:** `super` ist ein Schlüsselwort und diese sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototyp-Objekt zeigt. Der Versuch, `super` selbst zu lesen, ergibt einen {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor)-Körper einer abgeleiteten Klasse (mit `extends`) kann das `super` Schlüsselwort als "Funktionsaufruf" (`super(...args)`) erscheinen, welcher aufgerufen werden muss, bevor das `this` Schlüsselwort verwendet wird und bevor der Konstruktor zurückkehrt. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse, wonach der Konstruktor der abgeleiteten Klasse weiter auf `this` zugreifen und dieses modifizieren kann.

Die Form des "Eigenschaftszugriffs" kann verwendet werden, um Methoden und Eigenschaften eines Objektliterales oder des [[Prototype]] einer Klasse zuzugreifen. Innerhalb eines Klassenkörpers kann die Referenz von `super` entweder der Konstruktor der Superklasse selbst oder das `prototype` des Konstruktors sein, abhängig davon, ob der Ausführungskontext die Instanzerstellung oder die Klasseninitialisierung ist. Weitere Details finden Sie im Abschnitt Beispiele.

Beachten Sie, dass die Referenz von `super` durch die Klasse oder das Objektliteral bestimmt wird, in dem `super` deklariert wurde, nicht durch das Objekt, auf dem die Methode aufgerufen wird. Daher ändert das Entbinden oder Wiederbinden einer Methode nicht die Referenz von `super` in ihr (obwohl sie die Referenz von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ändern). Sie können `super` als eine Variable im Umfang der Klasse oder des Objektliterales sehen, über die die Methoden einen Abschluss bilden. (Aber beachten Sie auch, dass es tatsächlich keine Variable ist, wie oben erläutert.)

Wenn Eigenschaften über `super` gesetzt werden, wird die Eigenschaft auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieses Code-Snippet stammt aus dem [Klassenbeispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um die Teile des Konstruktors zu vermeiden, die zwischen `Rectangle` und `Square` gemeinsam sind.

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

Es ist auch möglich, `super` auf [statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden anzuwenden.

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

`super` kann auch während der Initialisierung von Klassenfeldern aufgerufen werden. Die Referenz von `super` hängt davon ab, ob es sich bei dem aktuellen Feld um ein Instanzfeld oder ein statisches Feld handelt.

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

Beachten Sie, dass Instanzfelder auf der Instanz und nicht auf dem `prototype` des Konstruktors gesetzt werden, daher können Sie `super` nicht verwenden, um auf das Instanzfeld einer Superklasse zuzugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` stattdessen `undefined` anstelle von 10, weil `baseField` als eigene Eigenschaft der `Base`-Instanz definiert wurde, anstatt als `Base.prototype`. `super` sucht in diesem Kontext nur Eigenschaften auf `Base.prototype`, da dies das [[Prototype]] von `Extended.prototype` ist.

### Löschen von super-Eigenschaften führt zu einem Fehler

Sie können den [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) und `super.prop` oder `super[expr]` nicht verwenden, um eine Eigenschaft der Elternklasse zu löschen — dies führt zu einem {{jsxref("ReferenceError")}}.

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

`super` kann auch in der [Objektinitialisierung](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}, mit dem wir das Prototype von `obj2` auf `obj1` setzen können, sodass `super` `method1` auf `obj1` finden kann.

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

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer auf dem Prototype des Objektliterales/Klassendeklarations gesucht wird, und das Entbinden und Wiederbinden einer Methode ändert die Referenz von `super` nicht.

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

### Aufrufen von Methoden aus super

Beim Aufrufen von `super.prop` als Funktion ist der `this`-Wert innerhalb der `prop`-Funktion das aktuelle `this`, nicht das Objekt, auf das `super` zeigt. Zum Beispiel protokolliert der `super.getName()`-Aufruf `"Extended"`, obwohl der Code aussieht, als wäre er gleichwertig mit `Base.getName()`.

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

Dies ist besonders wichtig beim Arbeiten mit [statischen privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields).

### Setzen von super.prop setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften von `super`, wie `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in denen das Verständnis von `super` als einfach "Referenz des Prototyp-Objekts" unzureichend ist, da es tatsächlich die Eigenschaft auf `this` setzt.

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

`super.x = 1` wird den Eigenschafts-Deskriptor von `x` auf `A.prototype` suchen (und dort definierte Setter aufrufen), aber der `this`-Wert wird auf `this` gesetzt, was in diesem Kontext `b` ist. Sie können in [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) nachlesen, um mehr Details über den Fall zu erfahren, wenn `target` und `receiver` unterschiedlich sind.

Dies bedeutet, dass Methoden, die _super.prop lesen_, normalerweise nicht anfällig für Änderungen im `this`-Kontext sind, während diejenigen, die _super.prop setzen_, es sind.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

`super.x = 1` wird jedoch weiterhin den Eigenschafts-Deskriptor des Prototyp-Objekts konsultieren, was bedeutet, dass Sie nicht-überschreibbare Eigenschaften nicht überschreiben können und Setter aufgerufen werden.

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
