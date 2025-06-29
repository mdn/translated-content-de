---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Classes")}}

Klassen sind eine Vorlage zur Erstellung von Objekten. Sie kapseln Daten mit Code, der mit diesen Daten arbeitet. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), haben jedoch auch eine spezifische Syntax und Semantik, die nur für Klassen gilt.

Für weitere Beispiele und Erklärungen, siehe den [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden.

## Beschreibung

### Klassen definieren

Klassen sind tatsächlich "spezielle [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)" und wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: als [Klassen-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder als [Klassen-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

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

Wie Funktionsausdrücke können Klassenausdrücke anonym sein oder einen anderen Namen als die Variable, der sie zugewiesen sind, haben. Im Gegensatz zu Funktionsdeklarationen unterliegen Klassendeklarationen jedoch denselben [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) Einschränkungen wie `let` oder `const` und verhalten sich, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) würden.

### Klassenkörper

Der Körper einer Klasse ist der Teil, der in geschweiften Klammern `{}` steht. Hier definieren Sie Klassenmitglieder, wie Methoden oder Konstruktor.

Der Körper einer Klasse wird im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, selbst ohne die `"use strict"` Direktive.

Ein Klassenelement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Position: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sie 16 mögliche Kombinationen. Um die Referenz logischer zu gliedern und überlappende Inhalte zu vermeiden, werden die verschiedenen Elemente in unterschiedlichen Seiten detailliert vorgestellt:

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
- [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements)
  - : Alles, was privat ist

> [!NOTE]
> Private Elemente haben die Einschränkung, dass alle in derselben Klasse deklarierten privaten Namen eindeutig sein müssen. Alle anderen öffentlichen Eigenschaften haben diese Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, und die letzte überschreibt die vorherigen. Dies ist das gleiche Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Zusätzlich gibt es zwei spezielle Klassenelement-Syntaxen: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke), mit ihren eigenen Referenzen.

#### Konstruktor

Die {{jsxref("Classes/constructor", "constructor")}} Methode ist eine spezielle Methode zur Erstellung und Initialisierung eines mit einer Klasse erstellten Objekts. Es kann nur eine spezielle Methode mit dem Namen "constructor" in einer Klasse geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als eine Vorkommen einer `constructor` Methode enthält.

Ein Konstruktor kann das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) Schlüsselwort verwenden, um den Konstruktor der Oberklasse aufzurufen.

Sie können Instanzeigenschaften innerhalb des Konstruktors erstellen:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Alternativ, wenn die Werte Ihrer Instanzeigenschaften nicht von den Argumenten des Konstruktors abhängen, können Sie sie als [Klassenfelder](#felderklärungen) definieren.

#### Statische Initialisierungsblöcke

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen eine flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Auswertung von Anweisungen während der Initialisierung, während der Zugriff auf den privaten Bereich gewährt wird.

Mehrere statische Blöcke können deklariert werden, und diese können mit der Deklaration von statischen Feldern und Methoden durchmischt werden (alle statischen Elemente werden in Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden sind am Prototyp jeder Klasseninstanz definiert und werden von allen Instanzen geteilt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Für weitere Informationen siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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

Das {{jsxref("Classes/static", "static")}} Schlüsselwort definiert eine statische Methode oder ein Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) sind an der Klasse selbst und nicht an jeder Instanz definiert. Statische Methoden werden oft verwendet, um Dienstprogrammfunktionen für eine Anwendung zu erstellen, während statische Felder nützlich für Caches, feste Konfiguration oder andere Daten sind, die nicht über Instanzen repliziert werden müssen.

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

#### Felderklärungen

Mit der Klassenfelderklärungssyntax kann das [Konstruktor](#konstruktor) Beispiel so geschrieben werden:

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

Klassenfelder sind ähnlich zu Objekteigenschaften, nicht Variablen, daher verwenden wir Schlüsselwörter wie `const` nicht, um sie zu deklarieren. In JavaScript verwenden [private Elemente](#private_elemente) eine spezielle Identifikatorsyntax, daher sollten auch keine Modifikatorschlüsselwörter wie `public` und `private` verwendet werden.

Wie oben gezeigt, können die Felder mit oder ohne Standardwert deklariert werden. Felder ohne Standardwerte werden automatisch auf `undefined` gesetzt. Durch das Vorabdeklarieren von Feldern werden Klassendefinitionen selbstdokumentierender und die Felder sind immer vorhanden, was Optimierungen unterstützt.

Siehe [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.

#### Private Elemente

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

Es ist ein Fehler, von außerhalb der Klasse auf private Felder zu verweisen; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass die Benutzer Ihrer Klassen nicht von Interna abhängen, die sich von Version zu Version ändern können.

Private Felder können nur im Voraus in einer Felderklärung deklariert werden. Sie können nicht später durch Zuweisung zu ihnen erstellt werden, so wie es bei normalen Eigenschaften möglich ist.

Private Methoden und Zugriffsoren können auch mit derselben Syntax wie ihre öffentlichen Gegenstücke definiert werden, aber mit einem Identifier, der mit `#` beginnt.

Für weitere Informationen siehe [Private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).

### Vererbung

Das {{jsxref("Classes/extends", "extends")}} Schlüsselwort wird in _Klassendeklarationen_ oder _Klassen-Ausdrücken_ verwendet, um eine Klasse als Kind eines anderen Konstruktors (entweder einer Klasse oder einer Funktion) zu erstellen.

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

Wenn im Unterklasse ein Konstruktor vorhanden ist, muss dieser zuerst `super()` aufrufen, bevor `this` verwendet wird. Das {{jsxref("Operators/super", "super")}} Schlüsselwort kann auch verwendet werden, um entsprechende Methoden der Oberklasse aufzurufen.

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

1. Die {{jsxref("Classes/extends", "extends")}} Klausel, falls vorhanden, wird zuerst ausgewertet. Sie muss zu einer gültigen Konstruktorfunktion oder `null` ausgewertet werden, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.
2. Die {{jsxref("Classes/constructor", "constructor")}} Methode wird extrahiert, mit einer Standardimplementierung ersetzt, wenn `constructor` nicht vorhanden ist. Da die `constructor` Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Schlüssel der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet. Wenn der Eigenschaftsschlüssel berechnet wird, wird der berechnete Ausdruck mit dem `this`-Wert ausgewertet, der auf den umgebenden Kontext der Klasse (nicht die Klasse selbst) gesetzt ist. Keiner der Eigenschaftswerte wird zu diesem Zeitpunkt ausgewertet.
4. Methoden und Zugriffsoren werden in der Reihenfolge der Deklaration installiert. Instanzmethoden und Zugriffsoren werden auf der `prototype` Eigenschaft der aktuellen Klasse installiert, und statische Methoden und Zugriffsoren werden auf der Klasse selbst installiert. Private Instanzmethoden und Zugriffsoren werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse ist jetzt mit dem durch `extends` angegebenen Prototyp und der durch `constructor` angegebenen Implementierung initialisiert. Für alle oben genannten Schritte gilt: Wenn ein ausgewerteter Ausdruck versucht, auf den Namen der Klasse zuzugreifen, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird sein Initialisierungsausdruck gespeichert. Die Initialisierung wird während der Instanzerstellung zu Beginn des Konstruktors (für Basisklassen) oder unmittelbar bevor der `super()` Aufruf zurückkehrt (für abgeleitete Klassen) ausgewertet.
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird sein Initialisierer mit `this` ausgewertet, das auf die Klasse selbst gesetzt ist, und die Eigenschaft wird auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit `this` ausgewertet, das auf die Klasse selbst gesetzt ist.
7. Die Klasse ist nun vollständig initialisiert und kann als Konstruktorfunktion verwendet werden.

Für Informationen zur Erstellung von Instanzen siehe die {{jsxref("Classes/constructor", "constructor")}} Referenz.

## Beispiele

### Bindung von this mit Instanz- und statischen Methoden

Wenn eine statische oder Instanzmethode ohne einen Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, z.B. indem die Methode einer Variablen zugewiesen und dann aufgerufen wird, wird der `this` Wert innerhalb der Methode `undefined` sein. Dieses Verhalten ist dasselbe, selbst wenn die [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode) Direktive nicht vorhanden ist, da Code innerhalb des `class` Körpers immer im strict mode ausgeführt wird.

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

Wenn wir das Obige unter Verwendung der traditionellen funktionsbasierten Syntax im Nicht-streng-Modus umschreiben, werden `this` Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im Striktmodus bleibt der Wert von `this` `undefined`.

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
