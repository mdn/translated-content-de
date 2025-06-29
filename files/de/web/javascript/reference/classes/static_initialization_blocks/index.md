---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 48184c65d7e6d59e867806d9e349661c737bdc4b
---

{{jsSidebar("Classes")}}

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "Klasse")}} deklariert. Sie enthalten Anweisungen, die während der Initialisierung der Klasse ausgewertet werden. Dies ermöglicht eine flexiblere Initialisierungslogik als {{jsxref("Classes/static", "statische")}} Eigenschaften, wie beispielsweise die Verwendung von `try...catch` oder das Setzen mehrerer Felder aus einem einzigen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugang zu privatem Status, was es der Klasse ermöglicht, Informationen ihrer privaten Elemente mit anderen Klassen oder Funktionen im selben Gültigkeitsbereich zu teilen (analog zu "Freund"-Klassen in C++).

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

Dieser Ansatz offenbart jedoch ein Implementierungsdetail (die `init()`-Methode) dem Benutzer der Klasse. Andererseits hat jede außerhalb der Klasse deklarierte Initialisierungslogik keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke erlauben es, beliebige Initialisierungslogik innerhalb der Klasse zu deklarieren und während der Klassenauswertung auszuführen.

Eine {{jsxref("Statements/class", "Klasse")}} kann eine beliebige Anzahl von `static {}` Initialisierungsblöcken in ihrem Klassenkörper haben.
Diese werden [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order), zusammen mit interleaved statischen Feldinitialisierern, in der Reihenfolge, in der sie deklariert sind.
Jede statische Initialisierung einer Oberklasse wird zuerst durchgeführt, vor der ihrer Unterklassen.

Die Reichweite der innerhalb des statischen Blocks deklarierten Variablen ist lokal zum Block. Dies schließt `var`, `function`, `const` und `let` Deklarationen ein. `var` Deklarationen werden nicht aus dem statischen Block herausgehoben.

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

`this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse.
`super.property` kann verwendet werden, um auf statische Eigenschaften der Oberklasse zuzugreifen.
Beachten Sie jedoch, dass es ein Syntaxfehler ist, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock der Klasse aufzurufen oder das {{jsxref("Functions/arguments", "arguments")}} Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Es ist nicht möglich, {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block zu verwenden. (Betrachten Sie die Initialisierungsanweisungen als implizit in eine Funktion gewickelt.)

Der Gültigkeitsbereich des statischen Blocks ist _innerhalb_ des lexikalischen Gültigkeitsbereichs des Klassenkörpers verschachtelt und hat Zugriff auf [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), die innerhalb der Klasse deklariert sind, ohne einen Syntaxfehler zu verursachen.

[Statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static) Initialisierer und statische Initialisierungsblöcke werden einzeln ausgewertet. Der Initialisierungsblock kann sich auf Feldwerte oberhalb davon beziehen, aber nicht darunter. Alle statischen Methoden werden vorher hinzugefügt und können zugegriffen werden, obwohl deren Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf Felder unterhalb des aktuellen Blocks beziehen.

> [!NOTE]
> Dies ist wichtiger bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

Ein statischer Initialisierungsblock darf keine Dekoratoren haben (die Klasse selbst kann jedoch).

## Beispiele

### Mehrere Blöcke

Der folgende Code zeigt eine Klasse mit statischen Initialisierungsblöcken und dazwischen liegenden statischen Feldinitialisierern. Die Ausgabe zeigt, dass die Blöcke und Felder in der Ausführungsreihenfolge ausgewertet werden.

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

Beachten Sie, dass jede statische Initialisierung einer Oberklasse zuerst durchgeführt wird, vor der ihrer Unterklassen.

### Verwendung von this und super

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse. Dieser Code zeigt, wie auf ein öffentliches statisches Feld zugegriffen werden kann.

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

Die [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super) Syntax kann innerhalb eines `static` Blocks verwendet werden, um statische Eigenschaften einer Oberklasse zu referenzieren.

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

### Zugriff auf private Elemente

Das folgende Beispiel zeigt, wie der Zugriff auf ein privates Instanzfeld einer Klasse von einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel aus dem [v8.dev Blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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
- [Klassenstatische Initialisierungsblöcke](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022 Funktion: Klassenstatische Initialisierungsblöcke](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
