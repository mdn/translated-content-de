---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 2c3ac724dfdec7b30eae9beb236a7d8819fba464
---

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "Klasse")}} deklariert. Sie enthalten Anweisungen, die während der Klasseninitialisierung ausgewertet werden. Dies ermöglicht flexiblere Initialisierungslogik als {{jsxref("Classes/static", "statische")}} Eigenschaften, wie z.B. die Verwendung von `try...catch` oder das Setzen mehrerer Felder aus einem einzigen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugriff auf privaten Zustand, was es der Klasse erlaubt, Informationen ihrer privaten Elemente mit anderen Klassen oder Funktionen zu teilen, die im selben Gültigkeitsbereich deklariert sind (analog zu "friend"-Klassen in C++).

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

Jedoch offenbart dieser Ansatz ein Implementierungsdetail (die `init()`-Methode) dem Nutzer der Klasse. Andererseits hat jede außerhalb der Klasse deklarierte Initialisierungslogik keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke erlauben es, beliebige Initialisierungslogik innerhalb der Klasse zu deklarieren und auszuführen, während die Klasse ausgewertet wird.

Eine {{jsxref("Statements/class", "Klasse")}} kann beliebig viele `static {}`-Initialisierungsblöcke in ihrem Klassenkörper haben.
Diese werden zusammen mit allen dazwischenliegenden statischen Feldinitialisierern in der Reihenfolge ausgewertet, in der sie deklariert sind.
Jede statische Initialisierung einer Superklasse wird zuerst durchgeführt, vor der ihrer Unterklassen.

Der Gültigkeitsbereich der innerhalb des statischen Blocks deklarierten Variablen ist lokal für den Block. Dies schließt `var`, `function`, `const` und `let` Deklarationen ein. `var` Deklarationen werden nicht aus dem statischen Block herausgehoben.

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
`super.property` kann verwendet werden, um auf statische Eigenschaften der Superklasse zuzugreifen.
Es ist jedoch ein Syntaxfehler, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock einer Klasse zu rufen oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block nicht verwenden. (Stellen Sie sich die Initialisierungsanweisungen als implizit in eine Funktion eingerahmt vor.)

Der Gültigkeitsbereich des statischen Blocks ist innerhalb des lexikalischen Gültigkeitsbereichs des Klassenkörpers verschachtelt und kann auf [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) zugreifen, die innerhalb der Klasse deklariert sind, ohne dass ein Syntaxfehler entsteht.

[Statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)-Initialisierer und statische Initialisierungsblöcke werden nacheinander ausgewertet. Der Initialisierungsblock kann auf Feldwerte über ihm, aber nicht unter ihm verweisen. Alle statischen Methoden werden vorher hinzugefügt und können aufgerufen werden, obwohl ihr Verhalten möglicherweise nicht wie erwartet ist, wenn sie auf Felder unterhalb des aktuellen Blocks verweisen.

> [!NOTE]
> Dies ist wichtiger bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} verursacht, selbst wenn das private Feld darunter deklariert ist. (Wird das private Feld nicht deklariert, wäre es ein früher {{jsxref("SyntaxError")}}.)

Ein statischer Initialisierungsblock darf keine Dekoratoren haben (die Klasse selbst darf).

## Beispiele

### Mehrere Blöcke

Der folgende Code demonstriert eine Klasse mit statischen Initialisierungsblöcken und dazwischenliegenden statischen Feldinitialisierern.
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

Beachten Sie, dass jede statische Initialisierung einer Superklasse zuerst durchgeführt wird, bevor die ihrer Unterklassen erfolgt.

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

Die [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super)-Syntax kann innerhalb eines `static`-Blocks verwendet werden, um auf statische Eigenschaften einer Superklasse zu verweisen.

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

### Zugang zu privaten Elementen

Das untenstehende Beispiel zeigt, wie der Zugriff auf ein privates Instanzfeld einer Klasse aus einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel vom [v8.dev blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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
- [ES2022 Feature: Klassenstatische Initialisierungsblöcke](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
