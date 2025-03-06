---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jsSidebar("Classes")}}

Klassen sind eine Vorlage zur Erstellung von Objekten. Sie kapseln Daten mit Code, um mit diesen Daten zu arbeiten. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain), haben jedoch auch eine eigene Syntax und Semantik, die einzigartig für Klassen ist.

Weitere Beispiele und Erklärungen finden Sie im [Verwenden von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden.

## Beschreibung

### Definieren von Klassen

Klassen sind in der Tat "besondere [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)", und genauso wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: über einen [Klassen-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder eine [Klassen-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

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

Wie Funktionsausdrücke können Klassen-Ausdrücke anonym sein oder einen Namen haben, der sich von der Variable unterscheidet, der sie zugewiesen sind. Allerdings unterliegen Klassendeklarationen im Gegensatz zu Funktionsdeklarationen denselben [temporären Totzonen](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)-Einschränkungen wie `let` oder `const` und verhalten sich so, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) wären.

### Klassenkörper

Der Körper einer Klasse ist der Teil, der in geschweifte Klammern `{}` eingeschlossen ist. Hier definieren Sie Klassenmitglieder, wie Methoden oder Konstruktoren.

Der Körper einer Klasse wird im [Strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, auch ohne das `"use strict"`-Direktiv.

Ein Klasselement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Ort: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sie 16 mögliche Kombinationen. Um die Referenz logischer zu unterteilen und überlappende Inhalte zu vermeiden, werden die verschiedenen Elemente detailliert auf verschiedenen Seiten vorgestellt:

- [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions)
  - : Öffentliche Instanzmethode
- [getter](/de/docs/Web/JavaScript/Reference/Functions/get)
  - : Öffentlicher Instanz-Getter
- [setter](/de/docs/Web/JavaScript/Reference/Functions/set)
  - : Öffentlicher Instanz-Setter
- [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
  - : Öffentliches Instanzfeld
- [`static`](/de/docs/Web/JavaScript/Reference/Classes/static)
  - : Öffentliche statische Methode, Getter, Setter und Feld
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
  - : Alles, was privat ist

> [!NOTE]
> Private Eigenschaften haben die Einschränkung, dass alle Eigenschaftsnamen in derselben Klasse eindeutig sein müssen. Alle anderen öffentlichen Eigenschaften unterliegen dieser Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, und die letzte überschreibt die anderen. Dies ist dasselbe Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Zusätzlich gibt es zwei spezielle Syntaxen für Klasselemente: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke), mit ihren eigenen Referenzen.

#### Konstruktor

Die {{jsxref("Classes/constructor", "Konstruktor")}}-Methode ist eine spezielle Methode zur Erstellung und Initialisierung eines mit einer Klasse erstellten Objekts. Es kann nur eine spezielle Methode mit dem Namen "constructor" in einer Klasse geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als eine Vorkommen einer `constructor`-Methode enthält.

Ein Konstruktor kann das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super)-Schlüsselwort verwenden, um den Konstruktor der Superklasse aufzurufen.

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

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen eine flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Auswertung von Anweisungen während der Initialisierung, wobei der Zugriff auf den privaten Bereich gewährt wird.

Mehrere statische Blöcke können erklärt werden, und diese können mit der Deklaration von statischen Feldern und Methoden durchmischt werden (alle statischen Elemente werden in Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden werden im Prototyp jeder Klasseninstanz definiert und von allen Instanzen geteilt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Weitere Informationen finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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

Das {{jsxref("Classes/static", "static")}}-Schlüsselwort definiert eine statische Methode oder ein Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden auf der Klasse selbst anstelle jeder Instanz definiert. Statische Methoden werden oft verwendet, um Dienstprogrammfunktionen für eine Anwendung zu erstellen, während statische Felder nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen hinweg repliziert werden müssen.

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

Mit der Syntax der Klassenfelddeklaration kann das [Konstruktor](#konstruktor)-Beispiel wie folgt geschrieben werden:

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

Klassenfelder sind ähnlich wie Objekteigenschaften, nicht wie Variablen, daher verwenden wir Schlüsselwörter wie `const` nicht, um sie zu deklarieren. In JavaScript verwenden [private Eigenschaften](#private_properties_2) eine spezielle Identifikatorsyntax, deshalb sollten auch keine Modifikatorschlüsselwörter wie `public` und `private` verwendet werden.

Wie oben gezeigt, können Felder mit oder ohne Standardwert deklariert werden. Felder ohne Standardwerte haben standardmäßig den Wert `undefined`. Durch die Vorab-Deklaration von Feldern werden Klassendefinitionen selbstdokumentierender, und die Felder sind immer vorhanden, was bei Optimierungen hilft.

Siehe [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.

#### Private Eigenschaften

Unter Verwendung privater Felder kann die Definition wie unten verfeinert werden.

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

Es ist ein Fehler, von außerhalb der Klasse auf private Felder zuzugreifen; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass die Nutzer Ihrer Klassen sich nicht auf interne Details verlassen können, die sich von Version zu Version ändern können.

Private Felder können nur in einer Felderklärung im Voraus deklariert werden. Sie können nicht später durch Zuweisung erstellt werden, wie es bei normalen Eigenschaften möglich ist.

Für weitere Informationen siehe [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

### Vererbung

Das {{jsxref("Classes/extends", "extends")}}-Schlüsselwort wird in _Klassendeklarationen_ oder _Klassen-Ausdrücken_ verwendet, um eine Klasse als Kind eines anderen Konstruktors zu erstellen (entweder einer Klasse oder einer Funktion).

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

Wenn im Unterklasse ein Konstruktor vorhanden ist, muss er zuerst `super()` aufrufen, bevor `this` verwendet wird. Das {{jsxref("Operators/super", "super")}}-Schlüsselwort kann auch verwendet werden, um die entsprechenden Methoden der Superklasse aufzurufen.

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

### Ausführungsreihenfolge

Wenn eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden ihre verschiedenen Komponenten in folgender Reihenfolge ausgewertet:

1. Die {{jsxref("Classes/extends", "extends")}}-Klausel, falls vorhanden, wird zuerst ausgewertet. Sie muss zu einer gültigen Konstruktorfunktion oder `null` ausgewertet werden, sonst wird ein {{jsxref("TypeError")}} ausgelöst.
2. Die {{jsxref("Classes/constructor", "constructor")}}-Methode wird extrahiert und durch eine Standardimplementierung ersetzt, wenn `constructor` nicht vorhanden ist. Da die `constructor`-Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Eigenschaftsschlüssel der Klasselemente werden in der Deklarationsreihenfolge ausgewertet. Wenn der Eigenschaftsschlüssel berechnet ist, wird der berechnete Ausdruck ausgewertet, wobei der Wert von `this` auf den umgebenden Wert von `this` gesetzt wird (nicht die Klasse selbst). Keiner der Eigenschaftswerte wird zu diesem Zeitpunkt ausgewertet.
4. Methoden und Zugriffsmethoden werden in der Deklarationsreihenfolge installiert. Instanzmethoden und Zugriffsmethoden werden auf der `prototype`-Eigenschaft der aktuellen Klasse installiert, und statische Methoden und Zugriffsmethoden werden auf der Klasse selbst installiert. Private Instanzmethoden und Zugriffsmethoden werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse wird nun mit dem durch `extends` angegebenen Prototyp und der durch `constructor` spezifizierten Implementierung initialisiert. Für alle vorherigen Schritte, wenn ein ausgewerteter Ausdruck versucht, auf den Namen der Klasse zuzugreifen, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klasselemente werden in der Deklarationsreihenfolge ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird sein Initialisierer-Ausdruck gespeichert. Der Initialisierer wird während der Instanzerstellung ausgewertet, zu Beginn des Konstruktors (für Basisklassen) oder unmittelbar bevor der `super()`-Aufruf zurückkehrt (für abgeleitete Klassen).
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird sein Initialisierer mit `this` ausgewertet, das auf die Klasse selbst gesetzt ist, und die Eigenschaft wird auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit `this` ausgewertet, das auf die Klasse selbst gesetzt ist.
7. Die Klasse ist nun vollständig initialisiert und kann als Konstruktorfunktion verwendet werden.

Wie Instanzen erstellt werden, erfahren Sie in der {{jsxref("Classes/constructor", "constructor")}} Referenz.

## Beispiele

### Binden von this mit Instanz- und statischen Methoden

Wenn eine statische oder Instanzmethode ohne Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, wie z.B. durch Zuweisung der Methode zu einer Variablen und dem anschließenden Aufruf, wird der `this`-Wert innerhalb der Methode `undefined` sein. Dieses Verhalten ist das gleiche, auch wenn das [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode)-Direktiv nicht vorhanden ist, da der Code innerhalb des `class`-Körpers immer im strikten Modus ausgeführt wird.

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

Wenn wir das obige mit traditioneller funktionsbasierter Syntax im Nicht-Strikt-Modus umschreiben, werden dann `this`-Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im strikten Modus bleibt der Wert von `this` `undefined`.

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

- [Verwenden von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden
- [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [ES6 Im Detail: Klassen](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) auf hacks.mozilla.org (2015)
