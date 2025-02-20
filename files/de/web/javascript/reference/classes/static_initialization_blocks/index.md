---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Classes")}}

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "Klasse")}} deklariert. Sie enthalten Anweisungen, die während der Klasseninitialisierung ausgewertet werden. Dies ermöglicht flexiblere Initialisierungslogik als {{jsxref("Classes/static", "statische")}} Eigenschaften, wie z. B. die Nutzung von `try...catch` oder die Initialisierung mehrerer Felder aus einem einzigen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugriff auf private Zustände, was es der Klasse ermöglicht, Informationen über ihre privaten Eigenschaften mit anderen Klassen oder Funktionen zu teilen, die im gleichen Gültigkeitsbereich definiert wurden (analog zu "Freundesklassen" in C++).

{{InteractiveExample("JavaScript Demo: Class Static Initialization Blocks")}}

```js interactive-example
class ClassWithStaticInitializationBlock {
  static staticProperty1 = "Property 1";
  static staticProperty2;
  static {
    this.staticProperty2 = "Property 2";
  }
}

console.log(ClassWithStaticInitializationBlock.staticProperty1);
// Expected output: "Property 1"
console.log(ClassWithStaticInitializationBlock.staticProperty2);
// Expected output: "Property 2"
```

## Syntax

```js-nolint
class ClassWithSIB {
  static {
    // …
  }
}
```

## Beschreibung

Ohne statische Initialisierungsblöcke könnte eine komplexe statische Initialisierung durch den Aufruf einer statischen Methode nach der Klassendeklaration erreicht werden:

```js
class MyClass {
  static init() {
    // Access to private static fields is allowed here
  }
}

MyClass.init();
```

Dieser Ansatz gibt jedoch ein Implementierungsdetail (die `init()`-Methode) an den Benutzer der Klasse weiter. Andererseits hat jede Initialisierungslogik, die außerhalb der Klasse deklariert ist, keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke erlauben es, beliebige Initialisierungslogik innerhalb der Klasse zu deklarieren und während der Klassenauswertung auszuführen.

Eine {{jsxref("Statements/class", "Klasse")}} kann beliebig viele `static {}` Initialisierungsblöcke in ihrem Klassenkörper haben.
Diese werden [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order), zusammen mit allen dazwischen befindlichen Initialisierungen statischer Felder, in der Reihenfolge, in der sie deklariert wurden.
Die statische Initialisierung einer Oberklasse wird zuerst durchgeführt, bevor die der Unterklassen erfolgt.

Der Gültigkeitsbereich der in einem statischen Block deklarierten Variablen ist lokal auf den Block beschränkt. Dies schließt Deklarationen wie `var`, `function`, `const` und `let` ein. `var`-Deklarationen werden nicht aus dem statischen Block herausgehoben (hoisting).

```js
var y = "Outer y";

class A {
  static field = "Inner y";
  static {
    // var y only hoisted inside block
    console.log(y); // undefined <-- not 'Outer y'

    var y = this.field;
  }
}

// var y defined in static block is not hoisted
// outside the block
console.log(y); // 'Outer y'
```

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse.
`super.property` kann verwendet werden, um auf statische Eigenschaften der Oberklasse zuzugreifen.
Beachten Sie jedoch, dass es einen Syntaxfehler darstellt, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock einer Klasse aufzurufen, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Es ist nicht möglich, {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block zu verwenden. (Stellen Sie sich die Initialisierungsanweisungen so vor, als wären sie implizit in eine Funktion eingebettet.)

Der Gültigkeitsbereich des statischen Blocks ist _innerhalb_ des lexikalischen Gültigkeitsbereichs des Klassenkörpers verschachtelt und kann [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) verwenden, die innerhalb der Klasse deklariert wurden, ohne einen Syntaxfehler zu verursachen.

[Statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)-Initialisierungen und statische Initialisierungsblöcke werden nacheinander ausgewertet. Der Initialisierungsblock kann sich auf Feldwerte oberhalb davon beziehen, aber nicht unterhalb davon. Alle statischen Methoden werden vorher hinzugefügt und können aufgerufen werden, obwohl der Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf Felder beziehen, die unterhalb des aktuellen Blocks definiert sind.

> [!NOTE]
> Dies ist bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) besonders relevant, da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld darunter definiert ist. (Falls das private Feld nicht deklariert ist, wäre es ein vorzeitiger {{jsxref("SyntaxError")}}.)

Ein statischer Initialisierungsblock darf keine Dekoratoren haben (die Klasse selbst darf es jedoch).

## Beispiele

### Mehrere Blöcke

Der untenstehende Code zeigt eine Klasse mit statischen Initialisierungsblöcken und dazwischenliegenden Initialisierern für statische Felder.
Die Ausgabe zeigt, dass die Blöcke und Felder in Ausführungsreihenfolge ausgewertet werden.

```js
class MyClass {
  static field1 = console.log("static field1");
  static {
    console.log("static block1");
  }
  static field2 = console.log("static field2");
  static {
    console.log("static block2");
  }
}
// 'static field1'
// 'static block1'
// 'static field2'
// 'static block2'
```

Beachten Sie, dass die statische Initialisierung einer Oberklasse zuerst erfolgt, bevor die der Unterklassen durchgeführt wird.

### Verwendung von this und super

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse.
Dieser Code zeigt, wie auf ein öffentliches statisches Feld zugegriffen werden kann.

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

Die [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super)-Syntax kann innerhalb eines `static`-Blocks verwendet werden, um auf statische Eigenschaften einer Oberklasse zuzugreifen.

```js
class A {
  static field = "static field";
}

class B extends A {
  static {
    console.log(super.field);
  }
}
// 'static field'
```

### Zugriff auf private Eigenschaften

Das folgende Beispiel zeigt, wie der Zugriff auf ein privates Instanzfeld einer Klasse von einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel von [v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

```js
let getDPrivateField;

class D {
  #privateField;
  constructor(v) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (d) => d.#privateField;
  }
}

console.log(getDPrivateField(new D("private"))); // 'private'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- [Klassen statische Initialisierungsblöcke](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022 Feature: Klassen statische Initialisierungsblöcke](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
