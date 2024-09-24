---
title: Statische Initialisierungsblöcke
slug: Web/JavaScript/Reference/Classes/Static_initialization_blocks
l10n:
  sourceCommit: 11b75916ceb7379f4ca3ba9440b032efc284fe2d
---

{{jsSidebar("Classes")}}

**Statische Initialisierungsblöcke** werden innerhalb einer {{jsxref("Statements/class", "Klasse")}} deklariert. Sie enthalten Anweisungen, die während der Klasseninitialisierung ausgeführt werden. Dies ermöglicht eine flexiblere Initialisierungslogik als {{jsxref("Classes/static", "statische")}} Eigenschaften, wie zum Beispiel die Verwendung von `try...catch` oder das Setzen mehrerer Felder aus einem einzigen Wert. Die Initialisierung erfolgt im Kontext der aktuellen Klassendeklaration mit Zugriff auf privaten Status, was es der Klasse ermöglicht, Informationen ihrer privaten Eigenschaften mit anderen Klassen oder Funktionen zu teilen, die im gleichen Bereich deklariert sind (analog zu "Freund"-Klassen in C++).

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

Ohne statische Initialisierungsblöcke könnte eine komplexe statische Initialisierung erreicht werden, indem eine statische Methode nach der Klassendeklaration aufgerufen wird:

```js
class MyClass {
  static init() {
    // Zugriff auf private statische Felder ist hier erlaubt
  }
}

MyClass.init();
```

Jedoch enthüllt dieser Ansatz ein Implementierungsdetail (die `init()`-Methode) dem Benutzer der Klasse. Andererseits hat jede außerhalb der Klasse deklarierte Initialisierungslogik keinen Zugriff auf private statische Felder. Statische Initialisierungsblöcke ermöglichen es, beliebige Initialisierungslogik innerhalb der Klasse zu deklarieren und während der Klassenauswertung auszuführen.

Eine {{jsxref("Statements/class", "Klasse")}} kann eine beliebige Anzahl von `static {}` Initialisierungsblöcken in ihrem Klassenkörper haben. Diese werden [ausgewertet](/de/docs/Web/JavaScript/Reference/Classes#evaluation_order), zusammen mit beliebig eingefügten statischen Feldinitialisierern, in der Reihenfolge, in der sie deklariert sind. Jede statische Initialisierung einer Super-Klasse wird zuerst durchgeführt, vor der ihrer Unterklassen.

Der Gültigkeitsbereich der in dem statischen Block deklarierten Variablen ist lokal auf den Block beschränkt. Dazu gehören `var`-, `function`-, `const`- und `let`-Deklarationen. `var`-Deklarationen werden nicht aus dem statischen Block gehoben.

```js
var y = "Äußeres y";

class A {
  static field = "Inneres y";
  static {
    // var y nur innerhalb des Blocks gehoben
    console.log(y); // undefined <-- nicht 'Äußeres y'

    var y = this.field;
  }
}

// var y im statischen Block definiert wird nicht
// außerhalb des Blocks gehoben
console.log(y); // 'Äußeres y'
```

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse. `super.property` kann verwendet werden, um auf statische Eigenschaften der Super-Klasse zuzugreifen. Beachten Sie jedoch, dass es ein Syntaxfehler ist, {{jsxref("Operators/super", "super()")}} in einem statischen Initialisierungsblock einer Klasse aufzurufen oder das {{jsxref("Functions/arguments", "arguments")}}-Objekt zu verwenden.

Die Anweisungen werden synchron ausgewertet. Sie können nicht {{jsxref("Operators/await", "await")}} oder {{jsxref("Operators/yield", "yield")}} in diesem Block verwenden. (Betrachten Sie die Initialisierungsanweisungen als implizit in eine Funktion gewrappt.)

Der Gültigkeitsbereich des statischen Blocks ist _innerhalb_ des lexikalischen Gültigkeitsbereichs des Klassenkörpers verschachtelt und kann auf [private Namen](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) zugreifen, die innerhalb der Klasse deklariert sind, ohne einen Syntaxfehler zu verursachen.

[Statische Feld](/de/docs/Web/JavaScript/Reference/Classes/static) Initialisierer und statische Initialisierungsblöcke werden nacheinander ausgewertet. Der Initialisierungsblock kann sich auf Feldwerte oberhalb davon beziehen, aber nicht darunter. Alle statischen Methoden werden im Voraus hinzugefügt und können zugegriffen werden, obwohl ihr Aufruf möglicherweise nicht wie erwartet funktioniert, wenn sie sich auf Felder unterhalb des aktuellen Blocks beziehen.

> [!NOTE]
> Dies ist bei [privaten statischen Feldern](/de/docs/Web/JavaScript/Reference/Classes/Private_properties) wichtiger, da der Zugriff auf ein nicht initialisiertes privates Feld einen {{jsxref("TypeError")}} wirft, selbst wenn das private Feld darunter deklariert ist. (Wenn das private Feld nicht deklariert ist, wäre es ein früher {{jsxref("SyntaxError")}}.)

Ein statischer Initialisierungsblock darf keine Dekoratoren haben (die Klasse selbst kann).

## Beispiele

### Mehrere Blöcke

Der untenstehende Code demonstriert eine Klasse mit statischen Initialisierungsblöcken und dazwischen eingefügten statischen Feldinitialisierern. Die Ausgabe zeigt, dass die Blöcke und Felder in Ausführungsreihenfolge ausgewertet werden.

```js
class MyClass {
  static field1 = console.log("statisches Feld1");
  static {
    console.log("statischer Block1");
  }
  static field2 = console.log("statisches Feld2");
  static {
    console.log("statischer Block2");
  }
}
// 'statisches Feld1'
// 'statischer Block1'
// 'statisches Feld2'
// 'statischer Block2'
```

Beachten Sie, dass jede statische Initialisierung einer Superklasse zuerst durchgeführt wird, vor der ihrer Unterklassen.

### Verwendung von this und super

Das `this` innerhalb eines statischen Blocks bezieht sich auf das Konstruktorobjekt der Klasse. Dieser Code zeigt, wie auf ein öffentliches statisches Feld zugegriffen wird.

```js
class A {
  static field = "statisches Feld";
  static {
    console.log(this.field);
  }
}
// 'statisches Feld'
```

Der [`super.property`](/de/docs/Web/JavaScript/Reference/Operators/super) Syntax kann innerhalb eines `static` Blocks verwendet werden, um auf statische Eigenschaften einer Super-Klasse zu verweisen.

```js
class A {
  static field = "statisches Feld";
}

class B extends A {
  static {
    console.log(super.field);
  }
}
// 'statisches Feld'
```

### Zugriff auf private Eigenschaften

Dieses Beispiel unten zeigt, wie Zugang zu einem privaten Instanzfeld einer Klasse von einem Objekt außerhalb der Klasse gewährt werden kann (Beispiel aus dem [v8.dev Blog](https://v8.dev/features/class-static-initializer-blocks#access-to-private-fields)):

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

console.log(getDPrivateField(new D("privat"))); // 'privat'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Klassen](/de/docs/Web/JavaScript/Guide/Using_classes) Anleitung
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Classes/static", "static")}}
- {{jsxref("Statements/class", "class")}}
- [Klassen statische Initialisierungsblöcke](https://v8.dev/features/class-static-initializer-blocks) auf v8.dev (2021)
- [ES2022-Funktion: Klassen statische Initialisierungsblöcke](https://2ality.com/2021/09/class-static-block.html) von Dr. Axel Rauschmayer (2021)
