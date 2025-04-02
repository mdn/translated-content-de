---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{jsSidebar("Classes")}}

Klassen sind eine Vorlage zum Erstellen von Objekten. Sie kapseln Daten mit Code, um mit diesen Daten zu arbeiten. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), haben jedoch auch eine spezielle Syntax und Semantik, die einzigartig für Klassen sind.

Für mehr Beispiele und Erklärungen, siehe den [Leitfaden zur Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes).

## Beschreibung

### Klassen definieren

Klassen sind tatsächlich "spezielle [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)", und genauso wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: ein [Klassen-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder eine [Klassen-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

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

Wie Funktionsausdrücke können Klassen-Ausdrücke anonym sein oder einen anderen Namen haben als die Variable, der sie zugewiesen sind. Im Gegensatz zu Funktionsdeklarationen gelten für Klassendeklarationen jedoch die gleichen Einschränkungen der [zeitweiligen Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) wie für `let` oder `const` und verhalten sich so, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) wären.

### Klassenkörper

Der Körper einer Klasse ist der Teil, der in geschweiften Klammern `{}` steht. Hier definieren Sie Klassenmitglieder wie Methoden oder den Konstruktor.

Der Körper einer Klasse wird im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, auch ohne die `"use strict"`-Direktive.

Ein Klassenelement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Ort: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sie 16 mögliche Kombinationen. Um den Überblick über die Referenz logischer zu gestalten und sich überschneidende Inhalte zu vermeiden, werden die verschiedenen Elemente ausführlich auf unterschiedlichen Seiten vorgestellt:

- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : Öffentliche Instanzmethode
- [getter](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Öffentlicher Instanzgetter
- [setter](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Öffentlicher Instanzsetter
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : Öffentliches Instanzfeld
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
  - : Öffentliche statische Methode, Getter, Setter und Feld
- [Privateigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
  - : Alles, was privat ist

> [!NOTE]
> Privateigenschaften haben die Einschränkung, dass alle in derselben Klasse deklarierten Eigenschaftsnamen eindeutig sein müssen. Alle anderen öffentlichen Eigenschaften unterliegen dieser Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit dem gleichen Namen haben, und die letzte überschreibt die anderen. Dies ist dasselbe Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Darüber hinaus gibt es zwei spezielle Klassenelement-Syntaxen: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke), mit ihren eigenen Referenzen.

#### Konstruktor

Die {{jsxref("Classes/constructor", "constructor")}}-Methode ist eine spezielle Methode zum Erstellen und Initialisieren eines mit einer Klasse erstellten Objekts. Es kann nur eine spezielle Methode mit dem Namen "constructor" in einer Klasse geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als eine Instanz einer `constructor`-Methode enthält.

Ein Konstruktor kann das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super)-Schlüsselwort verwenden, um den Konstruktor der Oberklasse aufzurufen.

Sie können Instanzeigenschaften innerhalb des Konstruktors erstellen:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Alternativ, wenn die Werte Ihrer Instanzeigenschaften nicht von den Argumenten des Konstruktors abhängen, können Sie sie als [Klassenfelder](#felddeklarationen) definieren.

#### Statische Initialisierungsblöcke

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen eine flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Auswertung von Anweisungen während der Initialisierung, wobei der Zugang zum privaten Bereich gewährt wird.

Mehrere statische Blöcke können deklariert werden, und diese können mit der Deklaration von statischen Feldern und Methoden durchsetzt werden (alle statischen Elemente werden in Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden werden auf dem Prototyp jeder Klasseninstanz definiert und von allen Instanzen geteilt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatoren oder asynchrone Generatoren sein. Für mehr Informationen siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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

Das {{jsxref("Classes/static", "static")}}-Schlüsselwort definiert eine statische Methode oder ein statisches Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden auf der Klasse selbst und nicht auf jeder Instanz definiert. Statische Methoden werden oft verwendet, um Hilfsfunktionen für eine Anwendung zu erstellen, während statische Felder nützlich sind für Caches, feste Konfigurationen oder andere Daten, die nicht über Instanzen hinweg dupliziert werden müssen.

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

Mit der Syntax für die Klassenfelddeklaration kann das [Konstruktorexample](#konstruktor) wie folgt geschrieben werden:

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

Klassenfelder sind ähnlich wie Objekteigenschaften und keine Variablen, daher verwenden wir Schlüsselwörter wie `const` nicht, um sie zu deklarieren. In JavaScript verwenden [private Eigenschaften](#private_eigenschaften) eine spezielle Identifiersyntax, daher sollten Modifier-Schlüsselwörter wie `public` und `private` ebenfalls nicht verwendet werden.

Wie oben zu sehen, können die Felder mit oder ohne einen Standardwert deklariert werden. Felder ohne Standardwerte haben standardmäßig den Wert `undefined`. Durch die Deklaration der Felder von Anfang an werden Klassendefinitionen selbstdokumentierend, und die Felder sind immer vorhanden, was bei Optimierungen hilft.

Siehe [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.

#### Private Eigenschaften

Mit privaten Feldern kann die Definition wie folgt verfeinert werden.

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

Es ist ein Fehler, auf private Felder von außerhalb der Klasse zuzugreifen; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass die Benutzer Ihrer Klassen nicht von internen Details abhängen können, die sich von Version zu Version ändern können.

Private Felder können nur im Voraus in einer Felddeklaration deklariert werden. Sie können nicht später durch die Zuweisung zu ihnen erstellt werden, wie dies bei normalen Eigenschaften möglich ist.

Weitere Informationen finden Sie unter [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

### Vererbung

Das {{jsxref("Classes/extends", "extends")}}-Schlüsselwort wird in _Klassendeklarationen_ oder _Klassen-Ausdrücken_ verwendet, um eine Klasse als Kind eines anderen Konstruktors (entweder einer Klasse oder einer Funktion) zu erstellen.

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

Wenn ein Konstruktor in der Unterklasse vorhanden ist, muss er zuerst `super()` aufrufen, bevor `this` verwendet wird. Das {{jsxref("Operators/super", "super")}}-Schlüsselwort kann auch verwendet werden, um entsprechende Methoden der Oberklasse aufzurufen.

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

Wenn eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden seine verschiedenen Komponenten in der folgenden Reihenfolge ausgewertet:

1. Die {{jsxref("Classes/extends", "extends")}}-Klausel, falls vorhanden, wird zuerst ausgewertet. Sie muss zu einer gültigen Konstrukturfunktion oder `null` ausgewertet werden, ansonsten wird ein {{jsxref("TypeError")}} geworfen.
2. Die {{jsxref("Classes/constructor", "constructor")}}-Methode wird extrahiert und mit einer Standardimplementierung ersetzt, wenn `constructor` nicht vorhanden ist. Da die `constructor`-Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Eigenschaftsschlüssel der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet. Wenn der Eigenschaftsschlüssel berechnet ist, wird der berechnete Ausdruck mit dem `this`-Wert der umgebenden Klasse (nicht der Klasse selbst) ausgewertet. Keine der Eigenschaftswerte werden noch ausgewertet.
4. Methoden und Zugriffsmethoden werden in der Reihenfolge der Deklaration installiert. Instanzmethoden und Zugriffsmethoden werden auf der `prototype`-Eigenschaft der aktuellen Klasse installiert, und statische Methoden und Zugriffsmethoden auf der Klasse selbst. Private Instanzmethoden und Zugriffsmethoden werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse ist nun mit dem durch `extends` spezifizierten Prototyp und der durch `constructor` spezifizierten Implementierung initialisiert. Für alle obigen Schritte gilt, dass wenn ein ausgewerteter Ausdruck versucht, auf den Namen der Klasse zuzugreifen, ein {{jsxref("ReferenceError")}} geworfen wird, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird sein Initialisierungs-Ausdruck gespeichert. Der Initialisierer wird während der Instanzerstellung ausgewertet, zu Beginn des Konstruktors (für Basisklassen) oder sofort bevor der `super()`-Aufruf zurückkehrt (für abgeleitete Klassen).
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird der Initialisierer mit `this` auf die Klasse selbst gesetzt ausgewertet und die Eigenschaft auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit `this` auf die Klasse selbst gesetzt ausgewertet.
7. Die Klasse ist nun vollständig initialisiert und kann als Konstruktionsfunktion verwendet werden.

Wie Instanzen erstellt werden, finden Sie in der {{jsxref("Classes/constructor", "constructor")}}-Referenz.

## Beispiele

### Dieses mit Instanz- und statischen Methoden binden

Wenn eine statische oder Instanzmethode ohne einen Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, etwa indem die Methode einer Variablen zugewiesen und dann aufgerufen wird, wird der `this`-Wert innerhalb der Methode `undefined` sein. Dieses Verhalten ist dasselbe, selbst wenn die [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode)-Direktive nicht vorhanden ist, da der Code im Klassenkörper immer im strikten Modus ausgeführt wird.

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

Wenn wir das Obige im traditionellen, nicht strikten Funktions-basierten Syntax umschreiben, werden `this`-Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im strikten Modus bleibt der Wert von `this` jedoch `undefined`.

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

- [Leitfaden zur Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)
- [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [ES6 In Depth: Classes](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) auf hacks.mozilla.org (2015)
