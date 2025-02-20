---
title: class
slug: Web/JavaScript/Reference/Statements/class
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jsSidebar("Statements")}}

Die **`class`**-Deklaration erstellt eine {{Glossary("binding", "Bindung")}} einer neuen [Klasse](/de/docs/Web/JavaScript/Reference/Classes) an einen gegebenen Namen.

Sie können Klassen auch mithilfe des [`class` expression](/de/docs/Web/JavaScript/Reference/Operators/class) definieren.

{{InteractiveExample("JavaScript Demo: Statement - Class")}}

```js interactive-example
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}

console.log(new Polygon(4, 3).area);
// Expected output: 12
```

## Syntax

```js-nolint
class name {
  // class body
}
class name extends otherName {
  // class body
}
```

## Beschreibung

Der Klassenkörper einer Klassendeklaration wird im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode) ausgeführt. Die `class`-Deklaration ist der {{jsxref("Statements/let", "let")}}-Deklaration sehr ähnlich:

- `class`-Deklarationen sind sowohl an Blöcke als auch an Funktionen gebunden.
- `class`-Deklarationen können erst nach der Deklarationsstelle verwendet werden (siehe [temporal dead zone](/de/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)). Aus diesem Grund gelten `class`-Deklarationen allgemein als {{Glossary("Hoisting", "nicht gehoben")}} (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen erstellen keine Eigenschaften auf {{jsxref("globalThis")}}, wenn sie im obersten Bereich eines Skripts deklariert werden (im Gegensatz zu [Funktionsdeklarationen](/de/docs/Web/JavaScript/Reference/Statements/function)).
- `class`-Deklarationen können innerhalb desselben Bereichs nicht durch eine andere Deklaration [erneut deklariert](/de/docs/Web/JavaScript/Reference/Statements/let#redeclarations) werden.

Außerhalb des Klassenkörpers können `class`-Deklarationen wie `let` neu zugewiesen werden, jedoch sollte dies vermieden werden. Innerhalb des Klassenkörpers ist die Bindung wie `const` konstant.

```js
class Foo {
  static {
    Foo = 1; // TypeError: Assignment to constant variable.
  }
}

class Foo2 {
  bar = (Foo2 = 1); // TypeError: Assignment to constant variable.
}

class Foo3 {}
Foo3 = 1;
console.log(Foo3); // 1
```

## Beispiele

### Eine Klassendeklaration

Im folgenden Beispiel definieren wir zuerst eine Klasse namens `Rectangle` und erweitern sie anschließend, um eine Klasse namens `FilledRectangle` zu erstellen.

Beachten Sie, dass `super()`, das im `constructor` verwendet wird, nur in Konstruktoren verwendet werden kann und _vor_ der Verwendung des `this`-Schlüsselworts _aufgerufen werden muss_.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
}

class FilledRectangle extends Rectangle {
  constructor(height, width, color) {
    super(height, width);
    this.name = "Filled rectangle";
    this.color = color;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`function`](/de/docs/Web/JavaScript/Reference/Statements/function)
- [`class` expression](/de/docs/Web/JavaScript/Reference/Operators/class)
- [Klassen](/de/docs/Web/JavaScript/Reference/Classes)
