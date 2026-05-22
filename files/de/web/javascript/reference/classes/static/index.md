---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Das **`static`** Schlüsselwort definiert eine [statische Methode oder ein statisches Feld](/de/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields) für eine Klasse oder einen [statischen Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) (siehe den Link für weitere Informationen zu dieser Verwendung). Statische Eigenschaften können nicht direkt auf Instanzen der Klasse zugegriffen werden. Stattdessen werden sie auf der Klasse selbst aufgerufen.

Statische Methoden sind oft Hilfsfunktionen, wie z.B. Funktionen zum Erstellen oder Klonen von Objekten, während statische Eigenschaften nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen hinweg repliziert werden müssen.

> [!NOTE]
> Im Kontext von Klassen verwenden die MDN Web Docs-Inhalte die Begriffe Eigenschaften und [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) austauschbar.

{{InteractiveExample("JavaScript Demo: Class static", "taller")}}

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

Es gibt einige zusätzliche Syntaxbeschränkungen:

- Der Name einer statischen Eigenschaft (Feld oder Methode) kann nicht `prototype` sein.
- Der Name eines Klassenfeldes (statisch oder instanziiert) kann nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentliche statische Eigenschaften von Klassen ein, die statische Methoden, statische Zugreifer und statische Felder umfassen.

- Für private statische Merkmale siehe [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).
- Für Instanzenmerkmale siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), [getter](/de/docs/Web/JavaScript/Reference/Functions/get), [setter](/de/docs/Web/JavaScript/Reference/Functions/set) und [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

Öffentliche statische Merkmale werden mit dem `static` Schlüsselwort deklariert. Sie werden während der [Klassenauswertung](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) unter Verwendung der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) Semantik (welches im Wesentlichen {{jsxref("Object.defineProperty()")}} ist) zum Klassenkonstruktor hinzugefügt. Sie werden erneut vom Klassenkonstruktor aus aufgerufen.

Statische Methoden sind oft Hilfsfunktionen, wie z.B. Funktionen zum Erstellen oder Klonen von Instanzen. Öffentliche statische Felder sind nützlich, wenn Sie möchten, dass ein Feld nur einmal pro Klasse existiert und nicht in jeder Klasseninstanz, die Sie erstellen. Dies ist nützlich für Caches, feste Konfigurationen oder andere Daten, die nicht über Instanzen hinweg repliziert werden müssen.

Statische Feldnamen können [berechnet](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) werden. Der `this` Wert im berechneten Ausdruck ist das `this` der umgebenden Klassendefinition, und das Verweisen auf den Klassennamen führt zu einem {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren wie erwartet in diesem Ausdruck.

Statische Felder können einen Initialisierer haben. Statische Felder ohne Initialisierer werden auf `undefined` gesetzt. Öffentliche statische Felder werden in Unterklassen nicht neu initialisiert, können jedoch über die Prototypenkette aufgerufen werden.

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

Im Feldinitialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die aktuelle Klasse (die Sie auch über ihren Namen aufrufen können), und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf den Basisklassenkonstruktor.

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

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} nicht im Initialisiererausdruck verwenden. (Betrachten Sie den Initialisiererausdruck als implizit in eine Funktion eingewickelt.)

Statische Feldinitialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nacheinander ausgewertet. Feldinitialisierer können auf Feldwerte oberhalb von ihnen verweisen, aber nicht unterhalb von ihnen. Alle statischen Methoden werden vorher hinzugefügt und können aufgerufen werden, obwohl das Aufrufen dieser Methoden möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf unterhalb des beim Initialisieren befindlichen Feldes beziehen.

> [!NOTE]
> Dies ist bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) wichtiger, da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld unterhalb deklariert wird. (Wenn das private Feld nicht deklariert wird, wäre dies ein früher {{jsxref("SyntaxError")}}.)

## Beispiele

### Verwenden von statischen Mitgliedern in Klassen

Das folgende Beispiel demonstriert mehrere Dinge:

1. Wie ein statisches Mitglied (Methode oder Eigenschaft) auf einer Klasse definiert wird.
2. Dass eine Klasse mit einem statischen Mitglied unterklassenfähig ist.
3. Wie ein statisches Mitglied aufgerufen werden kann und nicht aufgerufen werden darf.

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

### Aufrufen statischer Mitglieder von einer anderen statischen Methode

Um eine statische Methode oder Eigenschaft innerhalb einer anderen statischen Methode derselben Klasse aufzurufen, können Sie das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Schlüsselwort verwenden.

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

### Aufrufen statischer Mitglieder von einem Klassenkonstruktor und anderen Methoden

Statische Mitglieder sind nicht direkt zugänglich über das {{jsxref("this")}} Schlüsselwort aus nicht-statischen Methoden. Sie müssen sie unter Verwendung des Klassennamens aufrufen:
`KLASSENNAME.STATISCHE_METHODE()` /
`KLASSENNAME.STATISCHE_EIGENSCHAFT` oder durch Aufruf der Methode als Eigenschaft des `constructor`: `this.constructor.STATISCHE_METHODE()` /
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
