---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Klassen sind eine Vorlage zur Erstellung von Objekten. Sie kapseln Daten mit Code, um mit diesen Daten zu arbeiten. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), haben aber auch einige Syntax- und Semantikunterschiede, die einzigartig für Klassen sind.

Für weitere Beispiele und Erklärungen, siehe den [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden.

## Beschreibung

### Klassen definieren

Klassen sind in der Tat "spezielle [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)" und ebenso wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: ein [Klassen-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder eine [Klassen-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

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

Wie Funktionsausdrücke können Klassenausdrücke anonym sein oder einen Namen haben, der sich von dem unterscheidet, der der Variablen zugewiesen ist. Im Gegensatz zu Funktionsdeklarationen haben Klassendeklarationen jedoch die gleichen Einschränkungen der [temporären Totzone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) wie `let` oder `const` und verhalten sich, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) werden.

### Klassenkörper

Der Körper einer Klasse ist der Teil, der in geschweifte Klammern `{}` eingeschlossen ist. Hier definieren Sie Klassenmitglieder wie Methoden oder Konstruktor.

Der Körper einer Klasse wird im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, auch ohne die `"use strict"` Direktive.

Ein Klassenelement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Ort: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sie 16 mögliche Kombinationen. Um die Referenz logischer zu gliedern und überlappende Inhalte zu vermeiden, werden die verschiedenen Elemente ausführlich auf verschiedenen Seiten vorgestellt:

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
> Private Eigenschaften haben die Einschränkung, dass alle Eigenschaftsnamen, die in derselben Klasse deklariert sind, einzigartig sein müssen. Alle anderen öffentlichen Eigenschaften unterliegen dieser Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, und die letzte überschreibt die anderen. Dies ist dasselbe Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Darüber hinaus gibt es zwei spezielle Klassen-Elementsyntax: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke), mit ihren eigenen Referenzen.

#### Konstruktor

Die {{jsxref("Classes/constructor", "constructor")}} Methode ist eine spezielle Methode zur Erstellung und Initialisierung eines Objekts, das mit einer Klasse erstellt wurde. Es kann nur eine spezielle Methode mit dem Namen "constructor" in einer Klasse geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als eine Vorkommen einer `constructor` Methode enthält.

Ein Konstruktor kann das [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) Schlüsselwort verwenden, um den Konstruktor der Superklasse aufzurufen.

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

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) erlauben flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Auswertung von Anweisungen während der Initialisierung, während sie Zugang zum privaten Bereich gewähren.

Mehrere statische Blöcke können deklariert werden, und diese können mit der Deklaration von statischen Feldern und Methoden durchmischt werden (alle statischen Elemente werden in Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden werden im Prototyp jeder Instanz einer Klasse definiert und von allen Instanzen gemeinsam genutzt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Für mehr Informationen, siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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

Das {{jsxref("Classes/static", "static")}} Schlüsselwort definiert eine statische Methode oder ein statisches Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden an der Klasse selbst statt bei jeder Instanz definiert. Statische Methoden werden oft genutzt, um Hilfsfunktionen für eine Anwendung zu erstellen, während statische Felder für Caches, feste Konfigurationen oder andere Daten nützlich sind, die nicht für jede Instanz repliziert werden müssen.

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

Mit der Klassenfelddeklarationssyntax kann das [Konstruktor](#konstruktor) Beispiel wie folgt geschrieben werden:

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

Klassenfelder sind ähnlich wie Objekteigenschaften, nicht wie Variablen, sodass wir keine Schlüsselwörter wie `const` verwenden, um sie zu deklarieren. In JavaScript verwenden [private Eigenschaften](#private_properties_2) eine spezielle Identifikatursyntax, deshalb sollten auch keine Modifikatorschlüsselwörter wie `public` und `private` verwendet werden.

Wie oben gezeigt, können die Felder mit oder ohne einen Standardwert deklariert werden. Felder ohne Standardwerte haben per Standard `undefined`. Durch die Deklaration von Feldern im Voraus werden Klassendefinitionen selbstdokumentierender, und die Felder sind immer vorhanden, was bei Optimierungen hilft.

Siehe [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für mehr Informationen.

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

Es ist ein Fehler, auf private Felder von außerhalb der Klasse zuzugreifen; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass Benutzer Ihrer Klassen nicht von internen Details abhängig sind, die sich von Version zu Version ändern könnten.

Private Felder können nur im Voraus in einer Felddeklaration deklariert werden. Sie können nicht später durch Zuweisung zu ihnen erstellt werden, wie es bei normalen Eigenschaften der Fall ist.

Für mehr Informationen, siehe [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

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

Wenn im Unterklasse ein Konstruktor vorhanden ist, muss er zunächst `super()` aufrufen, bevor `this` verwendet wird. Das {{jsxref("Operators/super", "super")}} Schlüsselwort kann auch verwendet werden, um entsprechende Methoden der Superklasse aufzurufen.

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

Wenn eine [`class` Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden seine verschiedenen Komponenten in der folgenden Reihenfolge ausgewertet:

1. Der {{jsxref("Classes/extends", "extends")}} Satz, wenn vorhanden, wird zuerst ausgewertet. Er muss zu einer gültigen Konstruktorfunktion oder `null` ausgewertet werden, oder ein {{jsxref("TypeError")}} wird ausgelöst.
2. Die {{jsxref("Classes/constructor", "constructor")}} Methode wird extrahiert, durch eine Standardimplementierung ersetzt, falls `constructor` nicht vorhanden ist. Da die `constructor` Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Schlüsseln der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet. Wenn der Schlüssel berechnet wird, wird der berechnete Ausdruck ausgewertet, wobei der `this` Wert auf den `this` Wert im umgebenden Kontext der Klasse (nicht die Klasse selbst) gesetzt wird. Keiner der Eigenschaftswerte wird zu diesem Zeitpunkt ausgewertet.
4. Methoden und Zugriffsrechte werden in der Reihenfolge der Deklaration installiert. Instanzmethoden und Zugriffsmethoden werden im `prototype` der aktuellen Klasse installiert, und statische Methoden und Zugriffsmethoden werden in der Klasse selbst installiert. Private Instanzmethoden und Zugriffsmethoden werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse ist jetzt mit dem durch `extends` spezifizierten Prototyp und der durch `constructor` spezifizierten Implementierung initialisiert. Für alle oben genannten Schritte, wenn ein ausgewerteter Ausdruck versucht, auf den Namen der Klasse zuzugreifen, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird der Initialisierungs-Ausdruck gespeichert. Der Initialisierer wird während der Erstellung der Instanz ausgewertet, zu Beginn des Konstruktors (für Basisklassen) oder unmittelbar bevor der `super()`-Aufruf zurückkehrt (für abgeleitete Klassen).
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird der Initialisierer mit `this` auf die Klasse selbst gesetzt ausgewertet und die Eigenschaft auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit `this` auf die Klasse selbst gesetzt ausgewertet.
7. Die Klasse ist jetzt vollständig initialisiert und kann als Konstruktorfunktion verwendet werden.

Wie Instanzen erstellt werden, siehe die {{jsxref("Classes/constructor", "constructor")}}-Referenz.

## Beispiele

### Binding von this mit Instanz- und statischen Methoden

Wenn eine statische oder Instanzmethode ohne einen Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, wie z. B. durch Zuweisung der Methode zu einer Variablen und sie dann aufzurufen, wird der `this` Wert innerhalb der Methode `undefined` sein. Dieses Verhalten ist dasselbe, auch wenn die [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode) Direktive nicht vorhanden ist, da Code im `class` Körper immer im strikten Modus ausgeführt wird.

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

Wenn wir das Obige unter Verwendung der traditionellen, auf Funktionen basierenden Syntax im nicht-strikten Modus umschreiben, dann werden `this`-Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im strikten Modus bleibt der Wert von `this` jedoch `undefined`.

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
