---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 11b75916ceb7379f4ca3ba9440b032efc284fe2d
---

{{jsSidebar("Classes")}}

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "class")}} deklariert. Sie enthalten Anweisungen, die während der Klasseninitialisierung ausgewertet werden. Dies ermöglicht flexiblere Initialisierungslogik als {{jsxref("Classes/static", "static")}}-Eigenschaften, wie die Verwendung von `try...catch` oder das Setzen mehrerer Felder aus einem einzigen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugriff auf privaten Zustand, wodurch die Klasse Informationen ihrer privaten Eigenschaften mit anderen Klassen oder Funktionen im selben Gültigkeitsbereich teilen kann (ähnlich wie "friend"-Klassen in C++).

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

Ohne statische Initialisierungsblöcke könnte eine komplexe statische Initialisierung durch Aufrufen einer statischen Methode nach der Klassendeklaration erreicht werden:

```js
class MyClass {
  static init() {
    // Access to private static fields is allowed here
  }
}

MyClass.init();
```

Dieser Ansatz legt jedoch ein Implementierungsdetail (die `init()`-Methode) dem Benutzer der Klasse offen. Andererseits hat jede außerhalb der Klasse deklarierte Initialisierungslogik keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke ermöglichen, dass beliebige Initialisierungslogik innerhalb der Klasse deklariert und während der Klassenauswertung ausgeführt wird.

Eine {{jsxref("Statements/class", "class")}} kann eine beliebige Anzahl von `static {}`-Initialisierungsblöcken in ihrem Klassenkörper haben.
Diese werden in der Reihenfolge, in der sie deklariert sind, zusammen mit allen dazwischen liegenden statischen Feldinitialisierern [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order).
Die statische Initialisierung einer Superklasse wird zuerst durchgeführt, vor der ihrer Unterklassen.

Der Gültigkeitsbereich der in einem statischen Block deklarierten Variablen ist auf den Block beschränkt. Dies umfasst `var`, `function`, `const` und `let`-Deklarationen. `var`-Deklarationen werden nicht aus dem statischen Block herausgehoben.

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
Beachten Sie jedoch, dass es ein Syntaxfehler ist, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock einer Klasse aufzurufen oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Sie können in diesem Block kein {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} verwenden. (Betrachten Sie die Initialisierungsanweisungen als implizit in eine Funktion eingeschlossen.)

Der Gültigkeitsbereich des statischen Blocks ist _innerhalb_ des lexikalischen Gültigkeitsbereichs des Klassenkörpers verschachtelt und kann [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) verwenden, die innerhalb der Klasse deklariert sind, ohne einen Syntaxfehler zu verursachen.

[Statische Felder](/de/docs/Web/JavaScript/Reference/Classes/static)-Initialisierer und statische Initialisierungsblöcke werden nacheinander ausgewertet. Der Initialisierungsblock kann auf Feldwerte über ihm verweisen, aber nicht darunter. Alle statischen Methoden werden vorher hinzugefügt und können zugegriffen werden, obwohl deren Aufruf vielleicht nicht erwartungsgemäß funktioniert, wenn sie auf Felder unterhalb des aktuellen Blocks zugreifen.

> [!NOTE]
> Dies ist wichtiger bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties), da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} auslöst, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

Ein statischer Initialisierungsblock darf keine Dekoratoren haben (die Klasse selbst kann dies jedoch).

## Beispiele

### Mehrfache Blöcke

Der folgende Code zeigt eine Klasse mit statischen Initialisierungsblöcken und dazwischen liegenden statischen Feldinitialisierern.
Die Ausgabe zeigt, dass die Blöcke und Felder in der Ausführungsreihenfolge ausgewertet werden.

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

Beachten Sie, dass jede statische Initialisierung einer Superklasse zuerst durchgeführt wird, vor der ihrer Unterklassen.

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

Die [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super)-Syntax kann innerhalb eines `static`-Blocks verwendet werden, um auf statische Eigenschaften einer Superklasse zuzugreifen.

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

Das folgende Beispiel zeigt, wie der Zugriff auf ein privates Instanzfeld einer Klasse von einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel vom [v8.dev-Blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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
- [Statische Initialisierungsblöcke von Klassen](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022-Funktion: statische Initialisierungsblöcke für Klassen](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
