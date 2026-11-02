---
title: static
slug: Web/JavaScript/Reference/Classes/static
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

Das Schlüsselwort **`static`** definiert eine [statische Methode oder ein statisches Feld](/de/docs/Web/JavaScript/Reference/Classes#static_methods_and_fields) für eine Klasse oder einen [statischen Initialisierungsblock](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) (weitere Informationen zu dieser Verwendung finden Sie unter dem Link). Auf statische Eigenschaften kann nicht direkt über Instanzen der Klasse zugegriffen werden. Stattdessen erfolgt der Zugriff über die Klasse selbst.

Statische Methoden sind häufig Hilfsfunktionen, beispielsweise zum Erstellen oder Klonen von Objekten. Statische Eigenschaften eignen sich dagegen für Caches, feste Konfigurationen und andere Daten, die nicht für jede Instanz einzeln vorliegen müssen.

> [!NOTE]
> Im Zusammenhang mit Klassen verwendet MDN Web Docs die Begriffe Eigenschaften und [Felder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields) synonym.

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

Es gelten einige zusätzliche Syntaxbeschränkungen:

- Der Name einer statischen Eigenschaft (eines Feldes oder einer Methode) darf nicht `prototype` sein.
- Der Name eines Klassenfeldes (statisch oder instanzbezogen) darf nicht `constructor` sein.

## Beschreibung

Diese Seite beschreibt öffentliche statische Eigenschaften von Klassen. Dazu gehören statische Methoden, statische Accessors und statische Felder.

- Informationen zu privaten statischen Elementen finden Sie unter [private Elemente](/de/docs/Web/JavaScript/Reference/Classes/Private_elements).
- Informationen zu Instanzelementen finden Sie unter [Methodendefinitionen](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions), [getter](/de/docs/Web/JavaScript/Reference/Functions/get), [setter](/de/docs/Web/JavaScript/Reference/Functions/set) und [öffentliche Klassenfelder](/de/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

Öffentliche statische Elemente werden mit dem Schlüsselwort `static` deklariert. Bei der [Auswertung der Klasse](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order) werden sie dem Klassenkonstruktor mithilfe der [`[[DefineOwnProperty]]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty)-Semantik hinzugefügt (die im Wesentlichen {{jsxref("Object.defineProperty()")}} entspricht). Anschließend erfolgt der Zugriff auf sie über den Klassenkonstruktor.

Statische Methoden sind häufig Hilfsfunktionen, beispielsweise zum Erstellen oder Klonen von Instanzen. Öffentliche statische Felder sind nützlich, wenn ein Feld nur einmal pro Klasse existieren soll und nicht auf jeder erstellten Klasseninstanz. Das eignet sich für Caches, feste Konfigurationen und andere Daten, die nicht für jede Instanz einzeln vorliegen müssen.

Die Namen statischer Felder können [berechnet werden](/de/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names). Der Wert von `this` im berechneten Ausdruck ist das `this` der Umgebung, in der die Klasse definiert wird. Ein Verweis auf den Namen der Klasse führt zu einem {{jsxref("ReferenceError")}}, da die Klasse zu diesem Zeitpunkt noch nicht initialisiert ist. {{jsxref("Operators/await", "await")}} und {{jsxref("Operators/yield", "yield")}} verhalten sich in diesem Ausdruck wie erwartet.

Statische Felder können einen Initialisierer haben. Statische Felder ohne Initialisierer werden mit `undefined` initialisiert. Öffentliche statische Felder werden in Unterklassen nicht erneut initialisiert, sind aber über die Prototypkette zugänglich.

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

Im Feldinitialisierer verweist [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) auf die aktuelle Klasse (auf die Sie auch über ihren Namen zugreifen können) und [`super`](/de/docs/Web/JavaScript/Reference/Operators/super) auf den Konstruktor der Basisklasse.

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

Der Ausdruck wird synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} nicht im Initialisierungsausdruck verwenden. (Stellen Sie sich den Initialisierungsausdruck so vor, als wäre er implizit in eine Funktion eingeschlossen.)

Initialisierer statischer Felder und [statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks) werden nacheinander ausgewertet. Feldinitialisierer können auf die Werte von Feldern verweisen, die oberhalb von ihnen stehen, nicht aber auf die Werte von Feldern unterhalb von ihnen. Alle statischen Methoden werden zuvor hinzugefügt und sind zugänglich. Ihr Aufruf verhält sich jedoch möglicherweise nicht wie erwartet, wenn sie auf Felder verweisen, die unterhalb des gerade initialisierten Feldes stehen.

> [!NOTE]
> Dies ist bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) besonders wichtig: Der Zugriff auf ein noch nicht initialisiertes privates Feld löst einen {{jsxref("TypeError")}} aus, selbst wenn das private Feld weiter unten deklariert ist. (Ist das private Feld überhaupt nicht deklariert, tritt bereits frühzeitig ein {{jsxref("SyntaxError")}} auf.)

## Beispiele

### Statische Mitglieder in Klassen verwenden

Das folgende Beispiel zeigt:

1. Wie ein statisches Mitglied (eine Methode oder Eigenschaft) für eine Klasse definiert wird.
2. Dass von einer Klasse mit einem statischen Mitglied eine Unterklasse abgeleitet werden kann.
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

### Statische Mitglieder aus einer anderen statischen Methode aufrufen

Um eine statische Methode oder Eigenschaft innerhalb einer anderen statischen Methode derselben Klasse aufzurufen, können Sie das Schlüsselwort [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) verwenden.

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

### Statische Mitglieder aus einem Klassenkonstruktor und anderen Methoden aufrufen

Aus nicht-statischen Methoden kann über das Schlüsselwort {{jsxref("this")}} nicht direkt auf statische Mitglieder zugegriffen werden. Sie müssen sie über den Klassennamen aufrufen:
`CLASSNAME.STATIC_METHOD_NAME()` /
`CLASSNAME.STATIC_PROPERTY_NAME` oder indem Sie die Methode als Eigenschaft von
`constructor` aufrufen: `this.constructor.STATIC_METHOD_NAME()` /
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

- Leitfaden [Klassen verwenden](/de/docs/Web/JavaScript/Guide/Using_classes)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- [Statische Initialisierungsblöcke](/de/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- {{jsxref("Statements/class", "class")}}
