---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 1b2c87c20466d2a3eec9b3551c269f9aff8f5762
---

{{jsSidebar("Classes")}}

Das **`static`** Schlüsselwort definiert eine [statische Methode oder ein statisches Feld](/de/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields) für eine Klasse oder einen [statischen Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) (siehe den Link für weitere Informationen zur Verwendung). Statische Eigenschaften können nicht direkt auf Instanzen der Klasse zugegriffen werden. Stattdessen greift man über die Klasse selbst darauf zu.

Statische Methoden sind oft Hilfsfunktionen, wie Funktionen zum Erstellen oder Klonen von Objekten, während statische Eigenschaften nützlich für Caches, feste Konfigurationen oder andere Daten sind, die nicht über Instanzen hinweg repliziert werden müssen.

> [!NOTE]
> Im Kontext von Klassen verwendet der Inhalt der MDN Web Docs die Begriffe Eigenschaften und [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) austauschbar.

{{EmbedInteractiveExample("pages/js/classes-static.html", "taller")}}

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

Diese Seite führt in öffentliche statische Eigenschaften von Klassen ein, die statische Methoden, statische Zugriffs- und statische Felder umfassen.

- Für private statische Funktionen siehe [private Eigenschaften](/de/docs/Web/JavaScript/Reference/Classes/Private_properties).
- Für Instanzfunktionen siehe [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), [Getter](/de/docs/Web/JavaScript/Reference/Functions/get), [Setter](/de/docs/Web/JavaScript/Reference/Functions/set) und [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

Öffentliche statische Funktionen werden mit dem `static` Schlüsselwort deklariert. Sie werden zum Klassenkonstruktor hinzugefügt, wenn die [Klassenauswertung](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) mit der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty) Semantik durchgeführt wird (was im Wesentlichen {{jsxref("Object.defineProperty()")}} ist). Sie werden erneut vom Klassenkonstruktor aus aufgerufen.

Statische Methoden sind oft Hilfsfunktionen, wie Funktionen zum Erstellen oder Klonen von Instanzen. Öffentliche statische Felder sind nützlich, wenn Sie möchten, dass ein Feld nur einmal pro Klasse existiert und nicht in jeder Klasseninstanz, die Sie erstellen. Dies ist nützlich für Caches, feste Konfigurationen oder andere Daten, die nicht über Instanzen hinweg repliziert werden müssen.

Statische Feldnamen können [berechnet](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) werden. Der `this` Wert im berechneten Ausdruck ist das `this`, das die Klassendefinition umgibt, und ein Verweis auf den Namen der Klasse ist ein {{jsxref("ReferenceError")}}, da die Klasse noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} arbeiten in diesem Ausdruck wie erwartet.

Statische Felder können einen Initialisierer haben. Statische Felder ohne Initialisierer werden auf `undefined` initialisiert. Öffentliche statische Felder werden in Unterklassen nicht neu initialisiert, können aber über die Prototypenkette zugegriffen werden.

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

Im Feld-Initialisierer bezieht sich [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die aktuelle Klasse (die Sie auch über ihren Namen aufrufen können), und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) bezieht sich auf den Basisklassenkonstruktor.

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

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} nicht im Initialisiererausdruck verwenden. (Betrachten Sie den Initialisiererausdruck als implizit in eine Funktion gehüllt.)

Statische Feld-Initialisierer und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nacheinander ausgewertet. Feld-Initialisierer können sich auf Feldwerte oberhalb beziehen, nicht jedoch darunter. Alle statischen Methoden werden vorher hinzugefügt und können aufgerufen werden, obwohl es möglicherweise nicht wie erwartet funktioniert, wenn sie auf Felder unter dem zu initialisierenden zurückgreifen.

> [!NOTE]
> Dies ist wichtiger bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} wirft, selbst wenn das private Feld unterhalb deklariert wird. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

## Beispiele

### Verwendung statischer Mitglieder in Klassen

Das folgende Beispiel zeigt mehrere Dinge:

1. Wie ein statisches Mitglied (Methode oder Eigenschaft) in einer Klasse definiert wird.
2. Dass eine Klasse mit einem statischen Mitglied unterklassenfähig ist.
3. Wie ein statisches Mitglied aufgerufen werden kann und nicht aufgerufen werden kann.

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

### Aufrufen statischer Mitglieder aus einem Klassenkonstruktor und anderen Methoden

Statische Mitglieder sind nicht direkt zugänglich über das {{jsxref("Operators/this", "this")}} Schlüsselwort aus nicht-statischen Methoden. Sie müssen sie mit dem Klassennamen aufrufen:
`KLASSENNAME.STATISCHE_METHODEN_NAME()` /
`KLASSENNAME.STATISCHE_EIGENSCHAFTS_NAME` oder indem Sie die Methode als Eigenschaft des `constructors` aufrufen: `this.constructor.STATISCHE_METHODEN_NAME()` /
`this.constructor.STATISCHE_EIGENSCHAFTS_NAME`

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
