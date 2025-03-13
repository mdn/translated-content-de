---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Classes")}}

Das **`static`** Schlüsselwort definiert eine [statische Methode oder ein statisches Feld](/de/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields) für eine Klasse oder einen [statischen Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) (siehe den Link für weitere Informationen zur Verwendung). Statische Eigenschaften können nicht direkt auf Instanzen der Klasse zugegriffen werden. Stattdessen greift man auf sie über die Klasse selbst zu.

Statische Methoden sind oft Hilfsfunktionen, wie zum Beispiel Funktionen, um Objekte zu erstellen oder zu klonen, während statische Eigenschaften nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen hinweg dupliziert werden müssen.

> [!NOTE]
> Im Kontext von Klassen verwendet der Inhalt von MDN Web Docs die Begriffe Eigenschaften und [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) austauschbar.

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

Es gibt einige zusätzliche Syntaxeinschränkungen:

- Der Name einer statischen Eigenschaft (Feld oder Methode) darf nicht `prototype` sein.
- Der Name eines Klassenfeldes (statisch oder instanziell) darf nicht `constructor` sein.

## Beschreibung

Diese Seite führt öffentliche statische Eigenschaften von Klassen ein, die statische Methoden, statische Zugriffsparameter und statische Felder umfassen.

- Für private statische Merkmale siehe [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für Instanzmerkmale siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), [Getter](/de/docs/Web/JavaScript/Reference/Functions/get), [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) und [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

Öffentliche statische Merkmale werden mit dem `static` Schlüsselwort deklariert. Sie werden dem Klassenkonstruktor zum Zeitpunkt der [Klassenauswertung](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) mithilfe der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) Semantik hinzugefügt (was im Wesentlichen {{jsxref("Object.defineProperty()")}} entspricht). Sie werden erneut über den Klassenkonstruktor zugegriffen.

Statische Methoden sind oft Hilfsfunktionen, wie Funktionen, um Instanzen zu erstellen oder zu klonen. Öffentliche statische Felder sind nützlich, wenn Sie möchten, dass ein Feld nur einmal pro Klasse existiert und nicht bei jeder erstellten Instanz der Klasse. Das ist nützlich für Caches, feste Konfigurationen oder andere Daten, die nicht über Instanzen hinweg dupliziert werden müssen.

Statische Feldnamen können [berechnet](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) werden. Der `this`-Wert im berechneten Ausdruck ist das `this`, das die Klassendefinition umgibt, und auf den Namen der Klasse zu verweisen, ist ein {{jsxref("ReferenceError")}}, weil die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} funktionieren erwartungsgemäß in diesem Ausdruck.

Statische Felder können einen Initialisierer haben. Statische Felder ohne Initialisierer werden auf `undefined` initialisiert. Öffentliche statische Felder werden in Unterklassen nicht neu initialisiert, können aber über die Prototypenkette angesprochen werden.

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

Im Feldinitialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die aktuelle Klasse (auf die Sie auch über ihren Namen zugreifen können), und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf den Basisklassenkonstruktor.

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

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} nicht im Initialisiererausdruck verwenden. (Betrachten Sie den Initialisiererausdruck als implizit in eine Funktion eingebettet.)

Statische Feldinitialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nacheinander ausgewertet. Feldinitialisierer können sich auf Feldwerte oberhalb von ihnen beziehen, aber nicht unterhalb. Alle statischen Methoden werden vorher hinzugefügt und können angesprochen werden, auch wenn ihr Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf Felder beziehen, die unter dem aktuell initialisierten Feld liegen.

> [!NOTE]
> Dies ist wichtiger bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

## Beispiele

### Verwendung von statischen Mitgliedern in Klassen

Das folgende Beispiel demonstriert mehrere Dinge:

1. Wie ein statisches Mitglied (Methode oder Eigenschaft) auf einer Klasse definiert wird.
2. Dass eine Klasse mit einem statischen Mitglied unterklassifiziert werden kann.
3. Wie ein statisches Mitglied aufgerufen werden kann und nicht kann.

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

### Aufruf von statischen Mitgliedern aus einer anderen statischen Methode

Um innerhalb einer anderen statischen Methode derselben Klasse eine statische Methode oder Eigenschaft aufzurufen, können Sie das [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) Schlüsselwort verwenden.

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

### Aufruf von statischen Mitgliedern aus einem Klassenkonstruktor und anderen Methoden

Statische Mitglieder sind nicht direkt mit dem {{jsxref("Operators/this", "this")}} Schlüsselwort aus nicht-statischen Methoden zugänglich. Sie müssen sie über den Klassennamen aufrufen:
`CLASSNAME.STATIC_METHOD_NAME()` /
`CLASSNAME.STATIC_PROPERTY_NAME` oder durch Aufruf der Methode als Eigenschaft des
`constructor`: `this.constructor.STATIC_METHOD_NAME()` /
`this.constructor.STATIC_PROPERTY_NAME`

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
