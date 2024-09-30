---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 11b75916ceb7379f4ca3ba9440b032efc284fe2d
---

{{jsSidebar("Classes")}}

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "Klasse")}} deklariert. Sie enthalten Anweisungen, die während der Klasseninitialisierung ausgewertet werden. Dies ermöglicht flexiblere Initialisierungslogik als {{jsxref("Classes/static", "statische")}} Eigenschaften, wie z.B. die Verwendung von `try...catch` oder das Setzen mehrerer Felder aus einem einzelnen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugriff auf privaten Zustand, was es der Klasse ermöglicht, Informationen ihrer privaten Eigenschaften mit anderen Klassen oder Funktionen im gleichen Geltungsbereich zu teilen (analog zu "Friend"-Klassen in C++).

{{EmbedInteractiveExample("pages/js/classes-static-initialization.html")}}

## Syntax

```js-nolint
class ClassWithSIB {
  static {
    // …
  }
}
```

## Beschreibung

Ohne statische Initialisierungsblöcke könnte komplexe statische Initialisierung erreicht werden, indem eine statische Methode nach der Klassendeklaration aufgerufen wird:

```js
class MyClass {
  static init() {
    // Access to private static fields is allowed here
  }
}

MyClass.init();
```

Dieses Vorgehen offenbart jedoch ein Implementierungsdetail (die `init()`-Methode) dem Nutzer der Klasse. Andererseits hat jegliche Initialisierungslogik, die außerhalb der Klasse deklariert wird, keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke ermöglichen es, beliebige Initialisierungslogik innerhalb der Klasse zu deklarieren und während der Klassenauswertung auszuführen.

Eine {{jsxref("Statements/class", "Klasse")}} kann beliebig viele `static {}`-Initialisierungsblöcke in ihrem Klassenrumpf haben. Diese werden [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order), zusammen mit beliebigen dazwischenliegenden statischen Felderinitialisierungen, in der Reihenfolge, in der sie deklariert sind. Jede statische Initialisierung einer Superklasse wird zuerst durchgeführt, bevor die der Unterklassen erfolgt.

Der Geltungsbereich der innerhalb des statischen Blocks deklarierten Variablen ist lokal zum Block. Dazu gehören Deklarationen mit `var`, `function`, `const` und `let`. `var`-Deklarationen werden nicht aus dem statischen Block herausgehoben.

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

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse. `super.property` kann verwendet werden, um auf statische Eigenschaften der Superklasse zuzugreifen. Beachten Sie jedoch, dass es ein Syntaxfehler ist, {{jsxref("Operators/super", "super()")}} in einem Klasse-statischen Initialisierungsblock zu aufzurufen, oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Sie können {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block nicht verwenden. (Betrachten Sie die Initialisierungsanweisungen als implizit in eine Funktion eingeschlossen.)

Der Geltungsbereich des statischen Blocks ist _innerhalb_ des lexikalischen Bereichs des Klassenrumpfs verschachtelt und kann [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) aufrufen, die innerhalb der Klasse deklariert sind, ohne einen Syntaxfehler zu verursachen.

[Statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)-Initialisierungen und statische Initialisierungsblöcke werden nacheinander ausgewertet. Der Initialisierungsblock kann sich auf Feldwerte über ihm beziehen, aber nicht unterhalb. Alle statischen Methoden werden vorher hinzugefügt und sind erreichbar, obwohl deren Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie auf Felder unter dem aktuellen Block verweisen.

> [!NOTE]
> Dies ist wichtiger bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld unterhalb deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

Ein statischer Initialisierungsblock darf keine Dekorateure haben (die Klasse selbst möglicherweise).

## Beispiele

### Mehrere Blöcke

Der Code unten zeigt eine Klasse mit statischen Initialisierungsblöcken und dazwischenliegenden statischen Felderinitialisierungen. Die Ausgabe zeigt, dass die Blöcke und Felder in der Ausführungsreihenfolge ausgewertet werden.

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

Beachten Sie, dass eine statische Initialisierung einer Superklasse zuerst durchgeführt wird, bevor die ihrer Unterklassen erfolgt.

### Verwendung von this und super

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse. Dieser Code zeigt, wie auf ein öffentliches statisches Feld zugegriffen wird.

```js
class A {
  static field = "static field";
  static {
    console.log(this.field);
  }
}
// 'static field'
```

Die Syntax [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super) kann innerhalb eines `static`-Blocks verwendet werden, um auf statische Eigenschaften einer Superklasse zuzugreifen.

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

Dieses Beispiel unten zeigt, wie der Zugriff auf ein privates Instanzfeld einer Klasse von einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel vom [v8.dev Blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes)-Leitfaden
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- [Klassenstatische Initialisierungsblöcke](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022-Feature: Klassenstatische Initialisierungsblöcke](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
