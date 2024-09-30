---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 1492f12d54c344b099dc49fe291c24c8b41abd90
---

{{jsSidebar("Operators")}}

Das Schlüsselwort **`super`** wird verwendet, um auf Eigenschaften eines Objekt-Literals oder des [[Prototyps]] einer Klasse zuzugreifen oder um den Konstruktor einer Superklasse aufzurufen.

Die Ausdrücke `super.prop` und `super[expr]` sind in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) in sowohl [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch [Objekt-Literals](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) gültig. Der Ausdruck `super(...args)` ist in Klassenkonstruktoren gültig.

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

Das Schlüsselwort `super` kann auf zwei Arten verwendet werden: als "Funktionsaufruf" (`super(...args)`) oder als "Eigenschaftensuche" (`super.prop` und `super[expr]`).

> **Hinweis:** `super` ist ein Schlüsselwort und diese sind spezielle syntaktische Strukturen. `super` ist keine Variable, die auf das Prototyp-Objekt verweist. Der Versuch, `super` selbst auszulesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor)-Körper einer abgeleiteten Klasse (mit `extends`) kann das `super`-Schlüsselwort als "Funktionsaufruf" (`super(...args)`) erscheinen, was aufgerufen werden muss, bevor das `this`-Schlüsselwort verwendet wird und bevor der Konstruktor zurückkehrt. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse, danach kann der Konstruktor der abgeleiteten Klasse weiter auf `this` zugreifen und es modifizieren.

Die "Eigenschaftensuche"-Form kann verwendet werden, um Methoden und Eigenschaften eines Objekt-Literals oder des [[Prototyps]] einer Klasse zuzugreifen. Innerhalb des Klassenkörpers kann der Verweis von `super` entweder der Konstruktor der Superklasse selbst oder das `prototype` des Konstruktors sein, abhängig davon, ob der Ausführungskontext die Instanzerstellung oder die Klasseninitialisierung ist. Siehe die Beispiele für weitere Details.

Beachten Sie, dass der Verweis von `super` durch die Klasse oder das Objekt-Literal bestimmt wird, in dem `super` deklariert wurde, nicht durch das Objekt, auf dem die Methode aufgerufen wird. Daher ändert das Entbinden oder erneute Binden einer Methode nicht den Verweis von `super` darin (obwohl sie den Verweis von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ändern). Sie können `super` als eine Variable im Klassen- oder Objekt-Literal-Gültigkeitsbereich sehen, über die die Methoden eine Closure erstellen. (Aber beachten Sie auch, dass es eigentlich keine Variable ist, wie oben erklärt.)

Wenn Eigenschaften durch `super` gesetzt werden, wird die Eigenschaft auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieses Codebeispiel stammt aus dem [Klassen-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um die Teile des Konstruktors, die zwischen `Rectangle` und `Square` gemeinsam sind, nicht zu duplizieren.

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

Sie können auch Super für den Aufruf von [statischen](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden verwenden.

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

### Zugriff auf super in der Deklaration von Klassenfeldern

`super` kann auch während der Initialisierung von Klassenfeldern aufgerufen werden. Der Verweis von `super` hängt davon ab, ob das aktuelle Feld ein Instanz-Feld oder ein statisches Feld ist.

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

Hier ist `extendedField` `undefined` anstelle von 10, weil `baseField` als eigene Eigenschaft der `Base`-Instanz und nicht von `Base.prototype` definiert ist. `super` sucht in diesem Kontext nur nach Eigenschaften auf `Base.prototype`, weil das der [[Prototyp]] von `Extended.prototype` ist.

### Löschen von super-Eigenschaften führt zu einem Fehler

Sie können den [`delete`-Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) und `super.prop` oder `super[expr]` nicht verwenden, um eine Eigenschaft der Elternklasse zu löschen — es führt zu einem {{jsxref("ReferenceError")}}.

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

Super kann auch in der [Objektinitialisierungs]-Notation verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}, womit wir in der Lage sind, den Prototyp von `obj2` auf `obj1` zu setzen, so dass `super` `method1` auf `obj1` finden kann.

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

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer auf dem Prototyp der Objekt-Literal-/Klassendeklaration gesucht wird, und das Entbinden und erneute Binden einer Methode ändert den Verweis von `super` nicht.

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

### Aufrufen von Methoden von super

Beim Aufrufen von `super.prop` als Funktion ist der `this`-Wert innerhalb der `prop`-Funktion das aktuelle `this`, nicht das Objekt, auf das `super` zeigt. Zum Beispiel protokolliert der Aufruf `super.getName()` `"Extended"`, obwohl der Code so aussieht, als wäre er äquivalent zu `Base.getName()`.

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

Dies ist besonders wichtig im Umgang mit [statischen privaten Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties#private_static_fields).

### Setzen von super.prop setzt die Eigenschaft stattdessen auf this

Das Setzen von Eigenschaften von `super`, wie `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in denen das Verständnis von `super` als einfache "Referenz des Prototyps-Objekts" nicht ausreicht, da die Eigenschaft stattdessen auf `this` gesetzt wird.

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

`super.x = 1` sucht nach dem Eigenschafts-Deskriptor von `x` auf `A.prototype` (und ruft die dort definierten Setter auf), aber der `this`-Wert wird auf `this` gesetzt, was in diesem Kontext `b` ist. Sie können [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) lesen, um weitere Details über den Fall zu erfahren, wenn sich `target` und `receiver` unterscheiden.

Das bedeutet, dass während Methoden, die _lesen_ `super.prop`, üblicherweise nicht anfällig für Änderungen im `this`-Kontext sind, diejenigen, die _setzen_ `super.prop`, es sind.

```js example-bad
/* Reusing same declarations as above */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

`super.x = 1` konsultiert jedoch immer noch den Eigenschafts-Deskriptor des Prototyp-Objekts, was bedeutet, dass Sie nicht beschreibbare Eigenschaften nicht überschreiben können und Setter aufgerufen werden.

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
