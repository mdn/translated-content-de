---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Klassen sind Vorlagen zum Erstellen von Objekten. Sie kapseln Daten und den Code, der mit diesen Daten arbeitet. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), verfügen aber auch über eine eigene Syntax und Semantik.

Weitere Beispiele und Erklärungen finden Sie im Leitfaden [Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes).

## Beschreibung

### Klassen definieren

Klassen sind tatsächlich „spezielle [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)“. So wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, lässt sich auch eine Klasse auf zwei Arten definieren: als [Klassenausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder als [Klassendeklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

```js
// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Wie Funktionsausdrücke können Klassenausdrücke anonym sein oder einen Namen haben, der sich vom Namen der Variablen unterscheidet, der sie zugewiesen werden. Anders als Funktionsdeklarationen unterliegen Klassendeklarationen jedoch denselben Einschränkungen der [Temporal Dead Zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) wie `let` oder `const` und verhalten sich so, als würden sie [nicht durch Hoisting vorgezogen](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting).

### Klassenkörper

Der Klassenkörper ist der Teil zwischen den geschweiften Klammern `{}`. Dort definieren Sie Klassenmitglieder wie Methoden oder den Konstruktor.

Der Klassenkörper wird auch ohne die Anweisung `"use strict"` im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt.

Ein Klassenelement lässt sich anhand von drei Merkmalen beschreiben:

- Art: Getter, Setter, Methode oder Feld
- Position: statisch oder Instanz
- Sichtbarkeit: öffentlich oder privat

Daraus ergeben sich insgesamt 16 mögliche Kombinationen. Um die Referenz sinnvoll zu gliedern und inhaltliche Überschneidungen zu vermeiden, werden die verschiedenen Elemente auf eigenen Seiten ausführlich beschrieben:

- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : Öffentliche Instanzmethode
- [Getter](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Öffentlicher Instanz-Getter
- [Setter](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Öffentlicher Instanz-Setter
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : Öffentliches Instanzfeld
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
  - : Öffentliche statische Methoden, Getter, Setter und Felder
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
  - : Alle privaten Elemente

> [!NOTE]
> Für private Elemente gilt die Einschränkung, dass alle innerhalb derselben Klasse deklarierten privaten Namen eindeutig sein müssen. Eine Ausnahme bildet ein Getter-Setter-Paar, wenn beide statisch sind oder beide zur Instanz gehören. Für alle anderen öffentlichen Eigenschaften gilt diese Einschränkung nicht: Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, wobei die letzte die vorherigen überschreibt. Dies entspricht dem Verhalten von [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Darüber hinaus gibt es zwei besondere Syntaxformen für Klassenelemente: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke). Für beide gibt es eigene Referenzseiten.

#### Konstruktor

Die Methode {{jsxref("Classes/constructor", "constructor")}} ist eine spezielle Methode zum Erstellen und Initialisieren eines Objekts mithilfe einer Klasse. In einer Klasse darf es nur eine spezielle Methode mit dem Namen „constructor“ geben. Enthält die Klasse mehr als eine `constructor`-Methode, wird ein {{jsxref("SyntaxError")}} ausgelöst.

Ein Konstruktor kann mit dem Schlüsselwort [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) den Konstruktor der Oberklasse aufrufen.

Sie können Instanzeigenschaften innerhalb des Konstruktors erstellen:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Wenn die Werte Ihrer Instanzeigenschaften nicht von den Argumenten des Konstruktors abhängen, können Sie sie alternativ als [Klassenfelder](#felddeklarationen) definieren.

#### Statische Initialisierungsblöcke

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen eine flexible Initialisierung [statischer Eigenschaften](#statische_methoden_und_felder). Dabei können während der Initialisierung auch Anweisungen ausgewertet werden, und es besteht Zugriff auf den privaten Gültigkeitsbereich.

Es können mehrere statische Blöcke deklariert werden, zwischen denen Deklarationen statischer Felder und Methoden stehen können. Alle statischen Elemente werden in der Reihenfolge ihrer Deklaration ausgewertet.

#### Methoden

Methoden werden auf dem Prototyp jeder Klasseninstanz definiert und von allen Instanzen gemeinsam genutzt. Sie können gewöhnliche Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Weitere Informationen finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
  *getSides() {
    yield this.height;
    yield this.width;
    yield this.height;
    yield this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
console.log([...square.getSides()]); // [10, 10, 10, 10]
```

#### Statische Methoden und Felder

Das Schlüsselwort {{jsxref("Classes/static", "static")}} definiert eine statische Methode oder ein statisches Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden auf der Klasse selbst statt auf jeder einzelnen Instanz definiert. Statische Methoden werden häufig verwendet, um Hilfsfunktionen für eine Anwendung bereitzustellen. Statische Felder eignen sich dagegen für Caches, feste Konfigurationen und andere Daten, die nicht für jede Instanz dupliziert werden müssen.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

#### Felddeklarationen

Mit der Syntax für Klassenfelddeklarationen lässt sich das Beispiel für den [Konstruktor](#konstruktor) wie folgt schreiben:

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Klassenfelder ähneln Objekteigenschaften und nicht Variablen. Daher verwenden wir zu ihrer Deklaration keine Schlüsselwörter wie `const`. In JavaScript nutzen [private Elemente](#private_elemente) eine besondere Bezeichnersyntax. Deshalb sollten auch keine Modifikator-Schlüsselwörter wie `public` und `private` verwendet werden.

Wie oben zu sehen ist, können Felder mit oder ohne Standardwert deklariert werden. Felder ohne Standardwert haben standardmäßig den Wert `undefined`. Wenn Felder vorab deklariert werden, sind Klassendefinitionen leichter verständlich und die Felder stets vorhanden, was Optimierungen erleichtert.

Weitere Informationen finden Sie unter [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

#### Private Elemente

Durch die Verwendung privater Felder lässt sich die Definition wie folgt verfeinern:

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

Der Zugriff auf private Felder von außerhalb der Klasse führt zu einem Fehler. Sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden.
Indem Sie Elemente definieren, die außerhalb der Klasse nicht sichtbar sind, verhindern Sie, dass Nutzer Ihrer Klassen von Implementierungsdetails abhängig werden, die sich von Version zu Version ändern können.

Private Felder können nur vorab in einer Felddeklaration deklariert werden. Anders als normale Eigenschaften lassen sie sich nicht später durch eine Zuweisung erstellen.

Private Methoden und Accessors können mit derselben Syntax wie ihre öffentlichen Entsprechungen definiert werden, wobei der Bezeichner jedoch mit `#` beginnt.

Weitere Informationen finden Sie unter [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).

### Vererbung

Das Schlüsselwort {{jsxref("Classes/extends", "extends")}} wird in _Klassendeklarationen_ oder _Klassenausdrücken_ verwendet, um eine Klasse als Unterklasse eines anderen Konstruktors zu erstellen. Dieser Konstruktor kann eine Klasse oder eine Funktion sein.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

Wenn die Unterklasse einen Konstruktor besitzt, muss dieser zuerst `super()` aufrufen, bevor er `this` verwendet. Mit dem Schlüsselwort {{jsxref("Operators/super", "super")}} können außerdem entsprechende Methoden der Oberklasse aufgerufen werden.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

const l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

### Auswertungsreihenfolge

Wenn eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden die einzelnen Bestandteile in folgender Reihenfolge ausgewertet:

1. Zuerst wird, falls vorhanden, die {{jsxref("Classes/extends", "extends")}}-Klausel ausgewertet. Ihr Ergebnis muss eine gültige Konstruktorfunktion oder `null` sein; andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.
2. Die Methode {{jsxref("Classes/constructor", "constructor")}} wird ermittelt. Ist kein `constructor` vorhanden, wird eine Standardimplementierung eingesetzt. Da die Definition von `constructor` jedoch lediglich eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Property Keys der Klassenelemente werden in der Reihenfolge ihrer Deklaration ausgewertet. Wenn ein Property Key berechnet wird, wird der entsprechende Ausdruck ausgewertet. Dabei erhält `this` den Wert, den `this` in der Umgebung der Klasse hat (nicht die Klasse selbst). Die Eigenschaftswerte werden zu diesem Zeitpunkt noch nicht ausgewertet.
4. Methoden und Accessors werden in der Reihenfolge ihrer Deklaration eingerichtet. Instanzmethoden und -Accessors werden auf der `prototype`-Eigenschaft der aktuellen Klasse eingerichtet, statische Methoden und Accessors auf der Klasse selbst. Private Instanzmethoden und -Accessors werden gespeichert, um später direkt auf der Instanz eingerichtet zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse wird nun mit dem durch `extends` festgelegten Prototyp und der durch `constructor` festgelegten Implementierung initialisiert. Wenn ein in einem der vorangegangenen Schritte ausgewerteter Ausdruck auf den Namen der Klasse zuzugreifen versucht, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klassenelemente werden in der Reihenfolge ihrer Deklaration ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird sein Initialisierungsausdruck gespeichert. Er wird beim Erstellen der Instanz ausgewertet: bei Basisklassen zu Beginn des Konstruktors und bei abgeleiteten Klassen unmittelbar bevor der Aufruf von `super()` zurückkehrt.
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird sein Initialisierungsausdruck mit der Klasse selbst als `this` ausgewertet. Anschließend wird die Eigenschaft auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit der Klasse selbst als `this` ausgewertet.
7. Die Klasse ist nun vollständig initialisiert und kann als Konstruktorfunktion verwendet werden.

Wie Instanzen erstellt werden, erfahren Sie in der Referenz zu {{jsxref("Classes/constructor", "constructor")}}.

## Beispiele

### `this` bei Instanzmethoden und statischen Methoden binden

Wenn eine statische Methode oder eine Instanzmethode ohne einen Wert für {{jsxref("this")}} aufgerufen wird – etwa indem die Methode einer Variablen zugewiesen und anschließend aufgerufen wird –, hat `this` innerhalb der Methode den Wert `undefined`. Dieses Verhalten gilt auch ohne die Anweisung [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode), da Code innerhalb des `class`-Körpers immer im Strict Mode ausgeführt wird.

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
const eat = Animal.eat;
eat(); // undefined
```

Wenn wir das obige Beispiel mit herkömmlicher funktionsbasierter Syntax außerhalb des Strict Mode neu schreiben, wird `this` bei Methodenaufrufen automatisch an {{jsxref("globalThis")}} gebunden. Im Strict Mode bleibt der Wert von `this` dagegen `undefined`.

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

const obj = new Animal();
const speak = obj.speak;
speak(); // global object (in non–strict mode)

const eat = Animal.eat;
eat(); // global object (in non-strict mode)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden [Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes)
- [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [ES6 im Detail: Klassen](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) auf hacks.mozilla.org (2015)
