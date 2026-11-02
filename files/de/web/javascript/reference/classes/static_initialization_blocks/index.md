---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 389605121ed8ea78cc1878f31bbca6759cc7417d
---

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "class")}} deklariert. Sie enthalten Anweisungen, die während der Initialisierung der Klasse ausgewertet werden. Dies ermöglicht eine flexiblere Initialisierungslogik als bei {{jsxref("Classes/static", "static")}}-Eigenschaften, etwa die Verwendung von `try...catch` oder das Setzen mehrerer Felder anhand eines einzigen Werts. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration und mit Zugriff auf private Elemente. Dadurch kann die Klasse Informationen über ihre privaten Elemente mit anderen Klassen oder Funktionen teilen, die im selben Gültigkeitsbereich deklariert sind (vergleichbar mit „Friend-Klassen“ in C++).

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

Ohne statische Initialisierungsblöcke ließe sich eine komplexe statische Initialisierung durch den Aufruf einer statischen Methode nach der Klassendeklaration erreichen:

```js
class MyClass {
  static init() {
    // Access to private static fields is allowed here
  }
}

MyClass.init();
```

Dieser Ansatz macht jedoch ein Implementierungsdetail (die Methode `init()`) für Benutzer der Klasse sichtbar. Initialisierungslogik, die außerhalb der Klasse deklariert wird, hat dagegen keinen Zugriff auf private statische Felder. Mit statischen Initialisierungsblöcken lässt sich beliebige Initialisierungslogik innerhalb der Klasse deklarieren und bei der Auswertung der Klasse ausführen.

Eine {{jsxref("Statements/class", "class")}} kann in ihrem Klassenkörper beliebig viele `static {}`-Initialisierungsblöcke enthalten. Diese werden zusammen mit gegebenenfalls dazwischenliegenden Initialisierern statischer Felder in der Reihenfolge ihrer Deklaration [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order). Die statische Initialisierung einer Oberklasse erfolgt immer vor der ihrer Unterklassen.

Der Gültigkeitsbereich von Variablen, die innerhalb eines statischen Blocks deklariert werden, ist auf diesen Block beschränkt. Das gilt für Deklarationen mit `var`, `function`, `const` und `let`. `var`-Deklarationen werden nicht aus dem statischen Block herausgehoben.

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

`this` verweist innerhalb eines statischen Blocks auf das Konstruktorobjekt der Klasse. Mit `super.property` kann auf statische Eigenschaften der Oberklasse zugegriffen werden. Beachten Sie jedoch, dass es ein Syntaxfehler ist, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock einer Klasse aufzurufen oder das Objekt {{jsxref("Functions/arguments", "arguments")}} zu verwenden.

Die Anweisungen werden synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block nicht verwenden. (Stellen Sie sich die Initialisierungsanweisungen so vor, als wären sie implizit in eine Funktion eingeschlossen.)

Der Gültigkeitsbereich des statischen Blocks liegt _innerhalb_ des lexikalischen Gültigkeitsbereichs des Klassenkörpers. Daher kann er auf [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) zugreifen, die innerhalb der Klasse deklariert sind, ohne einen Syntaxfehler auszulösen.

Initialisierer [statischer Felder](/de/docs/Web/JavaScript/Reference/Classes/static) und statische Initialisierungsblöcke werden nacheinander ausgewertet. Ein Initialisierungsblock kann auf die Werte von Feldern zugreifen, die oberhalb von ihm stehen, nicht aber auf die Werte darunterliegender Felder. Alle statischen Methoden werden zuvor hinzugefügt und können aufgerufen werden. Wenn sie jedoch auf Felder unterhalb des aktuellen Blocks zugreifen, verhalten sie sich möglicherweise nicht wie erwartet.

> [!NOTE]
> Dies ist besonders bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_elements) wichtig: Der Zugriff auf ein noch nicht initialisiertes privates Feld löst einen {{jsxref("TypeError")}} aus, selbst wenn das private Feld weiter unten deklariert ist. (Wenn das private Feld überhaupt nicht deklariert ist, würde bereits frühzeitig ein {{jsxref("SyntaxError")}} auftreten.)

Ein statischer Initialisierungsblock darf keine Dekoratoren haben (die Klasse selbst hingegen schon).

## Beispiele

### Mehrere Blöcke

Der folgende Code zeigt eine Klasse mit statischen Initialisierungsblöcken und dazwischenliegenden Initialisierern statischer Felder. Die Ausgabe zeigt, dass die Blöcke und Felder in der Reihenfolge ihrer Ausführung ausgewertet werden.

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

Beachten Sie, dass die statische Initialisierung einer Oberklasse immer vor der ihrer Unterklassen erfolgt.

### Verwendung von this und super

`this` verweist innerhalb eines statischen Blocks auf das Konstruktorobjekt der Klasse. Dieser Code zeigt, wie auf ein öffentliches statisches Feld zugegriffen wird.

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

Mit der Syntax [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super) kann innerhalb eines `static`-Blocks auf statische Eigenschaften einer Oberklasse verwiesen werden.

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

Das folgende Beispiel zeigt, wie einem Objekt außerhalb einer Klasse Zugriff auf ein privates Instanzfeld dieser Klasse gewährt werden kann (Beispiel aus dem [Blog von v8.dev](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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

- Leitfaden zur [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- [Statische Initialisierungsblöcke für Klassen](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022-Feature: Statische Initialisierungsblöcke für Klassen](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
