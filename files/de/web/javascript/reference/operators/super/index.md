---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 1492f12d54c344b099dc49fe291c24c8b41abd90
---

{{jsSidebar("Operators")}}

Das **`super`** Schlüsselwort wird verwendet, um auf Eigenschaften eines Objekt-Literals oder der [[Prototype]] einer Klasse zuzugreifen oder um den Konstruktor einer Superklasse aufzurufen.

Die `super.prop` und `super[expr]` Ausdrücke sind in jeder [Methodendefinition](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) in sowohl [Klassen](/de/docs/Web/JavaScript/Reference/Classes) als auch [Objekt-Literals](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) erlaubt. Der `super(...args)` Ausdruck ist in Klassenkonstruktoren gültig.

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

Das `super` Schlüsselwort kann auf zwei Weisen verwendet werden: als "Funktionsaufruf" (`super(...args)`) oder als "Eigenschaftsabfrage" (`super.prop` und `super[expr]`).

> **Hinweis:** `super` ist ein Schlüsselwort und diese sind spezielle syntaktische Konstrukte. `super` ist keine Variable, die auf das Prototyp-Objekt verweist. Der Versuch, `super` selbst zu lesen, führt zu einem {{jsxref("SyntaxError")}}.
>
> ```js-nolint example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

Im [Konstruktor](/de/docs/Web/JavaScript/Reference/Classes/constructor)-Körper einer abgeleiteten Klasse (mit `extends`) kann das `super` Schlüsselwort als "Funktionsaufruf" (`super(...args)`) erscheinen, welcher vor der Verwendung des `this` Schlüsselworts aufgerufen werden muss und bevor der Konstruktor zurückkehrt. Es ruft den Konstruktor der Elternklasse auf und bindet die öffentlichen Felder der Elternklasse, danach kann der Konstruktor der abgeleiteten Klasse weiter auf `this` zugreifen und es verändern.

Die "Eigenschaftsabfrage"-Form kann verwendet werden, um Methoden und Eigenschaften des [[Prototype]] eines Objekt-Literals oder einer Klasse zuzugreifen. Innerhalb eines Klassenkörpers kann der Bezug von `super` entweder der Konstruktor der Superklasse selbst oder das `prototype` des Konstruktors sein, abhängig davon, ob der Ausführungskontext die Erstellung einer Instanz oder die Initialisierung der Klasse ist. Siehe den Abschnitt Beispiele für weitere Details.

Beachten Sie, dass der Bezug von `super` durch die Klasse oder das Objekt-Literal bestimmt wird, in dem `super` deklariert wurde, und nicht durch das Objekt, auf dem die Methode aufgerufen wird. Daher ändert Unbinding oder Re-binding einer Methode den Bezug von `super` in ihr nicht (obwohl sie den Bezug von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) ändern). Sie können sich `super` als Variable im Klassen- oder Objekt-Literalbereich vorstellen, die über die Methoden einen Abschluss schafft. (Aber beachten Sie auch, dass es eigentlich keine Variable ist, wie oben erklärt.)

Beim Setzen von Eigenschaften durch `super` wird die Eigenschaft auf `this` gesetzt.

## Beispiele

### Verwendung von super in Klassen

Dieses Codebeispiel stammt aus dem [Klassenbeispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([Live-Demo](https://googlechrome.github.io/samples/classes-es6/index.html)). Hier wird `super()` aufgerufen, um Duplikate der Konstruktorenteile zu vermeiden, die zwischen `Rectangle` und `Square` gemeinsam sind.

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
    // Hier wird der Konstruktor der Elternklasse mit den Längen
    // aufgerufen, die für die Breite und Höhe des Rectangles vorgesehen sind.
    super(length, length);

    // Hinweis: In abgeleiteten Klassen muss super() aufgerufen werden, bevor Sie
    // 'this' verwenden können. Eine Verschiebung nach oben führt zu einem Referenzfehler.
    this.name = "Square";
  }
}
```

### Super-Methodenaufrufe für statische Methoden

Sie können auch super auf [statische](/de/docs/Web/JavaScript/Reference/Classes/static) Methoden aufrufen.

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

### Zugriff auf super während der Deklaration von Klassenfeldern

`super` kann auch während der Initialisierung von Klassenfeldern zugegriffen werden. Der Bezug von `super` hängt davon ab, ob das aktuelle Feld ein Instanzfeld oder ein statisches Feld ist.

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

Beachten Sie, dass Instanzfelder auf der Instanz statt auf dem `prototype` des Konstruktors festgelegt werden, sodass Sie `super` nicht verwenden können, um auf das Instanzfeld einer Superklasse zuzugreifen.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

Hier ist `extendedField` `undefined` statt 10, weil `baseField` als eigene Eigenschaft der `Base`-Instanz definiert ist, anstatt `Base.prototype`. `super` sucht in diesem Kontext nur nach Eigenschaften auf `Base.prototype`, weil das der [[Prototype]] von `Extended.prototype` ist.

### Löschen von super-Eigenschaften führt zu einem Fehler

Sie können den [`delete` Operator](/de/docs/Web/JavaScript/Reference/Operators/delete) nicht verwenden und `super.prop` oder `super[expr]`, um eine Eigenschaft der Elternklasse zu löschen — dies führt zu einem {{jsxref("ReferenceError")}}.

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

### Verwendung von super.prop in Objekt-Literalen

Super kann auch in der Notation des [Objektinitialisierers](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer) verwendet werden. In diesem Beispiel definieren zwei Objekte eine Methode. Im zweiten Objekt ruft `super` die Methode des ersten Objekts auf. Dies funktioniert mit Hilfe von {{jsxref("Object.setPrototypeOf()")}}, womit wir in der Lage sind, das Prototype von `obj2` zu `obj1` zu setzen, sodass `super` in der Lage ist, `method1` auf `obj1` zu finden.

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

Der Zugriff auf `super.x` verhält sich wie `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`, was bedeutet, dass die Eigenschaft immer am Prototyp der Objekt-Klasse-Deklaration gesucht wird, und das Unbinding und Re-binding einer Methode den Bezug von `super` nicht ändern.

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

Das gleiche passiert in Objekt-Literals.

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

Das Zurücksetzen der gesamten Vererbungskette ändert erst den Bezug von `super`.

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
// Instanzvererbung zurücksetzen
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // Logs "2" instead of "1", because the prototype chain has changed
console.log(Extended.staticGetX()); // Still logs "3", because we haven't modified the static part yet
// Statische Vererbung zurücksetzen
Object.setPrototypeOf(Extended, AnotherBase);
console.log(Extended.staticGetX()); // Now logs "4"
```

### Aufrufen von Methoden von super

Beim Aufruf von `super.prop` als Funktion ist der `this`-Wert innerhalb der `prop`-Funktion das aktuelle `this` und nicht das Objekt, auf das `super` verweist. Zum Beispiel gibt der Aufruf `super.getName()` `"Extended"` aus, obwohl der Code aussieht, als wäre er gleichwertig mit `Base.getName()`.

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

Das Setzen von Eigenschaften von `super`, wie `super.x = 1`, verhält sich wie `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`. Dies ist einer der Fälle, in dem das Verständnis von `super` als einfach "Verweis auf das Prototyp-Objekt" nicht ausreicht, da es tatsächlich die Eigenschaft auf `this` setzt.

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

`super.x = 1` sucht nach dem Eigenschaftsdeskriptor von `x` auf `A.prototype` (und führt die dort definierten Setter aus), aber der Wert von `this` wird auf `this` gesetzt, was in diesem Kontext `b` ist. Sie können mehr über [`Reflect.set`](/de/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set) lesen, um weitere Details zu erhalten, wann sich `target` und `receiver` unterscheiden.

Das bedeutet, dass während Methoden, die _super.prop_ abrufen, normalerweise nicht anfällig für Änderungen im `this`-Kontext sind, die, die _super.prop_ setzen, es sind.

```js example-bad
/* Gleiche Deklarationen wie oben nutzen */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

Jedoch berücksichtigt `super.x = 1` immer noch den Eigenschaftsdeskriptor des Prototyp-Objekts, was bedeutet, dass Sie nicht überschreibbare Eigenschaften nicht überschreiben können und Setter aufgerufen werden.

```js
class X {
  constructor() {
    // Eine nicht überschreibbare Eigenschaft erstellen
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
    super.prop = 2; // Kann den Wert nicht überschreiben.
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
