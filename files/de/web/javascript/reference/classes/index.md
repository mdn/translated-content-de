---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Klassen sind eine Vorlage zur Erstellung von Objekten. Sie kapseln Daten mit Code, um mit diesen Daten zu arbeiten. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), verfügen aber auch über einige Syntax- und Semantikelemente, die für Klassen einzigartig sind.

Mehr Beispiele und Erklärungen finden Sie im Leitfaden [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes).

## Beschreibung

### Definieren von Klassen

Klassen sind in der Tat "spezielle [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)", und genauso wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: ein [Klassen-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder eine [Klassen-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

```js
// Deklaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Ausdruck; die Klasse ist anonym, wird aber einer Variablen zugewiesen
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

// Ausdruck; die Klasse hat ihren eigenen Namen
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
```

Wie bei Funktionsausdrücken können Klassenausdrücke anonym sein oder einen anderen Namen als die ihnen zugewiesene Variable haben. Allerdings unterliegen Klassendeklarationen im Gegensatz zu Funktionsdeklarationen denselben Einschränkungen der [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) wie `let` oder `const` und verhalten sich so, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) wären.

### Klassenkörper

Der Körper einer Klasse ist der Teil, der in geschwungenen Klammern `{}` steht. Hier definieren Sie die Klassenmitglieder wie Methoden oder den Konstruktor.

Der Körper einer Klasse wird im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, auch ohne die `"use strict"`-Direktive.

Ein Klassenelement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Ort: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sich 16 mögliche Kombinationen. Um die Referenz logischer zu unterteilen und überlappende Inhalte zu vermeiden, werden die verschiedenen Elemente in unterschiedlichen Seiten ausführlich eingeführt:

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
- [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties)
  - : Alles, was privat ist

> [!NOTE]
> Private Eigenschaften haben die Einschränkung, dass alle Eigenschaftsnamen, die in derselben Klasse deklariert sind, eindeutig sein müssen. Andere öffentliche Eigenschaften unterliegen dieser Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, und die letzte überschreibt die anderen. Dies ist dasselbe Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Zusätzlich gibt es zwei spezielle Syntaxen für Klassenelemente: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke) mit ihren eigenen Referenzen.

#### Konstruktor

Die {{jsxref("Classes/constructor", "constructor")}}-Methode ist eine spezielle Methode zum Erstellen und Initialisieren eines mit einer Klasse erstellten Objekts. Es kann nur eine spezielle Methode mit dem Namen "constructor" in einer Klasse geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als einmal eine `constructor`-Methode enthält.

Ein Konstruktor kann das Schlüsselwort [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) verwenden, um den Konstruktor der Oberklasse aufzurufen.

Sie können Instanzeigenschaften innerhalb des Konstruktors erstellen:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

Alternativ, wenn die Werte Ihrer Instanzeigenschaften nicht von den Argumenten des Konstruktors abhängen, können Sie sie als [Klassenfelder](#feldeklarationen) definieren.

#### Statische Initialisierungsblöcke

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen eine flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Bewertung von Anweisungen während der Initialisierung, während der Zugriff auf den privaten Bereich gewährt wird.

Mehrere statische Blöcke können deklariert werden, und diese können mit der Deklaration von statischen Feldern und Methoden durchsetzt sein (alle statischen Elemente werden in Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden werden auf dem Prototyp jeder Klasseninstanz definiert und von allen Instanzen geteilt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Weitere Informationen finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

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
  // Methode
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

Das Schlüsselwort {{jsxref("Classes/static", "static")}} definiert eine statische Methode oder ein Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden auf der Klasse selbst anstelle jeder Instanz definiert. Statische Methoden werden oft verwendet, um Dienstprogrammfunktionen für eine Anwendung zu erstellen, während statische Felder nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen hinweg repliziert werden müssen.

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

#### Feldeklarationen

Mit der Syntax der Klassenfeldeklaration kann das Beispiel des [Konstruktors](#konstruktor) wie folgt geschrieben werden:

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

Klassenfelder ähneln Objekteigenschaften, nicht Variablen, daher verwenden wir keine Schlüsselwörter wie `const`, um sie zu deklarieren. In JavaScript verwenden [private Eigenschaften](#private_properties_2) eine spezielle Identifizierersyntax, daher sollten auch keine Modifizierschlüsselwörter wie `public` und `private` verwendet werden.

Wie oben gezeigt, können die Felder mit oder ohne Standardwert deklariert werden. Felder ohne Standardwerte haben standardmäßig den Wert `undefined`. Indem Felder im Voraus deklariert werden, werden Klassendefinitionen selbstdokumentierender, und die Felder sind immer vorhanden, was bei der Optimierung hilft.

Weitere Informationen finden Sie unter [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

#### Private Eigenschaften

Durch die Verwendung privater Felder kann die Definition wie folgt verfeinert werden.

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

Es ist ein Fehler, private Felder von außerhalb der Klasse zu referenzieren; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass die Benutzer Ihrer Klassen sich nicht auf Details verlassen können, die sich von Version zu Version ändern können.

Private Felder können nur im Voraus in einer Feldeklaration deklariert werden. Sie können nicht später durch Zuweisen zu ihnen erstellt werden, wie es bei normalen Eigenschaften möglich ist.

Weitere Informationen finden Sie unter [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

### Vererbung

Das Schlüsselwort {{jsxref("Classes/extends", "extends")}} wird in _Klassendeklarationen_ oder _Klassenausdrücken_ verwendet, um eine Klasse als Kind eines anderen Konstruktors (entweder einer Klasse oder einer Funktion) zu erstellen.

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
    super(name); // ruft den Konstruktor der Oberklasse auf und übergibt den Namen-Parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog("Mitzie");
d.speak(); // Mitzie bellt.
```

Wenn ein Konstruktor in der Unterklasse vorhanden ist, muss er zuerst `super()` aufrufen, bevor `this` verwendet wird. Das Schlüsselwort {{jsxref("Operators/super", "super")}} kann auch verwendet werden, um entsprechende Methoden der Oberklasse aufzurufen.

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
// Fuzzy macht ein Geräusch.
// Fuzzy brüllt.
```

### Auswertungsreihenfolge

Wenn eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden seine verschiedenen Komponenten in folgender Reihenfolge ausgewertet:

1. Die {{jsxref("Classes/extends", "extends")}}-Klausel, falls vorhanden, wird zuerst ausgewertet. Sie muss zu einer gültigen Konstruktorfunktion oder `null` ausgewertet werden, sonst wird ein {{jsxref("TypeError")}} ausgelöst.
2. Die {{jsxref("Classes/constructor", "constructor")}}-Methode wird extrahiert und durch eine Standardimplementierung ersetzt, falls `constructor` nicht vorhanden ist. Da die `constructor`-Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Eigenschaftenschlüssel der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet. Wenn der Eigenschaftenschlüssel berechnet wird, wird der berechnete Ausdruck ausgewertet, wobei der `this`-Wert auf den umgebenden `this`-Wert der Klasse gesetzt ist (nicht die Klasse selbst). Keiner der Eigenschaftswerte wird jedoch bisher ausgewertet.
4. Methoden und Zugriffs-Accessoren werden in Deklarationsreihenfolge installiert. Instanzmethoden und -Accessoren werden auf der `prototype`-Eigenschaft der aktuellen Klasse installiert, und statische Methoden und Accessoren auf der Klasse selbst installiert. Private Instanzmethoden und -Accessoren werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse ist jetzt mit dem durch `extends` angegebenen Prototyp und der durch `constructor` angegebenen Implementierung initialisiert. Für alle obigen Schritte, wenn ein ausgewerteter Ausdruck versucht, auf den Namen der Klasse zuzugreifen, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Werte der Klassenelemente werden in der Reihenfolge der Deklaration ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird der Initialisierer-Ausdruck gespeichert. Der Initialisierer wird bei der Erstellung der Instanz ausgewertet, entweder am Beginn des Konstruktors (bei Basisklassen) oder unmittelbar bevor der `super()`-Aufruf zurückkehrt (bei abgeleiteten Klassen).
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird ihr Initialisierer ausgewertet, wobei `this` auf die Klasse selbst gesetzt ist, und die Eigenschaft wird auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden ausgewertet, wobei `this` auf die Klasse selbst gesetzt ist.
7. Die Klasse ist jetzt vollständig initialisiert und kann als Konstruktorfunktion verwendet werden.

Informationen zur Erstellung von Instanzen finden Sie in der Referenz {{jsxref("Classes/constructor", "constructor")}}.

## Beispiele

### Binden von this mit Instanz- und statischen Methoden

Wenn eine statische oder Instanzmethode ohne einen Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, z. B. indem die Methode einer Variable zugewiesen und dann aufgerufen wird, wird der `this`-Wert innerhalb der Methode `undefined` sein. Dieses Verhalten ist dasselbe, auch wenn die [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode)-Direktive nicht vorhanden ist, da der Code innerhalb des Klassenkörpers immer im Strict-Modus ausgeführt wird.

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
obj.speak(); // das Animal-Objekt
const speak = obj.speak;
speak(); // undefined

Animal.eat(); // Klasse Animal
const eat = Animal.eat;
eat(); // undefined
```

Wenn wir das Obige mit der traditionellen, funktionsbasierten Syntax im Nicht-Strict-Modus umschreiben, sind die this-Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im Strict-Modus bleibt der Wert von `this` als `undefined`.

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
speak(); // globales Objekt (im Nicht-Strict-Modus)

const eat = Animal.eat;
eat(); // globales Objekt (im Nicht-Strict-Modus)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)
- [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`class` Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [ES6 Im Detail: Klassen](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) auf hacks.mozilla.org (2015)
