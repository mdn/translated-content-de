---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Classes")}}

Das **`static`** Schlüsselwort definiert eine [statische Methode oder ein statisches Feld](/de/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields) für eine Klasse oder einen [statischen Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) (siehe den Link für weitere Informationen zu dieser Verwendung). Statische Eigenschaften können nicht direkt auf Instanzen der Klasse zugegriffen werden. Stattdessen werden sie über die Klasse selbst abgerufen.

Statische Methoden sind oft Hilfsfunktionen, wie Funktionen zum Erstellen oder Klonen von Objekten, während statische Eigenschaften nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen repliziert werden müssen.

> [!NOTE]
> Im Kontext von Klassen verwendet der MDN-Web-Dokumentationsinhalt die Begriffe Eigenschaften und [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) austauschbar.

{{InteractiveExample("JavaScript Demo: Classes Static", "taller")}}

```js interactive-example
class ClassWithStaticMethod {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
  static {
    console.log("Class static initialization block called");
  }
}

console.log(ClassWithStaticMethod.staticProperty);
// Expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// Expected output: "static method has been called."
```

## Syntax

```js-nolint
class ClassWithStatic {
  static staticField;
  static staticFieldWithInitializer = value;
  static staticMethod() {
    // …
  }
}
```

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Der Name einer statischen Eigenschaft (Feld oder Methode) kann nicht `prototype` sein.
- Der Name eines Klassenfeldes (statisch oder instanzbasiert) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt in öffentliche statische Eigenschaften von Klassen ein, die statische Methoden, statische Zugriffs-Methoden und statische Felder umfassen.

- Für private statische Eigenschaften siehe [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für instanzbasierte Eigenschaften siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), [getter](/de/docs/Web/JavaScript/Reference/Functions/get), [setter](/de/docs/Web/JavaScript/Reference/Functions/set) und [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

Öffentliche statische Eigenschaften werden mit dem Schlüsselwort `static` deklariert. Sie werden dem Klassenkonstruktor während der [Klassen-Auswertung](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) mithilfe der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik (im Wesentlichen {{jsxref("Object.defineProperty()")}}) hinzugefügt. Sie werden anschließend vom Klassenkonstruktor abgerufen.

Statische Methoden sind oft Hilfsfunktionen, wie Funktionen zum Erstellen oder Klonen von Instanzen. Öffentliche statische Felder sind nützlich, wenn ein Feld nur einmal pro Klasse existieren soll und nicht auf jeder Klasseninstanz, die Sie erstellen. Dies ist nützlich für Caches, feste Konfigurationen oder andere Daten, die nicht über Instanzen repliziert werden müssen.

Die Namen der statischen Felder können [berechnet](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) werden. Der Wert von `this` im Ausdruck wird durch das `this` definiert, das die Klassendefinition umgibt, und ein Verweis auf den Namen der Klasse führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren wie erwartet in diesem Ausdruck.

Statische Felder können einen Initialisierer haben. Statische Felder ohne Initialisierer werden auf `undefined` initialisiert. Öffentliche statische Felder werden in Unterklassen nicht erneut initialisiert, können jedoch über die Prototypen-Kette abgerufen werden.

```js
class ClassWithStaticField {
  static staticField;
  static staticFieldWithInitializer = "static field";
}

class SubclassWithStaticField extends ClassWithStaticField {
  static subStaticField = "subclass field";
}

console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
console.log(ClassWithStaticField.staticField); // undefined
console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
console.log(SubclassWithStaticField.subStaticField); // "subclass field"
```

Im Feld-Initialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die aktuelle Klasse (die auch über ihren Namen aufgerufen werden kann) und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf den Basisklassen-Konstruktor.

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField); // "base static field"
console.log(SubClassWithStaticField.subStaticField); // "base static method output"
```

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} nicht im Initialisierungs-Ausdruck verwenden. (Betrachten Sie den Initialisierungs-Ausdruck so, als wäre er implizit in einer Funktion eingeschlossen.)

Statische Feld-Initialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nacheinander ausgewertet. Feld-Initialisierer können auf Feldwerte darüber, aber nicht darunter zugreifen. Alle statischen Methoden werden vorher hinzugefügt und können aufgerufen werden, obwohl deren Funktionsweise unerwartet sein kann, wenn sie sich auf Felder beziehen, die unterhalb davon initialisiert werden.

> [!NOTE]
> Dies ist bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) wichtiger, da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} wirft, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, würde es einen frühen {{jsxref("SyntaxError")}} werfen.)

## Beispiele

### Verwendung von statischen Mitgliedern in Klassen

Das folgende Beispiel demonstriert mehrere Dinge:

1. Wie ein statisches Mitglied (Methode oder Eigenschaft) in einer Klasse definiert wird.
2. Dass eine Klasse mit einem statischen Mitglied unterklassenfähig ist.
3. Wie ein statisches Mitglied aufgerufen werden kann und wie nicht.

```js
class Triple {
  static customName = "Tripler";
  static description = "I triple any number you provide";
  static calculate(n = 1) {
    return n * 3;
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = "I square the triple of any number you provide";
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

const tp = new Triple();

console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// This throws because calculate() is a static member, not an instance member.
console.log(tp.calculate()); // 'tp.calculate is not a function'
```

### Aufrufen statischer Mitglieder aus einer anderen statischen Methode

Um eine statische Methode oder Eigenschaft innerhalb einer anderen statischen Methode derselben Klasse aufzurufen, können Sie das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this)-Schlüsselwort verwenden.

```js
class StaticMethodCall {
  static staticProperty = "static property";
  static staticMethod() {
    return `Static method and ${this.staticProperty} has been called`;
  }
  static anotherStaticMethod() {
    return `${this.staticMethod()} from another static method`;
  }
}
StaticMethodCall.staticMethod();
// 'Static method and static property has been called'

StaticMethodCall.anotherStaticMethod();
// 'Static method and static property has been called from another static method'
```

### Aufrufen statischer Mitglieder aus einem Klassenkonstruktor und anderen Methoden

Statische Mitglieder sind nicht direkt mit dem {{jsxref("Operators/this", "this")}}-Schlüsselwort aus nicht-statischen Methoden aufrufbar. Sie müssen sie mit dem Klassennamen aufrufen:
`KLASSENNAME.STATISCHE_METHODE()` /
`KLASSENNAME.STATISCHE_EIGENSCHAFT` oder indem Sie die Methode als Eigenschaft des `Konstruktors` aufrufen: `this.constructor.STATISCHE_METHODE()` /
`this.constructor.STATISCHE_EIGENSCHAFT`

```js
class StaticMethodCall {
  constructor() {
    console.log(StaticMethodCall.staticProperty); // 'static property'
    console.log(this.constructor.staticProperty); // 'static property'
    console.log(StaticMethodCall.staticMethod()); // 'static method has been called.'
    console.log(this.constructor.staticMethod()); // 'static method has been called.'
  }

  static staticProperty = "static property";
  static staticMethod() {
    return "static method has been called.";
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
