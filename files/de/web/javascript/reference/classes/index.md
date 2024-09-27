---
title: Klassen
slug: Web/JavaScript/Reference/Classes
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Klassen sind eine Vorlage zur Erstellung von Objekten. Sie kapseln Daten mit Code, der mit diesen Daten arbeitet. Klassen in JS basieren auf [Prototypen](/de/docs/Web/JavaScript/Inheritance_and_the_prototype_chain), haben aber auch einige syntaktische und semantische Besonderheiten, die für Klassen einzigartig sind.

Für weitere Beispiele und Erklärungen siehe den [Leitfaden zu Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes).

## Beschreibung

### Definieren von Klassen

Klassen sind in der Tat "besondere [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)", und genau wie Sie [Funktionsausdrücke](/de/docs/Web/JavaScript/Reference/Operators/function) und [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function) definieren können, kann eine Klasse auf zwei Arten definiert werden: ein [Klassenausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) oder eine [Klassendeklaration](/de/docs/Web/JavaScript/Reference/Statements/class).

Wie bei Funktionsausdrücken können Klassenausdrücke anonym sein oder einen anderen Namen haben als die Variable, der sie zugewiesen sind. Anders als bei Funktionsdeklarationen unterliegen Klassendeklarationen jedoch denselben [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)-Einschränkungen wie `let` oder `const` und verhalten sich so, als ob sie [nicht gehoben](/de/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting) werden.

### Klassenkörper

Der Körper einer Klasse ist der Teil, der sich in geschweiften Klammern `{}` befindet. Hier definieren Sie Klassenmitglieder wie Methoden oder Konstruktoren.

Der Körper einer Klasse wird im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt, auch ohne das `"use strict"`-Direktiv.

Ein Klassenelement kann durch drei Aspekte charakterisiert werden:

- Art: Getter, Setter, Methode oder Feld
- Ort: Statisch oder Instanz
- Sichtbarkeit: Öffentlich oder privat

Zusammen ergeben sie 16 mögliche Kombinationen. Um den Verweis logischer zu unterteilen und sich überschneidende Inhalte zu vermeiden, werden die verschiedenen Elemente detailliert auf verschiedenen Seiten eingeführt:

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
> Private Eigenschaften haben die Einschränkung, dass alle in derselben Klasse deklarierten Eigenschaftsnamen eindeutig sein müssen. Bei anderen öffentlichen Eigenschaften besteht diese Einschränkung nicht — Sie können mehrere öffentliche Eigenschaften mit demselben Namen haben, und die letzte überschreibt die anderen. Dies ist dasselbe Verhalten wie bei [Objektinitialisierern](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#duplicate_property_names).

Zusätzlich gibt es zwei spezielle Klassenelement-Syntaxen: [`constructor`](#konstruktor) und [statische Initialisierungsblöcke](#statische_initialisierungsblöcke) mit ihren eigenen Verweisen.

#### Konstruktor

Die Methode {{jsxref("Classes/constructor", "constructor")}} ist eine spezielle Methode zum Erstellen und Initialisieren eines mit einer Klasse erstellten Objekts. Es kann nur eine spezielle Methode mit dem Namen "constructor" in einer Klasse geben — ein {{jsxref("SyntaxError")}} wird ausgelöst, wenn die Klasse mehr als einen `constructor`-Methodenaufruf enthält.

Ein Konstruktor kann das Schlüsselwort [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) verwenden, um den Konstruktor der Oberklasse aufzurufen.

Sie können Instanzeigenschaften im Konstruktor erstellen:

Alternativ, wenn die Werte Ihrer Instanzeigenschaften nicht von den Argumenten des Konstruktors abhängen, können Sie diese als [Klassenfelder](#felderklärungen) definieren.

#### Statische Initialisierungsblöcke

[Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) ermöglichen die flexible Initialisierung von [statischen Eigenschaften](#statische_methoden_und_felder), einschließlich der Auswertung von Anweisungen während der Initialisierung, und gewähren Zugriff auf den privaten Bereich.

Mehrere statische Blöcke können deklariert werden, und diese können mit der Deklaration von statischen Feldern und Methoden vermischt werden (alle statischen Elemente werden in der Deklarationsreihenfolge ausgewertet).

#### Methoden

Methoden werden auf dem Prototyp jeder Klasseninstanz definiert und von allen Instanzen geteilt. Methoden können einfache Funktionen, asynchrone Funktionen, Generatorfunktionen oder asynchrone Generatorfunktionen sein. Für weitere Informationen siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions).

#### Statische Methoden und Felder

Das Schlüsselwort {{jsxref("Classes/static", "static")}} definiert eine statische Methode oder ein Feld für eine Klasse. Statische Eigenschaften (Felder und Methoden) werden an der Klasse selbst und nicht bei jeder Instanz definiert. Statische Methoden werden häufig verwendet, um Dienstprogrammfunktionen für eine Anwendung zu erstellen, während statische Felder nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen hinaus dupliziert werden müssen.

#### Felderklärungen

Mit der Klassenfeld-Deklarationssyntax kann das [Konstruktor](#konstruktor)-Beispiel als:

Klassenfelder ähneln Objekteigenschaften, nicht Variablen, daher verwenden wir keine Schlüsselwörter wie `const` für ihre Deklaration. In JavaScript verwenden [private Eigenschaften](#private_properties_2) eine spezielle Identifizierersyntax, daher sollten auch keine Modifikatorschlüsselwörter wie `public` und `private` verwendet werden.

Wie oben zu sehen ist, können die Felder mit oder ohne Standardwert deklariert werden. Felder ohne Standardwerte haben standardmäßig den Wert `undefined`. Durch die Deklaration von Feldern im Voraus werden Klassendefinitionen selbstdokumentierender, und die Felder sind immer present, was bei der Optimierung hilft.

Siehe [Öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) für weitere Informationen.

#### Private Eigenschaften

Unter Verwendung privater Felder kann die Definition wie folgt verfeinert werden.

Es ist ein Fehler, auf private Felder außerhalb der Klasse zuzugreifen; sie können nur innerhalb des Klassenkörpers gelesen oder geschrieben werden. Indem Sie Dinge definieren, die außerhalb der Klasse nicht sichtbar sind, stellen Sie sicher, dass Benutzer Ihrer Klassen nicht von internen Details abhängig sind, die sich von Version zu Version ändern können.

Private Felder können im Voraus nur in einer Felddeklaration deklariert werden. Sie können nicht später erstellt werden, indem sie zugewiesen werden, wie es bei normalen Eigenschaften der Fall ist.

Für weitere Informationen siehe [Private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).

### Vererbung

Das Schlüsselwort {{jsxref("Classes/extends", "extends")}} wird in _Klassendeklarationen_ oder _Klassenausdrücken_ verwendet, um eine Klasse als Kind eines anderen Konstruktors (entweder einer Klasse oder einer Funktion) zu erstellen.

Wenn im Unterklasse ein Konstruktor vorhanden ist, muss er zuerst `super()` aufrufen, bevor er `this` verwendet. Das Schlüsselwort {{jsxref("Operators/super", "super")}} kann auch verwendet werden, um die entsprechenden Methoden der Oberklasse aufzurufen.

### Auswertungsreihenfolge

Wenn eine [`class`-Deklaration](/de/docs/Web/JavaScript/Reference/Statements/class) oder ein [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class) ausgewertet wird, werden seine verschiedenen Komponenten in folgender Reihenfolge ausgewertet:

1. Die {{jsxref("Classes/extends", "extends")}}-Klausel, falls vorhanden, wird zuerst ausgewertet. Sie muss zu einer gültigen Konstruktorfunktion oder `null` ausgewertet werden, andernfalls wird ein {{jsxref("TypeError")}} ausgelöst.
2. Die {{jsxref("Classes/constructor", "constructor")}}-Methode wird extrahiert und bei Fehlen durch eine Standardimplementierung ersetzt. Da die `constructor`-Definition jedoch nur eine Methodendefinition ist, ist dieser Schritt nicht beobachtbar.
3. Die Eigenschaftsschlüssel der Klassenelemente werden in der Reihenfolge ihrer Deklaration ausgewertet. Wenn der Eigenschaftsschlüssel berechnet wird, wird der berechnete Ausdruck ausgewertet, wobei der `this`-Wert auf den `this`-Wert der Klasse gesetzt wird (nicht die Klasse selbst). Keine der Eigenschaftswerte sind bis dahin ausgewertet.
4. Methoden und Zugriffsrechte werden in der Reihenfolge der Deklaration installiert. Instanzmethoden und Zugriffsrechte werden auf der `prototype`-Eigenschaft der aktuellen Klasse installiert, und statische Methoden und Zugriffsrechte werden auf der Klasse selbst installiert. Private Instanzmethoden und Zugriffsrechte werden gespeichert, um später direkt auf der Instanz installiert zu werden. Dieser Schritt ist nicht beobachtbar.
5. Die Klasse wird jetzt mit dem von `extends` angegebenen Prototyp und der durch den `constructor` angegebenen Implementierung initialisiert. Für alle obigen Schritte, wenn ein ausgewerteter Ausdruck versucht, auf den Namen der Klasse zuzugreifen, wird ein {{jsxref("ReferenceError")}} ausgelöst, da die Klasse noch nicht initialisiert ist.
6. Die Klassenelementwerte werden in der Reihenfolge ihrer Deklaration ausgewertet:
   - Für jedes [Instanzfeld](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) (öffentlich oder privat) wird der Initialisierungsausdruck gespeichert. Der Initialisierer wird während der Instanzerstellung am Anfang des Konstruktors (für Basisklassen) oder unmittelbar bevor der `super()`-Aufruf zurückkehrt (für abgeleitete Klassen) ausgewertet.
   - Für jedes [statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) (öffentlich oder privat) wird der Initialisierer mit `this`, das auf die Klasse selbst gesetzt ist, ausgewertet, und die Eigenschaft wird auf der Klasse erstellt.
   - [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden mit `this`, das auf die Klasse selbst gesetzt ist, ausgewertet.
7. Die Klasse ist jetzt vollständig initialisiert und kann als Konstruktorfunktion benutzt werden.

Um zu erfahren, wie Instanzen erstellt werden, siehe den {{jsxref("Classes/constructor", "constructor")}}-Verweis.

## Beispiele

### Binden von this mit Instanz- und statischen Methoden

Wenn eine statische oder Instanz-Methode ohne einen Wert für {{jsxref("Operators/this", "this")}} aufgerufen wird, wie etwa durch das Zuweisen der Methode zu einer Variablen und anschließendem Aufruf, wird der `this`-Wert innerhalb der Methode `undefined` sein. Dieses Verhalten ist dasselbe, selbst wenn das [`"use strict"`](/de/docs/Web/JavaScript/Reference/Strict_mode)-Direktiv nicht vorhanden ist, da der Code im `class`-Körper immer im strict mode ausgeführt wird.

Wenn wir das obige unter Verwendung einer traditionellen, funktionsbasierten Syntax im Nicht-Strict-Modus umschreiben, werden `this`-Methodenaufrufe automatisch an {{jsxref("globalThis")}} gebunden. Im Strict-Modus bleibt der Wert von `this` als `undefined`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes)
- [`class`](/de/docs/Web/JavaScript/Reference/Statements/class)
- [`class`-Ausdruck](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Funktionen](/de/docs/Web/JavaScript/Reference/Functions)
- [ES6 In Depth: Classes](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/) auf hacks.mozilla.org (2015)
