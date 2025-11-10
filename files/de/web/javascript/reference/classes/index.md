---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Klassen sind Vorlagen zur Erstellung von Objekten. Sie kapseln Daten mit Code, der auf diesen Daten arbeitet. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), haben aber auch eine eigene Syntax und Semantik, die einzigartig für Klassen sind.

Für weitere Beispiele und Erklärungen sehen Sie sich den [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden an.

## Beschreibung

### Definition von Klassen

Klassen sind tatsächlich "spezielle [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)" und genauso wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: als [Klassenausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder [Klassendeklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

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

Wie Funktionsausdrücke können Klassenausdrücke anonym sein oder einen anderen Namen als die Variable haben, der sie zugewiesen sind. Im Gegensatz zu Funktionsdeklarationen haben Klassendeklarationen jedoch die gleichen [zeitlichen Sperrbereich](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) Einschränkungen wie `let` oder `const` und verhalten sich, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) werden.

### Klassenrumpf

Der Rumpf einer Klasse ist der Teil, der in geschweiften Klammern `{}` steht. Hier definieren Sie Klassenmitglieder wie Methoden oder Konstruktoren.

Der Rumpf einer Klasse wird im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, auch ohne die `"use strict"` Direktive.

Ein Klassenelement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Standort: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sich 16 mögliche Kombinationen. Um die Referenz logischer zu unterteilen und überlappende Inhalte zu vermeiden, werden die verschiedenen Elemente detailliert auf unterschiedlichen Seiten vorgestellt:

- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : Öffentliches Instanzmethode
- [getter](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Öffentlicher Instanz-Getter
- [setter](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Öffentlicher Instanz-Setter
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : Öffentliches Instanzfeld
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
  - : Öffentliche statische Methode, Getter, Setter und Feld
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
  - : Alles, was privat ist

> [!NOTE]
> Private Elemente haben die Einschränkung, dass alle in derselben Klasse deklarierten privaten Namen eindeutig sein müssen. Alle anderen öffentlichen Eigenschaften haben diese Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, und das letzte überschreibt die anderen. Dies ist dasselbe Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Zusätzlich gibt es zwei besondere Syntaxen für Klassenelemente: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke), mit ihren eigenen Referenzen.

#### Konstruktor

Die {{jsxref("Classes/constructor", "constructor")}} Methode ist eine spezielle Methode zur Erstellung und Initialisierung eines mit einer Klasse erstellten Objekts. Es kann in einer Klasse nur eine spezielle Methode mit dem Namen "constructor" geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als ein Vorkommen einer `constructor` Methode enthält.

Ein Konstruktor kann das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) Schlüsselwort verwenden, um den Konstruktor der Superklasse aufzurufen.

Sie können Instanzeigenschaften im Konstruktor erstellen:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Alternativ, wenn die Werte Ihrer Instanzeigenschaften nicht von den Argumenten des Konstruktors abhängen, können Sie diese als [Klassenfelder](#felderdeklarationen) definieren.

#### Statische Initialisierungsblöcke

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen eine flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Auswertung von Anweisungen während der Initialisierung, während der Zugriff auf den privaten Bereich gewährt wird.

Mehrere statische Blöcke können deklariert werden, und diese können mit der Deklaration von statischen Feldern und Methoden durchmischt werden (alle statischen Elemente werden in Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden werden auf dem Prototyp jeder Klasseninstanz definiert und von allen Instanzen geteilt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Für weitere Informationen, sehen Sie sich die [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions) an.

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

Das {{jsxref("Classes/static", "static")}} Schlüsselwort definiert eine statische Methode oder ein statisches Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden an der Klasse selbst statt an jeder Instanz definiert. Statische Methoden werden häufig verwendet, um Dienstfunktionen für eine Anwendung zu erstellen, während statische Felder nützlich sind für Caches, feste Konfigurationen oder alle anderen Daten, die nicht über Instanzen repliziert werden müssen.

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

#### Felderdeklarationen

Mit der Syntax zur Deklaration von Klassenfeldern kann das [Konstruktor](#konstruktor) Beispiel wie folgt geschrieben werden:

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

Klassenfelder ähneln Objekteigenschaften, nicht Variablen, daher verwenden wir keine Schlüsselwörter wie `const`, um sie zu deklarieren. In JavaScript verwenden [private Elemente](#private_elemente) eine spezielle Bezeichnersyntax, daher sollten Modifikatoren wie `public` und `private` ebenfalls nicht verwendet werden.

Wie oben zu sehen ist, können die Felder mit oder ohne einen Standardwert deklariert werden. Felder ohne Standardwerte haben standardmäßig den Wert `undefined`. Indem Felder im Voraus deklariert werden, werden die Klassendefinitionen besser dokumentiert und die Felder sind immer vorhanden, was bei Optimierungen hilft.

Weitere Informationen finden Sie in den [öffentlichen Klassenfeldern](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

#### Private Elemente

Mithilfe von privaten Feldern kann die Definition wie folgt verfeinert werden.

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

Es ist ein Fehler, von außerhalb der Klasse auf private Felder zuzugreifen; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass die Benutzer Ihrer Klassen nicht von Interna abhängen, die sich von Version zu Version ändern können.

Private Felder können nur im Voraus in einer Felddeklaration deklariert werden. Sie können nicht später durch Zuweisungen erstellt werden, so wie es bei normalen Eigenschaften möglich ist.

Private Methoden und Zugriffsrechte können auch mithilfe derselben Syntax wie ihre öffentlichen Gegenstücke definiert werden, jedoch beginnend mit dem Bezeichner `#`.

Für weitere Informationen siehe [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).

### Vererbung

Das {{jsxref("Classes/extends", "extends")}} Schlüsselwort wird in _Klassendeklarationen_ oder _Klassenausdrücken_ verwendet, um eine Klasse als Kind eines anderen Konstruktors (entweder einer Klasse oder einer Funktion) zu erstellen.

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

Wenn im Unterklasse ein Konstruktor vorhanden ist, muss `super()` zuerst aufgerufen werden, bevor `this` verwendet wird. Das {{jsxref("Operators/super", "super")}} Schlüsselwort kann auch verwendet werden, um entsprechende Methoden der Superklasse aufzurufen.

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

Wenn eine [`class` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden ihre verschiedenen Komponenten in folgender Reihenfolge ausgewertet:

1. Die {{jsxref("Classes/extends", "extends")}} Klausel, falls vorhanden, wird zuerst ausgewertet. Sie muss zu einer gültigen Konstruktorfunktion oder `null` ausgewertet werden, ansonsten wird ein {{jsxref("TypeError")}} ausgelöst.
2. Die {{jsxref("Classes/constructor", "constructor")}} Methode wird extrahiert und durch eine Standardimplementierung ersetzt, falls `constructor` nicht vorhanden ist. Da die `constructor` Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Eigenschaftsschlüssel der Klassenelemente werden in Deklarationsreihenfolge ausgewertet. Wenn der Eigenschaftsschlüssel berechnet wird, wird der Berechnungsausdruck ausgewertet, wobei der `this` Wert auf den `this` Wert umgebender Klasse gesetzt wird (nicht die Klasse selbst). Keiner der Eigenschaftswerte wird zu diesem Zeitpunkt ausgewertet.
4. Methoden und Zugriffsrechte werden in Deklarationsreihenfolge installiert. Instanzmethoden und Zugriffsrechte werden auf der `prototype` Eigenschaft der aktuellen Klasse installiert, und statische Methoden und Zugriffsrechte werden auf der Klasse selbst installiert. Private Instanzmethoden und Zugriffsrechte werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse wird nun mit dem Prototyp gemäß `extends` und der Implementierung gemäß `constructor` initialisiert. Für alle obigen Schritte gilt, wenn ein ausgewertet Ausdruck versucht, auf den Namen der Klasse zuzugreifen, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klassenelemente werden in Deklarationsreihenfolge ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird der Initialisierungsausdruck gespeichert. Der Initialisierer wird während der Instanzerstellung ausgewertet, zu Beginn des Konstruktors (für Basisklassen) oder unmittelbar bevor der `super()` Aufruf zurückkehrt (für abgeleitete Klassen).
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird der Initialisierer mit `this` auf die Klasse selbst gesetzt ausgewertet, und die Eigenschaft wird auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit `this` auf die Klasse selbst gesetzt ausgewertet.
7. Die Klasse ist nun vollständig initialisiert und kann als Konstruktorfunktion verwendet werden.

Für Informationen darüber, wie Instanzen erstellt werden, siehe die {{jsxref("Classes/constructor", "constructor")}} Referenz.

## Beispiele

### Binden von this mit Instanz- und statischen Methoden

Wenn eine statische oder Instanzmethode ohne einen Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, etwa indem die Methode einer Variablen zugewiesen und dann aufgerufen wird, wird der `this` Wert innerhalb der Methode `undefined` sein. Dieses Verhalten bleibt das gleiche, selbst wenn die [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode) Direktive nicht vorhanden ist, da der Code im `class` Körper immer im strikten Modus ausgeführt wird.

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

Wenn wir das oben genannte mit traditioneller funktionsbasierter Syntax im nicht-strikten Modus umschreiben, dann werden `this` Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im strikten Modus bleibt der Wert von `this` als `undefined`.

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

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`class` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [ES6 In Depth: Classes](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) auf hacks.mozilla.org (2015)
