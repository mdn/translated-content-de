---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{jsSidebar("Classes")}}

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "Klasse")}} deklariert. Sie enthalten Anweisungen, die während der Klasseninitialisierung ausgewertet werden. Dies ermöglicht flexiblere Initialisierungslogik als {{jsxref("Classes/static", "statische")}} Eigenschaften, wie z.B. die Verwendung von `try...catch` oder das Setzen mehrerer Felder aus einem einzigen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugang zum privaten Zustand, wodurch es der Klasse ermöglicht wird, Informationen über ihre privaten Eigenschaften mit anderen Klassen oder Funktionen im gleichen Geltungsbereich zu teilen (analog zu "Freund"-Klassen in C++).

{{InteractiveExample("JavaScript Demo: Class static initialization blocks")}}

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

Dieser Ansatz offenbart jedoch ein Implementierungsdetail (die `init()`-Methode) dem Benutzer der Klasse. Andererseits hat jede außerhalb der Klasse deklarierte Initialisierungslogik keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke erlauben die Deklaration beliebiger Initialisierungslogik innerhalb der Klasse, die während der Klassenauswertung ausgeführt wird.

Eine {{jsxref("Statements/class", "Klasse")}} kann eine beliebige Anzahl von `static {}` Initialisierungsblöcken in ihrem Klassenrumpf haben. Diese werden [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order), zusammen mit jeder dazwischenliegenden statischen Felde-Initialisierung, in der Reihenfolge, in der sie deklariert sind. Jede statische Initialisierung einer Superklasse wird zuerst durchgeführt, vor der Initialisierung ihrer Unterklassen.

Der Geltungsbereich der innerhalb des statischen Blocks deklarierten Variablen ist lokal für den Block. Dazu gehören `var`, `function`, `const` und `let` Deklarationen. `var`-Deklarationen werden nicht aus dem statischen Block herausgehoben.

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

Das `this` in einem statischen Block bezieht sich auf das Konstruktorobjekt der Klasse. `super.property` kann verwendet werden, um auf statische Eigenschaften der Superklasse zuzugreifen. Beachten Sie jedoch, dass es ein Syntaxfehler ist, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock einer Klasse aufzurufen oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block nicht verwenden. (Denken Sie an die Initialisierungsanweisungen, als ob sie implizit in eine Funktion eingebettet wären.)

Der Geltungsbereich des statischen Blocks ist _innerhalb_ des lexikalischen Geltungsbereichs des Klassenrumpfs eingebettet und kann auf [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) zugreifen, die innerhalb der Klasse deklariert sind, ohne einen Syntaxfehler zu verursachen.

[Statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static) Initialisierer und statische Initialisierungsblöcke werden nacheinander ausgewertet. Der Initialisierungsblock kann sich auf Werte beziehen, die über ihm stehen, aber nicht unter ihm. Alle statischen Methoden werden dabei vorab hinzugefügt und sind zugänglich, auch wenn deren Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf Felder beziehen, die unter dem aktuellen Block liegen.

> [!NOTE]
> Dies ist besonders wichtig bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, würde es sich um einen frühen {{jsxref("SyntaxError")}} handeln.)

Ein statischer Initialisierungsblock darf keine Dekorateure haben (die Klasse selbst kann jedoch welche haben).

## Beispiele

### Mehrere Blöcke

Der folgende Code zeigt eine Klasse mit statischen Initialisierungsblöcken und dazwischenliegenden statischen Felde-Initialisierern. Die Ausgabe zeigt, dass die Blöcke und Felder in Ausführungsreihenfolge ausgewertet werden.

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

Beachten Sie, dass jede statische Initialisierung einer Superklasse zuerst durchgeführt wird, bevor die ihrer Unterklassen erfolgt.

### Verwendung von this und super

Das `this` in einem statischen Block bezieht sich auf das Konstruktorobjekt der Klasse. Dieser Code zeigt, wie auf ein öffentliches statisches Feld zugegriffen wird.

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

Die [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super) Syntax kann innerhalb eines `static` Blocks verwendet werden, um statische Eigenschaften einer Superklasse zu referenzieren.

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

Das folgende Beispiel zeigt, wie der Zugriff auf ein privates Instanzfeld einer Klasse von einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel vom [v8.dev Blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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
- [Klassen-statische Initialisierungsblöcke](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022 Feature: Klassen-statische Initialisierungsblöcke](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
